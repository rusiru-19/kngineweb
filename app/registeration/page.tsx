import React from 'react';
import { Calendar, MapPin, Shield, AlertCircle, CheckCircle, Clock, Users, Award } from 'lucide-react';
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KNGINE’26 Registration | Inter-School ICT Competitions – Richmond College",
  description:
    "Register for KNGINE’26, the annual inter-school ICT day by Richmond College ICT Society (RITS). Participate in competitions like Intellect, Codecom, DesignerX, Web Development, and Cyber Combat.",
  keywords: [
    "KNGINE 26",
    "Richmond College ICT",
    "Inter-School ICT Competitions",
    "Intellect Quiz",
    "DesignerX",
    "Codecom",
    "Web Development",
    "Cyber Combat",
    "RITS",
    "Watch Dogs Legion",
    "Student Competitions",
    "ICT Day",
  ],
  openGraph: {
    title: "KNGINE’26 Registration | Inter-School ICT Competitions",
    description:
      "Register for KNGINE’26 competitions organized by Richmond College ICT Society. Join Intellect, Codecom, DesignerX, Web Development, and Cyber Combat events.",
    url: "https://kngine.richmondcollege.lk/registration",
  },
}


const Register: React.FC = () => {
  const competitions = [
    {
      name: "DesignerX",
      type: "Graphic Design",
      deadline: "8th Feb 2026",
      method: "Online Form + Work Submission"
    },
    {
      name: "Codecom",
      type: "Coding",
      deadline: "8th Feb 2026",
      method: "Online Form"
    },
    {
      name: "Web Development",
      type: "Web Dev",
      deadline: "8th Feb 2026",
      method: "Online Form + Work Submission"
    },
    {
      name: "Cyber Combat",
      type: "Gaming",
      deadline: "8th Feb 2026",
      method: "Online Form"
    },
    {
      name: "Intellect",
      type: "Quiz",
      deadline: "12th Feb 2026",
      method: "Register at School"
    }
  ];

  const generalRules = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Eligibility",
      description: "School students from Grades 9 to 13"
    },
  
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Requirements",
      description: "Carry your School ID on event day"
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Prohibited Tools",
      description: "AI tools (ChatGPT, Copilot, etc.) are strictly prohibited unless stated otherwise"
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Plagiarism",
      description: "Zero tolerance; violators will be disqualified"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Theme Compliance",
      description: "All work must align with Watch Dogs: Legion aesthetic"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Authority",
      description: "Judges' decisions are final and binding"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Script
  id="intellect-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalEvent",
      "name": "Intellect – Inter-School IT & Tech Quiz (KNGINE’26)",
      "description": "An inter-school IT & Tech quiz competition organized under KNGINE’26 by the Richmond College ICT Society.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "startDate": "2026-02-12T09:00:00+05:30", // <-- add start date/time
      "endDate": "2026-02-12T17:00:00+05:30",   // <-- optional, recommended
      "organizer": {
        "@type": "Organization",
        "name": "Richmond College ICT Society (RITS)",
        "url": "https://kngine.richmondcollege.lk"
      },
      "isAccessibleForFree": true,
      "url": "https://kngine.richmondcollege.lk/intellect",
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/registration",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "LKR"
      }
    }),
  }}
/>

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
                Registration<br />& Guidelines
              </h1>
              <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Join KNGINE'26, the annual Inter-School ICT Day by Richmond College ICT Society
              </p>
            </div>
          </div>
        </section>

        {/* Event Info Cards */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Theme Card */}
              <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#2563EB]/30 transition-all">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-white font-black text-lg uppercase tracking-tight mb-2">Theme</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  <strong className="text-white">Watch Dogs: Legion</strong> – Hacktivism, resistance, and digital revolution
                </p>
              </div>

              {/* Date Card */}
              <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-white font-black text-lg uppercase tracking-tight mb-2">Event Date</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  <strong className="text-white">12th February 2026</strong><br />
                  9:00 AM - 5:00 PM
                </p>
              </div>

              {/* Venue Card */}
              <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-white font-black text-lg uppercase tracking-tight mb-2">Venue</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  C.W.W. Kannangara Multi-Purpose Auditorium<br />
                  <strong className="text-white">Richmond College, Galle</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* General Rules */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              General Rules & Regulations
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {generalRules.map((rule, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                    <div className="text-[#2563EB]">{rule.icon}</div>
                  </div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitions */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Competition Registration
            </h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
              {competitions.map((comp, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#2563EB]/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mb-1">
                        {comp.name}
                      </h3>
                      <p className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">
                        {comp.type}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
                      <Clock className="w-5 h-5 text-[#2563EB]" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#9CA3AF] text-sm">
                      <Calendar className="w-4 h-4" />
                      <span><strong className="text-white">Deadline:</strong> {comp.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#9CA3AF] text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span><strong className="text-white">Method:</strong> {comp.method}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] p-8 md:p-12 rounded-3xl text-center">
              <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight mb-4">
                Ready to Join?
              </h3>
              <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Register for all online competitions using the official KNGINE'26 registration form
              </p>
              <a 
                href="https://accounts.google.com/v3/signin/accountchooser?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfi2ahsbBPAHM7MVOUApbk_ccnQAKzjrY3tps0BkHGkGPdq7g%2Fviewform%3Fusp%3Dsend_form&dsh=S-1623883460%3A1769100846721845&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfi2ahsbBPAHM7MVOUApbk_ccnQAKzjrY3tps0BkHGkGPdq7g%2Fviewform%3Fusp%3Dsend_form&ifkv=AXbMIuBF1TMO-TSOx94_UMYgNs08LOqMbeJ_ny-DhsqWPq2yrDBA6A1LeyJfxvrdXuj8oWyrkdFPxw&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                className="inline-block bg-white text-[#2563EB] hover:bg-black hover:text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest  transition-all duration-400 active:scale-95 text-sm md:text-base"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base uppercase tracking-tight mb-2">Important Note</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    Please ensure you read all guidelines carefully before registering. For any queries, contact our event coordinators through the Contact section. All participants must adhere to the rules and regulations to maintain fair competition.
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

export default Register;