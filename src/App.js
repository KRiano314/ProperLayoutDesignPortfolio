import "./App.css";
import HrefButtons from "./Buttons";
import ProjectsPreview from "./ProjectPreview.js";
import AboutMe from "./AboutMe.js";
import React, { useEffect, useRef, useState } from "react";
import Resume from "./Resume.js";
import Footer from "./Footer.js";
import { motion, AnimatePresence } from "framer-motion";
import Loading2 from "./Loading2.mp4";
import BigCart from "./BigCart.mp4";

function App() {
  const rippleInterval = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (rippleInterval.current) {
      clearInterval(rippleInterval.current);
      rippleInterval.current = null;
    }

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
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <video
              className="splash-video"
              autoPlay
              muted
              playsInline
              onEnded={() => setIsLoading(false)}
            >
              <source src={Loading2} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="App">
          <div className="NavbarFixed">
            <HrefButtons
              scrollToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
              scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
              scrollToResume={() => resumeRef.current?.scrollIntoView({ behavior: "smooth" })}
              scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>

          <header className="MainHeader">
            {/* ✅ Optimized background video with preload and poster */}
            <video
              className="background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/poster.jpg" // ✅ Replace with actual poster image path
            >
              <source src={BigCart} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="IntroText">
              <p>Hello, I'm</p>
              <h1>Kelsey Riano</h1>
              <span>Aspiring Frontend Developer | Enthusiast in Machine Learning & Automation Systems</span>
              <br />
              <button onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}>
                Learn More
              </button>
            </div>
          </header>

          <AboutMe aboutRef={aboutRef} />
          <ProjectsPreview ref={projectsRef} />
          <Resume resumeRef={resumeRef} />
          <Footer contactRef={contactRef} />
        </div>
      )}
    </>
  );
}

export default App;
