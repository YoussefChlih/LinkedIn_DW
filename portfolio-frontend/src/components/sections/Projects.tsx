import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, Badge, Button } from '../ui';
import { projects } from '../../data/portfolioData';
import { useInView } from '../../hooks';

type ProjectCategory = 'all' | 'nlp' | 'computer-vision' | 'deep-learning' | 'generative-ai' | 'web';

const categories: { key: ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'nlp', label: 'NLP' },
  { key: 'computer-vision', label: 'Computer Vision' },
  { key: 'deep-learning', label: 'Deep Learning' },
  { key: 'generative-ai', label: 'Generative AI' },
];

const categoryColors: { [key: string]: string } = {
  nlp: 'from-blue-500 to-cyan-500',
  'computer-vision': 'from-purple-500 to-pink-500',
  'deep-learning': 'from-orange-500 to-red-500',
  'generative-ai': 'from-green-500 to-emerald-500',
  web: 'from-yellow-500 to-amber-500',
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { ref: sectionRef, isInView } = useInView(0.1);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-32"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI solutions I've built, from NLP platforms to Computer Vision systems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col overflow-hidden group">
                  {/* Project Image/Placeholder */}
                  <div className={`relative h-48 -mx-6 -mt-6 mb-4 bg-gradient-to-br ${categoryColors[project.category] || 'from-gray-500 to-gray-600'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/80 text-6xl font-bold">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="bg-black/30 text-white backdrop-blur-sm">
                        {project.category.replace('-', ' ')}
                      </Badge>
                    </div>
                    {/* Featured indicator */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-500 text-black rounded-full">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-6 h-6 text-white" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="w-6 h-6 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Expandable full description */}
                    {project.fullDescription && (
                      <>
                        <button
                          onClick={() => setExpandedProject(
                            expandedProject === project.id ? null : project.id
                          )}
                          className="text-primary-500 text-sm font-medium flex items-center gap-1 hover:underline mb-4"
                        >
                          {expandedProject === project.id ? (
                            <>
                              Read Less <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              Read More <ChevronDown size={16} />
                            </>
                          )}
                        </button>
                        <AnimatePresence>
                          {expandedProject === project.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-muted-foreground text-sm mb-4 pb-4 border-b border-border">
                                {project.fullDescription}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}

                    {/* Technologies */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            rightIcon={<Github size={18} />}
            onClick={() => window.open('https://github.com/youssefchlih', '_blank')}
          >
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
