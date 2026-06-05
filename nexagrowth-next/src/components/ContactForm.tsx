"use client";
import React, { useState } from "react";
import { MessageSquare, Phone, MapPin, Send, CheckCircle, ArrowRight, Shield } from "lucide-react";
import MagneticButton from "./MagneticButton";

const SERVICES = [
  "Search Engine Optimization (SEO)",
  "Next.js Web Development",
  "E-Commerce Store Setup",
  "High-Retention Video Editing",
  "Performance Paid Campaigns",
  "Premium Branding & Identity"
];

const BUDGETS = [
  "Under 50,000 PKR / mo",
  "50,000 - 150,000 PKR / mo",
  "150,000 - 300,000 PKR / mo",
  "300,000+ PKR / mo",
  "One-time project budget"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "",
    budget: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      tempErrors.name = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (formData.website.trim() && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(formData.website.trim())) {
      tempErrors.website = "Please enter a valid website URL or leave it blank.";
    }
    if (!formData.service) {
      tempErrors.service = "Please select a growth channel.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      tempErrors.message = "Please describe your growth challenges (min 10 chars).";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock direct submit to FormSubmit.co or direct local API
    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@nexagrowth.xyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "NexaGrowth Redesign Lead",
          Name: formData.name,
          Email: formData.email,
          Website: formData.website || "Not provided",
          Service: formData.service,
          Budget: formData.budget || "Not provided",
          Message: formData.message,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          website: "",
          service: "",
          budget: "",
          message: ""
        });
      } else {
        alert("Something went wrong. Please WhatsApp us directly at +92 339 0061165.");
      }
    } catch (err) {
      alert("Submission error. Please connect with us directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="w-full bg-background py-24 md:py-32 border-t border-glass-border relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Direct Consultation Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-glass-bg border border-glass-border rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
                <span>Direct Funnel Pipeline</span>
              </div>
              <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] font-normal leading-[1.15] text-foreground mb-6">
                Let's scale your brand <em className="italic text-foreground/60">without any fluff or generic strategy</em>.
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed mb-12">
                Book a completely free 15-minute diagnostic growth audit or structural consulting session. We'll audit your code speed, sitemap rankings, and performance campaigns in real time.
              </p>

              {/* Direct Info */}
              <div className="flex flex-col gap-6 mb-12">
                <a 
                  href="https://wa.me/923390061165?text=Hi%20NexaGrowth,%20I'd%20like%20to%20book%20a%20free%20growth%20audit!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 rounded-xl border border-glass-border bg-glass-bg hover:bg-glass-hover hover:border-foreground/20 transition-all duration-300 w-fit"
                >
                  <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-subtle">WhatsApp Direct</span>
                    <span className="text-[14px] font-semibold text-foreground group-hover:text-emerald-500 transition-colors duration-300">+92 339 0061165</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 w-fit">
                  <div className="h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-subtle">Location Base</span>
                    <span className="text-[14px] font-semibold text-foreground">Pakistan (Remote-First Global)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-text-subtle flex items-center gap-2 border-t border-glass-border pt-6">
              <Shield size={14} className="text-accent" />
              <span>We never spam. Strict data privacy NDA active.</span>
            </div>
          </div>

          {/* Right Column: Direct Glass Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-[32px] bg-glass-bg border border-glass-border shadow-2xl relative">
              
              {isSuccess ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-serif text-[28px] text-foreground leading-tight mb-3">Audit requested successfully!</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed max-w-sm mx-auto mb-8">
                    Thank you. We will analyze your page and reach out via email or WhatsApp within 12 hours with your free growth blueprint.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-[13px] font-semibold text-accent hover:underline flex items-center gap-1.5"
                  >
                    <span>Request another audit</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-background/50 border ${errors.name ? "border-red-500" : "border-glass-border focus:border-accent"} rounded-full px-5 py-3 text-[13px] text-foreground outline-none transition-all duration-300`}
                        placeholder="Rana Talha"
                      />
                      {errors.name && <span className="block text-[11px] text-red-500 mt-1">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">Business Email *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-background/50 border ${errors.email ? "border-red-500" : "border-glass-border focus:border-accent"} rounded-full px-5 py-3 text-[13px] text-foreground outline-none transition-all duration-300`}
                        placeholder="talha@brand.com"
                      />
                      {errors.email && <span className="block text-[11px] text-red-500 mt-1">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="website" className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">Company Website URL (Optional)</label>
                    <input 
                      type="text" 
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className={`w-full bg-background/50 border ${errors.website ? "border-red-500" : "border-glass-border focus:border-accent"} rounded-full px-5 py-3 text-[13px] text-foreground outline-none transition-all duration-300`}
                      placeholder="https://mybrand.com"
                    />
                    {errors.website && <span className="block text-[11px] text-red-500 mt-1">{errors.website}</span>}
                  </div>

                  {/* Service and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">Target Growth Channel *</label>
                      <select 
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-glass-border focus:border-accent rounded-full px-5 py-3 text-[13px] text-foreground outline-none transition-all duration-300 cursor-pointer appearance-none"
                      >
                        <option value="" className="bg-background text-foreground">Select service...</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="block text-[11px] text-red-500 mt-1">{errors.service}</span>}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">Monthly Ads/Growth Budget</label>
                      <select 
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-glass-border focus:border-accent rounded-full px-5 py-3 text-[13px] text-foreground outline-none transition-all duration-300 cursor-pointer appearance-none"
                      >
                        <option value="" className="bg-background text-foreground">Select budget range...</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b} className="bg-background text-foreground">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">Describe Your Current Funnel & Growth Challenges *</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-background/50 border ${errors.message ? "border-red-500" : "border-glass-border focus:border-accent"} rounded-2xl px-5 py-3 text-[13px] text-foreground outline-none transition-all duration-300 resize-none`}
                      placeholder="My e-commerce store drops cart conversions at the checkout stage, or my Google search ranking has dropped..."
                    />
                    {errors.message && <span className="block text-[11px] text-red-500 mt-1">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <div className="mt-4">
                    <MagneticButton className="w-full">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-[15px] font-semibold text-background bg-foreground rounded-full py-4 flex items-center justify-center transition-all duration-300 hover:bg-foreground/90 disabled:opacity-50 cursor-pointer group"
                      >
                        <span>{isSubmitting ? "Generating pipeline request..." : "Request Free Diagnostic Audit"}</span>
                        <Send size={14} className="ml-2.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </MagneticButton>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
