import React from 'react';
import { Divider } from '@heroui/react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl text-brand-600 mb-4">Anthony</h3>
            <p className="text-gray-600 text-sm">
              Designer, builder, and AI enthusiast creating products that matter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-600 hover:text-brand-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:anthony@example.com"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  anthony@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2024 Anthony. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <FiHeart className="text-brand-600" /> using React & Hero UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

