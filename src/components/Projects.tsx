
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'codegym' | 'commercial'>('all');

  const projects = [
    {
      id: 1,
      title: 'Banking System',
      description: 'A secure banking application with transaction processing and account management features.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      category: 'codegym',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A fully-featured online store with product management, cart, and checkout functionality.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['Java', 'Spring MVC', 'Hibernate', 'PostgreSQL'],
      category: 'commercial',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A collaborative task tracking application with real-time updates and team workflows.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      tags: ['Java', 'Spring', 'MongoDB', 'WebSockets'],
      category: 'codegym',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A weather application that displays current conditions and forecasts based on location.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      tags: ['Java', 'Android SDK', 'Retrofit', 'APIs'],
      category: 'codegym',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Inventory Management',
      description: 'A robust system for tracking inventory levels, orders, sales, and deliveries for businesses.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['Java', 'JavaFX', 'MySQL', 'JPA'],
      category: 'commercial',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing and analyzing social media accounts and engagement.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['Java', 'Spring Boot', 'React', 'Redis'],
      category: 'commercial',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="heading-with-line mx-auto justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
          <p className="text-muted-foreground mt-4">
            A showcase of my development work, highlighting my skills and experience in building Java applications.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('codegym')}
              className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === 'codegym' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              CodeGym Projects
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === 'commercial' 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Commercial Projects
            </button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
