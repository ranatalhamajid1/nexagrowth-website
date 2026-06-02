"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Rocket, Sparkles, TrendingUp } from "lucide-react";

interface Planet {
  label: string;
  stat: string;
  icon: React.ReactNode;
  angle: number;
}

export default function AboutOrbit() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const planets: Planet[] = [
    { label: "Clients", stat: "50+", icon: <Trophy size={14} />, angle: 0 },
    { label: "Campaigns", stat: "150+", icon: <Rocket size={14} />, angle: 90 },
    { label: "Industries", stat: "15+", icon: <Sparkles size={14} />, angle: 180 },
    { label: "Growth", stat: "+40%", icon: <TrendingUp size={14} />, angle: 270 },
  ];

  return (
    <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] flex items-center justify-center select-none">
      
      {/* ── Outer Rotating Rings ── */}
      <div 
        className={`absolute inset-0 rounded-full border border-foreground/5 transition-all duration-1000 ${
          hoveredIndex !== null ? "border-accent/20 scale-102" : ""
        }`}
      />
      <div 
        className="absolute w-[80%] h-[80%] rounded-full border border-foreground/5 border-dashed animate-[spin_50s_linear_infinite]"
        style={{
          animationPlayState: hoveredIndex !== null ? "paused" : "running",
        }}
      />
      <div className="absolute w-[60%] h-[60%] rounded-full border border-foreground/5 pointer-events-none" />

      {/* ── Center Nucleus (Founder Photo) ── */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center relative z-10 shadow-[0_12px_40px_rgba(32,210,190,0.25)] border-2 border-accent group cursor-default"
      >
        <img 
          src="/founder-talha.jpg" 
          alt="Talha Majid - Founder of NexaGrowth" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Glow border ring */}
        <div className="absolute inset-[-4px] rounded-full border border-accent/20 animate-ping opacity-25 pointer-events-none" />
      </motion.div>

      {/* ── Orbiting Planets ── */}
      <div 
        className="absolute inset-0 animate-[spin_24s_linear_infinite] will-change-transform"
        style={{
          animationPlayState: hoveredIndex !== null ? "paused" : "running",
        }}
      >
        {planets.map((p, idx) => {
          const isHovered = hoveredIndex === idx;
          const isAnyHovered = hoveredIndex !== null;

          // Convert polar coordinate angle to X and Y offsets with a 135px radius to keep blocks completely clear of the photo
          const rad = (p.angle * Math.PI) / 180;
          const radiusPx = 135; 
          const leftVal = `calc(50% + ${Math.cos(rad) * radiusPx}px)`;
          const topVal = `calc(50% + ${Math.sin(rad) * radiusPx}px)`;

          return (
            <div
              key={p.label}
              className="absolute w-[68px] h-[68px] z-20"
              style={{
                left: leftVal,
                top: topVal,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Counter-rotation to keep the planet vertical */}
              <div 
                className="w-full h-full animate-[spin_24s_linear_infinite_reverse] flex items-center justify-center"
                style={{
                  animationPlayState: isAnyHovered ? "paused" : "running",
                }}
              >
                <div 
                  className={`w-full h-full rounded-2xl glass border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-500 shadow-sm ${
                    isHovered 
                      ? "border-accent/40 bg-accent/15 scale-110 shadow-[0_8px_24px_rgba(32,210,190,0.2)] text-accent" 
                      : "border-glass-border bg-glass-bg text-foreground/80 hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  <div className={`transition-colors duration-300 ${isHovered ? "text-accent" : "text-foreground/40"}`}>
                    {p.icon}
                  </div>
                  <strong className="text-[11px] font-sans font-bold leading-none tracking-tight block">
                    {p.stat}
                  </strong>
                  <span className="text-[8px] font-sans font-semibold tracking-wider uppercase block opacity-60">
                    {p.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Ambient Floater Badges ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div 
          className="absolute top-[10%] left-[8%] glass px-3 py-1.5 rounded-full text-[9px] font-semibold text-foreground/60 tracking-wider uppercase border border-glass-border animate-pulse shadow-sm"
          style={{ width: "max-content" }}
        >
          Data-Driven
        </div>
        <div 
          className="absolute bottom-[10%] right-[8%] glass px-3 py-1.5 rounded-full text-[9px] font-semibold text-foreground/60 tracking-wider uppercase border border-glass-border animate-pulse shadow-sm"
          style={{ animationDelay: "1s", width: "max-content" }}
        >
          ROI Focused
        </div>
      </div>
    </div>
  );
}
