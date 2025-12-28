// src/components/features/BigRosie.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Coffee, Droplets, Layers } from 'lucide-react';

const BigRosie = () => {
  return (
    <section className="py-24 bg-[#F9F7F2] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* --- LEFT: The Image --- */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596045167448-6d2c1615743a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Big Rosie Roaster"
                  className="w-full h-full object-cover"
                />
                 {/* Floating Badge */}
                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-[#02303A]/10">
                    <div className="flex items-center gap-3">
                        <Calendar className="text-[#E09F3E]" size={24} />
                        <div>
                            <p className="text-xs font-bold text-[#02303A] uppercase tracking-wider">Roast Days</p>
                            <p className="text-sm font-serif text-[#02303A]">Every Tuesday & Friday</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: The Story --- */}
          <div className="w-full md:w-1/2 space-y-12">
            
            {/* Header Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-[#02303A] mb-6">
                The Story of <span className="text-[#E09F3E] italic">Big Rosie.</span>
              </h2>
              <p className="text-lg text-[#02303A]/80 leading-relaxed">
                In the gentle, quiet corners of our humble coffee shop, lives a legend we fondly call Big Rosie. 
                She's more than just a roaster; she's the heart and soul of Humble Coffee.
              </p>
            </motion.div>

            {/* Roasting Philosophy */}
            <div className="bg-white p-8 rounded-2xl border border-[#02303A]/5 shadow-sm">
                <h3 className="text-2xl font-serif text-[#02303A] mb-4">Roasted in an Approachable Way</h3>
                <p className="text-[#02303A]/70 mb-4">
                    At Humble Coffee, we have a simple approach: each coffee is roasted differently to let its natural flavours shine through. 
                </p>
                <div className="inline-block px-4 py-2 bg-[#02303A] text-[#F9F7F2] rounded-full text-sm font-semibold">
                    All Medium Roast
                </div>
            </div>

            {/* The 3 Paths (Espresso, Filter, Omni) */}
            <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#02303A]">Find Your Perfect Cup</h3>
                
                {/* 1. Espresso */}
                <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[#E09F3E]/20 rounded-full text-[#02303A]">
                        <Coffee size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#02303A] text-lg">Espresso</h4>
                        <p className="text-sm text-[#02303A]/70 leading-relaxed">
                            For espresso machines, bean-to-cup, or moka pots. Boasts a chocolatey, nutty flavour profile. Enjoy with or without milk.
                        </p>
                    </div>
                </div>

                {/* 2. Filter */}
                <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[#E09F3E]/20 rounded-full text-[#02303A]">
                        <Droplets size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#02303A] text-lg">Filter</h4>
                        <p className="text-sm text-[#02303A]/70 leading-relaxed">
                            For plunger, pour-over, or Aeropress. Offers fruity notes with a touch of acidity. Best enjoyed without milk.
                        </p>
                    </div>
                </div>

                {/* 3. Omni */}
                <div className="flex gap-4 items-start">
                    <div className="p-3 bg-[#E09F3E]/20 rounded-full text-[#02303A]">
                        <Layers size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#02303A] text-lg">Omni</h4>
                        <p className="text-sm text-[#02303A]/70 leading-relaxed">
                            Versatile and balanced. Complements all brewing methods, whether you prefer milk-based or black coffee.
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BigRosie;