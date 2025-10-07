import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Optimized ScrollReveal Component
 * High-performance scroll-based animations with GPU acceleration
 * 
 * @param {string} direction - 'up', 'down', 'left', 'right', 'fade'
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} distance - Distance to slide in pixels
 * @param {boolean} once - Whether animation should only happen once
 */
const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.5,
  distance = 40,
  once = true,
  className = ''
}) => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: once,
    rootMargin: '50px', // Start animation earlier for smoother experience
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      case 'fade':
        return { opacity: 0 };
      case 'scale':
        return { scale: 0.8, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'scale':
        return { scale: 1, opacity: 1 };
      default:
        return { x: 0, y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Optimized easing curve for snappier feel
        type: "tween"
      }}
      style={{
        willChange: 'transform, opacity', // GPU acceleration hint
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

