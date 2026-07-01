"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Phone,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const categories = [
  { name: "Gold Jewellery", href: "#collections" },
  { name: "Silver Jewellery", href: "#collections" },
  { name: "Diamond Jewellery", href: "#collections" },
  { name: "Bridal Collection", href: "#collections" },
  { name: "Rings", href: "#collections" },
  { name: "Necklaces", href: "#collections" },
  { name: "Chains", href: "#collections" },
  { name: "Mangalsutra", href: "#collections" },
  { name: "Bracelets", href: "#collections" },
  { name: "Bangles", href: "#collections" },
  { name: "Pendants", href: "#collections" },
  { name: "Nose Pins", href: "#collections" },
  { name: "Anklets", href: "#collections" },
  { name: "Jhumka", href: "#collections" },
  { name: "Kids Jewellery", href: "#collections" },
  { name: "Men's Jewellery", href: "#collections" },
  { name: "Coins", href: "#collections" },
  { name: "Gift Collection", href: "#collections" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  {
    name: "Collections",
    href: "#collections",
    hasDropdown: true,
  },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/918603740333?text=${encodeURIComponent(
    "Hello Tilak Jewellers,\nI am interested in your jewellery collection. Please guide me."
  )}`;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#111111] text-[#D4AF37] text-xs py-2 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone size={12} />
            <a href="tel:+918603740333" className="hover:text-[#F5CC3D] transition-colors">
              +91 8603740333
            </a>
          </span>
          <span>📍 Main Kasna Road, Greater Noida</span>
        </div>
        <div className="flex items-center gap-4">
          <span>✨ Hallmarked Gold | Certified Diamonds | Trusted Since 1996</span>
          <a
            href="https://www.instagram.com/tilak_jewellers1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp size={14} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 navbar-glass ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-[#D4AF37] group-hover:border-[#F5CC3D] transition-all duration-300 group-hover:shadow-gold">
                <Image
                  src="/logo.png"
                  alt="Tilak Jewellers Logo"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if logo not found
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Fallback logo */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#111111]">
                  <span className="font-playfair text-[#D4AF37] text-xl font-bold">TJ</span>
                </div>
              </div>
              <div>
                <h1 className="font-playfair text-xl font-bold text-[#111111] dark:text-white leading-tight">
                  Tilak Jewellers
                </h1>
                <p className="text-xs text-[#D4AF37] font-poppins font-medium tracking-wider">
                  Since 1996 ✨
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="flex items-center gap-1 text-[#2C2C2C] dark:text-white hover:text-[#D4AF37] transition-colors font-medium text-sm group"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[#2C2C2C] dark:text-white hover:text-[#D4AF37] transition-colors font-medium text-sm relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                    </a>
                  )}

                  {/* Mega Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setDropdownOpen(true)}
                          onMouseLeave={() => setDropdownOpen(false)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] glass rounded-2xl p-6 shadow-luxury border border-[#D4AF37]/20"
                        >
                          <p className="text-[#D4AF37] font-playfair font-semibold mb-4 text-sm uppercase tracking-widest">
                            Our Collections
                          </p>
                          <div className="grid grid-cols-3 gap-2">
                            {categories.map((cat) => (
                              <a
                                key={cat.name}
                                href={cat.href}
                                onClick={() => setDropdownOpen(false)}
                                className="text-xs text-[#2C2C2C] dark:text-gray-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors py-1.5 px-2 rounded-lg hover:bg-[#D4AF37]/10 flex items-center gap-1.5"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37] flex-shrink-0" />
                                {cat.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                id="search-btn"
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-[#D4AF37]/10 text-[#2C2C2C] dark:text-white hover:text-[#D4AF37] transition-all"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Dark Mode */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-[#D4AF37]/10 text-[#2C2C2C] dark:text-white hover:text-[#D4AF37] transition-all"
                  aria-label="Toggle dark mode"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}

              {/* Wishlist */}
              <button
                id="wishlist-btn"
                className="p-2 rounded-full hover:bg-[#D4AF37]/10 text-[#2C2C2C] dark:text-white hover:text-[#D4AF37] transition-all relative"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B0000] text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Cart */}
              <button
                id="cart-btn"
                className="p-2 rounded-full hover:bg-[#D4AF37]/10 text-[#2C2C2C] dark:text-white hover:text-[#D4AF37] transition-all relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-[#111111] text-xs rounded-full flex items-center justify-center font-bold">
                  2
                </span>
              </button>

              {/* WhatsApp CTA (desktop) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 btn-gold px-4 py-2 rounded-full text-sm"
              >
                <FaWhatsapp size={16} />
                Chat
              </a>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-[#D4AF37]/10 text-[#2C2C2C] dark:text-white transition-all"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[#D4AF37]/20"
            >
              <div className="px-4 py-6 glass space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[#2C2C2C] dark:text-white hover:text-[#D4AF37] font-medium py-2 border-b border-[#D4AF37]/10"
                  >
                    {link.name}
                  </a>
                ))}
                <p className="text-[#D4AF37] font-playfair text-sm font-semibold pt-2">
                  Categories
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {categories.slice(0, 12).map((cat) => (
                    <a
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-[#2C2C2C] dark:text-gray-300 hover:text-[#D4AF37] py-1"
                    >
                      • {cat.name}
                    </a>
                  ))}
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-gold w-full py-3 rounded-full text-sm mt-4"
                >
                  <FaWhatsapp size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass rounded-2xl p-6 shadow-luxury border border-[#D4AF37]/30">
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <Search className="text-[#D4AF37]" size={24} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search jewellery, gold, diamonds..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-[#111111] dark:text-white outline-none text-lg placeholder:text-gray-400"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-gray-400 hover:text-[#D4AF37]"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Gold Necklace", "Diamond Ring", "22K Bangles", "Mangalsutra", "Bridal Set", "Silver Anklet"].map(
                      (term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-3 py-1.5 text-sm rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                        >
                          {term}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
