// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/layout/CartDrawer";

export const metadata: Metadata = {
  title: "Humble Coffee | Durban",
  description: "Ethically sourced, locally roasted.",
  // vvv THIS ADDS THE LOGO TO THE BROWSER TAB vvv
  icons: {
    icon: '/assets/secondary_logo.webp', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We add the background color here to ensure no white flashes during loading */}
      <body className="antialiased bg-[#F9F7F2]">
        
        {/* Wrap everything in CartProvider so the 'Brain' is accessible everywhere */}
        <CartProvider>
          
          {/* The Navbar sits at the top */}
          <Navbar />
          
          {/* The Drawer lives here, hidden until opened */}
          <CartDrawer />
          
          {/* This is where page.tsx content gets injected */}
          {children}
          
          <Footer />
          
        </CartProvider>

      </body>
    </html>
  );
}