import Footer from "../../../components/Footer";
import React from "react";
import Background from "../../../components/Background";
import Navigation from "../../../components/Navigation";
import Link from "next/link";
import AddressBar from "../../../components/AddressBar";
import ToolIframe from "../../../components/ToolIframe";
import { notFound } from "next/navigation";
import { Wrench, ArrowLeft, ShieldCheck, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import toolsData from "../../../data/toolsData.json";

export const runtime = 'edge';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

// 1. A dictionary of specialized SEO descriptions and metadata for each tool
const TOOLS_METADATA: Record<
  string,
  { title: string; desc: string; icon: string; schemaCat: string }
> = {
  "qr-code-generator": {
    title: "QR Code Generator — Create High-Quality Vector QR Codes",
    desc: "Generate customized high-quality QR codes instantly for URLs, text, phone contacts, or Wi-Fi passwords. 100% free, no signups required.",
    icon: "📱",
    schemaCat: "UtilityApplication",
  },
  "ai-caption-generator": {
    title: "AI Caption Generator — Free Social Media Copywriting Tool",
    desc: "Create engaging and viral social media captions for Instagram, LinkedIn, and Facebook in seconds using advanced prompt marketing rules.",
    icon: "✨",
    schemaCat: "SocialNetworkingApplication",
  },
  "meta-tag-generator": {
    title: "Meta Tag Generator — Optimize Search Title & Open Graph",
    desc: "Build search-engine optimized meta tags, Page titles, and Open Graph previews to maximize your Google SEO click-through rates.",
    icon: "🏷️",
    schemaCat: "DesignApplication",
  },
  "slug-generator": {
    title: "SEO Slug Generator — Build Clean Search-Friendly URLs",
    desc: "Instantly convert any text or title into an SEO-friendly URL slug. Perfect for bloggers, content developers, and programmers.",
    icon: "🔗",
    schemaCat: "UtilityApplication",
  },
  "word-counter": {
    title: "Word Counter & Character Tracker — Free Editorial Tool",
    desc: "Count words, sentences, and character counts instantly with active reading time estimators and word density metrics.",
    icon: "📝",
    schemaCat: "WritingApplication",
  },
  "case-converter": {
    title: "Case Converter — Instant Case Conversions in 1-Click",
    desc: "Convert text instantly between UPPERCASE, lowercase, Title Case, Sentence Case, and camelCase with direct copy capabilities.",
    icon: "🔤",
    schemaCat: "UtilityApplication",
  },
  "emi-calculator": {
    title: "EMI Loan Calculator — Home & Business Investment Widget",
    desc: "Calculate monthly installments, interest rates, and loan amortizations for homes, cars, or business investments in Pakistan.",
    icon: "🏦",
    schemaCat: "FinanceApplication",
  },
  "bmi-calculator": {
    title: "BMI Calculator — Free Body Mass Index Calculator",
    desc: "Check your Body Mass Index (BMI) instantly based on weight and height metrics. Quick, responsive health diagnostics.",
    icon: "⚖️",
    schemaCat: "HealthApplication",
  },
  "age-calculator": {
    title: "Age Calculator — Find Your Exact Age in Years & Days",
    desc: "Calculate your exact age down to months, weeks, and days. Ideal for registration forms and profile setups.",
    icon: "📅",
    schemaCat: "UtilityApplication",
  },
  "color-picker": {
    title: "Color Picker & Palette — HEX, RGB & HSL Browser Grids",
    desc: "Explore gorgeous colors, pick colors directly, and copy HEX, RGB, and HSL values instantly from your web browser.",
    icon: "🎨",
    schemaCat: "DesignApplication",
  },
  "css-gradient-generator": {
    title: "CSS Gradient Generator — Visually Build Apple Gradients",
    desc: "Design beautiful visual gradients and export production-ready CSS background code. Interactive Apple-grade preview screen.",
    icon: "🌈",
    schemaCat: "DesignApplication",
  },
  "password-generator": {
    title: "Password Generator — Create Strong Cryptographic Passwords",
    desc: "Generate random, high-entropy secure passwords using Web Crypto API. Customize length, numbers, and symbols securely.",
    icon: "🔐",
    schemaCat: "SecurityApplication",
  },
};

// 2. Generate dynamic metadata for absolute SEO dominance
export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = TOOLS_METADATA[slug];

  if (!meta) {
    return {
      title: "Tool Not Found",
      description: "Requested online tool is not available.",
    };
  }

  return {
    title: `${meta.title} | NexaGrowth`,
    description: meta.desc,
    openGraph: {
      title: `${meta.title} | NexaGrowth`,
      description: meta.desc,
      url: `https://nexagrowth.xyz/tools/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | NexaGrowth`,
      description: meta.desc,
    },
  };
}

export default async function ToolLauncherPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const meta = TOOLS_METADATA[slug];

  // Verify that the tool is compiled and registered in our toolsData database
  const fileExists = (toolsData as Record<string, any>)[slug]?.exists;

  if (!meta || !fileExists) {
    notFound();
  }

  // Structured Schema for WebApplication
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": meta.title.split(" — ")[0],
    "url": `https://nexagrowth.xyz/tools/${slug}`,
    "applicationCategory": meta.schemaCat,
    "operatingSystem": "All",
    "description": meta.desc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexaGrowth",
      "url": "https://nexagrowth.xyz",
    },
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <Background />
      <Navigation activeRoute="other" />

      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* ── Page Hero ── */}
      <header className="page-hero w-full relative pb-8">
        <div className="mx-auto max-w-[1100px] px-6 py-12 text-center flex flex-col items-center">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 tracking-wider uppercase mb-6 font-semibold select-none">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href="/tools" className="hover:text-accent transition-colors">Tools Hub</Link>
            <ChevronRight size={10} />
            <span className="text-foreground/60">{meta.title.split(" — ")[0]}</span>
          </nav>
 
          <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 text-accent flex items-center justify-center text-xl mb-5 shadow-sm">
            {meta.icon}
          </div>
 
          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[56px] font-normal leading-[1.1] tracking-[-1.5px] text-foreground mb-4">
            {meta.title.split(" — ")[0]}
          </h1>
 
          <p className="text-[13.5px] sm:text-[14.5px] text-foreground/60 leading-relaxed max-w-[580px]">
            {meta.desc}
          </p>
        </div>
      </header>
 
      {/* ── Tool Interactive Frame ── */}
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 pb-20 relative z-20 flex flex-col items-center">
        
        {/* Frame Outer Box */}
        <div className="w-full glass rounded-[24px] border border-glass-border bg-glass-bg overflow-hidden shadow-2xl relative h-[780px] sm:h-[840px] md:h-[900px] xl:h-[950px]">
          
          {/* Browser Window Bar */}
          <div className="px-5 py-3.5 flex items-center justify-between bg-foreground/[0.02] border-b border-glass-border select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            </div>
            
            <AddressBar slug={slug} />
 
            <div className="flex items-center gap-1 text-[10px] text-accent/80 font-bold uppercase tracking-wider bg-accent/15 border border-accent/25 px-2 py-0.5 rounded-md">
              <ShieldCheck size={11} />
              <span>Safe</span>
            </div>
          </div>
 
          {/* Secure optimized frame */}
          <ToolIframe slug={slug} title={meta.title} />
        </div>
 
        {/* Back navigation */}
        <div className="mt-8 self-start">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground/40 hover:text-accent transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to Free Tools Hub</span>
          </Link>
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
