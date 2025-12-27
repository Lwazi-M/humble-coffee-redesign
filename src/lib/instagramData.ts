// src/lib/instagramData.ts

// This acts as our "Database" for the portfolio. 
// We use TypeScript 'interfaces' to define what a Post looks like.
export interface InstagramPost {
  id: number;
  img: string; // The URL to the image
  likes: number;
  caption: string;
  link: string; // Where it goes if clicked
}

export const instaFeed: InstagramPost[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop", // Coffee Cup
    likes: 124,
    caption: "Morning brew ☕ #humblecoffee",
    link: "https://instagram.com",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=600&auto=format&fit=crop", // Payment Terminal/Shop
    likes: 85,
    caption: "Open for business! Come say hi.",
    link: "https://instagram.com",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop", // Latte Art
    likes: 201,
    caption: "Practice makes progress. 🌿",
    link: "https://instagram.com",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1507133750069-bef72f3a2b5d?q=80&w=600&auto=format&fit=crop", // Coffee Beans
    likes: 156,
    caption: "Fresh roast just dropped. 🔥",
    link: "https://instagram.com",
  },
];