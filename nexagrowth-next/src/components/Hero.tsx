"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const resize = () => {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      createParticles();
    };

    window.addEventListener("resize", resize, { passive: true });

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      o: number;
      hue: number;
    }

    let particles: Particle[] = [];

    const createParticles = () => {
      const density = W < 768 ? 35000 : 18000;
      const n = Math.floor((W * H) / density);
      particles = Array.from({ length: Math.min(n, 85) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.4 + 0.15,
        hue: Math.random() > 0.5 ? 185 : 201, // teal or navy accent hue
      }));
    };

    createParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animId: number;

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, W, H);

      const mouse = mouseRef.current;

      particles.forEach((p, i) => {
        // Repel from mouse pointer
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 0.45;
          p.vy += (dy / dist) * force * 0.45;
        }

        // Limit speed
        const speedLimit = 1.0;
        p.vx = Math.min(Math.max(p.vx, -speedLimit), speedLimit);
        p.vy = Math.min(Math.max(p.vy, -speedLimit), speedLimit);

        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.o})`;
        ctx.fill();

        // Connect particles that are close
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ddx = p.x - q.x;
          const ddy = p.y - q.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);

          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `hsla(${p.hue}, 70%, 65%, ${0.12 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020c1b] px-6 py-24 md:py-32"
    >
      {/* Cinematic Looping Video Backdrop with fallback mesh gradient */}
      <div className="absolute inset-0 w-full h-full z-1 overflow-hidden bg-[#020c1b] mesh-gradient-fallback">
        <video
          onCanPlayThrough={() => setVideoLoaded(true)}
          className={`absolute top-50% left-50% min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-[2000ms] ${
            videoLoaded ? "opacity-38" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Shimmering interactive particle canvas */}
        <canvas ref={canvasRef} id="hero-canvas" className="absolute inset-0 w-full h-full pointer-events-none" />
        {/* Soft luxury vignettes overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,12,27,0.4)_60%,#020c1b_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-rgba(2,12,27,0.3)_0% via-transparent_40% to-[#020c1b]_95% pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Centered Capsule Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 bg-accent-teal/8 border border-accent-teal/25 rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-wider uppercase text-accent-teal mb-8 shadow-[0_0_15px_rgba(51,214,200,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-accent-teal pulse-glow" />
          <span>Pakistan's Digital Growth Partner</span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-[44px] sm:text-[64px] md:text-[84px] leading-[1.05] font-normal tracking-tight text-white mb-6 max-w-3xl"
        >
          We don't just market. <br />
          <span className="font-serif italic text-white/58">We grow you.</span>
        </motion.h1>

        {/* Subheadline paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed font-light text-text-muted max-w-2xl mb-12"
        >
          SEO, paid ads, web development & video editing — built for Pakistani businesses that are serious about results. No fluff. No fake numbers. Just growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-[480px] sm:max-w-none mb-16"
        >
          <MagneticButton>
            <a
              href="#contact"
              onClick={handleConsultationClick}
              className="w-full sm:w-auto text-[16px] font-semibold text-[#020c1b] bg-white rounded-full px-9 py-4 flex items-center justify-center transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1),_0_4px_20px_rgba(0,0,0,0.25)] hover:translate-y-[-2px] hover:shadow-[0_15px_35px_-10px_rgba(255,255,255,0.2),_0_8px_30px_rgba(0,0,0,0.35)] group"
            >
              <span>Start Free Consultation</span>
              <span className="ml-2 font-bold transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </MagneticButton>

          <a
            href="#work"
            onClick={handleWorkClick}
            className="w-full sm:w-auto text-[16px] font-medium text-white bg-white/2 hover:bg-white/5 border border-white/15 hover:border-white/30 backdrop-blur-md rounded-full px-8 py-4 flex items-center justify-center gap-2.5 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <span className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-300">
              <Play size={8} fill="white" className="ml-0.5" />
            </span>
            <span>See Our Work</span>
          </a>
        </motion.div>
      </div>

      {/* Floating scroll hint */}
      <div className="absolute bottom-10 right-10 hidden sm:flex flex-col items-center gap-2 text-text-subtle text-[11px] tracking-widest uppercase pointer-events-none">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-text-subtle relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-accent-teal rounded-full animate-[scrollPip_2s_ease-in-out_infinite]" />
        </div>
        <span>Scroll</span>
      </div>

      <style jsx global>{`
        @keyframes scrollPip {
          0% { top: -8px; opacity: 0; }
          30% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
