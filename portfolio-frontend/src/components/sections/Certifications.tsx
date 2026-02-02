import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, Badge } from '../ui';
import { certifications } from '../../data/portfolioData';
import { useInView } from '../../hooks';

export const Certifications: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section
      id="certifications"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Continuous Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses demonstrating commitment to excellence
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full relative overflow-hidden group">
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                {/* Badge Emoji */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {cert.badge}
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {cert.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Award size={14} className="text-primary-500" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8 text-center">
            <h3 className="text-xl font-bold mb-6">Certification Highlights</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="primary" size="md" className="py-2 px-4">
                ☁️ Oracle Cloud Certified
              </Badge>
              <Badge variant="secondary" size="md" className="py-2 px-4">
                🤖 MLOps Specialist
              </Badge>
              <Badge variant="success" size="md" className="py-2 px-4">
                📊 Data Analysis Expert
              </Badge>
              <Badge variant="warning" size="md" className="py-2 px-4">
                🐍 Python Professional
              </Badge>
              <Badge variant="primary" size="md" className="py-2 px-4">
                🧠 Machine Learning
              </Badge>
            </div>
          </Card>
        </motion.div>

        {/* Continuous Learning Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">
            🚀 Always learning and staying updated with the latest in AI and Machine Learning
          </p>
        </motion.div>
      </div>
    </section>
  );
};
