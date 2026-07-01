"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X, Sun, Moon, ChevronDown, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const categories = [
  "Gold Jewellery","Silver Jewellery","Diamond Jewellery","Bridal Collection",
  "Rings","Necklaces","Chains","Mangalsutra","Bracelets","Bangles",
  "Pendants","Nose Pins","Anklets","Jhumka","Kids Jewellery","Men's Jewellery","Coins","Gift Collection",
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections", hasDropdown: true },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const WA = `https://wa.me/918603740333?text=${encodeURIComponent("Hello Tilak Jewellers,\nI am interested in your jewellery collection. Please guide me.")}`;

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen]   = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [logoError, setLogoError]     = useState(false);
  const { theme, setTheme }           = useTheme();
  const [mounted, setMounted]         = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#111111] text-[#D4AF37] text-xs py-2 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone size={12} />
            <a href="tel:+918603740333">+91 8603740333</a>
          </div>
          <span>📍 Main Kasna Road, Greater Noida</span>
        </div>
        <div className="flex items-center gap-4">
          <span>✨ Hallmarked Gold | Certified Diamonds | Trusted Since 1996</span>
          <a href="https://www.instagram.com/tilak_jewellers1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <FaInstagram size={14} />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <FaWhatsapp size={14} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 navbar-glass ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* ── LOGO ── */}
            <a href="#home" className="flex items-center gap-2 sm:gap-3 group no-underline">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4AF37] overflow-hidden bg-[#111111] flex-shrink-0 flex items-center justify-center">
                {!logoError ? (
                  <Image
                    src="/logo.png"
                    alt="Tilak Jewellers Logo"
                    fill
                    sizes="(max-width: 640px) 40px, 56px"
                    className="object-cover"
                    onError={() => setLogoError(true)}
                    priority
                  />
                ) : (
                  <span className="font-playfair font-bold text-[#D4AF37] text-lg sm:text-2xl">TJ</span>
                )}
              </div>
              <div className="flex flex-col">
                <div className="font-playfair font-bold text-lg sm:text-xl text-[#111111] dark:text-white leading-tight transition-colors">
                  Tilak Jewellers
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#D4AF37] font-medium tracking-[0.15em] hidden sm:block">
                  Since 1996 ✨
                </div>
              </div>
            </a>

            {/* ── DESKTOP LINKS ── */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="flex items-center gap-1 font-medium text-sm text-gray-800 dark:text-gray-200 hover:text-[#D4AF37] transition-colors"
                      onFocus={() => setDropdownOpen(true)}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <a href={link.href} className="font-medium text-sm text-gray-800 dark:text-gray-200 hover:text-[#D4AF37] transition-colors">
                      {link.name}
                    </a>
                  )}

                  {/* Mega-dropdown */}
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
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] p-6 glass rounded-2xl shadow-luxury mt-3"
                        >
                          <p className="text-[#D4AF37] font-playfair text-xs font-semibold tracking-widest uppercase mb-4">
                            Our Collections
                          </p>
                          <div className="grid grid-cols-3 gap-2">
                            {categories.map((cat) => (
                              <a key={cat} href="#collections" onClick={() => setDropdownOpen(false)}
                                 className="text-xs text-gray-700 dark:text-gray-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 p-2 rounded-lg flex items-center gap-2 transition-all">
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37] flex-shrink-0" />
                                {cat}
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

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button onClick={() => setSearchOpen(true)}
                      className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>

              {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  {theme === "dark" ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
                </button>
              )}

              <button className="relative p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors hidden sm:block">
                <Heart size={20} />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#8B0000] text-white text-[9px] font-bold flex items-center justify-center">3</span>
              </button>

              <button className="relative p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors hidden sm:block">
                <ShoppingBag size={20} />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#D4AF37] text-[#111111] text-[9px] font-bold flex items-center justify-center">2</span>
              </button>

              <a href={WA} target="_blank" rel="noopener noreferrer"
                 className="hidden xl:flex items-center gap-2 btn-gold px-4 py-2 rounded-full text-sm font-semibold ml-2">
                <FaWhatsapp size={16} /> Chat
              </a>

              <button onClick={() => setMobileOpen(!mobileOpen)} 
                      className="lg:hidden p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors ml-1">
                {mobileOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden glass border-t border-[#D4AF37]/20">
              <div className="p-4 sm:p-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)}
                     className="block py-3 border-b border-[#D4AF37]/10 text-gray-800 dark:text-gray-200 font-medium">
                    {link.name}
                  </a>
                ))}
                <p className="text-[#D4AF37] font-playfair font-semibold text-sm mt-5 mb-3">Categories</p>
                <div className="grid grid-cols-2 gap-2">
                  {categories.slice(0, 12).map((cat) => (
                    <a key={cat} href="#collections" onClick={() => setMobileOpen(false)}
                       className="text-xs text-gray-600 dark:text-gray-400 py-1">• {cat}</a>
                  ))}
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                   className="btn-gold flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold mt-6">
                  <FaWhatsapp size={16} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4"
                      onClick={() => setSearchOpen(false)}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, y: -20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: -20 }}
                        className="relative w-full max-w-2xl" onClick={e => e.stopPropagation()}>
              <div className="glass rounded-3xl p-6 border border-[#D4AF37]/30">
                <div className="flex items-center gap-3 bg-white/10 dark:bg-black/20 rounded-xl p-3">
                  <Search className="text-[#D4AF37] flex-shrink-0" size={24} />
                  <input autoFocus type="text" placeholder="Search jewellery, gold, diamonds..."
                         value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                         className="flex-1 bg-transparent border-none outline-none text-base text-gray-900 dark:text-white placeholder-gray-500" />
                  <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <X size={20} />
                  </button>
                </div>
                <div className="mt-6">
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-3">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["Gold Necklace","Diamond Ring","22K Bangles","Mangalsutra","Bridal Set","Silver Anklet"].map(t => (
                      <button key={t} onClick={() => setSearchQuery(t)}
                              className="px-4 py-1.5 text-xs rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors">
                        {t}
                      </button>
                    ))}
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
