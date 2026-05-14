import React, { useState } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Process from './components/Process';
import Services from './components/Services';
import Results from './components/Results';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Highlights from './components/Highlights';
import AboutMe from './components/AboutMe';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileActions from './components/MobileActions';
import SuccessModal from './components/SuccessModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Apply scroll animations
  useIntersectionObserver('.section');

  const handleFormSuccess = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Problems />
      <Solution />
      <Process />
      <Services />
      <Results />
      <Benefits />
      <Stats />
      <Testimonials />
      <Highlights />
      <CTA />
      <FAQ />
      <ContactForm onSuccess={handleFormSuccess} />
      <Footer />
      <WhatsAppButton />
      <MobileActions />
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
