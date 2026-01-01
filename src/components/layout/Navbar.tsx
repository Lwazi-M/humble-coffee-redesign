// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Our Menu', 'Shop', 'Our Story', 'Locations', 'Contact Us'];

  // Helper function to handle routing
  const getLinkPath = (name: string) => {
    if (name === 'Contact Us') return '/contact';
    if (name === 'Our Story') return '/our-story';
    return '#'; // Default for items we haven't built yet
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F9F7F2]/90 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* 1. Logo */}
          <Link href="/" className="relative z-50">
            <div className="relative w-40 h-16"> 
                <Image 
                    src="/assets/logo.webp" 
                    alt="Humble Coffee"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
          </Link>

          {/* 2. Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[#02303A] font-medium">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={getLinkPath(item)} 
                className="hover:text-[#E09F3E] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E09F3E] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* 3. Icons & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              aria-label="Search"
              className="text-[#02303A] hover:text-[#E09F3E] transition-colors"
            >
              <Search size={20} />
            </button>
            
            <button
              type="button"
              aria-label="Open cart"
              className="relative text-[#02303A] hover:text-[#E09F3E] transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <button
              type="button"
              className="px-5 py-2.5 bg-[#02303A] text-[#F9F7F2] rounded-full text-sm font-semibold hover:bg-[#02303A]/90 transition-all"
            >
              Book a Table
            </button>
          </div>

          {/* 4. Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-[#02303A] z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-[#F9F7F2] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {[...navItems, 'Book a Table'].map((item) => (
              <Link 
                key={item} 
                href={getLinkPath(item)}
                className="text-3xl font-serif text-[#02303A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;