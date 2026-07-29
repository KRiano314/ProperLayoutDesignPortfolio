
function HrefButtons({ 
  scrollToProjects, 
  scrollToAbout, 
  scrollToResume, 
  scrollToTop, 
  scrollToContact 
}) {

  return (
    <nav className="Navbar">
      <ul>
        <button onClick={scrollToTop}>Home</button>
        <button onClick={scrollToAbout}>About Me</button>
        <button onClick={scrollToProjects}>Projects</button>
        <button onClick={scrollToResume}>Resume</button>
        <button onClick={scrollToContact}>Contact Me</button>
      </ul>
    </nav>
  );
}

export default HrefButtons;
