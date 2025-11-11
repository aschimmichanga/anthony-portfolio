import React from 'react';
import { Card, CardBody, Button, Input, Textarea } from '@heroui/react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactLinks = [
    {
      icon: <FiMail className="text-xl" />,
      label: 'Email',
      value: 'anthony@example.com',
      href: 'mailto:anthony@example.com',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      label: 'LinkedIn',
      value: '/in/anthony',
      href: 'https://linkedin.com',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <FiGithub className="text-xl" />,
      label: 'GitHub',
      value: '@anthony',
      href: 'https://github.com',
      color: 'bg-gray-100 text-gray-600',
    },
    {
      icon: <FiTwitter className="text-xl" />,
      label: 'Twitter',
      value: '@anthony',
      href: 'https://twitter.com',
      color: 'bg-sky-100 text-sky-600',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open to freelance projects, full-time opportunities, or just a chat about design and AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <Input
                    type="text"
                    label="Name"
                    placeholder="Your name"
                    variant="bordered"
                    size="lg"
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    variant="bordered"
                    size="lg"
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="What's this about?"
                    variant="bordered"
                    size="lg"
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell me about your project..."
                    variant="bordered"
                    minRows={6}
                  />
                  <Button
                    color="primary"
                    size="lg"
                    className="w-full font-semibold"
                    endContent={<FiSend />}
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Looking for a designer who...
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 text-xl">✓</span>
                    <span>Ships fast and iterates based on real feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 text-xl">✓</span>
                    <span>Thrives in ambiguity and greenfield environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 text-xl">✓</span>
                    <span>Understands both design and development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 text-xl">✓</span>
                    <span>Leverages AI to amplify creative output</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 text-xl">✓</span>
                    <span>Has a keen eye for color theory and aesthetics</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect with me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="block"
                    >
                      <Card isPressable isHoverable>
                        <CardBody className="p-4">
                          <div className={`${link.color} w-10 h-10 rounded-lg flex items-center justify-center mb-2`}>
                            {link.icon}
                          </div>
                          <p className="text-xs text-gray-500 mb-1">{link.label}</p>
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {link.value}
                          </p>
                        </CardBody>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

