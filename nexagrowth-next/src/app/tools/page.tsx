"use client";
import Footer from "../../components/Footer";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, Wrench, Binary, Smile, Calculator, HelpCircle, Palette, FileText, Landmark, Search, ShieldCheck, QrCode, Type } from "lucide-react";

interface ToolItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  url: string;
  tag: string;
}

export default function ToolsHubPage() {
  const tools: ToolItem[] = [
    {
      title: "QR Code Generator",
      desc: "Generate customized high-quality vector QR codes instantly for URLs, text, Wi-Fi passwords, or phone contacts. No signups.",
      icon: <QrCode className="w-5 h-5" />,
      url: "/tools/qr-code-generator",
      tag: "Utility",
    },
    {
      title: "AI Caption Generator",
      desc: "Instant creative captions for Instagram, Facebook, and LinkedIn driven by advanced marketing prompt rules. Beat writer's block.",
      icon: <Smile className="w-5 h-5" />,
      url: "/tools/ai-caption-generator",
      tag: "Marketing",
    },
    {
      title: "Meta Tag Generator",
      desc: "Build highly optimized Google SEO page title and open graph meta tags, ensuring your content stands out and ranks high.",
      icon: <Search className="w-5 h-5" />,
      url: "/tools/meta-tag-generator",
      tag: "SEO",
    },
    {
      title: "Slug Generator",
      desc: "Quickly convert any title into a clean, search-engine friendly slug. Ideal for content writers, bloggers, and SEO professionals.",
      icon: <Binary className="w-5 h-5" />,
      url: "/tools/slug-generator",
      tag: "SEO",
    },
    {
      title: "Word Counter",
      desc: "Quick word, character, and sentence counter with active reading speed metrics. Perfectly optimized for content strategies.",
      icon: <Type className="w-5 h-5" />,
      url: "/tools/word-counter",
      tag: "Writing",
    },
    {
      title: "Case Converter",
      desc: "Convert text instantly between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase format formats in 1-click.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/case-converter",
      tag: "Writing",
    },
    {
      title: "EMI Loan Calculator",
      desc: "Calculate monthly installments, interest rates, and loan amortizations for home, car, or business investments in Pakistan.",
      icon: <Landmark className="w-5 h-5" />,
      url: "/tools/emi-calculator",
      tag: "Finance",
    },
    {
      title: "BMI Calculator",
      desc: "Check your Body Mass Index (BMI) instantly based on weight and height metrics. High-speed, responsive diagnostic tools.",
      icon: <Calculator className="w-5 h-5" />,
      url: "/tools/bmi-calculator",
      tag: "Health",
    },
    {
      title: "Age Calculator",
      desc: "Calculate your exact age in years, months, weeks, and days. Excellent utility for registration forms and profile setups.",
      icon: <HelpCircle className="w-5 h-5" />,
      url: "/tools/age-calculator",
      tag: "Utility",
    },
    {
      title: "Color Picker & Palette",
      desc: "Explore sleek HEX, RGB, and HSL colors and palettes directly from your browser. Absolute parity design utility.",
      icon: <Palette className="w-5 h-5" />,
      url: "/tools/color-picker",
      tag: "Design",
    },
    {
      title: "CSS Gradient Generator",
      desc: "Design gorgeous background gradients and export instant CSS codes. Tailored with Apple-grade preview screens.",
      icon: <Palette className="w-5 h-5" />,
      url: "/tools/css-gradient-generator",
      tag: "Design",
    },
    {
      title: "Password Generator",
      desc: "Generate secure, random, high-entropy passwords with custom parameters (symbols, numbers, length) to keep profiles safe.",
      icon: <ShieldCheck className="w-5 h-5" />,
      url: "/tools/password-generator",
      tag: "Security",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Free Online Tools — SEO, AI, Developer & Utility Tools | NexaGrowth</title>
      <meta name="description" content="Access 12+ free online tools for SEO audits, password generation, AI captions, word counter, color picking, and more." />
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero Banner ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Wrench size={12} className="text-accent animate-pulse" />
            100% Free Resources
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Free Online Tools
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            No signup. No hidden trials. Just highly optimized online utility tools for SEO, content creation, copywriting, design, and calculations.
          </p>
        </div>
      </header>

      {/* ── Grid List ── */}
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-4 pb-24 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((t, idx) => (
            <article
              key={idx}
              className="glass p-6 md:p-8 rounded-[20px] border border-glass-border hover:border-accent/40 bg-glass-bg flex flex-col overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              style={{
                backdropFilter: "blur(16px) saturate(1.6)",
              }}
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 text-accent flex items-center justify-center">
                  {t.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-md">
                    {t.tag}
                  </span>
                </div>
              </div>

              <h2 className="text-[18px] font-serif text-foreground font-normal mb-2 tracking-tight group-hover:text-accent transition-colors">
                {t.title}
              </h2>
              <p className="text-[13px] text-foreground/60 leading-relaxed flex-1 mb-6">
                {t.desc}
              </p>

              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:text-accent transition-colors group/link mt-auto self-start"
              >
                <span>Launch Tool</span>
                <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        {/* ── Consultation CTA Block ── */}
        <section
          className="mt-20 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(32, 210, 190, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Need Custom Tools or Systems?
          </h3>
          <p className="text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-[600px] mx-auto mb-8">
            Whether you need custom lead capture calculators, custom React platforms, internal databases, or advanced analytics — we build robust software built to scale.
          </p>
          <a
            href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20a%20custom%20software%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-background bg-foreground px-8 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <span>Start Custom Software Consult</span>
            <ArrowRight size={15} />
          </a>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
