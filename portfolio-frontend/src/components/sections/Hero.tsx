import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, MapPin, Github } from 'lucide-react';
import { Button } from '../ui';
import { profileData } from '../../data/portfolioData';
import { useSmoothScroll } from '../../hooks';

// Particle component for background effect
const Particle: React.FC<{ delay: number }> = ({ delay }) => {
  const randomX = Math.random() * 100;
  const randomSize = Math.random() * 4 + 2;
  const randomDuration = Math.random() * 20 + 10;

  return (
    <motion.div
      className="absolute rounded-full bg-primary-500/20"
      style={{
        left: `${randomX}%`,
        width: randomSize,
        height: randomSize,
      }}
      initial={{ y: '100vh', opacity: 0 }}
      animate={{
        y: '-10vh',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const scrollTo = useSmoothScroll();
  
  const roles = [
    'Big Data & AI Student',
    'Machine Learning Engineer',
    'Deep Learning Enthusiast',
    'Computer Vision Developer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary-500/10">
        {/* Particles */}
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <Particle key={i} delay={i * 0.2} />
          ))}
        </div>
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image with Glassmorphism */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass p-1 glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
                YC
              </div>
            </div>
            {/* Status indicator */}
            <motion.div
              className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">{profileData.name}</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-12 md:h-16 mb-6 overflow-hidden"
        >
          <motion.div
            key={currentRole}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl text-primary-500 font-medium"
          >
            {roles[currentRole]}
          </motion.div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
        >
          <MapPin size={18} />
          <span>{profileData.location}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('projects')}
            rightIcon={<ArrowDown size={18} />}
          >
            View My Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('contact')}
            leftIcon={<Mail size={18} />}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href={`https://${profileData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={`mailto:${profileData.email}`}
            className="p-3 rounded-full bg-muted text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/youssefchlih"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
