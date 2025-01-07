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
        "jindo-dark-yellow": "#ca8a04",
        "jindo-yellow": "#eab308",
        "jindo-light-yellow": "#fde047",
        "jindo-black": "#050505",
        "jindo-white": "#eeeeee",
        "jindo-green": "#16a34a",
        "jindo-darker-gray": "#1f2937",
        "jindo-dark-gray": "#374151",
        "jindo-gray": "#6b7280",
        "jindo-light-gray": "#9ca3af",
        "jindo-lighter-gray": "#d1d5db",
      },
    },
  },
  plugins: [],
} satisfies Config;
