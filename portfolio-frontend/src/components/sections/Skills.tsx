import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Network, MessageSquare, Eye, Wand2, Bot, Flame, Layers, BarChart3,
  Camera, Scan, Smile, Database, Zap, Wind, Server, Code2, FileCode,
  Terminal, Coffee, Leaf, HardDrive, CircleDot, GitBranch, Cloud,
  Container, Ship, Blocks, Repeat, Notebook, Layout, Rocket, Atom
} from 'lucide-react';
import { Card, ProgressBar, Badge } from '../ui';
import { skills } from '../../data/portfolioData';
import { useInView } from '../../hooks';

type SkillCategory = 'all' | 'ai-ml' | 'big-data' | 'programming' | 'databases' | 'cloud' | 'devops' | 'tools';

const categories: { key: SkillCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'ai-ml', label: 'AI & ML' },
  { key: 'big-data', label: 'Big Data' },
  { key: 'programming', label: 'Programming' },
  { key: 'databases', label: 'Databases' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'devops', label: 'DevOps' },
  { key: 'tools', label: 'Tools' },
];

// Icon mapper
const getSkillIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    brain: <Brain className="w-6 h-6" />,
    network: <Network className="w-6 h-6" />,
    'message-square': <MessageSquare className="w-6 h-6" />,
    eye: <Eye className="w-6 h-6" />,
    'wand-2': <Wand2 className="w-6 h-6" />,
    bot: <Bot className="w-6 h-6" />,
    flame: <Flame className="w-6 h-6" />,
    layers: <Layers className="w-6 h-6" />,
    'chart-bar': <BarChart3 className="w-6 h-6" />,
    camera: <Camera className="w-6 h-6" />,
    scan: <Scan className="w-6 h-6" />,
    smile: <Smile className="w-6 h-6" />,
    database: <Database className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
    wind: <Wind className="w-6 h-6" />,
    server: <Server className="w-6 h-6" />,
    'code-2': <Code2 className="w-6 h-6" />,
    'file-code': <FileCode className="w-6 h-6" />,
    terminal: <Terminal className="w-6 h-6" />,
    coffee: <Coffee className="w-6 h-6" />,
    leaf: <Leaf className="w-6 h-6" />,
    'hard-drive': <HardDrive className="w-6 h-6" />,
    'circle-dot': <CircleDot className="w-6 h-6" />,
    'git-branch': <GitBranch className="w-6 h-6" />,
    cloud: <Cloud className="w-6 h-6" />,
    container: <Container className="w-6 h-6" />,
    ship: <Ship className="w-6 h-6" />,
    blocks: <Blocks className="w-6 h-6" />,
    repeat: <Repeat className="w-6 h-6" />,
    notebook: <Notebook className="w-6 h-6" />,
    layout: <Layout className="w-6 h-6" />,
    rocket: <Rocket className="w-6 h-6" />,
    atom: <Atom className="w-6 h-6" />,
  };
  return iconMap[iconName] || <Code2 className="w-6 h-6" />;
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const { ref: sectionRef, isInView } = useInView(0.1);

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build AI solutions
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

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                      }}
                    >
                      {getSkillIcon(skill.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                      <Badge variant="default" size="sm">
                        {skill.category.replace('-', ' & ').toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <ProgressBar
                    value={skill.level}
                    showLabel
                    color={`linear-gradient(to right, ${skill.color}, ${skill.color}80)`}
                  />
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-center mb-8">Technical Expertise Areas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                <div className="text-4xl mb-2">🧠</div>
                <h4 className="font-semibold text-foreground">AI & Machine Learning</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Deep Learning, NLP, Computer Vision, GANs, LLMs
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                <div className="text-4xl mb-2">📊</div>
                <h4 className="font-semibold text-foreground">Big Data</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Hadoop, Spark, Kafka, Airflow, ETL Pipelines
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                <div className="text-4xl mb-2">☁️</div>
                <h4 className="font-semibold text-foreground">Cloud & DevOps</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  AWS, Oracle Cloud, Docker, Kubernetes, CI/CD
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5">
                <div className="text-4xl mb-2">💾</div>
                <h4 className="font-semibold text-foreground">Data Management</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  PostgreSQL, MongoDB, Redis, Cassandra, Neo4j
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
