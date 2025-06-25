import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HrefButtons from "./Buttons";
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

function AppWrapper() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Only render the full header (with nav and intro) on the landing page */}
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

      {/* Main content (pages) */}
      <main>
        <Routes>
          <Route path="/" element={null} />
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
