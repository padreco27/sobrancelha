import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Process from './components/Process';
import Services from './components/Services';
import Results from './components/Results';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Highlights from './components/Highlights';
import AboutMe from './components/AboutMe';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileActions from './components/MobileActions';
import './index.css';

function App() {
  // Apply scroll animations
  useIntersectionObserver('.section');

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
      <Testimonials />
      <Highlights />
      <CTA />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <MobileActions />
    </div>
  );
}

export default App;
