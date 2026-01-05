// src/app/shop/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // <--- Added Link import
import { createClient } from '@/utils/supabase/client';
import { useCart } from '@/context/CartContext';

const categories = ["All", "Coffee", "Merch", "Pantry"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart } = useCart();
  const supabase = createClient();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        // Sort by id so they don't jump around
        const sortedData = (data || []).sort((a, b) => a.id - b.id);
        setProducts(sortedData);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-24">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif text-[#02303A] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bring Humble <span className="text-[#E09F3E] italic">Home.</span>
        </motion.h1>
        <p className="text-[#02303A]/70 max-w-xl mx-auto text-lg mb-8">
          Freshly roasted beans, ethical sourcing, and pantry essentials delivered to your door.
        </p>

        {/* --- FILTERS --- */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-[#02303A] text-[#F9F7F2]" 
                  : "bg-white text-[#02303A] border border-[#02303A]/10 hover:border-[#02303A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="container mx-auto px-6 max-w-6xl">
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64 text-[#02303A]/50 animate-pulse">
             Loading products from cloud...
          </div>
        ) : (
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-[#02303A]/5 shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
                >
                  
                  {/* Image Area - LINKED */}
                  <Link href={`/shop/${product.id}`} className="cursor-pointer block">
                    <div className="relative h-72 bg-[#F4F4F4] p-6 flex items-center justify-center overflow-hidden">
                        <Image 
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                        />
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#02303A] shadow-sm">
                          {product.category}
                        </div>
                        {product.name.includes("Festive") && (
                            <div className="absolute top-4 left-4 bg-[#E09F3E] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                              Limited
                            </div>
                        )}
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    
                    {/* Header - LINKED */}
                    <Link href={`/shop/${product.id}`} className="cursor-pointer block group-hover:underline">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-[#02303A] leading-tight">{product.name}</h3>
                        <span className="text-[#E09F3E] font-serif font-bold text-lg whitespace-nowrap ml-2">{product.price}</span>
                      </div>
                    </Link>

                    <p className="text-xs font-bold uppercase tracking-wider text-[#02303A]/50 mb-4">{product.weight}</p>
                    
                    <p className="text-[#02303A]/80 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {product.desc}
                    </p>

                    <button 
                      className="w-full py-3 bg-[#F9F7F2] border-2 border-[#02303A] text-[#02303A] font-bold rounded-xl hover:bg-[#02303A] hover:text-[#F9F7F2] transition-colors flex items-center justify-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop click from bubbling to the Link
                        addToCart(product);
                      }}
                    >
                      <ShoppingBag size={18} /> Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

    </main>
  );
}