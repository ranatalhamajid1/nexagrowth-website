"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X, ArrowRight, Phone, Mail } from "lucide-react";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show widget after scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end gap-3">
      {/* Expanded Panel */}
      {isOpen && (
        <div
          className="glass rounded-[20px] border border-white/10 bg-background/90 backdrop-blur-xl p-5 w-[280px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] font-medium text-foreground">Get In Touch</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Close contact widget"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-[12px] bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 text-foreground text-[13px] transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                <Phone size={14} />
              </div>
              <div className="flex-1">
                <div className="font-medium text-[12px]">WhatsApp</div>
                <div className="text-[10px] text-foreground/40">Quick response</div>
              </div>
              <ArrowRight size={12} className="text-foreground/30 group-hover:text-[#25D366] transition-colors" />
            </a>

            <a
              href="mailto:contact@nexagrowth.xyz"
              className="flex items-center gap-3 p-3 rounded-[12px] bg-accent/5 border border-accent/15 hover:border-accent/30 text-foreground text-[13px] transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                <Mail size={14} />
              </div>
              <div className="flex-1">
                <div className="font-medium text-[12px]">Email</div>
                <div className="text-[10px] text-foreground/40">contact@nexagrowth.xyz</div>
              </div>
              <ArrowRight size={12} className="text-foreground/30 group-hover:text-accent transition-colors" />
            </a>

            <Link
              href="/project-request"
              className="flex items-center justify-center gap-2 p-3 rounded-[12px] bg-white text-[#001f3d] text-[13px] font-medium hover:scale-[1.02] transition-all"
            >
              Request Quote <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(32,210,190,0.3)] transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-foreground/20 text-foreground"
            : "bg-accent text-[#001f3d]"
        }`}
        aria-label="Open contact options"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
