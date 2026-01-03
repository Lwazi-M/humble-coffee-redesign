// src/app/locations/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const locations = [
  {
    name: "Lilian Ngoyi Road",
    address: "222 Lilian Ngoyi Rd, Windermere, Durban",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Humble+Coffee+222+Lilian+Ngoyi+Rd+Durban",
    image: "/assets/humble-coffee.jpg", 
    hours: [
      { days: "Monday - Sunday", time: "07:00 - 16:00" },
    ],
    features: ["Roastery HQ", "Outdoor Seating", "Pet Friendly"]
  },
  {
    name: "Florida Road",
    address: "262 Florida Rd, Morningside, Durban",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Humble+Coffee+262+Florida+Rd+Durban",
    image: "/assets/humble-florida-road.jpg",
    hours: [
      { days: "Monday - Friday", time: "06:00 - 16:00" },
      { days: "Saturday", time: "06:30 - 14:00" },
      { days: "Sunday", time: "07:00 - 14:00" },
    ],
    features: ["Grab & Go", "Vibrant Atmosphere", "WiFi"]
  }
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-24">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif text-[#02303A] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find us in <span className="text-[#E09F3E] italic">Durban.</span>
        </motion.h1>
        <p className="text-[#02303A]/70 max-w-xl mx-auto text-lg">
          Whether you need a quick caffeine fix or a slow morning with friends, we have a spot for you.
        </p>
      </div>

      {/* --- LOCATIONS GRID --- */}
      <div className="container mx-auto px-6">
        {/* UPDATE: Changed max-w-6xl to max-w-7xl for a wider layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#02303A]/5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Image Section */}
              {/* UPDATE: Changed h-64 to h-80 (Taller image) */}
              <div className="relative h-80 w-full bg-gray-200">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#02303A]">
                  {index === 0 ? "HQ & Roastery" : "Espresso Bar"}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-serif text-[#02303A] mb-3">{loc.name}</h2>
                
                {/* Address Link */}
                <a 
                  href={loc.googleMapsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E09F3E] font-medium hover:underline mb-8"
                >
                  <MapPin size={20} />
                  {loc.address}
                </a>

                {/* Hours */}
                <div className="space-y-3 mb-8 bg-[#F9F7F2] p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-[#02303A] font-bold mb-2">
                    <Clock size={18} /> Opening Hours
                  </div>
                  {loc.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm md:text-base text-[#02303A]/80">
                      <span>{h.days}</span>
                      <span className="font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {loc.features.map((feature, i) => (
                    <span key={i} className="px-4 py-2 bg-[#02303A]/5 text-[#02303A] text-sm font-semibold rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                    <a 
                        href={loc.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-4 border-2 border-[#02303A] rounded-xl font-bold text-[#02303A] hover:bg-[#02303A] hover:text-[#F9F7F2] transition-colors text-lg"
                    >
                        Get Directions <ArrowUpRight size={20} />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </main>
  );
}