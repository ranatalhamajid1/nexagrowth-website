"use client";
import React from "react";
import Link from "next/link";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Sparkles, ArrowRight, BookOpen, Video, FileText, Download } from "lucide-react";

interface Resource {
  icon: React.ReactNode;
  title: string;
  desc: string;
  type: string;
  link: string;
}

const resources: Resource[] = [
  {
    icon: <FileText size={18} />,
    title: "Website Launch Checklist",
    desc: "20-point checklist to ensure your website is production-ready — SEO, performance, security, and more.",
    type: "PDF Guide",
    link: "#",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Social Media Strategy Template",
    desc: "Monthly content planning template with hooks, hashtag strategies, and scheduling best practices.",
    type: "Template",
    link: "#",
  },
  {
    icon: <Video size={18} />,
    title: "Shopify Store Setup Guide",
    desc: "Step-by-step video guide to setting up your Shopify store with Pakistani payment gateways.",
    type: "Video Guide",
    link: "#",
  },
  {
    icon: <FileText size={18} />,
    title: "SEO Fundamentals for Pakistani Businesses",
    desc: "Local SEO strategies, keyword research techniques, and on-page optimization tips for Pakistan.",
    type: "PDF Guide",
    link: "#",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Brand Identity Workbook",
    desc: "Define your brand voice, visual identity, target audience, and competitive positioning.",
    type: "Workbook",
    link: "#",
  },
  {
    icon: <Video size={18} />,
    title: "Meta Ads for Beginners",
    desc: "Learn how to set up your first Facebook and Instagram ad campaigns for e-commerce in Pakistan.",
    type: "Video Course",
    link: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Resources — Free Guides & Templates | NexaGrowth</title>
      <meta name="description" content="Free guides, templates, and video courses from NexaGrowth to help Pakistani businesses grow their digital presence." />
      <Background />
      <Navigation activeRoute="other" />

      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Free Resources
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6">
            Resources
          </h1>
          <p className="text-[15px] sm:text-[17px] text-foreground/60 leading-[1.7] max-w-[580px]">
            Free guides, templates, and courses to help you understand digital marketing and make informed decisions.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((r, i) => (
            <div
              key={i}
              className="glass p-7 rounded-[20px] border border-white/8 bg-white/[0.02] hover:border-accent/25 transition-all duration-300 group hover:translate-y-[-2px] flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                  {r.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-medium text-foreground mb-1">{r.title}</h3>
                  <span className="text-[10px] font-bold text-accent/70 tracking-wider uppercase">
                    {r.type}
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-foreground/55 leading-relaxed flex-1 mb-4">{r.desc}</p>
              <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground/40 group-hover:text-accent transition-colors">
                <Download size={12} />
                <span>Coming Soon</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 glass p-8 md:p-10 rounded-[24px] border border-white/8 bg-white/[0.02] text-center">
          <h3 className="font-serif text-2xl text-foreground mb-3">Get Notified</h3>
          <p className="text-[13.5px] text-foreground/55 leading-relaxed mb-6 max-w-[450px] mx-auto">
            Subscribe to be the first to know when new resources, guides, and templates are published.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-[400px] mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-5 py-3 text-[13px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <button className="text-[13px] font-medium text-[#001f3d] bg-white px-6 py-3 rounded-full hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-1.5">
              Subscribe <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
