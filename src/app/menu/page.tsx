// src/app/menu/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Wheat, Utensils, Star, Download } from 'lucide-react'; // Added Download icon

// --- MENU DATA ---
const brunch = [
  { name: "Berry Porridge (VE)", price: "R88", desc: "Caramelized banana, stewed blueberries, tahini nut crumble." },
  { name: "Eggs on Toast", price: "R58", desc: "Soft scrambled, poached, or sunnyside on sourdough. (Add Salmon +R40)" },
  { name: "House Granola", price: "R88", desc: "Homemade granola, Greek yoghurt, berries, lemon curd, honey." },
  { name: "Avo on Toast (VE)", price: "R92", desc: "Smashed avo, chilli oil, nut & seed sprinkle on sourdough." },
  { name: "Hummus on Toast", price: "R98", desc: "Hummus, sliced avo, feta, dukkah on sourdough." },
  { name: "Lox", price: "R105", desc: "Cream cheese, smoked salmon, red onion, capers on bagel/toast." },
  { name: "Pancake Stack", price: "R105", desc: "Blueberry flapjacks, coconut cream, fresh berries, maple syrup." },
  { name: "French Toast", price: "R112", desc: "Challah bread, mascarpone cream, berries, lemon curd, tahini crumble." },
  { name: "Turkish Eggs", price: "R105", desc: "Whipped feta, 2 poached eggs, chilli oil, nut sprinkle, sourdough." },
  { name: "Brioche Benedict", price: "R105", desc: "Sauteed spinach, poached eggs, hollandaise, chives. (Add Salmon +R40)" },
];

const toasties = [
  { name: "Grilled Cheese", price: "R76", desc: "3 cheese blend on white sourdough. (Add Tomato +R8)" },
  { name: "Green Chilli & Mango", price: "R82", desc: "Mature cheddar, red onion, mango atchar, pickled jalapeno." },
  { name: "Caprese Toastie", price: "R86", desc: "Basil pesto, bocconcini mozzarella, balsamic roast tomato." },
  { name: "Tuna Melt", price: "R92", desc: "Tuna mayo, caramelized onion, mature cheddar, rocket." },
  { name: "Breakfast Burrito", price: "R98", desc: "Scrambled egg, cheddar, mushrooms, baby spinach, avo in tortilla." },
  { name: "Falafel Gyro (VE)", price: "R98", desc: "Falafel, hummus, cucumber, tomato, chilli oil, tahini dressing." },
];

const bowls = [
  { name: "Nacho Salad Bowl (GF)", price: "R105", desc: "Spinach, avo, lime crema, nachos, chipotle beans, cheddar." },
  { name: "Salmon Poke Bowl (GF)", price: "R105", desc: "Smoked salmon, avo, pickled cabbage, brown rice, sriracha mayo." },
  { name: "Falafel Bowl (VE)", price: "R105", desc: "Hummus, falafel, roasted brinjal, tabouleh, green tahini sauce." },
];

const hotDrinks = [
  { name: "Espresso", price: "R26", desc: "" },
  { name: "Cortado", price: "R34", desc: "" },
  { name: "Flat White", price: "R38", desc: "" },
  { name: "Cappuccino", price: "R36", desc: "Standard / Large (R40)" },
  { name: "Latte", price: "R38", desc: "" },
  { name: "Matcha Latte", price: "R42", desc: "Exceptional grade pure matcha." },
  { name: "Red Cappuccino", price: "R36", desc: "Rooibos tea cappuccino." },
  { name: "Chai Latte", price: "R36", desc: "Spiced chai blend." },
  { name: "Hot Chocolate", price: "R36", desc: "Decadent chocolate." },
  { name: "Golden Spiced Latte", price: "R38", desc: "Turmeric, cinnamon & ginger." },
];

const coldDrinks = [
  { name: "Iced Flat White", price: "R38", desc: "Double espresso, milk, ice, choc sprinkle." },
  { name: "Coffee Freezo", price: "R44", desc: "Single espresso, milk & crushed ice." },
  { name: "Iced Matcha", price: "R48", desc: "Pure matcha, vanilla syrup, milk over ice." },
  { name: "Berry Crush (VE)", price: "R38", desc: "Cloudy lemon, blueberry & blackcurrant crushed ice." },
  { name: "Floo Juice", price: "R52", desc: "Carrot, orange, apple, ginger." },
  { name: "Green Detox", price: "R52", desc: "Spinach, cucumber, apple, lemon, ginger." },
  { name: "Nutty Date Smoothie", price: "R65", desc: "Banana, peanut butter, dates, macmilk." },
];

// --- COMPONENT ---
const MenuSection = ({ title, icon: Icon, items }: { title: string, icon: any, items: any[] }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-[#E09F3E]/20 rounded-full text-[#02303A]">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-serif text-[#02303A]">{title}</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="pb-4 border-b border-[#02303A]/10 group">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-[#02303A] text-lg group-hover:text-[#E09F3E] transition-colors">{item.name}</h3>
            <span className="font-serif font-bold text-[#02303A]">{item.price}</span>
          </div>
          {item.desc && <p className="text-sm text-[#02303A]/70 leading-relaxed">{item.desc}</p>}
        </div>
      ))}
    </div>
  </div>
);

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-24">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif text-[#02303A] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#E09F3E] italic">Menu.</span>
        </motion.h1>
        <p className="text-[#02303A]/70 max-w-xl mx-auto mb-8">
          (VE) Vegan • (GF) Gluten Free<br/>
          Please inform us of any allergies. No menu alterations during busy times.
        </p>

        {/* --- DOWNLOAD BUTTON --- */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
        >
            <a 
                href="/assets/Menu.pdf" // Make sure file is named 'menu.pdf' in public/assets/
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#02303A] rounded-full text-[#02303A] font-bold hover:bg-[#02303A] hover:text-[#F9F7F2] transition-all"
            >
                <Download size={20} />
                Download PDF Menu
            </a>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* FOOD SECTIONS */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4, duration: 0.8 }}
        >
            <MenuSection title="All Day Brunch" icon={Wheat} items={brunch} />
            <MenuSection title="Toasties, Wraps & Bagels" icon={Utensils} items={toasties} />
            <MenuSection title="Fresh Bowls" icon={Star} items={bowls} />
        </motion.div>

        {/* DRINK SECTIONS */}
        <motion.div
           className="mt-16 pt-16 border-t-2 border-[#02303A]/10"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6, duration: 0.8 }}
        >
            <MenuSection title="Hot Drinks" icon={Coffee} items={hotDrinks} />
            <MenuSection title="Cold & Fresh" icon={Star} items={coldDrinks} />
        </motion.div>

        {/* FOOTER NOTE */}
        <div className="mt-20 p-8 bg-[#02303A] text-[#F9F7F2] rounded-3xl text-center">
            <h3 className="text-2xl font-serif mb-4">Humble Suppliers</h3>
            <p className="opacity-80 max-w-2xl mx-auto leading-relaxed">
                Not everything is made in-house—some things are best left to our friends.
                We proudly support <strong>Midlands Eggs</strong> (Free Range), <strong>The Glenwood Bakery</strong> (Sourdough),
                and <strong>Bushhill Cheese</strong>.
            </p>
            <p className="mt-4 text-sm opacity-60">
                Our menu contains no meat, gelatine, alcohol, or animal rennets.
            </p>
        </div>

      </div>
    </main>
  );
}