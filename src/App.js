import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CaseStudies />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
