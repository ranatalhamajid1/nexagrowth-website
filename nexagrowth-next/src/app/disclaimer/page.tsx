"use client";
import Footer from "../../components/Footer";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, Shield, ArrowRight, Mail } from "lucide-react";

export default function DisclaimerPage() {
  const sections = [
    {
      num: "01",
      title: "General Disclaimer",
      content: "The information provided on this website (nexagrowth.xyz) is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website. Any reliance you place on such information is strictly at your own risk. NexaGrowth shall not be held liable for any loss or damage arising from the use of this website.",
    },
    {
      num: "02",
      title: "Results Disclaimer",
      content: "The results, case studies, and testimonials featured on this website represent specific outcomes achieved for specific clients under specific circumstances. Past performance does not guarantee future results. Digital marketing results vary based on many factors including: industry and competition level, target audience and location, ad budget, quality of products or services, market conditions, algorithm updates, and consistency of marketing efforts. We do not guarantee any specific results, rankings, traffic, or revenues. Individual results will vary.",
    },
    {
      num: "03",
      title: "Professional Advice Disclaimer",
      content: "The content on this website, including blog posts, guides, and tools, is provided for educational and informational purposes only. It should not be construed as professional business, financial, legal, or tax advice. Before making any business decisions based on the information provided on this website, we recommend consulting with qualified professionals in the relevant field. NexaGrowth is not responsible for any decisions made based on our informational content.",
    },
    {
      num: "04",
      title: "Third-Party Links Disclaimer",
      content: "This website may contain links to third-party websites, tools, or services that are not owned or controlled by NexaGrowth. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. The inclusion of any link does not imply endorsement, approval, or recommendation by NexaGrowth. You access third-party sites at your own risk and should review their terms and privacy policies before use.",
    },
    {
      num: "05",
      title: "Advertising Disclaimer",
      content: "This website may display advertisements provided by third-party advertising networks, including Google AdSense. These ads are served by external platforms over which NexaGrowth has limited control. The appearance of advertisements on our website does not constitute an endorsement of the products, services, or companies advertised. NexaGrowth is not responsible for the content or accuracy of third-party advertisements.",
    },
    {
      num: "06",
      title: "Copyright Notice",
      content: "All content on this website — including text, graphics, logos, images, and code — is the property of NexaGrowth and is protected by international copyright laws. Unauthorized reproduction, distribution, or modification of any content without written permission from NexaGrowth is strictly prohibited. If you wish to use any content from our website, please contact us for permission.",
    },
    {
      num: "07",
      title: "Changes to This Disclaimer",
      content: "We reserve the right to modify or update this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this page. We encourage you to review this Disclaimer periodically for any updates.",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Disclaimer — NexaGrowth</title>
      <meta name="description" content="Read our site disclaimer regarding tool accuracy, advertising, and digital growth services." />
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Shield size={12} className="text-accent animate-pulse" />
            Legal Center
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Disclaimer
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Last updated: April 10, 2026 &nbsp;·&nbsp; Please read carefully
          </p>
        </div>
      </header>

      {/* ── Legal Sections ── */}
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-4 pb-24 relative z-20" aria-label="Disclaimer sections">
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <section
              key={s.num}
              className="glass p-8 md:p-10 rounded-[20px] border border-glass-border bg-glass-bg hover:border-glass-border/30 transition-all duration-300 shadow-sm"
            >
              <h2 className="text-lg md:text-xl font-serif text-foreground font-normal mb-5 pb-3 border-b border-glass-border flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[11px] font-bold">
                  {s.num}
                </span>
                <span>{s.title}</span>
              </h2>
              <p className="text-[13.5px] md:text-[14.5px] text-foreground/60 leading-relaxed">
                {s.content}
              </p>
            </section>
          ))}
        </div>

        {/* Contact box */}
        <section className="mt-12 glass p-8 md:p-10 rounded-[24px] text-center border border-glass-border bg-glass-bg">
          <h3 className="font-serif text-xl md:text-2xl text-foreground font-normal mb-3">
            Questions about this Disclaimer?
          </h3>
          <p className="text-[13.5px] md:text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px] mx-auto mb-6">
            If you have any questions or concerns, feel free to reach out to us directly.
          </p>
          <a
            href="mailto:contact@nexagrowth.xyz"
            className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-background bg-foreground px-6 py-3 rounded-full hover:scale-[1.03] transition-all duration-300 shadow-sm"
          >
            <Mail size={13} />
            <span>contact@nexagrowth.xyz</span>
          </a>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
