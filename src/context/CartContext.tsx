// src/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define what a Cart Item looks like
type CartItem = {
  id: number;
  name: string;
  price: string; // We keep string to display "R 145.00"
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: any) => void;
  removeFromCart: (id: number) => void;
  toggleCart: () => void;
  cartTotal: number;
  itemsCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from LocalStorage on startup
  useEffect(() => {
    const savedCart = localStorage.getItem('humble_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('humble_cart', JSON.stringify(cart));
  }, [cart]);

  // Helper: Parse "R 145.00" or "From R 145.00" into a number
  const parsePrice = (priceStr: string) => {
    const clean = priceStr.replace(/[^0-9.]/g, ''); // Remove 'R', 'From', spaces
    return parseFloat(clean) || 0;
  };

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // If exists, increase quantity
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If new, add it
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open drawer when adding
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Derived state
  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const cartTotal = cart.reduce((total, item) => {
    return total + parsePrice(item.price) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, isCartOpen, addToCart, removeFromCart, toggleCart, cartTotal, itemsCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};