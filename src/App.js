import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;