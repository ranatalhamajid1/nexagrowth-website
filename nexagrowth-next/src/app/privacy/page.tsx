"use client";
import Footer from "../../components/Footer";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, Shield, ArrowRight, Mail } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      num: "01",
      title: "Introduction",
      content: "Welcome to NexaGrowth (\"we,\" \"our,\" or \"us\"). We are a digital marketing agency operating at nexagrowth.xyz, headquartered in Multan, Pakistan. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for our services. By using our website, you agree to the practices described in this Policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.",
    },
    {
      num: "02",
      title: "Information We Collect",
      content: "We collect information in several ways to provide better services: (1) Information you provide directly — including your name, email address, company name, and message content submitted through our strategic audit contact form. (2) Automatically collected data — including IP addresses, browser types, operating systems, referral URLs, and pages visited, collected via standard server logs or analytics tools. (3) Communications — emails or messages you send to us directly at contact@nexagrowth.xyz. We do not collect billing details, credit cards, passwords, or sensitive personal data through our website.",
    },
    {
      num: "03",
      title: "How We Use Your Information",
      content: "The information we collect is utilized to: respond to your inquiries, schedule free consultations, provide and operate our web systems, send relevant service information (no unsolicited marketing without explicit consent), analyze site traffic patterns to optimize layout performance, protect against fraudulent or unauthorized actions, and comply with any Pakistani legal frameworks.",
    },
    {
      num: "04",
      title: "Third-Party Services",
      content: "We partner with trusted third-party applications to handle specific data relays securely: (1) Google AdSense — We use Google AdSense to serve ads on our site. Google uses cookies to serve ads based on your previous visits. You can opt out of personalized advertising via Google Ads Settings. (2) Formsubmit.co — a secure email relay service that delivers your contact form submissions directly to our corporate email. (3) Cloudflare Turnstile — provides advanced bot detection, spam prevention, and rate-limiting on our forms. (4) Google Fonts — loads modern typography from secure global CDNs. We do not sell or trade your details with external data brokers.",
    },
    {
      num: "05",
      title: "Cookies Disclosure",
      content: "Our website uses minimal cookies to optimize speed and preserve states: Theme preferences are saved in a local storage key (ng-theme) on your device to keep your dark/light mode preference active (this is never sent to our servers). Cloudflare Turnstile sets transient session cookies strictly to run interactive bot verification. No advertising trackers are placed. You can adjust your browser to block cookies entirely if preferred.",
    },
    {
      num: "06",
      title: "Data Retention",
      content: "We retain standard contact form submissions in our secure, encrypted email inbox for as long as necessary to conduct ongoing business or project discussions, typically up to 2 years. You can request the complete extraction or permanent deletion of your contact records at any time by emailing contact@nexagrowth.xyz.",
    },
    {
      num: "07",
      title: "Your Data Rights",
      content: "Under modern data guidelines, you retain clear rights: You can request a copy of the data we hold, request corrections to inaccurate entries, request erasure ('the right to be forgotten'), or object to specific processing formats. To invoke these rights, send a written request to contact@nexagrowth.xyz, and we will fulfill it within 30 days.",
    },
    {
      num: "08",
      title: "Security Measures",
      content: "We implement industry-leading security practices, including: full HTTPS encryption for all data in transit, strict Content Security Policy (CSP) headers to block unauthorized scripts or cross-site scripting (XSS), Cloudflare rate-limiting and DDoS mitigations, and automated input validation on all form inputs. We continually monitor our code to protect your privacy.",
    },
    {
      num: "09",
      title: "Children's Privacy",
      content: "Our website and tools are not directed at or designed for children under 13. We do not knowingly collect personal data from children. If we discover a child under 13 has submitted information, we immediately purge it from our records.",
    },
    {
      num: "10",
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy periodically. Significant changes will be announced by modifying the 'Last updated' date at the top of this page. Continued usage of NexaGrowth after updates are published constitutes your complete agreement with the revised policy.",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Privacy Policy — NexaGrowth</title>
      <meta name="description" content="Learn about how we collect, store, and protect your information when using the NexaGrowth website." />
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Shield size={12} className="text-accent animate-pulse" />
            Privacy Center
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-white mb-6 fade-rise-headline">
            Privacy Policy
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-white/52 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            Last updated: April 6, 2026 &nbsp;·&nbsp; Effective immediately
          </p>
        </div>
      </header>

      {/* ── Legal Sections ── */}
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-4 pb-24 relative z-20" aria-label="Privacy Policy sections">
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
            Questions about your Privacy?
          </h3>
          <p className="text-[13.5px] md:text-[14.5px] text-white/52 leading-relaxed max-w-[500px] mx-auto mb-6">
            We are committed to user transparency and safety. Reach out and we will respond within 48 hours.
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
