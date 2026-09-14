"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CertificateViewer } from "@/components/certificates/CertificateViewer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";

export default function CertificatesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-main text-graphite flex flex-col justify-between">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-10 xl:px-14 w-full space-y-8">
        <CertificateViewer />
      </main>

      <Footer />

      <BookingWizardModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
