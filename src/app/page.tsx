// src/app/page.tsx
import React from 'react';
import HeroSection from '@/components/features/HeroSection';
import BigRosie from '@/components/features/BigRosie'; // Import the new component here
import InstagramFeed from '@/components/features/InstagramFeed';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-[#02303A]">
      
      {/* 1. The "Welcome Home" Section */}
      <HeroSection />

      {/* 2. The "Big Rosie" Roaster Section */}
      <BigRosie />

      {/* 3. The Instagram Feed */}
      <InstagramFeed />

    </main>
  );
}