// src/app/menu/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Wheat, Utensils, Star, Download, IceCream, GlassWater, Baby, PlusCircle } from 'lucide-react';

// --- MENU DATA ---

const breakfast = [
  { 
    name: "Berry Porridge (VE)", 
    price: "R88", 
    desc: "With caramelized banana, stewed blueberries, tahini nut crumble." 
  },
  { 
    name: "House Granola", 
    price: "R88", 
    desc: "Homemade granola, Greek yoghurt, berries, lemon curd, honey." 
  },
  { 
    name: "Overnight Oats (VE)", 
    price: "R88", 
    desc: "Chocolate peanut butter oats, berry compote, banana, strawberries, toasted almonds, syrup." 
  },
  { 
    name: "Filled Bagels - Plain", 
    price: "R36", 
    desc: "Build your own. Peanut butter +12 | Banana +12 | Cream cheese +25 | Cucumber +12 | Scrambled egg +18 | Avocado +18." 
  },
  { 
    name: "Filled Bagels - Lox", 
    price: "R105", 
    desc: "Cream cheese, smoked salmon, red onion, capers." 
  },
  { 
    name: "Babaganoush (VE)", 
    price: "R80", 
    desc: "Roasted brinjal, sundried tomato, babaganoush." 
  },
  { 
    name: "Smash (VE)", 
    price: "R92", 
    desc: "Hummus, smashed avocado, pickled red onion, tomato, sweet chilli, dukkah, rocket." 
  },
];

const brunch = [
  { 
    name: "Eggs on Toast", 
    price: "R58", 
    desc: "Soft scrambled or 2 poached or 2 sunnyside eggs, micro herbs on sourdough. Smoked salmon +40 | Mushrooms +18 | Sliced avo +18." 
  },
  { 
    name: "White Bean Toast (VE)", 
    price: "R58", 
    desc: "Herby cannellini beans, sauteed leeks, garlic, lemon, chives on a piece of white sourdough. Poached egg +8." 
  },
  { 
    name: "Avo on Toast (VE)", 
    price: "R92", 
    desc: "Smashed avo, chilli oil, nut & seed sprinkle, on sourdough. Poached egg +8 | Smoked salmon +40 | Crispy halloumi +22." 
  },
  { 
    name: "Hummus on Toast", 
    price: "R98", 
    desc: "Hummus, sliced avocado, micro herbs, feta, nuts & seed sprinkle on sourdough." 
  },
  { 
    name: "Pancake Stack (VE)", 
    price: "R105", 
    desc: "Blueberry flapjacks, coconut cream, fresh berries, compote, granola sprinkle, maple syrup. Half portion R60." 
  },
  { 
    name: "French Toast", 
    price: "R112", 
    desc: "Challah bread, mascarpone cream, berries, lemon curd, tahini nut crumble, honey. Half portion R65." 
  },
  { 
    name: "Zucchini Fritters (GF & Low Carb)", 
    price: "R96", 
    desc: "4 fritters, herby sauce, poached egg on a bed of dressed rocket." 
  },
  { 
    name: "Turkish Eggs", 
    price: "R105", 
    desc: "Our take on this classic, whipped feta, 2 poached eggs, sauteed baby spinach, herby mushrooms, chili oil, nut sprinkle. Served with buttered sourdough." 
  },
  { 
    name: "Balsamic Tomatoes", 
    price: "R105", 
    desc: "Slow roasted tomatoes, avocado, 1 poached egg, feta & dukkah on a bed of hummus. Served with buttered sourdough." 
  },
  { 
    name: "Power Bowl (GF)", 
    price: "R105", 
    desc: "Sliced Avo, 3 soft scrambled eggs, smoked salmon, nut sprinkle, micro-herbs. Mushrooms +18 | Buttered sourdough +12." 
  },
  { 
    name: "Brioche Benedict (Weekend Special)", 
    price: "R82", 
    desc: "2 brioche slices, sauteed baby spinach, poached eggs, hollandaise, chives. Smoked salmon +40 | Sliced Avocado +18. Half portion R45." 
  },
];

const toasties = [
  { 
    name: "Breakfast Burrito", 
    price: "R98", 
    desc: "Scrambled egg, cheddar, mushrooms, baby spinach, avocado in a tortilla wrap." 
  },
  { 
    name: "Falafel Gyro (VE)", 
    price: "R98", 
    desc: "3 Falafel balls, hummus, leaves, cucumber, tomato, red onion, chilli oil, handcut chips, tahini dressing wrapped in a pita." 
  },
  { 
    name: "Spicy Bean Wrap", 
    price: "R98", 
    desc: "Chipotle beans, red onion, brown rice, roast peppers, jalapenos, avo, cheddar. Vegan option available." 
  },
  { 
    name: "Grilled Cheese Toastie", 
    price: "R78", 
    desc: "3 cheese blend on white sourdough. Add tomato +8 | Vegan option available." 
  },
  { 
    name: "Green Chilli & Mango Toastie", 
    price: "R82", 
    desc: "Mature cheddar, red onion, mango atchar, pickled jalapeno. Vegan option available." 
  },
  { 
    name: "The Vegan Toastie (VE)", 
    price: "R84", 
    desc: "Avocado, roasted peppers & sundried tomato pesto." 
  },
  { 
    name: "Caprese Toastie", 
    price: "R86", 
    desc: "Basil pesto, bocconcini mozzarella, balsamic roast tomato & baby spinach." 
  },
  { 
    name: "Tuna Melt Toastie", 
    price: "R92", 
    desc: "Tuna mayo, caramelized onion, mature cheddar & dressed rocket." 
  },
];

const salads = [
  { 
    name: "Nacho Salad Bowl (GF)", 
    price: "R105", 
    desc: "Baby spinach, rocket, avocado, lime crema, nacho chips, chipotle beans, cheddar, pickled jalapenos, coriander." 
  },
  { 
    name: "Salmon Poke Bowl (GF)", 
    price: "R105", 
    desc: "Smoked salmon, avocado, pickled red cabbage & cucumber, carrot, brown rice, black sesame, sriracha mayo, soy." 
  },
  { 
    name: "Falafel Bowl (VE)", 
    price: "R105", 
    desc: "Hummus, falafel, roasted brinjal, tabouleh, baby spinach, pickled red cabbage, green tahini sauce." 
  },
];

const hotDrinks = [
  { name: "Espresso", price: "R26", desc: "" },
  { name: "Cortado", price: "R34", desc: "" },
  { name: "Flat White", price: "R38", desc: "" },
  { name: "Long Black", price: "R30", desc: "" },
  { name: "Batch Brew", price: "R30", desc: "" },
  { name: "Cappuccino", price: "R36", desc: "Large R40" },
  { name: "Latte", price: "R38", desc: "" },
  { name: "Mochaccino", price: "R38", desc: "Large R42" },
  { name: "Red Cappuccino", price: "R36", desc: "Large R40" },
  { name: "Hot Chocolate", price: "R36", desc: "Large R40" },
  { name: "Chai Latte", price: "R36", desc: "Large R40" },
  { name: "Dirty Chai", price: "R38", desc: "Large R42" },
  { name: "Five Roses/Rooibos/Green", price: "R17", desc: "" },
  { name: "Loose Leaf Tea (550ml Pot)", price: "R25", desc: "Earl Grey, Moroccan Mint Green, Sticky Pineapple & Ginger Rooibos, Strawberry Hibiscus Rooibos." },
  { name: "Golden Spiced Latte", price: "R38", desc: "Turmeric, cinnamon & ginger." },
  { name: "Mystic Mesquite Latte", price: "R40", desc: "Caffeine free coffee alternative, wild harvested in the Karoo." },
  { name: "Matcha Latte", price: "R42", desc: "Exceptional grade pure matcha." },
  { name: "Salted Caramel Hot Choc", price: "R44", desc: "Served with vegan marshmallows." },
];

const coldDrinks = [
  { name: "Iced Flat White (Unsweetened)", price: "R38", desc: "Double espresso, milk, poured over ice cubes, choc sprinkle." },
  { name: "Coffee Freezo", price: "R44", desc: "Single espresso, milk & crushed ice." },
  { name: "Iced Blondie", price: "R48", desc: "Single espresso, white chocolate syrup, milk & crushed ice." },
  { name: "Iced Mocha", price: "R48", desc: "Single espresso, dark chocolate, milk and crushed ice." },
  { name: "Berry Crush (VE)", price: "R38", desc: "Cloudy lemon, blueberry & blackcurrant crushed ice." },
  { name: "The Moira Rose (VE)", price: "R38", desc: "Peach & rose infused tea over ice." },
  { name: "Rooi is Mooi (VE)", price: "R38", desc: "Rooibos extract, red orange & agave over ice." },
  { name: "Elderflower Coffee Fizz (VE)", price: "R38", desc: "Batch brew, elderflower syrup, sparkling water, lemon over ice." },
  { name: "Iced Matcha", price: "R48", desc: "Pure Matcha, vanilla syrup, milk over ice." },
  { name: "Strawberry Rose Matcha (VE)", price: "R65", desc: "Strawberries, matcha, oat milk, rose over ice." },
  { name: "Chai Freezo", price: "R42", desc: "Chai, milk, & crushed ice with cinnamon." },
  { name: "Aero Mint Freezo", price: "R42", desc: "Choc, milk, mint, crushed ice." },
  { name: "Kiwi Cucumber Crush (VE)", price: "R38", desc: "Cloudy lemon, kiwi & cucumber crushed ice." },
  { name: "Strawberries & Cream Milkshake", price: "R52", desc: "Strawberries & white chocolate." },
];

const freshJuices = [
  { name: "Fresh Orange", price: "R52", desc: "" },
  { name: "Pineapple Crush", price: "R52", desc: "Pineapple & fresh orange." },
  { name: "Floo Juice", price: "R52", desc: "Carrot, orange, apple, ginger." },
  { name: "Green Detox", price: "R52", desc: "Spinach, cucumber, apple, lemon, ginger." },
  { name: "Ruby Red", price: "R52", desc: "Beetroot, apple, lemon, ginger." },
];

const smoothies = [
  { name: "Nutty Date", price: "R65", desc: "Banana, peanut butter, dates, macmilk." },
  { name: "Choc-Mousse", price: "R75", desc: "Cocoa macadamia butter, banana, avocado, chocolate oat milk." },
  { name: "Mango Lassi", price: "R75", desc: "Mango, coconut, syrup, cinnamon." },
  { name: "Green Machine", price: "R65", desc: "Spinach, mango, lemon, apple." },
  { name: "Pina Colada", price: "R65", desc: "Pineapple, banana, mango, agave, coconut." },
  { name: "Sunshine", price: "R65", desc: "Mango, pineapple, orange." },
  { name: "Berry Bliss", price: "R65", desc: "Strawberry, blueberry, banana, apple." },
  { name: "Hazelnut Mocha", price: "R68", desc: "Banana, chocolate, hazelnut & almond milk." },
];

const kiddies = [
  { name: "Babyccino", price: "R8", desc: "" },
  { name: "Kids Hot Chocolate", price: "R26", desc: "Served with vegan mallows (200ml)." },
  { name: "Kids Smoothie", price: "R48", desc: "Strawberry, banana, mango, apple (250ml)." },
  { name: "Milkshake", price: "R35", desc: "Strawberry or Chocolate (250ml)." },
  { name: "Orange or Apple Juice", price: "R40", desc: "Freshly squeezed (250ml)." },
  { name: "Kiddies Toast", price: "R32", desc: "Scrambled egg / Nutella & strawberry / Peanut butter & banana." },
  { name: "Mini Pancake Stack", price: "R48", desc: "2 blueberry pancakes, yoghurt, strawberries, honey." },
  { name: "Cheese Toast", price: "R48", desc: "Mild cheese on white sourdough served with chips." },
  { name: "Kiddies Chips", price: "R20", desc: "" },
];

// --- COMPONENT ---
const MenuSection = ({ title, icon: Icon, items }: { title: string, icon: any, items: any[] }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-[#E09F3E]/20 rounded-full text-[#02303A]">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-serif text-[#02303A]">{title}</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
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
                href="/assets/Menu.pdf"
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
            <MenuSection title="Breakfast" icon={Coffee} items={breakfast} />
            <MenuSection title="Brunch & Mains" icon={Wheat} items={brunch} />
            <MenuSection title="Toasties & Wraps" icon={Utensils} items={toasties} />
            <MenuSection title="Salads & Bowls" icon={Star} items={salads} />
        </motion.div>

        {/* DRINK SECTIONS */}
        <motion.div
           className="mt-16 pt-16 border-t-2 border-[#02303A]/10"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6, duration: 0.8 }}
        >
            <MenuSection title="Hot Drinks" icon={Coffee} items={hotDrinks} />
            <MenuSection title="Cold Drinks & Freezos" icon={IceCream} items={coldDrinks} />
            <MenuSection title="Fresh Juices" icon={GlassWater} items={freshJuices} />
            <MenuSection title="Smoothies (VE)" icon={Star} items={smoothies} />
            <MenuSection title="Kiddies" icon={Baby} items={kiddies} />
        </motion.div>

        {/* EXTRAS FOOTER */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-[#02303A]/80 bg-white p-8 rounded-2xl border border-[#02303A]/5">
            <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><PlusCircle size={18}/> Sides</h4>
                <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Falafel balls (3)</span> <span>R12</span></li>
                    <li className="flex justify-between"><span>Crispy halloumi</span> <span>R22</span></li>
                    <li className="flex justify-between"><span>Sliced avo</span> <span>R18</span></li>
                    <li className="flex justify-between"><span>Poached egg</span> <span>R8</span></li>
                    <li className="flex justify-between"><span>Scrambled egg</span> <span>R18</span></li>
                    <li className="flex justify-between"><span>Smoked salmon</span> <span>R40</span></li>
                    <li className="flex justify-between"><span>Herby mushrooms</span> <span>R18</span></li>
                    <li className="flex justify-between"><span>Sourdough slice</span> <span>R12</span></li>
                    <li className="flex justify-between"><span>Handcut chips (sharing)</span> <span>R40</span></li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><PlusCircle size={18}/> Drink Extras</h4>
                <ul className="space-y-2 text-sm">
                     <li className="flex justify-between"><span>Milk Alternatives (Almond/Coconut/Macadamia/Oat)</span> <span>R8</span></li>
                     <li className="flex justify-between"><span>Syrups (Hazelnut/Caramel/Vanilla)</span> <span>R10</span></li>
                </ul>
            </div>
             <div>
                 <h4 className="font-bold text-lg mb-4">Note</h4>
                 <p className="text-sm leading-relaxed opacity-80">
                    All on-toast dishes are available as a single slice. Swap for keto bread / GF bread +20.
                 </p>
            </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="p-8 bg-[#02303A] text-[#F9F7F2] rounded-3xl text-center">
            <h3 className="text-2xl font-serif mb-4">Humble Suppliers</h3>
            <p className="opacity-80 max-w-2xl mx-auto leading-relaxed">
                Not everything is made in-house—some things are best left to our friends.
                We proudly support <strong>Midlands Eggs</strong> (Free Range), <strong>The Glenwood Bakery</strong> (Sourdough & Challah),
                <strong>Good Bread & Stuff</strong> (White Sourdough & Brioche), and <strong>Bushhill Cheese</strong>.
            </p>
            <p className="mt-4 text-sm opacity-60">
                Our menu contains no meat, gelatine, alcohol, or animal rennets.
            </p>
        </div>

      </div>
    </main>
  );
}