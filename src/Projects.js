import './App.css';
import './ProjectsPage.css'; // Create this separately
import HrefButtons2 from "./ButtonsOthers";

function Projects() {
  const projects = [
    {
      title: "WordPress Website Contract",
      description: "1-year freelance project creating and maintaining a responsive business website with SEO and custom features.",
      tech: ["WordPress", "PHP", "Elementor"],
      image: "/project1.jpg", // placeholder or real image
      github: null,
      live: null,
    },
    {
      title: "Smart Trash Segregator",
      description: "Arduino-based system that uses sensors to separate wet and dry waste with a servo-powered bin.",
      tech: ["Arduino", "C++", "IR Sensor", "Capacitive Sensor"],
      image: "/trash-seg.png",
      github: null,
      live: null,
    },
    {
      title: "Personal Portfolio Website",
      description: "Built in React to showcase my projects, skills, and ongoing work in frontend and automation.",
      tech: ["React", "JavaScript", "Framer Motion"],
      image: "/portfolio.png",
      github: "https://github.com/KRiano314/ProperLayoutDesignPortfolio",
      live: null,
    },
    {
      title: "YOLO/TensorFlow Object Detection (Ongoing)",
      description: "Real-time detection system using camera feeds and machine learning for automation and analysis.",
      tech: ["Python", "OpenCV", "TensorFlow", "YOLOv8"],
      image: "/yolo.png",
      github: null,
      live: null,
    },
  ];

  return (
    <>
      <header className="MainHeaderOthers">
        <HrefButtons2 />
      </header>
      <section className="projects-page">
        <h1 className="projects-page-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card-full">
              <img src={proj.image} alt={proj.title} className="project-img" />
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <div className="project-tags">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>}
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer">Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
