// src/components/layout/Footer.tsx
"use client";

import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#02303A] text-[#F9F7F2] py-16">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            {/* Logo - Static Image (No Link), White Filter */}
            <div className="relative w-40 h-16"> 
                <Image 
                    src="/assets/secondary_logo.webp" 
                    alt="Humble Coffee"
                    fill
                    className="object-contain object-left brightness-0 invert" 
                    priority
                />
            </div>
          
            <p className="opacity-80 max-w-xs">
              Ethically sourced, locally roasted, and served with love in Durban.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-[#E09F3E]">Shop</h4>
              <ul className="space-y-2 opacity-80">
                <li><Link href="#" className="hover:text-white transition-colors">Coffee Beans</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Merch</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#E09F3E]">Company</h4>
              <ul className="space-y-2 opacity-80">
                <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
                {/* --- ADDED FAQ LINK HERE --- */}
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#E09F3E]">Visit Us</h4>
            <div className="opacity-80 space-y-2">
              <p className="flex items-center gap-2"><MapPin size={18} /> 222 Lilian Ngoyi Rd, Durban</p>
              <p className="flex items-center gap-2"><MapPin size={18} /> 262 Florida Rd, Durban</p>
              <p className="flex items-center gap-2"><Mail size={18} /> amy@humblecoffee.co.za</p>
            </div>
            
            {/* UPDATED: Social Media Links */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/humblecoffeeza/"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="cursor-pointer hover:text-[#E09F3E] transition-colors" />
              </a>
              
              <a 
                href="https://www.facebook.com/humblecoffeeza/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="cursor-pointer hover:text-[#E09F3E] transition-colors" />
              </a>
            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center opacity-60 text-sm">
          © {new Date().getFullYear()} Humble Coffee. Designed by Lwazi.
        </div>

      </div>
    </footer>
  );
};

export default Footer;