"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Are you Halaal Certified or Muslim Owned?",
    answer: (
      <div className="space-y-4">
        <p>
          We are not halaal certified or muslim owned. The cafe was started as a meat-free establishment back in 2019. 
          We are proudly pescatarian (fish only) and have absolutely no meat or by-products on the premises. 
          This includes gelatines, collagens, brushes containing animal hair, and rennets.
        </p>
        <p>
          We appeal to a variety of dietary requirements and have no alcohol on the premises either (including private events). 
          We have lots of vegan and gluten-free options too.
        </p>
        <p className="font-bold">The following from our cafe offering IS Halaal Certified:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>All cheeses, dairy products, yoghurts</li>
          <li>Brioche bread, white sourdough, and milk buns</li>
          <li>Pestos, jams, dips, soy sauce, and dressings (mainly made in-house)</li>
          <li>All of our cakes and pastries are made in-house</li>
        </ul>
      </div>
    )
  },
  {
    question: "Do you take reservations?",
    answer: (
      <p>
        Yes! We take bookings for parties of 6 or more via Dineplan. You can book the inside boardroom table or courtyard area 
        for groups of up to 20. There is no charge, and you are welcome to bring decor and a cake for a small cakeage fee of R60.
      </p>
    )
  },
  {
    question: "Why do you not offer table service?",
    answer: (
      <div className="space-y-4">
        <p>
          Since opening, we have always operated with counter service. This means: find a table, look at the menu, order at the counter, 
          and we bring food and drinks to the table. We understand this isn't for everyone, but we are really good at this style of service.
        </p>
        <p>
          It allows the customer to interact with many layers of the team, from the person making your coffee to the person plating your croissant. 
          It means we can have a stronger, smaller team who are able to receive a higher wage and get an equal share of the tips.
        </p>
      </div>
    )
  },
  {
    question: "Where is your coffee from?",
    answer: (
      <p>
        We roast all of our beans in-house. We usually have a lovely single origin on bar and filter. Our House and Love blend never change. 
        We are always getting in new coffees as single origin options. You can order our beans online via our website—we deliver all over SA.
      </p>
    )
  },
  {
    question: "What is 'The Hatch' all about?",
    answer: (
      <p>
        The hatch is open Wed-Sun 6:30am - 2pm. It's designed to take pressure away from the main cafe and make your takeaway experience quick and simple. 
        The hatch offers a small selection of sweets, savouries, and drinks. We also offer fresh harvest table salads Wed-Fri!
      </p>
    )
  },
  {
    question: "Is Florida Rd Humble still open?",
    answer: (
      <div>
        <p className="mb-2">Florida Rd is still going strong! Its opening hours are as follows:</p>
        <ul className="list-none space-y-1 font-medium">
          <li>Mon - Fri: 6am - 4pm</li>
          <li>Sat: 6:30am - 2pm</li>
          <li>Sun: 7am - 2pm</li>
        </ul>
      </div>
    )
  },
  {
    question: "What are your opening hours at 222 (Lilian Ngoyi)?",
    answer: "7:00 - 16:00, 7 days a week."
  }
];

export default function FAQPage() {
  // Simple state to track which FAQ is open (optional, but nice for UX)
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-24">
      
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#02303A] mb-6">
            Frequently Asked <span className="text-[#E09F3E] italic">Questions.</span>
          </h1>
          <p className="text-[#02303A]/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about our food, our coffee, and how we run things.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#02303A]/10 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-xl font-bold text-[#02303A] font-serif pr-8">
                  {faq.question}
                </span>
                <span className="text-[#E09F3E] flex-shrink-0">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-[#02303A]/80 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}