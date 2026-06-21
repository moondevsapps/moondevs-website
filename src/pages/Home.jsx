import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AppsSection from '../components/AppsSection';
import Features from '../components/Features';
import About from '../components/About';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AppsSection />
        <Features />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
