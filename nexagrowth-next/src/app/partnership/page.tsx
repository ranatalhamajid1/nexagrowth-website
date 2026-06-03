"use client";
import React from "react";
import Link from "next/link";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Sparkles, ArrowRight, Handshake, Users, Zap, Globe } from "lucide-react";

const partnerTypes = [
  {
    icon: <Users size={20} />,
    title: "Agency Partners",
    desc: "Digital agencies looking to white-label web development, Shopify builds, or video editing. We handle delivery, you manage the client.",
  },
  {
    icon: <Zap size={20} />,
    title: "Technology Partners",
    desc: "SaaS tools, hosting companies, and platform providers looking for integration or co-marketing partnerships.",
  },
  {
    icon: <Globe size={20} />,
    title: "Freelancer Network",
    desc: "Skilled freelancers in development, design, video editing, or copywriting who want consistent project flow.",
  },
];

export default function PartnershipPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Partnership — Collaborate with NexaGrowth</title>
      <meta name="description" content="Partner with NexaGrowth for agency white-labeling, technology integrations, or freelancer collaboration. Let's grow together." />
      <Background />
      <Navigation activeRoute="other" />

      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Grow Together
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6">
            Partnership
          </h1>
          <p className="text-[15px] sm:text-[17px] text-foreground/60 leading-[1.7] max-w-[580px]">
            We believe in collaboration over competition. Let&apos;s explore how we can create value together.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {partnerTypes.map((p, i) => (
            <div
              key={i}
              className="glass p-7 rounded-[20px] border border-white/8 bg-white/[0.02] hover:border-accent/25 transition-all duration-300 group hover:translate-y-[-3px] flex flex-col"
            >
              <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-[16px] font-medium text-foreground mb-2">{p.title}</h3>
              <p className="text-[13px] text-foreground/55 leading-relaxed flex-1">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="glass p-8 md:p-10 rounded-[24px] border border-white/8 bg-white/[0.02] mb-12">
          <h2 className="font-serif text-2xl text-foreground mb-6 text-center">Why Partner With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Revenue sharing on referred projects",
              "White-label delivery for agencies",
              "Access to NexaGrowth's client pipeline",
              "Priority project allocation",
              "Dedicated partnership manager",
              "Co-branded case studies",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Handshake size={10} className="text-accent" />
                </div>
                <span className="text-[13.5px] text-foreground/70">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:partnerships@nexagrowth.xyz?subject=Partnership Inquiry"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#001f3d] bg-white px-8 py-4 rounded-full hover:scale-[1.03] transition-all duration-300"
          >
            Let&apos;s Talk Partnership <ArrowRight size={14} />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
