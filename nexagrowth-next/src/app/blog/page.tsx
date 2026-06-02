"use client";
import Footer from "../../components/Footer";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Clock, Heart } from "lucide-react";

interface PostItem {
  title: string;
  excerpt: string;
  cat: string;
  readTime: string;
  url: string;
}

export default function BlogHubPage() {
  const posts: PostItem[] = [
    {
      title: "Facebook Ads in Pakistan: The Ultimate Guide (2026)",
      excerpt: "Stop wasting money boosting posts. Learn how to structure proper conversion campaigns, setup retargeting funnels, and scale actual e-commerce sales.",
      cat: "Paid Ads",
      readTime: "12 min read",
      url: "/blog/facebook-ads-pakistan",
    },
    {
      title: "Local SEO for Pakistani Businesses: Get Found on Google Maps",
      excerpt: "A complete step-by-step framework to optimize your Google My Business profile and rank #1 for 'near me' local searches. Absolute necessity for physical locations.",
      cat: "SEO",
      readTime: "9 min read",
      url: "/blog/local-seo-pakistani-businesses",
    },
    {
      title: "Digital Marketing Cost in Pakistan: Full Pricing Guide",
      excerpt: "An honest, detailed breakdown of digital marketing budgets in Pakistan. What should you spend on ads, content creation, web dev, and SEO services?",
      cat: "Growth Strategy",
      readTime: "7 min read",
      url: "/blog/digital-marketing-cost-pakistan",
    },
    {
      title: "SEO vs. Paid Ads: What's the Best Route in 2026?",
      excerpt: "Should you invest your ad budget in instant search ads, or long-term organic search authority? We analyze CPA, ROAS, and compounding effects.",
      cat: "SEO vs. Ads",
      readTime: "6 min read",
      url: "/blog/seo-vs-paid-ads-pakistan-2026",
    },
    {
      title: "E-Commerce Marketing Strategy for Pakistani Stores",
      excerpt: "Discover the exact growth loops and purchase funnels that e-commerce brands in Karachi and Lahore use to cross 7-figure monthly revenue targets.",
      cat: "E-Commerce",
      readTime: "10 min read",
      url: "/blog/ecommerce-marketing-pakistan",
    },
    {
      title: "Beginner's SEO Guide: How Google Works and Why It Matters",
      excerpt: "New to SEO? Learn how crawling, indexation, and ranking algorithms function, and how to format pages to make sure search bots understand them.",
      cat: "SEO",
      readTime: "8 min read",
      url: "/blog/beginner-seo-guide",
    },
    {
      title: "Content Marketing Strategy: Rank on Google on Autopilot",
      excerpt: "A data-first content publishing strategy designed to build organic authority, answer buyer questions, and secure high-intent inbound search leads.",
      cat: "Content",
      readTime: "8 min read",
      url: "/blog/content-marketing-strategy-pakistan",
    },
    {
      title: "Google Ads vs. Facebook Ads: Which is Better in Pakistan?",
      excerpt: "Do you need search intent captures (Google), or visual interest generation (Facebook)? We compare conversion rates, audience pricing, and ROAS scales.",
      cat: "Paid Ads",
      readTime: "7 min read",
      url: "/blog/google-ads-vs-facebook-ads-pakistan",
    },
    {
      title: "What is Growth Marketing and How to Start in Pakistan",
      excerpt: "Traditional advertising is dead. Discover the AARRR funnel framework (Acquisition, Activation, Retention, Referral, Revenue) and scale.",
      cat: "Growth Strategy",
      readTime: "6 min read",
      url: "/blog/what-is-growth-marketing-pakistan-2026",
    },
    {
      title: "How to Generate Leads in Pakistan Using Digital Channels",
      excerpt: "Frustrated with junk leads? Here is how to create high-converting lead magnets, landing pages, and automated follow-ups that close deals.",
      cat: "Lead Gen",
      readTime: "8 min read",
      url: "/blog/how-to-generate-leads-in-pakistan-using-digital-marketing",
    },
    {
      title: "HTML vs. WordPress: Which CMS is Best for E-Commerce?",
      excerpt: "We compare custom static/react architectures against heavy WordPress/WooCommerce templates on page speed, security, indexing, and conversions.",
      cat: "Web Dev",
      readTime: "7 min read",
      url: "/blog/html-vs-wordpress",
    },
    {
      title: "Instagram Marketing Guide: Grow Real Followers and Sales",
      excerpt: "Visual branding, reel formats, caption hooks, and DM automation setups that convert curious profile visitors into direct brand advocates.",
      cat: "Social",
      readTime: "8 min read",
      url: "/blog/instagram-marketing-guide",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero Banner ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <BookOpen size={12} className="text-accent animate-pulse" />
            The Growth Journal
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Journal & Articles
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Raw insights, battle-tested digital strategies, SEO secrets, and ad templates designed specifically to help brands scale in the Pakistani market.
          </p>
        </div>
      </header>

      {/* ── Articles Grid list ── */}
      <main className="flex-1 w-full max-w-[940px] mx-auto px-6 py-4 pb-24 relative z-20">
        <div className="flex flex-col gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="glass p-8 md:p-10 rounded-[20px] border border-glass-border hover:border-accent/30 bg-glass-bg flex flex-col md:flex-row gap-6 overflow-hidden group hover:translate-y-[-2px] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              style={{
                backdropFilter: "blur(16px) saturate(1.6)",
              }}
            >
              {/* Category & Read Time Column */}
              <div className="flex flex-row md:flex-col md:items-start gap-4 md:w-32 flex-shrink-0">
                <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-md block">
                  {post.cat}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-foreground/40">
                  <Clock size={11} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-serif text-foreground font-normal mb-3 tracking-tight group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-[14.5px] text-foreground/60 leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-foreground transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Consultation CTA Block ── */}
        <section
          className="mt-20 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(32, 210, 190, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Need Expert Writing or Copywriting?
          </h3>
          <p className="text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-[600px] mx-auto mb-8">
            SEO copywriting is a delicate art. We draft highly engaging, rankable content designed to turn cold traffic into brand customers.
          </p>
          <a
            href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20copywriting%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-background bg-foreground px-8 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <span>Start Content Consultation</span>
            <ArrowRight size={15} />
          </a>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
