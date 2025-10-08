import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { myProjects } from '../constants'
import ScrollReveal from '../components/ScrollReveal'
import LazyImage from '../components/LazyImage'
const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];
    return (
        <section id='work' className='c-space my-20'>
            <ScrollReveal direction="fade" duration={0.6}>
                <div className="text-center mb-12">
                    <p className='head-text inline-block relative'>
                        My Work
                        {/* Animated underline */}
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </p>
                    {/* Decorative micro-animations */}
                    <motion.div
                        className="flex justify-center gap-2 mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </ScrollReveal>

            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <ScrollReveal direction="left" duration={0.5} delay={0.1}>
                    <motion.div 
                        className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden group'
                        whileHover={{ 
                            scale: 1.01,
                            boxShadow: '0 0 40px rgba(0,255,255,0.3)',
                            borderColor: 'rgba(0,255,255,0.3)'
                        }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Animated background gradient on hover */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        
                    <div className='absolute top-0 right-0'>
                            <LazyImage 
                                src={currentProject.spotlight} 
                                alt='spotlight'
                                className='w-full h-96 object-cover rounded-xl'
                            />
                    </div>
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedProjectIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10"
                            >
                                <motion.div 
                                    className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg group/logo'
                                    style={currentProject.logoStyle}
                                    whileHover={{ scale: 1.08, rotate: 3 }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                        <img src={currentProject.logo} alt='logo'
                            className='w-10 h-10 shadow-sm' />
                                </motion.div>
                                
                    <div className='flex flex-col gap-5 text-white-600 my-5'>
                                    <motion.p 
                                        className='text-2xl font-semibold'
                                        style={{ color: 'var(--text-primary)' }}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {currentProject.title}
                                    </motion.p>
                                    <motion.p 
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {currentProject.desc}
                                    </motion.p>
                                    <motion.p 
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {currentProject.subdesc}
                                    </motion.p>
                    </div>
                                
                    <div className='flex items-center justify-between flex-wrap gap-5'>
                        <div className='flex items-center gap-3'>
                            {currentProject.tags.map((tag, index) => (
                                            <motion.div 
                                                key={index} 
                                                className='tech-logo'
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.2 + (index * 0.05), duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                whileHover={{ 
                                                    scale: 1.15, 
                                                    rotate: 5,
                                                    boxShadow: '0 0 20px rgba(0,255,255,0.5)'
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                    <img src={tag.path} alt={tag.name} />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <motion.a 
                                        className='flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition-colors'
                                        style={{ color: 'var(--text-secondary)' }}
                                        href={currentProject.href} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <p>Check Live Site</p>
                                        <motion.img 
                                            src='/assets/arrow-up.png'
                                            className='w-3 h-3' 
                                            alt="arrow"
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        
                        <div className='flex justify-between items-center mt-7 relative z-10'>
                            <motion.button 
                                className='arrow-btn'
                                onClick={() => handleNavigation('previous')}
                                whileHover={{ scale: 1.1, x: -5, boxShadow: '0 0 20px rgba(0,255,255,0.5)' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.img 
                                    src="/assets/left-arrow.png" 
                                    alt="left arrow" 
                                    className='w-4 h-4'
                                    whileHover={{ x: -2 }}
                                />
                            </motion.button>
                            
                            {/* Project counter with animation */}
                            <motion.div
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.span 
                                    className="text-cyan-400 font-bold text-lg"
                                    key={selectedProjectIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                >
                                    {selectedProjectIndex + 1}
                                </motion.span>
                                <span style={{ color: 'var(--text-secondary)', opacity: 0.5 }}> / {projectCount}</span>
                            </motion.div>
                            
                            <motion.button 
                                className='arrow-btn'
                                onClick={() => handleNavigation('next')}
                                whileHover={{ scale: 1.1, x: 5, boxShadow: '0 0 20px rgba(0,255,255,0.5)' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.img 
                                    src="/assets/right-arrow.png" 
                                    alt="right arrow" 
                                    className='w-4 h-4'
                                    whileHover={{ x: 2 }}
                                />
                            </motion.button>
                        </div>
                    </motion.div>
                </ScrollReveal>

                <ScrollReveal direction="right" duration={0.5} delay={0.15}>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={selectedProjectIndex}
                            className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full relative overflow-hidden group'
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ 
                                borderColor: 'rgba(0,255,255,0.5)',
                                boxShadow: '0 0 30px rgba(0,255,255,0.3)'
                            }}
                        >
                    {/* Replace 3D canvas with video preview when available; fallback to spotlight */}
                    {currentProject.texture ? (
                      <video
                                className='w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500'
                        src={currentProject.texture}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                              <LazyImage 
                                src={currentProject.spotlight} 
                                alt='preview' 
                                className='w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500' 
                              />
                            )}
                            
                            {/* Animated neon overlay lines */}
                            <motion.div 
                                className='pointer-events-none absolute inset-x-0 top-10 flex justify-center'
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                              <motion.div 
                                className='h-px w-10/12' 
                                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.45), transparent)' }}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                            <motion.div 
                                className='pointer-events-none absolute inset-x-0 bottom-10 flex justify-center'
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                              <motion.div 
                                className='h-px w-9/12' 
                                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,0,128,0.35), transparent)' }}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              />
                            </motion.div>
                            
                            {/* Corner decorations with micro-animations */}
                            {[
                                { top: '10px', left: '10px' },
                                { top: '10px', right: '10px' },
                                { bottom: '10px', left: '10px' },
                                { bottom: '10px', right: '10px' }
                            ].map((pos, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-4 h-4 border-cyan-400"
                                    style={{
                                        ...pos,
                                        borderWidth: pos.top && pos.left ? '2px 0 0 2px' :
                                                    pos.top && pos.right ? '2px 2px 0 0' :
                                                    pos.bottom && pos.left ? '0 0 2px 2px' :
                                                    '0 2px 2px 0'
                                    }}
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default Projects