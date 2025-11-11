import React from 'react';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0a] flex relative overflow-hidden">
      {/* Animated green background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] green-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] green-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-teal-500/5 rounded-full blur-[100px] green-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Fixed Left Sidebar */}
      <div className="w-full lg:w-2/5 xl:w-1/3 fixed lg:sticky top-0 h-screen overflow-hidden relative z-10">
        <Hero />
      </div>
      
      {/* Right Content - Scrollable */}
      <div className="w-full lg:w-3/5 xl:w-2/3 lg:ml-auto relative z-10">
        <CaseStudies />
      </div>
    </div>
  );
}

export default App;
