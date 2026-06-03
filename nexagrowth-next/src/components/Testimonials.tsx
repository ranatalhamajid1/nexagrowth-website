"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  business: string;
  rating: number;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Raza",
    business: "LuxeVibe Fashion",
    rating: 5,
    text: "NexaGrowth completely transformed our ad campaigns. We went from boosting posts to running proper conversion funnels — our ROAS jumped 280% in just 3 months. Talha and his team genuinely care about results.",
  },
  {
    name: "Sara Khan",
    business: "GreenEarth Organics",
    rating: 5,
    text: "Our organic reach went from 10K to 500K in 6 months. The content strategy they built was exactly what we needed — professional, consistent, and deeply aligned with our brand voice.",
  },
  {
    name: "Bilal Siddiqui",
    business: "TechStart B2B",
    rating: 5,
    text: "We were struggling with expensive LinkedIn leads. NexaGrowth cut our CPA by 60% while tripling qualified leads. Their B2B expertise is unmatched in Pakistan.",
  },
  {
    name: "Fatima Noor",
    business: "Bloom Beauty",
    rating: 5,
    text: "The viral TikTok strategy they built drove over 1M views and doubled our monthly sales. Their video editing quality and trend awareness is exceptional.",
  },
  {
    name: "Hassan Ali",
    business: "Artisan Collective",
    rating: 5,
    text: "From Instagram DMs to a proper Shopify store doing PKR 1.2M/month — NexaGrowth handled everything from design to payment integration. Professional and fast delivery.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-foreground/15"}
        />
      ))}
    </div>
  );

  const TestimonialCard = ({ t, index }: { t: Testimonial; index: number }) => (
    <div
      key={index}
      className="glass p-7 rounded-[20px] border border-white/8 hover:border-accent/30 bg-white/[0.02] flex flex-col group hover:translate-y-[-2px] transition-all duration-300"
    >
      <Quote size={20} className="text-accent/30 mb-4" />
      <p className="text-[13.5px] text-foreground/70 leading-relaxed flex-1 mb-6 italic">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-glass-border pt-4">
        <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-accent text-[14px] font-serif font-bold">
          {t.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="text-[13px] font-medium text-foreground">{t.name}</div>
          <div className="text-[11px] text-foreground/50">{t.business}</div>
        </div>
        {renderStars(t.rating)}
      </div>
    </div>
  );

  return (
    <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="testimonials">
      <div className="text-center flex flex-col items-center mb-14">
        <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
          <Star size={12} className="text-accent animate-pulse" />
          Client Reviews
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
          What Our Clients Say
        </h2>
        <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
          Real feedback from businesses we&apos;ve helped grow across Pakistan.
        </p>

        {/* View Toggle */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setViewMode("slider")}
            className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 border ${
              viewMode === "slider"
                ? "bg-accent/15 border-accent/40 text-accent"
                : "border-glass-border text-foreground/60 hover:text-foreground glass"
            }`}
          >
            Slider
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 border ${
              viewMode === "grid"
                ? "bg-accent/15 border-accent/40 text-accent"
                : "border-glass-border text-foreground/60 hover:text-foreground glass"
            }`}
          >
            Grid
          </button>
        </div>
      </div>

      {viewMode === "slider" ? (
        <div className="relative max-w-[700px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass p-8 md:p-10 rounded-[24px] border border-white/8 bg-white/[0.02] text-center">
                <Quote size={28} className="text-accent/25 mx-auto mb-5" />
                <p className="text-[15px] text-foreground/75 leading-relaxed mb-8 italic max-w-[560px] mx-auto">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-accent text-lg font-serif font-bold">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div className="text-[14px] font-medium text-foreground">
                    {testimonials[current].name}
                  </div>
                  <div className="text-[12px] text-foreground/50">
                    {testimonials[current].business}
                  </div>
                  {renderStars(testimonials[current].rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass border border-glass-border hover:border-accent/40 flex items-center justify-center text-foreground/60 hover:text-accent transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass border border-glass-border hover:border-accent/40 flex items-center justify-center text-foreground/60 hover:text-accent transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
