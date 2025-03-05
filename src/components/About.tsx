
import React from 'react';
import { CheckCircle, Coffee, Code, Database, Server, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  const skills = [
    "Java Development",
    "Spring Framework",
    "Hibernate/JPA",
    "RESTful APIs",
    "Microservices",
    "SQL & NoSQL Databases",
    "Front-end Development",
    "Build Tools (Maven, Gradle)",
    "Test-Driven Development",
    "Software Architecture",
    "Version Control (Git)",
    "Agile Methodologies"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="glass-morphism rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Profile image with decorative elements */}
              <div className="relative z-10 mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                    alt="Héctor Corbellini"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Coffee size={20} />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Héctor Corbellini</h2>
              <h3 className="text-lg text-primary font-medium mb-4">Full-Stack Java Developer</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Code size={18} className="text-primary" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database size={18} className="text-primary" />
                  <span>Database Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server size={18} className="text-primary" />
                  <span>Back-end Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <span>Team Collaborator</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                "I believe in creating clean, maintainable code that solves real business problems efficiently."
              </p>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="heading-with-line">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            <p className="text-lg mt-6 mb-8">
              I'm a passionate Java developer specializing in building robust, scalable applications. 
              With a strong foundation in software engineering principles and a commitment to clean code, 
              I create solutions that are both efficient and maintainable.
            </p>
            <p className="text-lg mb-8">
              My journey in software development began at CodeGym Academy, where I honed my Java skills. 
              Since then, I've worked on various projects, from small applications to large enterprise 
              systems, always focusing on delivering high-quality results that exceed expectations.
            </p>

            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              I'm constantly learning and adding new skills to my repertoire to stay current with 
              industry trends and best practices.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
