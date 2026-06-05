"use client";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, PhoneCall, Heart, Award, Shield, Users, Mail, ArrowRight } from "lucide-react";
import AboutOrbit from "../../components/AboutOrbit";
import Footer from "../../components/Footer";

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  social: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rana Talha Majid",
    role: "Founder & Head of Growth",
    expertise: ["Growth Funnels", "Web Engineering", "SaaS Systems"],
    social: "https://linkedin.com/in/rana-muhammad-talha-majid-25233228b",
    avatar: "👨‍💼"
  },
  {
    name: "Zain Shabbir",
    role: "Lead Full-Stack Engineer",
    expertise: ["Next.js", "React", "Cloud Architecture"],
    social: "#",
    avatar: "👨‍💻"
  },
  {
    name: "Ayesha Noor",
    role: "AI Automation Architect",
    expertise: ["OpenAI API", "Workflow Bots", "Integrations"],
    social: "#",
    avatar: "👩‍💻"
  },
  {
    name: "Hamza Khan",
    role: "Senior SEO & Search Architect",
    expertise: ["Technical SEO", "Local Maps Rank", "Keyword Clusters"],
    social: "#",
    avatar: "👨‍🚀"
  }
];

export default function AboutPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>About Us — Tech & Growth Architects | NexaGrowth</title>
      <meta name="description" content="Learn about NexaGrowth's mission, values, and the expert team driving custom web development, SaaS platforms, AI automation, and SEO growth." />
      <Background />
      <Navigation activeRoute="about" />

      {/* ── Page Hero Banner ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Our Story
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Meet NexaGrowth
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Learn about our mission, our values, and the team driving high-performance digital marketing, technical SEO, and conversion web development.
          </p>
        </div>
      </header>

      {/* ── Main Content Grid ── */}
      <main className="flex-1 w-full max-w-[820px] mx-auto px-6 py-12 pb-24 relative z-20">
        
        {/* Founder Card */}
        <section
          className="glass p-8 md:p-12 rounded-[24px] mb-12 border border-accent/20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(32, 210, 190, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%)",
            backdropFilter: "blur(16px) saturate(1.6)",
          }}
        >
          {/* Subtle glow border */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-accent-glow" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="flex-shrink-0 flex items-center justify-center overflow-visible">
              <AboutOrbit />
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-[11px] font-bold text-accent tracking-[0.15em] uppercase block mb-1">
                Founder & Head of Growth
              </span>
              <h2 className="text-3xl font-serif font-normal text-foreground mb-4">
                Rana Talha Majid
              </h2>
              <p className="text-[15px] text-foreground/85 leading-relaxed mb-6 italic">
                "I started this agency because I saw too many businesses wasting money on outdated marketing. Boosting posts is not a strategy. We build technical SEO assets, high-converting web storefronts, and precision-targeted paid funnels that bring actual, measurable ROAS."
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="https://linkedin.com/in/rana-muhammad-talha-majid-25233228b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground bg-foreground/5 border border-glass-border hover:border-foreground/20 px-5 py-2.5 rounded-full transition-all hover:bg-foreground/10"
                >
                  <svg className="w-3.5 h-3.5 text-sky-500 fill-current animate-pulse" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/923390061165?text=Hi%20Talha,%20I'd%20like%20to%20discuss%20our%20growth!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-accent bg-accent/10 border border-accent/20 hover:border-accent/40 px-5 py-2.5 rounded-full transition-all hover:bg-accent/20"
                >
                  <PhoneCall size={14} />
                  <span>Direct Strategy Call</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section
          className="glass p-8 md:p-12 rounded-[20px] mb-8 border border-glass-border hover:border-accent/20 transition-all duration-300 shadow-sm"
        >
          <h2 className="text-2xl font-serif text-foreground font-normal mb-6 flex items-center gap-3 border-b border-glass-border pb-4">
            <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[12px] font-bold">1</span>
            Our Story & Evolution
          </h2>
          <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">
            Founded by Talha, a Computer Science student and full-stack developer who turned his technical expertise towards digital growth. Starting as a freelance web engineer, Talha observed a recurring theme: clients were hiring programmers to code websites, but their stores were empty because they lacked any SEO, search rankings, conversions, or targeting strategies.
          </p>
          <p className="text-[15px] text-foreground/80 leading-relaxed">
            NexaGrowth was created to bridge this exact void. We combine solid, performance-grade software engineering (clean React code, speed-optimization, conversion layouts) with data-backed search engine optimizations and automated AI agents to operate as your dedicated growth partner.
          </p>
        </section>

        {/* Mission Section */}
        <section
          className="glass p-8 md:p-12 rounded-[20px] mb-8 border border-glass-border hover:border-accent/20 transition-all duration-300 shadow-sm"
        >
          <h2 className="text-2xl font-serif text-foreground font-normal mb-6 flex items-center gap-3 border-b border-glass-border pb-4">
            <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[12px] font-bold">2</span>
            Our Mission & Vision
          </h2>
          <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">
            To provide startups and established brands with a clean, elite, metrics-focused alternative to generic marketing agencies. Too many local agencies rely on "vanity metrics" — likes, impressions, and video views that don't bring a single customer in. 
          </p>
          <p className="text-[15px] text-foreground/80 leading-relaxed">
            Our mission is **Real Results, No Fluff.** We focus on metrics that impact your bank balance: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Google first-page keyword rankings, and checkout conversion rates.
          </p>
        </section>

        {/* Core Values Grid */}
        <section
          className="glass p-8 md:p-12 rounded-[20px] mb-8 border border-glass-border hover:border-accent/20 transition-all duration-300 shadow-sm"
        >
          <h2 className="text-2xl font-serif text-foreground font-normal mb-6 flex items-center gap-3 border-b border-glass-border pb-4">
            <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[12px] font-bold">3</span>
            Our Pillars & Values
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-accent mb-2">
                <Shield size={24} />
              </div>
              <strong className="text-[15px] text-foreground font-normal font-serif">100% Transparency</strong>
              <p className="text-[13px] text-foreground/60 leading-relaxed">
                No hidden charges or inflated ad costs. You have full ownership of your Ads Manager, Shopify stores, and domains.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-accent mb-2">
                <Heart size={24} />
              </div>
              <strong className="text-[15px] text-foreground font-normal font-serif">Partnership Over Paycheck</strong>
              <p className="text-[13px] text-foreground/60 leading-relaxed">
                We act as an extension of your company. If your business doesn't make a profit, we have failed our mission.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-accent mb-2">
                <Award size={24} />
              </div>
              <strong className="text-[15px] text-foreground font-normal font-serif">No Boost Shortcuts</strong>
              <p className="text-[13px] text-foreground/60 leading-relaxed">
                We believe in running custom dashboards, custom landing pages, pixel setups, and conversion engineering only.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section: Professional Team Cards ── */}
        <section
          className="glass p-8 md:p-12 rounded-[20px] border border-glass-border hover:border-accent/20 transition-all duration-300 shadow-sm"
        >
          <h2 className="text-2xl font-serif text-foreground font-normal mb-6 flex items-center gap-3 border-b border-glass-border pb-4">
            <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[12px] font-bold">4</span>
            Meet Our Experts
          </h2>
          <p className="text-[14.5px] text-foreground/60 leading-relaxed mb-8">
            NexaGrowth is powered by developers and search strategists focused on code quality and growth metrics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="glass p-6 rounded-[18px] border border-glass-border bg-glass-bg flex items-center gap-4 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-foreground leading-tight">{member.name}</h4>
                  <span className="text-[11px] text-accent font-medium uppercase tracking-wider block mt-0.5">{member.role}</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="text-[9px] font-semibold text-foreground/50 border border-glass-border bg-glass-hover px-2 py-0.5 rounded">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── Footer Component ── */}
      <Footer />
    </div>
  );
}
