// src/app/shop/page.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';

// --- REAL PRODUCT DATA ---
const products = [
  // --- COFFEE: BLENDS ---
  {
    id: 1,
    name: "House Espresso",
    category: "Coffee",
    price: "From R 145.00",
    weight: "250g / 1kg",
    image: "/assets/products/house-espresso.png", 
    desc: "Caramel | Citrus | Full Bodied. Our signature blend featuring Tanzania, Brazil, and Nicaragua."
  },
  {
    id: 2,
    name: "Love Blend",
    category: "Coffee",
    price: "From R 145.00",
    weight: "250g / 1kg",
    image: "/assets/products/love-blend.png",
    desc: "Peach | Toffee | Sweet and Juicy. A lighter, fruitier roast designed for filter and plunger moments."
  },
  {
    id: 3,
    name: "Festive Blend '25",
    category: "Coffee",
    price: "R 195.00",
    weight: "250g",
    image: "/assets/products/festive-blend.png",
    desc: "Cherry | Dark Chocolate | Mango. A celebratory roast with rich, deep flavours."
  },
  
  // --- COFFEE: PODS & INSTANT ---
  {
    id: 4,
    name: "Humble Pods",
    category: "Coffee",
    price: "From R 110.00",
    weight: "10pk / 50pk",
    image: "/assets/products/humble-pods.png",
    desc: "Nespresso® Compatible. Our House Espresso Blend at the touch of a button."
  },
  {
    id: 11,
    name: "Humble in a Bag",
    category: "Coffee",
    price: "R 15.00",
    weight: "1 Sachet",
    image: "/assets/products/humble-bag.png",
    desc: "Love Blend. No equipment needed! Just add hot water. Perfect for travel."
  },

  // --- COFFEE: SINGLE ORIGINS ---
  {
    id: 5,
    name: "La Hondurita (El Salvador)",
    category: "Coffee",
    price: "From R 205.00",
    weight: "250g",
    image: "/assets/products/la-hondurita.png",
    desc: "Bright Red Apple | Tropical Citrus. A vibrant single origin for the adventurous palate."
  },
  {
    id: 6,
    name: "Vunga (Rwanda)",
    category: "Coffee",
    price: "From R 190.00",
    weight: "250g",
    image: "/assets/products/vunga-rwanda.png",
    desc: "Juicy Blueberries & Apricot. A clean, fruity coffee processed with precision."
  },
  {
    id: 7,
    name: "Muki Fruity (Uganda)",
    category: "Coffee",
    price: "From R 225.00",
    weight: "250g",
    image: "/assets/products/muki-fruity.png",
    desc: "Cherry | Dates | Sweet Caramel. A complex and sweet cup from the slopes of Uganda."
  },
  {
    id: 8,
    name: "Las Nubes (Nicaragua)",
    category: "Coffee",
    price: "From R 205.00",
    weight: "250g",
    image: "/assets/products/las-nubes.png",
    desc: "Cocoa Truffle | Hazelnut Praline | Pear Compote. A dessert-like coffee with a rich mouthfeel."
  },
  {
    id: 9,
    name: "Decaf (Colombia)",
    category: "Coffee",
    price: "From R 165.00",
    weight: "250g",
    image: "/assets/products/decaf-colombia.png",
    desc: "Cranberry | Nougat | Caramel. Sugar cane decaffeination process retaining all the flavour."
  },

  // --- MERCHANDISE ---
  {
    id: 10,
    name: "Humble Tote Bag",
    category: "Merch",
    price: "R 100.00",
    weight: "One Size",
    image: "/assets/products/humble-tote.png", 
    desc: "Carry your beans in style. Durable, eco-friendly cotton canvas."
  },
  {
    id: 12,
    name: "Humble Cap",
    category: "Merch",
    price: "R 250.00",
    weight: "Adjustable",
    image: "/assets/products/humble-cap.png",
    desc: "Be Nice. Embroidered dad caps available in faded black, olive, and mustard."
  },
  {
    id: 13,
    name: "Re-usable Humble Cup",
    category: "Merch",
    price: "R 180.00",
    weight: "350ml",
    image: "/assets/products/humble-cup.png",
    desc: "Save the planet one cup at a time. Double-walled to keep your flat white hot."
  },
  {
    id: 14,
    name: "Humble Gift Card",
    category: "Merch",
    price: "From R 25.00",
    weight: "Digital",
    image: "/assets/products/gift-card.png",
    desc: "The gift of choice. Virtual gift cards delivered by email with no processing fees."
  },

  // --- PANTRY ---
  {
    id: 15,
    name: "Milklab Almond",
    category: "Pantry",
    price: "R 60.00",
    weight: "1 Litre",
    image: "/assets/products/milklab.png",
    desc: "Trusted by baristas globally. Textures beautifully and doesn't distract from the espresso."
  }
];

const categories = ["All", "Coffee", "Merch", "Pantry"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

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
                {/* Image Area */}
                <div className="relative h-72 bg-[#F4F4F4] p-6 flex items-center justify-center overflow-hidden">
                   {/* Fallback Image Logic if you haven't saved them yet */}
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

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#02303A] leading-tight">{product.name}</h3>
                    <span className="text-[#E09F3E] font-serif font-bold text-lg whitespace-nowrap ml-2">{product.price}</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#02303A]/50 mb-4">{product.weight}</p>
                  
                  <p className="text-[#02303A]/80 text-sm leading-relaxed mb-6 flex-grow">
                    {product.desc}
                  </p>

                  <button 
                    className="w-full py-3 bg-[#F9F7F2] border-2 border-[#02303A] text-[#02303A] font-bold rounded-xl hover:bg-[#02303A] hover:text-[#F9F7F2] transition-colors flex items-center justify-center gap-2"
                    onClick={() => alert(`Added ${product.name} to cart!`)}
                  >
                    <ShoppingBag size={18} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </main>
  );
}