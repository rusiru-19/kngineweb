import React from 'react';
import { Brain, Users, Trophy, Clock, Shield, AlertCircle, Phone, BookOpen, Zap, Target } from 'lucide-react';

const IntellectPage: React.FC = () => {
  const scoringTable = [
    { round: "Round 1 (MCQ)", points: "+1 per correct answer (No negative marks)" },
    { round: "Round 2 (Rapid Fire)", points: "+2 per correct answer" },
    { round: "Round 3 (Buzzer)", points: "+5 per correct / -2 per wrong answer" }
  ];

  const contacts = [
    { name: "Hirun Dilshan", phone: "+94 76 808 8170" },
    { name: "Thilina Methsahan", phone: "+94 77 278 9984" },
    { name: "Semika Anusara", phone: "+94 76 266 5690" }
  ];

  const participationDetails = [
    { icon: <Users className="w-5 h-5" />, label: "Eligibility", value: "Open to students of participating schools" },
    { icon: <Target className="w-5 h-5" />, label: "School Limit", value: "One team per school" },
    { icon: <Brain className="w-5 h-5" />, label: "Team Size", value: "Maximum of 3 students per team" },
    { icon: <Shield className="w-5 h-5" />, label: "Registration", value: "Must be done at your school (not online)" },
    { icon: <Clock className="w-5 h-5" />, label: "Deadline", value: "6th February 2026" }
  ];

  const competitionRounds = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Round 1 (Written MCQ)",
      description: "Multiple Choice and Short Answer questions; top teams advance"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Round 2 (Rapid Fire)",
      description: "Quick-fire questions with strict time limits"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Round 3 (Buzzer Round)",
      description: "Finals; top teams compete in live buzzer format"
    }
  ];

  const topics = [
    "A/L and O/L ICT syllabus",
    "Programming concepts and cybersecurity basics",
    "Tech industry news, companies, and personalities",
    "Watch Dogs: Legion themed trivia"
  ];

  const rules = [
    "Prohibited Items: Mobile phones, smartwatches, and all electronic devices",
    "Conduct: Silence is mandatory; shouting out of turn results in negative marking",
    "Timing: Answers submitted after the time limit will not be considered"
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
                Intellect
              </h1>
              <div className="flex items-center justify-center gap-3 text-[#9CA3AF] text-sm md:text-base mb-6">
                <span className="font-bold uppercase tracking-widest">Team (3 Members)</span>
                <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full"></span>
                <span className="font-bold uppercase tracking-widest">On-Site</span>
              </div>
              <p className="text-[#9CA3AF] text-lg sm:text-xl md:text-2xl italic max-w-3xl mx-auto leading-relaxed mb-4">
                "Knowledge is power. Intelligence is your greatest hack."
              </p>
              <p className="text-[#6B7280] text-sm md:text-base uppercase tracking-widest font-bold mb-2">
                Inter-School IT & Tech Quiz
              </p>
              <p className="text-[#6B7280] text-sm md:text-base">
                Scope: ICT, programming, cybersecurity, and Watch Dogs: Legion themed trivia
              </p>
            </div>
          </div>
        </section>

        {/* Participation & Registration */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Participation & Registration
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {participationDetails.map((detail, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#10B981]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#10B981]/20 transition-colors">
                    <div className="text-[#10B981]">{detail.icon}</div>
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

        {/* Competition Rounds */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Competition Rounds
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {competitionRounds.map((round, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#2563EB]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                    <div className="text-[#2563EB]">{round.icon}</div>
                  </div>
                  <h3 className="text-white font-black text-base uppercase tracking-tight mb-3">
                    {round.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {round.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics Covered */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Topics Covered
            </h2>
            
            <div className="bg-[#121212] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {topics.map((topic, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group"
                  >
                    <div className="w-8 h-8 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                      <Brain className="w-4 h-4 text-purple-500" />
                    </div>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed pt-0.5">
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rules & Scoring */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Rules & Scoring
            </h2>
            
            {/* Rules */}
            <div className="bg-[#121212] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5 mb-8">
              <div className="grid gap-4 md:gap-6">
                {rules.map((rule, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group"
                  >
                    <div className="w-8 h-8 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <Shield className="w-4 h-4 text-red-500" />
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

            {/* Scoring Table */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
                Scoring Table
              </h3>
              <div className="bg-[#121212] rounded-3xl border border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#1A1A1A] border-b border-white/5">
                        <th className="text-left px-6 py-4 text-white font-black text-sm uppercase tracking-wide">
                          Round
                        </th>
                        <th className="text-left px-6 py-4 text-white font-black text-sm uppercase tracking-wide">
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {scoringTable.map((item, idx) => (
                        <tr 
                          key={idx}
                          className="border-b border-white/5 hover:bg-[#1A1A1A]/50 transition-colors"
                        >
                          <td className="px-6 py-4 text-[#9CA3AF] text-sm md:text-base font-medium">
                            {item.round}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block bg-[#10B981]/10 text-[#10B981] px-4 py-1.5 rounded-full text-sm font-bold">
                              {item.points}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12 text-center">
              Contact for Any Inquiry
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {contacts.map((contact, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#10B981]/30 transition-all hover:scale-105 group text-center"
                >
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-[#10B981]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    {contact.name}
                  </h3>
                  <a 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-[#9CA3AF] font-medium text-sm md:text-base hover:text-[#10B981] transition-colors"
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
                    Registration must be completed at your school by 6th February 2026. Ensure all team members are present on the day of the competition. Electronic devices are strictly prohibited during all rounds. Study hard and good luck!
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

export default IntellectPage;