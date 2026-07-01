"use client";
import { motion } from "framer-motion";
import { Smartphone, Camera, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function VirtualTryOn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 bg-cream dark:bg-[#0a0a0a] relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-8">
            <Sparkles className="text-[#D4AF37]" size={16} />
            <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
              Coming Soon
            </span>
            <Sparkles className="text-[#D4AF37]" size={16} />
          </div>

          <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-4">
            Virtual Try-On
            <br />
            <span className="gold-text">AR Jewellery Preview</span>
          </h2>
          <div className="gold-divider" />

          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-6 mb-12">
            Soon you'll be able to try on our jewellery virtually using Augmented Reality —
            right from your phone camera, before you buy.
          </p>

          {/* Mock Phone AR Preview */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {/* Phone Mockup */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-48 h-96 bg-[#111111] rounded-[40px] border-4 border-[#D4AF37]/40 shadow-luxury overflow-hidden relative">
                {/* Screen */}
                <div className="absolute inset-2 rounded-[32px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Camera size={48} className="text-[#D4AF37] mx-auto mb-3 opacity-60" />
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent border-2 border-[#D4AF37]/30 mx-auto flex items-center justify-center">
                      <span className="text-4xl">💍</span>
                    </div>
                    <p className="text-[#D4AF37] text-xs mt-3 font-medium">AR Try-On</p>
                    {/* Animated scan lines */}
                    <motion.div
                      animate={{ y: [0, 100, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-full h-px bg-[#D4AF37] opacity-60 mt-2"
                    />
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#111111] rounded-full z-10" />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-[#D4AF37]/10 blur-xl -z-10" />
            </motion.div>

            {/* Features */}
            <div className="space-y-4 text-left max-w-xs">
              {[
                { icon: Camera, title: "Live Camera Preview", desc: "See how jewellery looks on you in real-time" },
                { icon: Smartphone, title: "Works on Any Phone", desc: "No app download required. Use your browser." },
                { icon: Sparkles, title: "360° View", desc: "Rotate and inspect every detail of the piece" },
              ].map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111111] dark:text-white text-sm">{feat.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}

              <button
                className="btn-outline-gold w-full py-3 rounded-xl text-sm font-semibold mt-4"
                onClick={() => {
                  const wa = `https://wa.me/918603740333?text=${encodeURIComponent(
                    "Hello Tilak Jewellers, I'm interested in the Virtual Try-On feature. Please notify me when it launches!"
                  )}`;
                  window.open(wa, "_blank");
                }}
              >
                🔔 Notify Me When It Launches
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
