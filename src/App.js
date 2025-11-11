import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import BambuLabCaseStudy from './components/BambuLabCaseStudy';
import ResumePage from './components/ResumePage';

// Home Page Wrapper with title
const HomePage = () => {
  useEffect(() => {
    document.title = 'Anthony Luong - Product Designer';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f0a] relative overflow-hidden">
      {/* Animated green background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] green-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] green-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-teal-500/5 rounded-full blur-[100px] green-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* Fixed Left Sidebar */}
        <div className="w-full lg:w-2/5 xl:w-1/3 lg:fixed lg:top-0 lg:left-0 lg:h-screen overflow-hidden relative z-10">
          <Hero />
        </div>
        
        {/* Spacer to prevent content from going under fixed sidebar */}
        <div className="hidden lg:block lg:w-2/5 xl:w-1/3 flex-shrink-0"></div>
        
        {/* Right Content - Scrollable */}
        <div className="w-full lg:w-3/5 xl:w-2/3 relative z-10">
          <CaseStudies />
        </div>
      </div>
    </div>
  );
};

// Bambu Lab Case Study Wrapper with title
const BambuLabPage = () => {
  useEffect(() => {
    document.title = 'Bambu Lab Case Study - Anthony Luong';
  }, []);

  return <BambuLabCaseStudy />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Case Study Pages */}
        <Route path="/case-studies/bambu-lab" element={<BambuLabPage />} />
        
        {/* Resume Page */}
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
