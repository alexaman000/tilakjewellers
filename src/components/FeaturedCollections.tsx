"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Heart, ShoppingBag, Eye, MessageCircle, Star, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1, name: "Royal Bridal Necklace Set", category: "Gold Jewellery",
    weight: "45 gm", purity: "22K Gold", price: "₹2,85,000", originalPrice: "₹3,10,000",
    image: "/images/products/gold-necklace.png",
    bg: "linear-gradient(135deg, #f59e0b, #d97706)",
    emoji: "📿",
    rating: 4.9, reviews: 128, badge: "Bestseller", badgeColor: "#D4AF37",
    stone: "Ruby & Emerald", inStock: true, emi: "₹9,500/month",
  },
  {
    id: 2, name: "Solitaire Diamond Ring", category: "Diamond Jewellery",
    weight: "3.5 gm", purity: "18K White Gold", price: "₹1,45,000", originalPrice: "₹1,65,000",
    image: "/images/products/diamond-ring.png",
    bg: "linear-gradient(135deg, #93c5fd, #3b82f6)",
    emoji: "💎",
    rating: 5.0, reviews: 94, badge: "Premium", badgeColor: "#8B0000",
    stone: "1.2 Carat Diamond", inStock: true, emi: "₹4,800/month",
  },
  {
    id: 3, name: "Traditional Gold Bangles", category: "Bangles",
    weight: "30 gm", purity: "22K Gold", price: "₹1,90,000", originalPrice: "₹2,10,000",
    image: "",
    bg: "linear-gradient(135deg, #fbbf24, #b45309)",
    emoji: "🔱",
    rating: 4.8, reviews: 67, badge: "New", badgeColor: "#059669",
    stone: "No Stone", inStock: true, emi: "₹6,300/month",
  },
  {
    id: 4, name: "Diamond Mangalsutra", category: "Mangalsutra",
    weight: "8 gm", purity: "18K Gold", price: "₹65,000", originalPrice: "₹72,000",
    image: "",
    bg: "linear-gradient(135deg, #fca5a5, #b91c1c)",
    emoji: "🖤",
    rating: 4.9, reviews: 215, badge: "Bestseller", badgeColor: "#D4AF37",
    stone: "0.3 Carat Diamond", inStock: true, emi: "₹2,200/month",
  },
  {
    id: 5, name: "Silver Oxidised Jhumka", category: "Silver Jewellery",
    weight: "20 gm", purity: "Pure Silver 925", price: "₹4,500", originalPrice: "₹5,500",
    image: "",
    bg: "linear-gradient(135deg, #d1d5db, #6b7280)",
    emoji: "🎐",
    rating: 4.7, reviews: 183, badge: "Trending", badgeColor: "#7c3aed",
    stone: "No Stone", inStock: true, emi: null,
  },
  {
    id: 6, name: "22K Gold Kangan", category: "Bracelets",
    weight: "12 gm", purity: "22K Gold", price: "₹75,600", originalPrice: "₹82,000",
    image: "",
    bg: "linear-gradient(135deg, #fcd34d, #b45309)",
    emoji: "✨",
    rating: 4.8, reviews: 54, badge: "Limited", badgeColor: "#ea580c",
    stone: "No Stone", inStock: false, emi: "₹2,500/month",
  },
];

function ProductCard({ p, index }: { p: typeof products[0]; index: number }) {
  const [wishlisted, setWishlisted]   = useState(false);
  const [cartAdded, setCartAdded]     = useState(false);
  const [imgError, setImgError]       = useState(false);

  const waMsg = encodeURIComponent(`Hello Tilak Jewellers,\n\nI want to know more about:\n\n📌 ${p.name}\n💰 ${p.price}\n⚖️ ${p.weight}\n✨ ${p.purity}\n\nPlease contact me.`);
  const waUrl = `https://wa.me/918603740333?text=${waMsg}`;

  const handleCart = () => { setCartAdded(true); setTimeout(() => setCartAdded(false), 2000); };
  const showImage  = p.image && !imgError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card group"
      style={{ borderRadius: 20 }}
    >
      {/* ── Image Area ── */}
      <div style={{ position: "relative", height: 280, overflow: "hidden", background: "#f3f4f6" }}>
        {showImage ? (
          <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 400px"
                 style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                 className="group-hover:scale-110"
                 onError={() => setImgError(true)} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 72, opacity: 0.7 }}>{p.emoji}</span>
          </div>
        )}

        {/* Badge */}
        <div style={{ position: "absolute", top: 12, left: 12, background: p.badgeColor, color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, zIndex: 10 }}>
          {p.badge}
        </div>

        {/* Out of stock */}
        {!p.inStock && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <span style={{ background: "#dc2626", color: "white", padding: "8px 20px", borderRadius: 50, fontWeight: 600, fontSize: 13 }}>Out of Stock</span>
          </div>
        )}

        {/* Wishlist */}
        <button onClick={() => setWishlisted(!wishlisted)}
                style={{ position: "absolute", top: 12, right: 12, zIndex: 20, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.95)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", transition: "transform 0.2s" }}>
          <Heart size={16} style={{ fill: wishlisted ? "#8B0000" : "none", color: wishlisted ? "#8B0000" : "#666" }} />
        </button>

        {/* Hover overlay */}
        <div className="product-overlay" />

        {/* Hover actions */}
        <div className="product-actions" style={{ position: "absolute", bottom: 12, left: 12, right: 12, zIndex: 20, display: "flex", gap: 8 }}>
          <button onClick={handleCart} disabled={!p.inStock}
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#D4AF37", color: "#111", fontSize: 12, fontWeight: 700, padding: "9px 0", borderRadius: 10, border: "none", cursor: "pointer", opacity: p.inStock ? 1 : 0.5 }}>
            {cartAdded ? <>✓ Added!</> : <><ShoppingBag size={14} /> Add to Cart</>}
          </button>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
             style={{ width: 38, height: 38, borderRadius: 10, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <FaWhatsapp size={18} color="white" />
          </a>
          <button style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Eye size={15} color="white" />
          </button>
        </div>
      </div>

      {/* ── Info Area ── */}
      <div style={{ padding: "18px 18px 20px" }}>
        <p style={{ color: "#D4AF37", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 4 }}>{p.category}</p>
        <h3 className="font-playfair" style={{ fontSize: 16, fontWeight: 700, color: "#111111", marginBottom: 10, lineHeight: 1.3 }}>{p.name}</h3>

        <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#9ca3af", marginBottom: 8 }}>
          <span>⚖ {p.weight}</span>
          <span style={{ width: 1, background: "#e5e7eb" }} />
          <span>✦ {p.purity}</span>
        </div>

        {p.stone !== "No Stone" && (
          <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 8 }}>💎 {p.stone}</p>
        )}

        <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={12} style={{ fill: i <= Math.floor(p.rating) ? "#D4AF37" : "#e5e7eb", color: i <= Math.floor(p.rating) ? "#D4AF37" : "#e5e7eb" }} />
          ))}
          <span style={{ fontSize: 11, color: "#9ca3af", marginLeft: 4 }}>{p.rating} ({p.reviews})</span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <p className="font-playfair" style={{ fontSize: 20, fontWeight: 700, color: "#D4AF37" }}>{p.price}</p>
            <p style={{ fontSize: 11, color: "#9ca3af", textDecoration: "line-through" }}>{p.originalPrice}</p>
            {p.emi && (
              <p style={{ fontSize: 11, color: "#059669", display: "flex", alignItems: "center", gap: 3, marginTop: 2 }}>
                <Zap size={10} /> EMI {p.emi}
              </p>
            )}
          </div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
             style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#25D366", fontWeight: 500, textDecoration: "none" }}>
            <MessageCircle size={13} /> Enquire
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="collections" ref={ref} style={{ padding: "96px 0", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ color: "#D4AF37", fontSize: 13, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14 }}>✦ Handpicked ✦</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#111111", marginBottom: 12 }}>Featured Collections</h2>
          <div className="gold-divider" />
          <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 480, margin: "16px auto 0" }}>Exquisite pieces crafted with unmatched skill and the finest materials</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {products.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }} style={{ textAlign: "center", marginTop: 56 }}>
          <button className="btn-gold" style={{ padding: "16px 48px", borderRadius: 50, fontSize: 15, fontWeight: 600 }}>
            View All Collections
          </button>
        </motion.div>
      </div>
    </section>
  );
}
