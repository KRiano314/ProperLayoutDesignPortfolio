import React from 'react';

export default function Header() {
  // Define clean display labels paired with target element IDs
  const navigationLinks = [
    { label: 'About Me', id: 'about-me' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume',  id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    // Explicit white background prevents underlying content from showing through on scroll
    <nav className="sticky" style={{ 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #f3f4f6',
      width: '100%',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="section" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 0',
        maxWidth: '1200px', // Standard container guardrails
        margin: '0 auto'
      }}>
        {/* Main Logo / Identity */}
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#111827',
          letterSpacing: '-0.025em',
          cursor: 'pointer'
        }}>
          Kelsey Riano
        </div>

        {/* Navigation Actions */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navigationLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,            // Increased thickness from thin/generic
                color: '#4b5563',           // Premium slate gray instead of default HTML blue
                textDecoration: 'none',     // Eliminates default underlines
                textTransform: 'uppercase', // Clean, professional look
                letterSpacing: '0.05em',    // Adds high-end layout breathing room
                transition: 'all 0.2s ease-in-out',
                padding: '8px 4px'
              }}
              onMouseEnter={e => {
                e.target.style.color = 'var(--primary, #2563eb)'; // Uses fallback blue if primary isn't declared
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#4b5563';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
