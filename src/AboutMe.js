import PlaceHolderImage from './PlaceHolderImage.avif';
import './AboutMe.css';

function AboutMe({ aboutRef }) {
  return (
    <section id="about-me" ref={aboutRef} className="about-section">
      <div className="about-content">
        {/* Left Section (Image) */}
        <div className="about-left">
          <img
            src={PlaceHolderImage}
            alt="Portrait of Kelsey"
          />
        </div>

        {/* Right Section (Text) */}
        <div className="about-right">
          <h2>&lt;ABOUT_ME/&gt;</h2>
          <p>
            Hi, I’m <span className="highlight-cyan">Kelsey</span> — a 4th-year Computer Engineering student at TIP Manila.
            I enjoy working at the intersection of <span className="highlight-purple">software and hardware</span>, with a particular interest in
            <span className="highlight-pink"> frontend development</span>, <span className="highlight-pink">machine learning</span>, and <span className="highlight-pink">automation</span>.
          </p>
          <p>
            I build responsive web interfaces using <span className="highlight-green">React</span> and <span className="highlight-green">JavaScript</span>,
            and create smart systems using <span className="highlight-yellow">Python</span>, <span className="highlight-yellow">Arduino</span>, and <span className="highlight-yellow">ESP32</span>.
          </p>
          <p>
            I'm currently looking for opportunities where I can <span className="highlight-cyan">apply my skills</span>, <span className="highlight-cyan">grow as a developer</span>,
            and <span className="highlight-cyan">contribute to impactful projects</span>.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
        {/* Skills + Stats Grid */}
        <div className="skill-stat-wrapper">
          {/* LEFT: Skills */}
          <div className="skills-section">
            <h3>Skills</h3>
            <ul>
              <li><strong>Languages:</strong> Python, JavaScript, C/C++</li>
              <li><strong>Frontend:</strong> React, HTML, CSS, Tailwind</li>
              <li><strong>Backend:</strong> Node.js, Express</li>
              <li><strong>Databases:</strong> Firebase, MongoDB</li>
            </ul>
          </div>
        
          {/* RIGHT: Stats */}
          <div className="stats-section">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Prototypes Built</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Smart Systems Created</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Web Projects Completed</p>
            </div>
          </div>
        </div>

    </section>
  );
}

export default AboutMe;
