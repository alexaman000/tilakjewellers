"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Eye, MessageCircle, Star, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Royal Bridal Necklace Set",
    category: "Gold Jewellery",
    weight: "45 gm",
    purity: "22K Gold",
    price: "₹2,85,000",
    originalPrice: "₹3,10,000",
    image: "/images/products/gold-necklace.png",
    fallbackGradient: "from-amber-300 to-yellow-500",
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    badgeColor: "bg-[#D4AF37]",
    stone: "Ruby & Emerald",
    inStock: true,
    emi: "₹9,500/month",
  },
  {
    id: 2,
    name: "Solitaire Diamond Ring",
    category: "Diamond Jewellery",
    weight: "3.5 gm",
    purity: "18K White Gold",
    price: "₹1,45,000",
    originalPrice: "₹1,65,000",
    image: "/images/products/diamond-ring.png",
    fallbackGradient: "from-blue-200 to-indigo-300",
    rating: 5.0,
    reviews: 94,
    badge: "Premium",
    badgeColor: "bg-[#8B0000]",
    stone: "1.2 Carat Diamond",
    inStock: true,
    emi: "₹4,800/month",
  },
  {
    id: 3,
    name: "Traditional Gold Bangles Set",
    category: "Bangles",
    weight: "30 gm",
    purity: "22K Gold",
    price: "₹1,90,000",
    originalPrice: "₹2,10,000",
    image: "",
    fallbackGradient: "from-yellow-400 to-amber-600",
    rating: 4.8,
    reviews: 67,
    badge: "New",
    badgeColor: "bg-emerald-600",
    stone: "No Stone",
    inStock: true,
    emi: "₹6,300/month",
  },
  {
    id: 4,
    name: "Diamond Mangalsutra",
    category: "Mangalsutra",
    weight: "8 gm",
    purity: "18K Gold",
    price: "₹65,000",
    originalPrice: "₹72,000",
    image: "",
    fallbackGradient: "from-rose-400 to-red-600",
    rating: 4.9,
    reviews: 215,
    badge: "Bestseller",
    badgeColor: "bg-[#D4AF37]",
    stone: "0.3 Carat Diamond",
    inStock: true,
    emi: "₹2,200/month",
  },
  {
    id: 5,
    name: "Silver Oxidised Jhumka",
    category: "Silver Jewellery",
    weight: "20 gm",
    purity: "Pure Silver 925",
    price: "₹4,500",
    originalPrice: "₹5,500",
    image: "",
    fallbackGradient: "from-gray-300 to-slate-500",
    rating: 4.7,
    reviews: 183,
    badge: "Trending",
    badgeColor: "bg-purple-600",
    stone: "No Stone",
    inStock: true,
    emi: null,
  },
  {
    id: 6,
    name: "22K Gold Kangan",
    category: "Bracelets",
    weight: "12 gm",
    purity: "22K Gold",
    price: "₹75,600",
    originalPrice: "₹82,000",
    image: "",
    fallbackGradient: "from-amber-400 to-yellow-600",
    rating: 4.8,
    reviews: 54,
    badge: "Limited",
    badgeColor: "bg-orange-600",
    stone: "No Stone",
    inStock: false,
    emi: "₹2,500/month",
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hello Tilak Jewellers,\n\nI want to know more about this jewellery:\n\n📌 Product: ${product.name}\n💰 Price: ${product.price}\n⚖️ Weight: ${product.weight}\n✨ Purity: ${product.purity}\n\nPlease contact me.`
  );
  const whatsappUrl = `https://wa.me/918603740333?text=${whatsappMsg}`;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card group"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-gray-900">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${product.fallbackGradient} flex items-center justify-center`}
          >
            <span className="text-6xl opacity-60">💍</span>
          </div>
        )}

        {/* Badge */}
        <div
          className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}
        >
          {product.badge}
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-full text-sm">
              Out of Stock
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-[#1a1a1a]/90 flex items-center justify-center shadow-md hover:scale-110 transition-all"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            className={wishlisted ? "fill-[#8B0000] text-[#8B0000]" : "text-gray-500"}
          />
        </button>

        {/* Hover Overlay */}
        <div className="product-overlay z-10" />

        {/* Hover Actions */}
        <div className="product-actions absolute bottom-4 left-4 right-4 z-20 flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#D4AF37] text-[#111111] text-xs font-bold py-2 rounded-lg hover:bg-[#F5CC3D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {addedToCart ? (
              <>✓ Added!</>
            ) : (
              <>
                <ShoppingBag size={14} /> Add to Cart
              </>
            )}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
          >
            <FaWhatsapp size={16} className="text-white" />
          </a>
          <button className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
            <Eye size={14} className="text-white" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <p className="text-[#D4AF37] text-xs font-medium uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-playfair text-base font-semibold text-[#111111] dark:text-white mb-2 leading-tight">
          {product.name}
        </h3>

        {/* Specs Row */}
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">⚖</span> {product.weight}
          </span>
          <span className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">✦</span> {product.purity}
          </span>
        </div>

        {/* Stone */}
        {product.stone !== "No Stone" && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            💎 {product.stone}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(product.rating)
                  ? "fill-[#D4AF37] text-[#D4AF37]"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="font-playfair text-xl font-bold text-[#D4AF37]">{product.price}</p>
            <p className="text-xs text-gray-400 line-through">{product.originalPrice}</p>
            {product.emi && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                <Zap size={10} /> EMI {product.emi}
              </p>
            )}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-[#25D366] font-medium hover:text-[#20ba5a] transition-colors"
          >
            <MessageCircle size={12} /> Enquire
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
    <section
      id="collections"
      className="py-24 bg-white dark:bg-[#111111]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.3em] mb-4">
            ✦ Handpicked ✦
          </p>
          <h2 className="section-heading text-4xl sm:text-5xl text-[#111111] dark:text-white mb-4">
            Featured Collections
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-lg mx-auto mt-4">
            Exquisite pieces crafted with unmatched skill and the finest materials
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <button className="btn-gold px-10 py-4 rounded-full text-base font-semibold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-1">
            View All Collections
          </button>
        </motion.div>
      </div>
    </section>
  );
}
