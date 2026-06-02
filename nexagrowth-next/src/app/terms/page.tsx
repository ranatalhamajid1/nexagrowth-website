"use client";
import Footer from "../../components/Footer";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, Shield, ArrowRight, Mail } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      num: "01",
      title: "Agreement to Terms",
      content: "By accessing or using our website at nexagrowth.xyz, you agree to be bound by these Terms of Service. If you disagree with any part of these Terms, you may not use our website. These Terms of Service ('Terms') govern your use of the NexaGrowth website and any related services provided by NexaGrowth ('Company,' 'we,' 'us,' or 'our'), a digital marketing agency based in Multan, Pakistan.",
    },
    {
      num: "02",
      title: "Our Services",
      content: "NexaGrowth provides professional digital marketing and software services including but not limited to: Content Marketing (blog writing, social media content, email campaigns), Paid Advertising (Google Ads, Meta Ads, TikTok Ads), Influencer Management (discovery, campaign coordination, analytics), Web Development (landing pages, e-commerce, UI/UX design), SEO & Growth strategy, and Brand Strategy and Consulting. Specific service deliverables, timelines, and pricing are agreed upon separately in individual client contracts or proposals.",
    },
    {
      num: "03",
      title: "Acceptable Use",
      content: "When using our website, you agree not to: (1) Use the site for any unlawful purpose or in violation of any applicable laws. (2) Attempt to gain unauthorized access to any part of our website or systems. (3) Transmit spam, malicious code, or any harmful content through our contact form. (4) Scrape, crawl, or data-mine our website without prior written consent. (5) Impersonate any person or entity or misrepresent your affiliation. (6) Engage in any conduct that restricts or inhibits any other user's use. (7) Submit false, misleading, or fraudulent information.",
    },
    {
      num: "04",
      title: "Intellectual Property",
      content: "All content on this website — including but not limited to text, graphics, logos, images, animations, and the overall design — is the exclusive property of NexaGrowth and is protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from this website without our prior written consent. Work product created for clients through our services is governed separately by individual client agreements.",
    },
    {
      num: "05",
      title: "Client Relationships",
      content: "Submitting a contact form on our website does not create a client-agency relationship. A formal business relationship is only established upon: (1) Execution of a signed service agreement or contract. (2) Receipt of a confirmed project proposal or statement of work. (3) Written confirmation from NexaGrowth management. We reserve the right to accept or decline any project at our sole discretion.",
    },
    {
      num: "06",
      title: "Disclaimer of Warranties",
      content: "Our website and its content are provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied, including without limitation: warranties of merchantability or fitness for a particular purpose, warranties that the website will be uninterrupted, error-free, or secure, or warranties regarding the accuracy, completeness, or reliability of any content. Marketing results and performance metrics presented on our website represent past client results and cannot be guaranteed for future campaigns.",
    },
    {
      num: "07",
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, NexaGrowth shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from: your use of or inability to use our website, any errors or omissions in website content, unauthorized access to or use of our servers or personal data, or any third-party content or services linked from our website.",
    },
    {
      num: "08",
      title: "Third-Party Links",
      content: "Our website may contain links to third-party websites (LinkedIn, Instagram, Facebook, WhatsApp, partner platforms). These links are provided for your convenience only. We have no control over the content or practices of third-party sites and accept no responsibility for their content, privacy policies, or services.",
    },
    {
      num: "09",
      title: "Governing Law & Jurisdiction",
      content: "These Terms are governed by and construed in accordance with the laws of Pakistan. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Multan, Pakistan. If you are accessing our services from outside Pakistan, you are responsible for compliance with your local laws.",
    },
    {
      num: "10",
      title: "Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes your acceptance of the modified Terms. We will update the 'Last updated' date at the top of this page whenever changes are made.",
    },
    {
      num: "11",
      title: "Contact Information",
      content: "If you have any questions, concerns, or disputes regarding these Terms of Service, please contact us: Email: contact@nexagrowth.xyz, WhatsApp: +92 339-0061165, Location: Multan, Pakistan.",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Terms of Service — NexaGrowth</title>
      <meta name="description" content="Read the Terms of Service for using NexaGrowth's free tools and digital growth services." />
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Shield size={12} className="text-accent animate-pulse" />
            Terms Center
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-white mb-6 fade-rise-headline">
            Terms of Service
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-white/52 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Last updated: April 6, 2026 &nbsp;·&nbsp; Please read carefully before using our services
          </p>
        </div>
      </header>

      {/* ── Legal Sections ── */}
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-4 pb-24 relative z-20" aria-label="Terms of Service sections">
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <section
              key={s.num}
              className="glass p-8 md:p-10 rounded-[20px] border border-white/8 bg-white/[0.01] hover:border-white/15 transition-all duration-300 shadow-sm"
            >
              <h2 className="text-lg md:text-xl font-serif text-white font-normal mb-5 pb-3 border-b border-white/6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[11px] font-bold">
                  {s.num}
                </span>
                <span>{s.title}</span>
              </h2>
              <p className="text-[13.5px] md:text-[14.5px] text-white/52 leading-relaxed">
                {s.content}
              </p>
            </section>
          ))}
        </div>

        {/* Contact box */}
        <section className="mt-12 glass p-8 md:p-10 rounded-[24px] text-center border border-white/8 bg-white/[0.01]">
          <h3 className="font-serif text-xl md:text-2xl text-white font-normal mb-3">
            Questions about our Terms?
          </h3>
          <p className="text-[13.5px] md:text-[14.5px] text-white/52 leading-relaxed max-w-[500px] mx-auto mb-6">
            We are committed to mutual trust and legal clarity. Reach out and we will respond within 48 hours.
          </p>
          <a
            href="mailto:contact@nexagrowth.xyz"
            className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[#001f3d] bg-white px-6 py-3 rounded-full hover:scale-[1.03] transition-all duration-300"
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
