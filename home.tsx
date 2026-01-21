
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import FeatureCards from './components/FeatureCards';
import Competitions from './components/Competitions';
import SpeakerGrid from './components/SpeakerGrid';
import WhyAttend from './components/WhyAttend';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <FadeInSection>
          <Sponsors />
        </FadeInSection>
        
        {/* <FeatureCards /> */}
        
        <FadeInSection>
          <Competitions />
        </FadeInSection>
        
        <SpeakerGrid />
        
        <FadeInSection>
          {/* <WhyAttend /> */}
        </FadeInSection>
        
        <FadeInSection>
          <Registration />
        </FadeInSection>
        
        <FadeInSection>
          <Contact />
        </FadeInSection>
        
        <FadeInSection>
          <Map />
        </FadeInSection>
      </main>

      <Footer />
    </div>
  );
};

export default App;
