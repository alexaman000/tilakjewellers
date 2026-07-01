"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, MapPin, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "About Us", href: "#about" },
  { name: "Custom Jewellery", href: "#custom" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

const categories = [
  "Gold Jewellery",
  "Silver Jewellery",
  "Diamond Jewellery",
  "Bridal Collection",
  "Rings & Pendants",
  "Mangalsutra",
  "Bangles & Kangan",
  "Gold Coins",
];

const support = [
  { name: "Exchange Policy", href: "#faq" },
  { name: "EMI Options", href: "#faq" },
  { name: "Hallmark Info", href: "#faq" },
  { name: "Diamond Certification", href: "#faq" },
  { name: "Custom Orders", href: "#custom" },
  { name: "Home Delivery", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail]         = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [logoError, setLogoError]   = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const whatsappUrl = `https://wa.me/918603740333?text=${encodeURIComponent(
    "Hello Tilak Jewellers! I'd like to know more."
  )}`;

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#D4AF37]/15">
      {/* Newsletter Strip */}
      <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/20 to-[#D4AF37]/10 border-b border-[#D4AF37]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                Stay in the Loop ✨
              </h3>
              <p className="text-gray-400 text-sm">
                Subscribe for new arrivals, exclusive offers, and jewellery inspiration
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 text-[#D4AF37] font-medium">
                  <CheckCircle size={20} />
                  Thank you for subscribing!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="newsletter-input flex-1 min-w-0 md:w-72"
                  />
                  <button type="submit" className="btn-gold px-6 py-3 rounded-full text-sm font-semibold flex-shrink-0 flex items-center gap-2">
                    Subscribe <ArrowRight size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid rgba(212,175,55,0.5)", overflow: "hidden", background: "#111111", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {!logoError ? (
                  <Image src="/logo.png" alt="Tilak Jewellers" width={56} height={56}
                         style={{ objectFit: "cover", width: "100%", height: "100%" }}
                         onError={() => setLogoError(true)} />
                ) : (
                  <span className="font-playfair" style={{ color: "#D4AF37", fontSize: 20, fontWeight: 700 }}>TJ</span>
                )}
              </div>
              <div>
                <h2 className="font-playfair text-xl font-bold text-white">Tilak Jewellers</h2>
                <p className="text-[#D4AF37] text-xs tracking-widest">Since 1996 ✨</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Trusted by thousands of families in Greater Noida for over 28 years. We bring you
              the finest handcrafted Gold, Silver & Diamond jewellery with guaranteed purity and
              transparent pricing.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>Main Kasna Road, Greater Noida, U.P.</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+918603740333" className="hover:text-[#D4AF37] transition-colors">
                  +91 8603740333
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={16} className="text-[#D4AF37] flex-shrink-0" />
                <span>Mon–Sat: 10AM–8PM | Sun: 11AM–6PM</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:info@tilakjewellers.com" className="hover:text-[#D4AF37] transition-colors">
                  info@tilakjewellers.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://www.instagram.com/tilak_jewellers1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                }}
              >
                <FaInstagram size={18} className="text-white" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <FaWhatsapp size={18} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <FaFacebook size={18} className="text-white" />
              </a>
              <a
                href="https://maps.google.com/?q=Tilak+Jewellers+Main+Kasna+Road+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-10 h-10 rounded-xl bg-[#EA4335] flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <FaMapMarkerAlt size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#D4AF37]" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#D4AF37]"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5 relative">
              Collections
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#D4AF37]" />
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#collections"
                    className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#D4AF37]"
                    />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5 relative">
              Support
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#D4AF37]" />
            </h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#D4AF37]"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-8 space-y-2">
              {["BIS Hallmarked Gold", "GIA/IGI Certified Diamonds", "100% Genuine Products", "Secure Payments"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle size={12} className="text-[#D4AF37]" />
                    {badge}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-[#D4AF37] font-medium">Tilak Jewellers</span>. Since 1996. All
            rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-[#8B0000] animate-pulse">❤️</span>
            <span>for our customers in Greater Noida</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
