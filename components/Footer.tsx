
"use client"
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row rounded-[40px] overflow-hidden min-h-[500px] shadow-2xl">
          
          {/* Left Pane - Info & Links */}
          <div className="w-full md:w-[60%] bg-[#D1D5DB] p-10 md:p-16 flex flex-col justify-between text-[#0B0B0B]">
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-12 uppercase">
                KNGINE - LEGION
              </h2>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex flex-col gap-4">
                  <a href="#register" className="text-sm font-bold hover:opacity-60 transition-opacity">Agenda</a>
                  <a href="#speakers" className="text-sm font-bold hover:opacity-60 transition-opacity">Speakers</a>
                  <a href="#tickets" className="text-sm font-bold hover:opacity-60 transition-opacity">Register</a>
                  <a href="#venue" className="text-sm font-bold hover:opacity-60 transition-opacity">Venue</a>
                  <a href="#contact" className="text-sm font-bold hover:opacity-60 transition-opacity">FAQ</a>
                </div>
                <div className="flex flex-col gap-3">
                   <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-6">Follow Us</h4>
              <div className=" gap-6">
                {/* FB */}
                <a href="#" className="hover:opacity-60 transition-opacity">
                  <svg className="w-5 h-5 fill-current mb-4 " viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                {/* LI */}
                <a href="#" className="hover:opacity-60 transition-opacity">
                  <svg className="w-5 h-5 fill-current mb-4" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                {/* IG */}
                <a href="#" className="hover:opacity-60 transition-opacity">
                  <svg className="w-5 h-5 fill-current mb-4" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.353-2.618-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* YT */}
                <a href="#" className="hover:opacity-60 transition-opacity">
                  <svg className="w-5 h-5 fill-current mb-4" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.612 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <p className="text-[10px] md:text-xs font-bold opacity-60 uppercase tracking-widest">
                © 2026 RITS. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Pane - Newsletter & Socials */}
        <div className="w-full md:w-[40%] bg-black p-10 md:p-16 flex items-center justify-center text-white">
        <img
          src="/rits.png"
          alt="RITS Logo"
          className="max-w-full h-auto object-contain"
        />
      </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
