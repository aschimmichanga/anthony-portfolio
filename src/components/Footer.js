import React from 'react';
import { Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-black text-2xl mb-4">
              <span className="text-gradient-green">Anthony</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Designer, builder, and AI enthusiast creating products that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-gray-900 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['about', 'work', 'resume', 'contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <a
                    href={`#${link}`}
                    className="text-gray-600 hover:text-brand-600 transition-colors inline-flex items-center gap-2 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-gray-900 mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              {[
                { label: 'anthony@example.com', href: 'mailto:anthony@example.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'GitHub', href: 'https://github.com' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-brand-600 transition-colors inline-flex items-center gap-2 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Divider className="my-8 bg-gray-300" />

        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-medium">© 2024 Anthony. All rights reserved.</p>
          <p className="flex items-center gap-2 font-medium">
            Built with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <FiHeart className="text-brand-600 fill-brand-600" />
            </motion.span>
            {' '}using React & Hero UI
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
