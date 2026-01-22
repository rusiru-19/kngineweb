
"use client"
import React from 'react';
import FadeInSection from './FadeInSection';
import { ArrowRightIcon } from '@/constants';

const SpeakerGrid: React.FC = () => {
  const speakers = [
    { 
      name: 'Dr. Emily Carter', 
      role: 'Chief AI Scientist, OpenAI', 
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&auto=format&fit=crop',
      type: 'text' 
    },
    { 
      name: 'Sarah Chen', 
      role: 'Head of Robotics, Tesla', 
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=800&auto=format&fit=crop',
      type: 'image' 
    },
    { 
      name: 'Elon Park', 
      role: 'CTO, DeepMind', 
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=800&auto=format&fit=crop',
      type: 'text' 
    },
    { 
      name: 'Marcus Thorne', 
      role: 'Founder, AGI Labs', 
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=800&auto=format&fit=crop',
      type: 'image' 
    }
  ];

  return (
    <section id="speakers" className="py-20 md:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              KEYNOTE<br />SPEAKERS
            </h2>
            <p className="text-[#9CA3AF] max-w-[200px] md:text-right mt-6 md:mt-4 text-xs font-medium leading-relaxed uppercase tracking-widest">
              Meet the industry leaders shaping the future of ICT.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {speakers.map((speaker, idx) => (
            <FadeInSection key={idx} delay={idx * 50}>
              <div className="group h-[400px] md:h-[450px] relative overflow-hidden rounded-[32px] cursor-pointer">
                {speaker.type === 'text' ? (
                  <div className="w-full h-full bg-[#D1D5DB] p-8 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]">
                    <h4 className="text-2xl md:text-3xl font-black text-[#0B0B0B] leading-tight tracking-tighter">
                      {speaker.name}
                    </h4>
                    <p className="text-[#4B5563] text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
                      {speaker.role}
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#121212] transition-transform duration-500 group-hover:scale-[1.02]">
                    <img 
                      src={speaker.img} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <h4 className="text-xl font-black text-white tracking-tighter uppercase">{speaker.name}</h4>
                      <p className="text-white/70 text-[10px] uppercase font-bold tracking-widest">{speaker.role}</p>
                    </div>
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="flex justify-start">
            <button className="px-10 py-4 rounded-full border border-white/20 text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-[#0B0B0B] transition-all duration-300 group">
              And more <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45" />
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SpeakerGrid;
