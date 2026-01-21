import React, { useState, useEffect } from "react";
import { StarburstGraphic, ArrowRightIcon } from "../constants";

/**
 * 🎯 CHANGE THIS DATE
 * Format: YYYY-MM-DDTHH:mm:ss
 */
const TARGET_DATE = new Date("2026-02-12T00:00:00");

const Registration: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE.getTime() - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      title: "KNGINE'23",
      img: '/kngine23.jpg'
    },

{
      title: "KNGINE'20",
      img: '/kngine20.jpg'
    },    
    


    {
      title: "KNGINE'19",
      img: '/kngine19.jpg'
    },


    {
      title: "KNGINE'17",
      img: '/kngine17.png'
    },



  ];

  return (
    <section
      id="past"
      className="py-20 md:py-32 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Testimonials Header */}
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            What Past Look Like
          </h3>
        
        </div>

        {/* Testimonials Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-32">
  {testimonials.map((t, i) => (
    <div
      key={i}
      className="relative h-[350px] rounded-[32px] overflow-hidden group"
    >
      {/* Background Image */}
      <img
        src={t.img}
        alt={t.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

      {/* Title */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <h3 className="text-white text-xl md:text-2xl font-black tracking-tight">
          {t.title}
        </h3>
      </div>
    </div>
  ))}
</div>


        {/* Register Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
            REGISTER
            <br />
            NOW
          </h2>
          <div className="flex flex-col justify-end h-full">
            <p className="text-[#9CA3AF] text-lg font-medium leading-relaxed max-w-sm ml-auto text-right">
              Secure your spot at the KNGINE Legion by registering 
            </p>
          </div>
        </div>

        {/* Countdown Card */}
        <div className="bg-[#121212] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center relative overflow-hidden border border-white/5">
          <div className="relative z-10 w-full md:w-auto">
            <p className="text-[#6B7280] font-black text-xs uppercase tracking-[0.2em] mb-12">
              Early Bird Pricing Ends In:
            </p>

            <div className="flex gap-8 md:gap-16 items-baseline">
              {/* DAYS */}
              <div>
                <div className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-[#6B7280] font-bold text-[10px] uppercase tracking-widest mt-2">
                  DAYS
                </div>
              </div>

              <div className="text-5xl md:text-7xl font-black text-white/20">
                :
              </div>

              {/* HOURS */}
              <div>
                <div className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-[#6B7280] font-bold text-[10px] uppercase tracking-widest mt-2">
                  HOURS
                </div>
              </div>

              <div className="text-5xl md:text-7xl font-black text-white/20">
                :
              </div>

              {/* MINUTES */}
              <div>
                <div className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-[#6B7280] font-bold text-[10px] uppercase tracking-widest mt-2">
                  MINUTES
                </div>
              </div>
            </div>
          </div>

          {/* Graphic */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4">
          <img src="/countdown.png" alt=""  width="400"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
