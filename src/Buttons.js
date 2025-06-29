import './App.css';
import { useNavigate, useLocation } from "react-router-dom";

function HrefButtons({ scrollToProjects, scrollToAbout, scrollToResume, scrollToTop, scrollToContact }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const handleProjectsClick = () => {
    if (location.pathname === "/") {
      scrollToProjects();
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToProjects();
      }, 100);
    }
  };

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      scrollToAbout();
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToAbout();
      }, 100);
    }
  };

  const handleResumeClick = () => {
    if (location.pathname === "/") {
      scrollToResume();
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToResume();
      }, 100);
    }
  };

  const handleContactsClick = () => {
    if (location.pathname === "/") {
      scrollToContact();
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToContact();
      }, 100);
    }
  };

  return (
    <nav className="Navbar">
      <ul>
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleAboutClick}>About Me</button>
        <button onClick={handleProjectsClick}>Projects</button>
        <button onClick={handleResumeClick}>Resume</button>
        <button onClick={handleContactsClick}>Contact Me</button>
      </ul>
    </nav>
  );
}

export default HrefButtons;
