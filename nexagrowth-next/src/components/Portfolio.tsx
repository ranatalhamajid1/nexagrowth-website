"use client";
import React, { useState, useMemo } from "react";
import { ArrowUpRight, FolderOpen, Tag, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  num: string;
  name: string;
  type: string;
  category: "web" | "saas" | "ai" | "seo";
  desc: string;
  outcomes: string[];
  result: string;
  status: string;
  color: string;
}

const PROJECTS: Project[] = [
  {
    num: "01",
    name: "NexaBuild SaaS Dashboard",
    type: "SaaS Development + Web Engineering",
    category: "saas",
    desc: "A custom React/Next.js dashboard solution built for a logistics platform. Re-engineered data pipelines, implemented interactive charts, and optimized API endpoints to resolve loading lags.",
    outcomes: ["Interactive web metrics dashboard", "Sub-1.5s API query responses", "+220% Signups conversion rate"],
    result: "+220% Signups CVR",
    status: "Live Production App",
    color: "teal"
  },
  {
    num: "02",
    name: "Artisan E-Commerce Hub",
    type: "Web Development + Custom Store",
    category: "web",
    desc: "A high-end custom Shopify 2.0 theme built for a craft boutique. Designed frictionless COD shipping workflows, integrated local payment checkouts, and optimized core web vital speeds.",
    outcomes: ["Custom theme layout files", "PKR direct local payment integration", "PKR 1.2M monthly sales"],
    result: "PKR 1.2M/mo Sales",
    status: "Live & Active Store",
    color: "gold"
  },
  {
    num: "03",
    name: "AI Lead Chatbot & Workflow",
    type: "AI Automation + CRM Integration",
    category: "ai",
    desc: "An intelligent chatbot and automated workflow system built for a B2B firm. Integrates custom OpenAI models into Slack/WhatsApp to capture, qualify, and route leads automatically.",
    outcomes: ["24/7 client response bot", "Slack/WhatsApp API automation", "75% manual overhead saved"],
    result: "75% Operation Saved",
    status: "Active Workflow System",
    color: "teal"
  },
  {
    num: "04",
    name: "LuxeVibe Search Dominance",
    type: "SEO Growth + Content SEO",
    category: "seo",
    desc: "A search-first content and mapping optimization campaign for a high-end apparel retailer. Built technical search content clusters, repaired crawling blocks, and dominated local search terms.",
    outcomes: ["Google first-page positions", "320+ high-authority reviews", "+340% Organic traffic growth"],
    result: "+340% Organic Traffic",
    status: "Active SEO Campaign",
    color: "gold"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "saas" | "ai" | "seo">("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="w-full bg-background py-24 md:py-32 border-t border-glass-border relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-glass-bg border border-glass-border rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
            <span>Redefining Selected Works</span>
          </div>
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-foreground mb-6">
            Proven engineering outcomes — <em className="italic text-foreground/60">our selected case archives</em>.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed max-w-2xl">
            We don't manufacture fake testimonials. We let our actual engineering, custom software, and active platform systems demonstrate our capabilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {[
            { id: "all", label: "All Case Studies" },
            { id: "web", label: "Web Development" },
            { id: "saas", label: "SaaS Development" },
            { id: "ai", label: "AI Automation" },
            { id: "seo", label: "SEO Growth" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-[12.5px] font-semibold transition-all duration-300 border flex-shrink-0 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-accent/15 border-accent/40 text-accent shadow-[0_0_15px_rgba(51,214,200,0.15)]"
                  : "border-glass-border text-foreground/60 hover:text-foreground hover:border-foreground/25 hover:bg-glass-hover glass"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Column */}
        <div className="flex flex-col gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              const outlineBorder = p.color === "teal"
                ? "hover:border-accent-teal/20"
                : "hover:border-accent-gold/20";
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  key={p.name}
                  className={`group p-8 md:p-12 rounded-[32px] glass border border-glass-border hover:bg-glass-hover transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative overflow-hidden ${outlineBorder}`}
                >
                  {/* Number Backdrop */}
                  <div className="absolute right-8 top-6 font-serif text-[110px] leading-none text-foreground/[0.02] select-none group-hover:scale-105 transition-transform duration-500 font-bold hidden md:block">
                    {p.num}
                  </div>

                  {/* Info Block */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                          {p.status}
                        </span>
                        <span className="text-[11px] font-medium text-text-subtle">
                          {p.type}
                        </span>
                      </div>

                      {/* Name & Desc */}
                      <h3 className="font-serif text-[28px] sm:text-[36px] text-foreground leading-tight mb-4">
                        {p.name}
                      </h3>
                      <p className="text-[14px] text-text-muted leading-relaxed max-w-xl mb-8">
                        {p.desc}
                      </p>
                    </div>

                    {/* Actions */}
                    <div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-foreground group-hover:text-foreground/90 transition-colors duration-300 w-fit"
                      >
                        <span>Request custom strategy brief</span>
                        <span className="w-8 h-8 rounded-full bg-glass-bg border border-glass-border group-hover:bg-glass-hover flex items-center justify-center transition-colors duration-300">
                          <ArrowUpRight size={14} className="text-foreground transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Outcomes Grid */}
                  <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl glass border border-glass-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-[12px] font-semibold text-accent-gold uppercase tracking-widest flex items-center gap-2">
                          <FolderOpen size={13} />
                          <span>Target Deliverables Mapped</span>
                        </h4>
                        <span className="text-[11px] font-bold text-accent bg-accent/10 border border-accent/25 px-2.5 py-0.5 rounded-md">
                          {p.result}
                        </span>
                      </div>
                      
                      <ul className="flex flex-col gap-4">
                        {p.outcomes.map((out) => (
                          <li key={out} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-accent-teal mt-0.5 flex-shrink-0" />
                            <span className="text-[13.5px] text-foreground/90 leading-normal">{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-glass-border flex items-center gap-2 text-text-subtle text-[11px]">
                      <Tag size={12} />
                      <span>Outcome-focused engineering model</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
