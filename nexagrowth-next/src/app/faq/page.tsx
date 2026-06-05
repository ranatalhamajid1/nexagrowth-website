"use client";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, ChevronDown, Search, ArrowRight, MessageSquare } from "lucide-react";

interface FAQItem {
  id: string;
  q: string;
  a: string;
  cat: "General" | "Pricing & Process" | "Services & Strategy";
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      cat: "General",
      q: "What digital marketing services does NexaGrowth offer?",
      a: "We offer a full range of digital marketing services including SEO & organic growth, paid advertising (Facebook, Google, TikTok), content marketing (blogs, social media, email), influencer management, and web development. Each service is tailored to the specific needs and goals of your business.",
    },
    {
      id: "faq-2",
      cat: "General",
      q: "How is NexaGrowth different from other agencies?",
      a: "We combine technical web development skills with marketing expertise — which means we don't just run ads, we also understand the technical side of your website, SEO, and conversions. We're Pakistan-focused, results-driven, and we never lock you into long-term contracts. We earn your trust every month through real results.",
    },
    {
      id: "faq-3",
      cat: "General",
      q: "Do you offer free consultations?",
      a: "Yes, your first consultation is always free with no obligations. We'll discuss your business goals, review your current online presence, and suggest a strategy that fits your budget.",
    },
    {
      id: "faq-4",
      cat: "General",
      q: "Do you work with small businesses?",
      a: "Absolutely. Most of our clients are small to medium-sized businesses in Pakistan. We believe every business — whether you're a solo entrepreneur selling online or a growing company — deserves access to quality digital marketing. We have flexible packages designed for every budget level.",
    },
    {
      id: "faq-5",
      cat: "General",
      q: "Do you work with international clients?",
      a: "Yes. While we're based in Pakistan, we work with clients globally. Our digital-first approach means location is never a barrier. We communicate via email, WhatsApp, and video calls — whatever works best for you.",
    },
    {
      id: "faq-6",
      cat: "Pricing & Process",
      q: "How much does digital marketing cost in Pakistan?",
      a: "Pricing varies based on the service and scope. As a rough guide: SEO starts from PKR 15,000–30,000/month, Facebook Ads management from PKR 10,000–25,000/month (plus ad spend), content marketing from PKR 10,000–20,000/month, and web development projects range from PKR 25,000–100,000+.",
    },
    {
      id: "faq-7",
      cat: "Pricing & Process",
      q: "How long before I see results?",
      a: "It depends on the service. Paid ads can start generating leads within the first week. SEO typically takes 3–6 months to show significant ranking improvements. Content marketing is a long-term strategy that compounds over time. We always set realistic timelines from day one — no false promises.",
    },
    {
      id: "faq-8",
      cat: "Pricing & Process",
      q: "Do you offer monthly contracts?",
      a: "Yes, we operate on month-to-month contracts for most services. No long-term lock-in. You stay because you see results, not because you're trapped in a contract. For web development projects, we work on a project-basis with clear milestones and deliverables.",
    },
    {
      id: "faq-9",
      cat: "Pricing & Process",
      q: "What payment methods do you accept?",
      a: "For Pakistani clients, we accept bank transfer (all major banks), JazzCash, EasyPaisa, and cash payments. For international clients, we accept PayPal and wire transfer. We're flexible and will work with whatever payment method is most convenient for you.",
    },
    {
      id: "faq-10",
      cat: "Pricing & Process",
      q: "How do you measure success?",
      a: "We focus on metrics that actually matter to your business: leads generated, sales made, ROAS (return on ad spend), organic traffic growth, keyword rankings, and conversion rates. We provide clear monthly reports showing exactly what we did, what results it produced, and what we recommend next. No vanity metrics.",
    },
    {
      id: "faq-11",
      cat: "Services & Strategy",
      q: "What is SEO and why does my business need it?",
      a: "SEO (Search Engine Optimization) is the process of optimizing your website so it ranks higher in Google search results. When people in Pakistan search for products or services you offer — like 'best restaurant in Karachi' or 'buy shoes online Pakistan' — SEO helps your website appear at the top. This brings free, targeted traffic to your business without spending on ads.",
    },
    {
      id: "faq-12",
      cat: "Services & Strategy",
      q: "What platforms do you advertise on?",
      a: "We run campaigns on Facebook, Instagram, Google Search & Display, YouTube, TikTok, and LinkedIn. The platform we recommend depends entirely on your target audience and business goals. For most Pakistani businesses, Facebook and Instagram deliver the best ROI, but we'll always recommend what's right for your specific situation.",
    },
    {
      id: "faq-13",
      cat: "Services & Strategy",
      q: "Should I invest in SEO or paid ads?",
      a: "It depends on your goals and timeline. Paid ads give you immediate results but stop working when you stop paying. SEO takes longer but generates free, sustainable traffic. Ideally, the best approach is a combination of both.",
    },
    {
      id: "faq-14",
      cat: "Services & Strategy",
      q: "Can I see your previous work?",
      a: "Yes. You can browse our Work page to see examples of our campaigns, and our Case Studies page for detailed breakdowns of client projects including the strategy used and results achieved.",
    },
    {
      id: "faq-15",
      cat: "Services & Strategy",
      q: "Will I get a dedicated account manager?",
      a: "Yes. Every client gets a dedicated point of contact who understands your business, goals, and strategy. You'll have direct communication via WhatsApp, email, or calls — and we pride ourselves on fast response times. You'll never feel like just another number.",
    },
  ];

  const categories = ["All", "General", "Pricing & Process", "Services & Strategy"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.cat === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  // Structured Schema for Google SEO Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>FAQ — Frequently Asked Questions | NexaGrowth</title>
      <meta name="description" content="Have questions? Find answers about our pricing, digital marketing process, expectations, and how we deliver real results." />
      <Background />
      <Navigation activeRoute="other" />

      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Page Hero ── */}
      <header className="page-hero w-full relative">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <HelpCircle size={12} className="text-accent animate-pulse" />
            Help Center
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Frequently Asked Questions
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] mb-8 fade-rise-subheadline">
            Everything you need to know about scaling your brand with NexaGrowth. Can't find what you need? WhatsApp us directly.
          </p>

          {/* Search bar inside Hero */}
          <div className="w-full max-w-[500px] relative glass rounded-full border border-glass-border hover:border-accent/40 bg-glass-bg px-5 py-3.5 flex items-center transition-all duration-300 shadow-lg">
            <Search size={18} className="text-foreground/40 mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none border-none text-[14.5px] text-foreground placeholder:text-foreground/30"
            />
          </div>
        </div>
      </header>

      {/* ── Category Filters ── */}
      <nav className="w-full relative z-20 flex justify-center px-6 mb-12">
        <div className="flex flex-wrap gap-2 justify-center p-1.5 rounded-full glass border border-glass-border bg-glass-bg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveId(null);
              }}
              className={`px-5 py-2 rounded-full text-[12.5px] font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-foreground text-background font-semibold scale-102"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Accordion List ── */}
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-4 pb-24 relative z-20" aria-label="FAQ Questions list">
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = activeId === faq.id;
                return (
                  <motion.article
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`glass rounded-[18px] border transition-all duration-300 overflow-hidden ${
                      isOpen ? "border-accent/40 bg-glass-hover" : "border-glass-border hover:border-foreground/15 bg-glass-bg"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-5 bg-transparent border-none cursor-pointer text-left outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`${faq.id}-content`}
                    >
                      <h2 className={`text-[15.5px] md:text-[17px] font-medium tracking-tight transition-colors duration-300 font-serif ${
                        isOpen ? "text-accent" : "text-foreground"
                      }`}>
                        {faq.q}
                      </h2>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-glass-border transition-transform duration-500 ${
                        isOpen ? "rotate-180 border-accent/30 text-accent bg-accent/10" : "text-foreground/40 bg-glass-hover"
                      }`}>
                        <ChevronDown size={15} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`${faq.id}-content`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-7 text-[13.5px] md:text-[14.5px] text-foreground/60 leading-relaxed border-t border-glass-border pt-4">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })
            ) : (
              <div className="text-center py-16 text-foreground/40 text-[14.5px] font-serif">
                No matching questions found. Try searching for other keywords.
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* ── consultation CTA ── */}
        <section
          className="mt-16 glass p-8 md:p-12 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-md"
          style={{
            background: "linear-gradient(135deg, rgba(32, 210, 190, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal mb-3">
            Still Have Questions?
          </h3>
          <p className="text-[13.5px] md:text-[14.5px] text-foreground/75 leading-relaxed max-w-[500px] mx-auto mb-6">
            We are always here to help. Reach out and Talha will personally reply to you on WhatsApp within a few hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I%20have%20a%20question%20about%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-background bg-foreground px-6 py-3 rounded-full hover:scale-[1.03] transition-all duration-300"
            >
              <MessageSquare size={13} />
              <span>Instant WhatsApp Chat</span>
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 text-[13px] font-normal text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover bg-glass-bg transition-all duration-300"
            >
              <span>Get Free Audit</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
