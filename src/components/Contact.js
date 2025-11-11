import React, { useRef } from 'react';
import { Card, CardBody, Button, Input, Textarea } from '@heroui/react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiSend } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />

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
            <span className="text-5xl">💬</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Let's Build <span className="text-gradient-green">Something</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Open to freelance projects, full-time opportunities, or just a chat about design and AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-dark border border-gray-200/50 shadow-premium">
              <CardBody className="p-10">
                <h3 className="text-3xl font-black text-gray-900 mb-8">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <Input
                    type="text"
                    label="Name"
                    placeholder="Your name"
                    variant="bordered"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      inputWrapper: "border-2 hover:border-brand-400 focus-within:border-brand-500"
                    }}
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    variant="bordered"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      inputWrapper: "border-2 hover:border-brand-400 focus-within:border-brand-500"
                    }}
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="What's this about?"
                    variant="bordered"
                    size="lg"
                    classNames={{
                      input: "text-base",
                      inputWrapper: "border-2 hover:border-brand-400 focus-within:border-brand-500"
                    }}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell me about your project..."
                    variant="bordered"
                    minRows={6}
                    classNames={{
                      input: "text-base",
                      inputWrapper: "border-2 hover:border-brand-400 focus-within:border-brand-500"
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      color="primary"
                      size="lg"
                      className="w-full font-semibold bg-gradient-to-r from-brand-500 to-emerald-600 shadow-lg hover:shadow-xl transition-all h-14 text-base"
                      endContent={<FiSend />}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-8">
              <div className="relative rounded-3xl p-10 overflow-hidden glass-dark border border-brand-200/50 shadow-lg">
                <motion.div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: 'radial-gradient(circle at 30% 50%, rgba(0,160,77,0.08) 0%, transparent 60%)'
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">
                    Looking for a designer who...
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    {[
                      'Ships fast and iterates based on real feedback',
                      'Thrives in ambiguity and greenfield environments',
                      'Understands both design and development',
                      'Leverages AI to amplify creative output',
                      'Has a keen eye for color theory and aesthetics',
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-brand-600 text-2xl font-bold leading-none">✓</span>
                        <span className="pt-0.5">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-5">
                  Connect with me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="block"
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <Card isPressable className="glass border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300">
                        <CardBody className="p-5">
                          <motion.div 
                            className={`${link.color} w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-md`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {link.icon}
                          </motion.div>
                          <p className="text-xs text-gray-500 mb-1 font-medium">{link.label}</p>
                          <p className="text-sm font-bold text-gray-900 truncate">
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
