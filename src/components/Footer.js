import React from 'react';

export default function Footer(){
  return(
    <footer style={{
      background:'#1e293b',
      color:'#cbd5e1',
      padding:'60px 24px',
      textAlign:'center',
      borderTop:'4px solid var(--primary)'  /* accent strip */
    }}>
      <p style={{margin:0,fontSize:'.95rem'}}>
        © {new Date().getFullYear()} Kelsey Riano. All rights reserved.
      </p>
    </footer>
  );
}