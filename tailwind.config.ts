import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jindo-yellow": "#FFCC00",
        "jindo-black": "#333333",
        "jindo-green": "#16a34a",
      },
    },
  },
  plugins: [],
} satisfies Config;
