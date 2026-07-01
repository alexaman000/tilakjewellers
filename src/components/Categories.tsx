"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { name: "Gold Jewellery", emoji: "💛", gradient: "from-yellow-400 to-amber-500", count: "500+" },
  { name: "Silver Jewellery", emoji: "🥈", gradient: "from-gray-300 to-slate-400", count: "300+" },
  { name: "Diamond Jewellery", emoji: "💎", gradient: "from-blue-200 to-indigo-300", count: "200+" },
  { name: "Bridal Collection", emoji: "👰", gradient: "from-pink-300 to-rose-400", count: "150+" },
  { name: "Rings", emoji: "💍", gradient: "from-purple-300 to-violet-400", count: "400+" },
  { name: "Necklaces", emoji: "📿", gradient: "from-amber-300 to-orange-400", count: "350+" },
  { name: "Chains", emoji: "⛓️", gradient: "from-yellow-300 to-yellow-500", count: "250+" },
  { name: "Mangalsutra", emoji: "🖤", gradient: "from-red-400 to-rose-600", count: "180+" },
  { name: "Bracelets", emoji: "✨", gradient: "from-teal-300 to-cyan-400", count: "220+" },
  { name: "Bangles", emoji: "🔱", gradient: "from-orange-300 to-amber-400", count: "300+" },
  { name: "Pendants", emoji: "🌟", gradient: "from-yellow-400 to-gold-500", count: "280+" },
  { name: "Nose Pins", emoji: "💫", gradient: "from-pink-300 to-fuchsia-400", count: "120+" },
  { name: "Anklets", emoji: "🦶", gradient: "from-lime-300 to-green-400", count: "150+" },
  { name: "Jhumka", emoji: "🎐", gradient: "from-amber-400 to-yellow-500", count: "200+" },
  { name: "Kids Jewellery", emoji: "🌈", gradient: "from-blue-300 to-purple-400", count: "100+" },
  { name: "Men's Jewellery", emoji: "👑", gradient: "from-slate-400 to-gray-600", count: "130+" },
  { name: "Gold Coins", emoji: "🪙", gradient: "from-yellow-400 to-amber-600", count: "50+" },
  { name: "Gift Collection", emoji: "🎁", gradient: "from-red-300 to-pink-400", count: "200+" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="py-24 bg-cream dark:bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-4">
            ✦ Explore ✦
          </p>
          <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-4">
            Our Collections
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-lg mx-auto mt-4">
            From traditional to contemporary — find the perfect piece for every occasion
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.name}
              href="#collections"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="category-card group bg-white dark:bg-[#1a1a1a] flex flex-col items-center justify-center p-5 text-center gap-3 rounded-2xl"
            >
              {/* Emoji Circle */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}
              >
                {cat.emoji}
              </div>

              {/* Name */}
              <span className="text-xs font-medium text-[#2C2C2C] dark:text-gray-300 group-hover:text-[#D4AF37] transition-colors leading-tight">
                {cat.name}
              </span>

              {/* Count */}
              <span className="text-[10px] text-gray-400 dark:text-gray-500">
                {cat.count} designs
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
