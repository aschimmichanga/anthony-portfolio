import React from 'react';
import { Card, CardBody, Chip } from '@heroui/react';
import { motion, useInView } from 'framer-motion';
import { FiZap, FiTarget, FiLayers, FiCpu } from 'react-icons/fi';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    'Product Design',
    'UI/UX',
    'Design Systems',
    'Prototyping',
    'User Research',
    'AI Integration',
    'Figma',
    'React',
    'Tailwind CSS',
    'Color Theory',
    'Midjourney',
    'ChatGPT',
  ];

  const traits = [
    {
      icon: <FiZap className="text-2xl" />,
      title: 'Scrappy & Resourceful',
      description: 'I thrive in fast-paced environments where constraints breed creativity.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: 'Ship-to-Learn',
      description: 'Launch quickly, gather feedback, iterate. Perfect is the enemy of good.',
      gradient: 'from-brand-500 to-emerald-500',
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: 'Zero-to-One Builder',
      description: 'From napkin sketch to shipped product, I love greenfield challenges.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiCpu className="text-2xl" />,
      title: 'AI-First Mindset',
      description: 'Leveraging AI to amplify design decisions and accelerate workflows.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-5xl">👋</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A designer who codes, a builder who designs, and a co-founder who ships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full glass border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${trait.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardBody className="p-7 relative z-10">
                    <motion.div
                      className={`text-white mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${trait.gradient} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {trait.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {trait.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{trait.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-[2rem] p-12 sm:p-16 overflow-hidden glass-dark border border-brand-200/30 shadow-premium"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 opacity-50"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(0,160,77,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(16,185,129,0.1) 0%, transparent 50%)'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-gray-900 mb-3">Skills & Tools</h3>
            <p className="text-gray-600 mb-10 text-lg">The toolkit that brings ideas to life</p>
            
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.5 + index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Chip
                    variant="flat"
                    color="success"
                    size="lg"
                    className="font-semibold bg-white/80 backdrop-blur-sm border border-brand-200/50 hover:border-brand-400 hover:shadow-lg transition-all cursor-default"
                  >
                    {skill}
                  </Chip>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

