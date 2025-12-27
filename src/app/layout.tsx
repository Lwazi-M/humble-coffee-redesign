import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // <--- 1. Add this import

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
      <body className="antialiased bg-[#F9F7F2]">
        <Navbar /> {/* <--- 2. Add this tag here */}
        {children}
      </body>
    </html>
  );
}