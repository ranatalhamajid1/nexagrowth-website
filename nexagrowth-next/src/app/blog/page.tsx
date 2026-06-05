"use client";
import Footer from "../../components/Footer";
import React, { useState, useMemo } from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Clock, Search } from "lucide-react";

interface PostItem {
  title: string;
  excerpt: string;
  cat: string;
  readTime: string;
  url: string;
  date: string;
}

export default function BlogHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const posts: PostItem[] = [
    {
      title: "Facebook Ads in Pakistan: The Ultimate Guide (2026)",
      excerpt: "Stop wasting money boosting posts. Learn how to structure proper conversion campaigns, setup retargeting funnels, and scale actual e-commerce sales.",
      cat: "Paid Ads",
      readTime: "12 min read",
      url: "/blog/facebook-ads-pakistan",
      date: "May 25, 2026"
    },
    {
      title: "Local SEO for Pakistani Businesses: Get Found on Google Maps",
      excerpt: "A complete step-by-step framework to optimize your Google My Business profile and rank #1 for 'near me' local searches. Absolute necessity for physical locations.",
      cat: "SEO",
      readTime: "9 min read",
      url: "/blog/local-seo-pakistani-businesses",
      date: "May 18, 2026"
    },
    {
      title: "Digital Marketing Cost in Pakistan: Full Pricing Guide",
      excerpt: "An honest, detailed breakdown of digital marketing budgets in Pakistan. What should you spend on ads, content creation, web dev, and SEO services?",
      cat: "Strategy",
      readTime: "7 min read",
      url: "/blog/digital-marketing-cost-pakistan",
      date: "May 10, 2026"
    },
    {
      title: "SEO vs. Paid Ads: What's the Best Route in 2026?",
      excerpt: "Should you invest your ad budget in instant search ads, or long-term organic search authority? We analyze CPA, ROAS, and compounding effects.",
      cat: "SEO",
      readTime: "6 min read",
      url: "/blog/seo-vs-paid-ads-pakistan-2026",
      date: "May 02, 2026"
    },
    {
      title: "E-Commerce Marketing Strategy for Pakistani Stores",
      excerpt: "Discover the exact growth loops and purchase funnels that e-commerce brands in Karachi and Lahore use to cross 7-figure monthly revenue targets.",
      cat: "E-Commerce",
      readTime: "10 min read",
      url: "/blog/ecommerce-marketing-pakistan",
      date: "April 26, 2026"
    },
    {
      title: "Beginner's SEO Guide: How Google Works and Why It Matters",
      excerpt: "New to SEO? Learn how crawling, indexation, and ranking algorithms function, and how to format pages to make sure search bots understand them.",
      cat: "SEO",
      readTime: "8 min read",
      url: "/blog/beginner-seo-guide",
      date: "April 15, 2026"
    },
    {
      title: "Content Marketing Strategy: Rank on Google on Autopilot",
      excerpt: "A data-first content publishing strategy designed to build organic authority, answer buyer questions, and secure high-intent inbound search leads.",
      cat: "Content",
      readTime: "8 min read",
      url: "/blog/content-marketing-strategy-pakistan",
      date: "April 08, 2026"
    },
    {
      title: "Google Ads vs. Facebook Ads: Which is Better in Pakistan?",
      excerpt: "Do you need search intent captures (Google), or visual interest generation (Facebook)? We compare conversion rates, audience pricing, and ROAS scales.",
      cat: "Paid Ads",
      readTime: "7 min read",
      url: "/blog/google-ads-vs-facebook-ads-pakistan",
      date: "March 29, 2026"
    },
    {
      title: "What is Growth Marketing and How to Start in Pakistan",
      excerpt: "Traditional advertising is dead. Discover the AARRR funnel framework (Acquisition, Activation, Retention, Referral, Revenue) and scale.",
      cat: "Strategy",
      readTime: "6 min read",
      url: "/blog/what-is-growth-marketing-pakistan-2026",
      date: "March 20, 2026"
    },
    {
      title: "How to Generate Leads in Pakistan Using Digital Channels",
      excerpt: "Frustrated with junk leads? Here is how to create high-converting lead magnets, landing pages, and automated follow-ups that close deals.",
      cat: "Strategy",
      readTime: "8 min read",
      url: "/blog/how-to-generate-leads-in-pakistan-using-digital-marketing",
      date: "March 11, 2026"
    },
    {
      title: "HTML vs. WordPress: Which CMS is Best for E-Commerce?",
      excerpt: "We compare custom static/react architectures against heavy WordPress/WooCommerce templates on page speed, security, indexing, and conversions.",
      cat: "Web Dev",
      readTime: "7 min read",
      url: "/blog/html-vs-wordpress",
      date: "March 03, 2026"
    },
    {
      title: "Instagram Marketing Guide: Grow Real Followers and Sales",
      excerpt: "Visual branding, reel formats, caption hooks, and DM automation setups that convert curious profile visitors into direct brand advocates.",
      cat: "Social",
      readTime: "8 min read",
      url: "/blog/instagram-marketing-guide",
      date: "February 22, 2026"
    },
  ];

  // Unique categories
  const categories = useMemo(() => {
    const list = new Set(posts.map(p => p.cat));
    return ["All", ...Array.from(list)];
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === "All" || p.cat === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory, posts]);

  // JSON-LD Schema for rich snippet SEO support
  const structuredSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "NexaGrowth Growth Journal",
    "url": "https://www.nexagrowth.xyz/blog",
    "description": "Expert insights on SEO, Facebook Ads, content, and growth hacking in Pakistan.",
    "publisher": {
      "@type": "Organization",
      "name": "NexaGrowth",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nexagrowth.xyz/logo.png"
      }
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <Background />
      <Navigation activeRoute="other" />

      {/* Structured Schema script injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />

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
            Raw insights, battle-tested digital strategies, SEO secrets, and ad templates designed specifically to help brands scale.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-[500px] mt-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles (e.g. 'ads', 'maps', 'strategy')..."
              className="w-full glass border border-glass-border focus:border-accent hover:border-foreground/20 bg-glass-bg text-foreground placeholder:text-foreground/45 px-6 py-4 rounded-full text-[14.5px] outline-none transition-colors pr-12"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="w-full max-w-[940px] mx-auto px-6 mb-8 flex gap-2 overflow-x-auto pb-3 scrollbar-none justify-start md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4.5 py-2.5 rounded-full text-[12.5px] font-semibold transition-all duration-300 border flex-shrink-0 cursor-pointer ${
              activeCategory === cat
                ? "bg-accent/15 border-accent/40 text-accent shadow-[0_0_15px_rgba(51,214,200,0.15)]"
                : "border-glass-border text-foreground/60 hover:text-foreground hover:border-foreground/25 hover:bg-glass-hover glass"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Articles Grid list ── */}
      <main className="flex-1 w-full max-w-[940px] mx-auto px-6 py-4 pb-24 relative z-20">
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 glass rounded-[20px] border border-glass-border">
            <p className="text-[14.5px] text-foreground/50">No articles match your search parameters.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={idx}
                className="glass p-8 md:p-10 rounded-[20px] border border-glass-border hover:border-accent/30 bg-glass-bg flex flex-col md:flex-row gap-6 overflow-hidden group hover:translate-y-[-2px] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                style={{
                  backdropFilter: "blur(16px) saturate(1.6)",
                }}
              >
                {/* Category & Read Time Column */}
                <div className="flex flex-row md:flex-col md:items-start gap-4 md:w-32 flex-shrink-0">
                  <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-md block h-fit">
                    {post.cat}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-foreground/40 mt-1">
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
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-foreground transition-colors group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ── Consultation CTA Block ── */}
        <section
          className="mt-20 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(32, 210, 190, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Need Expert Strategy Writing or Copywriting?
          </h3>
          <p className="text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-[600px] mx-auto mb-8">
            SEO copywriting is a delicate art. We draft highly engaging, rankable content designed to turn cold search traffic into brand customers.
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

      <Footer />
    </div>
  );
}
