import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHome, FiSearch } from 'react-icons/fi';

const CaseStudies = () => {
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
    <section id="work" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Case studies showcasing my approach to zero-to-one product design
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>
                  <div className="w-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map((tag, i) => (
                          <Chip key={i} variant="flat" className="bg-white/20 text-white">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-lg">{project.subtitle}</p>
                  </div>
                </CardHeader>

                <CardBody className="p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-6 mb-8">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-4 bg-brand-50 rounded-xl">
                        <div className="text-3xl font-bold text-brand-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        Key Challenges
                      </h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="text-gray-600 text-sm pl-4">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-brand-500 rounded-full mr-2"></span>
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="text-gray-600 text-sm pl-4">
                            • {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Chip key={i} variant="flat" size="sm">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </CardBody>

                <CardFooter className="bg-gray-50 px-8 py-4">
                  <Button
                    color="primary"
                    variant="light"
                    endContent={<FiArrowRight />}
                    className="font-semibold"
                  >
                    View Full Case Study
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

