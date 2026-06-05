"use client";
import React from "react";
import { Code2 } from "lucide-react";

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "PHP", color: "#777BB4" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Shopify", color: "#7AB55C" },
  { name: "WordPress", color: "#21759B" },
  { name: "Cloudflare", color: "#F48120" },
  { name: "Vercel", color: "#ffffff" },
  { name: "GitHub", color: "#ffffff" },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-glass-border" id="tech-stack">
      <div className="text-center flex flex-col items-center mb-14">
        <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
          <Code2 size={12} className="text-accent animate-pulse" />
          Our Stack
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
          Technologies We Use
        </h2>
        <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
          Modern, battle-tested technologies powering every project we deliver.
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-4">
        <div 
          className="flex gap-4 w-max whitespace-nowrap hover:[animation-play-state:paused]"
          style={{ 
            animation: "marqueeScroll 35s linear infinite"
          }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="glass p-5 rounded-[16px] border border-glass-border hover:border-accent/30 bg-glass-bg flex flex-col items-center gap-3 group hover:translate-y-[-3px] transition-all duration-300 cursor-default w-[120px] sm:w-[140px] flex-shrink-0"
            >
              <div
                className="w-10 h-10 rounded-xl bg-glass-hover border border-glass-border flex items-center justify-center text-[18px] font-bold font-serif group-hover:scale-110 transition-transform duration-300"
                style={{ color: tech.color === "#ffffff" ? "var(--fg)" : tech.color }}
              >
                {tech.name.charAt(0)}
              </div>
              <span className="text-[11px] font-medium text-foreground/70 group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
