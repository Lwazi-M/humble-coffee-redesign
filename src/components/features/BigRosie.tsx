// src/components/features/BigRosie.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Coffee, Droplets, Layers } from 'lucide-react';

const BigRosie = () => {
  return (
    <section className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-6">
        
        {/* --- PART 1: The Banner Image (1920 x 500 optimized) --- */}
        <motion.div 
          className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <img 
              src="/assets/rosie.webp" 
              alt="Big Rosie Roaster"
              className="w-full h-full object-cover object-center" 
            />
            
            {/* Floating Badge (Now positioned bottom-left for banner look) */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg border border-[#02303A]/10">
                <div className="flex items-center gap-4">
                    <div className="bg-[#E09F3E]/20 p-3 rounded-full text-[#02303A]">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[#02303A] uppercase tracking-wider mb-1">Roast Days</p>
                        <p className="text-base md:text-lg font-serif text-[#02303A]">Every Tuesday & Friday</p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* --- PART 2: The Story Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
            {/* Left Column: The Main Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-[#02303A] mb-8 leading-tight">
                The Story of <br/>
                <span className="text-[#E09F3E] italic">Big Rosie.</span>
              </h2>
              <div className="space-y-6 text-lg text-[#02303A]/80 leading-relaxed">
                  <p>
                    In the gentle, quiet corners of our humble coffee shop, lives a legend we fondly call Big Rosie. 
                    She's more than just a roaster; she's the heart and soul of Humble Coffee.
                  </p>
                  <p>
                    Every Tuesday and Friday, Big Rosie sets out on her mission. With precision and care, 
                    she transforms green coffee beans into rich, aromatic treasures.
                  </p>
              </div>

               {/* Roasting Philosophy Box */}
               <div className="mt-8 bg-white p-8 rounded-2xl border border-[#02303A]/5 shadow-sm">
                  <h3 className="text-2xl font-serif text-[#02303A] mb-4">Roasted in an Approachable Way</h3>
                  <p className="text-[#02303A]/70 mb-4">
                      At Humble Coffee, we have a simple approach: each coffee is roasted differently to let its natural flavours shine through. 
                  </p>
                  <div className="inline-block px-4 py-2 bg-[#02303A] text-[#F9F7F2] rounded-full text-sm font-semibold">
                      All Medium Roast
                  </div>
              </div>
            </motion.div>

            {/* Right Column: Brewing Methods */}
            <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h3 className="text-2xl font-serif text-[#02303A] mb-6">Find Your Perfect Cup</h3>
                
                {/* 1. Espresso */}
                <div className="group p-6 bg-white hover:bg-[#02303A] hover:text-[#F9F7F2] rounded-2xl transition-all duration-300 border border-[#02303A]/5 shadow-sm">
                    <div className="flex gap-4 items-start">
                        <Coffee className="w-6 h-6 text-[#E09F3E] mt-1" />
                        <div>
                            <h4 className="font-bold text-xl mb-2">Espresso</h4>
                            <p className="text-sm opacity-80 leading-relaxed">
                                For espresso machines, bean-to-cup, or moka pots. Boasts a chocolatey, nutty flavour profile. Enjoy with or without milk.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Filter */}
                <div className="group p-6 bg-white hover:bg-[#02303A] hover:text-[#F9F7F2] rounded-2xl transition-all duration-300 border border-[#02303A]/5 shadow-sm">
                    <div className="flex gap-4 items-start">
                        <Droplets className="w-6 h-6 text-[#E09F3E] mt-1" />
                        <div>
                            <h4 className="font-bold text-xl mb-2">Filter</h4>
                            <p className="text-sm opacity-80 leading-relaxed">
                                For plunger, pour-over, or Aeropress. Offers fruity notes with a touch of acidity. Best enjoyed without milk.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Omni */}
                <div className="group p-6 bg-white hover:bg-[#02303A] hover:text-[#F9F7F2] rounded-2xl transition-all duration-300 border border-[#02303A]/5 shadow-sm">
                    <div className="flex gap-4 items-start">
                        <Layers className="w-6 h-6 text-[#E09F3E] mt-1" />
                        <div>
                            <h4 className="font-bold text-xl mb-2">Omni</h4>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Versatile and balanced. Complements all brewing methods, whether you prefer milk-based or black coffee.
                            </p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BigRosie;