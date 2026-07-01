"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Heart, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/diamond-necklace-set.png",
    alt: "Diamond Necklace & Earring Set",
    caption: "Timeless Elegance. Unmatched Brilliance.",
    category: "Diamond Jewellery",
    likes: "2.4K",
    comments: "189",
    gradient: "from-blue-200 to-indigo-300",
  },
  {
    id: 2,
    src: "/images/gallery/gold-chains.png",
    alt: "New Stock 20K & 22K Gold Chains",
    caption: "New Stock • 20K & 22K Gold Chains",
    category: "Gold Chains",
    likes: "3.1K",
    comments: "247",
    gradient: "from-amber-300 to-yellow-500",
  },
  {
    id: 3,
    src: "/images/gallery/gold-jhumka.png",
    alt: "Traditional 22K Gold Jhumka Earrings",
    caption: "Tradition in Every Detail",
    category: "Gold Earrings",
    likes: "4.2K",
    comments: "312",
    gradient: "from-yellow-400 to-amber-600",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryItems)[0]>(null);

  return (
    <section
      id="gallery"
      className="py-24 bg-[#111111] relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#D4AF37] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaInstagram className="text-pink-500 text-2xl" />
            <p className="text-pink-500 text-sm font-medium uppercase tracking-[0.3em]">
              Instagram Gallery
            </p>
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-white mb-4">
            Jewellery{" "}
            <span className="gold-shine">Showcase</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-400 text-base max-w-lg mx-auto mt-4">
            Follow us on Instagram for daily jewellery inspirations and new arrivals
          </p>

          {/* Instagram Follow Button */}
          <motion.a
            href="https://www.instagram.com/tilak_jewellers1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/30"
            style={{
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <FaInstagram size={20} />
            @tilak_jewellers1
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="gallery-item cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-96 sm:h-[480px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={() => {}}
                />
                {/* Fallback */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center opacity-0`}
                  style={{ opacity: 0 }}
                >
                  <span className="text-8xl">💍</span>
                </div>

                {/* Overlay */}
                <div className="gallery-overlay">
                  <div className="w-full">
                    {/* Instagram Style Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 bg-[#D4AF37] flex items-center justify-center">
                          <span className="text-[#111111] text-xs font-bold">TJ</span>
                        </div>
                        <span className="text-white text-sm font-medium">tilak_jewellers1</span>
                      </div>
                      <FaInstagram size={20} className="text-white/80" />
                    </div>

                    {/* Caption */}
                    <p className="text-white text-sm mb-3 font-medium">{item.caption}</p>
                    <p className="text-[#D4AF37] text-xs mb-4">#{item.category.toLowerCase().replace(" ", "")} #jewelry #gold</p>

                    {/* Likes & Comments */}
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-white hover:text-[#D4AF37] transition-colors">
                        <Heart size={18} />
                        <span className="text-sm font-medium">{item.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-white hover:text-[#D4AF37] transition-colors">
                        <MessageCircle size={18} />
                        <span className="text-sm font-medium">{item.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="glass border border-[#D4AF37]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                }}
              >
                <FaInstagram size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">@tilak_jewellers1</p>
                <p className="text-gray-400 text-sm">Follow us for daily updates</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Get inspired by our latest designs, new arrivals, and exclusive offers. Join our
              growing community of jewellery lovers!
            </p>
            <a
              href="https://www.instagram.com/tilak_jewellers1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
            >
              <FaInstagram size={18} />
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-2xl w-full max-h-[90vh] rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={900}
              className="object-contain w-full h-auto max-h-[80vh]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-playfair text-xl">{selectedImage.caption}</p>
              <p className="text-[#D4AF37] text-sm mt-1">{selectedImage.category}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
