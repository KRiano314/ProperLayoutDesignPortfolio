import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HrefButtons from "./Buttons";
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import SlidingImageReveal from "./Effects.js";

import React, { useEffect, useRef } from "react";

function AppWrapper() {
  const location = useLocation();
  const rippleInterval = useRef(null);

  useEffect(() => {
    // Clear previous interval if any
    if (rippleInterval.current) {
      clearInterval(rippleInterval.current);
      rippleInterval.current = null;
    }

    if (location.pathname === "/") {
      try {
        if (window.$ && typeof window.$.fn.ripples === "function") {
          // Initialize ripples
          window.$(".MainHeader").ripples({
            resolution: 512,
            dropRadius: 15,
            perturbance: 1,
            interactive: true,
          });

          // Start periodic ripple drops
          rippleInterval.current = setInterval(() => {
            const $el = window.$(".MainHeader");
            if ($el.length) {
              const x = Math.random() * $el.outerWidth();
              const y = Math.random() * $el.outerHeight();
              const dropRadius = 15;
              const strength = 0.09 + Math.random() * 0.2 ;

              $el.ripples('drop', x, y, dropRadius, strength);
            }
          }, 500);
        } else {
          console.warn("Ripples plugin not loaded.");
        }
      } catch (e) {
        console.error("Ripples initialization failed:", e);
      }
    }

    // Cleanup on route change or unmount
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
        <header className="MainHeader">
          <HrefButtons />
          <div className="IntroText">
            <p>Hello, I'm</p>
            <h1>Kelsey Riano</h1>
            <span>AND THIS IS MY RESUME</span>
          </div>
        </header>
      )}

      <main>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <div className="ProjPreview">
          <div className="ProjLColumn">
            <div className="Proj1">
              <SlidingImageReveal />
            </div>
            <div className="Proj2">
              <h3>Cook Time</h3>
              <h3>15 Mins</h3>
            </div>
          </div>
          <div className="ProjRColumn">
            <div className="Proj3">
              <h3>Total Time</h3>
              <h3>25 Mins</h3>
            </div>
            <div className="Proj4">
              <h3>Servings</h3>
              <h3>4</h3>
            </div>
          </div>
        </div>
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
