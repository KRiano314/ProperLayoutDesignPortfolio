import "./App.css";
import HrefButtons from "./Buttons";
import ProjectsPreview from "./ProjectPreview.js";
import AboutMe from "./AboutMe.js";
import React, { useEffect, useRef } from "react";
import Resume from "./Resume.js";
import Footer from "./Footer.js";

function App() {
  const rippleInterval = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToResume = () => {
    if (resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (rippleInterval.current) {
      clearInterval(rippleInterval.current);
      rippleInterval.current = null;
    }

    // Always run the ripples on mount
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

    return () => {
      if (window.$ && window.$(".MainHeader").data("ripples")) {
        window.$(".MainHeader").ripples("destroy");
      }
      if (rippleInterval.current) {
        clearInterval(rippleInterval.current);
        rippleInterval.current = null;
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="NavbarFixed">
        <HrefButtons
          scrollToTop={scrollToTop}
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
          scrollToResume={scrollToResume}
          scrollToContact={scrollToContact}
        />
      </div>

      <header className="MainHeader">
        <div className="IntroText">
          <p>Hello, I'm</p>
          <h1>Kelsey Riano</h1>
          <span>Aspiring Frontend Developer | Enthusiast in Machine Learning & Automation Systems</span>
          <br />
          <button onClick={scrollToAbout}>Learn More</button>
        </div>
      </header>

      <AboutMe aboutRef={aboutRef} />
      <ProjectsPreview ref={projectsRef} />
      <Resume resumeRef={resumeRef} />
      <Footer contactRef={contactRef} />
    </div>
  );
}

export default App;
