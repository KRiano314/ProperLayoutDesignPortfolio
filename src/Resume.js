import './Resume.css';

function Resume({ resumeRef }) {
  return (
    <section className="resume-section" ref={resumeRef}>
      <h2>Resume</h2>

      <div className="resume-summary">
        <h3>Freelance WordPress Developer</h3>
        <p><strong>Shojiki Trading</strong> — Sept 2022 to Present</p>
        <p>Developed responsive web applications using React, integrated APIs, and optimized performance.</p>
        <a
          href="https://shojikitrading.com"
          target="_blank"
          rel="noopener noreferrer"
          className="company-website-btn"
        >
          Visit ShojikiTrading.com
        </a>
      </div>

      <a
        href="\Kelsey_Riano_VisualCV_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download-resume-btn"
      >
        Download Full Resume (PDF)
      </a>
    </section>
  );
}

export default Resume;
