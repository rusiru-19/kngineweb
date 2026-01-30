import React from 'react';
import {
  Gamepad2,
  Users,
  Shield,
  Clock,
  Trophy,
  AlertCircle,
  Phone,
  Target,
  Crosshair,
} from "lucide-react";

const CyberCombatPage: React.FC = () => {
  const contacts = [
    { name: "Mahin", phone: "+94 77 311 0252" },
    { name: "Randula", phone: "+94 70 602 6941" },
  ];

  const teamEligibility = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Eligibility",
      value: "Open to all school students",
    },
    {
      icon: <Target className="w-5 h-5" />,
      label: "Team Size",
      value: "5 Main Players + 1 Substitute (optional)",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "Player Accounts",
      value: "Players must use their own COD Mobile accounts",
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      label: "Roster Lock",
      value: "No roster changes on match day unless approved",
    },
  ];

  const registrationConduct = [
    "Accounts: No account sharing or boosting allowed",
    "Devices: Only mobile devices are permitted (no emulators)",
    "Attendance: Teams must be ready 10 minutes before match time",
    "Behavior: Toxic behavior or abuse leads to disqualification",
    "Fair Play: Any form of cheating or exploits are strictly prohibited",
  ];

  const matchFormat = [
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      label: "Game Mode",
      value: "Multiplayer (Search & Destroy / Hardpoint)",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "Match Type",
      value: "Best of 3 (BO3)",
    },
    {
      icon: <Crosshair className="w-5 h-5" />,
      label: "Win Condition",
      value: "First team to win 2 matches",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Match Duration",
      value: "Depends on selected mode",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "Map Selection",
      value: "Maps will be announced before the tournament",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <div className="fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pt-20 sm:pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                Cyber Combat
              </h1>
              <div className="flex items-center justify-center gap-3 text-[#9CA3AF] text-sm md:text-base mb-6">
                <span className="font-bold uppercase tracking-widest">COD MOBILE</span>
                <span className="w-1.5 h-1.5 bg-[#FF4655] rounded-full"></span>
                <span className="font-bold uppercase tracking-widest">Tactical Shooter</span>
              </div>
              <p className="text-[#9CA3AF] text-lg sm:text-xl md:text-2xl italic max-w-3xl mx-auto leading-relaxed mb-4">
                "The battlefield is digital. The stakes are real. Show no mercy."
              </p>
              <p className="text-[#6B7280] text-sm md:text-base uppercase tracking-widest font-bold">
                Format: Tournament Bracket Style
              </p>
            </div>
          </div>
        </section>

        {/* Team & Eligibility */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Team & Eligibility
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {teamEligibility.map((detail, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#FF4655]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#FF4655]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#FF4655]/20 transition-colors">
                    <div className="text-[#FF4655]">{detail.icon}</div>
                  </div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">
                    {detail.label}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration & Conduct */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Registration & Conduct
            </h2>
            
            <div className="bg-[#121212] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5">
              <div className="grid gap-4 md:gap-6">
                {registrationConduct.map((rule, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-2xl border border-white/5 hover:border-[#FF4655]/30 transition-all group"
                  >
                    <div className="w-8 h-8 bg-[#FF4655]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF4655]/20 transition-colors">
                      <Shield className="w-4 h-4 text-[#FF4655]" />
                    </div>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {rule.split(':').map((part, i) => 
                        i === 0 ? <strong key={i} className="text-white">{part}:</strong> : part
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Match Format */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Match Format
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {matchFormat.map((format, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <div className="text-purple-500">{format.icon}</div>
                  </div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">
                    {format.label}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {format.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tournament Schedule */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Tournament Schedule
            </h2>
            
            <div className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] p-8 md:p-12 rounded-3xl border border-white/5 text-center">
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-[#2563EB]" />
              </div>
              <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Specific brackets and match timings will be distributed via official channels after registration closes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12 text-center">
              Contact for Any Inquiry
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {contacts.map((contact, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#FF4655]/30 transition-all hover:scale-105 group text-center"
                >
                  <div className="w-12 h-12 bg-[#FF4655]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-[#FF4655]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#FF4655]" />
                  </div>
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    {contact.name}
                  </h3>
                  <a 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-[#9CA3AF] font-medium text-sm md:text-base hover:text-[#FF4655] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base uppercase tracking-tight mb-2">Important Reminder</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    All teams must register with complete player details and Riot IDs. Ensure all team members are available on match day and arrive 15 minutes early. Fair play and sportsmanship are expected from all participants. Good luck in the tournament!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CyberCombatPage;