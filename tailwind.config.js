/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeftToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s forwards",
        slideOut: "slideOut 0.5s forwards",
        slideDown: "slideDown 0.5s forwards",
        slideUp: "slideUp 0.5s forwards",
        slideLeftToRight: "slideLeftToRight 0.5s forwards",
      },
    },
  },
  plugins: [],
};
