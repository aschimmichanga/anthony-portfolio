import React from 'react';
import { Button, Chip } from '@heroui/react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-brand-200/20 rounded-full blur-3xl"
          style={{ top: '10%', left: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"
          style={{ bottom: '10%', right: '10%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Chip 
            color="success" 
            variant="flat" 
            className="mb-6"
          >
            ✨ Open to new opportunities
          </Chip>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Designer, Builder,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-emerald-600">
            AI Enthusiast
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm Anthony, a product designer and co-founder who thrives in
          <span className="font-semibold text-brand-600"> greenfield environments</span>.
        </motion.p>

        <motion.p
          className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Currently building AI-powered housing solutions. I ship fast, iterate faster,
          and love turning ambitious ideas into reality.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            color="primary"
            size="lg"
            endContent={<FiArrowRight />}
            className="font-semibold"
            onClick={() => scrollToSection('work')}
          >
            View My Work
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="font-semibold border-brand-500 text-brand-500"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-brand-600 transition-colors"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-brand-600 transition-colors"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:anthony@example.com"
            className="text-gray-600 hover:text-brand-600 transition-colors"
          >
            <FiMail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
