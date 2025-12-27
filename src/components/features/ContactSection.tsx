"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#02303A] text-[#F9F7F2]">
      <div className="container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Come say <span className="text-[#E09F3E] italic">hello.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            
            <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
              <Clock className="w-8 h-8 mx-auto mb-4 text-[#E09F3E]" />
              <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
              <p className="opacity-80">Mon - Fri: 06:30 - 16:00</p>
              <p className="opacity-80">Sat: 07:00 - 13:00</p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
              <Phone className="w-8 h-8 mx-auto mb-4 text-[#E09F3E]" />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="opacity-80">+27 31 123 4567</p>
              <p className="text-sm opacity-60 mt-2">Bookings available</p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
              <Mail className="w-8 h-8 mx-auto mb-4 text-[#E09F3E]" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="opacity-80">hello@humblecoffee.co.za</p>
              <p className="text-sm opacity-60 mt-2">Wholesale enquiries</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;