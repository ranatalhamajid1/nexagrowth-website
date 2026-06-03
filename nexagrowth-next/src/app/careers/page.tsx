"use client";
import React from "react";
import Link from "next/link";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Sparkles, ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

const openings = [
  {
    title: "Social Media Manager",
    type: "Full-time · Remote",
    desc: "Lead social media strategy, content planning, and community engagement for our clients. 2+ years of experience required.",
  },
  {
    title: "React / Next.js Developer",
    type: "Full-time / Contract · Remote",
    desc: "Build high-performance web applications using React, Next.js, and TypeScript. Strong portfolio required.",
  },
  {
    title: "Video Editor (Reels / TikTok)",
    type: "Freelance · Remote",
    desc: "Create viral-ready short-form video content for client brands. Proficiency in CapCut, Premiere Pro, or After Effects.",
  },
  {
    title: "Shopify Developer",
    type: "Contract · Remote",
    desc: "Set up, customize, and maintain Shopify 2.0 stores with custom sections and theme modifications.",
  },
];

export default function CareersPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Careers — Join NexaGrowth&apos;s Team</title>
      <meta name="description" content="Explore career opportunities at NexaGrowth. We're looking for talented developers, designers, and marketers to join our remote team in Pakistan." />
      <Background />
      <Navigation activeRoute="other" />

      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6">
            <Sparkles size={12} className="text-accent animate-pulse" />
            We&apos;re Hiring
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6">
            Careers
          </h1>
          <p className="text-[15px] sm:text-[17px] text-foreground/60 leading-[1.7] max-w-[580px]">
            Build the future of digital marketing in Pakistan. We&apos;re looking for passionate people who love creating, shipping, and growing.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 pb-24 relative z-20">
        <div className="flex flex-col gap-4">
          {openings.map((job, i) => (
            <div
              key={i}
              className="glass p-7 rounded-[20px] border border-white/8 bg-white/[0.02] hover:border-accent/25 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-medium text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-2 text-[11px] text-foreground/40 uppercase tracking-wider">
                      <Clock size={10} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[13.5px] text-foreground/60 leading-relaxed mb-4">{job.desc}</p>
              <a
                href={`mailto:careers@nexagrowth.xyz?subject=Application: ${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-foreground transition-colors"
              >
                Apply Now <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div className="mt-12 glass p-8 rounded-[20px] border border-white/8 bg-white/[0.02] text-center">
          <p className="text-[14px] text-foreground/60 leading-relaxed mb-4">
            Don&apos;t see a role that fits? We&apos;re always open to exceptional talent.
          </p>
          <a
            href="mailto:careers@nexagrowth.xyz?subject=General Application"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#001f3d] bg-white px-7 py-3.5 rounded-full hover:scale-[1.03] transition-all duration-300"
          >
            Send Your Portfolio <ArrowRight size={14} />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
