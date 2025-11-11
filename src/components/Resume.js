import React from 'react';
import { Card, CardBody, Button, Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';

const Resume = () => {
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
    <section id="resume" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience & Background
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A journey of building, learning, and shipping great products
          </p>
          <Button
            color="primary"
            variant="bordered"
            startContent={<FiDownload />}
            size="lg"
            className="font-semibold"
          >
            Download Full Resume
          </Button>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-brand-100 p-3 rounded-xl">
              <FiBriefcase className="text-2xl text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Experience</h3>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardBody className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {job.role}
                        </h4>
                        <p className="text-brand-600 font-semibold">{job.company}</p>
                      </div>
                      <span className="text-gray-500 font-medium mt-2 sm:mt-0">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-600 text-sm pl-4">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <FiBookOpen className="text-2xl text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-brand-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                  <Divider className="my-3" />
                  <p className="text-gray-600 text-sm">{edu.details}</p>
                </CardBody>
              </Card>
            ))}
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-100 p-3 rounded-xl">
                <FiAward className="text-2xl text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Recognition</h3>
            </div>

            <Card>
              <CardBody className="p-6">
                <ul className="space-y-4">
                  {awards.map((award, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

