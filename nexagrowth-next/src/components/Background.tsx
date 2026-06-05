"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function Background() {
  const { theme } = useTheme();
  const blob3Ref = useRef<HTMLDivElement>(null);

  // Parallax mouse movements for golden ambient Blob 3
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      const b = blob3Ref.current;
      if (b) {
        b.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const videoUrl = theme === "dark"
    ? "/19109601-hd_1920_1080_24fps.mp4"
    : "/light.mp4";

  return (
    <>
      {/* ░░ Premium Fallback Background Gradient with smooth transition ░░ */}
      <div 
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: theme === "dark"
            ? "radial-gradient(circle at 50% 0%, #07111F 0%, #030712 100%)"
            : "radial-gradient(circle at 50% 0%, #e0f2fe 0%, #f8fafc 100%)",
          transition: "background 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none"
        }}
        aria-hidden="true"
      />

      {/* ░░ Video Background with fallbacks and theme-based styling ░░ */}
      <video 
        key={theme}
        className="video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          opacity: theme === "dark" ? 0.22 : 0.28,
          filter: theme === "dark" ? "saturate(1.4) hue-rotate(-10deg)" : "saturate(1.2) brightness(0.95) contrast(1.05)",
          mixBlendMode: theme === "dark" ? "normal" : "multiply",
          pointerEvents: "none"
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* ░░ Ambient Blobs ░░ */}
      <div 
        className="ambient" 
        aria-hidden="true" 
        style={{ 
          opacity: theme === "dark" ? 1.0 : 0.55 
        }}
      >
        {theme === "dark" ? (
          <>
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div 
              ref={blob3Ref} 
              className="blob blob-3" 
              style={{
                left: "50%",
                top: "40%",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform"
              }}
            />
          </>
        ) : (
          <>
            {/* Soft light-mode cyan-blue ambient blobs matching the design aesthetics of the live site */}
            <div style={{
              position: "absolute",
              width: "600px", height: "600px",
              top: "-150px", left: "-100px",
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, rgba(32, 210, 190, 0.16) 50%, rgba(255,255,255,0) 100%)",
              filter: "blur(80px)",
              animation: "blobIn 2s ease forwards"
            }} />
            <div style={{
              position: "absolute",
              width: "500px", height: "500px",
              bottom: "-100px", right: "-100px",
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(255,255,255,0) 100%)",
              filter: "blur(80px)",
              animation: "blobIn 2s ease forwards"
            }} />
          </>
        )}
      </div>

      {/* ░░ Decorative Lines and Grain ░░ */}
      <div className="grain" aria-hidden="true" />
      <div className="deco-lines" aria-hidden="true">
        <div 
          className="deco-line" 
          style={{ 
            top: "30%", 
            animationDelay: "1.5s",
            background: theme === "dark" ? undefined : "linear-gradient(90deg, transparent, rgba(15,23,42,0.02), transparent)"
          }} 
        />
        <div 
          className="deco-line" 
          style={{ 
            top: "65%", 
            animationDelay: "1.8s",
            background: theme === "dark" ? undefined : "linear-gradient(90deg, transparent, rgba(15,23,42,0.02), transparent)"
          }} 
        />
      </div>
    </>
  );
}
