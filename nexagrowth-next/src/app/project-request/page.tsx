"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Background from "../../components/Background";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  DollarSign,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const serviceOptions = [
  "Landing Page",
  "Business Website",
  "E-Commerce Website",
  "Corporate Website",
  "Custom Web Application",
  "Shopify Store",
  "Social Media Management",
  "Video Editing",
  "Branding",
  "SEO",
  "Other",
];

const budgetOptions = [
  "PKR 25,000 – 50,000",
  "PKR 50,000 – 100,000",
  "PKR 100,000 – 200,000",
  "PKR 200,000 – 500,000",
  "PKR 500,000+",
  "Not Sure Yet",
];

const timelineOptions = [
  "1 – 2 Weeks",
  "2 – 4 Weeks",
  "1 – 2 Months",
  "2 – 3 Months",
  "Flexible",
];

const howFoundOptions = [
  "Google Search",
  "Social Media",
  "Referral",
  "WhatsApp",
  "Other",
];

export default function ProjectRequestPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
    howFound: "",
  });

  const totalSteps = 4;

  const update = (key: string, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleService = (s: string) =>
    update(
      "services",
      form.services.includes(s) ? form.services.filter((v) => v !== s) : [...form.services, s]
    );

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const canAdvance = (): boolean => {
    if (step === 1) return Boolean(form.name && form.email && form.phone);
    if (step === 2) return form.services.length > 0;
    if (step === 3) return Boolean(form.budget && form.timeline);
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    // Simulate submission (connect to real endpoint later)
    await new Promise((res) => setTimeout(res, 1800));
    router.push("/thank-you");
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all";

  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <title>Request a Project — Free Quote | NexaGrowth</title>
      <meta
        name="description"
        content="Submit your project requirements and receive a detailed, no-obligation quote from NexaGrowth within 24 hours."
      />
      <Background />
      <Navigation activeRoute="other" />

      {/* Hero */}
      <header className="page-hero w-full">
        <div className="mx-auto max-w-[700px] px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent px-4 py-1.5 rounded-full glass tracking-[0.06em] uppercase mb-6">
            <Sparkles size={12} className="text-accent animate-pulse" />
            Free Consultation
          </div>
          <h1 className="font-serif text-[40px] sm:text-[52px] font-normal leading-[1.1] tracking-[-1.5px] text-foreground mb-4">
            Start Your Project
          </h1>
          <p className="text-[15px] text-foreground/60 leading-relaxed max-w-[500px]">
            Tell us about your project and receive a free, detailed quote within 24 hours.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[640px] mx-auto px-6 pb-24 relative z-20">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-[11px] text-foreground/40 uppercase tracking-wider font-medium mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="glass rounded-[24px] border border-white/8 bg-white/[0.02] overflow-hidden">
          <div className="px-8 py-7 md:px-10 md:py-9">
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-2xl text-foreground mb-1">Contact Information</h2>
                <p className="text-[13px] text-foreground/50 -mt-4 mb-3">Let us know how to reach you.</p>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp *"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Building2 size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
                    <input
                      type="text"
                      placeholder="Company Name (optional)"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Globe size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
                    <input
                      type="url"
                      placeholder="Current Website (optional)"
                      value={form.website}
                      onChange={(e) => update("website", e.target.value)}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Services */}
            {step === 2 && (
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-2xl text-foreground mb-1">Services Needed</h2>
                <p className="text-[13px] text-foreground/50 -mt-4 mb-3">Select all that apply.</p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`text-left px-4 py-3 rounded-[12px] text-[13px] border transition-all duration-200 ${
                        form.services.includes(s)
                          ? "bg-accent/10 border-accent/40 text-accent"
                          : "bg-white/[0.02] border-white/8 text-foreground/60 hover:border-accent/25 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {form.services.includes(s) && <CheckCircle2 size={13} />}
                        <span>{s}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-2xl text-foreground mb-1">Budget & Timeline</h2>
                <p className="text-[13px] text-foreground/50 -mt-4 mb-1">Help us understand your scope.</p>

                <div>
                  <label className="text-[12px] text-foreground/50 uppercase tracking-wider font-medium mb-2 flex items-center gap-2">
                    <DollarSign size={12} className="text-accent" />
                    Estimated Budget
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => update("budget", b)}
                        className={`px-3 py-2.5 rounded-[10px] text-[12px] border transition-all ${
                          form.budget === b
                            ? "bg-accent/10 border-accent/40 text-accent"
                            : "bg-white/[0.02] border-white/8 text-foreground/60 hover:border-accent/25"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[12px] text-foreground/50 uppercase tracking-wider font-medium mb-2 block">
                    Expected Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timelineOptions.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => update("timeline", t)}
                        className={`px-3 py-2.5 rounded-[10px] text-[12px] border transition-all ${
                          form.timeline === t
                            ? "bg-accent/10 border-accent/40 text-accent"
                            : "bg-white/[0.02] border-white/8 text-foreground/60 hover:border-accent/25"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Details */}
            {step === 4 && (
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-2xl text-foreground mb-1">Project Details</h2>
                <p className="text-[13px] text-foreground/50 -mt-4 mb-3">
                  Share anything else we should know.
                </p>
                <div className="relative">
                  <MessageSquare size={15} className="absolute left-4 top-4 text-foreground/30" />
                  <textarea
                    placeholder="Describe your project requirements, goals, inspiration links, etc."
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    rows={6}
                    className={`${inputClass} pl-11 resize-none`}
                  />
                </div>

                <div>
                  <label className="text-[12px] text-foreground/50 uppercase tracking-wider font-medium mb-2 block">
                    How did you find us?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {howFoundOptions.map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => update("howFound", h)}
                        className={`px-3 py-2 rounded-[10px] text-[12px] border transition-all ${
                          form.howFound === h
                            ? "bg-accent/10 border-accent/40 text-accent"
                            : "bg-white/[0.02] border-white/8 text-foreground/60 hover:border-accent/25"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="px-8 pb-7 md:px-10 md:pb-9 flex items-center justify-between border-t border-white/6 pt-5">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="inline-flex items-center gap-1.5 text-[13px] text-foreground/50 hover:text-foreground transition-colors"
              >
                <ArrowLeft size={14} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!canAdvance()}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#001f3d] bg-white px-7 py-3 rounded-full hover:scale-[1.03] transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
              >
                Next
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#001f3d] bg-white px-7 py-3 rounded-full hover:scale-[1.03] transition-all duration-300 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#001f3d] border-t-transparent rounded-full animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Request
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
