import React, { useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiHome, FiSearch } from 'react-icons/fi';

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'AI Housing Platform',
      subtitle: 'LLM-Powered Property Discovery',
      description:
        'Designed and shipped a conversational AI interface that helps users discover housing through natural language. Built for speed and iteration in a zero-to-one environment.',
      tags: ['Product Design', 'AI/ML', 'User Research', 'Prototyping'],
      gradient: 'from-emerald-500 to-green-600',
      icon: <FiHome className="text-4xl" />,
      metrics: [
        { label: 'Design to Launch', value: '6 weeks' },
        { label: 'User Satisfaction', value: '92%' },
        { label: 'Time Saved', value: '3.5hrs' },
      ],
      challenges: [
        'Designing for AI unpredictability',
        'Building trust in automated recommendations',
        'Rapid iteration based on user feedback',
      ],
      outcomes: [
        'Launched MVP with 500+ beta users',
        'Improved search accuracy by 40%',
        'Reduced time-to-find by 60%',
      ],
    },
    {
      title: 'Observability Dashboard',
      subtitle: 'Real-time LLM Performance Monitoring',
      description:
        'Created a comprehensive dashboard for monitoring LLM performance metrics. Focused on clarity, actionable insights, and making complex data accessible to non-technical stakeholders.',
      tags: ['Data Viz', 'Dashboard Design', 'Design System', 'AI Tools'],
      gradient: 'from-brand-500 to-emerald-500',
      icon: <FiSearch className="text-4xl" />,
      metrics: [
        { label: 'Data Points', value: '10M+' },
        { label: 'Load Time', value: '<2s' },
        { label: 'Active Users', value: '200+' },
      ],
      challenges: [
        'Presenting complex data simply',
        'Real-time updates without lag',
        'Designing for diverse user personas',
      ],
      outcomes: [
        'Reduced debugging time by 75%',
        'Increased platform reliability',
        'Adopted by 3 enterprise clients',
      ],
    },
  ];

  return (
    <section ref={ref} id="work" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />

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
            <span className="text-5xl">💼</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Case studies showcasing my approach to{' '}
            <span className="text-gradient-green font-bold">zero-to-one product design</span>
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 border border-gray-200/50 group">
                  <CardHeader className={`bg-gradient-to-r ${project.gradient} p-10 text-white relative overflow-hidden`}>
                    {/* Animated pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }} />
                    
                    <div className="w-full relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          className="glass-dark p-5 rounded-2xl shadow-2xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {project.icon}
                        </motion.div>
                        <div className="flex gap-3">
                          {project.tags.slice(0, 2).map((tag, i) => (
                            <Chip key={i} variant="flat" className="bg-white/25 backdrop-blur-sm text-white font-semibold border border-white/30" size="lg">
                              {tag}
                            </Chip>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-4xl font-black mb-3 tracking-tight">{project.title}</h3>
                      <p className="text-white/95 text-xl font-medium">{project.subtitle}</p>
                    </div>
                  </CardHeader>

                  <CardBody className="p-10">
                    <p className="text-gray-700 text-lg mb-10 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 mb-10">
                      {project.metrics.map((metric, i) => (
                        <motion.div 
                          key={i} 
                          className="relative text-center p-6 rounded-2xl overflow-hidden group/metric cursor-default bg-gradient-to-br from-brand-50 to-emerald-50 border border-brand-200/50"
                          whileHover={{ scale: 1.05, y: -4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600 mb-2">
                            {metric.value}
                          </div>
                          <div className="text-sm font-semibold text-gray-700">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/50">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          Key Challenges
                        </h4>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="text-gray-700 text-sm pl-4 leading-relaxed"
                            >
                              • {challenge}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-50/50 to-emerald-50/50 border border-brand-200/50">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                          <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                          Outcomes
                        </h4>
                        <ul className="space-y-3">
                          {project.outcomes.map((outcome, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="text-gray-700 text-sm pl-4 leading-relaxed"
                            >
                              • {outcome}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <Chip key={i} variant="flat" size="md" className="bg-gray-100 border border-gray-200">
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>

                  <CardFooter className="bg-gray-50/80 px-10 py-6 border-t border-gray-200/50">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button
                        color="primary"
                        variant="light"
                        endContent={<FiArrowRight />}
                        size="lg"
                        className="font-semibold text-brand-600"
                      >
                        View Full Case Study
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
