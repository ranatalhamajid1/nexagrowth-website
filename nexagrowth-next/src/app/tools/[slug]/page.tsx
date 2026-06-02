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
  "english-to-urdu": {
    title: "English to Urdu Translator — Translate to Urdu Script",
    desc: "Translate English text to beautiful Urdu Nastaliq script instantly. Free, secure, runs locally in the browser.",
    icon: "🇵🇰",
    schemaCat: "TranslationApplication",
  },
  "english-to-roman-urdu": {
    title: "English to Roman Urdu Converter — Transliteration Tool",
    desc: "Convert English text to Roman Urdu transliteration instantly. Fast, free, no signups required.",
    icon: "🔤",
    schemaCat: "TranslationApplication",
  },
  "urdu-to-english": {
    title: "Urdu to English Translator — Online Translation Tool",
    desc: "Translate Urdu Nastaliq script text to English instantly. Fully client-side, 100% secure.",
    icon: "🇬🇧",
    schemaCat: "TranslationApplication",
  },
  "roman-urdu-to-english": {
    title: "Roman Urdu to English Converter — Fast Text Translation",
    desc: "Convert Roman Urdu messages and terms into clean English instantly. Free, secure translation.",
    icon: "🗣️",
    schemaCat: "TranslationApplication",
  },
  "urdu-keyboard": {
    title: "Urdu Keyboard Online — Type Urdu Script Nastaliq",
    desc: "Type in Urdu script online using a visual virtual keyboard. Free, responsive, copy-paste enabled.",
    icon: "⌨️",
    schemaCat: "UtilityApplication",
  },
  "text-translator": {
    title: "Multi-Language Text Translator — Free Translator",
    desc: "Translate between 14 global languages instantly. Safe, local, runs entirely in the browser.",
    icon: "🌐",
    schemaCat: "TranslationApplication",
  },
  "image-to-pdf": {
    title: "Image to PDF Converter — Convert JPG & PNG to PDF",
    desc: "Convert images (JPG, PNG, WebP) to high-quality PDF files. Reorder images and download instantly.",
    icon: "📸",
    schemaCat: "UtilityApplication",
  },
  "pdf-merger": {
    title: "PDF Merger — Combine PDF Files Online Free",
    desc: "Merge multiple PDF documents into a single PDF file securely on your browser. 100% private.",
    icon: "📑",
    schemaCat: "UtilityApplication",
  },
  "pdf-page-extractor": {
    title: "PDF Page Extractor — Split & Extract PDF Pages",
    desc: "Extract specific pages or page ranges from any PDF document. Free, local, fast extraction.",
    icon: "✂️",
    schemaCat: "UtilityApplication",
  },
  "pdf-compressor": {
    title: "PDF Compressor — Reduce PDF File Size Online",
    desc: "Reduce the file size of your PDF documents while preserving optimal structure. 100% private.",
    icon: "🗜️",
    schemaCat: "UtilityApplication",
  },
  "text-to-pdf": {
    title: "Text to PDF Converter — Generate PDF from Notes",
    desc: "Convert plain text or formatting into a downloadable PDF document. Custom margins and fonts.",
    icon: "📝",
    schemaCat: "UtilityApplication",
  },
  "html-to-pdf": {
    title: "HTML to PDF Converter — Export HTML to PDF",
    desc: "Convert raw HTML code or visual layouts into a clean downloadable PDF. Free developer tool.",
    icon: "🌐",
    schemaCat: "DeveloperApplication",
  },
  "image-compressor": {
    title: "Image Compressor — Reduce Image File Size",
    desc: "Compress JPG, PNG, or WebP images while maintaining optimal quality. 100% local.",
    icon: "🗜️",
    schemaCat: "DesignApplication",
  },
  "image-resizer": {
    title: "Image Resizer — Resize Photos to Custom Dimensions",
    desc: "Resize JPG, PNG, and WebP images to custom dimensions in pixels. Lock aspect ratio.",
    icon: "📐",
    schemaCat: "DesignApplication",
  },
  "image-format-converter": {
    title: "Image Format Converter — Convert JPG, PNG, WebP",
    desc: "Convert images between popular formats: JPG, PNG, and WebP instantly. 100% offline.",
    icon: "🔄",
    schemaCat: "DesignApplication",
  },
  "image-cropper": {
    title: "Image Cropper — Crop Photos Online Free",
    desc: "Crop images online using custom offsets or standard presets (1:1, 16:9, 4:3) instantly.",
    icon: "✂️",
    schemaCat: "DesignApplication",
  },
  "screenshot-to-image": {
    title: "Screenshot to Image — Capture Tabs & Windows",
    desc: "Capture browser tabs, windows, or your screen and download as a high-quality PNG image.",
    icon: "📸",
    schemaCat: "UtilityApplication",
  },
  "json-formatter": {
    title: "JSON Formatter & Validator — Beautify JSON Code",
    desc: "Beautify, format, validate, and minify JSON data with instant syntax error highlighting.",
    icon: "💻",
    schemaCat: "DeveloperApplication",
  },
  "base64-encoder-decoder": {
    title: "Base64 Encoder/Decoder — Convert Text & Strings",
    desc: "Encode strings into Base64 format or decode Base64 data back to clear human-readable text.",
    icon: "🔐",
    schemaCat: "DeveloperApplication",
  },
  "url-encoder-decoder": {
    title: "URL Encoder/Decoder — Percent Encoding Helper",
    desc: "Encode raw parameters to safe percent-encoding or decode URL strings back to normal.",
    icon: "🔗",
    schemaCat: "DeveloperApplication",
  },
  "html-minifier": {
    title: "HTML Minifier — Compress HTML Markup Online",
    desc: "Minify HTML source code by stripping comments and whitespaces to optimize load speeds.",
    icon: "🗜️",
    schemaCat: "DeveloperApplication",
  },
  "css-minifier": {
    title: "CSS Minifier — Compress Stylesheets Online",
    desc: "Minify stylesheet CSS declarations by stripping comments and duplicate spacing instantly.",
    icon: "🎨",
    schemaCat: "DeveloperApplication",
  },
  "regex-tester": {
    title: "Regex Tester & Debugger — JavaScript Regex Match",
    desc: "Test and debug JavaScript regular expressions with live syntax highlighting and flags.",
    icon: "🔬",
    schemaCat: "DeveloperApplication",
  },
  "percentage-calculator": {
    title: "Percentage Calculator — Find Ratios & Differentials",
    desc: "Calculate percentages, ratio rates, and percentage differences easily. Instant math tool.",
    icon: "🔢",
    schemaCat: "UtilityApplication",
  },
  "discount-calculator": {
    title: "Discount Calculator — Calculate Savings & Taxes",
    desc: "Determine final sale prices and total savings with optional sales tax calculation.",
    icon: "🏷️",
    schemaCat: "UtilityApplication",
  },
  "tip-calculator": {
    title: "Tip Calculator — Split Bills & Tips Easily",
    desc: "Calculate custom tip rates and split bills among friends or groups instantly.",
    icon: "💸",
    schemaCat: "UtilityApplication",
  },
  "unit-converter": {
    title: "Unit Converter — Convert Length, Weight, Temp",
    desc: "Convert between metric and imperial units for length, weight, and temperature.",
    icon: "⚖️",
    schemaCat: "UtilityApplication",
  },
  "date-difference-calculator": {
    title: "Date Difference Calculator — Find Duration Between Dates",
    desc: "Calculate exact years, months, weeks, and days difference between any two calendar dates.",
    icon: "📅",
    schemaCat: "UtilityApplication",
  },
  "lorem-ipsum-generator": {
    title: "Lorem Ipsum Generator — Create Placeholder Text",
    desc: "Generate dummy paragraphs, sentences, or words of Lorem Ipsum dummy text for mockups.",
    icon: "📝",
    schemaCat: "UtilityApplication",
  },
  "text-repeater": {
    title: "Text Repeater — Repeat String N Times Free",
    desc: "Repeat words or paragraphs up to 10,000 times with custom dividers and separators.",
    icon: "🔁",
    schemaCat: "UtilityApplication",
  },
  "hashtag-generator": {
    title: "Hashtag Generator — Find Trending Social Hashtags",
    desc: "Generate relevant trending hashtags for Instagram, TikTok, LinkedIn, and Twitter.",
    icon: "#️⃣",
    schemaCat: "SocialNetworkingApplication",
  },
  "fancy-text-generator": {
    title: "Fancy Text Generator — Style Unicode Fonts",
    desc: "Convert text to stylish unicode fonts (bold, double-struck, script) for social bios.",
    icon: "✍️",
    schemaCat: "UtilityApplication",
  },
  "text-to-binary": {
    title: "Text to Binary Converter — Convert Text & ASCII",
    desc: "Convert human letters to binary code or decode binary ASCII streams back to clear text.",
    icon: "🔢",
    schemaCat: "UtilityApplication",
  },
  "md5-hash-generator": {
    title: "MD5 Hash Generator — Create MD5 Checksums Online",
    desc: "Generate a secure 32-character hexadecimal MD5 hash checksum from any string.",
    icon: "🔑",
    schemaCat: "SecurityApplication",
  },
  "sha256-hash-generator": {
    title: "SHA-256 Hash Generator — Create Secure Checksums",
    desc: "Generate a secure 64-character hexadecimal SHA-256 cryptographic hash checksum.",
    icon: "🔐",
    schemaCat: "SecurityApplication",
  },
  "uuid-generator": {
    title: "Random UUID Generator — Bulk UUID v4 Helper",
    desc: "Generate multiple secure, random version 4 UUIDs in bulk with letter case selection.",
    icon: "🔐",
    schemaCat: "SecurityApplication",
  },
  "countdown-timer": {
    title: "Countdown Timer — Set Custom Reminders Online",
    desc: "Set countdown durations with visual progress displays and web audio sound alerts.",
    icon: "⏱️",
    schemaCat: "UtilityApplication",
  },
  "invoice-generator": {
    title: "Invoice Generator — Create Print-Ready PDF Invoices",
    desc: "Build professional invoices, add billing items, and download custom statement PDFs.",
    icon: "🧾",
    schemaCat: "UtilityApplication",
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
