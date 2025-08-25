import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  type = 'reveal', 
  className = '', 
  delay = 0,
  speed = 0.05,
  repeat = false 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (type === 'typewriter') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsComplete(true);
          if (repeat) {
            setTimeout(() => {
              setDisplayText('');
              setCurrentIndex(0);
              setIsComplete(false);
            }, 2000);
          }
        }
      }, speed * 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, type, speed, repeat]);

  if (type === 'typewriter') {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      </motion.span>
    );
  }

  if (type === 'reveal') {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
      >
        {text}
      </motion.div>
    );
  }

  if (type === 'stagger') {
    return (
      <div className={className}>
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: delay + (index * 0.1), 
              duration: 0.5,
              ease: "easeOut"
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  }

  return <span className={className}>{text}</span>;
};

export default AnimatedText;
