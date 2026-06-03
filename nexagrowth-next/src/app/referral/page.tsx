"use client";
import React from "react";
import Link from "next/link";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Sparkles, ArrowRight, Gift, Users, Wallet, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Users size={20} />,
    title: "Refer a Client",
    desc: "Share a potential client's info via our referral form or email. We handle everything from there.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "We Close the Deal",
    desc: "Our team reaches out, assesses requirements, and delivers the project at our standard of excellence.",
  },
  {
    icon: <Wallet size={20} />,
    title: "You Earn Commission",
    desc: "Once the project is paid, you receive 10% of the total project value — no cap, no limits.",
  },
];

export default function ReferralPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Referral Program — Earn With NexaGrowth</title>
      <meta name="description" content="Earn 10% commission on every project you refer to NexaGrowth. No cap, no limits — start earning today." />
      <Background />
      <Navigation activeRoute="other" />

      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6">
            <Gift size={12} className="text-accent animate-pulse" />
            Referral Program
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6">
            Earn With Us
          </h1>
          <p className="text-[15px] sm:text-[17px] text-foreground/60 leading-[1.7] max-w-[580px]">
            Know a business that needs a website, social media, or marketing? Refer them to us and earn 10% of the project value.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 pb-24 relative z-20">
        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {steps.map((s, i) => (
            <div
              key={i}
              className="glass p-7 rounded-[20px] border border-white/8 bg-white/[0.02] hover:border-accent/25 transition-all duration-300 group hover:translate-y-[-3px] text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-4 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="text-[10px] text-foreground/30 tracking-wider uppercase mb-2">Step {i + 1}</div>
              <h3 className="text-[16px] font-medium text-foreground mb-2">{s.title}</h3>
              <p className="text-[13px] text-foreground/55 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="glass p-8 md:p-10 rounded-[24px] border border-white/8 bg-white/[0.02] text-center mb-12">
          <div className="text-5xl font-serif text-accent mb-3">10%</div>
          <h3 className="font-serif text-xl text-foreground mb-2">Commission Per Referral</h3>
          <p className="text-[13.5px] text-foreground/55 leading-relaxed max-w-[500px] mx-auto">
            No signup required. No minimum referrals. No cap on earnings. Simply send us the lead and we take care of the rest.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col items-center gap-4">
          <a
            href="mailto:referrals@nexagrowth.xyz?subject=Referral Submission"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#001f3d] bg-white px-8 py-4 rounded-full hover:scale-[1.03] transition-all duration-300"
          >
            Submit a Referral <ArrowRight size={14} />
          </a>
          <a
            href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20refer%20a%20client!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-foreground/50 hover:text-accent transition-colors"
          >
            Or send via WhatsApp →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
