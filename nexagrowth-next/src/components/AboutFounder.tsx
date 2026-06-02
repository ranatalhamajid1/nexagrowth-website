"use client";
import React from "react";
import { User, Award, GraduationCap, Code, Compass, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const STRENGTHS = [
  {
    icon: Code,
    title: "Technical Engineering Competence",
    desc: "We don't build on bloated, slow templates. With a strong Computer Science and web engineering background, we write clean Next.js and Tailwind applications optimized for 95+ Core Web Vitals page speeds."
  },
  {
    icon: Compass,
    title: "Pakistan-Focused Growth Strategy",
    desc: "We deeply study local buyer behaviors, COD purchase cycles, and Urdu-English search intents. Every funnel and campaign is custom-built to convert Pakistani audiences."
  },
  {
    icon: ShieldCheck,
    title: "100% Honest Data Transparency",
    desc: "We reject typical vanity stats, fake counts, and purchased reviews. You get direct access to direct keyword trackers, live Ads manager dashboards, and transparent progress audits."
  }
];

export default function AboutFounder() {
  return (
    <section id="about" className="w-full bg-[#020c1b] py-24 md:py-32 border-t border-white/5 relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-white/3 border border-white/8 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
            <span>Authority & EEAT</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-white mb-6">
            Why partner with NexaGrowth? <em className="italic text-white/58">Our story & growth philosophy</em>.
          </h2>
        </div>

        {/* Part A: Why NexaGrowth Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {STRENGTHS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.title}
                className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-10 w-10 rounded-xl bg-accent-teal/5 text-accent-teal flex items-center justify-center mb-6">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Part B: Founder Story Column Grid */}
        <div className="p-8 md:p-12 rounded-[32px] bg-white/2 border border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-gold/2 rounded-full filter blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left Card: Profile Overview */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-surface border border-white/5">
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-accent-gold uppercase mb-3">Agency Leadership</span>
                <h3 className="font-serif text-[28px] text-white leading-tight mb-2">Rana Muhammad Talha Majid</h3>
                <span className="block text-[13px] text-text-muted font-medium mb-6">Founder & Digital Growth Strategist</span>
                
                {/* Credentials */}
                <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={16} className="text-accent-teal flex-shrink-0" />
                    <span className="text-[12px] text-white/90">BS Computer Science, UET Taxila (2023–2027)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code size={16} className="text-accent-teal flex-shrink-0" />
                    <span className="text-[12px] text-white/90">Web Development Intern, Capxa E-Commerce</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award size={16} className="text-accent-teal flex-shrink-0" />
                    <span className="text-[12px] text-white/90">Media Club Leadership, UET Taxila</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-text-subtle text-[11px] flex items-center gap-1.5">
                <User size={12} />
                <span>EEAT Optimized Strategy Lead</span>
              </div>
            </div>

            {/* Right Card: Quote Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-accent-teal uppercase tracking-widest mb-3">Our Mission Statement</span>
              <blockquote className="font-serif text-[20px] sm:text-[24px] text-white/90 leading-relaxed italic mb-8">
                "I started NexaGrowth because I saw Pakistani businesses losing customers to poor digital presence. We combine technical expertise with real growth strategy — no fluff, no fake numbers, just results."
              </blockquote>
              
              <div className="text-[14px] text-text-muted leading-relaxed flex flex-col gap-4">
                <p>
                  In a market crowded with agencies making cheap promises, we chose a different path. Having trained in computer science and e-commerce engineering, I believe a high-performing agency must understand both the code and the consumer.
                </p>
                <p>
                  NexaGrowth is built to act as a fractional Chief Technology Officer and Growth Strategist for your brand. We engineer high-speed Next.js systems and Shopify funnels, execute organic content clusters, and implement verified search/ads campaigns that guarantee qualified conversions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
