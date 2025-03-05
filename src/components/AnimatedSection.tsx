
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'animate-on-scroll-left';
      case 'right':
        return 'animate-on-scroll-right';
      default:
        return 'animate-on-scroll';
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className={cn(getAnimationClass(), className)}
      id={id}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
