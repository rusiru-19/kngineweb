import React from 'react';
import { Mail, MapPin, Users, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const eventIncharges = [
    {
      event: "president",
      name: "Dulen Gamage",
      phone: "+94 77 351 0195",
    },
    {
      event: "Competition",
      name: "Thilina Methsahan",
      phone: "+94 77 278 9984",
    },
    {
      event: "Cyber Combat",
      name: "Randula Gunathilaka",
      phone: "+94 70 602 6941",
    },
    {
      event: "cyber Combat",
      name: "Mahin",
      phone: "+94 77 311 0252",
    },
    {
      event: "Registration",
      name: "Dinel",
      phone: "+94 77 007 5073",
    },
    {
      event: "Logistic",
      name: "Pesara Damketh",
      phone: "+94 71 156 8618",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
            Get In<br />Touch
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Have questions about KNGINE? Reach out to our event coordinators or contact us through any of the channels below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* WhatsApp */}
            <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                <Users className="w-6 h-6 text-[#25D366]" />
              </div>
              <h4 className="text-[#6B7280] text-xs font-bold uppercase tracking-widest mb-3">WhatsApp Group</h4>
              <a 
                href="https://chat.whatsapp.com/C84IEY7Sd2dLZlKtlNtDpW" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold text-sm md:text-base hover:text-[#25D366] transition-colors break-all"
              >
                Join Community
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h4 className="text-[#6B7280] text-xs font-bold uppercase tracking-widest mb-3">Email Support</h4>
              <a 
                href="mailto:kngine.rits@gmail.com"
                className="text-white font-bold text-sm md:text-base hover:text-[#2563EB] transition-colors break-all"
              >
                kngine.rits@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="text-[#6B7280] text-xs font-bold uppercase tracking-widest mb-3">Location</h4>
              <p className="text-white font-bold text-sm md:text-base leading-relaxed">
                Richmond College<br />Galle, Sri Lanka
              </p>
            </div>
          </div>

          {/* Event Incharges */}
          <div className="lg:col-span-2">
            <div className="bg-[#121212] p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">Event Coordinators</h3>
                  <p className="text-[#6B7280] text-xs md:text-sm uppercase tracking-widest">Contact Our Team</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {eventIncharges.map((incharge, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#1A1A1A] p-5 md:p-6 rounded-2xl border border-white/5 hover:border-[#2563EB]/30 hover:bg-[#1A1A1A]/80 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-[#2563EB] text-xs font-black uppercase tracking-widest mb-2 group-hover:text-[#3b82f6] transition-colors">
                          {incharge.event}
                        </h4>
                        <p className="text-white font-bold text-base md:text-lg tracking-tight mb-1">
                          {incharge.name}
                        </p>
                      </div>
                    </div>
                    <a 
                      href={`tel:${incharge.phone.replace(/\s/g, '')}`}
                      className="text-[#9CA3AF] font-medium text-sm hover:text-[#2563EB] transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      {incharge.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-gradient-to-r from-[#121212] to-[#1A1A1A] p-8 md:p-12 rounded-3xl border border-white/5 text-center">
          <h3 className="text-[#6B7280] text-xs font-bold uppercase tracking-widest mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="w-14 h-14 bg-white/5 hover:bg-[#1877F2]/20 rounded-2xl flex items-center justify-center transition-all hover:scale-110 group border border-white/5 hover:border-[#1877F2]/30"
            >
              <span className="text-white font-black text-sm group-hover:text-[#1877F2] transition-colors">FB</span>
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-white/5 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F56040] rounded-2xl flex items-center justify-center transition-all hover:scale-110 group border border-white/5"
            >
              <span className="text-white font-black text-sm group-hover:text-white transition-colors">IG</span>
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-white/5 hover:bg-[#1DA1F2]/20 rounded-2xl flex items-center justify-center transition-all hover:scale-110 group border border-white/5 hover:border-[#1DA1F2]/30"
            >
              <span className="text-white font-black text-sm group-hover:text-[#1DA1F2] transition-colors">X</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact