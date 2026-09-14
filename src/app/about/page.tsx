"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutAzharStandard } from "@/components/about/AboutAzharStandard";
import { AboutMilestones } from "@/components/about/AboutMilestones";
import { CoursesAdvisorBanner } from "@/components/courses/CoursesAdvisorBanner";
import { EngravedDivider } from "@/components/ui/EngravedDivider";

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-main text-graphite flex flex-col justify-between selection:bg-gold-primary/20 selection:text-navy-primary">
      {/* 1. GLOBAL NAVBAR */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-24 sm:pt-28 pb-16 space-y-8 sm:space-y-12 overflow-x-clip">
        {/* 2. ABOUT HERO SECTION (Quran on Stand + 5 Sidebar Stat Cards) */}
        <AboutHero onOpenBooking={() => setBookingOpen(true)} />

        {/* LUXURY SIGNATURE ENGRAVED ISLAMIC DIVIDER */}
        <EngravedDivider className="pt-8 sm:pt-14 pb-4 sm:pb-8" />

        {/* 3. MISSION, VISION & PHILOSOPHY (Max-width 1400px) */}
        <AboutMissionVision />

        {/* LUXURY SIGNATURE ENGRAVED ISLAMIC DIVIDER */}
        <EngravedDivider />

        {/* 4. FOUR PILLARS OF EXCELLENCE (Max-width 1400px) */}
        <AboutValues />

        {/* LUXURY SIGNATURE ENGRAVED ISLAMIC DIVIDER */}
        <EngravedDivider />

        {/* 5. AL-AZHAR STANDARD & 5-STAGE VETTING (Max-width 1400px, Dark Navy Accreditation Card) */}
        <AboutAzharStandard />

        {/* LUXURY SIGNATURE ENGRAVED ISLAMIC DIVIDER */}
        <EngravedDivider />

        {/* 6. TIMELINE & INSTITUTIONAL MILESTONES (Max-width 1400px) */}
        <AboutMilestones />

        {/* LUXURY SIGNATURE ENGRAVED ISLAMIC DIVIDER */}
        <EngravedDivider />

        {/* 7. CLOSING CALL TO ACTION BANNER */}
        <div className="w-full layout-page-px pb-8 sm:pb-12">
          <CoursesAdvisorBanner onOpenBooking={() => setBookingOpen(true)} />
        </div>
      </main>

      {/* 8. GLOBAL FOOTER */}
      <Footer />

      {/* 9. BOOKING WIZARD MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
