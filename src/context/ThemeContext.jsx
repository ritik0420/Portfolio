import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const themes = {
    dark: {
      name: 'dark',
      background: '#010103',
      surface: '#0E0E10',
      surfaceSecondary: '#1C1C21',
      text: '#FFFFFF',
      textSecondary: '#AFB0B6',
      accent: '#3A3A49',
      gradient: 'from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA]',
    },
    light: {
      name: 'light',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      surfaceSecondary: '#F9FAFB',
      text: '#1E293B', // dark slate gray
      textSecondary: '#475569', // medium gray
      accent: '#2563EB', // royal blue
      accentHover: '#1D4ED8',
      gradient: 'from-[#2563EB] via-[#7C3AED] to-[#7C3AED]',
      borderColor: '#E2E8F0',
    },
    neon: {
      name: 'neon',
      background: '#0A0A0A',
      surface: '#1A1A1A',
      surfaceSecondary: '#2A2A2A',
      text: '#00FF00',
      textSecondary: '#00CC00',
      accent: '#FF00FF',
      gradient: 'from-[#00FF00] via-[#00CC00] to-[#FF00FF]',
    }
  };

  const changeTheme = (newTheme) => {
    if (newTheme === theme) return;
    
    setIsTransitioning(true);
    document.documentElement.style.setProperty('--transition-duration', '0.5s');
    
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }, 250);
    
    setTimeout(() => {
      setIsTransitioning(false);
      document.documentElement.style.setProperty('--transition-duration', '0.3s');
    }, 500);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes[theme];
    
    root.style.setProperty('--bg-primary', currentTheme.background);
    root.style.setProperty('--bg-surface', currentTheme.surface);
    root.style.setProperty('--bg-surface-secondary', currentTheme.surfaceSecondary);
    root.style.setProperty('--text-primary', currentTheme.text);
    root.style.setProperty('--text-secondary', currentTheme.textSecondary);
    root.style.setProperty('--accent', currentTheme.accent);
    root.style.setProperty('--gradient', currentTheme.gradient);
    
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const value = {
    theme,
    themes,
    changeTheme,
    isTransitioning,
    currentTheme: themes[theme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
