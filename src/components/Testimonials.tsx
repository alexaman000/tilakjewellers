"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Greater Noida",
    avatar: "PS",
    avatarColor: "from-pink-400 to-rose-600",
    rating: 5,
    review:
      "I bought my bridal jewellery set from Tilak Jewellers and the quality is outstanding! The gold is hallmarked and the diamonds are certified. The staff was very helpful and patient throughout the selection process. Highly recommend!",
    product: "Bridal Gold Set",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rahul & Anjali Verma",
    location: "Noida Sector 63",
    avatar: "RV",
    avatarColor: "from-blue-400 to-indigo-600",
    rating: 5,
    review:
      "We got our engagement rings from here. The diamond quality is amazing and the price is very transparent compared to other shops. No hidden charges, live gold rate pricing. We are very satisfied customers!",
    product: "Diamond Engagement Rings",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Sunita Agarwal",
    location: "Greater Noida West",
    avatar: "SA",
    avatarColor: "from-amber-400 to-orange-600",
    rating: 5,
    review:
      "Tilak Jewellers has been my family's trusted jeweller for 15 years. The craftsmanship is superb and they always have the latest designs. The exchange policy is also very fair. God bless them!",
    product: "Gold Bangles & Necklace",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Deepak Mishra",
    location: "Kasna, Greater Noida",
    avatar: "DM",
    avatarColor: "from-emerald-400 to-teal-600",
    rating: 5,
    review:
      "Bought a mangalsutra and earring set for my wife's birthday. She absolutely loved it! The diamond is certified and the gold is 22K hallmarked. Very genuine and honest shop. Will definitely come back.",
    product: "Diamond Mangalsutra Set",
    date: "5 days ago",
  },
  {
    id: 5,
    name: "Kavita Singh",
    location: "Pari Chowk, Greater Noida",
    avatar: "KS",
    avatarColor: "from-purple-400 to-violet-600",
    rating: 5,
    review:
      "I customized my wedding jewellery here and the result was exactly as I imagined. The team listened carefully to my requirements and delivered a masterpiece. The EMI option made it very affordable too.",
    product: "Custom Bridal Jewellery",
    date: "2 months ago",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-24 bg-cream dark:bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-4">
            ✦ Reviews ✦
          </p>
          <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="gold-divider" />

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="font-playfair text-2xl font-bold text-[#111111] dark:text-white">
              5.0
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              (500+ Google Reviews)
            </span>
          </div>
        </motion.div>

        {/* Testimonials Grid (desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="testimonial-card p-6"
            >
              <Quote className="text-[#D4AF37] mb-4 opacity-50" size={32} />
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                "{t.review}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-[#D4AF37]/10 pt-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#111111] dark:text-white text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                  <p className="text-[#D4AF37] text-xs">{t.product}</p>
                </div>
                <span className="ml-auto text-xs text-gray-400">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="testimonial-card p-6"
          >
            <Quote className="text-[#D4AF37] mb-4 opacity-50" size={32} />
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
              "{testimonials[activeIndex].review}"
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <div className="flex items-center gap-3 border-t border-[#D4AF37]/10 pt-4">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[activeIndex].avatarColor} flex items-center justify-center text-white text-sm font-bold`}
              >
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-[#111111] dark:text-white text-sm">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-gray-400 text-xs">{testimonials[activeIndex].location}</p>
                <p className="text-[#D4AF37] text-xs">{testimonials[activeIndex].product}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 h-2 bg-[#D4AF37]"
                      : "w-2 h-2 bg-[#D4AF37]/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Additional 2 testimonials on desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className="testimonial-card p-6 flex gap-4"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
              >
                {t.avatar}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  "{t.review.substring(0, 120)}..."
                </p>
                <p className="font-semibold text-[#111111] dark:text-white text-sm">{t.name}</p>
                <p className="text-[#D4AF37] text-xs">{t.product}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-[#1a1a1a] border border-[#D4AF37]/20 shadow-md hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <p className="text-[#111111] dark:text-white font-semibold text-sm">
                See All Reviews on Google
              </p>
              <p className="text-gray-400 text-xs">500+ Verified Reviews</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
