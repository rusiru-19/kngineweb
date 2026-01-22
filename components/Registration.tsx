"use client"
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StarburstGraphic, ArrowRightIcon } from '@/constants';

/**
 * 🎯 CHANGE THIS DATE
 * Format: YYYY-MM-DDTHH:mm:ss
 */
const TARGET_DATE = new Date("2026-02-12T00:00:00").getTime();

const Registration: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [prevTime, setPrevTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [animatingUnits, setAnimatingUnits] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { title: "KNGINE'23", img: "/kngine23.jpg" },
    { title: "KNGINE'20", img: "/kngine20.jpg" },
    { title: "KNGINE'19", img: "/kngine19.jpg" },
    { title: "KNGINE'17", img: "/kngine17.png" },
    { title: "KNGINE'16", img: "/kngine23.jpg" },
    { title: "KNGINE'15", img: "/kngine20.jpg" },
  ];

  const cardsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const distance = TARGET_DATE - now;

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

    // initial set
    const initial = calculateTimeLeft();
    setTimeLeft(initial);
    setPrevTime(initial);

    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      
      // Check which units changed
      const changes = {
        days: newTime.days !== prevTime.days,
        hours: newTime.hours !== prevTime.hours,
        minutes: newTime.minutes !== prevTime.minutes,
        seconds: newTime.seconds !== prevTime.seconds,
      };

      if (Object.values(changes).some(changed => changed)) {
        setAnimatingUnits(changes);
        setPrevTime(newTime);
        setTimeLeft(newTime);
        
        // Reset animation after it completes
        setTimeout(() => {
          setAnimatingUnits({ days: false, hours: false, minutes: false, seconds: false });
        }, 600);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [prevTime]);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  const CountdownUnit = ({ value, label, isAnimating }: { value: number; label: string; isAnimating: boolean }) => (
    <div className="relative">
      <div className={`text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white transition-all duration-300 ${isAnimating ? 'animate-flip' : ''}`}>
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[#6B7280] text-[10px] sm:text-xs font-bold uppercase mt-2 text-center">
        {label}
      </div>
    </div>
  );

  return (
    <section  className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-[1200px]  mx-auto">
        {/* Register Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
            REGISTER
            <br />
            NOW
          </h2>
          <div className="flex flex-col justify-end h-full">
            <p className="text-[#9CA3AF] text-base sm:text-lg font-medium leading-relaxed max-w-sm lg:ml-auto lg:text-right">
              Secure your spot at the KNGINE Legion by registering
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="bg-[#121212] rounded-2xl sm:rounded-3xl lg:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center relative overflow-hidden border border-white/5">
          <div className="relative z-10 w-full">
            <p className="text-[#6B7280] font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
              Revolution Starts In:
            </p>

            <div className="flex gap-3 sm:gap-6 md:gap-8 lg:gap-16 items-baseline justify-center md:justify-start flex-wrap">
              <CountdownUnit value={timeLeft.days} label="DAYS" isAnimating={animatingUnits.days} />
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white/20">:</div>
              <CountdownUnit value={timeLeft.hours} label="HOURS" isAnimating={animatingUnits.hours} />
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white/20">:</div>
              <CountdownUnit value={timeLeft.minutes} label="MINUTES" isAnimating={animatingUnits.minutes} />
              
            </div>
          </div>

          {/* Graphic */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-50">
            <img src="/countdown.png" alt="" width={400} className="" />
          </div>
        </div>
        {/* Header */}
        <div id="past" className="flex justify-between mt-40 items-center mb-8 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            What Past Look Like
          </h3>
           <div className="flex gap-2">
            <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <ArrowRightIcon className="w-5 h-5 rotate-180" />
            </button>
            <button 
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B0B0B]">
              <ArrowRightIcon  className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials with Navigation */}
        <div  className="relative mb-1 sm:mb-2 md:mb-4 lg:mb-2">
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` 
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="relative h-[280px] sm:h-[320px] md:h-[350px] rounded-2xl sm:rounded-3xl md:rounded-[32px] overflow-hidden group flex-shrink-0"
                  style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * (cardsPerView === 1 ? 0 : 24) / cardsPerView}px)` }}
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-tight">
                      {t.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          {testimonials.length > cardsPerView && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        
      </div>

      <style>{`
        @keyframes flip {
          0% {
            transform: perspective(400px) rotateX(0deg);
          }
          50% {
            transform: perspective(400px) rotateX(90deg);
          }
          100% {
            transform: perspective(400px) rotateX(0deg);
          }
        }
        
        .animate-flip {
          animation: flip 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Registration;