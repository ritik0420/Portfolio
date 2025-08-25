import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingMessages = [
    "Initializing portfolio...",
    "Loading 3D models...",
    "Setting up animations...",
    "Preparing themes...",
    "Almost ready...",
    "Welcome to my portfolio!"
  ];

  useEffect(() => {
    if (currentIndex < loadingMessages.length) {
      const timer = setTimeout(() => {
        setLoadingText(loadingMessages[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 500);
    }
  }, [currentIndex, loadingMessages, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{
            background: '#010103',
            color: '#FFFFFF'
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo/Title */}
          <motion.div
            className="text-6xl font-bold mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            R
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-64 h-2 rounded-full overflow-hidden mb-8"
            style={{ background: '#0E0E10' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: '#3A3A49' }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.div
            key={loadingText}
            className="text-xl font-medium text-center min-h-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {loadingText}
          </motion.div>

          {/* Animated dots */}
          <motion.div className="flex gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: '#3A3A49' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 rounded-full opacity-30"
            style={{ background: '#3A3A49' }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-6 h-6 rounded-full opacity-30"
            style={{ background: '#3A3A49' }}
            animate={{
              y: [0, 20, 0],
              rotate: [360, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
