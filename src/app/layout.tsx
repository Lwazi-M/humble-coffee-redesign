import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext"; // <--- 1. Import The Brain
import CartDrawer from "@/components/layout/CartDrawer"; // <--- 2. Import The UI

export const metadata: Metadata = {
  title: "Humble Coffee | Durban",
  description: "Ethically sourced, locally roasted.",
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