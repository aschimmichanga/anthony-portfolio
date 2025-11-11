import React, { useRef } from 'react';
import { Card, CardBody, Button, Divider } from '@heroui/react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = [
    {
      role: 'Co-Founder & Lead Designer',
      company: 'Housing AI Startup',
      period: '2024 - Present',
      description:
        'Leading product design and user experience for an AI-powered housing platform. Built the design system from scratch and shipped the MVP in 6 weeks.',
      highlights: [
        'Designed and shipped conversational AI interface',
        'Created comprehensive design system',
        'Led user research and usability testing',
        'Collaborated with engineering on AI model integration',
      ],
    },
    {
      role: 'Product Designer',
      company: 'Tech Company',
      period: '2023 - 2024',
      description:
        'Focused on greenfield projects and rapid prototyping. Worked on LLM observability tools and developer platforms.',
      highlights: [
        'Designed real-time monitoring dashboards',
        'Improved developer workflow efficiency by 40%',
        'Led design sprints for new product features',
        'Mentored junior designers on AI design patterns',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Design',
      institution: 'Design University',
      period: '2019 - 2023',
      details: 'Focus: Interaction Design, Color Theory, Digital Product Design',
    },
  ];

  const awards = [
    'Best New Product - Design Awards 2024',
    'Innovation in AI Design - Tech Summit 2024',
    'Rising Designer to Watch - Design Magazine',
  ];

  return (
    <section ref={ref} id="resume" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            className="inline-block mb-4"
          >
            <span className="text-5xl">📄</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Experience & Background
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            A journey of building, learning, and shipping great products
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              color="primary"
              variant="bordered"
              startContent={<FiDownload />}
              size="lg"
              className="font-semibold border-2 border-brand-500 text-brand-600 hover:bg-brand-50 px-8 h-14"
            >
              Download Full Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <motion.div 
              className="bg-gradient-to-br from-brand-500 to-emerald-600 p-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiBriefcase className="text-2xl text-white" />
            </motion.div>
            <h3 className="text-4xl font-black text-gray-900">Experience</h3>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.7,
                  delay: 0.3 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card className="glass-dark border border-gray-200/50 shadow-lg hover:shadow-premium transition-all duration-500 overflow-hidden group">
                    {/* Gradient accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 to-emerald-600 group-hover:w-2 transition-all duration-300" />
                    
                    <CardBody className="p-8 pl-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
                        <div>
                          <h4 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                            {job.role}
                          </h4>
                          <p className="text-brand-600 font-bold text-lg">{job.company}</p>
                        </div>
                        <span className="text-gray-500 font-semibold mt-2 sm:mt-0 px-4 py-2 bg-gray-100 rounded-full text-sm">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{job.description}</p>
                      <ul className="space-y-3">
                        {job.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 + index * 0.15 + i * 0.1 }}
                            className="text-gray-600 pl-6 relative leading-relaxed"
                          >
                            <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-full"></span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiBookOpen className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-3xl font-black text-gray-900">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="glass-dark border border-gray-200/50 shadow-lg hover:shadow-xl transition-all">
                  <CardBody className="p-8">
                    <h4 className="text-xl font-black text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-brand-600 font-bold mb-3 text-lg">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm mb-4 font-semibold">{edu.period}</p>
                    <Divider className="my-4" />
                    <p className="text-gray-600 leading-relaxed">{edu.details}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiAward className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-3xl font-black text-gray-900">Recognition</h3>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="glass-dark border border-gray-200/50 shadow-lg hover:shadow-xl transition-all">
                <CardBody className="p-8">
                  <ul className="space-y-5">
                    {awards.map((award, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-start gap-4 text-gray-700 leading-relaxed group"
                      >
                        <motion.div 
                          className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-1.5 flex-shrink-0"
                          whileHover={{ scale: 1.5, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <span className="group-hover:text-gray-900 transition-colors font-medium">{award}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
