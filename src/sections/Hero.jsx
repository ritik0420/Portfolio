import React, { useState, useEffect } from 'react'
import AnimatedText from '../components/AnimatedText'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ParallaxSection from '../components/ParallaxSection'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
  const { currentTheme, theme: themeName } = useTheme();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for background elements
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Fallback theme in case context is not available
  const fallbackTheme = {
    text: '#FFFFFF',
    textSecondary: '#AFB0B6'
  };

  const theme = currentTheme || fallbackTheme;

  // Roles for typing effect
  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer", 
    "Frontend Expert",
    "Next.js Enthusiast",
    "JavaScript Developer"
  ];

  // Social media links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ritik-kaintura', icon: '/assets/github.svg' },
    { name: 'Twitter', url: 'https://twitter.com/ritik_kaintura', icon: '/assets/twitter.svg' },
    { name: 'Instagram', url: 'https://instagram.com/ritik_kaintura', icon: '/assets/instagram.svg' },
    { name: 'Notion', url: 'https://notion.so/ritik-kaintura', icon: '/assets/notion.svg' }
  ];

  // Auto-rotate roles with smoother timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // Increased interval for smoother experience
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id='home' className='min-h-screen w-full flex-col relative overflow-hidden'>
      {/* Animated Background - Theme Aware */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Gradient base */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: themeName === 'light'
              ? `radial-gradient(1200px 600px at 20% 10%, rgba(37,99,235,0.15), transparent 60%),
                 radial-gradient(1000px 500px at 80% 20%, rgba(236,72,153,0.12), transparent 60%),
                 radial-gradient(900px 900px at 50% 100%, rgba(124,58,237,0.15), transparent 60%),
                 linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-primary) 100%)`
              : `radial-gradient(1200px 600px at 20% 10%, rgba(0,255,255,0.10), transparent 60%),
                 radial-gradient(1000px 500px at 80% 20%, rgba(255,0,128,0.08), transparent 60%),
                 radial-gradient(900px 900px at 50% 100%, rgba(141,92,255,0.10), transparent 60%),
                 linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-primary) 100%)`
          }}
        />

        {/* Subtle animated grid (SVG) */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: themeName === 'light' ? 0.20 : 0.20 }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          initial={{ x: '-2%' }}
          animate={{ x: '2%' }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path 
                d="M 4 0 L 0 0 0 4" 
                fill="none" 
                stroke={themeName === 'light' ? 'rgba(37,99,235,0.20)' : 'rgba(0,255,255,0.15)'} 
                strokeWidth="0.25" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </motion.svg>

        {/* Animated glow blobs - Theme Aware */}
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: themeName === 'light' 
              ? 'radial-gradient(circle, rgba(37,99,235,0.25), rgba(37,99,235,0.0) 60%)' 
              : 'radial-gradient(circle, rgba(0,255,255,0.25), rgba(0,255,255,0.0) 60%)'
          }}
          animate={{ scale: [1, 1.05, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ 
            background: themeName === 'light' 
              ? 'radial-gradient(circle, rgba(236,72,153,0.22), rgba(236,72,153,0.0) 60%)' 
              : 'radial-gradient(circle, rgba(255,0,128,0.22), rgba(255,0,128,0.0) 60%)'
          }}
          animate={{ scale: [1, 1.07, 1], x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl"
          style={{ 
            background: themeName === 'light' 
              ? 'radial-gradient(circle, rgba(124,58,237,0.22), rgba(124,58,237,0.0) 60%)' 
              : 'radial-gradient(circle, rgba(147,51,234,0.2), rgba(147,51,234,0.0) 60%)'
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Additional side glow effects for full width coverage */}
        <motion.div
          className="absolute top-1/4 -left-12 w-48 h-48 rounded-full blur-2xl"
          style={{ 
            background: themeName === 'light' 
              ? 'radial-gradient(circle, rgba(59,130,246,0.20), rgba(59,130,246,0.0) 60%)' 
              : 'radial-gradient(circle, rgba(59,130,246,0.15), rgba(59,130,246,0.0) 60%)'
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-12 w-48 h-48 rounded-full blur-2xl"
          style={{ 
            background: themeName === 'light' 
              ? 'radial-gradient(circle, rgba(236,72,153,0.20), rgba(236,72,153,0.0) 60%)' 
              : 'radial-gradient(circle, rgba(236,72,153,0.15), rgba(236,72,153,0.0) 60%)'
          }}
          animate={{ scale: [1, 1.15, 1], y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={themeName === 'light' ? 'absolute w-1.5 h-1.5 bg-blue-500 rounded-full' : 'absolute w-1 h-1 bg-cyan-400 rounded-full'}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: themeName === 'light' ? 0.5 : 0.5,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: themeName === 'light' ? [0.4, 0.8, 0.4] : [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      

      <motion.div 
        className='w-full mx-auto flex flex-col justify-center items-center min-h-screen sm:pt-32 pt-16 pb-28 md:pb-36 c-space gap-6 relative z-10'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Avatar */}
        <motion.div 
          className="relative mb-8"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Avatar with actual photo */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/Gemini_Generated_Image_k3xbdak3xbdak3xb.png" 
                  alt="Ritik Kaintura" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Animated ring around avatar */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ padding: '2px' }}
            >
              <div className="w-full h-full rounded-full bg-transparent"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Catchy One-Liner */}
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-xl md:text-2xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Turning ideas into interactive web experiences
            </span>{' '}
            <span className="inline-block">🚀</span>
          </motion.h3>
        </motion.div>

        {/* Dynamic Role with Typing Effect */}
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
        >
          <div className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            I'm a{' '}
            <AnimatedText 
              key={currentRoleIndex}
              text={roles[currentRoleIndex]} 
              type="typewriter"
              className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              delay={0.3}
              speed={0.08}
            />
          </div>
        </motion.div>

        {/* Quick Highlights with Animated Counters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 hover:border-cyan-400/60 hover:bg-black/40 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
          >
            <span className="text-cyan-400 text-sm font-medium">
              <AnimatedCounter value={1} duration={2} /> Year Experience
            </span>
          </motion.div>
          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 hover:border-purple-400/60 hover:bg-black/40 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147,51,234,0.3)' }}
          >
            <span className="text-purple-400 text-sm font-medium">
              <AnimatedCounter value={10} suffix="+" duration={2.5} /> Projects Built
            </span>
          </motion.div>
          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 hover:border-blue-400/60 hover:bg-black/40 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
          >
            <span className="text-blue-400 text-sm font-medium">MERN Stack Developer</span>
          </motion.div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className="flex gap-4 mb-8"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-full flex items-center justify-center hover:border-cyan-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
            >
              <img 
                src={social.icon} 
                alt={social.name}
                className="w-5 h-5 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Description with Typewriter Effect */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14"
          variants={itemVariants}
        >
          <div className="text-lg md:text-xl leading-relaxed">
            <AnimatedText 
              text="Specializing in React.js, Next.js, and modern JavaScript technologies. I create clean, scalable, and engaging web solutions that bring your vision to life."
              type="typewriter"
              className="font-medium"
              style={{ color: 'var(--text-primary)' }}
              delay={2.5}
              speed={0.04}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Futuristic accent lines with parallax */}
      <motion.div 
        className='pointer-events-none absolute inset-x-0 top-40 flex justify-center -z-0'
        style={{ y: yParallax, opacity: opacityParallax }}
      >
        <motion.div 
          className='h-px w-11/12 max-w-5xl' 
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.45), transparent)' }}
          animate={{ scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      <motion.div 
        className='pointer-events-none absolute inset-x-0 bottom-40 flex justify-center -z-0'
        style={{ y: yParallax, opacity: opacityParallax }}
      >
        <motion.div 
          className='h-px w-10/12 max-w-4xl' 
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,0,128,0.35), transparent)' }}
          animate={{ scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </motion.div>

      
    </section>
  )
}

export default Hero;