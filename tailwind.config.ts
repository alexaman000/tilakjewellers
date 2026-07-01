import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFFDF0",
          100: "#FFF8D6",
          200: "#FFEEA3",
          300: "#FFE070",
          400: "#F5CC3D",
          500: "#D4AF37",
          600: "#B8941E",
          700: "#9A7A10",
          800: "#7C6208",
          900: "#5E4A03",
        },
        ruby: {
          500: "#8B0000",
          600: "#720000",
          700: "#5A0000",
        },
        dark: "#111111",
        cream: "#FAF8F5",
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "gold-glow": "goldGlow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "particle-float": "particleFloat 8s ease-in-out infinite",
        "shine": "shine 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        goldGlow: {
          "0%": { boxShadow: "0 0 10px rgba(212,175,55,0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(212,175,55,0.8), 0 0 60px rgba(212,175,55,0.4)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        particleFloat: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(360deg)", opacity: "0" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5CC3D 25%, #D4AF37 50%, #B8941E 75%, #D4AF37 100%)",
        "dark-gradient": "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)",
        "hero-gradient": "radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "gold": "0 4px 30px rgba(212, 175, 55, 0.3)",
        "gold-lg": "0 8px 60px rgba(212, 175, 55, 0.5)",
        "glass": "0 8px 32px rgba(31, 38, 135, 0.37)",
        "luxury": "0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(212,175,55,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
