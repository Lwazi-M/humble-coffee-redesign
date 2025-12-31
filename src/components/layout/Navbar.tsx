// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // <--- Imported Image component

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Magic Effect: Detect scroll to change background from transparent to solid
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F9F7F2]/90 backdrop-blur-md py-4 shadow-sm' // Scrolled state (Glass)
            : 'bg-transparent py-6' // Top state (Transparent)
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* 1. Logo - Updated to use real Image asset */}
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

          {/* 2. Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-[#02303A] font-medium">
            {['Shop Coffee', 'Our Menu', 'The Story', 'Locations'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="hover:text-[#E09F3E] transition-colors relative group"
              >
                {item}
                {/* Hover Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E09F3E] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* 3. Icons & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              aria-label="Search"
              title="Search"
              className="text-[#02303A] hover:text-[#E09F3E] transition-colors"
            >
              <Search size={20} />
            </button>
            
            <button
              type="button"
              aria-label="Open cart"
              title="Open cart"
              className="relative text-[#02303A] hover:text-[#E09F3E] transition-colors"
            >
              <ShoppingBag size={20} />
              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <button
              type="button"
              className="px-5 py-2.5 bg-[#02303A] text-[#F9F7F2] rounded-full text-sm font-semibold hover:bg-[#02303A]/90 transition-all"
            >
              Book a Table
            </button>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            title={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-[#02303A] z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-[#F9F7F2] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {['Shop Coffee', 'Our Menu', 'The Story', 'Locations', 'Book a Table'].map((item) => (
              <Link 
                key={item} 
                href="#" 
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