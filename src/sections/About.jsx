import Button from "../components/Button"
import { useState } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import BackendTechSVG from '../components/BackendTechSVG'
import DevOpsSVG from '../components/DevOpsSVG'
import ParallaxSection from '../components/ParallaxSection'
import AnimatedCounter from '../components/AnimatedCounter'
import ScrollReveal from '../components/ScrollReveal'

const About = () => {
    const { currentTheme, theme: themeName } = useTheme();
    const [hasCopied, setHasCopied] = useState(false);
    const { scrollYProgress } = useScroll();
    
    // Parallax effects for background elements
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
    
    // Fallback theme in case context is not available
    const fallbackTheme = {
        text: '#FFFFFF',
        textSecondary: '#AFB0B6'
    };

    const theme = currentTheme || fallbackTheme;

    const handleCopy = () => {
        navigator.clipboard.writeText("ritik.kaintura007@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    };

    const cardVariants = {
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
        <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="about">
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
                            : `radial-gradient(1200px 600px at 20% 10%, rgba(0, 255, 255, 0.10), transparent 60%),
                               radial-gradient(1000px 500px at 80% 20%, rgba(255, 0, 128, 0.08), transparent 60%),
                               radial-gradient(900px 900px at 50% 100%, rgba(141, 92, 255, 0.10), transparent 60%),
                               linear-gradient(180deg, #04060A 0%, #05010B 100%)`
                    }}
                />

                {/* Subtle animated grid */}
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
                    transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                >
                    <defs>
                        <pattern id="about-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                            <path 
                                d="M 4 0 L 0 0 0 4" 
                                fill="none" 
                                stroke={themeName === 'light' ? 'rgba(37,99,235,0.20)' : 'rgba(0,255,255,0.15)'} 
                                strokeWidth="0.25" 
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-grid)" />
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
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl"
                    style={{ 
                        background: themeName === 'light'
                            ? 'radial-gradient(circle, rgba(236,72,153,0.22), rgba(236,72,153,0.0) 60%)'
                            : 'radial-gradient(circle, rgba(255,0,128,0.22), rgba(255,0,128,0.0) 60%)' 
                    }}
                    animate={{ scale: [1, 1.07, 1], x: [0, -15, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-2xl"
                    style={{ 
                        background: themeName === 'light'
                            ? 'radial-gradient(circle, rgba(124,58,237,0.22), rgba(124,58,237,0.0) 60%)'
                            : 'radial-gradient(circle, rgba(147,51,234,0.2), rgba(147,51,234,0.0) 60%)' 
                    }}
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
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
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Section Header with parallax */}
            <ParallaxSection speed={0.3}>
                <motion.div 
                    className="w-full flex flex-col justify-center items-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative z-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--text-primary)' }}>
                        About Me
                    </h2>
                    <motion.div 
                        className="w-24 h-1 mx-auto rounded-full"
                        style={{ background: 'linear-gradient(to right, var(--accent), var(--accent), var(--accent))' }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                    
                    {/* Animated Stats */}
                    <ScrollReveal direction="fade" delay={0.3}>
                        <div className="flex flex-wrap justify-center gap-8 mt-10">
                            <motion.div 
                                className="text-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-4xl font-bold" style={{ color: 'var(--accent)' }}>
                                    <AnimatedCounter value={15} suffix="+" duration={2} />
                                </div>
                                <div className="text-sm mt-2" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>Technologies</div>
                            </motion.div>
                            <motion.div 
                                className="text-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-4xl font-bold" style={{ color: 'var(--accent)' }}>
                                    <AnimatedCounter value={100} suffix="%" duration={2.5} />
                                </div>
                                <div className="text-sm mt-2" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>Commitment</div>
                            </motion.div>
                            <motion.div 
                                className="text-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-4xl font-bold" style={{ color: 'var(--accent)' }}>
                                    <AnimatedCounter value={50} suffix="+" duration={2.2} />
                                </div>
                                <div className="text-sm mt-2" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>Code Reviews</div>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </motion.div>
            </ParallaxSection>

            <motion.div 
                className="w-full pb-20 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="col-span-1 xl:row-span-3"
                    variants={cardVariants}
                >
                    <motion.div 
                        className="relative backdrop-blur-sm rounded-3xl p-6 h-full overflow-hidden group transition-all duration-500"
                        style={{ 
                          backgroundColor: 'var(--bg-surface)', 
                          border: '1px solid var(--accent)',
                          borderColor: 'var(--accent)',
                          willChange: 'transform'
                        }}
                        whileHover={{ scale: 1.01, y: -3 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Card glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, var(--accent), transparent, var(--accent))' }}></div>
                        
                        <div className="relative z-10">
                            <div className="mb-6 relative">
                                <img src="/Gemini_Generated_Image_gjzpzhgjzpzhgjzp.png" alt="Ritik Profile" className="w-full sm:h-[276px] h-fit object-cover filter brightness-110 contrast-110 rounded-xl" />
                                {/* Image overlay glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" style={{ background: 'linear-gradient(to top, var(--accent), transparent)' }}></div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                    Hi, I'm Ritik
                                </h3>
                                <p className="leading-relaxed text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                                    Full-stack developer with expertise in modern web technologies. I specialize in building scalable, responsive applications with a focus on performance and user experience.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="col-span-1 xl:row-span-3"
                    variants={cardVariants}
                >
                    <motion.div 
                        className="relative backdrop-blur-sm rounded-3xl p-6 h-full overflow-hidden group transition-all duration-500"
                        style={{ 
                          backgroundColor: 'var(--bg-surface)', 
                          border: '1px solid var(--accent)',
                          borderColor: 'var(--accent)'
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Card glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, var(--accent), transparent, var(--accent))' }}></div>
                        
                        <div className="relative z-10">
                            <div className="mb-6 relative">
                                <img src="/Gemini_Generated_Image_2hw1qm2hw1qm2hw1.png" alt="Frontend Technologies" className="w-full h-48 sm:h-56 object-cover filter brightness-110 contrast-110 rounded-xl" />
                                {/* Image overlay glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" style={{ background: 'linear-gradient(to top, var(--accent), transparent)' }}></div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                    Frontend Technologies
                                </h3>
                                <p className="leading-relaxed text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                                    Expert in <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>React.js</span> and <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Next.js</span> with <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>React Router</span> for navigation. Proficient in <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Tailwind CSS</span>, <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Material-UI</span>, and <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Framer Motion</span> for stunning interfaces.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>React.js</span>
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>Next.js</span>
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>Tailwind CSS</span>
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>Chart.js</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="col-span-1 xl:row-span-4"
                    variants={cardVariants}
                >
                    <motion.div 
                        className="relative backdrop-blur-sm rounded-3xl p-6 h-full overflow-hidden group transition-all duration-500"
                        style={{ 
                          backgroundColor: 'var(--bg-surface)', 
                          border: '1px solid var(--accent)',
                          borderColor: 'var(--accent)'
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Card glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, var(--accent), transparent, var(--accent))' }}></div>
                        
                        <div className="relative z-10 h-full flex flex-col">
                            {/* Backend Technologies Animated Visualization */}
                            <motion.div 
                                className="rounded-2xl w-full sm:h-[326px] h-64 relative overflow-hidden mb-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-blue-400/20"
                                whileHover={{ 
                                    boxShadow: "0 0 30px rgba(99,179,237,0.3)",
                                    borderColor: "rgba(99,179,237,0.5)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0" style={{
                                    background:
                                      'radial-gradient(600px 300px at 20% 20%, rgba(99,179,237,0.15), transparent 60%),\n                                       radial-gradient(500px 300px at 80% 80%, rgba(104,211,145,0.12), transparent 60%),\n                                       linear-gradient(135deg, #0A0E1A 0%, #0D0B14 100%)'
                                  }} />
                                
                                {/* Backend Tech SVG Animation */}
                                <div className="absolute inset-0 z-10">
                                    <BackendTechSVG />
                                </div>
                            </motion.div>
                            
                            <div className="space-y-4 flex-grow">
                                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                    Backend & Server Technologies
                                </h3>
                                <p className="leading-relaxed text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                                    Experienced with <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Node.js</span> and <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Express.js</span> for building robust APIs. Skilled in <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>JWT Authentication</span>, <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>MongoDB</span> database management, and <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>REST API</span> development.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>Node.js</span>
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>Express.js</span>
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>MongoDB</span>
                                    <span className="px-2 py-1 text-xs rounded-full border" style={{ backgroundColor: 'var(--bg-surface-secondary)', color: 'var(--text-primary)', borderColor: 'var(--accent)' }}>JWT Auth</span>
                                </div>
                                <motion.div 
                                    className="pt-6"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button name="Contact Me" isBeam containerClass="w-full" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="xl:col-span-2 xl:row-span-3"
                    variants={cardVariants}
                >
                    <motion.div 
                        className="relative backdrop-blur-sm rounded-3xl p-6 h-full overflow-hidden group transition-all duration-500"
                        style={{ 
                          backgroundColor: 'var(--bg-surface)', 
                          border: '1px solid var(--accent)',
                          borderColor: 'var(--accent)'
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Card glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, var(--accent), transparent, var(--accent))' }}></div>
                        
                        <div className="relative z-10 h-full flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/2 relative flex items-center justify-center">
                                {/* DevOps Technologies Animated Visualization */}
                                <motion.div 
                                    className="rounded-2xl w-full aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-pink-400/20"
                                    whileHover={{ 
                                        boxShadow: "0 0 30px rgba(244,114,182,0.3)",
                                        borderColor: "rgba(244,114,182,0.5)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0" style={{
                                        background:
                                          'radial-gradient(600px 300px at 20% 20%, rgba(244,114,182,0.15), transparent 60%),\n                                           radial-gradient(500px 300px at 80% 80%, rgba(103,58,183,0.12), transparent 60%),\n                                           linear-gradient(135deg, #0A0E1A 0%, #0D0B14 100%)'
                                      }} />
                                    
                                    {/* DevOps SVG Animation */}
                                    <div className="absolute inset-0 z-10 p-4">
                                        <DevOpsSVG />
                                    </div>
                                </motion.div>
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                    DevOps & Deployment
                                </h3>
                                <p className="leading-relaxed text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                                    Proficient in <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Docker</span> containerization and <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Traefik</span> reverse proxy. Experienced with <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>VPS hosting</span> on Hostinger and EasyPanel, including <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>SSL/TLS</span> configuration and <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>DNS management</span>.
                                </p>
                                
                                {/* DevOps skills */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <motion.div 
                                        className="px-3 py-1 rounded-full border"
                                        style={{ backgroundColor: 'var(--bg-surface-secondary)', borderColor: 'var(--accent)' }}
                                        whileHover={{ scale: 1.05, borderColor: "rgba(244,114,182,0.5)" }}
                                    >
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Docker</span>
                                    </motion.div>
                                    <motion.div 
                                        className="px-3 py-1 rounded-full border"
                                        style={{ backgroundColor: 'var(--bg-surface-secondary)', borderColor: 'var(--accent)' }}
                                        whileHover={{ scale: 1.05, borderColor: "rgba(244,114,182,0.5)" }}
                                    >
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Traefik</span>
                                    </motion.div>
                                    <motion.div 
                                        className="px-3 py-1 rounded-full border"
                                        style={{ backgroundColor: 'var(--bg-surface-secondary)', borderColor: 'var(--accent)' }}
                                        whileHover={{ scale: 1.05, borderColor: "rgba(244,114,182,0.5)" }}
                                    >
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>VPS Hosting</span>
                                    </motion.div>
                                    <motion.div 
                                        className="px-3 py-1 rounded-full border"
                                        style={{ backgroundColor: 'var(--bg-surface-secondary)', borderColor: 'var(--accent)' }}
                                        whileHover={{ scale: 1.05, borderColor: "rgba(244,114,182,0.5)" }}
                                    >
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>SSL/TLS</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="xl:col-span-1 xl:row-span-2"
                    variants={cardVariants}
                >
                    <motion.div 
                        className="relative backdrop-blur-sm rounded-3xl p-6 h-full overflow-hidden group transition-all duration-500"
                        style={{ 
                          backgroundColor: 'var(--bg-surface)', 
                          border: '1px solid var(--accent)',
                          borderColor: 'var(--accent)'
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Card glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, var(--accent), transparent, var(--accent))' }}></div>
                        
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-4 relative">
                                <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top filter brightness-110 contrast-110" />
                                {/* Image overlay glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, var(--accent), transparent)' }}></div>
                            </div>
                            
                            <div className="flex-grow flex flex-col justify-center space-y-4">
                                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    UI/UX & Tools
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Responsive Design</span>, <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>SEO Optimization</span>, <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Google Maps API</span>, <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>TipTap Editor</span>, <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Formik</span>, <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Yup</span> validation, and <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Git/GitHub</span> version control.
                                </p>
                                <p className="text-sm font-medium text-center pt-2" style={{ color: 'var(--text-secondary)', opacity: 0.9 }}>
                                    Contact me
                                </p>
                                
                                <motion.div 
                                    className="relative bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-4 cursor-pointer group/copy hover:border-white/40 transition-all duration-300"
                                    onClick={handleCopy}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Copy button glow */}
                                    <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover/copy:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="relative z-10 flex items-center gap-3">
                                        <motion.div
                                            className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg"
                                            animate={hasCopied ? { scale: [1, 1.2, 1] } : {}}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img 
                                                src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} 
                                                alt="copy" 
                                                className="w-4 h-4 filter brightness-0 invert"
                                            />
                                        </motion.div>
                                        <p className="lg:text-xl md:text-lg text-base font-medium transition-colors duration-300 flex-1" style={{ color: 'var(--text-primary)' }}>
                                            ritik.kaintura007@gmail.com
                                        </p>
                                    </div>
                                    
                                    {/* Success feedback */}
                                    <motion.div
                                        className="absolute -top-2 -right-2 bg-white text-black px-2 py-1 rounded-lg text-xs font-semibold"
                                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                        animate={hasCopied ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Copied!
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                </div>
            </motion.div>

            {/* Futuristic accent lines */}
            <div className='pointer-events-none absolute inset-x-0 top-40 flex justify-center -z-0'>
                <div className='h-px w-11/12 max-w-5xl' style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.45), transparent)' }} />
            </div>
            <div className='pointer-events-none absolute inset-x-0 bottom-40 flex justify-center -z-0'>
                <div className='h-px w-10/12 max-w-4xl' style={{ background: 'linear-gradient(90deg, transparent, rgba(255,0,128,0.35), transparent)' }} />
            </div>
        </section>
    )
}

export default About