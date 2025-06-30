import './Resume.css';

function Resume({ resumeRef }) {
  return (
    <section className="resume-section" ref={resumeRef}>
      <h2>Resume</h2>

      <div className="resume-summary">
        <h3>Freelance WordPress Developer</h3>
        <p><strong>Shojiki Trading</strong> — Sept 2022 to Present</p>
        <p>Developed responsive web applications using Wordpress and Elementor.</p>

        {/* ✅ External link to ShojikiTrading.com */}
        <a
          href="https://shojikitrading.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="company-website-btn"
        >
          Visit ShojikiTrading.com
        </a>
      </div>

      {/* ✅ Resume download from public folder */}
      <div>
        <button
                className="cyber-button bg-yellow fg-green"
                onClick={() => window.open("/Kelsey_Riano_VisualCV_Resume.pdf", "_blank")}
              >
                Download Resume
                <span className="glitchtext">D0wnl0@d PDF</span>
                
              </button>

      </div>

    </section>
  );
}

export default Resume;
