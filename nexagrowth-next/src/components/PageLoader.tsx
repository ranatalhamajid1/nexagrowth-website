"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [percent, setPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      // Sleek non-linear increment for organic progress feel
      const increment = Math.floor(Math.random() * 8) + 3;
      current = Math.min(current + increment, 100);
      setPercent(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          document.body.style.overflow = "";
        }, 600); // Wait briefly at 100% before dissolve
      }
    }, 45); // highly responsive duration

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 bg-[#040c18] z-[99999] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle noise overlay inside loader */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-[#040c18] to-[#01060e] pointer-events-none" />

          {/* Loader Body */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            
            {/* Wordmark logo with character reveal spacing */}
            <div className="font-serif text-[42px] sm:text-[54px] font-normal leading-none tracking-tight text-white flex items-baseline">
              <span className="animate-[pulse_1.5s_infinite]">N</span>
              <span className="text-white/60">e</span>
              <span className="text-white/60">x</span>
              <span className="text-white/60">a</span>
              <span className="text-accent font-bold">G</span>
              <span className="text-white/80">r</span>
              <span className="text-white/80">o</span>
              <span className="text-white/80">w</span>
              <span className="text-white/80">t</span>
              <span className="text-white/80">h</span>
            </div>

            {/* Premium Loader Line Bar */}
            <div className="w-[180px] sm:w-[240px] h-[2px] bg-white/5 rounded-full overflow-hidden relative border border-white/5">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent-glow"
                initial={{ width: "0%" }}
                animate={{ width: `${percent}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Numerical counter */}
            <div className="text-[12.5px] font-mono font-bold tracking-[0.15em] text-accent">
              {percent}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
