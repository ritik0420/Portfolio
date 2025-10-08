import React, { useState, useEffect } from 'react'
import './index.css';
import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import SectionTransition from './components/SectionTransition';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          {/* Full-width Hero outside of constrained container */}
          <Hero />
          <SectionTransition variant="line" color="cyan" />
          {/* Full-width About section to match Hero */}
          <About />
          <SectionTransition variant="dots" color="purple" />
          <Experience />
          <SectionTransition variant="wave" color="pink" />
          <Projects />
          <SectionTransition variant="dots" color="purple" />
          <Contact />
          <SectionTransition variant="line" color="cyan" />
          <Footer />
        </>
      )}
    </ThemeProvider>
  )
}

export default App