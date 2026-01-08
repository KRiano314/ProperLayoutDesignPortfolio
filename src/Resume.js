"use client"

import "./Resume.css"

function Resume({ resumeRef }) {
  return (
    <section className="resume-section" ref={resumeRef}>
      <h2>Resume</h2>

      <h3 className="work-experience-title">Work Experience</h3>

      <div className="resume-summary">
        <h3>Freelance WordPress Developer</h3>
        <p>
          <strong>Shojiki Trading</strong> — Sept 2022 to Present
        </p>
        <p>
          Developed responsive web applications using WordPress and Elementor. Created custom themes, implemented SEO
          optimization, and maintained website performance. Collaborated with clients to deliver tailored solutions for
          business requirements.
        </p>

        {/* ✅ External link to ShojikiTrading.com */}
        <a href="https://shojikitrading.page.gd/" target="_blank" rel="noopener noreferrer" className="company-website-btn">
          Visit shojikitrading.page.gd
        </a>
      </div>

      {/* ✅ Resume download from public folder */}
        <div>
            <button
            
             className="cyber-button bg-yellow fg-green"
              
            onClick={() => window.open("public/Kelsey_M_Riano_Resume.pdf", "_blank")}
              
             >
            
            Download Resume
              
            <span className="glitchtext">D0wnl0@d PDF</span>
              
              
             </button>
        </div>
    </section>
  )
}

export default Resume
