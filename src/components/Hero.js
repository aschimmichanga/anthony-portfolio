import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#0a1410] via-[#0d1912] to-[#0a0f0a] text-white p-8 lg:p-12 flex flex-col justify-between overflow-hidden relative">
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
          <p className="text-emerald-400/60 text-xs uppercase tracking-wider mb-6 font-medium flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Anthony Luong — Product Designer
            <span className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Available for Work
            </span>
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
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <Link 
            to="/resume"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            View Resume
          </Link>
          <a 
            href="mailto:anthony.luong@example.com"
            className="px-5 py-2.5 bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Social Links & Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 relative z-10"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-emerald-500 to-transparent mb-8 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        
        {/* Social Links */}
        <div className="mb-8">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">Connect</p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/anthonyluong" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-300 transition-all duration-300 text-sm group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="group-hover:translate-x-1 inline-block transition-transform">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/anthonyluong" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-300 transition-all duration-300 text-sm group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:translate-x-1 inline-block transition-transform">GitHub</span>
            </a>
            <a 
              href="https://dribbble.com/anthonyluong" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-300 transition-all duration-300 text-sm group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
              <span className="group-hover:translate-x-1 inline-block transition-transform">Dribbble</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
