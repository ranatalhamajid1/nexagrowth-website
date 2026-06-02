"use client";
import React from "react";
import { ArrowUpRight, FolderOpen, Tag, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    name: "Lahore Restaurant Brand",
    type: "Web Development + SEO",
    tag: "Concept Strategy",
    desc: "Redesigned visual online presence for a high-end local Lahore dining brand. Strategized a lightning-fast, high-converting digital storefront, Google Business Profile optimization, and local geo-targeted SEO structures to drive physical and online reservations.",
    outcomes: ["SEO map ranking plan", "Frictionless reservation interface", "Optimized local search clusters"],
    status: "Strategy Concept",
    color: "teal"
  },
  {
    num: "02",
    name: "Islamabad Boutique",
    type: "E-Commerce + Social Media Ads",
    tag: "Concept Strategy",
    desc: "A premium fashion storefront strategy. Built full Shopify mock configurations featuring custom styling, detailed product catalog structures, a creative photography brief template, and a targeted Facebook Ads campaign model mapped directly to local purchasing behaviors.",
    outcomes: ["Shopify store funnel setup", "Meta Ads ad creative roadmap", "COD shipping workflow structures"],
    status: "Strategy Concept",
    color: "gold"
  },
  {
    num: "03",
    name: "NexaGrowth Platform",
    type: "Branding + Web Engineering + SEO",
    tag: "Active Brand",
    desc: "Our own digital agency platform engineered completely from the ground up. Crafted logo guidelines, optimized Next.js App Router architectures, published 25+ actionable marketing blog articles, and coded 14+ free online analytics tools.",
    outcomes: ["14+ custom SaaS tools", "95+ global page speed index", "Natively indexed search ranks"],
    status: "Live & Active Portfolio",
    color: "teal"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="w-full bg-[#020c1b] py-24 md:py-32 border-t border-white/5 relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-white/3 border border-white/8 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
            <span>Redefining Case Studies</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-white mb-6">
            Results speak louder — <em className="italic text-white/58">see our selected concepts</em>.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed max-w-2xl">
            We don't manufacture fake testimonials. We let our actual engineering, strategies, and platform concepts demonstrate our capabilities.
          </p>
        </div>

        {/* Projects Cards Column */}
        <div className="flex flex-col gap-12">
          {PROJECTS.map((p) => {
            const isLive = p.status.includes("Live");
            const outlineBorder = p.color === "teal"
              ? "hover:border-accent-teal/20"
              : "hover:border-accent-gold/20";
            
            const badgeClass = isLive
              ? "bg-accent-teal/10 border-accent-teal/30 text-accent-teal"
              : "bg-white/4 border-white/10 text-text-muted";

            return (
              <div
                key={p.name}
                className={`group p-8 md:p-12 rounded-[32px] bg-surface border border-white/5 hover:bg-white/3 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative overflow-hidden ${outlineBorder}`}
              >
                {/* Number Backdrop */}
                <div className="absolute right-8 top-6 font-serif text-[110px] leading-none text-white/[0.02] select-none group-hover:scale-105 transition-transform duration-500 font-bold hidden md:block">
                  {p.num}
                </div>

                {/* Info Block */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider border rounded-full px-3.5 py-1 ${badgeClass}`}>
                        {p.status}
                      </span>
                      <span className="text-[11px] font-medium text-text-subtle">
                        {p.type}
                      </span>
                    </div>

                    {/* Name & Desc */}
                    <h3 className="font-serif text-[28px] sm:text-[36px] text-white leading-tight mb-4">
                      {p.name}
                    </h3>
                    <p className="text-[14px] text-text-muted leading-relaxed max-w-xl mb-8">
                      {p.desc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div>
                    <a
                      href={isLive ? "/" : "#contact"}
                      className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white group-hover:text-white/90 transition-colors duration-300 w-fit"
                    >
                      <span>{isLive ? "Visit live platform" : "Request custom strategy brief"}</span>
                      <span className="w-8 h-8 rounded-full bg-white/4 group-hover:bg-white/8 flex items-center justify-center transition-colors duration-300">
                        <ArrowUpRight size={14} className="text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Outcomes Grid */}
                <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-white/2 border border-white/5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[12px] font-semibold text-accent-gold uppercase tracking-widest mb-6 flex items-center gap-2">
                      <FolderOpen size={13} />
                      <span>Target Deliverables Mapped</span>
                    </h4>
                    
                    <ul className="flex flex-col gap-4">
                      {p.outcomes.map((out) => (
                        <li key={out} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-accent-teal mt-0.5 flex-shrink-0" />
                          <span className="text-[13px] text-white/90 leading-normal">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-text-subtle text-[11px]">
                    <Tag size={12} />
                    <span>Outcome-focused engineering model</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
