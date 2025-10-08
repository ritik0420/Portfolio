import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { currentTheme } = useTheme();

  // Fallback colors in case theme context is not available
  const fallbackTheme = {
    text: '#FFFFFF',
    accent: '#3A3A49'
  };

  const theme = currentTheme || fallbackTheme;

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, .grid-container, .tech-logo');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render custom cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[60] mix-blend-difference"
        style={{
          background: theme.text,
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[59] opacity-30"
        style={{
          background: theme.accent,
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[58] opacity-20"
        style={{
          background: `radial-gradient(circle, ${theme.accent}40 0%, transparent 70%)`,
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        animate={{
          scale: isHovering ? 1.2 : 0.8,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />
    </>
  );
};

export default CustomCursor;
