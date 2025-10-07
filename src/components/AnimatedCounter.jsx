import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Optimized AnimatedCounter Component
 * High-performance number animations with RAF optimization
 * 
 * @param {number} value - The target number to count to
 * @param {number} duration - Duration of the count animation in seconds
 * @param {string} suffix - Optional suffix (e.g., '+', '%', 'K')
 * @param {string} prefix - Optional prefix (e.g., '$')
 */
const AnimatedCounter = ({ 
  value, 
  duration = 1.2, 
  suffix = '', 
  prefix = '',
  className = ''
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px',
  });

  const [displayValue, setDisplayValue] = useState(0);
  const prevInView = useRef(false);

  useEffect(() => {
    if (inView && !prevInView.current) {
      prevInView.current = true;
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * value);
        
        setDisplayValue(currentValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ 
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;

