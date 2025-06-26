import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import './Projects.css';

const variants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenTop: { opacity: 0, y: -100 },
  hiddenBottom: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 14 }
  }
};

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // allows both enter and exit animation
  });

  return (
    <section className="projects-section" ref={ref}>
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        <AnimatePresence>
          <motion.div
            className="project-card"
            variants={variants}
            initial="hiddenLeft"
            animate={inView ? "visible" : "hiddenLeft"}
            exit="hiddenLeft"
          >
            Project 1
          </motion.div>
          <motion.div
            className="project-card"
            variants={variants}
            initial="hiddenRight"
            animate={inView ? "visible" : "hiddenRight"}
            exit="hiddenRight"
          >
            Project 2
          </motion.div>
          <motion.div
            className="project-card"
            variants={variants}
            initial="hiddenBottom"
            animate={inView ? "visible" : "hiddenBottom"}
            exit="hiddenBottom"
          >
            Project 3
          </motion.div>
          <motion.div
            className="project-card"
            variants={variants}
            initial="hiddenTop"
            animate={inView ? "visible" : "hiddenTop"}
            exit="hiddenTop"
          >
            Project 4
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
