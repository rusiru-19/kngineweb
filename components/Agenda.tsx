import React from 'react';

const Agenda: React.FC = () => {
  const items = [
    {
      day: 1,
      time: '09:00 - 19:00',
      title: 'AI Innovations & Trends',
      description: 'The summit kicks off with a keynote, expert panels, and discussions on AI impact, ethics, and automation.'
    },
    {
      day: 2,
      time: '10:00 - 18:00',
      title: 'ML & Deep Learning Systems',
      description: 'Deep dive into technical architectures, large language models, and the infrastructure powering next-gen intelligence.'
    },
    {
      day: 3,
      time: '09:30 - 16:00',
      title: 'Future of AI & Networking',
      description: 'Looking ahead to long-term impact, expert-led workshops, and the closing keynote and networking sessions.'
    }
  ];

  return (
    <section id="register" className="py-20 md:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-20 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter">AGENDA</h2>
          <span className="text-[#6B7280] text-xs md:text-sm font-bold uppercase tracking-widest">October 15-17, 2052 | Horizon Center</span>
        </div>

        <div className="space-y-6 md:space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#121212] border border-white/5 rounded-[32px] p-8 md:p-12 transition-colors hover:bg-[#1A1A1A]">
              <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-[#6B7280] font-bold text-sm md:text-base mb-1 uppercase tracking-widest">Day {item.day}</div>
                  <div className="text-white text-xl md:text-2xl font-black">{item.time}</div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">{item.description}</p>
                </div>
                <div className="flex lg:justify-end items-center mt-6 lg:mt-0">
                   <button className="w-full lg:w-auto bg-[#2563EB] px-8 py-3 rounded-full text-white text-sm font-bold hover:bg-blue-700 transition-all uppercase tracking-widest active:scale-95">
                     Details →
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;