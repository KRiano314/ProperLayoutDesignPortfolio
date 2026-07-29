
import { useNavigate } from "react-router-dom";

function HrefButtons2({ scrollToAbout }) {
  const navigate = useNavigate();

  return (
    <nav className="Navbar">
      <ul>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/Resume")}>Resume</button>
        <button onClick={scrollToAbout}>Projects</button>
        <button onClick={() => navigate("/Contact")}>Contact Me</button>
      </ul>
    </nav>
  );
}


export default HrefButtons2;