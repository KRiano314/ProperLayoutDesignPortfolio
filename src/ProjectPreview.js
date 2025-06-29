import React, { forwardRef } from "react";
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

const projects = [ 
  {
    title: "WordPress Website Contract",
    description: "1-year freelance project creating and maintaining a responsive business website with SEO and custom features.",
    tech: "WordPress · PHP · Elementor",
    variant: "hiddenLeft"
  },
  {
    title: "Smart Trash Segregator",
    description: "Arduino-based system that uses sensors to separate wet and dry waste with a servo-powered bin.",
    tech: "Arduino · C++ · IR & Moisture Sensors",
    variant: "hiddenRight"
  },
  {
    title: "Personal Portfolio Website",
    description: "This site — built in React to showcase my projects, skills, and ongoing work in frontend and automation.",
    tech: "React · JavaScript · Framer Motion",
    variant: "hiddenBottom"
  },
  {
    title: "YOLO/TensorFlow Object Detection (Ongoing)",
    description: "Building a real-time detection system using camera feeds and machine learning for automation and analysis.",
    tech: "Python · OpenCV · TensorFlow · YOLOv8",
    variant: "hiddenTop"
  }
 ];

const ProjectsPreview = forwardRef(function ProjectsPreview(props, externalRef) {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Merge the external ref and the intersection observer ref
  function setRefs(el) {
    inViewRef(el);
    if (externalRef) externalRef.current = el;
  }

  return (
    <section className="projects-section" ref={setRefs}>
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={variants}
              initial={variants[project.variant]}
              animate={inView ? "visible" : project.variant}
              exit={project.variant}
            >
              <h3>{project.title}</h3>
              <p style={{ fontSize: "1rem", fontWeight: "400", margin: "0.5rem 0", color: "#ccc" }}>{project.description}</p>
              <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#7dd3fc" }}>{project.tech}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default ProjectsPreview;
