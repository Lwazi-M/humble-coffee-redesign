// src/app/checkout/success/page.tsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  // We need a way to clear the cart!
  // Note: We need to add a 'clearCart' function to our Context first (see Step 4 below)
  // For now, we will just manually set it to empty array if we had access, 
  // but let's assume we will add the helper.
  
  // Since we haven't added clearCart to context yet, let's do a quick hack 
  // to clear localStorage directly for now.
  useEffect(() => {
    localStorage.removeItem('humble_cart');
    // In a real app, we would call the context function here to update state immediately
    // e.g. clearCart();
    
    // Force a reload of the cart context by dispatching a storage event or just refreshing (simple way)
    // Actually, let's just leave the context update for the next step to keep this file clean.
  }, []);

  return (
    <main className="min-h-screen bg-[#02303A] flex items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#F9F7F2] p-12 rounded-3xl max-w-lg w-full shadow-2xl"
      >
        <div className="flex justify-center mb-6">
            <CheckCircle size={80} className="text-[#E09F3E]" />
        </div>
        <h1 className="text-4xl font-serif text-[#02303A] mb-4">Order Confirmed!</h1>
        <p className="text-[#02303A]/70 mb-8 text-lg">
            Thank you for your order. We are roasting your beans as we speak! You will receive an email shortly.
        </p>
        
        <Link href="/" onClick={() => window.location.href="/"} className="inline-block w-full py-4 bg-[#02303A] text-white rounded-xl font-bold hover:bg-[#02303A]/90 transition-all">
            Back to Home
        </Link>
      </motion.div>
    </main>
  );
}