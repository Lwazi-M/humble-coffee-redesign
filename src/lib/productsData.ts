// src/lib/productsData.ts

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "House Espresso",
    price: "R 185.00",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop", // Coffee Bag placeholder
    tags: ["Espresso", "Chocolatey"],
  },
  {
    id: 2,
    name: "Morning Blend",
    price: "R 165.00",
    image: "https://images.unsplash.com/photo-1582169296194-e9d648411dff?q=80&w=800&auto=format&fit=crop",
    tags: ["Filter", "Fruity"],
  },
  {
    id: 3,
    name: "Single Origin",
    price: "R 195.00",
    image: "https://images.unsplash.com/photo-1611854779393-1b2ae54a1936?q=80&w=800&auto=format&fit=crop",
    tags: ["Filter", "Floral"],
  },
  {
    id: 4,
    name: "Decaf Colombia",
    price: "R 180.00",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop",
    tags: ["Decaf", "Smooth"],
  },
];