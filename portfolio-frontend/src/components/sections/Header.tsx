import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollPosition, useSmoothScroll } from '../../hooks';
import { clsx } from 'clsx';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Certifications', href: 'certifications' },
  { name: 'Contact', href: 'contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isScrolled } = useScrollPosition();
  const scrollTo = useSmoothScroll();

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl md:text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('hero')}
          >
            YC
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
