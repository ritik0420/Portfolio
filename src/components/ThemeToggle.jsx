import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Fallback values in case theme context is not available
  const fallbackTheme = 'dark';
  const fallbackThemes = {
    dark: { name: 'dark', icon: '🌙', label: 'Dark' },
    light: { name: 'light', icon: '☀️', label: 'Light' },
    neon: { name: 'neon', icon: '✨', label: 'Neon' }
  };

  const currentTheme = theme || fallbackTheme;
  const currentThemes = themes || fallbackThemes;

  const themeOptions = [
    { key: 'dark', icon: '🌙', label: 'Dark' },
    { key: 'light', icon: '☀️', label: 'Light' },
    { key: 'neon', icon: '✨', label: 'Neon' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (newTheme) => {
    if (changeTheme) {
      changeTheme(newTheme);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={toggleDropdown}
        className="relative w-14 h-14 bg-black-300 border border-black-200 rounded-full flex items-center justify-center backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          key={currentTheme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl"
        >
          {themeOptions.find(t => t.key === currentTheme)?.icon}
        </motion.div>
        
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          animate={{
            borderColor: currentTheme === 'neon' ? ['#00FF00', '#FF00FF', '#00FF00'] : 'transparent'
          }}
          transition={{
            duration: 2,
            repeat: currentTheme === 'neon' ? Infinity : 0,
            ease: "linear"
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 bg-black-300 border border-black-200 rounded-xl p-2 backdrop-blur-lg shadow-xl min-w-[140px]"
          >
            {themeOptions.map((option) => (
              <motion.button
                key={option.key}
                onClick={() => handleThemeChange(option.key)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 hover:bg-black-200 ${
                  currentTheme === option.key ? 'bg-black-200 text-white' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="text-sm font-medium">{option.label}</span>
                {currentTheme === option.key && (
                  <motion.div
                    layoutId="activeTheme"
                    className="w-2 h-2 bg-white rounded-full ml-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
