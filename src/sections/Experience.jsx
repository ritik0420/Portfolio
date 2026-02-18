import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { workExperiences } from '../constants'
import ScrollReveal from '../components/ScrollReveal'
import { useTheme } from '../context/ThemeContext'

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0)
  const { theme: themeName } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const currentExp = workExperiences[selectedExperience]

  // Color mapping for theme consistency
  const colorSchemes = {
    cyan: {
      border: 'border-cyan-400/20',
      hoverBorder: 'hover:border-cyan-400/40',
      gradient: 'from-cyan-400/5 via-transparent to-blue-500/5',
      tag: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
      glow: 'rgba(0,255,255,0.3)',
      accent: 'text-cyan-400'
    },
    purple: {
      border: 'border-purple-400/20',
      hoverBorder: 'hover:border-purple-400/40',
      gradient: 'from-purple-400/5 via-transparent to-pink-500/5',
      tag: 'bg-purple-400/20 text-purple-300 border-purple-400/30',
      glow: 'rgba(147,51,234,0.3)',
      accent: 'text-purple-400'
    },
    pink: {
      border: 'border-pink-400/20',
      hoverBorder: 'hover:border-pink-400/40',
      gradient: 'from-pink-400/5 via-transparent to-orange-500/5',
      tag: 'bg-pink-400/20 text-pink-300 border-pink-400/30',
      glow: 'rgba(244,114,182,0.3)',
      accent: 'text-pink-400'
    }
  }

  const colors = colorSchemes[currentExp.color] || colorSchemes.cyan

  /* Light theme: higher contrast for filter buttons and tags */
  const isLight = themeName === 'light'
  const filterBtnSelectedClass = isLight
    ? 'bg-blue-100 border-blue-400 text-blue-900 shadow-md'
    : `${colorSchemes[currentExp.color].border.replace('border-', 'bg-')} ${colorSchemes[currentExp.color].border} shadow-lg`
  const filterBtnBaseClass = isLight
    ? 'bg-slate-100/90 border-slate-300 text-slate-800 hover:border-slate-400'
    : 'bg-black/20 border-white/10 hover:border-white/30'
  const tagClass = isLight
    ? 'bg-blue-100 text-blue-800 border-blue-200'
    : colors.tag
  const accentTextClass = isLight ? 'text-blue-600' : colors.accent

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden c-space my-20" id="experience">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Gradient base */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              'radial-gradient(1200px 600px at 20% 10%, rgba(0, 255, 255, 0.08), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(255, 0, 128, 0.06), transparent 60%), radial-gradient(900px 900px at 50% 100%, rgba(141, 92, 255, 0.08), transparent 60%)'
          }}
        />

        {/* Neon glow blobs */}
        <motion.div
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.2), rgba(0,255,255,0.0) 60%)' }}
          animate={{ scale: [1, 1.05, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.18), rgba(147,51,234,0.0) 60%)' }}
          animate={{ scale: [1, 1.07, 1], x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <ScrollReveal direction="fade" duration={0.6}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="head-text inline-block relative">
            Work Experience
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </h2>
          
          {/* Decorative dots */}
          <motion.div
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
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
        </motion.div>
      </ScrollReveal>

      {/* Timeline Navigation */}
      <ScrollReveal direction="fade" delay={0.2}>
        <div className="flex justify-center items-center gap-4 mb-12 flex-wrap px-4">
          {workExperiences.map((exp, index) => (
            <motion.button
              key={exp.id}
              onClick={() => setSelectedExperience(index)}
              className={`px-6 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                selectedExperience === index ? filterBtnSelectedClass : filterBtnBaseClass
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-semibold text-sm md:text-base" style={{ color: isLight ? undefined : 'var(--text-primary)' }}>{exp.company}</div>
              <div className={`text-xs mt-1 ${selectedExperience === index ? 'opacity-90' : 'opacity-70'}`} style={{ color: isLight ? undefined : 'var(--text-primary)' }}>
                {exp.period}
              </div>
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Experience Details */}
      <ScrollReveal direction="up" delay={0.3}>
        <motion.div
          key={selectedExperience}
          className="max-w-6xl mx-auto w-full px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={`relative backdrop-blur-sm border rounded-3xl p-6 md:p-10 overflow-hidden group transition-all duration-500 ${
              isLight ? 'bg-white/95 border-slate-200 shadow-lg shadow-slate-200/50 hover:border-slate-300' : `bg-black/20 ${colors.border} ${colors.hoverBorder}`
            }`}
            layoutId="experience-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative z-10">
              {/* Header */}
              <motion.div 
                className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6"
                variants={itemVariants}
              >
                <div>
                  <motion.h3 
                    className={`text-3xl md:text-4xl font-bold mb-2`}
                    style={{ color: 'var(--text-primary)' }}
                    whileHover={{ x: 5 }}
                  >
                    {currentExp.position}
                  </motion.h3>
                  <div className="flex flex-wrap items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <span className={`text-xl font-semibold ${accentTextClass}`}>{currentExp.company}</span>
                    <span style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>•</span>
                    <span>{currentExp.location}</span>
                    {currentExp.type && (
                      <>
                        <span style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>•</span>
                        <span className="px-2 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)' }}>{currentExp.type}</span>
                      </>
                    )}
                  </div>
                </div>
                <motion.div 
                  className={`px-4 py-2 ${tagClass} rounded-full border text-sm font-medium whitespace-nowrap`}
                  whileHover={{ scale: 1.05 }}
                >
                  {currentExp.period}
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
                variants={itemVariants}
              >
                {currentExp.description}
              </motion.p>

              {/* Live URL */}
              {currentExp.liveUrl && (
                <motion.a
                  href={currentExp.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${accentTextClass} hover:underline mb-6 text-sm md:text-base`}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span>Live Project: {currentExp.liveUrl.replace('https://', '')}</span>
                  <motion.img 
                    src='/assets/arrow-up.png'
                    className='w-3 h-3 brightness-0 invert' 
                    alt="arrow"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.a>
              )}

              {/* Projects */}
              {currentExp.projects && (
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Key Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExp.projects.map((project, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm border"
                        style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                      >
                        {project}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key Achievements */}
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <h4 className="font-semibold text-xl mb-4" style={{ color: 'var(--text-primary)' }}>Key Contributions & Achievements:</h4>
                <ul className="space-y-3">
                  {currentExp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      style={{ color: 'var(--text-secondary)' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                      />
                      <span className="text-sm md:text-base leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold text-xl mb-4" style={{ color: 'var(--text-primary)' }}>Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                    {currentExp.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        className={`px-4 py-2 ${tagClass} rounded-full border text-sm font-medium`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: `0 0 20px ${colors.glow}`,
                        borderColor: colors.glow
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Corner decorations */}
            {[
              { top: '10px', left: '10px' },
              { top: '10px', right: '10px' },
              { bottom: '10px', left: '10px' },
              { bottom: '10px', right: '10px' }
            ].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-4 h-4 ${colors.border.replace('/20', '/60').replace('border-', 'border-2 border-')}`}
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
        </motion.div>
      </ScrollReveal>

      {/* Decorative accent lines */}
      <div className='pointer-events-none absolute inset-x-0 top-40 flex justify-center -z-0'>
        <div className='h-px w-11/12 max-w-5xl' style={{ background: 'linear-gradient(90deg, transparent, rgba(147,51,234,0.45), transparent)' }} />
      </div>
    </section>
  )
}

export default Experience

