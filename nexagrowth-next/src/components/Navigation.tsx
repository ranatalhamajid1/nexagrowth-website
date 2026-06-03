"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Custom Magnetic wrapper for high-fidelity conversion optimization
function Magnetic({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150, mass: 0.1 });
  const springY = useSpring(y, { damping: 15, stiffness: 150, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div style={{ x: springX, y: springY }} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.div>
    </div>
  );
}

import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  activeRoute: "home" | "services" | "portfolio" | "case-studies" | "about" | "other";
}

export default function Navigation({ activeRoute }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClass = (route: string) => {
    const base = "text-[13.5px] font-normal transition-colors duration-300";
    return activeRoute === route
      ? `${base} text-foreground font-medium`
      : `${base} text-foreground/70 hover:text-foreground`;
  };

  return (
    <>
      {/* ── Navbar ── */}
      <header className="w-full relative z-[90]">
        <nav className="mx-auto max-w-[1300px] w-full px-6 md:px-10 py-5 flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="font-serif text-[26px] font-normal text-foreground flex items-baseline gap-0.5 select-none hover:scale-[1.01] transition-transform duration-300">
            NexaGrowth<span className="text-[11px] font-sans font-normal text-foreground/50 align-super select-none">®</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none">
            <li><Link href="/services" className={getLinkClass("services")}>Services</Link></li>
            <li><Link href="/portfolio" className={getLinkClass("portfolio")}>Work</Link></li>
            <li><Link href="/case-studies" className={getLinkClass("case-studies")}>Case Studies</Link></li>
            <li><Link href="/pricing" className={getLinkClass("other")}>Pricing</Link></li>
            <li><Link href="/blog" className={getLinkClass("other")}>Resources</Link></li>
            <li><Link href="/tools" className={getLinkClass("other")}>Tools</Link></li>
            <li><Link href="/about" className={getLinkClass("about")}>About</Link></li>
            <li><a href="/#contact" className="text-[13.5px] font-normal text-foreground/70 hover:text-foreground transition-colors duration-300">Contact</a></li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Magnetic>
              <a 
                href="/#contact" 
                className="inline-flex text-[13.5px] font-medium text-foreground px-5.5 py-2.5 rounded-full glass hover:bg-foreground/5 transition-all duration-300 shadow-sm border border-glass-border"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
              >
                Get Free Audit
              </a>
            </Magnetic>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span className="block w-[22px] h-[1.5px] bg-foreground rounded-sm" />
              <span className="block w-[22px] h-[1.5px] bg-foreground rounded-sm" />
              <span className="block w-[22px] h-[1.5px] bg-foreground rounded-sm" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-[24px] -webkit-backdrop-blur-[24px] transition-all duration-500 origin-center ${
          mobileMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Mobile Header Row */}
        <div className="absolute top-6 left-8 right-8 flex items-center justify-between w-[calc(100%-4rem)]">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-transparent border-none text-foreground/60 text-[32px] cursor-pointer"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`font-serif text-[32px] transition-colors ${activeRoute === 'home' ? 'text-foreground font-medium' : 'text-foreground/70 hover:text-foreground'}`}>Home</Link>
        <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={`font-serif text-[32px] transition-colors ${activeRoute === 'services' ? 'text-foreground font-medium' : 'text-foreground/70 hover:text-foreground'}`}>Services</Link>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`font-serif text-[32px] transition-colors ${activeRoute === 'about' ? 'text-foreground font-medium' : 'text-foreground/70 hover:text-foreground'}`}>About</Link>
        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className={`font-serif text-[32px] transition-colors ${activeRoute === 'other' ? 'text-foreground font-medium' : 'text-foreground/70 hover:text-foreground'}`}>Journal</Link>
        <Link href="/tools" onClick={() => setMobileMenuOpen(false)} className={`font-serif text-[32px] transition-colors ${activeRoute === 'other' ? 'text-foreground font-medium' : 'text-foreground/70 hover:text-foreground'}`}>Tools</Link>
        <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className={`font-serif text-[32px] transition-colors ${activeRoute === 'portfolio' ? 'text-foreground font-medium' : 'text-foreground/70 hover:text-foreground'}`}>Work</Link>
        <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className={`font-serif text-[32px] transition-colors text-foreground/70 hover:text-foreground`}>Pricing</Link>
        <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="font-serif text-[32px] text-foreground/70 hover:text-foreground transition-colors">Contact</a>
      </div>

      {/* ── WhatsApp Persistent Floating Button ── */}
      <a
        className="wa-float"
        href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20book%20a%20free%20growth%20audit!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
