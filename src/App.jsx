import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainerSection from './components/TrainerSection';
import FeaturesSection from './components/FeaturesSection';
import GiftSection from './components/GiftSection';
import TestimonialSection from './components/TestimonialSection';
import TransformationGallery from './components/TransformationGallery';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <TrainerSection />
      <FeaturesSection />
      <GiftSection />
      <TestimonialSection />
      <TransformationGallery />
      <AboutSection />
      <FAQSection />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
