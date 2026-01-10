// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import { useCart } from '@/context/CartContext'; // <--- 1. Import Cart Hook

// --- STATIC PAGES ---
const STATIC_PAGES = [
  { name: 'FAQs', url: '/faq' },
  { name: 'From Our Humble Kitchen', url: '/menu' },
  { name: 'Our Story', url: '/our-story' },
  { name: 'Contact Us', url: '/contact' },
  { name: 'Locations', url: '/locations' },
  { name: 'Menu', url: '/menu' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Cart Hook
  const { toggleCart, itemsCount } = useCart(); // <--- 2. Get Cart Data

  // Search Results State
  const [productResults, setProductResults] = useState<any[]>([]);
  const [pageResults, setPageResults] = useState<any[]>([]);
  const supabase = createClient();

  // Handle Scroll & Esc Key
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Lock body scroll when search is open
  useEffect(() => {
    document.body.style.overflow = isSearchOpen ? 'hidden' : 'unset';
  }, [isSearchOpen]);

  // --- REAL SEARCH LOGIC ---
  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.length === 0) {
        setProductResults([]);
        setPageResults([]);
        return;
      }

      // 1. Search Pages
      const matchingPages = STATIC_PAGES.filter(page => 
        page.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPageResults(matchingPages);

      // 2. Search Products (Supabase)
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('name', `%${searchQuery}%`)
        .limit(5);

      if (!error && data) {
        setProductResults(data);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);

  }, [searchQuery]);

  const navItems = ['Our Menu', 'Shop', 'Our Story', 'Locations', 'Contact Us'];

  const getLinkPath = (name: string) => {
    if (name === 'Contact Us') return '/contact';
    if (name === 'Our Story') return '/our-story';
    if (name === 'Our Menu') return '/menu';
    if (name === 'Locations') return '/locations';
    if (name === 'Shop') return '/shop';
    return '#'; 
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled && !isSearchOpen
            ? 'bg-[#F9F7F2]/90 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`container mx-auto px-6 flex items-center justify-between transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          
          {/* Logo */}
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

          {/* Desktop Links */}
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

          {/* Icons & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-[#02303A] hover:text-[#E09F3E] transition-colors"
            >
              <Search size={20} />
            </button>
            
            {/* --- UPDATED BASKET BUTTON --- */}
            <button
              type="button"
              aria-label="Open cart"
              onClick={toggleCart} // <--- Opens the Drawer
              className="relative text-[#02303A] hover:text-[#E09F3E] transition-colors"
            >
              <ShoppingBag size={20} />
              
              {/* Badge: Only shows if items > 0 */}
              {itemsCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#E09F3E] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#F9F7F2]">
                  {itemsCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="px-5 py-2.5 bg-[#02303A] text-[#F9F7F2] rounded-full text-sm font-semibold hover:bg-[#02303A]/90 transition-all"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-[#02303A] z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* --- SEARCH OVERLAY (Full Screen) --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#F9F7F2] z-[60] overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8">
              
              {/* Search Header */}
              <div className="flex items-center border-b-2 border-[#02303A]/10 pb-6 mb-12">
                <Search className="text-[#02303A] w-6 h-6 mr-4" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-2xl md:text-3xl font-serif text-[#02303A] placeholder-[#02303A]/30 focus:outline-none"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                  className="p-2 hover:bg-[#02303A]/5 rounded-full transition-colors"
                >
                  <X className="text-[#02303A] w-8 h-8" />
                </button>
              </div>

              {/* Search Results Grid */}
              <div className="grid md:grid-cols-3 gap-12">
                
                {/* 1. SUGGESTIONS */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold tracking-widest text-[#02303A]/50 uppercase">Suggestions</h4>
                  {searchQuery && (productResults.length > 0 || pageResults.length > 0) ? (
                    <ul className="space-y-3">
                      {pageResults.map((item, idx) => (
                        <li key={`p-${idx}`}>
                          <Link 
                            href={item.url} 
                            onClick={() => setIsSearchOpen(false)}
                            className="text-lg font-medium text-[#02303A] hover:text-[#E09F3E] transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      {productResults.slice(0, 3).map((item, idx) => (
                        <li key={`prod-${idx}`}>
                          <Link 
                            href="/shop" 
                            onClick={() => setIsSearchOpen(false)}
                            className="text-lg font-medium text-[#02303A] hover:text-[#E09F3E] transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#02303A]/40 italic">Type to see suggestions...</p>
                  )}
                </div>

                {/* 2. PRODUCTS */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold tracking-widest text-[#02303A]/50 uppercase">Products</h4>
                  {searchQuery && productResults.length > 0 ? (
                    <ul className="space-y-4">
                      {productResults.map((item, idx) => (
                        <li key={idx}>
                          <Link 
                            href="/shop" 
                            onClick={() => setIsSearchOpen(false)}
                            className="flex items-center gap-4 group"
                          >
                            <div className="relative w-16 h-16 bg-white rounded-lg border border-[#02303A]/5 overflow-hidden flex-shrink-0">
                              <Image 
                                src={item.image} 
                                alt={item.name} 
                                fill 
                                className="object-contain p-2" 
                              />
                            </div>
                            <span className="font-bold text-[#02303A] group-hover:text-[#E09F3E] transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#02303A]/40 italic">
                        {searchQuery ? "No products found." : "Waiting for input..."}
                    </p>
                  )}
                </div>

                {/* 3. PAGES */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold tracking-widest text-[#02303A]/50 uppercase">Pages</h4>
                  {searchQuery && pageResults.length > 0 ? (
                    <ul className="space-y-3">
                      {pageResults.map((item, idx) => (
                        <li key={idx}>
                          <Link 
                             href={item.url}
                             onClick={() => setIsSearchOpen(false)}
                             className="text-lg text-[#02303A] hover:text-[#E09F3E] transition-colors block border-b border-[#02303A]/5 pb-2"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#02303A]/40 italic">
                        {searchQuery ? "No pages found." : "Waiting for input..."}
                    </p>
                  )}
                </div>

              </div>

              {/* Search Footer */}
              {searchQuery && (
                <div className="mt-12 pt-6 border-t border-[#02303A]/10 flex justify-end">
                    <Link 
                      href="/shop" 
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-2 text-[#02303A] hover:text-[#E09F3E] transition-colors text-lg"
                    >
                      View all results for &quot;{searchQuery}&quot; <ArrowRight size={20} />
                    </Link>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

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