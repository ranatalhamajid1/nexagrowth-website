"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { 
  Wrench, 
  MapPin, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Calendar, 
  PhoneCall, 
  Shield, 
  Heart, 
  Award, 
  Smile, 
  QrCode, 
  BookOpen, 
  Clock, 
  Eye,
  Search,
  BarChart3,
  Users,
  MessageSquare,
  Megaphone,
  Globe,
  Zap,
  FileText,
  Camera,
  Send,
  Mail,
  Star,
  Lock,
  HandshakeIcon,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Background from "../components/Background";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AboutOrbit from "../components/AboutOrbit";
import ServiceMarquee from "../components/ServiceMarquee";
import { useTheme } from "../components/ThemeProvider";
import PricingPreview from "../components/PricingPreview";
import Testimonials from "../components/Testimonials";
import TechStack from "../components/TechStack";

const getGlowColor = (cat: string, theme: string) => {
  const isDark = theme === "dark";
  const c = cat.toLowerCase();
  if (c.includes("ads")) {
    return isDark 
      ? "radial-gradient(circle, rgba(32, 210, 190, 0.16) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("content")) {
    return isDark 
      ? "radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("web")) {
    return isDark 
      ? "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("influencer")) {
    return isDark 
      ? "radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("lead")) {
    return isDark 
      ? "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(255,255,255,0) 70%)";
  } else if (c.includes("social")) {
    return isDark 
      ? "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(0,0,0,0) 70%)" 
      : "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(255,255,255,0) 70%)";
  }
  return isDark 
    ? "radial-gradient(circle, rgba(32, 210, 190, 0.12) 0%, rgba(0,0,0,0) 70%)" 
    : "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(255,255,255,0) 70%)";
};

// Custom Magnetic Button wrapper for Awwwards conversion optimization
function Magnetic({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150, mass: 0.1 });
  const springY = useSpring(y, { damping: 15, stiffness: 150, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div style={{ x: springX, y: springY }} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.div>
    </div>
  );
}

// City data for Local SEO section
const cities = [
  {
    name: "Multan",
    emoji: "🏛️",
    desc: "Our home base. We help local businesses generate consistent leads through local SEO, Google Business Profile optimization, and high-converting Meta campaigns.",
    points: ["Local SEO & map ranking", "Meta lead generation campaigns", "Conversion-ready landing pages"],
  },
  {
    name: "Lahore",
    emoji: "🏙️",
    desc: "For competitive Lahore markets, we combine content clusters, paid traffic funnels, and retargeting systems to scale qualified demand at lower acquisition cost.",
    points: ["SEO content clusters", "Facebook and Instagram ads", "Remarketing and funnel optimization"],
  },
  {
    name: "Karachi",
    emoji: "🌊",
    desc: "We support Karachi businesses with performance marketing built for volume, including e-commerce growth systems and full-funnel ad operations.",
    points: ["E-commerce paid growth", "Creative testing frameworks", "Analytics and ROAS reporting"],
  },
  {
    name: "Islamabad",
    emoji: "🏔️",
    desc: "For service and B2B brands, we design authority-first strategies with technical SEO, trust-building content, and high-intent lead capture workflows.",
    points: ["Technical SEO foundations", "B2B lead generation strategy", "Authority and trust positioning"],
  },
];

export default function Home() {
  const { theme } = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeCity, setActiveCity] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // 3D perspective hover tilt for metric cards & portfolio cards
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
    card.style.transform = `translateY(-3px) perspective(400px) rotateX(${-y}deg) rotateY(${x}deg)`;
    card.style.transition = "none";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
    card.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Add FormSubmit configurations for high-end conversion funnel delivery
    formData.append("_subject", "New NexaGrowth Strategy Audit Request!");
    formData.append("_captcha", "false");
    
    try {
      await fetch("https://formsubmit.co/ajax/ranatalhamajid@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
    } catch (err) {
      console.error("Form submission error:", err);
    }
    
    setFormSubmitted(true);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col scroll-smooth">
      <title>NexaGrowth — Free AI Tools, SEO Utilities & Digital Growth Solutions</title>
      <meta name="description" content="Scale your business in Pakistan with premium web development, high-converting SEO, digital marketing, and free online marketing tools." />
      <Background />
      <Navigation activeRoute="home" />

      {/* ── Section 1: Cinematic Hero ── */}
      <main className="w-full relative z-20">
        <section className="mx-auto max-w-[1100px] min-h-[85vh] px-6 py-16 md:py-24 flex flex-col items-center justify-center text-center">
          {/* Eyebrow Pill */}
          <div 
            className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-7 fade-rise-eyebrow"
            role="text"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Pakistan&apos;s Digital Growth Partner
          </div>

          {/* Editorial Display Headline */}
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[90px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 max-w-[900px] fade-rise-headline">
            We don&apos;t just market.<br />
            <span className="font-serif italic text-foreground/60">We grow you.</span>
          </h1>

          {/* Subheadline description */}
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[560px] mb-11 fade-rise-subheadline">
            SEO, paid ads, web development &amp; video editing — built for Pakistani businesses that are serious about results. No fluff. No fake numbers. Just growth.
          </p>

          {/* Actions Button Panel */}
          <div className="flex items-center justify-center gap-3.5 flex-wrap mb-18 fade-rise-ctas">
            <Magnetic>
              <a 
                href="#contact"
                className="font-sans text-[14.5px] font-medium text-[#001f3d] bg-white px-7 py-3.5 rounded-full flex items-center gap-2 hover:scale-[1.04] hover:translate-y-[-1px] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] active:scale-100 transition-all duration-300"
              >
                <span>Start Free Consultation</span>
                <svg className="w-[15px] h-[15px] transition-transform duration-300 transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </Magnetic>

            <Link 
              href="/portfolio" 
              className="font-sans text-[14.5px] font-normal text-foreground px-7 py-3.5 rounded-full flex items-center gap-2 glass border border-glass-border hover:bg-glass-hover hover:scale-[1.03] transition-all duration-300"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="8" cy="8" r="6" />
                <path d="M8 5v3l2 2" />
              </svg>
              <span>See Our Work</span>
            </Link>
          </div>

          {/* Metrics Cards perspective grid */}
          <div className="flex gap-3.5 justify-center flex-wrap fade-rise-metrics" role="list" aria-label="Key highlights">
            <div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="metric-card glass" 
              role="listitem"
            >
              <div className="metric-icon teal" aria-hidden="true">
                <Wrench size={18} />
              </div>
              <div className="metric-text text-left">
                <strong>50+ Free Tools</strong>
                <span>SEO, meta, QR & more</span>
              </div>
            </div>

            <div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="metric-card glass" 
              role="listitem"
            >
              <div className="metric-icon gold" aria-hidden="true">
                <MapPin size={18} />
              </div>
              <div className="metric-text text-left">
                <strong>Pakistan-Focused</strong>
                <span>Local market expertise</span>
              </div>
            </div>

            <div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="metric-card glass" 
              role="listitem"
            >
              <div className="metric-icon blue" aria-hidden="true">
                <TrendingUp size={18} />
              </div>
              <div className="metric-text text-left">
                <strong>Results-Driven</strong>
                <span>Measurable growth only</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: City-Specific Local SEO ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="locations">
          <div className="text-center flex flex-col items-center mb-14">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <MapPin size={12} className="text-accent animate-pulse" />
              Nationwide Reach
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              We Grow Brands Across Pakistan
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[560px]">
              Based in Multan and trusted nationwide, NexaGrowth helps brands in Lahore, Karachi, Islamabad, and beyond grow through SEO, paid advertising, and conversion-focused websites.
            </p>
          </div>

          {/* City Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {cities.map((city, idx) => (
              <button
                key={city.name}
                onClick={() => setActiveCity(idx)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                  activeCity === idx
                    ? "bg-accent/15 border-accent/40 text-accent shadow-[0_0_20px_rgba(32,210,190,0.15)]"
                    : "border-glass-border text-foreground/60 hover:text-foreground hover:border-foreground/20 hover:bg-glass-hover glass"
                }`}
              >
                <span className="mr-1.5">{city.emoji}</span>
                {city.name}
              </button>
            ))}
          </div>

          {/* City Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCity}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 md:p-10 rounded-[20px] border border-white/8 bg-white/[0.02] max-w-[700px] mx-auto"
            >
              <h3 className="text-2xl font-serif text-foreground font-normal mb-3">{cities[activeCity].name}</h3>
              <p className="text-[14.5px] text-foreground/70 leading-relaxed mb-6">
                {cities[activeCity].desc}
              </p>
              <div className="flex flex-col gap-2.5 mb-6">
                {cities[activeCity].points.map((point, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[13.5px] text-foreground/80">
                    <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent hover:text-white transition-colors"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/40 hover:text-white transition-colors"
                >
                  <span>Read Local SEO Guide</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-[13px] text-foreground/50 mt-8 max-w-[500px] mx-auto leading-relaxed">
            Whether you&apos;re targeting one city or multiple regions in Pakistan, we build channel-specific growth systems aligned with local buying behavior.
          </p>
        </section>

        {/* ── Section 3: Services Showcase (5 cards) ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="services">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Sparkles size={12} className="text-accent animate-pulse" />
              Grow Instantly
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Our Core Services
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              Full-funnel digital marketing services crafted specifically to capture traffic, rank keywords, and multiply conversions in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "SEO & Search Rankings",
                desc: "Technical SEO audits, target keyword research, and maps optimization ensuring your brand ranks #1 on Google without paid ad budgets.",
                inc: ["On-Page Audits", "Competitor Research", "Maps rankings"],
                icon: <Search size={18} />,
              },
              {
                num: "02",
                title: "Paid Advertising Systems",
                desc: "Precision Ads Manager campaigns across Meta, Google and TikTok. We do not boost posts — we deploy conversion retargeting funnels.",
                inc: ["A/B Testing", "Retargeting Setup", "Weekly performance tracking"],
                icon: <Megaphone size={18} />,
              },
              {
                num: "03",
                title: "Content Marketing",
                desc: "Compelling stories & viral-worthy content that positions your brand as the authority — and brings organic traffic on autopilot.",
                inc: ["Blog & Article Writing", "Video Scripts", "Email Newsletters"],
                icon: <FileText size={18} />,
              },
              {
                num: "04",
                title: "Influencer Management",
                desc: "Connect your brand with exactly the right creators — we handle everything from outreach and briefs to analytics and payments.",
                inc: ["Discovery & Vetting", "Campaign Strategy", "Performance Reports"],
                icon: <Users size={18} />,
              },
              {
                num: "05",
                title: "Web & Store Development",
                desc: "Awwwards-level custom React / Shopify websites engineered for high loading speeds and conversion-rate optimization (CRO).",
                inc: ["UI/UX Custom Design", "Speed audits (90+ score)", "E-commerce stores"],
                icon: <Globe size={18} />,
              },
            ].map((svc, idx) => (
              <div 
                key={idx}
                className={`glass p-8 rounded-[20px] border border-white/8 hover:border-accent/40 bg-white/[0.02] flex flex-col hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group ${idx >= 3 ? "md:col-span-1" : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-extrabold font-serif text-accent select-none">
                    {svc.num}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    {svc.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-foreground font-normal mb-3 group-hover:text-accent transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[13.5px] text-foreground/60 leading-relaxed mb-6 flex-1">
                  {svc.desc}
                </p>
                <div className="flex flex-col gap-2 mb-8 border-t border-glass-border pt-4">
                  {svc.inc.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12.5px] text-foreground/50">
                      <CheckCircle2 size={12} className="text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-white transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          {/* Last 2 cards in a 2-col centered row */}
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explore All 5 Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── Section 4: Portfolio Showcase (6 items) ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="portfolio">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Sparkles size={12} className="text-accent animate-pulse" />
              Creative Parity
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Featured Work
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              Real campaigns, real results — a snapshot of what we&apos;ve built for forward-thinking brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "LuxeVibe Fashion",
                desc: "Meta & Google campaigns generating massive ROAS in 3 months for fashion brand in Lahore.",
                result: "+340% ROAS",
                gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                cat: "Paid Ads",
              },
              {
                title: "GreenEarth Organics",
                desc: "Organic reach grew from 10K to 500K in 6 months through customized content strategies.",
                result: "500K Reach",
                gradient: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
                cat: "Content Marketing",
              },
              {
                title: "NexaBuild SaaS",
                desc: "Conversion-optimized software redesign increasing signups by 220% in 30 days of launch.",
                result: "+220% CVR",
                gradient: "linear-gradient(135deg, #0369a1 0%, #38bdf8 100%)",
                cat: "Web Dev",
              },
              {
                title: "SparkFit Apparel",
                desc: "Coordinated 40+ creators generating 10.2K impressions and 15K new customers in one campaign.",
                result: "10.2K Impressions",
                gradient: "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
                cat: "Influencer",
              },
              {
                title: "TechStart B2B",
                desc: "LinkedIn lead gen campaign that cut cost-per-acquisition by 60% while tripling qualified leads.",
                result: "-60% CPA",
                gradient: "linear-gradient(135deg, #1d4ed8 0%, #6366f1 100%)",
                cat: "Lead Gen",
              },
              {
                title: "Bloom Beauty",
                desc: "Viral TikTok & Reels strategy driving 1M+ views and 200% growth in monthly sales for beauty brand.",
                result: "1M+ Views",
                gradient: "linear-gradient(135deg, #be185d 0%, #ec4899 100%)",
                cat: "Social",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="p-card flex flex-col glass rounded-[20px] border border-glass-border hover:border-accent/40 bg-white/[0.02] overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-sm"
              >
                <div 
                  className="h-[180px] w-full flex items-center justify-center relative overflow-hidden select-none border-b border-glass-border"
                  style={{ 
                    background: theme === "dark"
                      ? "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%)"
                      : "linear-gradient(135deg, rgba(224, 242, 254, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)",
                    backdropFilter: "blur(12px)"
                  }}
                >
                  {/* Category-based glowing aura */}
                  <div 
                    style={{
                      position: "absolute",
                      width: "150px",
                      height: "150px",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: getGlowColor(p.cat, theme),
                      filter: "blur(20px)",
                      pointerEvents: "none"
                    }}
                  />

                  <div className="text-2xl font-serif text-foreground font-normal tracking-tight relative z-10 drop-shadow-sm">
                    {p.result}
                  </div>
                  <div className="absolute inset-0 bg-[#041423]/60 backdrop-blur-[4px] flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 z-20">
                    <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/20 border border-accent/30 px-3 py-1 rounded-full">
                      {p.cat}
                    </span>
                    <Link 
                      href="/case-studies"
                      className="bg-white text-[#001f3d] font-semibold text-[12px] px-5 py-2 rounded-full flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-300"
                    >
                      <Eye size={12} />
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[17px] font-normal font-serif text-foreground tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-foreground/60 leading-relaxed flex-1">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
            >
              <span>See All Portfolio Work</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── Section 5: Case Studies Mockups ── */}
        <section className="mx-auto max-w-[900px] px-6 py-20 border-t border-white/6" id="case-studies">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Sparkles size={12} className="text-accent animate-pulse" />
              Verified Metrics
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              Actual business reports featuring real problems, tailored growth strategies, timelines, and measurable outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {[
              {
                title: "LuxeVibe Fashion: From Low ROAS to 280% Growth",
                catBadge: "E-Commerce · Paid Ads",
                problem: "LuxeVibe Fashion was spending PKR 50,000/month on Facebook boosted posts but only generating PKR 70,000 in monthly revenue (1.4x ROAS). They had no retargeting funnels or clean photography.",
                results: [
                  { val: "+280%", lbl: "ROAS Improvement" },
                  { val: "PKR 550K", lbl: "Monthly Revenue" },
                  { val: "-42%", lbl: "Cost Per Purchase" },
                ],
              },
              {
                title: "Karachi Restaurant Chain: 45% More Walk-Ins in 60 Days",
                catBadge: "Local SEO & Social",
                problem: "A popular food brand with three branches was struggling with local foot traffic. They lacked Google My Business profiles, active branch maps reviews, or consistent reels content.",
                results: [
                  { val: "+45%", lbl: "Walk-In Traffic" },
                  { val: "320+", lbl: "Google Reviews" },
                  { val: "#1 Rank", lbl: "Maps Placement" },
                ],
              },
            ].map((cs, idx) => (
              <div 
                key={idx}
                className="glass rounded-[20px] overflow-hidden border border-white/8 bg-white/[0.01] shadow-md transition-all duration-300 hover:border-accent/20"
              >
                <div className="px-5 py-3.5 flex items-center gap-1.5 bg-white/[0.03] border-b border-white/8 select-none">
                  <div className="w-2 h-2 rounded-full bg-[#f43f5e]" />
                  <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                  <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                </div>
                <div className="p-8">
                  <span className="inline-block text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-4">
                    {cs.catBadge}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-foreground font-normal mb-4 tracking-tight">
                    {cs.title}
                  </h3>
                  <p className="text-[14.5px] text-foreground/60 leading-relaxed mb-6">
                    <strong>The Challenge:</strong> {cs.problem}
                  </p>

                  <div className="grid grid-cols-3 gap-4 border-t border-glass-border pt-6">
                    {cs.results.map((r, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl md:text-2xl font-bold font-serif bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                          {r.val}
                        </div>
                        <div className="text-[9px] text-foreground/40 tracking-wider uppercase mt-1 leading-tight">
                          {r.lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
            >
              <span>See All Case Studies</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── Section 6: Founder Panel ── */}
        <section className="mx-auto max-w-[820px] px-6 py-20 border-t border-white/6" id="about">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Sparkles size={12} className="text-accent animate-pulse" />
              The Founder
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Meet Head of Growth
            </h2>
          </div>

          <div
            className="glass p-8 md:p-12 rounded-[24px] border border-accent/20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-12"
            style={{
              background: "linear-gradient(135deg, rgba(32, 210, 190, 0.05) 0%, rgba(139, 92, 246, 0.03) 100%)",
            }}
          >
            {/* Glow border top */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-accent-glow" />

            <div className="flex-shrink-0 flex items-center justify-center overflow-visible">
              <AboutOrbit />
            </div>

            <div className="flex-1">
              <span className="text-[10px] font-bold text-accent tracking-[0.15em] uppercase block mb-1">
                Founder & Head of Growth
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-4">
                Rana Talha Majid
              </h3>
              <p className="text-[14.5px] text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;Boosting posts is not a strategy. We build technical SEO assets, custom React storefronts, and conversion-optimized ad campaign funnels that capture actual, scaleable revenues.&rdquo;
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="https://linkedin.com/in/rana-muhammad-talha-majid-25233228b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white bg-white/5 border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-full transition-all hover:bg-white/8"
                >
                  <svg className="w-3 h-3 text-sky-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent bg-accent/10 border border-accent/20 hover:border-accent/40 px-5 py-2.5 rounded-full transition-all"
                >
                  <span>Learn Our Story</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 7: 6-Step Process ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="process">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Target size={12} className="text-accent animate-pulse" />
              Our Methodology
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Your Growth Is Our Mission
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              A proven, systematic approach to scaling your business. Every engagement follows this framework for maximum results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "Deep-dive into your brand, audience & competition.",
                icon: <Search size={20} />,
              },
              {
                step: "02",
                title: "Strategy & Roadmap",
                desc: "Custom plan aligned with your goals and budget.",
                icon: <FileText size={20} />,
              },
              {
                step: "03",
                title: "Design & Prototype",
                desc: "Visual concepts and wireframes before any code.",
                icon: <Camera size={20} />,
              },
              {
                step: "04",
                title: "Execute & Launch",
                desc: "Precision execution with speed and creativity.",
                icon: <Zap size={20} />,
              },
              {
                step: "05",
                title: "Track & Optimize",
                desc: "Continuous A/B testing to maximize every result.",
                icon: <BarChart3 size={20} />,
              },
              {
                step: "06",
                title: "Scale & Grow",
                desc: "Double-down on winning channels for compound growth.",
                icon: <TrendingUp size={20} />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-[20px] border border-white/8 hover:border-accent/30 bg-white/[0.02] text-center flex flex-col items-center group hover:translate-y-[-4px] transition-all duration-300 relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold text-accent tracking-widest uppercase mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-lg font-serif text-foreground font-normal mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-[12.5px] text-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 8: Why Choose Us (Trust Section) ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="trust">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Shield size={12} className="text-accent animate-pulse" />
              Built on Trust
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Why Choose NexaGrowth?
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              We don&apos;t make empty promises. Here&apos;s why startups and small businesses choose us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Data-First Approach",
                desc: "Every strategy is backed by keyword research, audience data, and competitor analysis — not intuition. We show you the numbers.",
                icon: <BarChart3 size={18} />,
              },
              {
                title: "Local Market Expertise",
                desc: "Deep understanding of the Pakistani digital landscape — from Facebook Ads audiences in Lahore to SEO keywords in Karachi and Multan.",
                icon: <MapPin size={18} />,
              },
              {
                title: "Transparent Communication",
                desc: "Weekly reports, clear metrics, honest feedback. You always know exactly where your budget is going and what results it's producing.",
                icon: <MessageSquare size={18} />,
              },
              {
                title: "Campaign Screenshots & Analytics",
                desc: "We share real campaign data — ad performance screenshots, audience insights, and analytics reports — so you can see the real performance.",
                icon: <Camera size={18} />,
              },
              {
                title: "Case Studies Available",
                desc: "From SEO-driven organic growth to paid ad campaigns, we document our work and share anonymised results with prospective clients.",
                icon: <Award size={18} />,
              },
              {
                title: "No Lock-in Contracts",
                desc: "Start with a free consultation. No pressure, no hidden fees. We earn your trust by delivering results — not by locking you in.",
                icon: <Lock size={18} />,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="glass p-7 rounded-[20px] border border-white/8 hover:border-accent/30 bg-white/[0.02] flex flex-col group hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/12 border border-accent/20 text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-[17px] font-serif text-foreground font-normal mb-2 tracking-tight group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-[13px] text-foreground/60 leading-relaxed flex-1">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[14px] text-foreground/70 mb-5">
              Get a free 15-minute strategy call — we&apos;ll walk you through exactly how we&apos;d grow your brand.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-background bg-foreground px-7 py-3.5 rounded-full hover:scale-[1.03] hover:shadow-md transition-all duration-300"
            >
              <span>Get Free Strategy Call</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* ── Section 9: Online Tools Showcase ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="tools">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Wrench size={12} className="text-accent animate-pulse" />
              100% Free Utilities
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Free Marketing Tools
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              No credit card, no signups. Instant utility web tools for SEO metrics, copy creation, design grids, and calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Meta Tag Generator",
                desc: "Generate perfect SEO meta tags, Open Graph, and Twitter cards for any page.",
                icon: <Search size={18} />,
                url: "/tools/meta-tag-generator",
                emoji: "🏷️",
              },
              {
                title: "Password Generator",
                desc: "Create ultra-secure passwords with customizable length and character options.",
                icon: <Lock size={18} />,
                url: "/tools/password-generator",
                emoji: "🔐",
              },
              {
                title: "Word Counter",
                desc: "Count words, characters, sentences, and get reading time estimates instantly.",
                icon: <FileText size={18} />,
                url: "/tools/word-counter",
                emoji: "📝",
              },
              {
                title: "AI Caption Generator",
                desc: "Generate engaging social media captions for any platform in seconds.",
                icon: <Smile size={18} />,
                url: "/tools/ai-caption-generator",
                emoji: "✨",
              },
              {
                title: "QR Code Generator",
                desc: "Create and download QR codes for URLs, text, or any data instantly.",
                icon: <QrCode size={18} />,
                url: "/tools/qr-code-generator",
                emoji: "📱",
              },
              {
                title: "CSS Gradient Generator",
                desc: "Build beautiful gradients visually and copy production-ready CSS code.",
                icon: <Sparkles size={18} />,
                url: "/tools/css-gradient-generator",
                emoji: "🌈",
              },
            ].map((t, idx) => (
              <div 
                key={idx}
                className="glass p-6 rounded-[20px] border border-white/8 hover:border-accent/40 bg-white/[0.02] flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 text-accent flex items-center justify-center">
                    {t.icon}
                  </div>
                  <span className="text-lg">{t.emoji}</span>
                </div>
                <h3 className="text-lg font-serif text-foreground font-normal mb-2 tracking-tight group-hover:text-accent transition-colors">
                  {t.title}
                </h3>
                <p className="text-[12.5px] text-foreground/60 leading-relaxed flex-1 mb-5">
                  {t.desc}
                </p>
                <Link 
                  href={t.url}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent hover:text-foreground transition-colors self-start"
                >
                  <span>Use Free Tool →</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/tools"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explore All 50+ Tools</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── Section 10: Blogs Hub Preview ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-20 border-t border-white/6" id="blog">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <BookOpen size={12} className="text-accent animate-pulse" />
              SEO Growth Journal
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Latest Growth Insights
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              Expert insights on SEO, Facebook Ads, and digital growth strategies tailored for the Pakistani market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Marketing Strategies in Pakistan 2026",
                desc: "Practical tactics for SEO, Facebook Ads, content, and lead generation that work in the Pakistani market.",
                cat: "Strategy",
                time: "10 min read",
                url: "/blog/digital-marketing-strategies-pakistan-2026",
              },
              {
                title: "What Is Growth Marketing in Pakistan?",
                desc: "Learn how growth marketing connects acquisition, activation, retention, and referrals for compounding results.",
                cat: "Growth",
                time: "8 min read",
                url: "/blog/what-is-growth-marketing-pakistan-2026",
              },
              {
                title: "How to Choose a Digital Marketing Agency",
                desc: "Red flags, smart questions, and a practical framework for hiring the right agency with confidence.",
                cat: "Guide",
                time: "7 min read",
                url: "/blog/how-to-choose-digital-marketing-agency-pakistan-2026",
              },
              {
                title: "SEO vs Paid Ads: Which Is Better?",
                desc: "Compare speed, cost, and long-term value to decide where your marketing budget should go first.",
                cat: "SEO",
                time: "9 min read",
                url: "/blog/seo-vs-paid-ads-pakistan-2026",
              },
            ].map((post, idx) => (
              <div 
                key={idx}
                className="glass p-6 rounded-[20px] border border-white/8 hover:border-accent/40 bg-white/[0.02] flex flex-col group"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[9px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-md">
                    {post.cat}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-foreground/45">
                    <Clock size={10} />
                    <span>{post.time}</span>
                  </div>
                </div>
                <h3 className="text-[16px] font-serif text-foreground font-normal mb-2 tracking-tight group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-[12.5px] text-foreground/60 leading-relaxed flex-1 mb-5">
                  {post.desc}
                </p>
                <Link 
                  href={post.url}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent hover:text-foreground transition-colors self-start"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground px-7 py-3 rounded-full glass border border-glass-border hover:bg-glass-hover hover:scale-[1.02] transition-all duration-300"
            >
              <span>View All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── Pricing Preview Section ── */}
        <PricingPreview />

        {/* ── Testimonials Section ── */}
        <Testimonials />

        {/* ── Tech Stack Section ── */}
        <TechStack />

        {/* ── Section 11: Newsletter Subscription ── */}
        <section className="mx-auto max-w-[700px] px-6 py-20 border-t border-white/6" id="newsletter">
          <div className="glass p-8 md:p-12 rounded-[24px] border border-white/10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(32, 210, 190, 0.06) 0%, rgba(100, 160, 255, 0.04) 100%)" }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-5">
              <Mail size={12} className="text-accent" />
              Newsletter
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal mb-3">
              Stay Ahead of the Curve
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[460px] mx-auto mb-8">
              Get weekly insights on SEO, AI tools, and digital growth strategies. Join 1,000+ marketers and developers who read our newsletter.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 text-accent text-[15px] font-medium py-3"
              >
                <CheckCircle2 size={18} />
                <span>Check your inbox for a welcome email!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 glass border border-glass-border focus:border-accent hover:border-foreground/20 bg-glass-bg text-foreground placeholder:text-foreground/45 px-5 py-3.5 rounded-full text-[14px] outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="font-sans text-[14px] font-medium text-background bg-foreground px-6 py-3.5 rounded-full hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Send size={14} />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── Section 12: Partners Logo Strip ── */}
        <section className="mx-auto max-w-[1100px] px-6 py-16 border-t border-glass-border overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-[12px] font-semibold text-foreground/40 tracking-[0.2em] uppercase">
              Our Partners & Platforms
            </h2>
          </div>
          <div className="opacity-40 hover:opacity-75 transition-opacity duration-500">
            <ServiceMarquee
              items={["GOOGLE ADS", "META ADS", "TIKTOK ADS", "SHOPIFY DEVELOPMENT", "CLOUDFLARE SYSTEMS", "SEMRUSH METRICS", "SEO OUTREACH"]}
              speed={22}
              className="text-[13px] md:text-[14px] font-sans font-bold tracking-[0.12em] text-foreground py-3 border-y border-glass-border"
            />
          </div>
        </section>

        {/* ── Section 13: FAQ Preview ── */}
        <section className="mx-auto max-w-[800px] px-6 py-20 border-t border-white/6" id="faq">
          <div className="text-center flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <MessageSquare size={12} className="text-accent animate-pulse" />
              Quick Answers
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              Quick answers to common questions about NexaGrowth&apos;s tools, services, and platform.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "Are all NexaGrowth tools really free?",
                a: "Yes! All tools on NexaGrowth are 100% free to use with no signup, no limits, and no hidden charges. Every tool runs entirely in your browser — we never store or send your data anywhere.",
              },
              {
                q: "What types of tools does NexaGrowth offer?",
                a: "We offer tools across 7 categories: SEO tools (meta tag generator, slug generator), AI tools (caption generator), text tools (word counter, case converter), developer tools (password generator, QR code maker), finance calculators, health calculators, and utility tools.",
              },
              {
                q: "Is my data safe when using your tools?",
                a: "Absolutely. All NexaGrowth tools process data 100% client-side in your browser. We never send, store, or log any data you enter. Your passwords, texts, and calculations stay on your device — always.",
              },
              {
                q: "Does NexaGrowth offer marketing services too?",
                a: "Yes! Beyond our free tools, NexaGrowth is a full-service digital marketing agency. We offer SEO, paid advertising (Meta & Google Ads), content marketing, influencer management, and web development services.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="glass rounded-[16px] border border-white/8 hover:border-accent/20 transition-all duration-300 group"
              >
                <summary className="px-6 py-5 cursor-pointer text-[15px] font-medium text-foreground/90 flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <ChevronRight size={16} className="text-foreground/35 group-open:rotate-90 transition-transform duration-300 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-5 text-[14px] text-foreground/60 leading-relaxed border-t border-glass-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:text-white transition-colors"
            >
              <span>View All FAQs</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* ── Section 14: High-Converting Contact Strategy Form ── */}
        <section className="mx-auto max-w-[800px] px-6 py-20 border-t border-white/6" id="contact">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-4">
              <Sparkles size={12} className="text-accent animate-pulse" />
              Scale Today
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground font-normal mb-4">
              Start Your Free Consultation
            </h2>
            <p className="text-[14.5px] text-foreground/60 leading-relaxed max-w-[500px]">
              Tell us about your brand. We&apos;ll respond within 24 hours with a free, tailored growth strategy — no strings attached.
            </p>
            
            {/* Contact Info Badges */}
            <div className="flex items-center gap-4 mt-6 flex-wrap justify-center">
              <a href="mailto:contact@nexagrowth.xyz" className="inline-flex items-center gap-2 text-[12px] text-foreground/60 hover:text-foreground transition-colors glass px-4 py-2 rounded-full border border-glass-border hover:bg-glass-hover">
                <Mail size={12} />
                <span>contact@nexagrowth.xyz</span>
              </a>
              <a href="https://wa.me/923390061165" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] text-foreground/60 hover:text-green-500 transition-colors glass px-4 py-2 rounded-full border border-glass-border hover:bg-glass-hover">
                <PhoneCall size={12} />
                <span>0339-0061165</span>
              </a>
            </div>
          </div>

          {formSubmitted ? (
            <div 
              className="glass p-8 md:p-12 rounded-[24px] text-center border border-accent/40 shadow-lg"
              style={{ background: "rgba(32, 210, 190, 0.05)" }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-3">Audit Strategy Request Received!</h3>
              <p className="text-[14.5px] text-foreground/60 leading-relaxed mb-6">
                Thank you! Talha will personally analyze your website and get back to you on WhatsApp within 12-24 hours. Let&apos;s make something amazing together!
              </p>
              <a 
                href="https://wa.me/923390061165" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full transition-colors shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              >
                <span>Instant WhatsApp Strategy Chat</span>
              </a>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="glass p-8 md:p-12 rounded-[24px] border border-glass-border bg-glass-bg flex flex-col gap-6 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[12px] font-semibold text-foreground/80 tracking-wider uppercase">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    placeholder="Talha Majid"
                    className="glass border border-glass-border focus:border-accent hover:border-foreground/20 bg-transparent text-foreground px-5 py-3 rounded-[12px] text-[14.5px] outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="whatsapp" className="text-[12px] font-semibold text-foreground/80 tracking-wider uppercase">WhatsApp / Contact Number *</label>
                  <input 
                    type="tel" 
                    id="whatsapp" 
                    name="whatsapp"
                    required 
                    placeholder="+92 339 0061165"
                    className="glass border border-glass-border focus:border-accent hover:border-foreground/20 bg-transparent text-foreground px-5 py-3 rounded-[12px] text-[14.5px] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[12px] font-semibold text-foreground/80 tracking-wider uppercase">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="client@growthbrand.com"
                    className="glass border border-glass-border focus:border-accent hover:border-foreground/20 bg-transparent text-foreground px-5 py-3 rounded-[12px] text-[14.5px] outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="website" className="text-[12px] font-semibold text-foreground/80 tracking-wider uppercase">Website / Page URL *</label>
                  <input 
                    type="url" 
                    id="website" 
                    name="website"
                    required 
                    placeholder="https://mybrand.com"
                    className="glass border border-glass-border focus:border-accent hover:border-foreground/20 bg-transparent text-foreground px-5 py-3 rounded-[12px] text-[14.5px] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="goals" className="text-[12px] font-semibold text-foreground/80 tracking-wider uppercase">Describe Your Growth Goals & Blockages *</label>
                <textarea 
                  id="goals" 
                  name="goals"
                  required 
                  rows={4}
                  placeholder="Tell us about your business. (e.g. 'We are an online shoes brand based in Lahore. We are spending 1L/month on boosted posts but sales are inconsistent, want to structure proper campaigns and set up search rankings...')"
                  className="glass border border-glass-border focus:border-accent hover:border-foreground/20 bg-transparent text-foreground px-5 py-4 rounded-[12px] text-[14.5px] outline-none resize-none transition-colors"
                />
              </div>

              <button 
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 font-sans text-[14.5px] font-medium text-background bg-foreground hover:scale-[1.02] hover:shadow-md active:scale-100 py-4 rounded-full cursor-pointer transition-all duration-300"
              >
                <span>Submit & Book Strategy Audit</span>
                <ArrowRight size={15} />
              </button>

              <p className="text-center text-[11px] text-foreground/40 mt-1">
                We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          )}
        </section>

        {/* ── Services Keyword Marquee Banner ── */}
        <div className="w-full bg-accent/5 py-4 border-y border-accent/20 select-none overflow-hidden mt-6 mb-12">
          <ServiceMarquee
            items={[
              "EMAIL MARKETING", 
              "CONTENT MARKETING", 
              "PAID ADVERTISING", 
              "INFLUENCER MANAGEMENT", 
              "WEB DEVELOPMENT", 
              "FREE TOOLS", 
              "EXPERT ARTICLES", 
              "FREE TO USE", 
              "SIGNUP NEEDED"
            ]}
            speed={35}
            separator="✦"
            className="text-[13px] md:text-[14px] font-sans font-black tracking-widest text-accent uppercase"
          />
        </div>
      </main>

      {/* ── Rich Footer Component ── */}
      <Footer />
    </div>
  );
}
