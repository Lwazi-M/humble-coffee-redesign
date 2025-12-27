import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This tells Tailwind to look inside your src folder
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // We can add our custom colors here later (like Oat Milk!)
    },
  },
  plugins: [],
};
export default config;