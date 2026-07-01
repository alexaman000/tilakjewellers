"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the purity of your gold jewellery?",
    a: "All our gold jewellery is BIS Hallmarked and comes in 18K, 22K, and 24K purity options. Each piece has a hallmark stamp indicating the exact karat. We maintain complete transparency about gold purity and pricing based on live market rates.",
    icon: "💛",
  },
  {
    q: "Are your diamonds certified?",
    a: "Yes! Every diamond we sell comes with an international certification from GIA (Gemological Institute of America) or IGI (International Gemological Institute). The certificate includes details about the 4Cs — Cut, Clarity, Color, and Carat weight.",
    icon: "💎",
  },
  {
    q: "What is your exchange and buyback policy?",
    a: "We offer a 100% exchange policy on all gold jewellery at the current gold rate. For buyback, we deduct standard making charges. Old jewellery can be exchanged for new designs with a fair valuation. No questions asked within 7 days of purchase.",
    icon: "🔄",
  },
  {
    q: "Do you offer EMI options?",
    a: "Yes! We offer convenient No-Cost EMI options through leading credit cards and buy-now-pay-later services. EMI plans start from 3 to 24 months. We also have our own monthly jewellery savings scheme for regular customers.",
    icon: "💳",
  },
  {
    q: "What does BIS Hallmark mean?",
    a: "BIS (Bureau of Indian Standards) Hallmark is the government's official quality certification for gold. It guarantees that the gold meets the exact purity standards stated on the jewellery. All our gold items carry the 6-digit BIS Hallmarking unique number (HUID).",
    icon: "🏅",
  },
  {
    q: "Do you offer home delivery?",
    a: "Yes, we offer insured home delivery across India through trusted courier partners. Local delivery in Greater Noida is free. All packages are fully insured and require signature upon delivery. Expected delivery time is 3-7 business days.",
    icon: "🚚",
  },
  {
    q: "Can I get jewellery custom-made?",
    a: "Absolutely! We specialize in custom jewellery design. You can share your design inspiration, choose metal and stone preferences, and set your budget. Our master craftsmen will create a unique piece just for you within 7-15 working days.",
    icon: "✏️",
  },
  {
    q: "How are making charges calculated?",
    a: "Making charges are calculated as a percentage of the gold value or as a fixed per-gram charge, depending on the design complexity. We provide a complete breakup of gold value, stone value, and making charges on every invoice — complete transparency.",
    icon: "📊",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`faq-item ${open ? "open" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{faq.icon}</span>
          <span className="font-semibold text-[#111111] dark:text-white text-sm sm:text-base">
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown
            size={20}
            className={`transition-colors ${open ? "text-[#D4AF37]" : "text-gray-400"}`}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-[#D4AF37]/15 pt-4 ml-10">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#111111]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-4">
            ✦ FAQs ✦
          </p>
          <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-lg mx-auto mt-4">
            Got questions? We have answers. Contact us on WhatsApp if you need more help.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">Still have questions?</p>
          <a
            href={`https://wa.me/918603740333?text=${encodeURIComponent(
              "Hello Tilak Jewellers, I have a question about your jewellery."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold px-8 py-3 rounded-full text-sm font-semibold"
          >
            💬 Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
