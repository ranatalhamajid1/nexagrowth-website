"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const previewPlans = [
  {
    name: "Starter",
    price: "PKR 45,000",
    period: "one-time",
    focus: "Startups & Launching",
    delivs: ["1 Custom Landing Page", "Basic Technical SEO Setup", "Google Analytics & Search Console", "1 Round of Revision"],
    cta: "Launch Starter Plan",
    color: "teal"
  },
  {
    name: "Growth",
    price: "PKR 95,000",
    period: "per month",
    focus: "Growing Businesses",
    delivs: ["Premium Business Website (React)", "Core Local SEO & map ranking", "Meta/Google ad funnel setup", "Bi-weekly sprint check-in calls"],
    cta: "Start Scaling Now",
    color: "teal"
  },
  {
    name: "Business",
    price: "PKR 185,000",
    period: "per month",
    focus: "Established Brands",
    delivs: ["Full Custom SaaS / E-commerce App", "Advanced SEO cluster content", "Automated AI chatbot responder", "Dedicated growth support manager"],
    cta: "Grow Brand Enterprise",
    color: "gold"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    focus: "Corporate & Scaled Companies",
    delivs: ["Bespoke software ecosystems", "Full workflow AI automation integrations", "International SEO optimization", "Unlimited revision schedules"],
    cta: "Contact Growth Strategist",
    color: "gold"
  }
];

export default function PricingPreview() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 border-t border-glass-border" id="pricing-preview">
      <div className="text-center flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
          <Sparkles size={12} className="text-accent animate-pulse" />
          Transparent Retainers
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
          Select Your Growth Tier
        </h2>
        <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
          No hidden fees or lock-in contracts. Select a flexible growth plan designed to deliver measurable results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewPlans.map((plan) => {
          const accentBorder = plan.color === "teal"
            ? "hover:border-accent-teal/30 hover:shadow-[0_15px_40px_-20px_rgba(51,214,200,0.15)]"
            : "hover:border-accent-gold/30 hover:shadow-[0_15px_40px_-20px_rgba(245,183,49,0.12)]";

          return (
            <div
              key={plan.name}
              className={`glass p-8 rounded-[24px] border border-glass-border flex flex-col justify-between transition-all duration-300 ${accentBorder}`}
            >
              <div>
                <span className="text-[10px] font-bold text-text-subtle tracking-wider uppercase">
                  {plan.focus}
                </span>
                <h3 className="text-2xl font-serif text-foreground font-normal mt-2">
                  {plan.name}
                </h3>
                <div className="my-6">
                  <span className="text-3xl font-bold font-serif text-foreground">{plan.price}</span>
                  <span className="text-[12px] text-foreground/50 ml-1">/{plan.period}</span>
                </div>
                
                <ul className="flex flex-col gap-3.5 border-t border-glass-border pt-6 mb-8">
                  {plan.delivs.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12.5px] text-foreground/75 leading-relaxed">
                      <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/pricing"
                className="w-full text-center inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold text-background bg-foreground rounded-full py-3.5 hover:scale-[1.02] transition-transform duration-300"
              >
                <span>{plan.cta}</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
        >
          <span>Compare All Plans & Add-ons</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
