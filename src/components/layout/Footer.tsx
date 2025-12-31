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
            {/* Logo - With 'brightness-0 invert' filter to make it white */}
            <Link href="/" className="relative z-50 block">
                <div className="relative w-40 h-16"> 
                    <Image 
                        src="/assets/secondary_logo.webp" 
                        alt="Humble Coffee"
                        fill
                        className="object-contain object-left brightness-0 invert" 
                        priority
                    />
                </div>
            </Link>
          
            <p className="opacity-80 max-w-xs">
              Ethically sourced, locally roasted, and served with love in Durban.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-[#E09F3E]">Shop</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-white">Coffee Beans</a></li>
                <li><a href="#" className="hover:text-white">Merch</a></li>
                <li><a href="#" className="hover:text-white">Subscriptions</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#E09F3E]">Company</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-white">Our Story</a></li>
                <li><a href="#" className="hover:text-white">Locations</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#E09F3E]">Visit Us</h4>
            <div className="opacity-80 space-y-2">
              <p className="flex items-center gap-2"><MapPin size={18} /> 222 Lilian Ngoyi Rd, Durban</p>
              <p className="flex items-center gap-2"><MapPin size={18} /> 262 Florida Rd, Durban</p>
              <p className="flex items-center gap-2"><Mail size={18} /> amy@humblecoffee.co.za</p>
            </div>
            <div className="flex gap-4 pt-2">
              <Instagram className="cursor-pointer hover:text-[#E09F3E]" />
              <Facebook className="cursor-pointer hover:text-[#E09F3E]" />
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