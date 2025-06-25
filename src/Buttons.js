import './App.css';
import { useNavigate } from "react-router-dom";

function HrefButtons() {
    const navigate = useNavigate();
    return(
        <nav className="Navbar">
            <ul>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/Resume")}>Resume</button>
                <button onClick={() => navigate("/Projects")}>Projects</button>
                <button onClick={() => navigate("/Contact")}>Contact Me</button>
            </ul>
        </nav>

    );


}

export default HrefButtons;