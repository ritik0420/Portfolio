import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Globe from "react-globe.gl"
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Ring'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import AnimatedText from '../components/AnimatedText'
import ParticleBackground from '../components/ParticleBackground'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Hero = () => {
  const isSmall=useMediaQuery({maxWidth:440});
  const isMobile=useMediaQuery({maxWidth:768});
  const isTablet=useMediaQuery({minWidth:768, maxWidth:1024});
  const { currentTheme } = useTheme();

  // Fallback theme in case context is not available
  const fallbackTheme = {
    text: '#FFFFFF',
    textSecondary: '#AFB0B6'
  };

  const theme = currentTheme || fallbackTheme;

  const sizes=calculateSizes(isSmall, isMobile, isTablet);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='min-h-screen w-full flex-col relative overflow-hidden'>
      <ParticleBackground />
      
      <motion.div 
        className='w-full mx-auto flex flex-col sm:mt-32 mt-16 c-space gap-4 relative z-10'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className='sm:text-4xl text-3xl font-medium text-center font-generalsans'
          style={{ color: theme.text }}
          variants={itemVariants}
        >
          <AnimatedText 
            text="Hi, I am Ritik" 
            type="typewriter" 
            speed={0.08}
            className="mr-2"
          />
          <span className='waving-hand'>👋</span>
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <AnimatedText 
            text="Building Websites & Apps" 
            type="stagger"
            className="hero_tag"
            delay={0.5}
          />
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-8"
          variants={itemVariants}
        >
          <motion.div
            className="px-6 py-3 rounded-full border border-current opacity-60 backdrop-blur-sm"
            style={{ color: theme.textSecondary }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            React Developer
          </motion.div>
          <motion.div
            className="px-6 py-3 rounded-full border border-current opacity-60 backdrop-blur-sm"
            style={{ color: theme.textSecondary }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            UI/UX Designer
          </motion.div>
          <motion.div
            className="px-6 py-3 rounded-full border border-current opacity-60 backdrop-blur-sm"
            style={{ color: theme.textSecondary }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Problem Solver
          </motion.div>
        </motion.div>
      </motion.div>

      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
           </HeroCamera>
           <group>
            <Target position={sizes.targetPosition}/>
            <ReactLogo position={sizes.reactLogoPosition}/>
            <Cube position={sizes.cubePosition}/>
            <Rings position={sizes.ringPosition}/>
           </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        
        {/* Globe component outside Canvas */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Globe
            height={600}
            width={600}
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[{
                lat: 30.3165,
                lng: 78.0322,
                text: "I'm here",
                color: 'white',
                size: 40,
            }]}
          />
        </div>
      </div>

      <motion.div 
        className='absolute bottom-[-40px] left-0 w-full z-10 c-space'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="#about" className='w-fit'>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 shadow-lg" />
        </a>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-24 left-12 w-24 h-24 border border-current rounded-full opacity-20"
        style={{ color: theme.textSecondary }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-48 right-24 w-20 h-20 border border-current rounded-full opacity-20"
        style={{ color: theme.textSecondary }}
        animate={{
          y: [0, 20, 0],
          rotate: [360, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}

export default Hero;