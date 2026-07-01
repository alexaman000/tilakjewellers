"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";

interface Particle { x:number; y:number; size:number; speedX:number; speedY:number; opacity:number; fade:number; }

const WA = `https://wa.me/918603740333?text=${encodeURIComponent("Hello Tilak Jewellers,\nI am interested in your jewellery. Please help me.")}`;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const raf       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const mkParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 3.5 + 1,
      speedX: (Math.random() - 0.5) * 1.4,
      speedY: -(Math.random() * 1.4 + 0.4),
      opacity: 0,
      fade: Math.random() * 0.008 + 0.004,
    });

    for (let i = 0; i < 90; i++) {
      const p = mkParticle(); p.y = Math.random() * canvas.height; p.opacity = Math.random() * 0.8;
      particles.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, i) => {
        p.x += p.speedX; p.y += p.speedY; p.opacity += p.fade;
        if (p.opacity > 0.9) p.fade = -Math.abs(p.fade);
        if (p.opacity < 0)   p.fade =  Math.abs(p.fade);
        if (p.y < -20) { particles.current[i] = mkParticle(); return; }

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        g.addColorStop(0, `rgba(245,204,61,${p.opacity})`);
        g.addColorStop(0.5, `rgba(212,175,55,${p.opacity * 0.6})`);
        g.addColorStop(1, `rgba(212,175,55,0)`);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();

        if (p.size > 3) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.size * 2); ctx.lineTo(p.x + p.size * 0.5, p.y);
          ctx.lineTo(p.x, p.y + p.size * 2); ctx.lineTo(p.x - p.size * 0.5, p.y);
          ctx.closePath(); ctx.fillStyle = `rgba(255,248,220,${p.opacity * 0.7})`; ctx.fill();
        }
      });
      raf.current = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1208 100%)" }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, mixBlendMode: "screen" }} />

      {/* Hero background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/images/hero/hero-banner.png" alt="Tilak Jewellers Premium Jewellery" fill
               sizes="100vw" style={{ objectFit: "cover", opacity: 0.28 }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.6) 50%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 40%)" }} />
      </div>

      {/* Decorative rings */}
      <div style={{ position: "absolute", top: 80, right: 80, width: 380, height: 380, borderRadius: "50%", border: "1px solid rgba(212,175,55,0.12)", animation: "spin 12s linear infinite", display: "none" }} className="xl:block" />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ maxWidth: 720 }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 50, padding: "10px 20px", marginBottom: 32 }}>
            <Sparkles style={{ color: "#D4AF37" }} size={16} />
            <span style={{ color: "#D4AF37", fontSize: 12, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Premium Handcrafted Jewellery Since 1996
            </span>
            <Sparkles style={{ color: "#D4AF37" }} size={16} />
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                     className="font-playfair" style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 24 }}>
            Celebrate Every{" "}
            <span className="gold-shine">Moment</span>
            <br />with{" "}
            <em style={{ color: "#D4AF37", fontStyle: "italic" }}>Timeless</em>
            <br />Jewellery
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ color: "#d1d5db", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, marginBottom: 40, maxWidth: 520 }}>
            Discover handcrafted{" "}
            <span style={{ color: "#D4AF37", fontWeight: 600 }}>Gold, Silver</span> and{" "}
            <span style={{ color: "#D4AF37", fontWeight: 600 }}>Diamond</span> jewellery crafted with purity and elegance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
                      style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 60 }}>
            <a href="#collections" id="hero-shop-now" className="btn-gold"
               style={{ padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 700, gap: 10, boxShadow: "0 8px 40px rgba(212,175,55,0.5)" }}>
              <ShoppingBag size={20} /> Shop Now
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" id="hero-whatsapp"
               style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 700, background: "#25D366", color: "white", textDecoration: "none", boxShadow: "0 8px 30px rgba(37,211,102,0.4)", transition: "all 0.3s" }}>
              <FaWhatsapp size={22} /> Contact on WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
                      style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[["28+","Years of Trust"],["10K+","Happy Customers"],["5000+","Designs"],["100%","Hallmarked Gold"]].map(([val, lbl]) => (
              <div key={lbl} style={{ textAlign: "center" }}>
                <div className="font-playfair gold-text" style={{ fontSize: 32, fontWeight: 800 }}>{val}</div>
                <div style={{ color: "#9ca3af", fontSize: 11, marginTop: 4, letterSpacing: "0.12em", textTransform: "uppercase" }}>{lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                  style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ color: "#9ca3af", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #D4AF37, transparent)", animation: "bounceGentle 2s ease-in-out infinite" }} />
      </motion.div>
    </section>
  );
}
