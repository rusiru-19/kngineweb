import React from 'react';
import { Palette, Users, FileImage, Upload, Shield, AlertCircle, Phone, Lightbulb, Eye } from 'lucide-react';

const DesignerXPage: React.FC = () => {
  const judgingCriteria = [
    { criteria: "Creativity & Originality", weightage: "25%" },
    { criteria: "Theme Alignment (Watch Dogs: Legion)", weightage: "25%" },
    { criteria: "Visual Appeal & Aesthetics", weightage: "20%" },
    { criteria: "Technical Execution", weightage: "20%" },
    { criteria: "Presentation & Documentation", weightage: "10%" }
  ];

  const contacts = [
    { name: "Hirun Dilshan", phone: "+94 76 808 8170" },
    { name: "Thilina Methsahan", phone: "+94 77 278 9984" },
    { name: "Semika Anusara", phone: "+94 76 266 5690" }
  ];

  const participationDetails = [
    { icon: <Users className="w-5 h-5" />, label: "Eligibility", value: "Grades 9–13" },
    { icon: <Palette className="w-5 h-5" />, label: "Format", value: "Individual only (no teams)" },
    { icon: <Shield className="w-5 h-5" />, label: "School Limit", value: "No limit per school" },
    { icon: <Upload className="w-5 h-5" />, label: "Submission Limit", value: "One submission per contestant" }
  ];

  const technicalRequirements = [
    { icon: <Palette className="w-5 h-5" />, label: "Software", value: "Photoshop, Illustrator, Figma, Canva, or GIMP" },
    { icon: <FileImage className="w-5 h-5" />, label: "Dimensions", value: "A3 (297mm × 420mm) or 4:5 (1080 × 1350px)" },
    { icon: <Shield className="w-5 h-5" />, label: "Integrity", value: "Plagiarism and templates are strictly prohibited" },
  ];

  const submissionItems = [
    "Platform: Official KNGINE'26 registration form",
    "Format: Single .zip file containing all required files",
    "Project Files: All textures, images, and overlays used",
    "Final Artwork: .png / .jpg / .pdf, minimum 300 DPI",
    "Documentation: PDF with layers + at least 5 in-progress screenshots",
    "File Naming: DesignerX_SchoolName_YourName.zip"
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
                DesignerX
              </h1>
              <div className="flex items-center justify-center gap-3 text-[#9CA3AF] text-sm md:text-base mb-6">
                <span className="font-bold uppercase tracking-widest">Individual</span>
                <span className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full"></span>
                <span className="font-bold uppercase tracking-widest">Online Submission</span>
              </div>
              <p className="text-[#9CA3AF] text-lg sm:text-xl md:text-2xl italic max-w-3xl mx-auto leading-relaxed">
                "Design is the silent ambassador of your resistance. Create visuals that hack the system."
              </p>
            </div>
          </div>
        </section>

        {/* Theme Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Theme
            </h2>
            
            <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#6366F1]/10 p-8 md:p-12 rounded-3xl border border-[#8B5CF6]/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mb-3">
                    Join the Resistance — DedSec Recruitment
                  </h3>
                  <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
                    Design a recruitment poster for DedSec (from <span className="italic text-white">Watch Dogs: Legion</span>) to inspire a digital resistance against surveillance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Participation Details */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12">
              Participation Details
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {participationDetails.map((detail, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#8B5CF6]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#8B5CF6]/20 transition-colors">
                    <div className="text-[#8B5CF6]">{detail.icon}</div>
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
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {technicalRequirements.map((req, idx) => (
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
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {submissionItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-2xl border border-white/5 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-8 h-8 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <Upload className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
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
                    {judgingCriteria.map((item, idx) => (
                      <tr 
                        key={idx}
                        className="border-b border-white/5 hover:bg-[#1A1A1A]/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-[#9CA3AF] text-sm md:text-base">
                          {item.criteria}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-[#8B5CF6]/10 text-[#8B5CF6] px-4 py-1.5 rounded-full text-sm font-bold">
                            {item.weightage}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  className="bg-[#121212] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#8B5CF6]/30 transition-all hover:scale-105 group text-center"
                >
                  <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-[#8B5CF6]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    {contact.name}
                  </h3>
                  <a 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-[#9CA3AF] font-medium text-sm md:text-base hover:text-[#8B5CF6] transition-colors"
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
                    Ensure your submission includes ALL required files in the correct format. Work-in-progress screenshots are mandatory to verify originality. Use of templates or plagiarized content will result in immediate disqualification. Unleash your creativity and good luck!
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

export default DesignerXPage;