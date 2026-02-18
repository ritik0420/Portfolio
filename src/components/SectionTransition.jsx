import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionTransition Component
 * Adds smooth transitions between sections with decorative elements
 */
const SectionTransition = ({ 
  variant = 'line', // 'line', 'wave', 'dots'
  color = 'cyan'
}) => {
  const colorMap = {
    cyan: 'rgba(0,255,255,0.5)',
    purple: 'rgba(147,51,234,0.5)',
    pink: 'rgba(255,0,128,0.5)'
  };

  if (variant === 'line') {
    return (
      <div className="relative w-full h-16 flex items-center justify-center overflow-hidden">
        <motion.div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${colorMap[color]}, transparent)`
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        
        {/* Animated dots along the line */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              background: colorMap[color]
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1 + 0.5 
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="relative w-full h-16 flex items-center justify-center">
        <div className="flex gap-3">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: colorMap[color] }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default wave variant
  return (
    <div className="relative w-full h-16 overflow-hidden">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <motion.path
          d="M0,30 Q300,10 600,30 T1200,30"
          fill="none"
          stroke={colorMap[color]}
          strokeWidth="2"
          animate={{
            d: [
              "M0,30 Q300,10 600,30 T1200,30",
              "M0,30 Q300,50 600,30 T1200,30",
              "M0,30 Q300,10 600,30 T1200,30"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </div>
  );
};

export default SectionTransition;

