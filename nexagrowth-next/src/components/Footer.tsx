"use client";
import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <footer className="w-full bg-background/40 backdrop-blur-md border-t border-glass-border pt-16 pb-8 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-serif text-2xl md:text-3xl text-foreground tracking-tight block mb-6"
            >
              NexaGrowth<span className="text-[12px] align-super opacity-80 ml-0.5">®</span>
            </Link>
            <p className="text-[13px] text-text-muted leading-relaxed max-w-sm mb-8">
              Pakistan's Premium Digital Growth Partner. We combine technical engineering competence with data-backed conversion and SEO strategy to scale local and international brands.
            </p>
            
            <span className="block text-[11px] text-text-subtle">
              Based in Pakistan. Operating Globally. Remote-First.
            </span>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 col-span-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-foreground mb-6">Growth Channels</h4>
            <ul className="flex flex-col gap-3 text-[13px] text-text-muted">
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors duration-300">
                  SEO & Search Authority
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors duration-300">
                  Next.js Web Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors duration-300">
                  Shopify Store Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors duration-300">
                  High-Retention Video Editing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors duration-300">
                  Performance Ads Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-foreground mb-6">Resources</h4>
            <ul className="flex flex-col gap-3 text-[13px] text-text-muted">
              <li>
                <Link href="/tools" className="hover:text-foreground transition-colors duration-300">
                  14+ Free Online Tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors duration-300">
                  25+ Marketing Articles
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors duration-300">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors duration-300">
                  Free Guides & Templates
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-foreground transition-colors duration-300">
                  Concept Showcases
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-foreground transition-colors duration-300">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/referral" className="hover:text-foreground transition-colors duration-300">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to top & Info */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={handleScrollToTop}
              className="h-10 w-10 rounded-full border border-glass-border hover:border-foreground/20 bg-glass-bg hover:bg-glass-hover text-foreground flex items-center justify-center transition-all duration-300 self-start md:self-auto hover:translate-y-[-2px]"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>

            <div className="mt-8 md:mt-0 text-left md:text-right">
              <span className="block text-[10px] font-bold text-accent-teal uppercase tracking-widest mb-1.5">Free Diagnostic Audit</span>
              <Link href="/#contact" className="text-[13px] font-semibold text-foreground hover:text-accent-teal transition-colors duration-300">
                Book consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-glass-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-text-subtle">
          <p>© 2026 NexaGrowth. All rights reserved. Registered Trademark. Mapped and audited globally.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-300">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors duration-300">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
