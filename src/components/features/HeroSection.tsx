// src/components/features/HeroSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#F9F7F2] overflow-hidden">
      
      {/* --- LEFT SIDE: The Content --- */}
      {/* UPDATE APPLIED: Added 'pt-32 md:pt-40' to push content down away from the fixed Logo */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-20 pt-32 md:pt-40 z-10 order-2 md:order-1">
        <div className="max-w-xl space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-[#02303A] rounded-full text-sm font-semibold tracking-wide mb-4 text-[#02303A]">
              📍 EST. 2019 
            </span>

            <h1 className="text-5xl md:text-7xl font-serif text-[#02303A] leading-tight">
              Ethical coffee, <br />
              <span className="italic text-[#E09F3E]">humbly roasted.</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg text-[#02303A]/80 leading-relaxed"
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
            <button className="group relative px-8 py-4 bg-[#02303A] text-[#F9F7F2] rounded-full font-semibold overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Shop Beans <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button className="px-8 py-4 border-2 border-[#02303A] text-[#02303A] rounded-full font-semibold hover:bg-[#02303A]/5 transition-colors flex items-center gap-2">
              <MapPin size={18} />
              Visit Us
            </button>
          </motion.div>

        </div>
      </div>

      {/* --- RIGHT SIDE: The 1:1 Video (Clean) --- */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2 overflow-hidden">
         
         <motion.div
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
         >
            {/* 1. scale-110: Zooms in to hide watermark.
               2. No extra divs below this video tag = No shadow/gradient.
            */}
            <video 
                className="w-full h-full object-cover scale-110 object-center"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/assets/humble-coffee.jpg"
            >
                {/* Kept your specific filename */}
                <source src="/assets/humble-hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
         </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;