
import React from 'react';
import { CompetitionLogos, ArrowRightIcon } from '../constants';

const Competitions: React.FC = () => {
  const competitions = [
    { 
      id: '01',
      name: 'Intellect',
      logo: '/comps/quiz.png', 
      desc: 'The ultimate battle of wits for the brightest minds in the region.',
      info: ['Team of 4 members', 'General IT Knowledge', 'Live Stage Final'],
      status: 'OPEN',
      featured: false
    },
    { 
      id: '02',
      name: 'Code__com',
      logo: '/comps/codecom.png', 
      desc: 'A high-stakes algorithmic challenge for young developers.',
      info: ['Individual entry', 'Competitive Programming', '3 Hours duration'],
      status: 'OPEN',
      featured: false 
    },
    { 
      id: '03',
      name: 'Cyber Combat',
      logo: '/comps/cybercombat.png', 
      desc: 'Strategic gaming tournament testing reflexes and teamwork.',
      info: ['Team of 4 members', 'FPS/MOBA Focus', 'Direct Elimination'],
      status: 'OPEN',
      featured: true
    },
    { 
      id: '04',
      name: 'DeXigner',
      logo: '/comps/designerx.png', 
      desc: 'Visual storytelling and digital art competition for creative visionaries.',
      info: ['Individual entry', 'Brand Identity', 'Visual Design'],
      status: 'OPEN',
      featured: false
    }
  ];

  return (
    <section id="competitions" className="py-20 md:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 md:mb-24 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter">
            COMPETITIONS
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base font-medium max-w-xs md:text-right uppercase tracking-widest">
            Pushing the boundaries of student innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitions.map((comp, idx) => (
            <div 
              key={idx} 
              className={`rounded-[32px] p-10 flex flex-col justify-between h-full border transition-all duration-500 group ${
                comp.featured 
                ? 'bg-[#2563EB] border-[#2563EB] shadow-[0_20px_50px_rgba(37,99,235,0.25)] scale-[1.02] z-10' 
                : 'bg-[#121212] border-white/5 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                    comp.featured ? 'bg-white/20 text-white' : 'bg-[#2563EB]/10 text-[#2563EB]'
                  }`}>
                    {comp.status}
                  </span>
                  <span className={`text-2xl font-black italic opacity-20 ${comp.featured ? 'text-white' : 'text-[#6B7280]'}`}>
                    {comp.id}
                  </span>
                </div>

                <div className={`mb-10 h-20 flex items-center ${comp.featured ? 'brightness-0 invert' : ''}`}>
                  <img src={comp.logo} alt="logo"/>
                </div>

                <p className={`text-sm font-medium leading-relaxed mb-8 ${comp.featured ? 'text-white' : 'text-[#9CA3AF]'}`}>
                  {comp.desc}
                </p>

                <ul className="space-y-4 mb-12">
                  {comp.info.map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-xs font-bold uppercase tracking-widest ${
                      comp.featured ? 'text-white/90' : 'text-[#6B7280]'
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${comp.featured ? 'bg-white' : 'bg-[#2563EB]'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center justify-center gap-2 ${
                comp.featured 
                ? 'bg-white text-[#2563EB] hover:shadow-xl' 
                : 'bg-transparent border border-white/10 text-white hover:bg-white hover:text-[#0B0B0B]'
              }`}>
                Register Now <ArrowRightIcon className="w-3 h-3 -rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
