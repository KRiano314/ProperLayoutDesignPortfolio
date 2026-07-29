import React from 'react';

const Contact = () => (
  <section id="contact" className="section">
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: 16 }}>Get in Touch</h2>
      <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: 32 }}>
        I'm currently open to new opportunities, collaborations, and interesting projects.
      </p>

      <a 
        href="mailto:kelseyriano8@gmail.com" 
        className="btn"
        style={{ fontSize: '1.1rem', padding: '16px 40px' }}
      >
        Send me an Email
      </a>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <a 
          href="https://www.linkedin.com/in/kelseymartinezriano" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#334155', fontWeight: 500 }}
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/KRiano314" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#334155', fontWeight: 500 }}
        >
          GitHub
        </a>
        <a 
          href="mailto:kelseyriano8@gmail.com" 
          style={{ color: '#334155', fontWeight: 500 }}
        >
          Email
        </a>
      </div>
    </div>
  </section>
);

export default Contact;