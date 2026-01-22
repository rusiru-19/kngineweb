
"use client"
import React from 'react';
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

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
                  <a href="#register" className="text-sm font-bold hover:opacity-60 transition-opacity">Compettetions</a>
                  <a href="#speakers" className="text-sm font-bold hover:opacity-60 transition-opacity">Speakers</a>
                  <a href="/registration" className="text-sm font-bold hover:opacity-60 transition-opacity">Register</a>
                  <a href="#venue" className="text-sm font-bold hover:opacity-60 transition-opacity">Venue</a>
                </div>
                <div className="flex flex-col gap-3">
                   <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-6">Follow Us</h4>
              <div className=" gap-9" >
                {/* FB */}
                <a href="https://www.facebook.com/RITS.KNGINE" className="hover:opacity-60 transition-opacity">
            <Facebook className="w-5 h-5 mb-2" />
                </a>
                {/* LI */}
                <a href="https://github.com/richmond-college-ict" className="hover:opacity-60 transition-opacity">
                <Github className="w-5 h-5 mb-2" />
                </a>
                {/* IG */}
                <a href="https://www.instagram.com/richmonditsociety" className="hover:opacity-60 transition-opacity">
            <Instagram className="w-5 h-5" />
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
