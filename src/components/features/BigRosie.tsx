// src/components/features/BigRosie.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BigRosie = () => {
  return (
    <section className="py-24 bg-[#F9F7F2] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* --- LEFT: The Image (Rosie) --- */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596045167448-6d2c1615743a?q=80&w=1000&auto=format&fit=crop" 
                alt="Big Rosie Roaster"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* The "Floating Badge" Animation */}
              <motion.div 
                className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-lg max-w-[200px]"
                animate={{ y: [0, -10, 0] }} // Bobbing up and down
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <p className="font-handwriting text-[#E09F3E] text-lg leading-tight -rotate-2">
                  "She's loud but we love her!" 💖
                </p>
              </motion.div>
            </div>

            {/* Decorative blob behind */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-[#02303A]/5 rounded-3xl -z-10 transform -rotate-3" />
          </motion.div>

          {/* --- RIGHT: The Story --- */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-[#02303A] mb-6">
                Meet Big <span className="text-pink-500">Rosie.</span>
              </h2>
              
              <p className="text-lg text-[#02303A]/80 leading-relaxed mb-6">
                She’s the heart of our shop – a custom pink coffee roaster who works her magic twice a week. 
                Unlike massive industrial factories, Rosie roasts in small batches, ensuring every bean gets the attention it deserves.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-white rounded-xl border border-[#02303A]/10">
                  <h3 className="font-bold text-[#02303A] text-xl mb-1">Small Batch</h3>
                  <p className="text-sm text-gray-600">Precision roasted for maximum flavour.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#02303A]/10">
                  <h3 className="font-bold text-[#02303A] text-xl mb-1">Ethical</h3>
                  <p className="text-sm text-gray-600">Sourced directly from farmers we know.</p>
                </div>
              </div>

              <button className="group flex items-center gap-2 text-[#02303A] font-bold text-lg hover:gap-4 transition-all">
                Read her full story
                <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BigRosie;