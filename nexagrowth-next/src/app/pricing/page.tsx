"use client";
import React from "react";
import Link from "next/link";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

interface PriceItem {
  label: string;
  price: string;
}

interface PriceCategory {
  title: string;
  icon: string;
  items: PriceItem[];
}

const pricingData: PriceCategory[] = [
  {
    title: "Website Development",
    icon: "🌐",
    items: [
      { label: "Landing Page", price: "PKR 25,000+" },
      { label: "Portfolio Website", price: "PKR 35,000+" },
      { label: "Business Website", price: "PKR 60,000+" },
      { label: "Corporate Website", price: "PKR 80,000+" },
      { label: "E-Commerce Website", price: "PKR 100,000+" },
      { label: "Custom Web Application", price: "PKR 200,000+" },
    ],
  },
  {
    title: "Shopify Development",
    icon: "🛒",
    items: [
      { label: "Store Setup", price: "PKR 50,000+" },
      { label: "Theme Customization", price: "PKR 25,000+" },
      { label: "Complete Shopify Store", price: "PKR 80,000+" },
      { label: "Custom Shopify Development", price: "PKR 150,000+" },
    ],
  },
  {
    title: "Video Editing",
    icon: "🎬",
    items: [
      { label: "Single Reel", price: "PKR 2,000+" },
      { label: "10 Reels Package", price: "PKR 20,000+" },
      { label: "30 Reels Package", price: "PKR 50,000+" },
      { label: "YouTube Video Editing", price: "PKR 5,000+" },
      { label: "Podcast Editing", price: "PKR 8,000+" },
      { label: "Advertisement Creative", price: "PKR 5,000+" },
    ],
  },
  {
    title: "Social Media Management",
    icon: "📱",
    items: [
      { label: "Basic", price: "PKR 35,000/month" },
      { label: "Standard", price: "PKR 60,000/month" },
      { label: "Premium", price: "PKR 100,000/month" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Pricing — Transparent Service Rates | NexaGrowth</title>
      <meta
        name="description"
        content="View transparent starting prices for NexaGrowth services: website development, Shopify stores, video editing, and social media management in Pakistan."
      />
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Transparent Pricing
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Pricing
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Clear, competitive pricing for Pakistani businesses. Every project is custom-scoped to deliver maximum value within your budget.
          </p>
        </div>
      </header>

      {/* ── Pricing Grid ── */}
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-12 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-[24px] overflow-hidden border border-white/8 bg-white/[0.02] shadow-md hover:border-accent/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="px-6 py-5 flex items-center gap-3 bg-white/[0.03] border-b border-white/8">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-serif font-normal text-foreground tracking-tight">
                  {cat.title}
                </h2>
              </div>

              {/* Price Items */}
              <div className="p-6 flex flex-col gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 px-4 rounded-[12px] bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={14}
                        className="text-accent/60 group-hover:text-accent transition-colors"
                      />
                      <span className="text-[14px] text-foreground/80">{item.label}</span>
                    </div>
                    <span className="text-[14px] font-medium text-foreground font-serif group-hover:text-accent transition-colors">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div className="mt-12 glass p-6 rounded-[16px] border border-white/8 bg-white/[0.02] text-center">
          <p className="text-[13px] text-foreground/50 leading-relaxed max-w-[700px] mx-auto">
            Pricing varies depending on project scope, functionality, integrations, revisions, delivery
            timeline, and business requirements. All prices listed are starting points — final quotes are
            provided after a free consultation and project assessment.
          </p>
        </div>

        {/* ── CTA Block ── */}
        <section
          className="mt-16 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(32, 210, 190, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 text-accent flex items-center justify-center text-xl mx-auto mb-5">
            <MessageSquare size={22} />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Request Custom Quote
          </h3>
          <p className="text-[15px] text-foreground/60 leading-relaxed max-w-[500px] mx-auto mb-8">
            Every project is unique. Tell us about your requirements and we&apos;ll provide a detailed, no-obligation quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/project-request"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-[#001f3d] bg-white px-8 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              <span>Get Custom Quote</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20pricing!"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[14px] font-normal text-foreground px-7 py-4 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
