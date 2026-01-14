// src/app/shop/[id]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck, Gift } from 'lucide-react'; // Added Gift Icon
import { createClient } from '@/utils/supabase/client';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { id } = useParams(); 
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  
  // Renamed from 'selectedWeight' to 'selectedVariant' to cover both Weight (Coffee) and Amount (Gift Card)
  const [selectedVariant, setSelectedVariant] = useState<string>(""); 
  const [currentPrice, setCurrentPrice] = useState<string>("");

  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setIsLoading(true);

      const { data: mainProduct, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setProduct(mainProduct);

        // Init Variant
        if (mainProduct.weight && mainProduct.weight.includes('/')) {
            const firstOption = mainProduct.weight.split('/')[0].trim();
            setSelectedVariant(firstOption);
        } else {
            setSelectedVariant(mainProduct.weight);
        }
        
        // Init Price
        setCurrentPrice(mainProduct.price.replace("From ", ""));

        // Fetch Related
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

  // --- UPDATED PRICING LOGIC ---
  const handleVariantSelect = (variant: string) => {
    setSelectedVariant(variant);
    
    // Get the base price
    const basePrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
    let newPrice = basePrice;
    
    const name = product.name || "";

    // 1. GIFT CARD LOGIC
    if (name.includes("Gift Card")) {
        // The variant IS the price (e.g. "R250" -> 250)
        newPrice = parseFloat(variant.replace(/[^0-9.]/g, ''));
    }
    // 2. COFFEE WEIGHT LOGIC
    else if (variant.includes("1kg")) {
        // Specific prices for 1kg bags based on your menu
        if (name.includes("House Espresso") || name.includes("Love")) {
            newPrice = 420.00;
        } else if (name.includes("Decaf")) {
            newPrice = 495.00;
        } else if (name.includes("Vunga")) {
            newPrice = 710.00;
        } else if (name.includes("Hondurita") || name.includes("Las Nubes")) {
            newPrice = 770.00;
        } else if (name.includes("Muki")) {
            newPrice = 850.00;
        } else {
            // Default multiplier if we add new coffees later
            newPrice = basePrice * 3.75; 
        }
    } else if (variant.includes("50's")) {
        // Pods logic
        newPrice = 500.00; 
    }
    
    setCurrentPrice(`R ${newPrice.toFixed(2)}`);
  };

  const handleAddToCart = () => {
    addToCart({
        ...product,
        id: `${product.id}-${selectedVariant}`, 
        name: `${product.name} (${selectedVariant})`,
        price: currentPrice,
        variant: selectedVariant
    });
  };

  if (isLoading) return <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center animate-pulse text-[#02303A]">Loading...</div>;
  if (!product) return <div>Not Found</div>;

  const variantOptions = product.weight.includes('/') 
    ? product.weight.split('/').map((s: string) => s.trim())
    : [product.weight];

  const isGiftCard = product.name.includes("Gift Card");

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link href="/shop" className="inline-flex items-center gap-2 text-[#02303A]/60 hover:text-[#E09F3E] mb-8 font-medium">
          <ArrowLeft size={20} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl p-12 border border-[#02303A]/5 shadow-sm relative">
             <Image src={product.image} alt={product.name} width={600} height={600} className="object-contain w-full h-auto" priority />
             {product.name.includes("Festive") && <div className="absolute top-6 left-6 bg-[#E09F3E] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">Limited Edition</div>}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col h-full">
            <span className="text-[#E09F3E] font-bold tracking-widest uppercase text-sm mb-2">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#02303A] mb-4 leading-tight">{product.name}</h1>
            <p className="text-3xl font-bold text-[#02303A] mb-8">{currentPrice}</p>

            {/* DESCRIPTION: Preserves new lines for Grind Options etc */}
            <div className="prose text-[#02303A]/80 mb-8 text-lg leading-relaxed whitespace-pre-wrap font-sans">
              {product.desc}
            </div>

            {/* Variant (Size/Amount) Buttons */}
            <div className="mb-8">
                <label className="block text-xs text-[#02303A]/40 font-bold uppercase mb-3">
                   {isGiftCard ? "Choose Amount" : "Choose Size"}
                </label>
                <div className="flex gap-3 flex-wrap">
                    {variantOptions.map((option: string) => (
                        <button
                            key={option}
                            onClick={() => handleVariantSelect(option)}
                            className={`px-6 py-3 rounded-xl font-bold border-2 transition-all ${selectedVariant === option ? "border-[#02303A] bg-[#02303A] text-white" : "border-[#02303A]/10 bg-white text-[#02303A] hover:border-[#02303A]/30"}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-8">
               <span className="text-green-600 font-medium flex items-center gap-1 text-sm">In Stock</span>
            </div>

            <button onClick={handleAddToCart} className="w-full py-4 bg-[#02303A] text-[#F9F7F2] rounded-xl font-bold text-lg hover:bg-[#02303A]/90 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
                {isGiftCard ? <Gift /> : <ShoppingBag />}
                {isGiftCard ? "Add Gift Card" : "Add to Cart"}
            </button>
            
            {!isGiftCard && (
                <div className="mt-8 pt-8 border-t border-[#02303A]/10 grid grid-cols-2 gap-4 text-sm text-[#02303A]/60">
                   <div className="flex items-center gap-2"><Truck size={18} /> Fast Delivery</div>
                   <div className="flex items-center gap-2"><ShieldCheck size={18} /> Secure Checkout</div>
                </div>
            )}

          </motion.div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#02303A]/10 pt-16">
            <h3 className="text-3xl font-serif text-[#02303A] mb-8 text-center">You might also like</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/shop/${item.id}`} className="group">
                  <div className="bg-white rounded-2xl p-6 border border-[#02303A]/5 hover:shadow-lg h-full flex flex-col">
                    <div className="relative h-48 mb-4 bg-[#F4F4F4] rounded-xl flex items-center justify-center overflow-hidden">
                       <Image src={item.image} alt={item.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform" />
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