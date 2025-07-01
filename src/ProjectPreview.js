"use client"

import { forwardRef, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import "./Projects.css"

const projects = [
  {
    title: "WordPress Website Contract",
    description:
      "1-year freelance project creating and maintaining a responsive business website with SEO and custom features.",
    tech: "WordPress · PHP · Elementor",
    variant: "hiddenLeft",
    image: "/ShojikiTrading.png",
  },
  {
    title: "Smart Trash Segregator",
    description: "Arduino-based system that uses sensors to separate wet and dry waste with a servo-powered bin.",
    tech: "Arduino · C++ · IR & Capacitive",
    variant: "hiddenRight",
    image: "/JAOBIN.jpg",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This site — built in React to showcase my projects, skills, and ongoing work in frontend and automation.",
    tech: "React · JavaScript · Framer Motion",
    variant: "hiddenBottom",
    image: "/Portfolio.png",
  },
  {
    title: "YOLO/Roboflow Object Detection (Ongoing)",
    description:
      "Building a real-time detection system using camera feeds and machine learning for automation and analysis.",
    tech: "Python · OpenCV · Roboflow · YOLOv8",
    variant: "hiddenTop",
    image: "/Roboflow.png",
  },
]

const ProjectsPreview = forwardRef(function ProjectsPreview(props, externalRef) {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [openCards, setOpenCards] = useState(Array(projects.length).fill(false))
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Load the cyber glitch CSS
  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "/fonts/cyber-glitch.css"
    document.head.appendChild(link)

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  function toggleCard(index) {
    setOpenCards((prev) => prev.map((val, i) => (i === index ? !val : val)))
  }

  function setRefs(el) {
    inViewRef(el)
    if (externalRef) externalRef.current = el
  }

  return (
    <section className="projects-section" ref={setRefs}>
      <h2 className="projects-title cyber-glitch-4">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const slideX = index % 2 === 0 ? -430 : 430
          const isOpen = openCards[index]

          const initialX = project.variant === "hiddenLeft" ? -100 : project.variant === "hiddenRight" ? 100 : 0
          const initialY = project.variant === "hiddenTop" ? -100 : project.variant === "hiddenBottom" ? 100 : 0

          return (
            <div key={index} className={`project-wrapper ${isOpen && isMobile ? "flipped" : ""}`}>
              {project.image && (
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                </div>
              )}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, x: initialX, y: initialY }}
                animate={{
                  opacity: inView ? 1 : 0,
                  x: isMobile ? 0 : isOpen ? slideX : 0,
                  y: 0,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 14 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleCard(index)}
                style={{
                  // Disable Framer Motion transforms on mobile to allow CSS 3D transforms
                  transform: isMobile && isOpen ? "none" : undefined,
                }}
              >
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech}</p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
})

export default ProjectsPreview
