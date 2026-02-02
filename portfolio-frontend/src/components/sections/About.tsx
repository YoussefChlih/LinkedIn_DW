import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Code, Briefcase, Brain, Target, Lightbulb, Users, MessageCircle } from 'lucide-react';
import { Button, Card } from '../ui';
import { profileData, education, languages, statistics, keyCompetencies } from '../../data/portfolioData';
import { useInView, useCounter } from '../../hooks';

// Counter component with animation
const AnimatedCounter: React.FC<{ value: number; suffix: string; label: string }> = ({
  value,
  suffix,
  label,
}) => {
  const { count, start } = useCounter(value);
  const { ref, isInView } = useInView(0.3);

  useEffect(() => {
    if (isInView) {
      start();
    }
  }, [isInView, start]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

// Icon component mapper
const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    brain: <Brain className="w-6 h-6" />,
    target: <Target className="w-6 h-6" />,
    lightbulb: <Lightbulb className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
    'message-circle': <MessageCircle className="w-6 h-6" />,
  };
  return icons[iconName] || <Code className="w-6 h-6" />;
};

export const About: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section
      id="about"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about AI and committed to building innovative solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                  <Briefcase size={20} />
                </span>
                Profile Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {profileData.summary}
              </p>
              <p className="text-sm text-primary-500 font-medium mb-6">
                🚀 Available starting February 2025 for an AI internship
              </p>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-foreground">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                    >
                      {lang.name}: {lang.level.charAt(0).toUpperCase() + lang.level.slice(1)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download CV Button */}
              <Button
                variant="primary"
                leftIcon={<Download size={18} />}
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </Card>
          </motion.div>

          {/* Right: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-secondary-500/10 text-secondary-500">
                  <GraduationCap size={20} />
                </span>
                Education
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500" />

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative pl-10"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-background" />
                      
                      <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-primary-500 font-medium">
                            {edu.startYear} - {edu.endYear}
                          </span>
                          {edu.status === 'in-progress' && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-500">
                              In Progress
                            </span>
                          )}
                        </div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        {edu.description && (
                          <p className="text-xs text-muted-foreground mt-2">{edu.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Key Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Key Competencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyCompetencies.map((comp, index) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4">
                    <span className="p-3 rounded-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/10 text-primary-500">
                      {getIcon(comp.icon)}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{comp.title}</h4>
                      <p className="text-sm text-muted-foreground">{comp.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
