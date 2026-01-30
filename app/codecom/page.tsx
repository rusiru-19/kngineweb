"use client"
import React, { useState } from 'react';
import { Code, Users, Trophy, Clock, Shield, CheckCircle, AlertCircle, Phone, Globe, FileCode } from 'lucide-react';

const CodecomPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'codecom' | 'webdev'>('codecom');

  // CodeCom Data
  const codecomJudgingCriteria = [
    { criteria: "Correctness of Solution", weightage: "40%" },
    { criteria: "Code Efficiency & Optimization", weightage: "30%" },
    { criteria: "Time Taken to Solve", weightage: "20%" },
    { criteria: "Code Readability", weightage: "10%" }
  ];

  const codecomParticipationDetails = [
    { icon: <Users className="w-5 h-5" />, label: "Eligibility", value: "Grades 9–13" },
    { icon: <Code className="w-5 h-5" />, label: "Format", value: "Individual only (no teams)" },
    { icon: <Shield className="w-5 h-5" />, label: "Integrity", value: "Plagiarism leads to disqualification" }
  ];

  const codecomFormat = [
    { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "Announced before the event" },
    { icon: <Code className="w-5 h-5" />, label: "Supported Languages", value: "Python, C++, JavaScript, Java, C" },
    { icon: <Trophy className="w-5 h-5" />, label: "Difficulty Levels", value: "Easy, Medium, and Hard" }
  ];

  const codecomRules = [
    "Registration: Official Google Form",
    "Scoring: Passed test cases per problem",
    "Attempts: Multiple allowed, highest score counts",
    "Penalties: No penalty for wrong submissions",
    "Tie-Breaking: Faster submission wins",
    "Prohibited: AI tools, code generators, external help",
    "Allowed: Standard language documentation"
  ];

  // Web Dev Data
  const webdevJudgingCriteria = [
    { criteria: "Functionality", weightage: "25%" },
    { criteria: "Design & User Experience", weightage: "25%" },
    { criteria: "Theme Alignment & Creativity", weightage: "20%" },
    { criteria: "Code Architecture & Cleanliness", weightage: "15%" },
    { criteria: "Responsiveness", weightage: "15%" }
  ];

  const webdevParticipationDetails = [
    { icon: <Users className="w-5 h-5" />, label: "Eligibility", value: "Grades 9–13" },
    { icon: <Users className="w-5 h-5" />, label: "Individual Submission", value: "Submit Github Link" },
    { icon: <Shield className="w-5 h-5" />, label: "Integrity", value: "Plagiarism results in disqualification" }
  ];

  const webdevTechnicalReqs = [
    { icon: <Code className="w-5 h-5" />, label: "Core Tech", value: "HTML, CSS, JavaScript" },
    { icon: <FileCode className="w-5 h-5" />, label: "Frameworks", value: "React, Vue, Bootstrap, Tailwind, Next.js" },
    { icon: <Globe className="w-5 h-5" />, label: "Coding Standards", value: "Descriptive names and proper comments" },
    { icon: <Shield className="w-5 h-5" />, label: "Version Control", value: "Public GitHub repository with regular commits" },
    { icon: <Trophy className="w-5 h-5" />, label: "Bonus Points", value: "Backend integration, responsiveness, extra features" }
  ];

  const webdevSubmission = [
    "Submit the GitHub repository link",
    "README with team details & setup instructions",
    "Hosted link (Vercel, Netlify, GitHub Pages recommended)",
    "Any commit after the deadline will not be considered",
    "Only the first submission will be evaluated. No late submissions"
  ];

  const contacts = [
    { name: "Hirun Dilshan", phone: "+94 76 808 8170" },
    { name: "Thilina Methsahan", phone: "+94 77 278 9984" },
    { name: "Semika Anusara", phone: "+94 76 266 5690" }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <div className="fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 pt-20 sm:pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                CodeCom
              </h1>
              
            
        {/* Web Dev Content */}
          <>
          
            {/* Task */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
                  Task
                </h2>
                
                <div className="bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 p-8 md:p-12 rounded-3xl border border-[#10B981]/20">
                  <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
                    Amal is a full-stack web developer tasked by his company to create a web-based platform to combat the growing wave of cybercrime. The system should allow users to report suspicious activities and incidents, enabling the organization to monitor, track, and respond to cyber threats efficiently. The challenge lies in designing a secure, reliable, and responsive solution that addresses the increasing sophistication of online criminal activity while providing a clear and intuitive interface for reporting and managing incidents.
                  </p>
                </div>
              </div>
            </section>

            {/* Participation Details */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
                  Participation Details
                </h2>
                
                <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
                  {webdevParticipationDetails.map((detail, idx) => (
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

            {/* Technical Requirements */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
                  Technical Requirements
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {webdevTechnicalReqs.map((req, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group"
                    >
                      <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                        <div className="text-purple-500">{req.icon}</div>
                      </div>
                      <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">
                        {req.label}
                      </h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed">
                        {req.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Submission Guidelines */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
                  Submission Guidelines
                </h2>
                
                <div className="bg-[#121212] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5">
                  <div className="grid gap-4 md:gap-6">
                    {webdevSubmission.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-2xl border border-white/5 hover:border-[#10B981]/30 transition-all group"
                      >
                        <div className="w-8 h-8 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#10B981]/20 transition-colors">
                          <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        </div>
                        <p className={`text-sm leading-relaxed ${item.includes('late') || item.includes('first') ? 'text-red-400 font-bold' : 'text-[#9CA3AF]'}`}>
                          {item.split(':').map((part, i) => 
                            i === 0 ? <strong key={i} className="text-white">{part}:</strong> : part
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Judging Criteria */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
                  Judging Criteria
                </h2>
                
                <div className="bg-[#121212] rounded-3xl border border-white/5 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#1A1A1A] border-b border-white/5">
                          <th className="text-left px-6 py-4 text-white font-black text-sm uppercase tracking-wide">
                            Criteria
                          </th>
                          <th className="text-left px-6 py-4 text-white font-black text-sm uppercase tracking-wide">
                            Weightage
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {webdevJudgingCriteria.map((item, idx) => (
                          <tr 
                            key={idx}
                            className="border-b border-white/5 hover:bg-[#1A1A1A]/50 transition-colors"
                          >
                            <td className="px-6 py-4 text-[#9CA3AF] text-sm md:text-base">
                              {item.criteria}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-block bg-[#10B981]/10 text-[#10B981] px-4 py-1.5 rounded-full text-sm font-bold">
                                {item.weightage}
                              </span>
                            </td>
                          </tr>
                        ))}
                        <tr className="hover:bg-[#1A1A1A]/50 transition-colors">
                          <td className="px-6 py-4 text-white font-bold text-sm md:text-base" colSpan={2}>
                            Database integration will boost marks
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </>
      

        {/* Contact Section (Common for both) */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12 text-center">
              Contact for Any Inquiry
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {contacts.map((contact, idx) => (
                <div 
                  key={idx}
                  className={`bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-${activeTab === 'codecom' ? '[#2563EB]' : '[#10B981]'}/30 transition-all hover:scale-105 group text-center`}
                >
                  <div className={`w-12 h-12 bg-${activeTab === 'codecom' ? '[#2563EB]' : '[#10B981]'}/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-${activeTab === 'codecom' ? '[#2563EB]' : '[#10B981]'}/20 transition-colors`}>
                    <Phone className={`w-6 h-6 text-${activeTab === 'codecom' ? '[#2563EB]' : '[#10B981]'}`} />
                  </div>
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    {contact.name}
                  </h3>
                  <a 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className={`text-[#9CA3AF] font-medium text-sm md:text-base hover:text-${activeTab === 'codecom' ? '[#2563EB]' : '[#10B981]'} transition-colors`}
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
                    {activeTab === 'codecom' 
                      ? "All participants must register through the official Google Form. The competition link will be sent to registered participants only. Make sure to follow all rules and guidelines to ensure fair competition. Good luck!"
                      : "Submit your GitHub repository link with complete documentation. Ensure your project is hosted and accessible. Only the first submission will be evaluated, and any commits after the deadline will not be considered. Good luck!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default CodecomPage;