
import React, { useState } from 'react';

const Map: React.FC = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.6));

  return (
    <section id="venue" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#121212] rounded-[32px] h-[600px] md:h-[700px] lg:h-[800px] relative overflow-hidden border border-white/5 shadow-2xl group">
           
           {/* Interactive Map Controls */}
           <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
             <button 
               onClick={handleZoomIn}
               className="w-10 h-10 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#2563EB] transition-colors shadow-lg"
               title="Zoom In"
             >
               <span className="text-xl font-bold">+</span>
             </button>
             <button 
               onClick={handleZoomOut}
               className="w-10 h-10 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#2563EB] transition-colors shadow-lg"
               title="Zoom Out"
             >
               <span className="text-xl font-bold">−</span>
             </button>
             <button 
               onClick={() => setZoom(1)}
               className="w-10 h-10 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center text-[#6B7280] hover:text-white transition-colors text-[10px] font-bold"
               title="Reset"
             >
               RST
             </button>
           </div>

           {/* Campus Map SVG */}
           <div className="w-full h-full overflow-hidden flex items-center justify-center">
            <svg 
              className="w-full h-full transition-transform duration-500 ease-out" 
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
              viewBox="0 0 1000 800" 
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.03"/>
                </pattern>
                <filter id="map-glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />

              {/* Green Landscapes */}
              <g opacity="0.15">
                {/* Richmond College Play Ground */}
                <path d="M 350 500 Q 420 460, 580 500 T 650 700 Q 500 780, 350 700 T 350 500" fill="#10B981" />
                {/* DA Rajapaksa Sports Complex */}
                <path d="M 120 700 Q 180 680, 250 720 T 300 850 L 50 850 Z" fill="#10B981" />
              </g>

              {/* Pool (Newly added) */}
              <g transform="translate(180, 780)">
                <rect width="45" height="25" fill="#2563EB" opacity="0.4" rx="2" />
                <text x="5" y="40" fill="#2563EB" fontSize="10" fontWeight="black" className="uppercase tracking-widest">Pool</text>
              </g>

              {/* Roads (Precision Layout from Reference) */}
              <g stroke="white" strokeWidth="18" strokeLinecap="round" fill="none" opacity="0.08">
                {/* Main Richmond Hill Road winding through campus */}
                <path d="M 50 500 Q 250 480, 450 460 T 700 480 T 950 520" />
                {/* Vertical road towards Memorial */}
                <path d="M 300 480 Q 320 250, 280 50" strokeWidth="14" />
                {/* Branch to Library area */}
                <path d="M 450 460 Q 550 350, 750 350" strokeWidth="14" />
                {/* Road loop around Play Ground */}
                <path d="M 700 480 Q 650 650, 750 850" strokeWidth="14" />
                {/* Station Foot-Path */}
                <path d="M 600 50 L 950 400" strokeWidth="4" strokeDasharray="10 10" opacity="0.4" />
              </g>

              {/* Building Architecture & Labels (Complete List) */}
              <g fill="white" fontSize="9" fontWeight="bold" opacity="0.5" className="uppercase tracking-tighter">
                
                {/* Top Sector */}
                <g transform="translate(350, 80)">
                  <rect width="90" height="20" fill="white" opacity="0.1" rx="2" />
                  <text y="35">Eastern Music & Dancing Room</text>
                </g>
                <g transform="translate(550, 60)">
                  <rect width="120" height="25" fill="white" opacity="0.1" rx="2" />
                  <text y="40">Memorial Of War Heroes</text>
                </g>
                <g transform="translate(750, 80)">
                  <text y="15">Station Foot-Path</text>
                </g>

                {/* Left Cluster */}
                <g transform="translate(150, 150)">
                  <rect width="60" height="30" fill="white" opacity="0.1" rx="2" />
                  <text y="45">TEC WorkShop</text>
                </g>
                <g transform="translate(250, 320)">
                  <circle r="4" fill="#2563EB" />
                  <text x="10" y="4">Outdoor Laboratory</text>
                </g>
                <g transform="translate(350, 340)">
                  <rect width="70" height="20" fill="white" opacity="0.1" rx="2" />
                  <text y="35">Grade 10 Class Rooms</text>
                </g>
                <g transform="translate(420, 410)">
                  <rect width="80" height="20" fill="white" opacity="0.1" rx="2" />
                  <text y="35">Grade 4,5 Class Rooms</text>
                </g>
                <g transform="translate(180, 600)">
                  <text y="15">Principal's Bungalow</text>
                </g>

                {/* Center Cluster (Diamond Section) */}
                <g transform="translate(510, 360)">
                  <rect width="100" height="80" fill="#FFD700" opacity="0.03" transform="rotate(45)" />
                  <text y="60" textAnchor="middle">Physics and Chemistry Laboratory</text>
                  <circle r="4" fill="white" opacity="0.5" />
                </g>
                <g transform="translate(430, 200)">
                  <rect width="80" height="30" fill="white" opacity="0.1" rx="2" />
                  <text y="45">Darrel Library</text>
                </g>
                <g transform="translate(480, 260)">
                  <text y="15">Computer Lab</text>
                </g>
                <g transform="translate(630, 250)">
                  <rect width="70" height="40" fill="white" opacity="0.1" rx="2" />
                  <text y="55">Main Hall</text>
                </g>
                <g transform="translate(720, 310)">
                  <rect width="40" height="40" fill="white" opacity="0.1" rx="2" />
                  <text y="55">L Block</text>
                </g>
                <g transform="translate(850, 220)">
                  <text y="15">Administrative Office</text>
                </g>

                {/* Right / Entrance Sector */}
                <g transform="translate(880, 380)">
                   <text y="15">Grade 1 Class Rooms</text>
                </g>
                <g transform="translate(850, 650)">
                  <rect width="100" height="25" fill="white" opacity="0.1" rx="2" />
                  <text y="40">Grade 3 Class Rooms</text>
                </g>

                {/* Bottom Sector */}
                
                <g transform="translate(700, 680)">
                  <rect width="90" height="25" fill="white" opacity="0.1" rx="2" />
                  <text y="40">Grade 6 Class Rooms</text>
                </g>
                <g transform="translate(780, 600)">
                  <text y="15">Primary Section</text>
                </g>
                <g transform="translate(640, 750)">
                  <circle r="4" fill="white" opacity="0.3" />
                  <text x="12" y="4">Rifle Shooting Arena</text>
                </g>

                {/* Landmarks */}
                <text x="450" y="650" fill="#10B981" fontSize="11" fontWeight="900" opacity="0.6" className="tracking-widest" textAnchor="middle">Play Ground</text>
                <text x="120" y="750" fill="#10B981" fontSize="9" fontWeight="900" opacity="0.5" className="tracking-widest">Sports Complex</text>
                <text x="420" y="440" fill="white" fontSize="8" opacity="0.2">Bell Tower</text>
              </g>

              {/* Media Unit (Mentioned but not highlighted uniquely) */}
              <g transform="translate(800, 280)">
                 <rect width="80" height="25" fill="white" opacity="0.1" rx="2" />
                 <text y="40" fill="white" fontSize="9" fontWeight="bold" opacity="0.5" className="uppercase tracking-tighter">Media Unit</text>
              </g>

              {/* MAIN SUMMIT MARKER: RICHMOND COLLEGE */}
              <g transform="translate(625, 455)">
                <circle r="14" fill="#2563EB" filter="url(#map-glow)" />
                <circle r="25" stroke="#2563EB" strokeWidth="1" opacity="0.4">
                  <animate attributeName="r" from="14" to="60" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.4" to="0" dur="4s" repeatCount="indefinite" />
                </circle>
                <text y="-35" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" className="uppercase tracking-tighter" style={{ }}>Richmond College</text>
              </g>
            </svg>
           </div>

           {/* Stylized Information Overlay */}
           <div className="absolute bottom-8 left-8 bg-[#1A1A1A]/95 p-8 rounded-[32px] border border-white/5 shadow-2xl backdrop-blur-2xl max-w-[340px] z-10">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-2.5 h-2.5 bg-[#2563EB] rounded-full shadow-[0_0_12px_#2563EB]" />
               <h4 className="text-white font-black text-2xl tracking-tighter uppercase leading-none">KNGINE Venue</h4>
             </div>
             <p className="text-[#9CA3AF] text-base mb-8 font-medium leading-relaxed">
               Richmond College<br />
               Richmond Hill Road, Galle<br />
               Sri Lanka
             </p>
             <div className="flex flex-col gap-3">
               <a 
                 href="https://maps.google.com/?q=Richmond+College+Galle" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-full bg-[#2563EB] text-white text-center py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95"
               >
                 Navigate with Maps ↗
               </a>
             </div>
           </div>

           {/* Location Badge */}
           <div className="absolute top-8 left-8 z-10">
             <div className="bg-[#121212]/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/5 shadow-xl flex items-center gap-3">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
               <span className="text-white font-black text-[10px] uppercase tracking-[0.25em]">Live Site View</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
