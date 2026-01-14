# Humble Coffee - Premium E-Commerce Experience ☕

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8) ![Supabase](https://img.shields.io/badge/Supabase-Database-green)

A high-performance, responsive e-commerce application built for **Humble Coffee**. This project emphasizes storytelling, premium design, and complex product logic (variants, dynamic pricing, and gift cards).

---

## 🛠️ Tech Stack

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org) (App Router) | SEO, Server Components, Routing |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | Responsive utility-first styling |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Page transitions, scroll reveals, hover effects |
| **Database** | [Supabase](https://supabase.com) | PostgreSQL database for products & inventory |
| **Icons** | [Lucide React](https://lucide.dev) | Lightweight SVG icons |
| **State** | React Context API | Global Cart management & LocalStorage persistence |

---

## 🚀 Features & Implementation Details

We have transformed this from a basic template into a fully functional shop. Here is a breakdown of the features added and the logic behind them.

### 1. 📱 Responsive Hero Section (Performance Optimized)
**The Challenge:** Video backgrounds look great on desktop but consume too much data and battery on mobile devices.
**The Solution:**
* **Desktop:** Displays a high-quality autoplay loop (`<video>`).
* **Mobile:** Uses a CSS media query (`md:hidden`) to swap the video for a highly optimized **Next.js Image** (`Humble_FloridaRd-9_1.webp`).
* **Result:** Improved Largest Contentful Paint (LCP) scores and a better mobile experience.

### 2. 🛍️ Dynamic Shop & "Quick Add" Logic
**The Challenge:** Users want to add items quickly, but some products (like coffee beans) have multiple sizes (250g vs 1kg).
**The Solution:**
* **Smart Buttons:**
    * *Single Variant:* Clicking "Add to Cart" adds the item immediately.
    * *Multi Variant:* Clicking "Select Size" toggles a sub-menu *inside the card* to pick a specific weight.
* **Inventory:** Fetches real-time data from Supabase, filtered by category (Coffee, Merch, Pantry).

### 3. 🧠 Advanced Pricing Algorithm
**The Challenge:** Coffee pricing is not linear. A 1kg bag is not simply $4 \times$ the price of a 250g bag.
**The Solution:**
We implemented a custom pricing calculator in `src/app/shop/page.tsx` and the Product Detail page:
* **Coffee:** Uses a multiplier (approx 3.75x) but overrides specific blends (e.g., *House Espresso* vs *Rare Origins*) with fixed pricing rules.
* **Gift Cards:** The "variant" selected (e.g., R250) is parsed directly as the price value.
* **Pods:** Special logic for "50's" packs.

### 4. 🎁 Gift Card Integration
**The Challenge:** Gift cards behave differently than physical products; they don't have weight.
**The Solution:**
* Updated the database to allow non-standard weight strings (`R100 / R250 / R500`).
* Updated the UI to swap "Choose Size" text with "Choose Amount".
* Added a `<Gift />` icon indicator for visual clarity.

### 5. 🛒 Robust Cart System
**The Challenge:** Persisting the user's basket across pages and refreshes.
**The Solution:**
* **Context API:** Wraps the application to provide global access to `cart` state.
* **LocalStorage:** Saves the cart to the browser so data isn't lost on refresh.
* **Cart Drawer:** A slide-out component accessible from the Navbar.

### 6. 💳 Checkout & Success Flow
**The Challenge:** Handling text-based currency strings (e.g., "R 145.00") during math calculations.
**The Solution:**
* **Parser:** Created a helper function `parsePrice()` to strip non-numeric characters before calculating totals.
* **Order Summary:** Displays a detailed breakdown of items and specific variants.
* **Success Page:** Automatically clears the cart and LocalStorage upon load to prevent duplicate orders.

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── checkout/         # Checkout form & Success page
│   ├── shop/
│   │   ├── [id]/         # Dynamic Product Detail Page
│   │   └── page.tsx      # Main Shop Grid
│   ├── layout.tsx        # Global Font & Navbar wrapper
│   └── page.tsx          # Homepage
├── components/
│   ├── features/         # Hero, ProductSlider
│   └── layout/           # Navbar, Footer, CartDrawer
├── context/              # CartContext.tsx (State Logic)
└── utils/                # supabase/client.ts
```

## 💾 Database Schema

The application connects to a **Supabase PostgreSQL** database using the `products` table.

| Column | Type | Description |
| :--- | :--- | :--- |
| **`id`** | `int8` | Primary Key |
| **`name`** | `text` | Product Name |
| **`category`** | `text` | Filter tag (*Coffee, Merch, Pantry*) |
| **`price`** | `text` | Display string (e.g., "From R 145.00") |
| **`weight`** | `text` | Variants separated by slash (e.g., "250g / 1kg") |
| **`image`** | `text` | Path to image in `/public/assets` |
| **`desc`** | `text` | Full description text |

---

## ⚡ Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/humble-coffee.git](https://github.com/your-username/humble-coffee.git)
```

### 2. Install dependencies
```bash
git clone [https://github.com/your-username/humble-coffee.git](https://github.com/your-username/humble-coffee.git)
```

### 3. Setup Environment
Create a .env.local file in the root directory and add your Supabase keys:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

## 🔮 Future Roadmap
* [ ] Payment Gateway: Integrate PayFast/Yoco for real ZA payments.
* [ ] User Auth: Allow customers to save delivery addresses.
* [ ] Admin Dashboard: CMS to update coffee pricing without code changes.

