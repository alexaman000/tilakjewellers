"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Upload, Send, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CustomJewellery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const metal = (form.elements.namedItem("metal") as HTMLSelectElement).value;
    const weight = (form.elements.namedItem("weight") as HTMLInputElement).value;
    const budget = (form.elements.namedItem("budget") as HTMLInputElement).value;
    const desc = (form.elements.namedItem("description") as HTMLTextAreaElement).value;

    const msg = encodeURIComponent(
      `Hello Tilak Jewellers,\n\n🎨 Custom Jewellery Request:\n\nMetal: ${metal}\nApprox. Weight: ${weight}\nBudget: ₹${budget}\nDescription: ${desc}${
        fileName ? `\nInspiration Image: ${fileName}` : ""
      }\n\nPlease contact me with a quote.`
    );
    window.open(`https://wa.me/918603740333?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="custom"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#1a1208] to-[#111111]"
      ref={ref}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-4">
              ✦ Bespoke Creations ✦
            </p>
            <h2 className="section-heading text-4xl sm:text-5xl text-white mb-4">
              Design Your
              <br />
              <span className="gold-shine">Dream Jewellery</span>
            </h2>
            <div className="gold-divider !mx-0 mb-6" />

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Have a unique design in mind? Share your inspiration and let our master craftsmen
              bring your vision to life. We create completely custom, one-of-a-kind pieces
              tailored to your taste and budget.
            </p>

            <div className="space-y-4">
              {[
                { step: "01", title: "Share Your Vision", desc: "Upload an inspiration image or describe your dream design" },
                { step: "02", title: "Get a Quote", desc: "We'll reach out with a detailed quote and design consultation" },
                { step: "03", title: "Watch It Come to Life", desc: "Our craftsmen create your unique piece within 7-15 days" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-xs font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass border border-[#D4AF37]/20 rounded-3xl p-8">
              <h3 className="font-playfair text-2xl text-white font-bold mb-6">
                Tell Us Your Requirements
              </h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={60} className="text-[#D4AF37] mx-auto mb-4" />
                    <h4 className="text-white font-playfair text-xl font-bold mb-2">
                      Request Sent! 🎉
                    </h4>
                    <p className="text-gray-400 text-sm">
                      We'll get back to you on WhatsApp shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Metal Type */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-medium">
                        Choose Metal *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Gold", "Silver", "Diamond"].map((metal) => (
                          <label key={metal} className="cursor-pointer">
                            <input
                              type="radio"
                              name="metal"
                              value={metal}
                              className="sr-only"
                              defaultChecked={metal === "Gold"}
                            />
                            <span className="block text-center py-2.5 rounded-xl border border-[#D4AF37]/30 text-gray-300 text-sm font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all peer-checked:border-[#D4AF37] peer-checked:bg-[#D4AF37]/20 peer-checked:text-[#D4AF37] cursor-pointer">
                              {metal === "Gold" ? "💛" : metal === "Silver" ? "🥈" : "💎"} {metal}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Weight and Budget */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2 font-medium">
                          Approx. Weight (gm)
                        </label>
                        <input
                          name="weight"
                          type="text"
                          placeholder="e.g. 20 gm"
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#D4AF37]/30 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2 font-medium">
                          Budget (₹)
                        </label>
                        <input
                          name="budget"
                          type="text"
                          placeholder="e.g. 50,000"
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#D4AF37]/30 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-medium">
                        Describe Your Design *
                      </label>
                      <textarea
                        name="description"
                        rows={3}
                        required
                        placeholder="e.g. I want a traditional necklace with ruby stones, 22K gold..."
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#D4AF37]/30 text-white placeholder-gray-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm transition-all resize-none"
                      />
                    </div>

                    {/* Image Upload */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-medium">
                        Upload Inspiration Image (Optional)
                      </label>
                      <div
                        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                          dragOver
                            ? "border-[#D4AF37] bg-[#D4AF37]/10"
                            : "border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5"
                        }`}
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragOver(true);
                        }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setDragOver(false);
                          const f = e.dataTransfer.files[0];
                          if (f) setFileName(f.name);
                        }}
                        onClick={() => document.getElementById("file-input")?.click()}
                      >
                        <input
                          id="file-input"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) setFileName(f.name);
                          }}
                        />
                        <Upload size={24} className="text-[#D4AF37] mx-auto mb-2" />
                        {fileName ? (
                          <p className="text-[#D4AF37] text-sm font-medium">{fileName}</p>
                        ) : (
                          <>
                            <p className="text-gray-400 text-sm">Drop image here or click to upload</p>
                            <p className="text-gray-500 text-xs mt-1">PNG, JPG up to 10MB</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 btn-gold py-4 rounded-xl font-semibold text-base"
                    >
                      <FaWhatsapp size={20} />
                      Send Request on WhatsApp
                      <Send size={16} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
