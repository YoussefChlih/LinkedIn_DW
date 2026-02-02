import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, ArrowRight } from 'lucide-react';
import { Card, Badge } from '../ui';
import { experiences } from '../../data/portfolioData';
import { useInView } from '../../hooks';

export const Experience: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in AI development and machine learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 w-6 h-6 -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-background shadow-lg shadow-primary-500/30" />
                  <div className="absolute w-8 h-8 rounded-full bg-primary-500/20 animate-ping" />
                </div>

                {/* Content */}
                <div className="flex-1 md:max-w-[45%]">
                  <Card hover className="relative overflow-hidden">
                    {/* Accent gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />

                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-primary-500 text-sm font-medium mb-2">
                        <Calendar size={16} />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 size={16} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="primary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1 md:max-w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="text-center py-8 glass">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Looking for an AI Internship
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Available starting February 2025. Motivated, autonomous, and eager to contribute to cutting-edge AI projects.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
