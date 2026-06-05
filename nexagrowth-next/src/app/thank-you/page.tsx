"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";

export default function ThankYouPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Thank You — NexaGrowth</title>
      <Background />
      <Navigation activeRoute="other" />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div
          className={`glass p-10 md:p-14 rounded-[32px] text-center max-w-[520px] w-full border border-glass-border transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-accent" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-foreground font-normal mb-4">
            Thank You!
          </h1>
          <p className="text-[15px] text-foreground/60 leading-relaxed mb-4">
            Your project request has been received. Our team will review your requirements and send you a
            detailed quote within <strong className="text-foreground">24 hours</strong>.
          </p>
          <p className="text-[13px] text-foreground/40 mb-8">
            We&apos;ll also reach out via WhatsApp to confirm details and schedule a free consultation call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-background bg-foreground px-7 py-3.5 rounded-full hover:scale-[1.03] hover:bg-foreground/90 transition-all duration-300"
            >
              <span>Back to Home</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/portfolio"
              className="text-[13px] text-foreground/50 hover:text-accent transition-colors"
            >
              View Our Portfolio →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
