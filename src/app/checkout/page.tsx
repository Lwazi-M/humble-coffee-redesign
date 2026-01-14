// src/app/checkout/page.tsx
"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, Lock, MapPin, Truck } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  // --- HELPER: Convert "R 145.00" string to number 145.00 ---
  const parsePrice = (priceStr: string | number) => {
    if (typeof priceStr === 'number') return priceStr;
    const clean = priceStr.replace(/[^0-9.]/g, ''); 
    return parseFloat(clean) || 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate a 2-second delay
    setTimeout(() => {
        router.push('/checkout/success');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center pt-32 px-6 text-center">
        <h1 className="text-4xl font-serif text-[#02303A] mb-4">Your basket is empty.</h1>
        <p className="text-[#02303A]/60 mb-8">Looks like you haven't added any coffee yet.</p>
        <Link href="/shop" className="px-8 py-3 bg-[#02303A] text-white rounded-full font-bold hover:bg-[#02303A]/90 transition-colors">
            Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Back Link */}
        <Link href="/shop" className="inline-flex items-center gap-2 text-[#02303A]/60 hover:text-[#E09F3E] mb-8 font-medium">
           <ArrowLeft size={20} /> Continue Shopping
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#02303A] mb-12">Secure Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN: SHIPPING FORM */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="order-2 lg:order-1"
            >
                <div className="bg-white p-8 rounded-3xl border border-[#02303A]/5 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 border-b border-[#02303A]/10 pb-4">
                        <MapPin className="text-[#E09F3E]" />
                        <h3 className="text-xl font-bold text-[#02303A]">Shipping Details</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#02303A]/70">First Name</label>
                                <input required type="text" className="w-full p-3 bg-[#F9F7F2] border border-[#02303A]/10 rounded-xl focus:outline-none focus:border-[#E09F3E] transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#02303A]/70">Last Name</label>
                                <input required type="text" className="w-full p-3 bg-[#F9F7F2] border border-[#02303A]/10 rounded-xl focus:outline-none focus:border-[#E09F3E] transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#02303A]/70">Email Address</label>
                            <input required type="email" className="w-full p-3 bg-[#F9F7F2] border border-[#02303A]/10 rounded-xl focus:outline-none focus:border-[#E09F3E] transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#02303A]/70">Street Address</label>
                            <input required type="text" placeholder="e.g. 222 Lilian Ngoyi Rd" className="w-full p-3 bg-[#F9F7F2] border border-[#02303A]/10 rounded-xl focus:outline-none focus:border-[#E09F3E] transition-colors" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#02303A]/70">City</label>
                                <input required type="text" defaultValue="Durban" className="w-full p-3 bg-[#F9F7F2] border border-[#02303A]/10 rounded-xl focus:outline-none focus:border-[#E09F3E] transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#02303A]/70">Postal Code</label>
                                <input required type="text" className="w-full p-3 bg-[#F9F7F2] border border-[#02303A]/10 rounded-xl focus:outline-none focus:border-[#E09F3E] transition-colors" />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isProcessing}
                            className="w-full py-4 bg-[#02303A] text-white rounded-xl font-bold text-lg hover:bg-[#02303A]/90 transition-all flex items-center justify-center gap-2 mt-8 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:-translate-y-1"
                        >
                            {isProcessing ? (
                                <span className="flex items-center gap-2 animate-pulse">Processing Payment...</span>
                            ) : (
                                <> <CreditCard size={20} /> Pay R {cartTotal.toFixed(2)} </>
                            )}
                        </button>
                        
                        <div className="flex items-center justify-center gap-2 text-xs text-[#02303A]/40 mt-4">
                            <Lock size={12} /> SSL Secure Payment
                        </div>
                    </form>
                </div>
            </motion.div>

            {/* RIGHT COLUMN: ORDER SUMMARY */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl border border-[#02303A]/5 shadow-sm h-fit order-1 lg:order-2 sticky top-32"
            >
                <div className="flex items-center gap-3 mb-6 border-b border-[#02303A]/10 pb-4">
                    <Truck className="text-[#E09F3E]" />
                    <h3 className="text-xl font-bold text-[#02303A]">Order Summary</h3>
                </div>

                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                            <div className="relative w-16 h-16 bg-[#F9F7F2] rounded-lg border border-[#02303A]/5 flex-shrink-0">
                                <Image 
                                   src={item.image} 
                                   alt={item.name} 
                                   fill 
                                   className="object-contain p-2"
                                />
                                <span className="absolute -top-2 -right-2 bg-[#02303A] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">
                                    {item.quantity}
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-[#02303A] text-sm leading-tight">{item.name}</p>
                                {item.variant && (
                                   <p className="text-xs text-[#E09F3E] font-bold uppercase mt-1">{item.variant}</p>
                                )}
                            </div>
                            <div className="text-right">
                                {/* FIX: Calculate Total Price for this line item */}
                                <p className="font-bold text-[#02303A]">
                                  R {(parsePrice(item.price) * item.quantity).toFixed(2)}
                                </p>
                                {/* FIX: Show unit price */}
                                <p className="text-xs text-[#02303A]/60">
                                  {item.price} each
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-[#02303A]/10 pt-6 space-y-3">
                    <div className="flex justify-between text-sm text-[#02303A]/70">
                        <span>Subtotal</span>
                        <span>R {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#02303A]/70">
                        <span>Shipping</span>
                        <span className="text-[#E09F3E] font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-[#02303A] pt-3 border-t border-[#02303A]/10">
                        <span>Total</span>
                        <span>R {cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </main>
  );
}