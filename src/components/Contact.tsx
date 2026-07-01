"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Tilak Jewellers", "Main Kasna Road", "Greater Noida, Uttar Pradesh - 201308"],
    color: "text-[#8B0000]",
    bg: "bg-[#8B0000]/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 8603740333", "Mon – Sat: 10AM – 8PM"],
    color: "text-[#D4AF37]",
    bg: "bg-[#D4AF37]/10",
    href: "tel:+918603740333",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Saturday: 10:00 AM – 8:00 PM", "Sunday: 11:00 AM – 6:00 PM"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@tilakjewellers.com", "We reply within 24 hours"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    href: "mailto:info@tilakjewellers.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappUrl = `https://wa.me/918603740333?text=${encodeURIComponent(
    "Hello Tilak Jewellers,\nI would like to visit your store. Please share your address and directions."
  )}`;

  return (
    <section id="contact" className="py-24 bg-cream dark:bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-4">
            ✦ Find Us ✦
          </p>
          <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-lg mx-auto mt-4">
            Visit our showroom or reach out to us — we're always happy to help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex items-start gap-4 glass-card p-5 rounded-2xl"
                >
                  <div className={`${item.bg} p-3.5 rounded-xl flex-shrink-0`}>
                    <Icon size={22} className={item.color} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] dark:text-white mb-1.5">
                      {item.title}
                    </h4>
                    {item.lines.map((line, j) =>
                      item.href && j === 0 ? (
                        <a
                          key={j}
                          href={item.href}
                          className={`block text-sm ${item.color} font-medium hover:underline`}
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={j} className="text-gray-500 dark:text-gray-400 text-sm">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#20ba5a] transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <FaWhatsapp size={18} />
                WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/tilak_jewellers1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-1 hover:shadow-lg transition-all"
                style={{
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                }}
              >
                <FaInstagram size={18} />
                Instagram
              </a>
              <a
                href="https://maps.google.com/?q=Tilak+Jewellers+Main+Kasna+Road+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Right: Map + Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#D4AF37]/20 shadow-luxury h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.7!2d77.47!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFpbiBLYXNuYSBSb2FkLCBHcmVhdGVyIE5vaWRh!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tilak Jewellers Location"
              />
            </div>

            {/* Quick Enquiry Form */}
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="font-playfair text-xl font-bold text-[#111111] dark:text-white mb-5">
                Quick Enquiry
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                  const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  const waMsg = encodeURIComponent(
                    `Hello Tilak Jewellers,\n\nName: ${name}\nPhone: ${phone}\n\nMessage: ${msg}`
                  );
                  window.open(`https://wa.me/918603740333?text=${waMsg}`, "_blank");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/20 bg-white/50 dark:bg-white/5 text-[#111111] dark:text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/20 bg-white/50 dark:bg-white/5 text-[#111111] dark:text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/20 bg-white/50 dark:bg-white/5 text-[#111111] dark:text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 btn-gold py-3 rounded-xl text-sm font-semibold"
                >
                  <FaWhatsapp size={16} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
