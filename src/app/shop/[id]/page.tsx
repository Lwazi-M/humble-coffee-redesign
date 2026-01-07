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
  const { id } = useParams(); 
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  
  // NEW: State for variants (Weight & Dynamic Price)
  const [selectedWeight, setSelectedWeight] = useState<string>(""); 
  const [currentPrice, setCurrentPrice] = useState<string>("");

  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      setIsLoading(true);

      // 1. Fetch MAIN Product
      const { data: mainProduct, error: mainError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (mainError) {
        console.error('Error fetching product:', mainError);
      } else {
        setProduct(mainProduct);

        // --- INIT WEIGHT & PRICE ---
        // If weight has a slash (e.g. "250g / 1kg"), pick the first one
        if (mainProduct.weight && mainProduct.weight.includes('/')) {
            const firstOption = mainProduct.weight.split('/')[0].trim();
            setSelectedWeight(firstOption);
        } else {
            setSelectedWeight(mainProduct.weight);
        }
        
        // Set initial price (remove "From " if it exists so it looks clean)
        setCurrentPrice(mainProduct.price.replace("From ", ""));

        // 2. Fetch RELATED Products
        const { data: relatedData } = await supabase
            .from('products')
            .select('*')
            .neq('id', id)
            .limit(3);
        
        setRelatedProducts(relatedData || []);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  // --- PRICING LOGIC ---
  const handleWeightSelect = (weight: string) => {
    setSelectedWeight(weight);
    
    // Parse the base price (remove 'R' and spaces to get the number)
    const basePrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
    
    // Logic: If they pick 1kg, multiply price by 3.5. If 50pk, multiply by 4.5
    let newPrice = basePrice;
    
    if (weight.includes("1kg")) {
        newPrice = basePrice * 3.5;
    } else if (weight.includes("50pk")) {
        newPrice = basePrice * 4.5;
    }
    
    setCurrentPrice(`R ${newPrice.toFixed(2)}`);
  };

  // --- ADD TO CART LOGIC ---
  const handleAddToCart = () => {
    addToCart({
        ...product,
        // Create a unique ID so "250g" and "1kg" don't merge in the cart
        id: `${product.id}-${selectedWeight}`, 
        name: `${product.name} (${selectedWeight})`,
        price: currentPrice,
        variant: selectedWeight
    });
  };

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

  // Split options (e.g. ["250g", "1kg"])
  const weightOptions = product.weight.includes('/') 
    ? product.weight.split('/').map((s: string) => s.trim())
    : [product.weight];

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Breadcrumb */}
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-[#02303A]/60 hover:text-[#E09F3E] transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Back to Shop
        </Link>

        {/* --- MAIN PRODUCT AREA --- */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
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

            {/* DYNAMIC PRICE DISPLAY */}
            <p className="text-3xl font-bold text-[#02303A] mb-8 transition-all duration-300">
              {currentPrice}
            </p>

            <div className="prose text-[#02303A]/80 mb-8 text-lg leading-relaxed">
              {product.desc}
            </div>

            {/* WEIGHT SELECTOR */}
            <div className="mb-8">
                <label className="block text-xs text-[#02303A]/40 font-bold uppercase mb-3">Choose Size</label>
                <div className="flex gap-3 flex-wrap">
                    {weightOptions.map((option: string) => (
                        <button
                            key={option}
                            onClick={() => handleWeightSelect(option)}
                            className={`px-6 py-3 rounded-xl font-bold border-2 transition-all ${
                                selectedWeight === option 
                                ? "border-[#02303A] bg-[#02303A] text-white" 
                                : "border-[#02303A]/10 bg-white text-[#02303A] hover:border-[#02303A]/30"
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {/* Availability */}
            <div className="mb-8">
               <span className="text-green-600 font-medium flex items-center gap-1 text-sm">
                 In Stock
               </span>
            </div>

            <button 
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#02303A] text-[#F9F7F2] rounded-xl font-bold text-lg hover:bg-[#02303A]/90 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <ShoppingBag /> Add to Cart
            </button>

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

        {/* --- RELATED PRODUCTS SECTION --- */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#02303A]/10 pt-16">
            <h3 className="text-3xl font-serif text-[#02303A] mb-8 text-center">You might also like</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/shop/${item.id}`} className="group">
                  <div className="bg-white rounded-2xl p-6 border border-[#02303A]/5 hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative h-48 mb-4 bg-[#F4F4F4] rounded-xl flex items-center justify-center overflow-hidden">
                       <Image 
                         src={item.image} 
                         alt={item.name} 
                         fill 
                         className="object-contain p-4 group-hover:scale-105 transition-transform" 
                       />
                    </div>
                    <h4 className="font-bold text-[#02303A] text-lg mb-1">{item.name}</h4>
                    <p className="text-[#E09F3E] font-serif font-bold">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}