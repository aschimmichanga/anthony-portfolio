import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0a0a0f] text-white p-8 lg:p-12 flex flex-col justify-between overflow-y-auto relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mb-16"
        >
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-6 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Anthony Luong — Product Designer
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Hello! 
            <span className="inline-flex items-center ml-3">
              <motion.svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <circle cx="24" cy="24" r="20" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="24" r="10" fill="url(#gradient)"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="space-y-6 text-gray-400 leading-relaxed text-base"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            I am a product designer and founder specializing in <span className="text-white font-medium">cutting edge AI applications</span>.
          </p>
          
          <p>
            I've built consumer and enterprise-facing systems from the ground up for startups and nonprofits across <span className="text-white font-medium">AI, real estate, blockchain, and other industries</span>, designing for both mobile and desktop.
          </p>
          
          <p>
            As a former VC-backed startup founder, I bring strong business acumen and hands-on experience in turning ideas and features into <span className="text-white font-medium">real-world products that users love</span>.
          </p>
        </motion.div>
      </div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 space-y-6 relative z-10"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent mb-8"></div>
        <a 
          href="#other-projects" 
          className="block text-gray-400 hover:text-white transition-all duration-300 text-sm group"
        >
          <span className="group-hover:translate-x-1 inline-block transition-transform">Other Notable Projects →</span>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-400 hover:text-white transition-all duration-300 text-sm group"
        >
          <span className="group-hover:translate-x-1 inline-block transition-transform">LinkedIn →</span>
        </a>
        <a 
          href="mailto:contact@example.com"
          className="block text-gray-400 hover:text-white transition-all duration-300 text-sm group"
        >
          <span className="group-hover:translate-x-1 inline-block transition-transform">Contact me →</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
