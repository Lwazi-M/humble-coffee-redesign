"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';
import BigRosie from '@/components/features/BigRosie'; // Moved here!

export default function OurStoryPage() {
  return (
    <main className="bg-[#F9F7F2] min-h-screen pt-32">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif text-[#02303A] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Humble <span className="text-[#E09F3E] italic">Beginnings.</span>
        </motion.h1>
        <p className="text-xl text-[#02303A]/70 max-w-2xl mx-auto">
          A women-led café and roastery based in Durban, built on grit, grace, and good coffee.
        </p>
      </div>

      {/* --- SECTION 1: Amy's Story (Text Left, Image Right placeholder or text only) --- */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="w-full md:w-1/2 space-y-4 text-[#02303A]/80 leading-relaxed text-lg">
                <h2 className="text-3xl font-serif text-[#02303A] mb-4">It started with a visit...</h2>
                <p>
                  Our story begins with <span className="font-bold text-[#02303A]">Amy Gardiner</span>. 
                  Amy’s first visit to SA through a high school exchange programme ignited a deep love for the country. 
                  Young and endlessly curious, she would come back two more times before laying down new foundations in the vibrant city of Durban.
                </p>
                <p>
                  Back in her native Scotland, Amy had worked as a barista in a small café. When she moved to Durban, 
                  her journey with coffee continued. But Amy, a serial risk-taker with a craving for more, spent countless 
                  days researching the South African coffee landscape.
                </p>
                <p className="font-semibold italic text-[#E09F3E]">
                  Amy saw a gap. Determined, she stashed up enough to buy her own coffee roaster—and that’s where the magic truly began!
                </p>
             </div>
             {/* Placeholder for an image of Amy if you have one later, currently using a decorative block */}
             <div className="w-full md:w-1/2 bg-[#02303A] p-12 rounded-3xl text-[#F9F7F2] flex flex-col justify-center shadow-xl">
                <Heart className="w-12 h-12 text-[#E09F3E] mb-6" />
                <h3 className="text-2xl font-serif mb-4">"Being nice, humble, and gracious will take you far."</h3>
                <p className="opacity-80">
                  Initially, the plan was simple—coffee with classics like avocado toast. But Amy had a knack for listening to what people desired. 
                  With coffee in hand and a menu unlike any other, Humble Coffee was born.
                </p>
             </div>
          </div>
        </div>
      </section>

       {/* --- SECTION 4: The Award --- */}
      <section className="py-24 bg-[#02303A] text-[#F9F7F2]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6">
               <div className="flex items-center gap-3 text-[#E09F3E] mb-2">
                 <Award size={28} />
                 <span className="font-bold tracking-widest uppercase text-sm">Winner</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                 Coffee Magazine Awards 2023: <br/> Café of the Year
               </h2>
               <p className="opacity-80 text-lg leading-relaxed">
                 "This award goes to the establishment that has consistently created an amazing cafe experience... 
                 great coffee, exceptional food, excellent service, and a loyal community."
               </p>
               <div className="p-6 bg-white/10 rounded-xl border border-white/5 mt-6">
                  <p className="italic opacity-90">
                    "An all-women run cafe in an unlikely location, creating a destination and a haven for deliciousness and joy. 
                    You will definitely leave feeling better than when you arrived."
                  </p>
               </div>
            </div>

            {/* Image Side - Needs 'awards.jpg' in public/assets/ */}
            <div className="w-full lg:w-1/2">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                 <Image 
                   src="/assets/awards.png" 
                   alt="Amy and Nomfundo winning Cafe of the Year" 
                   width={800} 
                   height={800}
                   className="object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                    <p className="text-sm font-medium text-white/90 text-center">
                      Nomfundo Nyezi (Left) & Amy Gardiner (Right)
                    </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: BIG ROSIE (Moved from Home) --- */}
      <BigRosie />

      {/* --- SECTION 3: Sourcing & Transparency --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Leaf className="w-12 h-12 text-[#E09F3E] mx-auto" />
            <h2 className="text-4xl font-serif text-[#02303A]">Behind Every Sip</h2>
            <p className="text-lg text-[#02303A]/80 leading-relaxed">
              In the world of coffee, origin often remains a mystery, but we’re committed to transparency.
              We know the story behind every bean, the hands that have nurtured them, and the lands that cradled them.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="p-8 bg-[#F9F7F2] rounded-2xl border border-[#02303A]/5">
                 <h4 className="font-bold text-[#02303A] text-xl mb-3">Relationships First</h4>
                 <p className="text-[#02303A]/70">
                   Our secret? We build relationships. We forge bonds with farmers to ensure that the journey from farm to cup isn’t just a story, but a legacy of respect and gratitude.
                 </p>
              </div>
              <div className="p-8 bg-[#F9F7F2] rounded-2xl border border-[#02303A]/5">
                 <h4 className="font-bold text-[#02303A] text-xl mb-3">Eco-Conscious</h4>
                 <p className="text-[#02303A]/70">
                   Our packaging is eco-friendly—a reflection of our values. We believe in leaving the earth better than we found it, one cup at a time.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}