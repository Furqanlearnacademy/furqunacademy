"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  BookOpen,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  GraduationCap,
  CalendarCheck,
} from "lucide-react";
import {
  AcademicQalamIcon,
  VerifiedQualityShieldIcon,
} from "@/components/ui/SemanticCustomIcons";

interface CallToActionProps {
  onOpenBooking?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  return (
    <motion.section
      initial={{ opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "50px 0px 0px 0px" }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="w-full py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* ========================================================================= */}
        {/* MAIN LUXURY LIGHT-THEMED CTA CONTAINER */}
        {/* ========================================================================= */}
        <div className="relative rounded-[2.5rem] liquid-glass-card border-2 border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(14,73,62,0.08),inset_0_1.5px_2px_rgba(255,255,255,1)] p-8 sm:p-12 lg:p-14 text-center space-y-7 sm:space-y-8 backdrop-blur-md overflow-hidden">
          
          {/* ========================================================================= */}
          {/* AUTHENTIC ISLAMIC GEOMETRIC WATERMARK IN BACKGROUND */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 islamic-royal-watermark opacity-40 pointer-events-none select-none" />
          
          {/* Subtle Ambient Emerald Orbs */}
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-emerald/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-emerald/5 rounded-full blur-3xl pointer-events-none" />

          {/* TOP ORNATE BADGE */}
          <div className="relative z-10 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-emerald-tint border border-emerald/30 text-emerald text-xs sm:text-sm font-extrabold shadow-xs">
              <AcademicQalamIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald" />
              <span className="tracking-wide">Start Your Blessed Journey Today</span>
            </div>
          </div>

          {/* ENGRAVED MAJESTIC SECTION TITLE (PRECISELY 2 LINES & BALANCED SCALE) */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.2]">
              <span className="engraved-emerald mr-2 sm:mr-0">
                Connect Your Soul With The
              </span>
              <br className="hidden sm:inline" />
              <span className="engraved-gold whitespace-nowrap sm:whitespace-normal">
                Divine Words of Allah
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-graphite-secondary font-semibold leading-relaxed max-w-xl mx-auto">
              Join thousands of enthusiastic students worldwide mastering Quran recitation, Tajweed rules, and Islamic studies with verified Al-Azhar scholars.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* THE TWO EXPANDED CALL TO ACTION BUTTONS (STRICTLY SINGLE-LINE TEXT) */}
          {/* ========================================================================= */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto pt-1">
            
            {/* BUTTON 1: EXPLORE COURSES (PRIMARY ROYAL GOLD BUTTON) */}
            <Link
              href="/courses"
              className="w-full sm:w-auto min-w-[250px] sm:min-w-[280px] inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl btn-royal-gold text-navy-royal font-black text-sm sm:text-base tracking-wide shadow-[0_10px_25px_rgba(212,175,55,0.35)] border border-gold-light/60 hover:scale-105 active:scale-98 transition-all duration-300 group cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="w-5 h-5 text-navy-royal shrink-0 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">Explore All Courses</span>
              <ArrowRight className="w-4 h-4 text-navy-royal shrink-0 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            {/* BUTTON 2: CONTACT US (SECONDARY CRISP WHITE/GOLD BUTTON) */}
            <Link
              href="/contact"
              className="w-full sm:w-auto min-w-[250px] sm:min-w-[280px] inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl bg-white hover:bg-[#FAF6EE] text-navy-royal font-bold text-sm sm:text-base tracking-wide border-2 border-gold-primary/35 hover:border-gold-primary shadow-xs hover:shadow-md hover:scale-105 active:scale-98 transition-all duration-300 group cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 text-navy-royal shrink-0 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">Contact Our Advisors</span>
              <ArrowUpRight className="w-4 h-4 text-navy-royal shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

          </div>

          {/* ========================================================================= */}
          {/* TRUST PILLARS & VALUE HIGHLIGHTS */}
          {/* ========================================================================= */}
          <div className="relative z-10 pt-4 sm:pt-5 border-t border-emerald/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 text-xs sm:text-sm font-bold text-graphite-secondary">
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-tint flex items-center justify-center border border-emerald/25 text-emerald">
                <GraduationCap className="w-3 h-3" />
              </div>
              <span>100% Al-Azhar Certified Scholars</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-tint flex items-center justify-center border border-emerald/25 text-emerald">
                <CalendarCheck className="w-3 h-3" />
              </div>
              <span>Free 15-Minute Trial Class</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-tint flex items-center justify-center border border-emerald/25 text-emerald">
                <Clock className="w-3 h-3" />
              </div>
              <span>Flexible 24/7 Global Schedules</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-tint flex items-center justify-center border border-emerald/25 text-emerald">
                <VerifiedQualityShieldIcon className="w-3 h-3" />
              </div>
              <span>Official Sanad & Ijazah Diploma</span>
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
};
