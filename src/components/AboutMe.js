import React from 'react';

// Custom component to transform raw strings into beautiful modern category layouts
const SkillCategory = ({ title, items }) => (
  <div style={{ marginBottom: '24px' }}>
    <h4 style={{ 
      fontSize: '0.9rem', 
      textTransform: 'uppercase', 
      letterSpacing: '0.05em', 
      color: '#475569', 
      margin: '0 0 10px 0',
      fontWeight: 600
    }}>
      {title}
    </h4>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {items.map((item, idx) => (
        <span key={idx} style={{
          backgroundColor: '#f1f5f9',
          color: '#1e293b',
          padding: '6px 12px',
          borderRadius: '6px',
          fontSize: '0.9rem',
          fontWeight: 500,
          border: '1px solid #e2e8f0'
        }}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function AboutMe() {
  return (
    <section id="about-me" style={{
      padding: '80px 0',
      backgroundColor: '#ffffff',
      width: '100%',
      borderBottom: '1px solid #f3f4f6'
    }}>
      
      {/* 
        INNER CONTAINER: 
        Acts as a safety cushion to guarantee margins on both the left 
        and right sides, stopping text clipping bugs completely.
      */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',       // Provides a robust 40px barrier on the outer walls
        boxSizing: 'border-box'   // Forces padding math to stay inside the canvas boundaries
      }}>
        
        {/* 2-Column Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2.5fr', // Left column anchors header, Right column hosts content
          gap: '64px',
          alignItems: 'start'
        }}>
          
          {/* LEFT COLUMN: Fixed-tracking Anchor Header */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              color: '#0f172a',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              About<br />Me.
            </h2>
          </div>

          {/* RIGHT COLUMN: Summary and Technical Breakdown */}
          <div>
            {/* ---------- SUMMARY ---------- */}
            <p style={p}>
              Hi, I’m <strong style={{ color: '#0f172a' }}>Kelsey Riano</strong> — a <strong>B.S. Computer Engineering</strong>{' '}
              graduate (Technological Institute of the Philippines – Manila, 
              <em> 25 April 2026</em>). I build at the intersection of modern
              frontend, edge-AI, and embedded automation.
            </p>

            <p style={p}>
              Recent highlights include my capstone&nbsp;<strong style={{ color: '#2563eb' }}>AvoSort</strong>{' '}
              (dual-vision optical sorter running quantized YOLO on Raspberry Pi 5),
              an internship at <strong>Twireless Inc.</strong> (enterprise workstation &
              network diagnostics), and leading a 35k-file industrial WordPress
              ecosystem as a freelance developer.
            </p>

            {/* ---------- TECHNICAL SKILLS ---------- */}
            <h3 style={h3}>Technical Capabilities</h3>
            
            <SkillCategory title="Edge-AI & Data Science" items={['YOLO v8/v11', 'ONNX Runtime', 'Embedded CV', 'Model Quantization', 'Data Pipelines']} />
            <SkillCategory title="Hardware & CAD Modeling" items={['Autodesk Fusion 360', 'Electrical Schematics', '24V Power Systems', 'Solar Integration', 'Raspberry Pi 5', 'Arduino', 'ESP32']} />
            <SkillCategory title="Software & Databases" items={['Python', 'JavaScript / TypeScript', 'C++', 'React 19', 'Node.js', 'Django', 'SQL']} />
            <SkillCategory title="Workflow & Engineering Tools" items={['Git', 'GitHub Actions', 'AI-assisted Dev (Cursor / Copilot)', 'CI/CD', 'Code Auditing']} />
            <SkillCategory title="Network Infrastructure" items={['Cisco CCNAv7', 'Routing & Switching', 'Network Defense', 'Endpoint Security']} />

            {/* ---------- CERTIFICATIONS & METHODOLOGIES ---------- */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '40px' }}>
              
              <div>
                <h3 style={{ ...h3, margin: '0 0 16px 0' }}>Certifications</h3>
                <ul style={listStyle}>
                  <li style={liStyle}>
                    <strong style={{ color: '#0f172a' }}>AWS Certified Solutions Architect – Associate (SAA-C03)</strong>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>In progress (Target Q4 2026)</div>
                  </li>
                  <li style={liStyle}>
                    <strong style={{ color: '#0f172a' }}>Cisco Systems</strong>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>CCNAv7, Endpoint Security, Network Defense</div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ ...h3, margin: '0 0 16px 0' }}>Core Focus Areas</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Critical Thinking', 'Technical Problem-Solving', 'Project Leadership', 'Cross-Functional Communication'].map((skill, i) => (
                    <span key={i} style={{ fontSize: '0.85rem', color: '#475569', backgroundColor: '#f8fafc', padding: '6px 12px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                      • {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* ---------- CAREER GOAL ---------- */}
            <p style={{ ...p, marginTop: 48, borderLeft: '4px solid #2563eb', paddingLeft: '20px', fontStyle: 'italic' }}>
              I’m actively seeking full-time opportunities where I can apply this
              hybrid skill set, keep learning fast, and help ship products that matter.
            </p>
          </div>

        </div> {/* End Grid */}
      </div> {/* End Inner Container Cushion */}
    </section>
  );
}

/* ---------- refined inline styles ---------- */
const p = { color: '#334155', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '24px' };
const h3 = { fontSize: '1.5rem', fontWeight: 700, margin: '40px 0 20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' };
const listStyle = { margin: 0, padding: 0, listStyleType: 'none' };
const liStyle = { marginBottom: '16px', fontSize: '0.95rem', color: '#334155', lineHeight: '1.5' };
