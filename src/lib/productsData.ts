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
    price: "from R 145.00",
    image: "/assets/house-espresso.png", 
    tags: ["Caramel", "Citrus", "Full Bodied"],
  },
  {
    id: 2,
    name: "Love Blend",
    price: "from R 145.00",
    image: "/assets/love-blend.png",
    tags: ["Peach", "Toffee", "Sweet"],
  },
  {
    id: 3,
    name: "Festive Blend '25",
    price: "R 195.00",
    image: "/assets/festive-blend.png",
    tags: ["Cherry", "Dark Choc", "Mango"],
  },
  {
    id: 4,
    name: "Humble Pods",
    price: "from R 110.00",
    image: "/assets/humble-pods.png",
    tags: ["Nespresso® Compatible", "House Espresso"],
  },
];