"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingPlans } from "@/components/home/PricingPlans";
import { CoursesAdvisorBanner } from "@/components/courses/CoursesAdvisorBanner";
import { EngravedDivider } from "@/components/ui/EngravedDivider";

export default function PricingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-navy-primary flex flex-col justify-between selection:bg-gold-primary selection:text-white">
      {/* GLOBAL NAVBAR */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-[84px] sm:pt-[90px] lg:pt-[96px] pb-16 sm:pb-20 space-y-8 sm:space-y-12 overflow-x-clip">

        {/* ========================================================================= */}
        {/* 1. PRICING HERO SECTION (Big Luxury Card Spanning Page Width) */}
        {/* ========================================================================= */}
        <PricingHero onOpenBooking={() => setBookingOpen(true)} />

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="pt-2 sm:pt-4 pb-2 sm:pb-4" />

        {/* ========================================================================= */}
        {/* 2. MAIN PRICING PLANS SECTION (Interactive Durations, Cards & Carousel) */}
        {/* ========================================================================= */}
        <PricingPlans
          onOpenBooking={() => setBookingOpen(true)}
          className="w-full pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16"
        />

        {/* ========================================================================= */}
        {/* 3. ACADEMIC CONSULTATION & ASSESSMENT BANNER (Bottom Action) */}
        {/* ========================================================================= */}
        <CoursesAdvisorBanner onOpenBooking={() => setBookingOpen(true)} />

      </main>

      {/* GLOBAL BOOKING WIZARD MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
