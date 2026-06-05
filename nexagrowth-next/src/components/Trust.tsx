"use client";
import React, { useState } from "react";
import { CheckCircle2, Shield, Search, ArrowRight, Award, Lock, Truck, ThumbsUp } from "lucide-react";

const METRICS = [
  { label: "Proven Experience", val: "Serving since 2024", desc: "Helping local and international clients grow consistently." },
  { label: "Global Footprint", val: "Pakistan base, global scope", desc: "Remote-first workflows supporting businesses anywhere." },
  { label: "Community Value", val: "50+ Free Tools", desc: "Building practical web widgets used by hundreds daily." },
];

const INDUSTRIES = [
  "E-Commerce", "SaaS & Startups", "Real Estate", 
  "Clinics & Healthcare", "Local Businesses", "Professional Services"
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Discovery & Deep Audits",
    desc: "We analyze your exact traffic channels, competitors, and technical code. No guesswork — we trace precisely where your potential customers are dropping off."
  },
  {
    step: "02",
    title: "The Growth Architecture",
    desc: "We map out an editorial SEO blueprint, custom SaaS/Shopify architecture, or automation workflows customized to your target audience."
  },
  {
    step: "03",
    title: "Precision Implementation",
    desc: "Our senior developers write clean Next.js/React code and construct custom AI/database automations. Every asset is optimized for lightning-fast speeds."
  },
  {
    step: "04",
    title: "Continuous Optimization",
    desc: "We monitor performance, track search rankings, verify database logs, and run strict conversion rate optimizations. You get transparent metrics always."
  }
];

const TECH_PARTNERS = [
  { name: "VERCEL", logo: "▲" },
  { name: "SHOPIFY PARTNER", logo: "🛒" },
  { name: "GOOGLE CLOUD", logo: "☁️" },
  { name: "STRIPE", logo: "💳" },
  { name: "NEXT.JS", logo: "N" },
  { name: "OPENAI PARTNER", logo: "🤖" }
];

export default function Trust() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="trust" className="w-full bg-background py-24 md:py-32 border-t border-glass-border relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-teal/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-glass-bg border border-glass-border rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
            <span>Verified Trust Layer</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-foreground mb-6">
            A premium growth system built on <em className="italic text-foreground/60">real metrics and strict transparency</em>.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed max-w-2xl">
            We don't buy fake reviews or show fake stats. NexaGrowth stands for premium, verified engineering and honest partnerships.
          </p>
        </div>

        {/* Client / Tech Logos strip */}
        <div className="mb-20 p-8 rounded-3xl glass border border-glass-border overflow-hidden">
          <h3 className="text-center text-[10px] font-bold text-text-subtle tracking-[0.2em] uppercase mb-8">
            TRUSTED PARTNERS & TECHNOLOGY ECOSYSTEM
          </h3>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-2">
            <div 
              className="flex gap-16 w-max whitespace-nowrap hover:[animation-play-state:paused]"
              style={{
                animation: "marqueeScroll 25s linear infinite",
              }}
            >
              {[...TECH_PARTNERS, ...TECH_PARTNERS, ...TECH_PARTNERS].map((partner, index) => (
                <div 
                  key={`${partner.name}-${index}`}
                  className="flex items-center gap-2 text-foreground/45 hover:text-foreground/80 transition-colors duration-300 select-none cursor-default min-w-[150px] justify-center flex-shrink-0"
                >
                  <span className="text-xl font-serif">{partner.logo}</span>
                  <span className="text-[12px] font-bold tracking-widest font-sans">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantees & Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 rounded-3xl glass border border-glass-border hover:border-accent-teal/20 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
              <Award size={20} />
            </div>
            <h4 className="text-[17px] font-serif font-normal text-foreground mb-3">95+ PageSpeed Guarantee</h4>
            <p className="text-[13px] text-text-muted leading-relaxed">
              We guarantee a mobile-responsive, clean Next.js/React build that scores 95+ on Google Lighthouse audits. No slow loading times.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass border border-glass-border hover:border-accent-gold/20 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-6">
              <Lock size={20} />
            </div>
            <h4 className="text-[17px] font-serif font-normal text-foreground mb-3">Enterprise Security Badges</h4>
            <p className="text-[13px] text-text-muted leading-relaxed">
              Every custom application includes SSL configuration, automated database backups, secure authentication protocols, and GDPR compliance.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass border border-glass-border hover:border-accent-teal/20 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
              <Truck size={20} />
            </div>
            <h4 className="text-[17px] font-serif font-normal text-foreground mb-3">Delivery & Launch Commitment</h4>
            <p className="text-[13px] text-text-muted leading-relaxed">
              We stick to strict sprint deadlines. Receive clickable prototypes in weeks, bi-weekly demo calls, and post-launch support.
            </p>
          </div>
        </div>

        {/* Part A: Metrics & Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          {/* Metrics Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-center">
            {METRICS.map((m, idx) => (
              <div 
                key={m.label} 
                className="group p-6 rounded-2xl bg-glass-bg hover:bg-glass-hover border border-glass-border transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal group-hover:scale-105 transition-transform duration-300">
                    <Shield size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium tracking-widest text-text-subtle uppercase mb-1">{m.label}</span>
                    <h3 className="text-[20px] font-semibold text-foreground mb-2">{m.val}</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass border border-glass-border flex flex-col justify-between">
            <div>
              <span className="block text-[11px] font-semibold tracking-widest text-accent-gold uppercase mb-3">Core Specialization</span>
              <h3 className="font-serif text-[28px] text-foreground leading-tight mb-4">Industries we scale</h3>
              <p className="text-[13px] text-text-muted leading-relaxed mb-8">
                We design premium growth strategies custom-tailored directly into the customer buying behavior of target niches:
              </p>
              
              <ul className="flex flex-wrap gap-2.5">
                {INDUSTRIES.map((ind) => (
                  <li 
                    key={ind} 
                    className="text-[12px] font-medium text-foreground/90 bg-glass-bg border border-glass-border hover:bg-glass-hover transition-colors duration-300 cursor-default rounded-full px-4 py-2"
                  >
                    {ind}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-glass-border flex items-center gap-3">
              <CheckCircle2 size={16} className="text-accent-teal" />
              <span className="text-[12px] font-medium text-text-muted">Zero guesswork. Strict brand confidentiality.</span>
            </div>
          </div>
        </div>

        {/* Part B: Methodology & Process Tabs */}
        <div className="border-t border-glass-border pt-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
            <div>
              <span className="block text-[11px] font-semibold tracking-widest text-accent-teal uppercase mb-3">Our Work Ethic</span>
              <h3 className="font-serif text-[32px] sm:text-[40px] text-foreground leading-tight">The 4-stage growth methodology</h3>
            </div>
            <div className="flex gap-2">
              {METHODOLOGY.map((m, idx) => (
                <button
                  key={m.step}
                  onClick={() => setActiveTab(idx)}
                  className={`h-10 w-10 rounded-full border text-[13px] font-semibold flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? "bg-foreground border-foreground text-background scale-105"
                      : "bg-transparent border-glass-border text-foreground/60 hover:border-foreground/20 hover:text-foreground"
                  }`}
                >
                  {m.step}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Visual Step Display */}
            <div className="relative aspect-video rounded-3xl glass border border-glass-border overflow-hidden flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent pointer-events-none" />
              <div className="text-center relative z-10">
                <span className="block text-[72px] sm:text-[96px] font-serif text-foreground/5 leading-none mb-4 group-hover:scale-105 transition-transform duration-500 select-none">
                  {METHODOLOGY[activeTab].step}
                </span>
                <h4 className="text-[22px] font-medium text-foreground max-w-xs mx-auto mb-2">
                  {METHODOLOGY[activeTab].title}
                </h4>
              </div>
            </div>

            {/* Content Description */}
            <div className="flex flex-col justify-center">
              <span className="block text-[11px] font-bold text-accent-gold uppercase tracking-widest mb-3">Stage {METHODOLOGY[activeTab].step}</span>
              <h4 className="font-serif text-[28px] sm:text-[34px] text-foreground leading-tight mb-6">
                {METHODOLOGY[activeTab].title}
              </h4>
              <p className="text-[15px] text-text-muted leading-relaxed mb-8">
                {METHODOLOGY[activeTab].desc}
              </p>
              
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent-teal hover:text-accent-teal/85 transition-colors duration-300 w-fit group"
              >
                <span>Scale your brand today</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
