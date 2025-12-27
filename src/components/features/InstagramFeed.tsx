// src/components/features/InstagramFeed.tsx
"use client"; // We need this because we use 'motion' for animations

import React from 'react';
import { motion } from 'framer-motion'; // Animation library
import { Heart, Instagram } from 'lucide-react'; // Icons
import { instaFeed } from '@/lib/instagramData'; // Import our mock data

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-[#F9F7F2]">
      
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           {/* The 'font-serif' class gives us that classy header look */}
          <h2 className="text-4xl md:text-5xl font-serif text-[#02303A] mb-2">
            Caught on Camera
          </h2>
          <p className="text-[#02303A]/70">Follow the aroma @humblecoffee</p>
        </div>
        
        {/* Simple button with hover effect */}
        <a 
          href="https://instagram.com" 
          target="_blank"
          className="hidden md:flex items-center gap-2 px-6 py-3 border border-[#02303A] rounded-full hover:bg-[#02303A] hover:text-white transition-all duration-300"
        >
          <Instagram size={20} />
          <span>Follow Us</span>
        </a>
      </div>

      {/* The Grid of Images */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* We map through our data array to create a card for each item */}
          {instaFeed.map((post) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              className="group relative block aspect-square overflow-hidden rounded-2xl cursor-pointer"
              
              // Animation: Fade in slightly as they appear
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.5, delay: post.id * 0.1 }} // Stagger effect
            >
              {/* The Image */}
              <img 
                src={post.img} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* The "Hover Overlay" - hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-[#02303A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="fill-white" size={24} />
                  <span className="font-bold text-xl">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;