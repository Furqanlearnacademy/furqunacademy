"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { PopularCourses } from "@/components/home/PopularCourses";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingPlans } from "@/components/home/PricingPlans";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CallToAction } from "@/components/home/CallToAction";
import { EngravedDivider } from "@/components/ui/EngravedDivider";
import { Footer } from "@/components/layout/Footer";

// Lazy-load BookingWizardModal on demand only when opened
const BookingWizardModal = dynamic(
  () =>
    import("@/components/booking/BookingWizardModal").then(
      (mod) => mod.BookingWizardModal
    ),
  { ssr: false }
);

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-graphite flex flex-col justify-between selection:bg-gold-primary selection:text-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="overflow-x-clip">
        {/* HERO SECTION & STATS BAR (First Fold - Perfectly Contained 100vh Viewport) */}
        <div className="pt-[70px] sm:pt-[76px] lg:pt-[80px] pb-2 sm:pb-3 lg:pb-3.5 flex flex-col justify-between lg:h-screen lg:min-h-[680px] lg:max-h-[1080px] gap-2 sm:gap-2.5 relative z-20">
          <Hero onOpenBooking={() => setBookingOpen(true)} />
          <StatsBar className="hidden sm:block" />
        </div>

        {/* MAIN FEATURED SECTION (EMERALD SHOWCASE: Courses, Why Choose Us, & Student Review) */}
        <section className="w-full bg-gradient-to-b from-emerald via-emerald-deep to-emerald pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 border-y border-gold-primary/35 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)] relative overflow-x-clip">
          {/* Dark Porous Paper Texture Layer */}
          <div className="absolute inset-0 dark-paper-porous-texture opacity-85 pointer-events-none z-0" />

          {/* Ambient Warm Golden Orbs */}
          <div className="absolute -left-20 top-1/4 w-72 h-72 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute -right-20 bottom-1/4 w-72 h-72 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="px-4 sm:px-6 lg:px-10 xl:px-14 w-full relative z-10">
            <PopularCourses onOpenBooking={() => setBookingOpen(true)} />
          </div>
        </section>

        {/* HOW IT WORKS & FREE TRIAL BOOKING FORM SECTION (NATURAL MAIN BG & MAX-W 1400PX) */}
        <section className="w-full py-12 sm:py-16 lg:py-20 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <HowItWorks />
          </div>
        </section>

        {/* ENGRAVED 3D ISLAMIC DIVIDER AFTER HOW IT WORKS */}
        <EngravedDivider className="my-2 sm:my-4" />

        {/* CHOOSE YOUR PLAN / PRICING SECTION (LIGHT THEME & LIQUID GLASS) */}
        <PricingPlans onOpenBooking={() => setBookingOpen(true)} />

        {/* LATEST ARTICLES & SCHOLARLY RESEARCH (CINEMATIC DARK NAVY BENTO SECTION) */}
        <LatestArticles />

        {/* CALL TO ACTION SECTION (LIGHT PARCHMENT THEME & ENGRAVED TYPOGRAPHY) */}
        <CallToAction onOpenBooking={() => setBookingOpen(true)} />
      </main>

      <Footer />

      {/* 1-ON-1 TRIAL CLASS BOOKING MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
