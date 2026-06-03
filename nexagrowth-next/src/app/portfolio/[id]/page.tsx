"use client";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Background from "../../../components/Background";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Target, Sparkles } from "lucide-react";
import portfolioData from "../../../data/portfolioData.json";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  concept: boolean;
  desc: string;
  result: string;
  gradient: string;
  tags: string[];
  media: { type: string; url: string | null };
  detail: {
    client: string;
    industry: string;
    location: string;
    duration: string;
    challenge: string;
    solution: string;
    results: { val: string; lbl: string }[];
  };
}

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = (portfolioData as PortfolioItem[]).find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>{`${project.title} — Portfolio | NexaGrowth`}</title>
      <meta name="description" content={project.desc} />
      <Background />
      <Navigation activeRoute="portfolio" />

      {/* ── Hero ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center flex flex-col items-center">
          <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 tracking-wider uppercase mb-6 font-semibold select-none">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="text-foreground/20">›</span>
            <Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
            <span className="text-foreground/20">›</span>
            <span className="text-foreground/60">{project.title}</span>
          </nav>

          <div className="flex items-center gap-2 mb-5">
            <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
              {project.categoryLabel}
            </span>
            {project.concept && (
              <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                Concept Project
              </span>
            )}
          </div>

          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[56px] font-normal leading-[1.1] tracking-[-1.5px] text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[580px]">
            {project.desc}
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 pb-24 relative z-20">
        {/* ── Result Stats ── */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {project.detail.results.map((stat, i) => (
            <div
              key={i}
              className="glass p-5 rounded-[16px] text-center border border-white/6 hover:border-accent/30 transition-all duration-300 bg-white/[0.01]"
            >
              <div className="text-2xl md:text-3xl font-bold font-serif bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                {stat.val}
              </div>
              <div className="text-[10px] text-foreground/40 tracking-wider uppercase mt-2">
                {stat.lbl}
              </div>
            </div>
          ))}
        </div>

        {/* ── Project Details Card ── */}
        <div className="glass rounded-[24px] overflow-hidden border border-white/8 bg-white/[0.02] shadow-md mb-12">
          <div className="px-6 py-4 flex items-center gap-2 bg-white/[0.03] border-b border-white/8 select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
          </div>

          <div className="p-8 md:p-12">
            {/* Meta Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { lbl: "Client", val: project.detail.client },
                { lbl: "Industry", val: project.detail.industry },
                { lbl: "Location", val: project.detail.location },
                { lbl: "Duration", val: project.detail.duration },
              ].map((m, i) => (
                <div key={i}>
                  <div className="text-[10px] font-bold text-foreground/40 tracking-wider uppercase mb-1">
                    {m.lbl}
                  </div>
                  <div className="text-[14px] text-foreground/80">{m.val}</div>
                </div>
              ))}
            </div>

            {/* Challenge */}
            <div className="mb-8">
              <h3 className="text-[14px] font-medium text-foreground/90 tracking-wider uppercase mb-3 flex items-center gap-2">
                <Target size={14} className="text-accent" />
                <span>The Challenge</span>
              </h3>
              <p className="text-[15px] text-foreground/70 leading-relaxed">
                {project.detail.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h3 className="text-[14px] font-medium text-foreground/90 tracking-wider uppercase mb-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent" />
                <span>Our Solution</span>
              </h3>
              <p className="text-[15px] text-foreground/70 leading-relaxed">
                {project.detail.solution}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 border-t border-glass-border pt-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium text-accent bg-accent/5 border border-accent/15 px-2.5 py-1 rounded-[6px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-between">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground/40 hover:text-accent transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to Portfolio</span>
          </Link>
          <Link
            href="/project-request"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-[#001f3d] bg-white px-7 py-3.5 rounded-full hover:scale-[1.03] transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
