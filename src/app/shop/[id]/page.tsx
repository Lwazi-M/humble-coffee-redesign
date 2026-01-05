// src/app/shop/[id]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { id } = useParams(); // Get the ID from the URL (e.g., 5)
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      // Fetch only the ONE product that matches the ID
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single(); // .single() tells Supabase we expect only one result

      if (error) {
        console.error('Error fetching product:', error);
      } else {
        setProduct(data);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center text-[#02303A]/50 animate-pulse">
        Loading fresh beans...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center text-[#02303A]">
        <h2 className="text-3xl font-serif mb-4">Product Not Found</h2>
        <Link href="/shop" className="underline hover:text-[#E09F3E]">Back to Shop</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Breadcrumb / Back */}
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-[#02303A]/60 hover:text-[#E09F3E] transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-12 border border-[#02303A]/5 shadow-sm relative overflow-hidden"
          >
             <Image 
               src={product.image}
               alt={product.name}
               width={600}
               height={600}
               className="object-contain w-full h-auto drop-shadow-xl"
               priority
             />
             {product.name.includes("Festive") && (
                <div className="absolute top-6 left-6 bg-[#E09F3E] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                  Limited Edition
                </div>
             )}
          </motion.div>

          {/* RIGHT: Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="mb-2">
               <span className="text-[#E09F3E] font-bold tracking-widest uppercase text-sm">
                 {product.category}
               </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-[#02303A] mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-[#02303A] mb-8">
              {product.price}
            </p>

            <div className="prose text-[#02303A]/80 mb-8 text-lg leading-relaxed">
              {product.desc}
            </div>

            {/* Product Meta (Weight, etc) */}
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-white p-4 rounded-xl border border-[#02303A]/5">
                  <span className="block text-xs text-[#02303A]/40 font-bold uppercase mb-1">Weight / Size</span>
                  <span className="text-[#02303A] font-medium">{product.weight}</span>
               </div>
               <div className="bg-white p-4 rounded-xl border border-[#02303A]/5">
                  <span className="block text-xs text-[#02303A]/40 font-bold uppercase mb-1">Availability</span>
                  <span className="text-green-600 font-medium flex items-center gap-1">
                    In Stock
                  </span>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={() => addToCart(product)}
                className="w-full py-4 bg-[#02303A] text-[#F9F7F2] rounded-xl font-bold text-lg hover:bg-[#02303A]/90 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <ShoppingBag /> Add to Cart
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-[#02303A]/10 grid grid-cols-2 gap-4 text-sm text-[#02303A]/60">
               <div className="flex items-center gap-2">
                 <Truck size={18} /> Fast Delivery in Durban
               </div>
               <div className="flex items-center gap-2">
                 <ShieldCheck size={18} /> Secure Checkout
               </div>
            </div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}