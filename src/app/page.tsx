import React from 'react';
import HeroSection from '@/components/features/HeroSection';
import BigRosie from '@/components/features/BigRosie';
import ProductSlider from '@/components/features/ProductSlider';
import InstagramFeed from '@/components/features/InstagramFeed';
// REMOVED: import ContactSection from ...

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-[#02303A]">
      <HeroSection />
      <BigRosie />
      <ProductSlider />
      <InstagramFeed />
    </main>
  );
}