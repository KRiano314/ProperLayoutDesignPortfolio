import React from 'react';

const Resume = () => (
  <section id="resume" className="section">
    <h2 style={{ fontSize: '2.5rem', marginBottom: 40 }}>Resume</h2>

    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Twireless Inc. */}
      <div className="card" style={{ padding: '32px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '12px' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '4px' }}>
            Twireless Inc.
          </h3>
          <p style={{ color: '#64748b', fontWeight: 500 }}>
            Computer Engineering Intern (OJT) • Jan 2026 – Mar 2026
          </p>
        </div>

        <ul style={{ color: '#475569', lineHeight: 1.75, paddingLeft: '20px' }}>
          <li>Provisioned enterprise hardware configurations and deployed standardized operating systems to streamline corporate workspace onboarding.</li>
          <li>Executed root-cause analysis on hardware and network issues, performed upgrades, and maintained systems to minimize operational downtime.</li>
        </ul>
      </div>

      {/* Shojiki Trading */}
      <div className="card" style={{ padding: '32px' }}>
        <div style={{ marginBottom: '12px' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '4px' }}>
            Shojiki Trading
          </h3>
          <p style={{ color: '#64748b', fontWeight: 500 }}>
            Lead Web Developer (Freelance) • Aug 2024 – Sep 2025
          </p>
        </div>

        <ul style={{ color: '#475569', lineHeight: 1.75, paddingLeft: '20px' }}>
          <li>Developed and maintained a full WordPress ecosystem for an industrial firm (35k+ files and SQL database).</li>
          <li>Integrated high-performance tools that reduced client overhead by 100%.</li>
          <li>Engineered custom JavaScript solutions to bridge functional gaps and ensure excellent responsive UX.</li>
        </ul>
      </div>

      {/* Download Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a 
          href="/CV_Riano_Kelsey_M.pdf" 
          target="_blank" 
          className="btn"
          style={{ fontSize: '1.05rem', padding: '14px 36px' }}
        >
          Download Full Resume (PDF)
        </a>
      </div>

    </div>
  </section>
);

export default Resume;