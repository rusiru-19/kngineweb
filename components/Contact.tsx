import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8 md:mb-10">
            We're Here To<br />Connect And<br />Assist You
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg mb-12 md:mb-16 leading-relaxed">
            Have questions about KNGINE? Need help with registration or logistics? Our team is available to assist you.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h4 className="text-[#6B7280] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Contact us</h4>
              <p className="text-white font-bold text-base md:text-lg tracking-tight">https://chat.whatsapp.com/C84IEY7Sd2dLZlKtlNtDpW</p>
            </div>
            <div>
              <h4 className="text-[#6B7280] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Location</h4>
              <p className="text-white font-bold text-base md:text-lg tracking-tight">Richmond College<br />Galle, Sri Lanka</p>
            </div>
            <div>
              <h4 className="text-[#6B7280] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Email support</h4>
              <p className="text-white font-bold text-base md:text-lg tracking-tight">kngine.rits@gmail.com</p>
            </div>
            <div>
              <h4 className="text-[#6B7280] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Social media</h4>
              <div className="flex gap-6 mt-2">
                {['FB', 'IG'].map(s => (
                  <span key={s} className="text-white font-bold text-xs cursor-pointer hover:text-[#2563EB] transition-colors tracking-widest">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-8 md:p-12 lg:p-16 rounded-[32px] border border-white/5 shadow-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight uppercase">Get In Touch</h3>
          <p className="text-[#6B7280] text-xs md:text-sm mb-10 leading-relaxed uppercase tracking-widest">Inquiries about resistrations or partnerships.</p>
          
          <form className="space-y-6 md:space-y-8">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-black text-[#6B7280] tracking-widest">Full Name</label>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#2563EB] transition-colors text-base"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-black text-[#6B7280] tracking-widest">Email Address</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#2563EB] transition-colors text-base"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-black text-[#6B7280] tracking-widest">Message</label>
              <textarea 
                placeholder="How can we help?" 
                rows={3}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#2563EB] transition-colors resize-none text-base"
              />
            </div>
            <button className="w-full bg-[#2563EB] text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95 text-sm md:text-base">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;