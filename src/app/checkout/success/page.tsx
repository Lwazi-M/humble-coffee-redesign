// src/app/checkout/success/page.tsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SuccessPage() {
  
  // Clear the cart when this page loads
  useEffect(() => {
    // 1. Clear LocalStorage immediately
    if (typeof window !== 'undefined') {
      localStorage.removeItem('humble_cart');
      
      // 2. Dispatch a storage event (helps sync tabs, though not always current tab)
      window.dispatchEvent(new Event('storage'));
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#02303A] flex items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-[#E09F3E] rounded-full blur-[100px]" />
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F9F7F2] rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="bg-[#F9F7F2] p-12 md:p-16 rounded-[3rem] max-w-lg w-full shadow-2xl relative z-10"
      >
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center mb-8"
        >
            <div className="w-24 h-24 bg-[#E09F3E]/20 rounded-full flex items-center justify-center">
                <CheckCircle size={48} className="text-[#E09F3E]" />
            </div>
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#02303A] mb-4">Order Confirmed!</h1>
        
        <p className="text-[#02303A]/70 mb-10 text-lg leading-relaxed">
            Thank you for supporting Humble Coffee. We are firing up the roaster as we speak! You&apos;ll receive an email confirmation shortly.
        </p>
        
        {/* We use a hard link (window.location) to force the app to reload and see the empty cart */}
        <Link 
            href="/" 
            onClick={(e) => {
                e.preventDefault();
                window.location.href = "/"; 
            }}
            className="w-full py-4 bg-[#02303A] text-white rounded-xl font-bold text-lg hover:bg-[#02303A]/90 transition-all flex items-center justify-center gap-2 group shadow-lg"
        >
            Back to Home <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </main>
  );
}