import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ParallaxSection Component
 * Creates parallax scrolling effect on child elements
 * 
 * @param {number} speed - Speed multiplier for parallax effect (0-1 slower, >1 faster)
 * @param {string} direction - 'vertical' or 'horizontal'
 */
const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  direction = 'vertical',
  className = '' 
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Apply spring physics for smoother parallax with optimized values
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 200,
    restDelta: 0.001
  });

  // Transform values based on direction
  const y = useTransform(
    smoothProgress,
    [0, 1],
    direction === 'vertical' ? [0, -100 * speed] : [0, 0]
  );
  
  const x = useTransform(
    smoothProgress,
    [0, 1],
    direction === 'horizontal' ? [0, -100 * speed] : [0, 0]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div 
        style={{ 
          y, 
          x,
          willChange: 'transform'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;

