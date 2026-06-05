"use client";
import React from "react";
import Link from "next/link";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, ShieldAlert } from "lucide-react";

interface PricePlan {
  name: string;
  price: string;
  period: string;
  focus: string;
  description: string;
  delivs: string[];
  color: string;
  cta: string;
}

const pricingPlans: PricePlan[] = [
  {
    name: "Starter",
    price: "PKR 45,000",
    period: "one-time",
    focus: "Startups & Launching",
    description: "Ideal for early-stage startups needing a solid technical base and basic online presence to launch their product.",
    delivs: [
      "1 Custom Landing Page (Next.js/React)",
      "Basic Technical SEO & Indexation Audit",
      "Google Analytics & Search Console Setup",
      "Responsive mobile-first coding structure",
      "SSL secure hosting setup support",
      "1 Round of design edits/revisions"
    ],
    color: "teal",
    cta: "Launch Starter Plan"
  },
  {
    name: "Growth",
    price: "PKR 95,000",
    period: "per month",
    focus: "Growing Businesses",
    description: "Perfect for brands looking to establish regular lead generation and dominate local search results.",
    delivs: [
      "Complete Premium Business Website (Up to 5 Pages)",
      "Core Local SEO & Google Business optimization",
      "Custom Meta/Facebook campaign funnel strategy",
      "Speed optimized build (95+ Lighthouse Score)",
      "Weekly analytics auditing reports",
      "Bi-weekly alignment & review calls"
    ],
    color: "teal",
    cta: "Start Scaling Now"
  },
  {
    name: "Business",
    price: "PKR 185,000",
    period: "per month",
    focus: "Established Brands",
    description: "Our most popular tier. Designed for software brands, e-commerce stores, and service companies serious about compound organic growth.",
    delivs: [
      "Full Custom SaaS platform / Shopify store build",
      "Advanced SEO keyword content clustering & mapping",
      "24/7 intelligent AI chatbot setup & integration",
      "Custom CRM & email workflow automations",
      "Meta, Google & TikTok ads funnel management",
      "Dedicated senior developer & growth manager support"
    ],
    color: "gold",
    cta: "Grow Brand Enterprise"
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    period: "flexible",
    focus: "Corporate & Enterprise",
    description: "Bespoke digital architecture, database configurations, and global growth strategies built to target international clients.",
    delivs: [
      "Bespoke custom software & database ecosystems",
      "End-to-end business workflow AI automation integrations",
      "International SEO keyword mapping & publishing",
      "Full-scale digital rebranding & styling guides",
      "24/7 priority support & server maintenance",
      "Unlimited revisions & dedicated developer team access"
    ],
    color: "gold",
    cta: "Contact Growth Strategist"
  }
];

const addons = [
  { service: "AI Chatbot Integration", price: "PKR 35,000+" },
  { service: "Shopify Store Theme Overhaul", price: "PKR 50,000+" },
  { service: "Technical SEO Audit & Speed Fix", price: "PKR 20,000" },
  { service: "Custom API Integration", price: "PKR 25,000+" },
  { service: "Speed Optimization (95+ Score guarantee)", price: "PKR 15,000" },
  { service: "Monthly Server Maintenance", price: "PKR 10,000/mo" }
];

export default function PricingPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Pricing — Strategic Retainers & Services | NexaGrowth</title>
      <meta
        name="description"
        content="Choose a pricing tier tailored to your growth goals: Starter, Growth, Business, or Enterprise. Transparent rates for web dev, SaaS, and SEO in Pakistan."
      />
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Flexible Retainers
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Select Your Plan
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Choose a plan tailored to your business stage. No lock-in contracts. Switch or cancel anytime.
          </p>
        </div>
      </header>

      {/* ── Pricing Grid ── */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan) => {
            const isGold = plan.color === "gold";
            const borderAccent = isGold 
              ? "border-gold/40 shadow-[0_15px_40px_-15px_rgba(245,183,49,0.1)] bg-glass-bg" 
              : "border-glass-border hover:border-accent/30 bg-glass-bg";

            return (
              <div
                key={plan.name}
                className={`glass rounded-[24px] overflow-hidden border flex flex-col justify-between p-8 transition-all duration-300 hover:translate-y-[-2px] ${borderAccent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-md">
                      {plan.focus}
                    </span>
                    {isGold && (
                      <span className="text-[9px] font-bold text-gold tracking-widest uppercase flex items-center gap-1">
                        <Sparkles size={10} />
                        PREMIUM
                      </span>
                    )}
                  </div>

                  <h2 className="text-3xl font-serif font-normal text-foreground tracking-tight mb-2">
                    {plan.name}
                  </h2>
                  <p className="text-[12.5px] text-foreground/60 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="my-6 border-y border-glass-border py-4">
                    <span className="text-3.5xl font-bold font-serif text-foreground">{plan.price}</span>
                    <span className="text-[12px] text-foreground/50 ml-1">/{plan.period}</span>
                  </div>

                  <ul className="flex flex-col gap-3.5 mb-8">
                    {plan.delivs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13px] text-foreground/80 leading-relaxed">
                        <CheckCircle2
                          size={14}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/project-request"
                  className={`w-full text-center inline-flex items-center justify-center gap-2 font-sans text-[13.5px] font-semibold rounded-full py-4 transition-all duration-300 ${
                    isGold
                      ? "text-background bg-gold hover:bg-gold/90 hover:shadow-[0_10px_30px_rgba(217,119,6,0.15)]"
                      : "text-background bg-foreground hover:bg-foreground/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* ── Add-Ons Grid ── */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal mb-3">
              Service Add-ons & One-offs
            </h3>
            <p className="text-[14px] text-foreground/60 leading-relaxed">
              Need a single specific feature? We offer productized development and SEO fixes individually.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {addons.map((addon) => (
              <div
                key={addon.service}
                className="glass p-5 rounded-[16px] border border-glass-border bg-glass-bg hover:border-accent/20 transition-all duration-200 flex items-center justify-between group"
              >
                <span className="text-[13.5px] font-medium text-foreground/90 group-hover:text-accent transition-colors">
                  {addon.service}
                </span>
                <span className="text-[13.5px] font-serif text-foreground font-semibold">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Guarantees & Commitments Seal ── */}
        <div className="mb-16 glass p-8 rounded-[24px] border border-glass-border bg-glass-bg max-w-[850px] mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="h-12 w-12 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent text-2xl flex-shrink-0">
            🛡️
          </div>
          <div>
            <h4 className="text-[16px] font-serif font-semibold text-foreground mb-1">Our Premium Guarantee Commitment</h4>
            <p className="text-[13px] text-foreground/60 leading-relaxed">
              Every plan comes with a 95+ PageSpeed audit commitment and clean code assurance. We transfer 100% ownership of Shopify domains, Git codebases, Vercel hosts, and Ads Managers to you upon delivery. No hidden dependencies.
            </p>
          </div>
        </div>

        {/* ── CTA Block ── */}
        <section
          className="mt-16 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-md"
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
            Need a Bespoke Solution?
          </h3>
          <p className="text-[15px] text-foreground/60 leading-relaxed max-w-[500px] mx-auto mb-8">
            Tell us about your requirements, database integrations, or automation goals. We will prepare a detailed scoped plan within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/project-request"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-background bg-foreground px-8 py-4 rounded-full hover:scale-[1.03] hover:shadow-md transition-all duration-300"
            >
              <span>Get Custom Quote</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20pricing!"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[14px] font-normal text-foreground px-7 py-4 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] bg-glass-bg transition-all duration-300"
            >
              WhatsApp Strategy Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
