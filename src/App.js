import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HrefButtons from "./Buttons";
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import SlidingImageReveal from "./Effects.js";
import ProjectsPreview from "./ProjectPreview.js";
import AboutMe from "./AboutMe.js";
import React, { useEffect, useRef } from "react";

function AppWrapper() {
  const location = useLocation();
  const rippleInterval = useRef(null);
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (rippleInterval.current) {
      clearInterval(rippleInterval.current);
      rippleInterval.current = null;
    }

    if (location.pathname === "/") {
      try {
        if (window.$ && typeof window.$.fn.ripples === "function") {
          window.$(".MainHeader").ripples({
            resolution: 1024,
            dropRadius: 50,
            perturbance: 1,
          });
        } else {
          console.warn("Ripples plugin not loaded.");
        }
      } catch (e) {
        console.error("Ripples initialization failed:", e);
      }
    }

    return () => {
      if (window.$ && window.$(".MainHeader").data("ripples")) {
        window.$(".MainHeader").ripples("destroy");
      }
      if (rippleInterval.current) {
        clearInterval(rippleInterval.current);
        rippleInterval.current = null;
      }
    };
  }, [location.pathname]);

  return (
    <div className="App">
      {location.pathname === "/" && (
        <>
          <header className="MainHeader">
            <HrefButtons />
            <div className="IntroText">
              <p>Hello, I'm</p>
              <h1>Kelsey Riano</h1>
              <span>Aspiring Frontend Developer | Enthusiast in Machine Learning & Automation Systems</span>
              <button onClick={scrollToAbout}>Learn More</button>
            </div>
          </header>

          <AboutMe aboutRef={aboutRef} />
          <ProjectsPreview />
        </>
      )}

      <main>
        <Routes>
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
