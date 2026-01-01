// src/components/features/ContactSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="pb-24 bg-[#F9F7F2] text-[#02303A]">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* --- LEFT: Contact Form --- */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#02303A]/5">
              <h3 className="text-2xl font-serif mb-6">Send Us A Message</h3>

              <form className="space-y-6">
                {/* Row 1: Names */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70">First Name *</label>
                    <input 
                      type="text" 
                      placeholder="Jane"
                      className="w-full p-4 bg-[#F9F7F2] border border-transparent focus:bg-white focus:border-[#02303A] rounded-xl outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70">Last Name *</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full p-4 bg-[#F9F7F2] border border-transparent focus:bg-white focus:border-[#02303A] rounded-xl outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Contacts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full p-4 bg-[#F9F7F2] border border-transparent focus:bg-white focus:border-[#02303A] rounded-xl outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-70">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+27 ..."
                      className="w-full p-4 bg-[#F9F7F2] border border-transparent focus:bg-white focus:border-[#02303A] rounded-xl outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-70">Message *</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full p-4 bg-[#F9F7F2] border border-transparent focus:bg-white focus:border-[#02303A] rounded-xl outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full md:w-auto px-10 py-4 bg-[#02303A] text-[#F9F7F2] font-bold rounded-full hover:bg-[#E09F3E] transition-colors flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>


          {/* --- RIGHT: Info Cards (Sidebar) --- */}
          <motion.div 
            className="w-full lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            

            {/* Email Card */}
            <div className="p-8 bg-white border border-[#02303A]/10 rounded-3xl shadow-sm">
              <Mail className="w-10 h-10 mb-6 text-[#02303A]" />
              <h3 className="font-serif text-2xl mb-2 text-[#02303A]">Direct Email</h3>
              <p className="text-[#02303A]/70 mb-4">
                Prefer to email us directly? No problem.
              </p>
              <a href="mailto:amy@humblecoffee.co.za" className="text-lg font-bold text-[#02303A] border-b-2 border-[#E09F3E] hover:text-[#E09F3E] transition-colors">
                amy@humblecoffee.co.za
              </a>
            </div>

            {/* Hours Card */}
            <div className="p-8 bg-[#02303A] text-[#F9F7F2] rounded-3xl shadow-lg">
              <Clock className="w-10 h-10 mb-6 text-[#E09F3E]" />
              <h3 className="font-serif text-2xl mb-6">Opening Hours</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 font-bold text-[#E09F3E]">
                    <MapPin size={16} /> 222 Lilian Ngoyi Rd
                  </div>
                  <p className="opacity-80 ml-6">Mon - Sun: 07:00 - 16:00</p>
                </div>
                
                <div className="w-full h-px bg-white/10" />

                <div>
                  <div className="flex items-center gap-2 mb-2 font-bold text-[#E09F3E]">
                    <MapPin size={16} /> 262 Florida Road
                  </div>
                  <ul className="opacity-80 ml-6 space-y-1">
                    <li>Mon - Fri: 06:00 - 16:00</li>
                    <li>Sat: 06:30 - 14:00</li>
                    <li>Sun: 07:00 - 14:00</li>
                  </ul>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;