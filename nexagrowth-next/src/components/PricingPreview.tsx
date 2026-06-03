"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const previewItems = [
  { label: "Landing Page", price: "PKR 25,000+" },
  { label: "Business Website", price: "PKR 60,000+" },
  { label: "E-Commerce Website", price: "PKR 100,000+" },
  { label: "Shopify Store Setup", price: "PKR 50,000+" },
  { label: "Single Reel Editing", price: "PKR 2,000+" },
  { label: "Social Media Mgmt", price: "PKR 35,000/mo" },
];

export default function PricingPreview() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="pricing-preview">
      <div className="text-center flex flex-col items-center mb-14">
        <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
          <Sparkles size={12} className="text-accent animate-pulse" />
          Transparent Pricing
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
          Starting From
        </h2>
        <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
          Clear, competitive pricing for Pakistani businesses. Every project is tailored to your exact needs.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[800px] mx-auto">
        {previewItems.map((item) => (
          <div
            key={item.label}
            className="glass p-5 rounded-[16px] border border-white/8 hover:border-accent/30 bg-white/[0.02] text-center group hover:translate-y-[-2px] transition-all duration-300"
          >
            <div className="text-[12px] text-foreground/50 uppercase tracking-wider mb-2 font-medium">
              {item.label}
            </div>
            <div className="text-lg font-serif font-normal text-foreground group-hover:text-accent transition-colors">
              {item.price}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 flex flex-col items-center gap-4">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
        >
          <span>View Full Pricing</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          href="/project-request"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:text-foreground transition-colors"
        >
          <span>Request Custom Quote</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
