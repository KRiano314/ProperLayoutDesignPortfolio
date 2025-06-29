import './Resume.css';

function Resume({ resumeRef }) {
  return (
    <section className="resume-section" ref={resumeRef}>
      <h2>Resume</h2>

      <div className="resume-summary">
        <h3>Frontend Developer</h3>
        <p><strong>Company Name</strong> — Jan 2022 to Present</p>
        <p>Developed responsive web applications using React, integrated APIs, and optimized performance.</p>

        <h3>Freelance WordPress Developer</h3>
        <p><strong>Freelance</strong> — 2021 to 2022</p>
        <p>Created and maintained business websites with custom plugins and SEO optimization.</p>
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
