import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b border-gray-200/50 shadow-sm' : ''
      }`}
    >
      <Navbar
        maxWidth="xl"
        className="bg-transparent"
        classNames={{
          wrapper: "px-4 sm:px-6",
        }}
      >
        <NavbarBrand>
          <motion.p
            className="font-bold text-xl bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Anthony
          </motion.p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          {['about', 'work', 'resume'].map((section, index) => (
            <NavbarItem key={section}>
              <motion.button
                onClick={() => scrollToSection(section)}
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-emerald-500 group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('contact')}
                color="primary"
                variant="solid"
                className="font-semibold bg-gradient-to-r from-brand-500 to-emerald-600 shadow-lg hover:shadow-xl transition-shadow"
              >
                Contact
              </Button>
            </motion.div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;

