"use client";
import React from "react";
import { Code, Cpu, Bot, Search, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    tag: "Engineering",
    problem: "Slow, generic templates and clunky page builders destroy credibility and leak potential leads.",
    benefit: "We engineer lightning-fast, custom websites and custom e-commerce stores designed for high-end user experience and conversion optimization. Zero templates, zero bloat.",
    outcomes: ["Sub-2s load speeds", "Bespoke user interface layouts", "Frictionless checkout checkouts"],
    cta: "Request Web Audit",
    color: "teal"
  },
  {
    icon: Cpu,
    title: "SaaS Development",
    tag: "Software Systems",
    problem: "Building a complex application from scratch takes too long or suffers from unscalable architecture.",
    benefit: "We design and develop scalable MVPs, robust custom SaaS platforms, interactive data dashboards, and reliable API integrations. Built with secure backend frameworks.",
    outcomes: ["Rapid MVP development", "Interactive analytics dashboards", "Secure payment & auth systems"],
    cta: "Discuss SaaS MVP",
    color: "teal"
  },
  {
    icon: Bot,
    title: "AI Automation",
    tag: "Intelligent Workflows",
    problem: "Repetitive tasks and slow customer response times drain team hours and lose customers.",
    benefit: "We deploy custom AI chatbots, workflow automations, and intelligent business tools that integrate into your existing systems to work for you 24/7.",
    outcomes: ["24/7 AI chatbot responses", "Automated email & CRM sync", "Custom automated databases"],
    cta: "Automate My Business",
    color: "gold"
  },
  {
    icon: Search,
    title: "SEO Growth",
    tag: "Organic Search",
    problem: "Paid ads get more expensive daily, causing customer acquisition costs (CAC) to spiral.",
    benefit: "We build compounding search authority. Through technical audits, local maps optimization, and targeted content hubs, we drive long-term organic traffic that works.",
    outcomes: ["Top-3 Google maps ranking", "Targeted organic search traffic", "High-intent lead generation"],
    cta: "Get Organic Strategy",
    color: "gold"
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-background py-24 md:py-32 border-t border-glass-border relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-glass-bg border border-glass-border rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
            <span>Our Service Architecture</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-foreground mb-6">
            Core capabilities designed to scale <em className="italic text-foreground/60">modern growth companies</em>.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed max-w-2xl">
            We don't sell cheap, generic marketing templates. We build modern digital infrastructure and organic growth search systems that convert users into high-paying clients.
          </p>
        </div>

        {/* Services Grid (Balanced 2x2 for premium aesthetics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const accentClass = s.color === "teal" 
              ? "hover:border-accent-teal/30 hover:shadow-[0_15px_40px_-20px_rgba(51,214,200,0.15)]" 
              : "hover:border-accent-gold/30 hover:shadow-[0_15px_40px_-20px_rgba(245,183,49,0.12)]";

            const iconAccentClass = s.color === "teal"
              ? "bg-accent-teal/5 text-accent-teal group-hover:bg-accent-teal/10"
              : "bg-accent-gold/5 text-accent-gold group-hover:bg-accent-gold/10";

            return (
              <div
                key={s.title}
                className={`group relative p-8 md:p-10 rounded-3xl glass border border-glass-border transition-all duration-500 flex flex-col justify-between ${accentClass}`}
              >
                {/* Visual border spotlight overlay */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    padding: "1px",
                    background: s.color === "teal" 
                      ? "linear-gradient(135deg, rgba(51,214,200,0.2) 0%, transparent 60%)" 
                      : "linear-gradient(135deg, rgba(245,183,49,0.15) 0%, transparent 60%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />

                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${iconAccentClass}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-text-subtle">
                      {s.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-[24px] sm:text-[28px] text-foreground leading-tight mb-4">
                    {s.title}
                  </h3>
                  <div className="mb-6 space-y-3">
                    <p className="text-[13px] text-foreground/50 leading-relaxed italic">
                      <strong>The Problem:</strong> {s.problem}
                    </p>
                    <p className="text-[13.5px] text-text-muted leading-relaxed">
                      <strong>The Solution:</strong> {s.benefit}
                    </p>
                  </div>
                </div>

                {/* Bullets & Action */}
                <div>
                  <ul className="flex flex-col gap-2.5 mb-8 border-t border-glass-border pt-6">
                    {s.outcomes.map((out) => (
                      <li key={out} className="text-[12.5px] text-foreground/80 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${s.color === "teal" ? "bg-accent-teal" : "bg-accent-gold"}`} />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-foreground/90 hover:text-foreground transition-colors duration-300 group/link"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight size={13} className={`transform group-hover/link:translate-x-0.5 transition-transform duration-300 ${s.color === "teal" ? "text-accent-teal" : "text-accent-gold"}`} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
