// src/components/features/ProductSlider.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { products } from '@/lib/productsData';

const ProductSlider = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#02303A] mb-4">
            Fresh from the Roastery
          </h2>
          <p className="text-[#02303A]/70">
            Handpicked favorites, roasted to perfection right here in Durban.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: product.id * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-[#F9F7F2] rounded-2xl overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Tags (Top Left) */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-[#02303A]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 'Quick Add' Button (Appears on Hover) */}
                <button
                  type="button"
                  title={`Quick add ${product.name}`}
                  aria-label={`Quick add ${product.name}`}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-[#02303A] text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                >
                  <span className="sr-only">Quick add {product.name}</span>
                  <Plus size={20} />
                </button>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-xl font-serif text-[#02303A]">{product.name}</h3>
                <p className="text-[#E09F3E] font-medium mt-1">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSlider;