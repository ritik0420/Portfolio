import React, { useState, useEffect } from 'react'
import './index.css';
import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import FloatingActionButton from './components/FloatingActionButton';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <main className='max-w-7xl mx-auto relative'>
        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <>
            <CustomCursor />
            <ScrollProgress />
            <ThemeToggle />
            <Navbar />
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="work">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
            <FloatingActionButton />
          </>
        )}
      </main>
    </ThemeProvider>
  )
}

export default App