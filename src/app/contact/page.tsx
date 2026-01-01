import React from 'react';
import ContactSection from '@/components/features/ContactSection';

export default function ContactPage() {
  return (
    // We add pt-32 to account for the fixed Navbar so content isn't hidden behind it
    <main className="min-h-screen bg-[#F9F7F2] pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-serif text-[#02303A] text-center">
          Get in <span className="text-[#E09F3E] italic">Touch.</span>
        </h1>
      </div>
      
      {/* Reusing your existing Contact Component */}
      <ContactSection />
    </main>
  );
}