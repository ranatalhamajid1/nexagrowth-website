"use client";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import Footer from "../../components/Footer";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "SEO & Organic Growth",
      tagline: "Rank Higher. Get Found. Grow Free Traffic.",
      desc: "Search Engine Optimization (SEO) is one of the most powerful long-term investments any business can make. When your website ranks on the first page of Google for the right keywords, you get a consistent stream of free, targeted traffic — without paying for ads.",
      extendedDesc: "At NexaGrowth, we don't just stuff keywords into pages. We take a holistic approach that covers technical SEO, on-page optimization, content strategy, and local SEO — all tailored to the Pakistani market and your specific industry.",
      includes: [
        "Technical SEO Audit",
        "Keyword Research",
        "On-Page Optimization",
        "Content Strategy",
        "Local SEO (Google Maps)",
        "Backlink Building",
        "Competitor Analysis",
        "Monthly Growth Reports",
      ],
      ctaText: "Get a Free SEO Audit",
      ctaUrl: "https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20get%20a%20free%20SEO%20audit!",
    },
    {
      num: "02",
      title: "Paid Advertising (Facebook, Google & TikTok)",
      tagline: "Precision-Targeted Campaigns. Maximum ROAS.",
      desc: "Paid advertising gives you immediate visibility and measurable results. Whether it's Facebook and Instagram Ads, Google Search Ads, or TikTok campaigns — we create data-driven campaigns designed to reach the right people at the right time with the right message.",
      extendedDesc: "In our experience working with Pakistani businesses, the biggest mistake is people boosting posts instead of running proper conversion campaigns through Ads Manager. We do it the right way — with proper audience research, A/B testing, retargeting funnels, and continuous optimization.",
      includes: [
        "Facebook & Instagram Ads",
        "Google Search & Display",
        "TikTok Ad Strategy",
        "Audience Research",
        "A/B Creative Testing",
        "Retargeting Funnels",
        "Conversion API Setup",
        "Weekly ROAS Tracking",
      ],
      ctaText: "Launch Your Ad Campaign",
      ctaUrl: "https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20launching%20our%20ads!",
    },
    {
      num: "03",
      title: "Content Marketing & Copywriting",
      tagline: "Compelling Stories. Organic Reach. Brand Authority.",
      desc: "Content is the foundation of every successful digital marketing strategy. Great content builds trust, establishes authority, and drives organic traffic on autopilot. But creating content just for the sake of it doesn't work — you need a strategic approach.",
      extendedDesc: "We create content that serves a purpose: blog posts that rank on Google, social media copy that drives engagement, email newsletters that convert, and video scripts that tell your brand story. Every piece is designed to move your audience closer to becoming paying customers.",
      includes: [
        "Blog & Article Writing",
        "Social Media Content",
        "Email Newsletters",
        "Video Scripts",
        "Content Calendar Planning",
        "SEO-Optimized Copy",
        "Brand Voice Development",
        "Performance Analytics",
      ],
      ctaText: "Build Your Content Strategy",
      ctaUrl: "https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20build%20a%20content%20strategy!",
    },
    {
      num: "04",
      title: "Influencer Management & Outreach",
      tagline: "Right Creators. Right Audience. Real Impact.",
      desc: "Influencer marketing is one of the fastest ways to reach new audiences and build trust — but only when done right. Picking the wrong influencer, unclear briefs, or lack of performance tracking can waste your entire budget.",
      extendedDesc: "We handle the full process: finding the right creators for your niche in Pakistan, negotiating rates, managing campaigns, and tracking actual conversion results. We focus on authentic creators who drive action, not just follower counts.",
      includes: [
        "Influencer Discovery",
        "Audience Verification",
        "Campaign Briefs",
        "Rate Negotiation",
        "Content Quality Approval",
        "Performance & ROI Tracking",
        "Relationship Management",
        "Local Creator Partnerships",
      ],
      ctaText: "Start Your Creator Campaign",
      ctaUrl: "https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20influencer%20marketing!",
    },
    {
      num: "05",
      title: "Premium Web & E-Commerce Development",
      tagline: "Fast. Beautiful. Conversion-Optimized.",
      desc: "Your website is your digital storefront — the first impression most people have of your brand. A slow, outdated, or poorly designed website won't just lose visitors, it will actively hurt your credibility and sales.",
      extendedDesc: "We build modern, ultra-responsive websites that load fast, look stunning, and are engineered for conversions. Whether you need a landing page, a corporate brand website, or a custom Shopify/React e-commerce store — we build it right from the ground up.",
      includes: [
        "Custom UI/UX Website Design",
        "High-Converting Landing Pages",
        "E-Commerce Shopify/React Stores",
        "100% Mobile Responsive",
        "Speed Optimization (90+ score)",
        "SEO-Ready Architecture",
        "CRO Strategy & Layouts",
        "Maintenance & Support",
      ],
      ctaText: "Get a Custom Quote",
      ctaUrl: "https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20get%20a%20web%20development%20quote!",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Our Services — SEO, Paid Ads, Content Marketing & Web Dev | NexaGrowth</title>
      <meta name="description" content="Explore our result-driven services: Awwwards-grade web development, SEO, Meta ads, video editing, and influencer management." />
      <Background />
      <Navigation activeRoute="services" />

      {/* ── Page Hero Banner ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Sparkles size={12} className="text-accent animate-pulse" />
            What We Do
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Our Services
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Full-service digital marketing and engineering tailored for brands in Pakistan. From conversion SEO to paid ads, high-performance web development to video edits — everything you need to scale.
          </p>
        </div>
      </header>

      {/* ── Main content grid ── */}
      <main className="flex-1 w-full max-w-[940px] mx-auto px-6 py-12 pb-24 relative z-20">
        <div className="flex flex-col gap-12">
          {services.map((svc, idx) => (
            <section
              key={idx}
              className="glass p-8 md:p-12 rounded-[20px] transition-all duration-500 border border-glass-border hover:border-accent/40 relative overflow-hidden group hover:translate-y-[-4px] shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(16px) saturate(1.6)",
              }}
            >
              {/* Highlight strip left */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-accent to-accent-glow" />

              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Number block */}
                <div className="text-[48px] font-extrabold font-serif leading-none bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent select-none">
                  {svc.num}
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground font-normal mb-2 tracking-tight group-hover:text-accent transition-colors">
                    {svc.title}
                  </h2>
                  <div className="text-[12px] font-semibold text-accent tracking-wider uppercase mb-6">
                    {svc.tagline}
                  </div>
                  <p className="text-[15px] text-foreground/70 leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <p className="text-[15px] text-foreground/60 leading-relaxed mb-8">
                    {svc.extendedDesc}
                  </p>

                  <h3 className="text-[14px] font-medium text-foreground/95 mb-4 tracking-wider uppercase">
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {svc.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-[14px] text-foreground/60">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={svc.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13.5px] font-medium text-accent bg-accent/10 border border-accent/30 hover:border-accent hover:bg-accent hover:text-background px-6 py-3 rounded-full transition-all duration-300 shadow-sm"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── Consultation Unified Box ── */}
        <section
          className="mt-16 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(32, 210, 190, 0.08) 0%, rgba(100, 160, 255, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-[600px] mx-auto mb-8">
            No worries! Tell us about your business goals and current blockages, and we will formulate a personalized growth strategy. The first consultation is 100% free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20book%20a%20free%20growth%20consultation!"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[14px] font-medium text-background bg-foreground px-7 py-3.5 rounded-full hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <Link
              href="/case-studies"
              className="font-sans text-[14px] font-normal text-foreground px-7 py-3.5 rounded-full glass border border-glass-border hover:bg-foreground/5 hover:scale-[1.02] transition-all duration-300"
            >
              See Our Case Studies
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
