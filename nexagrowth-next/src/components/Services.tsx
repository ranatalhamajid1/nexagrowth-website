"use client";
import React from "react";
import { Search, Code, ShoppingCart, Film, Megaphone, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    tag: "Visibility Systems",
    desc: "Rank on Google. Get found by customers actively searching for your product or service in Pakistan and globally. We build authoritative search channels that deliver consistent organic traffic without paid ads.",
    bulletPoints: ["Comprehensive search cluster audits", "Local SEO & Google Business optimization", "High-authority content architecture"],
    color: "teal"
  },
  {
    icon: Code,
    title: "Web Development",
    tag: "Engineering",
    desc: "Clean, fast, conversion-optimized websites built completely from scratch using Next.js, React, and modern tech. Zero bulky templates. Zero sluggish code block bloat. Just pure speed.",
    bulletPoints: ["Lightning-fast Next.js architecture", "Mobile-first conversion design", "Enterprise-grade clean codebase"],
    color: "teal"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Systems",
    tag: "E-Commerce",
    desc: "Full online Shopify or custom store setup — designed for frictionless checkout flows, seamless payment gateways integration (Cod, PayFast, Nayapay), and easy inventory management.",
    bulletPoints: ["High-converting product page optimization", "Frictionless checkout pipelines", "COD & local payment integrations"],
    color: "teal"
  },
  {
    icon: Film,
    title: "Video Editing & Production",
    tag: "Social Media Media",
    desc: "Scroll-stopping commercial-grade video edits for Reels, YouTube, TikTok, and paid social ads. Fast turnaround schedules and professional audio/visual design built to hold audience attention.",
    bulletPoints: ["High-retention captioning & pacing", "Premium color grading & sound synthesis", "Short-form hook-based sequencing"],
    color: "gold"
  },
  {
    icon: Megaphone,
    title: "Performance Ads Marketing",
    tag: "Paid Advertising",
    desc: "Facebook, Instagram, and Google Ads fully managed by growth experts who deeply analyze Pakistani consumer psychology and purchasing behaviors. Maximize direct ROAS, minimize waste.",
    bulletPoints: ["Data-backed consumer funnel research", "High-converting ad creative structures", "Weekly analytical transparent auditing"],
    color: "gold"
  },
  {
    icon: Palette,
    title: "Premium Branding",
    tag: "Branding",
    desc: "Visual identity, logos, color typography schemes, and complete guidelines designed to elevate your brand from average to the absolute premium, trusted option in your industry.",
    bulletPoints: ["Custom luxury brand logo assets", "Complete identity systems blueprints", "Sleek typography & visual guides"],
    color: "gold"
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#020c1b] py-24 md:py-32 border-t border-white/5 relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-white/3 border border-white/8 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
            <span>Our Service Architecture</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-white mb-6">
            Engineering growth channels for <em className="italic text-white/58">brands serious about scaling</em>.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed max-w-2xl">
            We don't sell cheap, generic templates. We build modern digital infrastructure and paid campaigns that convert users into high-lifetime-value customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const accentClass = s.color === "teal" 
              ? "group-hover:border-accent-teal/30 group-hover:shadow-[0_15px_40px_-20px_rgba(51,214,200,0.15)]" 
              : "group-hover:border-accent-gold/30 group-hover:shadow-[0_15px_40px_-20px_rgba(245,183,49,0.12)]";

            const iconAccentClass = s.color === "teal"
              ? "bg-accent-teal/5 text-accent-teal group-hover:bg-accent-teal/10"
              : "bg-accent-gold/5 text-accent-gold group-hover:bg-accent-gold/10";

            return (
              <div
                key={s.title}
                className={`group relative p-8 rounded-3xl bg-surface border border-white/5 transition-all duration-500 flex flex-col justify-between ${accentClass}`}
              >
                {/* Visual border spotlight overlay */}
                <div 
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  style={{
                    padding: "1px",
                    background: s.color === "teal" 
                      ? "linear-gradient(135deg, rgba(51,214,200,0.2) 0%, transparent 60%)" 
                      : "linear-gradient(135deg, rgba(245,183,49,0.15) 0%, transparent 60%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />

                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${iconAccentClass}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-text-subtle">
                      {s.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-[22px] sm:text-[24px] text-white leading-tight mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Bullets & Action */}
                <div>
                  <ul className="flex flex-col gap-2.5 mb-8 border-t border-white/5 pt-6">
                    {s.bulletPoints.map((bp) => (
                      <li key={bp} className="text-[12px] text-white/80 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${s.color === "teal" ? "bg-accent-teal" : "bg-accent-gold"}`} />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/90 hover:text-white transition-colors duration-300 group/link"
                  >
                    <span>Request growth audit</span>
                    <ArrowRight size={13} className={`transform group-hover/link:translate-x-0.5 transition-transform duration-300 ${s.color === "teal" ? "text-accent-teal" : "text-accent-gold"}`} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
