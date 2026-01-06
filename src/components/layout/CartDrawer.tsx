// src/components/layout/CartDrawer.tsx
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // <--- 1. Import Link
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop (Dark overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#F9F7F2] z-[70] shadow-2xl flex flex-col border-l border-[#02303A]/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#02303A]/10 flex justify-between items-center bg-white">
              <h2 className="text-2xl font-serif text-[#02303A] flex items-center gap-2">
                <ShoppingBag className="text-[#E09F3E]" /> Your Basket
              </h2>
              <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} className="text-[#02303A]" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                  <ShoppingBag size={48} className="mb-4 text-[#E09F3E]" />
                  <p className="text-lg">Your basket is empty.</p>
                  <button onClick={toggleCart} className="mt-4 font-bold underline">Start Shopping</button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Image */}
                    <div className="relative w-20 h-20 bg-white rounded-lg border border-[#02303A]/5 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-contain p-1" 
                      />
                    </div>
                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-[#02303A] line-clamp-1">{item.name}</h4>
                        <p className="text-sm text-[#02303A]/60">{item.price}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                         <span className="text-xs font-bold bg-[#02303A]/5 px-2 py-1 rounded text-[#02303A]">
                           Qty: {item.quantity}
                         </span>
                         <button 
                           type="button"
                           title="Remove item from cart"
                           onClick={() => removeFromCart(item.id)}
                           className="text-red-400 hover:text-red-600 transition-colors"
                         >
                           <Trash2 size={16} />
                         </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-[#02303A]/10 space-y-4">
                <div className="flex justify-between text-xl font-bold text-[#02303A]">
                  <span>Total</span>
                  <span>R {cartTotal.toFixed(2)}</span>
                </div>
                
                {/* --- 2. UPDATED CHECKOUT BUTTON --- */}
                <Link 
                   href="/checkout"
                   onClick={toggleCart} // Close the drawer when clicked
                   className="w-full py-4 bg-[#02303A] text-[#F9F7F2] rounded-xl font-bold hover:bg-[#02303A]/90 transition-all flex justify-between items-center px-6 group"
                >
                  <span>Checkout</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* ---------------------------------- */}
                
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;