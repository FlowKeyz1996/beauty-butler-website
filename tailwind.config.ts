import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
         euclid:["var(--font-euclid)"],
         euclidlight:["var(--font-euclid-light)"],
         euclidmedium:["var(--font-euclid-medium)"],
         euclidsemibold:["var(--font-euclid-semibold)"],
         apfelregular:["var(--font-apfel-regular)"],
         apfelmittel:["var(--font-apfel-mittel)"]
      }
    },
  },
  plugins: [],
};
export default config;
