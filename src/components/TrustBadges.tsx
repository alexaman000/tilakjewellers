"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Truck, RefreshCw, Headphones, BadgeCheck, CreditCard } from "lucide-react";

const badges = [
  {
    icon: BadgeCheck,
    title: "BIS Hallmarked Gold",
    desc: "Every piece certified by the Bureau of Indian Standards",
    color: "text-[#D4AF37]",
    bg: "bg-[#D4AF37]/10",
    border: "border-[#D4AF37]/20",
  },
  {
    icon: Gem,
    title: "Certified Diamonds",
    desc: "GIA/IGI certified diamonds with full documentation",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: RefreshCw,
    title: "Easy Exchange",
    desc: "100% exchange on gold at current market rate",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: CreditCard,
    title: "No-Cost EMI",
    desc: "Flexible EMI options from 3 to 24 months",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Truck,
    title: "Insured Delivery",
    desc: "Safe & secure insured home delivery pan India",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: Headphones,
    title: "24/7 WhatsApp Support",
    desc: "Instant support on WhatsApp anytime you need",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    border: "border-[#25D366]/20",
  },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-white dark:bg-[#111111]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-3">
            ✦ Why Choose Us ✦
          </p>
          <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-3">
            The Tilak Jewellers Promise
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`flex flex-col items-center text-center p-5 rounded-2xl border ${b.border} ${b.bg} cursor-default transition-shadow duration-300 hover:shadow-lg`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-3 shadow-sm`}>
                  <Icon size={24} className={b.color} />
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-white text-xs leading-tight mb-1">
                  {b.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
