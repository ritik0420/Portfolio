import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * LazyImage Component
 * Lazy loads images with a smooth fade-in transition
 * Shows a blur placeholder while loading
 */
const LazyImage = ({ 
  src, 
  alt, 
  className = '',
  placeholderClassName = '',
  wrapperClassName = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !imageSrc) {
      // Create a new image element to preload
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
    }
  }, [inView, src, imageSrc]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Placeholder with blur effect */}
      {!isLoaded && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 ${placeholderClassName}`}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      
      {/* Actual image with fade-in */}
      {imageSrc && (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={className}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyImage;

