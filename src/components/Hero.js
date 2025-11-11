import React from 'react';
import { Button, Chip } from '@heroui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiStar } from 'react-icons/fi';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-green-50/40">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: '15%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(0,160,77,0.15) 0%, transparent 70%)',
            y: y1,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            bottom: '10%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
            y: y2,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Chip 
              color="success" 
              variant="flat" 
              startContent={<FiStar className="animate-pulse" />}
              className="mb-8 glass-dark border border-brand-200/50 shadow-lg"
              size="lg"
            >
              Open to new opportunities
            </Chip>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
        >
          Designer, Builder,
          <br />
          <span className="relative inline-block">
            <span className="text-gradient-multi relative z-10">AI Enthusiast</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-brand-200 to-emerald-200 -z-10 opacity-50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl text-gray-700 mb-4 max-w-3xl mx-auto font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I'm Anthony, a product designer and co-founder who thrives in{' '}
          <span className="text-gradient-green font-bold">greenfield environments</span>.
        </motion.p>

        <motion.p
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Currently building AI-powered housing solutions. I ship fast, iterate faster,
          and love turning ambitious ideas into reality.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-5 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              color="primary"
              size="lg"
              endContent={<FiArrowRight />}
              className="font-semibold bg-gradient-to-r from-brand-500 to-emerald-600 shadow-premium hover:shadow-glow transition-all duration-300 px-8 h-14 text-base"
              onClick={() => scrollToSection('work')}
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="bordered"
              size="lg"
              className="font-semibold border-2 border-brand-500 text-brand-600 hover:bg-brand-50 transition-all duration-300 px-8 h-14 text-base glass"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex gap-8 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { Icon: FiGithub, href: 'https://github.com' },
            { Icon: FiLinkedin, href: 'https://linkedin.com' },
            { Icon: FiMail, href: 'mailto:anthony@example.com' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-600 transition-all duration-300 p-3 rounded-full hover:bg-brand-50"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={26} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
