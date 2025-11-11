import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#0a1410] via-[#0d1912] to-[#0a0f0a] text-white p-8 lg:p-12 flex flex-col justify-between overflow-y-auto relative">
      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-green-900/10 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mb-16"
        >
          <p className="text-emerald-400/60 text-xs uppercase tracking-wider mb-6 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Anthony Luong — Product Designer
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Hello! 
            <span className="inline-flex items-center ml-3">
              <motion.svg 
                width="52" 
                height="52" 
                viewBox="0 0 52 52" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="drop-shadow-[0_0_20px_rgba(16,185,129,0.7)] cursor-pointer"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 45,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Sparkle/Star shape */}
                <motion.path
                  d="M26 2 L28 24 L50 26 L28 28 L26 50 L24 28 L2 26 L24 24 Z"
                  fill="url(#sparkleGradient)"
                  animate={{
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Inner glow */}
                <motion.circle 
                  cx="26" 
                  cy="26" 
                  r="8" 
                  fill="url(#glowGradient)"
                  animate={{
                    r: [6, 10, 6],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <defs>
                  <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#6ee7b7" />
                  </linearGradient>
                  <radialGradient id="glowGradient">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                  </radialGradient>
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
          className="space-y-7 text-gray-300 leading-[1.8] text-lg"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, letterSpacing: '-0.01em' }}
        >
          <p className="text-[16px] lg:text-[18px]">
            I am a product designer and founder specializing in <span className="text-emerald-300 font-semibold">cutting edge AI applications</span>.
          </p>
          
          <p className="text-[16px] lg:text-[18px]">
            I've built consumer and enterprise-facing systems from the ground up for startups and nonprofits across <span className="text-emerald-300 font-semibold">AI, real estate, blockchain, and other industries</span>, designing for both mobile and desktop.
          </p>
          
          <p className="text-[16px] lg:text-[18px]">
            As a former VC-backed startup founder, I bring strong business acumen and hands-on experience in turning ideas and features into <span className="text-emerald-300 font-semibold">real-world products that users love</span>.
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
        <div className="h-px w-12 bg-gradient-to-r from-emerald-500 to-transparent mb-8 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        <a 
          href="#other-projects" 
          className="block text-gray-400 hover:text-emerald-300 transition-all duration-300 text-sm group"
        >
          <span className="group-hover:translate-x-1 inline-block transition-transform">Other Notable Projects →</span>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-400 hover:text-emerald-300 transition-all duration-300 text-sm group"
        >
          <span className="group-hover:translate-x-1 inline-block transition-transform">LinkedIn →</span>
        </a>
        <a 
          href="mailto:contact@example.com"
          className="block text-gray-400 hover:text-emerald-300 transition-all duration-300 text-sm group"
        >
          <span className="group-hover:translate-x-1 inline-block transition-transform">Contact me →</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
