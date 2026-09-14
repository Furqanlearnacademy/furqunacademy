"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { EngravedDivider } from "@/components/ui/EngravedDivider";
import { LazySection } from "@/components/ui/LazySection";

// Below-the-fold components loaded on-demand via next/dynamic to eliminate GPU/CPU load during initial hero render
const PopularCourses = dynamic(
  () => import("@/components/home/PopularCourses").then((mod) => mod.PopularCourses),
  {
    loading: () => <div className="w-full min-h-[680px] opacity-0 pointer-events-none" />,
  }
);

const HowItWorks = dynamic(
  () => import("@/components/home/HowItWorks").then((mod) => mod.HowItWorks),
  {
    loading: () => <div className="w-full min-h-[520px] opacity-0 pointer-events-none" />,
  }
);

const PricingPlans = dynamic(
  () => import("@/components/home/PricingPlans").then((mod) => mod.PricingPlans),
  {
    loading: () => <div className="w-full min-h-[680px] opacity-0 pointer-events-none" />,
  }
);

const LatestArticles = dynamic(
  () => import("@/components/home/LatestArticles").then((mod) => mod.LatestArticles),
  {
    loading: () => <div className="w-full min-h-[520px] opacity-0 pointer-events-none" />,
  }
);

const CallToAction = dynamic(
  () => import("@/components/home/CallToAction").then((mod) => mod.CallToAction),
  {
    loading: () => <div className="w-full min-h-[360px] opacity-0 pointer-events-none" />,
  }
);

const Footer = dynamic(
  () => import("@/components/layout/Footer").then((mod) => mod.Footer),
  {
    loading: () => <div className="w-full min-h-[380px] opacity-0 pointer-events-none" />,
  }
);

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
        {/* HERO SECTION & STATS BAR (First Fold - Loaded Immediately with Full Fidelity) */}
        <div className="pt-[70px] sm:pt-[76px] lg:pt-[80px] pb-2 sm:pb-3 lg:pb-3.5 flex flex-col justify-between lg:h-screen lg:min-h-[680px] lg:max-h-[1080px] gap-2 sm:gap-2.5 relative z-20">
          <Hero onOpenBooking={() => setBookingOpen(true)} />
          <StatsBar className="hidden sm:block" />
        </div>

        {/* MAIN FEATURED SECTION (EMERALD SHOWCASE: Courses, Why Choose Us, & Student Review) */}
        <LazySection minHeight="720px" rootMargin="350px 0px">
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
        </LazySection>

        {/* HOW IT WORKS & FREE TRIAL BOOKING FORM SECTION (NATURAL MAIN BG & MAX-W 1400PX) */}
        <LazySection minHeight="550px" rootMargin="350px 0px">
          <section className="w-full py-12 sm:py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
              <HowItWorks />
            </div>
          </section>
        </LazySection>

        {/* ENGRAVED 3D ISLAMIC DIVIDER AFTER HOW IT WORKS */}
        <EngravedDivider className="my-2 sm:my-4" />

        {/* CHOOSE YOUR PLAN / PRICING SECTION (LIGHT THEME & LIQUID GLASS) */}
        <LazySection minHeight="700px" rootMargin="350px 0px">
          <PricingPlans onOpenBooking={() => setBookingOpen(true)} />
        </LazySection>

        {/* LATEST ARTICLES & SCHOLARLY RESEARCH (CINEMATIC DARK NAVY BENTO SECTION) */}
        <LazySection minHeight="550px" rootMargin="350px 0px">
          <LatestArticles />
        </LazySection>

        {/* CALL TO ACTION SECTION (LIGHT PARCHMENT THEME & ENGRAVED TYPOGRAPHY) */}
        <LazySection minHeight="380px" rootMargin="350px 0px">
          <CallToAction onOpenBooking={() => setBookingOpen(true)} />
        </LazySection>
      </main>

      <LazySection minHeight="380px" rootMargin="350px 0px">
        <Footer />
      </LazySection>

      {/* 1-ON-1 TRIAL CLASS BOOKING MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
