// src/components/features/HeroSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#F9F7F2] overflow-hidden">
      
      {/* --- LEFT SIDE: The Content --- */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-20 pt-28 md:pt-40 z-10 order-2 md:order-1">
        <div className="max-w-xl space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-[#02303A] rounded-full text-xs md:text-sm font-semibold tracking-wide mb-4 text-[#02303A]">
              Since: 2019 
            </span>

            {/* RWD UPDATE: Smaller font on mobile (4xl), huge on desktop (7xl) */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#02303A] leading-tight">
              Ethical coffee, <br />
              <span className="italic text-[#E09F3E]">humbly roasted.</span>
            </h1>
          </motion.div>

          {/* RWD UPDATE: Adjustable text size for readability */}
          <motion.p 
            className="text-base md:text-lg text-[#02303A]/80 leading-relaxed max-w-md md:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience the rich, bold flavours of Durban’s finest roast. 
            Sourced with conscience, roasted with passion, and served with a story.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* LINK 1: Shop Beans */}
            <Link 
              href="/shop" 
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-[#02303A] text-[#F9F7F2] rounded-full font-semibold overflow-hidden flex items-center text-sm md:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Beans <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            {/* LINK 2: Visit Us */}
            <Link 
              href="/locations"
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#02303A] text-[#02303A] rounded-full font-semibold hover:bg-[#02303A]/5 transition-colors flex items-center gap-2 text-sm md:text-base"
            >
              <MapPin size={18} />
              Visit Us
            </Link>
          </motion.div>

        </div>
      </div>

      {/* --- RIGHT SIDE: The Video --- */}
      {/* RWD UPDATE: 50% height on mobile, Full height on desktop */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2 overflow-hidden">
          
         <motion.div
           className="w-full h-full relative"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.2 }}
         >
            <video 
                className="w-full h-full object-cover md:scale-110 object-center"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/assets/humble-coffee.jpg"
            >
                <source src="/assets/humble-hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Overlay for mobile readability if needed */}
            <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
            
         </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;