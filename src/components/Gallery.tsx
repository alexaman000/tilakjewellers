"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Heart, MessageCircle, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/diamond-necklace-set.png",
    alt: "Diamond Necklace & Earring Set — Tilak Jewellers",
    caption: "Timeless Elegance. Unmatched Brilliance.",
    category: "Diamond Jewellery",
    tag: "#diamondjewellery",
    likes: "2.4K",
    comments: "189",
  },
  {
    id: 2,
    src: "/images/gallery/gold-chains.png",
    alt: "New Stock 20K & 22K Gold Chains — Tilak Jewellers",
    caption: "New Stock • 20K & 22K Gold Chains",
    category: "Gold Chains",
    tag: "#goldchains",
    likes: "3.1K",
    comments: "247",
  },
  {
    id: 3,
    src: "/images/gallery/gold-jhumka.png",
    alt: "Traditional 22K Gold Jhumka Earrings — Tilak Jewellers",
    caption: "Tradition in Every Detail",
    category: "Gold Earrings",
    tag: "#goldjhumka",
    likes: "4.2K",
    comments: "312",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<null | (typeof galleryItems)[0]>(null);

  return (
    <section id="gallery" ref={ref}
      style={{ padding: "96px 0", background: "#111111", position: "relative", overflow: "hidden" }}>

      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(212,175,55,0.05)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 320, height: 320, borderRadius: "50%", background: "rgba(212,175,55,0.05)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 14 }}>
            <FaInstagram style={{ color: "#E1306C", fontSize: 24 }} />
            <span style={{ color: "#E1306C", fontSize: 13, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" }}>
              Instagram Gallery
            </span>
          </div>

          <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", marginBottom: 12 }}>
            Jewellery{" "}
            <span className="gold-shine">Showcase</span>
          </h2>
          <div className="gold-divider" />
          <p style={{ color: "#9ca3af", fontSize: 16, maxWidth: 480, margin: "16px auto 0" }}>
            Follow us on Instagram for daily jewellery inspirations and new arrivals
          </p>

          {/* Follow button */}
          <motion.a href="https://www.instagram.com/tilak_jewellers1" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 24,
              padding: "12px 28px", borderRadius: 50, fontWeight: 600, color: "white", textDecoration: "none",
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              boxShadow: "0 8px 30px rgba(220,39,67,0.35)",
            }}>
            <FaInstagram size={20} />
            @tilak_jewellers1
            <ExternalLink size={15} />
          </motion.a>
        </motion.div>

        {/* Gallery Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {galleryItems.map((item, index) => (
            <motion.div key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="gallery-item"
              onClick={() => setSelected(item)}
              style={{ cursor: "pointer" }}>

              {/* Image wrapper — fixed aspect ratio so images always show */}
              <div style={{ position: "relative", width: "100%", paddingBottom: "120%", overflow: "hidden", background: "#1a1a1a" }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                  className="gallery-img"
                />

                {/* Hover overlay */}
                <div className="gallery-overlay">
                  <div style={{ width: "100%" }}>
                    {/* IG header */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(255,255,255,0.4)" }}>
                          <span style={{ color: "#111", fontSize: 11, fontWeight: "bold" }}>TJ</span>
                        </div>
                        <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>tilak_jewellers1</span>
                      </div>
                      <FaInstagram style={{ color: "rgba(255,255,255,0.7)" }} size={18} />
                    </div>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{item.caption}</p>
                    <p style={{ color: "#D4AF37", fontSize: 12, marginBottom: 14 }}>{item.tag} #jewelry #gold</p>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 5, color: "white", fontSize: 13 }}>
                        <Heart size={16} /> {item.likes}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 5, color: "white", fontSize: 13 }}>
                        <MessageCircle size={16} /> {item.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{ marginTop: 48, textAlign: "center" }}>
          <div className="glass" style={{ borderRadius: 24, padding: 40, maxWidth: 600, margin: "0 auto", border: "1px solid rgba(212,175,55,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaInstagram size={26} color="white" />
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "white", fontWeight: 600, fontSize: 15 }}>@tilak_jewellers1</p>
                <p style={{ color: "#9ca3af", fontSize: 13 }}>Follow us for daily updates</p>
              </div>
            </div>
            <p style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Get inspired by our latest designs, new arrivals, and exclusive offers.<br />Join our growing community of jewellery lovers!
            </p>
            <a href="https://www.instagram.com/tilak_jewellers1" target="_blank" rel="noopener noreferrer"
               style={{
                 display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 32px",
                 borderRadius: 50, fontWeight: 600, color: "white", textDecoration: "none",
                 background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                 transition: "all 0.3s",
               }}>
              <FaInstagram size={18} />
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)", padding: 16 }}
                      onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                        style={{ position: "relative", maxWidth: 600, width: "100%", borderRadius: 24, overflow: "hidden" }}
                        onClick={e => e.stopPropagation()}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "110%" }}>
                <Image src={selected.src} alt={selected.alt} fill sizes="600px"
                       style={{ objectFit: "contain" }} />
              </div>
              <div style={{ position: "absolute", bottom: 0, inset: "auto 0 0", background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)", padding: 24 }}>
                <p style={{ color: "white", fontFamily: "Playfair Display, serif", fontSize: 20 }}>{selected.caption}</p>
                <p style={{ color: "#D4AF37", fontSize: 13, marginTop: 4 }}>{selected.category}</p>
              </div>
              <button onClick={() => setSelected(null)}
                      style={{ position: "absolute", top: 12, right: 12, width: 40, height: 40, borderRadius: "50%", background: "rgba(0,0,0,0.6)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .gallery-img { transform: scale(1); }
        .gallery-item:hover .gallery-img { transform: scale(1.08); }
      `}</style>
    </section>
  );
}
