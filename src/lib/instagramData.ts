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
    img: "/assets/humble-coffee.jpg", // Coffee Cup
    likes: 890,
    caption: "📍Humble Coffee",
    link: "https://www.instagram.com/p/DMo_-G3ofTU/?hl=en&img_index=1",
  },
  {
    id: 2,
    img: "/assets/food.jpg", // Payment Terminal/Shop
    likes: 135,
    caption: "L U N C H 🥙",
    link: "https://www.instagram.com/p/DQTrIiYjd0a/?hl=en&img_index=1",
  },
  {
    id: 3,
    img: "/assets/latte.jpg", // Latte Art
    likes: 116,
    caption: "Making Wednesdays better since 2019. ❤️",
    link: "https://www.instagram.com/p/C70d_meKxdA/?hl=en",
  },
  {
    id: 4,
    img: "/assets/merch.jpg",
    likes: 101,
    caption: "Available at both cafe's.🔥",
    link: "https://www.instagram.com/p/DCWreQFqsDV/?hl=en",
  },
];