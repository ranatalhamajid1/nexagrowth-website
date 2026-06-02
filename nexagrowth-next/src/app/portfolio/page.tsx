"use client";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, ArrowRight } from "lucide-react";
import { useTheme } from "../../components/ThemeProvider";

const getGlowColor = (cat: string, theme: string) => {
  const isDark = theme === "dark";
  const c = cat.toLowerCase();
  if (c.includes("ads")) {
    return isDark 
      ? "radial-gradient(circle, rgba(32, 210, 190, 0.16) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("content")) {
    return isDark 
      ? "radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("web")) {
    return isDark 
      ? "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("influencer")) {
    return isDark 
      ? "radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(255,255,255,0) 70%)";
  }
  return isDark 
    ? "radial-gradient(circle, rgba(32, 210, 190, 0.12) 0%, rgba(0,0,0,0) 70%)" 
    : "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(255,255,255,0) 70%)";
};

interface Project {
  id: number;
  cat: "ads" | "content" | "web" | "influencer";
  catLabel: string;
  title: string;
  desc: string;
  result: string;
  gradient: string;
  tags: string[];
}

export default function PortfolioPage() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<"all" | "ads" | "content" | "web" | "influencer">("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "ads", label: "Paid Ads" },
    { id: "content", label: "Content" },
    { id: "web", label: "Web Dev" },
    { id: "influencer", label: "Influencer" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      cat: "ads",
      catLabel: "Paid Ads",
      title: "LuxeVibe Fashion",
      desc: "Meta & Google campaigns delivering massive revenue growth in 3 months for a premium fashion brand in Lahore.",
      result: "+340% ROAS",
      gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      tags: ["340% ROAS", "PKR 5.5M Rev", "3 Months"],
    },
    {
      id: 2,
      cat: "content",
      catLabel: "Content",
      title: "GreenEarth Organics",
      desc: "Organic engagement and reach multiplied in 6 months through a full-scale content strategy and Urdu writing scripts.",
      result: "500K Reach",
      gradient: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
      tags: ["50× Growth", "500K Reach", "6 Months"],
    },
    {
      id: 3,
      cat: "web",
      catLabel: "Web Dev",
      title: "NexaBuild SaaS",
      desc: "A speed-optimized, modern conversion-rate optimized redesign, boosting signup conversion within 30 days.",
      result: "+220% CVR",
      gradient: "linear-gradient(135deg, #0369a1 0%, #38bdf8 100%)",
      tags: ["+220% CVR", "30 Days", "React SaaS"],
    },
    {
      id: 4,
      cat: "influencer",
      catLabel: "Influencer",
      title: "SparkFit Apparel",
      desc: "Coordinated micro-creator placement in Pakistan generating high viral brand impressions and customer purchases.",
      result: "10.2K Clicks",
      gradient: "linear-gradient(135deg, #b45309 0%, #fbbf24 100%)",
      tags: ["10.2K Impressions", "15K Customers", "40+ Creators"],
    },
    {
      id: 5,
      cat: "ads",
      catLabel: "Paid Ads",
      title: "TechStart B2B",
      desc: "Precision B2B LinkedIn campaign targeting that cut client acquisition costs while tripling highly-qualified leads.",
      result: "-60% CPA",
      gradient: "linear-gradient(135deg, #be123c 0%, #f43f5e 100%)",
      tags: ["-60% CPA", "3× Leads", "B2B Funnels"],
    },
    {
      id: 6,
      cat: "content",
      catLabel: "Content",
      title: "Bloom Beauty",
      desc: "Viral TikTok and Instagram Reels aesthetic strategy driving direct e-commerce sales and organic followers.",
      result: "1M+ Views",
      gradient: "linear-gradient(135deg, #9d174d 0%, #ec4899 100%)",
      tags: ["1M+ Views", "+200% Sales", "TikTok Viral"],
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.cat === filter
  );

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Portfolio — Our Work & Campaigns | NexaGrowth</title>
      <meta name="description" content="Browse our selected portfolio showing high-converting Shopify stores, lead generation funnels, and organic search campaigns." />
      <Background />
      <Navigation activeRoute="portfolio" />

      {/* ── Page Hero Banner        <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Our Work
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Portfolio
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            A selective snapshot of high-converting campaigns, conversion web platforms, and growth engines we have constructed for Pakistani brands.
          </p>
        </div>
      </header>

      {/* ── Filters Bar ── */}
      <nav className="w-full relative z-20 flex justify-center px-6 mb-12">
        <div className="flex flex-wrap gap-2 justify-center p-1.5 rounded-full glass border border-glass-border bg-glass-bg backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? "bg-foreground text-background shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-semibold scale-102"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Portfolio Grid ── */}
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-4 pb-24 relative z-20">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-card flex flex-col glass rounded-[20px] border border-glass-border hover:border-accent/40 bg-glass-bg overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                style={{
                  backdropFilter: "blur(16px) saturate(1.6)",
                }}
              >
                {/* Visual result header block */}
                <div 
                  className="h-[200px] w-full flex items-center justify-center relative overflow-hidden select-none border-b border-glass-border"
                  style={{ 
                    background: theme === "dark"
                      ? "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%)"
                      : "linear-gradient(135deg, rgba(224, 242, 254, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)",
                    backdropFilter: "blur(12px)"
                  }}
                >
                  {/* Category-based glowing aura */}
                  <div 
                    style={{
                      position: "absolute",
                      width: "150px",
                      height: "150px",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: getGlowColor(p.cat, theme),
                      filter: "blur(20px)",
                      pointerEvents: "none"
                    }}
                  />

                  <div className="text-2xl md:text-3xl font-serif text-foreground font-normal tracking-tight relative z-10 drop-shadow-sm">
                    {p.result}
                  </div>

                  {/* Absolute hover glass link overlay */}
                  <div className="absolute inset-0 bg-[#041423]/60 backdrop-blur-[6px] flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400 z-20">
                    <span className="text-[11px] font-bold text-accent tracking-[0.12em] uppercase bg-accent/20 border border-accent/30 px-3.5 py-1.5 rounded-full">
                      {p.catLabel}
                    </span>
                    <Link
                      href="/case-studies"
                      className="bg-foreground text-background font-semibold text-[13px] px-6 py-2.5 rounded-full flex items-center gap-2 hover:scale-[1.05] transition-transform duration-300"
                    >
                      <Eye size={14} />
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>

                {/* Information block */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[17px] font-normal font-serif text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-foreground/60 leading-relaxed flex-1 mb-6">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium text-accent bg-accent/5 border border-accent/15 px-2.5 py-1 rounded-[6px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Consultation CTA Block ── */}
        <section
          className="mt-20 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(32, 210, 190, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-[600px] mx-auto mb-8">
            Let's evaluate your metrics, build a strong organic positioning plan, and create high-yielding digital growth engines for your company.
          </p>
          <a
            href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20partnering%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-[#001f3d] bg-white px-8 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            <span>Start Free Consultation</span>
            <ArrowRight size={15} />
          </a>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
