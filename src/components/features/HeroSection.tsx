// src/components/features/HeroSection.tsx
"use client"; // Required for animations to work

import React from 'react';
import { motion } from 'framer-motion'; // For the smooth entrance
import { ArrowRight, MapPin } from 'lucide-react'; // Icons

const HeroSection = () => {
  return (
    // <section> is like a <div> but better for SEO (tells Google "this is a main part of the page")
    // h-screen = Height 100% of the screen
    // flex = Places children side-by-side (Left Text, Right Image)
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#F9F7F2] overflow-hidden">
      
      {/* --- LEFT SIDE: The Content --- */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-20 z-10">
        <div className="max-w-xl space-y-6">
          
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}    // Start hidden and slightly lower
            animate={{ opacity: 1, y: 0 }}     // Fade in and slide up
            transition={{ duration: 0.8 }}     // Take 0.8 seconds
          >
            {/* The "Handwritten" Badge */}
            <span className="inline-block py-1 px-3 border border-[#02303A] rounded-full text-sm font-semibold tracking-wide mb-4 text-[#02303A]">
              📍 EST. 2017 • DURBAN
            </span>

            <h1 className="text-5xl md:text-7xl font-serif text-[#02303A] leading-tight">
              Welcome <br />
              <span className="italic text-[#E09F3E]">Home.</span>
            </h1>
          </motion.div>

          {/* Body Text */}
          <motion.p 
            className="text-lg text-[#02303A]/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our goal is for every guest to feel not only welcomed, but truly at home. 
            Humble Coffee represents our commitment to exceptional coffee, served with humility and without pretence.
          </motion.p>

          {/* Buttons Area */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Primary Button */}
            <button className="group relative px-8 py-4 bg-[#02303A] text-[#F9F7F2] rounded-full font-semibold overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Shop Beans <ArrowRight size={18} />
              </span>
              {/* Hover Effect: A small lighter circle expands to fill the button */}
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Secondary Button */}
            <button className="px-8 py-4 border-2 border-[#02303A] text-[#02303A] rounded-full font-semibold hover:bg-[#02303A]/5 transition-colors flex items-center gap-2">
              <MapPin size={18} />
              Visit Us
            </button>
          </motion.div>

        </div>
      </div>

      {/* --- RIGHT SIDE: The Image --- */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
         {/* We use an <img> tag for now. 
            In the future, we will swap this for the Next.js <Image> component for better speed.
         */}
        <motion.img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" 
          alt="Barista pouring coffee"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }} // Start slightly zoomed in
          animate={{ scale: 1, opacity: 1 }}     // Zoom out to normal
          transition={{ duration: 1.5 }}
        />
        
        {/* An overlay gradient to make text readable if it overlaps */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F7F2] to-transparent md:bg-gradient-to-l md:w-20" />
      </div>

    </section>
  );
};

export default HeroSection;