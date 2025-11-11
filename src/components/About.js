import React from 'react';
import { Card, CardBody, Chip } from '@heroui/react';
import { motion } from 'framer-motion';
import { FiZap, FiTarget, FiLayers, FiCpu } from 'react-icons/fi';

const About = () => {
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
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: 'Ship-to-Learn',
      description: 'Launch quickly, gather feedback, iterate. Perfect is the enemy of good.',
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: 'Zero-to-One Builder',
      description: 'From napkin sketch to shipped product, I love greenfield challenges.',
    },
    {
      icon: <FiCpu className="text-2xl" />,
      title: 'AI-First Mindset',
      description: 'Leveraging AI to amplify design decisions and accelerate workflows.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A designer who codes, a builder who designs, and a co-founder who ships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardBody className="p-6">
                  <div className="text-brand-600 mb-4">{trait.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-sm text-gray-600">{trait.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-50 to-emerald-50 rounded-3xl p-8 sm:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Chip
                  variant="flat"
                  color="success"
                  size="lg"
                  className="font-medium"
                >
                  {skill}
                </Chip>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

