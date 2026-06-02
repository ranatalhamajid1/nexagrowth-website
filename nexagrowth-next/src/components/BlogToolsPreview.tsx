"use client";
import React from "react";
import { BookOpen, Wrench, Search, ShieldAlert, Cpu, QrCode, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

const RECENT_POSTS = [
  {
    title: "How Local SEO is Changing for Pakistani Businesses in 2026",
    excerpt: "Discover the critical keyword strategy modifications needed to rank in map clusters in Lahore, Karachi, and Islamabad.",
    readTime: "5 min read",
    date: "May 28, 2026",
    category: "SEO Strategy"
  },
  {
    title: "Why Website Page Speed is Directly Killing Your Meta Ads ROAS",
    excerpt: "Sluggish load times drop conversion rates by up to 40%. Learn how engineering high-speed landing pages solves it.",
    readTime: "7 min read",
    date: "May 15, 2026",
    category: "Performance"
  },
  {
    title: "The Frictionless Shopify Funnel: COD Payment Optimization Hacks",
    excerpt: "Reduce cart abandonment rates by up to 25% by engineering cash-on-delivery pipeline modifications.",
    readTime: "6 min read",
    date: "April 30, 2026",
    category: "E-Commerce"
  }
];

const PREVIEW_TOOLS = [
  {
    icon: Search,
    name: "Free SEO Auditor",
    desc: "Scan your page metadata and speed profiles instantly.",
    href: "/tools/"
  },
  {
    icon: ShieldAlert,
    name: "Secure Password Generator",
    desc: "Generate highly secure cryptographic phrases in 1-click.",
    href: "/tools/"
  },
  {
    icon: QrCode,
    name: "Custom QR Code Generator",
    desc: "Download high-resolution vector QR codes for print.",
    href: "/tools/"
  },
  {
    icon: Cpu,
    name: "Web Speed Index Scanner",
    desc: "Test LCP, FID, and CLS performance targets in real time.",
    href: "/tools/"
  }
];

export default function BlogToolsPreview() {
  return (
    <section id="resources" className="w-full bg-[#020c1b] py-24 md:py-32 border-t border-white/5 relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* PART A: 14+ Tools Preview */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent-teal/5 border border-accent-teal/20 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent-teal mb-6">
                <Wrench size={12} />
                <span>14+ Free Online Utilities</span>
              </div>
              <h2 className="font-serif text-[36px] sm:text-[48px] font-normal leading-tight text-white mb-4">
                SaaS-quality web widgets <em className="italic text-white/58">built for immediate utility</em>.
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                We've engineered 14+ completely free, lightning-fast utilities to audit your SEO, generate assets, or analyze code with zero signups required.
              </p>
            </div>
            
            <a 
              href="/tools/" 
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 hover:text-white bg-white/3 border border-white/8 rounded-full px-6 py-3 hover:bg-white/6 hover:translate-y-[-1px] transition-all duration-300 w-fit shrink-0"
            >
              <span>Explore all 14+ free tools</span>
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PREVIEW_TOOLS.map((t) => {
              const Icon = t.icon;
              return (
                <a
                  key={t.name}
                  href={t.href}
                  className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent-teal/25 hover:bg-white/3 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-accent-teal/5 text-accent-teal flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-[16px] font-semibold text-white mb-2 group-hover:text-accent-teal transition-colors duration-300">
                      {t.name}
                    </h3>
                    <p className="text-[12px] text-text-muted leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                  <div className="mt-8 text-[11px] font-semibold text-text-subtle group-hover:text-white flex items-center gap-1 transition-colors duration-300">
                    <span>Run widget</span>
                    <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-80" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* PART B: 25+ Blog Hub Preview */}
        <div className="border-t border-white/5 pt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent-gold/5 border border-accent-gold/25 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent-gold mb-6">
                <BookOpen size={12} />
                <span>NexaGrowth Intelligence</span>
              </div>
              <h2 className="font-serif text-[36px] sm:text-[48px] font-normal leading-tight text-white mb-4">
                Latest strategies from <em className="italic text-white/58">our digital research hub</em>.
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Actionable digital growth insights, sitemaps architectures, and technical analysis drafted by digital strategic professionals.
              </p>
            </div>
            
            <a 
              href="/blog/" 
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 hover:text-white bg-white/3 border border-white/8 rounded-full px-6 py-3 hover:bg-white/6 hover:translate-y-[-1px] transition-all duration-300 w-fit shrink-0"
            >
              <span>Visit blog hub (25+ posts)</span>
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECENT_POSTS.map((post) => (
              <a
                key={post.title}
                href="/blog/"
                className="group p-8 rounded-3xl bg-surface border border-white/5 hover:border-accent-gold/20 hover:bg-white/3 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-semibold text-accent-gold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-text-subtle flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-[20px] sm:text-[22px] text-white leading-snug mb-4 group-hover:text-accent-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-[12px] text-text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-text-subtle group-hover:text-white transition-all duration-300">
                  <span>Read full analysis</span>
                  <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-80" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
