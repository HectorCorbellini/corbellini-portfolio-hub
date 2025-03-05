
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-3xl opacity-60 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-3xl opacity-60 transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="flex flex-col items-center text-center mb-6">
            <span className="text-sm font-medium tracking-wider uppercase text-primary mb-3 px-4 py-1 border border-primary/20 rounded-full bg-primary/5">
              Java Full-Stack Developer
            </span>
            <h1 className="text-4xl md:text-display-sm lg:text-display font-bold mb-6 tracking-tight">
              Building robust solutions with <span className="text-primary">elegant simplicity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              I create scalable applications and services that solve real-world problems, specializing in Java-based technologies and full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white border border-gray-200 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm"
              >
                Contact Me
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center text-sm text-muted-foreground">
          <span className="mb-2">Scroll Down</span>
          <ChevronDown size={20} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
