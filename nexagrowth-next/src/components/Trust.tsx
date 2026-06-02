"use client";
import React, { useState } from "react";
import { CheckCircle2, Shield, Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const METRICS = [
  { label: "Proven Experience", val: "Serving since 2024", desc: "Helping local and international clients grow consistently." },
  { label: "Global Footprint", val: "Pakistan base, global scope", desc: "Remote-first workflows supporting businesses anywhere." },
  { label: "Community Value", val: "12+ Free Marketing Tools", desc: "Building practical web widgets used by hundreds daily." },
];

const INDUSTRIES = [
  "E-Commerce", "Restaurants & Dining", "Boutiques & Apparel", 
  "Real Estate", "Clinics & Medical", "Coaches & Instructors", "Local Services"
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Discovery & Deep Audits",
    desc: "We analyze your exact traffic channels, competitors, and technical code. No guesswork — we trace precisely where your potential customers are dropping off in Pakistan or global markets."
  },
  {
    step: "02",
    title: "The Growth Architecture",
    desc: "We map out an editorial SEO blueprint, Shopify funnel upgrades, or ads strategies customized to local purchase behaviors. We prioritize high-impact quick wins first."
  },
  {
    step: "03",
    title: "Precision Implementation",
    desc: "Our senior developers write clean Next.js/Shopify systems and our content team delivers scroll-stopping video edits. Every asset is optimized for lightning-fast speeds."
  },
  {
    step: "04",
    title: "Continuous ROAS & Funnel Audits",
    desc: "We monitor performance, track direct search rankings, analyze Google profile clicks, and run strict conversion rate optimizations. You get transparent progress audits, always."
  }
];

export default function Trust() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="trust" className="w-full bg-[#020c1b] py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-teal/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-white/3 border border-white/8 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
            <span>Verified Trust Layer</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-white mb-6">
            A premium growth system built on <em className="italic text-white/58">real metrics and strict transparency</em>.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed max-w-2xl">
            We don't buy fake reviews, show fake stats, or display stolen brand logos. NexaGrowth stands for premium, verified engineering and honest partnerships.
          </p>
        </div>

        {/* Part A: Metrics & Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          {/* Metrics Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-center">
            {METRICS.map((m, idx) => (
              <div 
                key={m.label} 
                className="group p-6 rounded-2xl bg-white/2 hover:bg-white/4 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal group-hover:scale-105 transition-transform duration-300">
                    <Shield size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium tracking-widest text-text-subtle uppercase mb-1">{m.label}</span>
                    <h3 className="text-[20px] font-semibold text-white mb-2">{m.val}</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-surface border border-white/5 flex flex-col justify-between">
            <div>
              <span className="block text-[11px] font-semibold tracking-widest text-accent-gold uppercase mb-3">Core Specialization</span>
              <h3 className="font-serif text-[28px] text-white leading-tight mb-4">Industries we consistently scale</h3>
              <p className="text-[13px] text-text-muted leading-relaxed mb-8">
                We design premium strategies custom-tailored directly into the customer buying behavior of target niches:
              </p>
              
              <ul className="flex flex-wrap gap-2.5">
                {INDUSTRIES.map((ind) => (
                  <li 
                    key={ind} 
                    className="text-[12px] font-medium text-white/90 bg-white/4 border border-white/8 rounded-full px-4 py-2 hover:bg-white/8 transition-colors duration-300 cursor-default"
                  >
                    {ind}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 flex items-center gap-3">
              <CheckCircle2 size={16} className="text-accent-teal" />
              <span className="text-[12px] font-medium text-text-muted">Zero guesswork. Strict brand confidentiality.</span>
            </div>
          </div>
        </div>

        {/* Part B: Methodology & Process Tabs */}
        <div className="border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
            <div>
              <span className="block text-[11px] font-semibold tracking-widest text-accent-teal uppercase mb-3">Our Work Ethic</span>
              <h3 className="font-serif text-[32px] sm:text-[40px] text-white leading-tight">The 4-stage growth methodology</h3>
            </div>
            <div className="flex gap-2">
              {METHODOLOGY.map((m, idx) => (
                <button
                  key={m.step}
                  onClick={() => setActiveTab(idx)}
                  className={`h-10 w-10 rounded-full border text-[13px] font-semibold flex items-center justify-center transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-white border-white text-[#020c1b] scale-105"
                      : "bg-transparent border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {m.step}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Visual Step Display */}
            <div className="relative aspect-video rounded-3xl bg-surface border border-white/5 overflow-hidden flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent pointer-events-none" />
              <div className="text-center relative z-10">
                <span className="block text-[72px] sm:text-[96px] font-serif text-white/5 leading-none mb-4 group-hover:scale-105 transition-transform duration-500 select-none">
                  {METHODOLOGY[activeTab].step}
                </span>
                <h4 className="text-[22px] font-medium text-white max-w-xs mx-auto mb-2">
                  {METHODOLOGY[activeTab].title}
                </h4>
              </div>
            </div>

            {/* Content Description */}
            <div className="flex flex-col justify-center">
              <span className="block text-[11px] font-bold text-accent-gold uppercase tracking-widest mb-3">Stage {METHODOLOGY[activeTab].step}</span>
              <h4 className="font-serif text-[28px] sm:text-[34px] text-white leading-tight mb-6">
                {METHODOLOGY[activeTab].title}
              </h4>
              <p className="text-[15px] text-text-muted leading-relaxed mb-8">
                {METHODOLOGY[activeTab].desc}
              </p>
              
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent-teal hover:text-accent-teal/85 transition-colors duration-300 w-fit group"
              >
                <span>Scale your funnel today</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
