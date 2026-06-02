"use client";
import React from "react";

interface ServiceMarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
}

export default function ServiceMarquee({ 
  items, 
  speed = 30, 
  separator = "✦",
  className = "" 
}: ServiceMarqueeProps) {
  // Duplicate items for seamless loop
  const content = items.join(` ${separator} `) + ` ${separator} `;

  return (
    <div className={`marquee-container overflow-hidden whitespace-nowrap ${className}`}>
      <div 
        className="marquee-track inline-flex"
        style={{ 
          animation: `marqueeScroll ${speed}s linear infinite`,
        }}
      >
        <span className="marquee-content inline-block pr-4">{content}</span>
        <span className="marquee-content inline-block pr-4">{content}</span>
        <span className="marquee-content inline-block pr-4">{content}</span>
      </div>
    </div>
  );
}
