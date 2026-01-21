import React from 'react';
import { GeometricSymbol, ArrowRightIcon } from '../constants';
import Button from './Button';
import FadeInSection from './FadeInSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="mt-6 pb-12  px-4 md:px-8 lg:px-16">
      <FadeInSection>
        <div className="max-w-[1200px] mx-auto bg-[#121212] rounded-[40px] overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="p-10 md:p-16 lg:p-24">
            {/* Top Meta Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
              <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-60">FEBRUARY 12, 2025</span>
            </div>

            <div className="grid lg:grid-cols-2 items-center gap-12 relative">
              <div className="relative z-10">
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] mb-2 tracking-tighter uppercase">
                  KNGINE
                </h1>
                
                <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-md mb-12 font-medium">
            KNGINE: LEGION embodies the principles of collective strength and unity, reflecting how generation of richmond dites have come together to build the proud legacy of the college
                </p>
                
                <Button 
                  variant="primary" 
                  className="w-full sm:w-auto px-10 py-5 text-sm uppercase tracking-widest font-black" 
                  icon={<ArrowRightIcon className="w-4 h-4 -rotate-45" />}
                >
                  REGISTER NOW
                </Button>
              </div>
              
              
            </div>
            
          </div>
          <div className="hidden md:block relative h-full">
          <img
            src="/wrench.webp"
            alt=""
            className="absolute bottom-0 right-0 w-[500px] max-w-none"
          />

          {/* Glow */}
          <div className="absolute bottom-24 right-24 w-64 h-64 bg-[#2563EB]/10 blur-[150px] rounded-full pointer-events-none" />
        </div>

        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;