/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 8s linear infinite",
        "loop-scroll-lg": "loop-scroll 8s linear infinite",
        "loop-scroll-reverse": "loop-scroll-reverse 8s linear infinite",
        "loop-scroll-reverse-lg": "loop-scroll-reverse 8s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-77%)" },
        },
        "loop-scroll-lg": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-38%)" },
        },
        "loop-scroll-reverse": {
          from: { transform: "translateX(-77%)" },
          to: { transform: "translateX(0)" },
        },

        "loop-scroll-reverse-lg": {
          from: { transform: "translateX(-38%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
