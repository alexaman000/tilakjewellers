"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  const whatsappUrl = `https://wa.me/918603740333?text=${encodeURIComponent(
    "Hello Tilak Jewellers,\nI am interested in your jewellery. Please help me."
  )}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: -(Math.random() * 1.5 + 0.5),
      opacity: 0,
      fadeSpeed: Math.random() * 0.01 + 0.005,
    });

    for (let i = 0; i < 80; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.opacity = Math.random() * 0.8;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeSpeed;

        if (p.opacity > 0.9) p.fadeSpeed = -Math.abs(p.fadeSpeed);
        if (p.opacity < 0) p.fadeSpeed = Math.abs(p.fadeSpeed);

        if (p.y < -20) {
          particlesRef.current[i] = createParticle();
          return;
        }

        // Draw glowing gold particle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(245, 204, 61, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${p.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Diamond sparkle effect on some particles
        if (p.size > 3.5) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.size * 2);
          ctx.lineTo(p.x + p.size * 0.5, p.y);
          ctx.lineTo(p.x, p.y + p.size * 2);
          ctx.lineTo(p.x - p.size * 0.5, p.y);
          ctx.closePath();
          ctx.fillStyle = `rgba(255, 248, 220, ${p.opacity * 0.8})`;
          ctx.fill();
        }
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1208]"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-banner.png"
          alt="Tilak Jewellers Hero"
          fill
          className="object-cover opacity-30"
          priority
          onError={() => {}} // fail silently
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/30" />
      </div>

      {/* Decorative Gold Rings */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-[#D4AF37]/10 animate-spin-slow hidden xl:block" />
      <div className="absolute top-32 right-32 w-72 h-72 rounded-full border border-[#D4AF37]/15 animate-spin-slow hidden xl:block" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-[#D4AF37]/10 animate-spin-slow hidden xl:block" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass border border-[#D4AF37]/30 rounded-full px-5 py-2.5 mb-8"
          >
            <Sparkles className="text-[#D4AF37]" size={16} />
            <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">
              Premium Handcrafted Jewellery Since 1996
            </span>
            <Sparkles className="text-[#D4AF37]" size={16} />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Celebrate Every{" "}
            <span className="gold-shine">Moment</span>
            <br />
            with{" "}
            <span className="italic text-[#D4AF37]">Timeless</span>
            <br />
            Jewellery
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Discover handcrafted{" "}
            <span className="text-[#D4AF37] font-medium">Gold, Silver</span> and{" "}
            <span className="text-[#D4AF37] font-medium">Diamond</span> jewellery crafted
            with purity and elegance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#collections"
              id="hero-shop-now"
              className="btn-gold flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold shadow-gold-lg"
            >
              <ShoppingBag size={20} />
              Shop Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1"
            >
              <FaWhatsapp size={20} />
              Contact on WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: "28+", label: "Years of Trust" },
              { value: "10K+", label: "Happy Customers" },
              { value: "5000+", label: "Designs" },
              { value: "100%", label: "Hallmarked Gold" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-3xl font-bold gold-text">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-bounce-gentle" />
      </motion.div>
    </section>
  );
}
