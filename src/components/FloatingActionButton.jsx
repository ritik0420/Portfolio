import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme } = useTheme();

  // Fallback colors in case theme context is not available
  const fallbackTheme = {
    surface: '#0E0E10',
    accent: '#3A3A49',
    text: '#FFFFFF'
  };

  const theme = currentTheme || fallbackTheme;

  const actions = [
    { icon: '📧', label: 'Email', action: () => window.open('mailto:ritik.kaintura007@gmail.com') },
    { icon: '💼', label: 'Resume', action: () => window.open('/resume.pdf', '_blank') },
    { icon: '🌐', label: 'Portfolio', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: '📱', label: 'Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={action.action}
                className="flex items-center gap-3 px-4 py-3 rounded-full shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-110"
                style={{
                  background: theme.surface,
                  border: `1px solid ${theme.accent}`,
                  color: theme.text
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0 10px 25px ${theme.accent}40`
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{action.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        className="relative w-16 h-16 rounded-full shadow-lg backdrop-blur-lg flex items-center justify-center transition-all duration-300"
        style={{
          background: theme.accent,
          color: theme.text
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: `0 10px 25px ${theme.accent}40`
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 45 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-2xl font-bold"
          animate={{ scale: isOpen ? 0.8 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? '×' : '+'}
        </motion.div>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-current"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
