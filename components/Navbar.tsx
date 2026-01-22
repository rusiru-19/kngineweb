"use client"
import React, { useState } from 'react';
import { Logo, MenuIcon, CloseIcon } from '@/constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = ['Home', 'Register', 'Speakers', 'Past', 'Venue', /*'Sponsors' */];
  const Nav =[
    
    {
      name: 'Register',
      link: 'register'
    },
    {
      name: 'Speakers',
      link: '#Speakers'
    },{
      name: 'Past',
      link: '#Past'
    },{
      name: 'Venue',
      link: '#venue'
    }
  ]
  return (
    <>
      <nav className="mt-6 left-0 right-0 z-[60] flex justify-center px-4 lg:px-16">
        <div className="w-full max-w-[1200px] flex items-center justify-between">
          <Logo className="text-3xl" />
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <a href="#home" className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Home</a>
              {Nav.map((nav) => (
                <a
                  key={nav.name}
                  href={`${nav.link.toLowerCase()}`}
                  className="text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 hover:text-white transition-colors"
                >
                  {nav.name}
                </a>
              ))}
            </div>
          </div>

          <button 
            className="md:hidden text-white p-2 bg-white/5 rounded-full border border-white/10"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[70] bg-[#0B0B0B] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-20">
            <Logo className="text-4xl" />
            <button 
              className="text-[#6B7280] p-4 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CloseIcon className="w-10 h-10" />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {Nav.map((nav) => (
              <a
                key={nav.name}
                href={`${nav.link.toLowerCase()}`}
                className="text-5xl font-black text-white hover:text-[#2563EB] transition-colors uppercase tracking-tighter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;