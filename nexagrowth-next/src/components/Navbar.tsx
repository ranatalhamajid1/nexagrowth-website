"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const NAV_LINKS = [
  { label: "Services", href: "#services", isExternal: false },
  { label: "Work", href: "#work", isExternal: false },
  { label: "Case Studies", href: "/case-studies.html", isExternal: true },
  { label: "Resources", href: "/blog/", isExternal: true },
  { label: "Tools", href: "/tools/", isExternal: true },
  { label: "About", href: "/about.html", isExternal: true },
  { label: "Contact", href: "#contact", isExternal: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) return;
    e.preventDefault();
    setMobileOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#020c1b]/70 border-white/8 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl text-white tracking-tight hover:scale-[1.02] transition-transform duration-300"
        >
          NexaGrowth<span className="text-[12px] align-super opacity-80 ml-0.5">®</span>
        </Link>

        {/* Centered Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
              className="relative text-[14px] font-sans text-text-muted hover:text-white px-4 py-2 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact", false)}
              className="relative inline-flex items-center justify-center text-[13px] font-medium tracking-wide text-white bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/20 backdrop-blur-md rounded-full px-6 py-2.5 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:translate-y-[-1px] active:translate-y-0"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)"
              }}
            >
              Get Free Audit
            </a>
          </MagneticButton>
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex lg:hidden h-10 w-10 rounded-full border border-white/8 hover:border-white/25 items-center justify-center text-white bg-white/3 hover:bg-white/6 transition-all duration-300"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-[#020c1b]/98 backdrop-blur-xl border-t border-white/8 lg:hidden flex flex-col transition-all duration-500 origin-top ${
          mobileOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-8 gap-1">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.label}
              className="border-b border-white/4"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                className="flex items-center justify-between text-2xl font-serif py-4 text-text-muted hover:text-white transition-colors duration-300"
              >
                <span>{link.label}</span>
                {link.isExternal && <ArrowUpRight size={16} className="opacity-50" />}
              </a>
            </li>
          ))}
          <li className="mt-8">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact", false)}
              className="flex items-center justify-center w-full text-center py-4 bg-white text-[#001f3d] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Get Free Audit
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
