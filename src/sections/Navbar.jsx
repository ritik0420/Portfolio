import React, { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { navLinks } from '../constants'
import ThemeToggle from '../components/ThemeToggle'
import { useTheme } from '../context/ThemeContext'

const NavItems = ({ onClick = () => {}, isScrolled = false }) => (
  <ul className="nav-ul">
    {navLinks.map((item, index) => (
      <motion.li 
        key={item.id} 
        className="nav-li"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <a 
          href={item.href} 
          className={`nav-li_a relative group ${isScrolled ? 'nav-li_a-scrolled' : ''}`}
          onClick={onClick}
        >
          {item.name}
          <span className="nav-underline"></span>
        </a>
      </motion.li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { theme } = useTheme();
  
  const toggleMenu = () => setIsOpen((prevIsOpen => !prevIsOpen));

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl border-b shadow-2xl' 
          : 'bg-transparent backdrop-blur-none'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--bg-surface)' : 'transparent',
        borderColor: isScrolled ? 'var(--accent)' : 'transparent',
        boxShadow: isScrolled ? '0 0 20px var(--accent)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: isScrolled 
            ? 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 50%, var(--accent) 100%)'
            : 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 50%, var(--accent) 100%)',
          opacity: isScrolled ? 0.1 : 0.05
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-60"
          style={{ 
            backgroundColor: 'var(--accent)',
            left: `${20 + i * 30}%`,
            top: '50%',
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='max-w-7xl mx-auto relative'>
        <div className='flex justify-between items-center py-4 mx-auto c-space'>
          <motion.a 
            href='/' 
            className={`font-bold text-2xl transition-all duration-500 relative group ${
              isScrolled 
                ? 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent' 
                : ''
            }`}
            style={{ color: isScrolled ? undefined : 'var(--text-primary)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ritik
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <div className='flex items-center gap-3'>
            <div className='sm:hidden flex items-center'>
              <ThemeToggle />
            </div>
            
            <motion.button 
              onClick={toggleMenu} 
              className={`relative p-2 rounded-lg transition-all duration-300 sm:hidden flex ${
                theme === 'light'
                  ? 'bg-slate-200/80 border border-slate-300 hover:border-slate-400'
                  : isScrolled 
                    ? 'bg-black/30 border border-cyan-400/30 hover:border-cyan-400/60' 
                    : 'bg-black/20 border border-white/20 hover:border-white/40'
              }`}
              aria-label='Toggle Menu'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                alt="toggle" 
                className={`w-6 h-6 ${theme === 'light' ? 'brightness-0' : 'filter brightness-0 invert'}`}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <div className='sm:flex hidden items-center'>
              <nav>
                <NavItems isScrolled={isScrolled} />
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu with enhanced styling */}
      <motion.div 
        className="nav-sidebar relative backdrop-blur-xl border-t sm:hidden"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--accent)',
          display: isOpen ? 'block' : 'none',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        initial={false}
        animate={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)'
          }}
        />
        <nav className="p-6 relative z-10">
          <NavItems onClick={() => setIsOpen(false)} isScrolled={isScrolled} />
        </nav>
      </motion.div>
    </motion.header>
  )
}

export default Navbar