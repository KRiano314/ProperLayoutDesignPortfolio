// Footer.js
import React from "react";
import './Footer.css';

export default function Footer({ contactRef }) {
  return (
    <footer ref={contactRef} className="footer">
      <div className="footer-content">
        <h3>Get in Touch</h3>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>

        <div className="footer-links">
          <a href="mailto:kelseyriano8@gmail.com">kelseyriano8@gmail.com</a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/KRiano314?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kelsey Riano — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

