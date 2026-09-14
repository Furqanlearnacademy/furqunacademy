"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";
import { EngravedDivider } from "@/components/ui/EngravedDivider";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Globe,
  Send,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Headphones,
  Calendar,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import {
  AcademicQalamIcon,
  VerifiedQualityShieldIcon,
} from "@/components/ui/SemanticCustomIcons";

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Course Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          source: "Contact Us Page Form",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send your message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Contact submission error:", err);
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong while sending your inquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-navy-primary flex flex-col justify-between selection:bg-gold-primary selection:text-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-24 sm:pt-28 pb-16 space-y-8 sm:space-y-12">

        {/* ========================================================================= */}
        {/* 1. CONTACT HERO (Big Luxury Card Spanning Page Width) */}
        {/* ========================================================================= */}
        <section
          aria-label="Contact Us Hero"
          className="w-full layout-page-px flex-1 flex flex-col justify-center hero-section-py min-h-0"
        >
          <div className="royal-card-light specular-rim-gold rounded-[28px] border border-gold-primary/35 shadow-xl hero-big-card-padding overflow-hidden flex flex-col justify-center relative group min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] 2xl:min-h-[720px] w-full">
            {/* Background Texture Image (Approved Mosque Arch Signature) */}
            <Image
              src="/images/backgrounds/hero-card-bg-v2.png"
              alt="Furqan Learn Contact Background"
              fill
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 1400px"
              className="object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-101"
            />

            {/* Ambient Subtle Luminous Wash & Gold Atmosphere (Crystal Clear Legibility) */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20 pointer-events-none hidden md:block" />
            <div className="absolute inset-0 bg-white/85 pointer-events-none md:hidden" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center justify-center max-w-4xl mx-auto py-8 sm:py-12 lg:py-16 2xl:py-20 px-3 sm:px-6 space-y-5 sm:space-y-7">

              {/* Badge */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full royal-card-light border border-gold-primary/45 shadow-sm max-w-full mx-auto"
              >
                <Headphones className="w-3.5 h-3.5 text-gold-dark animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-xs font-extrabold text-gold-dark tracking-wide text-center">
                  24/7 Global Academic &amp; Student Support
                </span>
              </motion.div>

              {/* Headline with Royal Sculpted Engraved Typography */}
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: LUXURY_EASE }}
                className="font-serif text-[1.65rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight px-1"
              >
                <span className="block engraved-emerald sm:whitespace-nowrap">Connect Directly With Our</span>{" "}
                <span className="block engraved-gold italic font-serif sm:whitespace-nowrap mt-0.5 sm:mt-1">
                  Academic Advisors.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.15, delay: 0.2, ease: LUXURY_EASE }}
                className="text-xs sm:text-sm lg:text-base text-navy-primary/85 font-medium leading-relaxed max-w-2xl mx-auto px-1"
              >
                Have questions regarding curriculum tracks, 1-on-1 Azhar scholar pairing, or custom schedules? Our academic team responds within 2 hours.
              </motion.p>

              {/* 3 Trust Badges */}
              <div className="flex flex-wrap sm:grid sm:grid-cols-3 justify-center items-center gap-2 sm:gap-3 w-full max-w-lg mx-auto pt-1">
                <div className="flex items-center justify-center gap-1.5 royal-card-light px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-gold-primary/35 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                  <span className="text-[10.5px] sm:text-xs font-bold text-navy-primary">
                    &lt; 2hr Response
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 royal-card-light px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-gold-primary/35 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                  <span className="text-[10.5px] sm:text-xs font-bold text-navy-primary">
                    Azhar Coordinators
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 royal-card-light px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-gold-primary/35 shadow-2xs">
                  <Globe className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                  <span className="text-[10.5px] sm:text-xs font-bold text-navy-primary">
                    35+ Countries
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="pt-8 sm:pt-14 pb-4 sm:pb-8" />

        {/* ========================================================================= */}
        {/* 2. MAIN CONTACT 2-COLUMN GRID */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1400px] mx-auto layout-page-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT COLUMN: CONTACT CHANNELS (5 cols) */}
            <div className="lg:col-span-5 space-y-6">

              {/* WhatsApp VIP Direct Chat Card */}
              <a
                href="https://wa.me/201204856389"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-3xl bg-gradient-to-br from-[#EBF7F0] via-[#E2F4EB] to-[#D4EFE0] border border-emerald-500/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg font-bold text-navy-primary">
                        Instant WhatsApp Chat
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#25D366] text-white text-[10px] font-extrabold uppercase tracking-wider">
                        Online
                      </span>
                    </div>
                    <p className="text-xs text-graphite/80 font-medium">
                      Fastest response from our student onboarding team.
                    </p>
                    <p className="text-xs font-bold text-emerald-800 pt-0.5">
                      +20 120 485 6389 &rarr;
                    </p>
                  </div>
                </div>
              </a>

              {/* Direct Communication Channels */}
              <div className="royal-card-light p-6 sm:p-8 rounded-3xl border border-gold-primary/35 shadow-xs space-y-6">
                <h3 className="font-serif text-xl font-bold engraved-emerald border-b border-gold-primary/20 pb-3">
                  Direct Academic Channels
                </h3>

                <div className="space-y-5">
                  {/* Email Support */}
                  <a
                    href="mailto:contact@furqanlearn.com"
                    className="flex items-start gap-3.5 group cursor-pointer p-2 -m-2 rounded-xl hover:bg-gold-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl royal-card-light border border-gold-primary/35 text-gold-dark flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-gold-primary transition-all">
                      <Mail className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-primary uppercase tracking-wider">
                        Official Academic Email
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-graphite/90 group-hover:text-gold-dark transition-colors">
                        contact@furqanlearn.com
                      </p>
                      <p className="text-[11px] text-graphite/60">
                        Average response time: &lt; 2 hours
                      </p>
                    </div>
                  </a>

                  {/* Phone Support */}
                  <a
                    href="tel:+201204856389"
                    className="flex items-start gap-3.5 group cursor-pointer p-2 -m-2 rounded-xl hover:bg-gold-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl royal-card-light border border-gold-primary/35 text-gold-dark flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-gold-primary transition-all">
                      <Phone className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-primary uppercase tracking-wider">
                        Global Academic &amp; WhatsApp Hotline
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-graphite/90 group-hover:text-gold-dark transition-colors" dir="ltr">
                        +20 120 485 6389
                      </p>
                      <p className="text-[11px] text-graphite/60">
                        Available Mon-Sun (24 Hours)
                      </p>
                    </div>
                  </a>

                  {/* Global Headquarters */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl royal-card-light border border-gold-primary/35 text-gold-dark flex items-center justify-center shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-primary uppercase tracking-wider">
                        Academic Headquarters
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-graphite/90">
                        Al-Azhar Academic District, Cairo, Egypt
                      </p>
                      <p className="text-[11px] text-graphite/60">
                        Global Online Instruction in 35+ Countries
                      </p>
                    </div>
                  </div>
                </div>

                {/* Free Trial CTA card inside sidebar */}
                <div className="p-5 rounded-2xl royal-card-dark text-white space-y-2 border border-gold-primary/40 shadow-md">
                  <div className="flex items-center gap-2 text-gold-light text-xs font-bold">
                    <VerifiedQualityShieldIcon className="w-4 h-4 text-gold-primary" />
                    <span>Looking for a Free 1-on-1 Class?</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Book a live 15-minute trial session with an Azhari Sheikh directly.
                  </p>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full mt-2 btn-royal-gold py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer text-navy-royal shadow-sm"
                  >
                    <span>Book Free Trial Class</span>
                    <ArrowRight className="w-3.5 h-3.5 text-navy-royal" />
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: CONTACT FORM (7 cols) */}
            <div className="lg:col-span-7">
              <div className="royal-card-light p-7 sm:p-10 rounded-3xl border border-gold-primary/35 shadow-md space-y-6">

                <div className="space-y-1 border-b border-gold-primary/20 pb-4 text-left">
                  <h3 className="font-serif text-2xl font-bold engraved-emerald">
                    Send Us a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite/70 font-medium">
                    Fill out the form below and one of our academic coordinators will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-4 bg-emerald-50/80 rounded-2xl border border-emerald-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold engraved-emerald">
                      Jazakum Allahu Khairan!
                    </h4>
                    <p className="text-sm text-gray-700 max-w-md mx-auto">
                      Your message has been received. An Al-Azhar coordinator will contact you via WhatsApp or Email within a few hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", subject: "Course Inquiry", message: "" });
                      }}
                      className="btn-royal-gold px-6 py-2.5 rounded-xl text-navy-royal font-black text-xs cursor-pointer shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-navy-primary">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tariq Mansoor"
                          className="w-full h-12 px-4 rounded-xl bg-white/95 border border-gold-primary/35 text-navy-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 shadow-2xs"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-navy-primary">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tariq@example.com"
                          className="w-full h-12 px-4 rounded-xl bg-white/95 border border-gold-primary/35 text-navy-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone / WhatsApp */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-navy-primary">
                          WhatsApp / Phone (With Country Code)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-12 px-4 rounded-xl bg-white/95 border border-gold-primary/35 text-navy-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 shadow-2xs"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-navy-primary">
                          Inquiry Topic
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl bg-white/95 border border-gold-primary/35 text-navy-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 shadow-2xs cursor-pointer"
                        >
                          <option value="Course Inquiry">Course &amp; Curriculum Inquiry</option>
                          <option value="Scheduling">Custom Scheduling Request</option>
                          <option value="Ijazah Program">Ijazah &amp; Sanad Accreditation</option>
                          <option value="Technical Support">Technical &amp; Classroom Support</option>
                          <option value="General Question">General Academic Question</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-navy-primary">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your learning goals or any questions you have..."
                        className="w-full p-4 rounded-xl bg-white/95 border border-gold-primary/35 text-navy-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 shadow-2xs resize-none"
                      />
                    </div>

                    {/* ERROR ALERT */}
                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold animate-fade-in text-center">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl btn-royal-gold text-navy-royal font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-gold-light/60 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-navy-royal border-t-transparent rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-navy-royal" />
                          <span>Send Message to Academic Advisors</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />

      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
