"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Star, Clock } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Shield,
    title: "Hallmarked Gold",
    desc: "All our gold jewellery is BIS Hallmarked and certified for guaranteed purity.",
    color: "text-[#D4AF37]",
    bg: "bg-[#D4AF37]/10",
  },
  {
    icon: Award,
    title: "Certified Diamonds",
    desc: "Each diamond comes with a GIA/IGI certification, ensuring authenticity.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Star,
    title: "Transparent Pricing",
    desc: "Live gold rate pricing with no hidden charges. Making charges clearly listed.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Clock,
    title: "Trusted Since 1996",
    desc: "Over 28 years of serving families in Greater Noida with trust and integrity.",
    color: "text-[#8B0000]",
    bg: "bg-[#8B0000]/10",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-cream dark:bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-4">
              ✦ Our Story ✦
            </p>
            <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-4">
              Since{" "}
              <span className="gold-text">1996</span>
            </h2>
            <div className="gold-divider !mx-0 mb-6" />

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              <strong className="text-[#D4AF37]">Tilak Jewellers</strong> has been a beacon of
              trust, purity, and premium craftsmanship in Greater Noida for over 28 years. Founded
              on the belief that every piece of jewellery tells a story, we have been crafting
              timeless pieces that celebrate life's most precious moments.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              Located on Main Kasna Road, Greater Noida, we serve thousands of families with
              hallmarked gold, certified diamonds, and handcrafted silver — all at transparent
              prices with no compromise on quality.
            </p>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="trust-badge flex flex-col items-start gap-3 text-left"
                  >
                    <div className={`${item.bg} p-3 rounded-xl`}>
                      <Icon size={24} className={item.color} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111111] dark:text-white text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Decorative Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-luxury">
              <div className="w-full h-full bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-600 flex items-center justify-center">
                <div className="text-center text-white p-12">
                  <div className="font-playfair text-8xl font-bold gold-text mb-4">TJ</div>
                  <div className="gold-divider" />
                  <p className="font-playfair text-2xl italic mt-4 text-[#F5CC3D]">
                    "Crafted with Love,
                    <br />
                    Trusted for Generations"
                  </p>
                  <p className="mt-6 text-yellow-200 text-sm tracking-widest uppercase">
                    Est. 1996 • Greater Noida
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card p-5 rounded-2xl shadow-gold"
            >
              <p className="font-playfair text-3xl font-bold gold-text">28+</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Years of Excellence</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-6 -right-6 glass-card p-5 rounded-2xl shadow-gold"
            >
              <p className="font-playfair text-3xl font-bold gold-text">10K+</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Happy Families</p>
            </motion.div>

            {/* Decorative Ring */}
            <div className="absolute -z-10 inset-0 rounded-3xl border border-[#D4AF37]/20 transform rotate-3 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
