import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { useSmoothScroll } from '../../hooks';

export const Footer: React.FC = () => {
  const scrollTo = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/youssefchlih',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: `https://${profileData.linkedin}`,
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${profileData.email}`,
      label: 'Email',
    },
  ];

  const footerLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo('hero')}
            >
              YC
            </motion.a>
            <p className="text-muted-foreground text-sm mb-4">
              Big Data & AI Student passionate about Machine Learning, Deep Learning, 
              and building innovative AI solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{profileData.email}</li>
              <li>{profileData.phone}</li>
              <li>{profileData.location}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} {profileData.name}. Made with
              <Heart size={14} className="text-red-500 fill-current" />
              and lots of ☕
            </p>

            {/* Back to top */}
            <motion.button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-500 transition-colors"
              whileHover={{ y: -2 }}
            >
              Back to top
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
