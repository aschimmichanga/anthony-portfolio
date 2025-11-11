import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar
      isBordered
      maxWidth="xl"
      classNames={{
        wrapper: "px-4 sm:px-6",
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-xl text-brand-600">Anthony</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-brand-500 font-medium transition-colors"
          >
            About
          </button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={() => scrollToSection('work')}
            className="text-gray-600 hover:text-brand-500 font-medium transition-colors"
          >
            Work
          </button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={() => scrollToSection('resume')}
            className="text-gray-600 hover:text-brand-500 font-medium transition-colors"
          >
            Resume
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onClick={() => scrollToSection('contact')}
            color="primary"
            variant="solid"
            className="font-semibold"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;

