// src/components/features/ProductSlider.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import { useCart } from '@/context/CartContext';

const ProductSlider = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();
  const supabase = createClient();

  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch 4 items to display on the home page
      const { data } = await supabase
        .from('products')
        .select('*')
        .limit(4)
        .order('id', { ascending: true }); // Or use .order('created_at') if you have that
      
      if (data) setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // Stop the click from taking us to the product page
    e.stopPropagation();

    // 1. Determine Default Weight (First option)
    // If weight is "250g / 1kg", we pick "250g"
    let defaultWeight = product.weight;
    if (product.weight && product.weight.includes('/')) {
        defaultWeight = product.weight.split('/')[0].trim();
    }

    // 2. Determine Base Price
    // We clean the string "R 145.00" -> 145.00
    const priceNum = parseFloat(product.price.replace(/[^0-9.]/g, ''));
    const priceStr = `R ${priceNum.toFixed(2)}`;

    // 3. Add to Cart with the default (smaller) size
    addToCart({
        ...product,
        id: `${product.id}-${defaultWeight}`,
        name: `${product.name} (${defaultWeight})`,
        price: priceStr,
        variant: defaultWeight
    });
  };

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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Link Wrapper */}
              <Link href={`/shop/${product.id}`} className="block">
                
                {/* Image Container */}
                <div className="relative aspect-square bg-[#F9F7F2] rounded-2xl overflow-hidden mb-4">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-[#02303A] shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* 'Quick Add' Button */}
                  <button
                    type="button"
                    onClick={(e) => handleQuickAdd(e, product)}
                    title={`Quick add ${product.name}`}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-[#02303A] text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-[#E09F3E]"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-xl font-serif text-[#02303A] group-hover:text-[#E09F3E] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                     <p className="text-[#02303A]/60 font-medium text-sm">
                        {product.price}
                     </p>
                     {/* Visual Indicator of weight options */}
                     <span className="text-[10px] text-[#02303A]/40 font-bold uppercase bg-[#02303A]/5 px-1.5 py-0.5 rounded">
                        {product.weight}
                     </span>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
            <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#02303A] text-[#02303A] font-bold rounded-full hover:bg-[#02303A] hover:text-white transition-all">
                View All Coffees <ShoppingBag size={18} />
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductSlider;