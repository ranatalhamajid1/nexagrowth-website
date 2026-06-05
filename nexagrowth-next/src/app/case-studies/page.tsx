"use client";
import Footer from "../../components/Footer";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, TrendingUp, Calendar, Target, CheckCircle2 } from "lucide-react";

interface StatItem {
  val: string;
  lbl: string;
}

interface TimelineItem {
  title: string;
  desc: string;
}

interface CaseStudy {
  catBadge: string;
  title: string;
  dotColor: string;
  problem: string;
  strategy: string[];
  results: StatItem[];
  timeline: TimelineItem[];
  takeaway: string;
}

export default function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      catBadge: "E-Commerce · Paid Ads",
      title: "LuxeVibe Fashion: From Low ROAS to 280% Growth",
      dotColor: "#f43f5e",
      problem: "LuxeVibe Fashion, a premium clothing label based in Lahore, was spending PKR 50,000/month on Facebook Ads but generating only PKR 70,000 in monthly revenue — a ROAS of just 1.4x. Their campaigns were poorly structured: they were boosting posts instead of running conversion campaigns, targeting all of Pakistan with no audience segmentation, and relying on low-quality product photos.",
      strategy: [
        "Campaign Restructuring: Migrated from boosted posts to proper Ads Manager purchase conversion campaigns.",
        "Audience Segmentation: Segmented target audiences by high-purchasing cities (Karachi, Lahore, Islamabad) and interest groups.",
        "Creative Overhaul: Shot new lifestyle product assets and constructed interactive short video ads with engaging Urdu copywriting.",
        "Retargeting Funnel: Implemented high-converting custom retargeting setups and abandoned cart reminders.",
        "Continuous A/B Testing: Maintained strict A/B tests on winning video hooks to optimize ad spend.",
      ],
      results: [
        { val: "+280%", lbl: "ROAS Improvement" },
        { val: "PKR 550K", lbl: "Monthly Revenue" },
        { val: "-42%", lbl: "Cost Per Purchase" },
        { val: "3 Months", lbl: "Timeline" },
      ],
      timeline: [
        { title: "Month 1", desc: "Audit, pixel setup, restructure and creative shoots" },
        { title: "Month 2", desc: "Testing audience groups, retargeting funnels active" },
        { title: "Month 3", desc: "Scaling high-performing hooks, stabilizing CPA" },
      ],
      takeaway: "Key takeaway: Proper campaign structure and audience segmentation made all the difference. The ad spend stayed the same — the strategy changed everything.",
    },
    {
      catBadge: "Local Business · SEO & Social",
      title: "Karachi Restaurant Chain: 45% More Walk-Ins in 60 Days",
      dotColor: "#fbbf24",
      problem: "A popular food establishment with 3 active locations in Karachi was experiencing declining walk-ins despite a great menu and reviews. They had no active Google My Business (GMB) presence, inconsistent social grids, and zero structured reviews. Local customers searching 'restaurants near me' on maps could not find them.",
      strategy: [
        "Google My Business: Created and fully optimized GMB profiles for all 3 branch locations with professional imagery.",
        "Review Capture Loop: Implemented table QR codes linking customers directly to their branch Google Maps review page.",
        "Geo-Targeted Local Ads: Launched Meta campaigns targeting a tight 5km radius around each location with enticing food photography.",
        "Influencer partnerships: Invited local food vloggers for complimentary tasting meals in exchange for honest video reviews.",
        "Social Content Sync: Synchronized organic grids with daily behind-the-scenes stories and customer testimonials.",
      ],
      results: [
        { val: "+45%", lbl: "Walk-In Traffic" },
        { val: "320+", lbl: "Google Reviews" },
        { val: "#1 Rank", lbl: "Local Maps Rank" },
        { val: "60 Days", lbl: "Timeline" },
      ],
      timeline: [
        { title: "Weeks 1-2", desc: "GMB optimization, review QR prints, branch photo shoots" },
        { title: "Weeks 3-4", desc: "Localized ad campaigns active, food blogger reviews live" },
        { title: "Weeks 5-8", desc: "Google Maps rankings scale, daily customer review growth" },
      ],
      takeaway: "Key takeaway: For local businesses, Google My Business optimization coupled with hyper-local ad targeting drives faster action than a standard site alone.",
    },
    {
      catBadge: "SaaS · SEO & Content Marketing",
      title: "NexaBuild SaaS: From Zero Organic Traffic to Page 1",
      dotColor: "#10b981",
      problem: "NexaBuild, a digital project management SaaS for Pakistani freelancers and agencies, had zero organic search visibility. All leads were generated via paid ads at a high PKR 800 cost-per-lead. The site lacked a blog, suffered from severe core web vital issues (4.2s load), and indexation page blocks.",
      strategy: [
        "Technical SEO Repair: Solved Google crawl indexation blocks and optimized Web Vitals, reducing load time to 1.8s.",
        "Keyword Domination: Identified 50+ high-volume, low-competition transactional keywords for Pakistani creators.",
        "Authority Content Writing: Produced high-quality in-depth guides and SEO-ready comparative articles weekly.",
        "Strategic Internal Linking: Structured high-authority hubs linking articles directly to sign-up lead forms.",
        "Outreach Backlinks: Acquired editorial mentions from 8 reputable tech/business portals.",
      ],
      results: [
        { val: "12", lbl: "Page 1 Keywords" },
        { val: "+180%", lbl: "Organic Traffic" },
        { val: "-65%", lbl: "Cost Per Lead" },
        { val: "4 Months", lbl: "Timeline" },
      ],
      timeline: [
        { title: "Month 1", desc: "Technical SEO fixes, site speed audit, keyword mapping" },
        { title: "Months 2-3", desc: "Publishing keyword hubs, launching link outreach" },
        { title: "Month 4", desc: "Keywords scale to Page 1, organic lead acquisition begins" },
      ],
      takeaway: "Key takeaway: SEO is a compound investment. While paid ads stop the moment you turn them off, organic search assets continue driving leads for free long term.",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Case Studies — Real Results & ROAS Growth | NexaGrowth</title>
      <meta name="description" content="Deep dive into our case studies showing how we help Pakistani businesses scale sales, optimize conversion rates, and maximize ROAS." />
      <Background />
      <Navigation activeRoute="case-studies" />

      {/* ── Page Hero Banner ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Proven Results
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Case Studies
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Real data. Real business impact. Explore the comprehensive digital marketing frameworks, creative plans, and search strategies driving brand growth.
          </p>
        </div>
      </header>

      {/* ── Case Studies Main Grid ── */}
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 py-12 pb-24 relative z-20">
        <div className="flex flex-col gap-16">
          {caseStudies.map((cs, idx) => (
            <article
              key={idx}
              className="glass rounded-[24px] overflow-hidden border border-glass-border bg-glass-bg shadow-md"
              style={{
                backdropFilter: "blur(16px) saturate(1.6)",
              }}
            >
              {/* Card visual mockup window bar */}
              <div className="px-6 py-4 flex items-center gap-2 bg-glass-hover border-b border-glass-border select-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              </div>

              {/* Card Content Body */}
              <div className="p-8 md:p-12">
                <span className="inline-block text-[11px] font-bold text-accent tracking-[0.12em] uppercase bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full mb-6">
                  {cs.catBadge}
                </span>

                <h2 className="text-2xl md:text-3.5xl font-serif text-foreground font-normal mb-6 tracking-tight">
                  {cs.title}
                </h2>

                {/* Problem */}
                <div className="mb-8">
                  <h3 className="text-[14px] font-medium text-foreground/90 tracking-wider uppercase mb-3 flex items-center gap-2">
                    <Target size={14} className="text-accent" />
                    <span>The Challenge</span>
                  </h3>
                  <p className="text-[15px] text-foreground/75 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                {/* Strategy */}
                <div className="mb-8">
                  <h3 className="text-[14px] font-medium text-foreground/90 tracking-wider uppercase mb-3 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" />
                    <span>Our Strategic Approach</span>
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {cs.strategy.map((strat, i) => (
                      <li key={i} className="text-[14.5px] text-foreground/60 leading-relaxed flex items-start gap-2.5">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span>{strat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                  {cs.results.map((stat, i) => (
                    <div 
                      key={i} 
                      className="glass p-5 rounded-[16px] text-center border border-glass-border hover:border-accent/30 transition-all duration-300 bg-glass-bg"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold font-serif bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                        {stat.val}
                      </div>
                      <div className="text-[10px] text-foreground/45 tracking-[0.08em] uppercase mt-2 leading-tight">
                        {stat.lbl}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Timeline phases */}
                <div className="mb-8">
                  <h3 className="text-[14px] font-medium text-foreground/90 tracking-wider uppercase mb-4 flex items-center gap-2">
                    <Calendar size={14} className="text-accent" />
                    <span>Campaign Implementation Timeline</span>
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {cs.timeline.map((time, i) => (
                      <div 
                        key={i} 
                        className="flex-1 glass p-5 rounded-[14px] text-center border border-glass-border bg-glass-bg"
                      >
                        <strong className="block text-[13px] font-semibold text-accent mb-1 uppercase tracking-wider">
                          {time.title}
                        </strong>
                        <span className="text-[13px] text-foreground/60 leading-relaxed">
                          {time.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Takeaway box */}
                <div className="p-5 rounded-[14px] bg-accent/5 border border-accent/15 text-[14.5px] text-foreground/75 leading-relaxed">
                  {cs.takeaway}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Consultation CTA Block ── */}
        <section
          className="mt-20 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-md"
          style={{
            background: "linear-gradient(135deg, rgba(32, 210, 190, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Want Growth Results Like These?
          </h3>
          <p className="text-[15px] md:text-base text-foreground/75 leading-relaxed max-w-[600px] mx-auto mb-8">
            Every business has a distinct audience. We do not apply generic formulas; we customize and build exact metrics loops for your industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20partnering%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-background bg-foreground px-8 py-4 rounded-full hover:scale-[1.03] hover:shadow-md transition-all duration-300"
            >
              <span>Get Free Strategy Session</span>
              <TrendingUp size={15} />
            </a>
            <Link
              href="/services"
              className="font-sans text-[14px] font-normal text-foreground px-7 py-4 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] bg-glass-bg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
