"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices - custom cursor should only run on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const mouse = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const updateRing = () => {
      // Smooth interpolation (lerp) for trailing lag ring
      const ease = 0.15;
      ring.x += (mouse.x - ring.x) * ease;
      ring.y += (mouse.y - ring.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      requestAnimationFrame(updateRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest(".p-card") ||
          target.closest(".glass") ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    const animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* ── Central Precise Dot ── */}
      <div
        ref={dotRef}
        className="fixed w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform mix-blend-difference transition-transform duration-200"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
      
      {/* ── Smooth Lag Ring ── */}
      <div
        ref={ringRef}
        className={`fixed rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform border transition-all duration-300 ${
          isHovering 
            ? "w-10 h-10 border-accent bg-accent/10 scale-110" 
            : "w-6 h-6 border-white/20 bg-transparent"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
    </>
  );
}
