import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
        
        {/* The Navbar sits at the top of the body, outside the page content */}
        <Navbar />
        
        {/* This is where page.tsx content gets injected */}
        {children}
        <Footer />
      </body>
    </html>
  );
}