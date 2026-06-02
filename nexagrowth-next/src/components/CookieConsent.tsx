"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ng-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ng-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("ng-cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
        >
          <div className="max-w-[800px] mx-auto glass rounded-2xl border border-white/10 p-5 md:p-6 shadow-[0_-8px_40px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: "rgba(4, 20, 35, 0.92)", backdropFilter: "blur(24px) saturate(1.8)" }}
          >
            <div className="flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield size={16} />
              </div>
              <div>
                <p className="text-[13px] text-white/80 leading-relaxed">
                  This website uses cookies for essential functionality and analytics to improve your experience. By clicking &ldquo;Accept All,&rdquo; you consent to the use of all cookies.{" "}
                  <Link href="/privacy" className="text-accent hover:text-white underline underline-offset-2 transition-colors">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={handleReject}
                className="flex-1 sm:flex-none text-[12.5px] font-medium text-white/60 hover:text-white px-4 py-2.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none text-[12.5px] font-medium text-[#001f3d] bg-white hover:bg-white/90 px-5 py-2.5 rounded-full hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Close cookie banner"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
