
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import MaintenanceSection from './components/MaintenanceSection';
import TestimonialSection from './components/TestimonialSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <MaintenanceSection />
        <TestimonialSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
