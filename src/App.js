import React from 'react';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Fixed Left Sidebar */}
      <div className="w-full lg:w-2/5 xl:w-1/3 fixed lg:sticky top-0 h-screen overflow-hidden">
        <Hero />
      </div>
      
      {/* Right Content - Scrollable */}
      <div className="w-full lg:w-3/5 xl:w-2/3 lg:ml-auto">
        <CaseStudies />
      </div>
    </div>
  );
}

export default App;
