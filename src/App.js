import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HrefButtons from "./Buttons";
import ProjectsPreview from "./ProjectPreview.js";
import AboutMe from "./AboutMe.js";
import React, { useEffect, useRef } from "react";
import Resume from "./Resume.js";
import Footer from "./Footer.js";


function AppWrapper() {
  const location = useLocation();
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

    {location.pathname === "/" && (
      <>
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
      </>
    )}
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
