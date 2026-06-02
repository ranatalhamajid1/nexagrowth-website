"use client";
import Footer from "../../components/Footer";
import React from "react";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, Wrench, Binary, Smile, Calculator, HelpCircle, Palette, FileText, Landmark, Search, ShieldCheck, QrCode, Type, Globe, FileJson, Hash, RefreshCw, Scissors, Lock, Timer, Percent, Tag, DollarSign, Calendar, Eye, Image } from "lucide-react";

interface ToolItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  url: string;
  tag: string;
}

export default function ToolsHubPage() {
  const tools: ToolItem[] = [
    {
      title: "QR Code Generator",
      desc: "Generate customized high-quality vector QR codes instantly for URLs, text, Wi-Fi passwords, or phone contacts. No signups.",
      icon: <QrCode className="w-5 h-5" />,
      url: "/tools/qr-code-generator",
      tag: "Utility",
    },
    {
      title: "AI Caption Generator",
      desc: "Instant creative captions for Instagram, Facebook, and LinkedIn driven by advanced marketing prompt rules. Beat writer's block.",
      icon: <Smile className="w-5 h-5" />,
      url: "/tools/ai-caption-generator",
      tag: "Marketing",
    },
    {
      title: "Meta Tag Generator",
      desc: "Build highly optimized Google SEO page title and open graph meta tags, ensuring your content stands out and ranks high.",
      icon: <Search className="w-5 h-5" />,
      url: "/tools/meta-tag-generator",
      tag: "SEO",
    },
    {
      title: "Slug Generator",
      desc: "Quickly convert any title into a clean, search-engine friendly slug. Ideal for content writers, bloggers, and SEO professionals.",
      icon: <Binary className="w-5 h-5" />,
      url: "/tools/slug-generator",
      tag: "SEO",
    },
    {
      title: "Word Counter",
      desc: "Quick word, character, and sentence counter with active reading speed metrics. Perfectly optimized for content strategies.",
      icon: <Type className="w-5 h-5" />,
      url: "/tools/word-counter",
      tag: "Writing",
    },
    {
      title: "Case Converter",
      desc: "Convert text instantly between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase format formats in 1-click.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/case-converter",
      tag: "Writing",
    },
    {
      title: "EMI Loan Calculator",
      desc: "Calculate monthly installments, interest rates, and loan amortizations for home, car, or business investments in Pakistan.",
      icon: <Landmark className="w-5 h-5" />,
      url: "/tools/emi-calculator",
      tag: "Finance",
    },
    {
      title: "BMI Calculator",
      desc: "Check your Body Mass Index (BMI) instantly based on weight and height metrics. High-speed, responsive diagnostic tools.",
      icon: <Calculator className="w-5 h-5" />,
      url: "/tools/bmi-calculator",
      tag: "Health",
    },
    {
      title: "Age Calculator",
      desc: "Calculate your exact age in years, months, weeks, and days. Excellent utility for registration forms and profile setups.",
      icon: <HelpCircle className="w-5 h-5" />,
      url: "/tools/age-calculator",
      tag: "Utility",
    },
    {
      title: "Color Picker & Palette",
      desc: "Explore sleek HEX, RGB, and HSL colors and palettes directly from your browser. Absolute parity design utility.",
      icon: <Palette className="w-5 h-5" />,
      url: "/tools/color-picker",
      tag: "Design",
    },
    {
      title: "CSS Gradient Generator",
      desc: "Design gorgeous background gradients and export instant CSS codes. Tailored with Apple-grade preview screens.",
      icon: <Palette className="w-5 h-5" />,
      url: "/tools/css-gradient-generator",
      tag: "Design",
    },
    {
      title: "Password Generator",
      desc: "Generate secure, random, high-entropy passwords with custom parameters (symbols, numbers, length) to keep profiles safe.",
      icon: <ShieldCheck className="w-5 h-5" />,
      url: "/tools/password-generator",
      tag: "Security",
    },
    {
      title: "English to Urdu Translator",
      desc: "Translate English text to beautiful Urdu Nastaliq script instantly. Free, secure, runs locally in the browser.",
      icon: <Globe className="w-5 h-5" />,
      url: "/tools/english-to-urdu",
      tag: "Translation",
    },
    {
      title: "English to Roman Urdu",
      desc: "Convert English text to Roman Urdu transliteration instantly. Fast, free, no signups required.",
      icon: <Type className="w-5 h-5" />,
      url: "/tools/english-to-roman-urdu",
      tag: "Translation",
    },
    {
      title: "Urdu to English Translator",
      desc: "Translate Urdu Nastaliq script text to English instantly. Fully client-side, 100% secure.",
      icon: <Globe className="w-5 h-5" />,
      url: "/tools/urdu-to-english",
      tag: "Translation",
    },
    {
      title: "Roman Urdu to English",
      desc: "Convert Roman Urdu messages and terms into clean English instantly. Free, secure translation.",
      icon: <Globe className="w-5 h-5" />,
      url: "/tools/roman-urdu-to-english",
      tag: "Translation",
    },
    {
      title: "Urdu Keyboard Online",
      desc: "Type in Urdu script online using a visual virtual keyboard. Free, responsive, copy-paste enabled.",
      icon: <Type className="w-5 h-5" />,
      url: "/tools/urdu-keyboard",
      tag: "Translation",
    },
    {
      title: "Multi-Language Text Translator",
      desc: "Translate between 14 global languages instantly. Safe, local, runs entirely in the browser.",
      icon: <Globe className="w-5 h-5" />,
      url: "/tools/text-translator",
      tag: "Translation",
    },
    {
      title: "Image to PDF Converter",
      desc: "Convert images (JPG, PNG, WebP) to high-quality PDF files. Reorder images and download instantly.",
      icon: <Image className="w-5 h-5" />,
      url: "/tools/image-to-pdf",
      tag: "PDF",
    },
    {
      title: "PDF Merger",
      desc: "Merge multiple PDF documents into a single PDF file securely on your browser. 100% private.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/pdf-merger",
      tag: "PDF",
    },
    {
      title: "PDF Page Extractor",
      desc: "Extract specific pages or page ranges from any PDF document. Free, local, fast extraction.",
      icon: <Scissors className="w-5 h-5" />,
      url: "/tools/pdf-page-extractor",
      tag: "PDF",
    },
    {
      title: "PDF Compressor",
      desc: "Reduce the file size of your PDF documents while preserving optimal structure. 100% private.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/pdf-compressor",
      tag: "PDF",
    },
    {
      title: "Text to PDF",
      desc: "Convert plain text or formatting into a downloadable PDF document. Custom margins and fonts.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/text-to-pdf",
      tag: "PDF",
    },
    {
      title: "HTML to PDF",
      desc: "Convert raw HTML code or visual layouts into a clean downloadable PDF. Free developer tool.",
      icon: <Binary className="w-5 h-5" />,
      url: "/tools/html-to-pdf",
      tag: "PDF",
    },
    {
      title: "Image Compressor",
      desc: "Compress JPG, PNG, or WebP images while maintaining optimal quality. 100% local.",
      icon: <Image className="w-5 h-5" />,
      url: "/tools/image-compressor",
      tag: "Image",
    },
    {
      title: "Image Resizer",
      desc: "Resize JPG, PNG, and WebP images to custom dimensions in pixels. Lock aspect ratio.",
      icon: <Image className="w-5 h-5" />,
      url: "/tools/image-resizer",
      tag: "Image",
    },
    {
      title: "Image Format Converter",
      desc: "Convert images between popular formats: JPG, PNG, and WebP instantly. 100% offline.",
      icon: <RefreshCw className="w-5 h-5" />,
      url: "/tools/image-format-converter",
      tag: "Image",
    },
    {
      title: "Image Cropper",
      desc: "Crop images online using custom offsets or standard presets (1:1, 16:9, 4:3) instantly.",
      icon: <Scissors className="w-5 h-5" />,
      url: "/tools/image-cropper",
      tag: "Image",
    },
    {
      title: "Screenshot to Image",
      desc: "Capture browser tabs, windows, or your screen and download as a high-quality PNG image.",
      icon: <Image className="w-5 h-5" />,
      url: "/tools/screenshot-to-image",
      tag: "Image",
    },
    {
      title: "JSON Formatter",
      desc: "Beautify, format, validate, and minify JSON data with instant syntax error highlighting.",
      icon: <FileJson className="w-5 h-5" />,
      url: "/tools/json-formatter",
      tag: "Developer",
    },
    {
      title: "Base64 Encoder/Decoder",
      desc: "Encode strings into Base64 format or decode Base64 data back to clear human-readable text.",
      icon: <Lock className="w-5 h-5" />,
      url: "/tools/base64-encoder-decoder",
      tag: "Developer",
    },
    {
      title: "URL Encoder/Decoder",
      desc: "Encode raw parameters to safe percent-encoding or decode URL strings back to normal.",
      icon: <Binary className="w-5 h-5" />,
      url: "/tools/url-encoder-decoder",
      tag: "Developer",
    },
    {
      title: "HTML Minifier",
      desc: "Minify HTML source code by stripping comments and whitespaces to optimize load speeds.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/html-minifier",
      tag: "Developer",
    },
    {
      title: "CSS Minifier",
      desc: "Minify stylesheet CSS declarations by stripping comments and duplicate spacing instantly.",
      icon: <Palette className="w-5 h-5" />,
      url: "/tools/css-minifier",
      tag: "Developer",
    },
    {
      title: "Regex Tester",
      desc: "Test and debug JavaScript regular expressions with live syntax highlighting and flags.",
      icon: <Search className="w-5 h-5" />,
      url: "/tools/regex-tester",
      tag: "Developer",
    },
    {
      title: "Percentage Calculator",
      desc: "Calculate percentages, ratio rates, and percentage differences easily. Instant math tool.",
      icon: <Percent className="w-5 h-5" />,
      url: "/tools/percentage-calculator",
      tag: "Math",
    },
    {
      title: "Discount Calculator",
      desc: "Determine final sale prices and total savings with optional sales tax calculation.",
      icon: <Tag className="w-5 h-5" />,
      url: "/tools/discount-calculator",
      tag: "Math",
    },
    {
      title: "Tip Calculator",
      desc: "Calculate custom tip rates and split bills among friends or groups instantly.",
      icon: <DollarSign className="w-5 h-5" />,
      url: "/tools/tip-calculator",
      tag: "Math",
    },
    {
      title: "Unit Converter",
      desc: "Convert between metric and imperial units for length, weight, and temperature.",
      icon: <RefreshCw className="w-5 h-5" />,
      url: "/tools/unit-converter",
      tag: "Math",
    },
    {
      title: "Date Difference Calculator",
      desc: "Calculate exact years, months, weeks, and days difference between any two calendar dates.",
      icon: <Calendar className="w-5 h-5" />,
      url: "/tools/date-difference-calculator",
      tag: "Math",
    },
    {
      title: "Lorem Ipsum Generator",
      desc: "Generate dummy paragraphs, sentences, or words of Lorem Ipsum dummy text for mockups.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/lorem-ipsum-generator",
      tag: "Writing",
    },
    {
      title: "Text Repeater",
      desc: "Repeat words or paragraphs up to 10,000 times with custom dividers and separators.",
      icon: <Type className="w-5 h-5" />,
      url: "/tools/text-repeater",
      tag: "Writing",
    },
    {
      title: "Hashtag Generator",
      desc: "Generate relevant trending hashtags for Instagram, TikTok, LinkedIn, and Twitter.",
      icon: <Hash className="w-5 h-5" />,
      url: "/tools/hashtag-generator",
      tag: "Marketing",
    },
    {
      title: "Fancy Text Generator",
      desc: "Convert text to stylish unicode fonts (bold, double-struck, script) for social bios.",
      icon: <Type className="w-5 h-5" />,
      url: "/tools/fancy-text-generator",
      tag: "Writing",
    },
    {
      title: "Text to Binary",
      desc: "Convert human letters to binary code or decode binary ASCII streams back to clear text.",
      icon: <Binary className="w-5 h-5" />,
      url: "/tools/text-to-binary",
      tag: "Writing",
    },
    {
      title: "MD5 Hash Generator",
      desc: "Generate a secure 32-character hexadecimal MD5 hash checksum from any string.",
      icon: <Lock className="w-5 h-5" />,
      url: "/tools/md5-hash-generator",
      tag: "Security",
    },
    {
      title: "SHA-256 Hash Generator",
      desc: "Generate a secure 64-character hexadecimal SHA-256 cryptographic hash checksum.",
      icon: <Lock className="w-5 h-5" />,
      url: "/tools/sha256-hash-generator",
      tag: "Security",
    },
    {
      title: "UUID Generator",
      desc: "Generate multiple secure, random version 4 UUIDs in bulk with letter case selection.",
      icon: <ShieldCheck className="w-5 h-5" />,
      url: "/tools/uuid-generator",
      tag: "Security",
    },
    {
      title: "Countdown Timer",
      desc: "Set countdown durations with visual progress displays and web audio sound alerts.",
      icon: <Timer className="w-5 h-5" />,
      url: "/tools/countdown-timer",
      tag: "Utility",
    },
    {
      title: "Invoice Generator",
      desc: "Build professional invoices, add billing items, and download custom statement PDFs.",
      icon: <FileText className="w-5 h-5" />,
      url: "/tools/invoice-generator",
      tag: "Utility",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Free Online Tools — SEO, AI, Developer & Utility Tools | NexaGrowth</title>
      <meta name="description" content="Access 50+ free online tools for translation, image conversion, PDF manipulation, formatting, and calculators." />
      <Background />
      <Navigation activeRoute="other" />

      {/* ── Page Hero Banner ── */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6 fade-rise-eyebrow">
            <Wrench size={12} className="text-accent animate-pulse" />
            100% Free Resources
          </div>
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[80px] font-normal leading-[1.0] tracking-[-2px] text-foreground mb-6 fade-rise-headline">
            Free Online Tools
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] font-normal text-foreground/60 leading-[1.7] max-w-[640px] fade-rise-subheadline">
            No signup. No hidden trials. Just highly optimized online utility tools for SEO, content creation, copywriting, design, and calculations.
          </p>
        </div>
      </header>

      {/* ── Grid List ── */}
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-4 pb-24 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((t, idx) => (
            <article
              key={idx}
              className="glass p-6 md:p-8 rounded-[20px] border border-glass-border hover:border-accent/40 bg-glass-bg flex flex-col overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              style={{
                backdropFilter: "blur(16px) saturate(1.6)",
              }}
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 text-accent flex items-center justify-center">
                  {t.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-md">
                    {t.tag}
                  </span>
                </div>
              </div>

              <h2 className="text-[18px] font-serif text-foreground font-normal mb-2 tracking-tight group-hover:text-accent transition-colors">
                {t.title}
              </h2>
              <p className="text-[13px] text-foreground/60 leading-relaxed flex-1 mb-6">
                {t.desc}
              </p>

              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:text-accent transition-colors group/link mt-auto self-start"
              >
                <span>Launch Tool</span>
                <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        {/* ── Consultation CTA Block ── */}
        <section
          className="mt-20 glass p-10 md:p-14 rounded-[24px] text-center relative overflow-hidden border border-glass-border shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(135deg, rgba(32, 210, 190, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)",
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal mb-4">
            Need Custom Tools or Systems?
          </h3>
          <p className="text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-[600px] mx-auto mb-8">
            Whether you need custom lead capture calculators, custom React platforms, internal databases, or advanced analytics — we build robust software built to scale.
          </p>
          <a
            href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20discuss%20a%20custom%20software%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-background bg-foreground px-8 py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <span>Start Custom Software Consult</span>
            <ArrowRight size={15} />
          </a>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
