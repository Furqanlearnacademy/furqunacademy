"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  BookOpen,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
  Library,
  GraduationCap,
} from "lucide-react";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

interface ArticlesHeroProps {
  onOpenBooking?: () => void;
}

export const ArticlesHero: React.FC<ArticlesHeroProps> = ({ onOpenBooking }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Articles & Scholarly Research Hero"
      className="w-full layout-page-px relative"
    >
      {/* BIG FULL-WIDTH LUXURY CARD (Matching Courses Page Style & Texture) */}
      <div className="royal-card-light specular-rim-gold hero-big-card-padding overflow-hidden flex flex-col justify-center relative group h-auto lg:h-[calc(100vh-120px)] min-h-[580px] sm:min-h-[650px] lg:min-h-[680px] lg:max-h-[840px] 2xl:h-[calc(100vh-140px)] 2xl:min-h-[740px] 2xl:max-h-[900px] w-full border border-gold-primary/35 shadow-xl rounded-[28px]">
        {/* Background Image Layer (Approved Mosque Arch Official Signature) */}
        <Image
          src="/images/backgrounds/hero-card-bg-v2.png"
          alt="Royal Mosque Arch Background"
          fill
          priority
          quality={90}
          sizes="(max-width: 1024px) 100vw, 1400px"
          className="object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-101"
        />

        {/* Ambient Subtle Luminous Wash & Gold Atmosphere (Crystal Clear Legibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* INNER CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col items-center text-center justify-center max-w-4xl mx-auto py-12 sm:py-16 lg:py-20 2xl:py-24 px-3 sm:px-6 space-y-6 sm:space-y-8">

          {/* Top Badge with Luxury Spring Reveal */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { duration: 1.1, delay: 0.25, ease: LUXURY_EASE }
            }
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1.5 rounded-full royal-card-light border border-gold-primary/45 shadow-sm max-w-full mx-auto"
          >
            <AcademicQalamIcon className="w-3.5 h-3.5 text-gold-dark animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-extrabold text-gold-dark tracking-wide text-center">
              Al-Azhar Scholarly Research &amp; Quranic Library
            </span>
          </motion.div>

          {/* Main Headline with Responsive Fluid Typography */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { duration: 1.3, delay: 0.45, ease: LUXURY_EASE }
            }
            className="font-serif text-[1.65rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-navy-primary leading-tight px-1"
          >
            <span className="engraved-emerald sm:whitespace-nowrap">Enlightening Minds With</span>{" "}
            <br className="hidden sm:inline" />
            <span className="engraved-gold italic font-serif sm:whitespace-nowrap">
              Authentic Quranic Wisdom.
            </span>
          </motion.h1>

          {/* Subtitle with Relaxed Luxury Transition */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { duration: 1.25, delay: 0.65, ease: LUXURY_EASE }
            }
            className="text-xs sm:text-sm lg:text-base text-navy-primary/85 font-medium leading-relaxed max-w-2xl mx-auto px-1"
          >
            Explore peer-reviewed publications, step-by-step Tajweed breakdowns, Quran memorization methods, and family guidance authored by accredited Al-Azhar University faculty.
          </motion.p>

          {/* Trust Checkpoints with Staggered Rise */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { duration: 1.2, delay: 0.75, ease: LUXURY_EASE }
            }
            className="flex flex-wrap sm:grid sm:grid-cols-3 justify-center items-center gap-2 sm:gap-3 w-full max-w-xl mx-auto pt-1"
          >
            <div className="flex items-center justify-center gap-1.5 royal-card-light px-3.5 py-2 rounded-xl border border-gold-primary/35 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-navy-primary">
                Verified Sanad Sources
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 royal-card-light px-3.5 py-2 rounded-xl border border-gold-primary/35 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-navy-primary">
                Al-Azhar Faculty
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 royal-card-light px-3.5 py-2 rounded-xl border border-gold-primary/35 shadow-xs">
              <Award className="w-3.5 h-3.5 text-gold-primary shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-navy-primary">
                Free Open Access
              </span>
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { duration: 1.2, delay: 0.85, ease: LUXURY_EASE }
            }
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto"
          >
            <Link
              href="/courses"
              className="btn-royal-gold w-full sm:w-auto px-7 lg:px-9 py-3.5 2xl:py-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer rounded-xl"
            >
              <GraduationCap className="w-4 h-4 text-navy-primary shrink-0" />
              <span className="whitespace-nowrap">Explore Structured Courses</span>
              <ArrowRight className="w-4 h-4 text-navy-primary shrink-0" />
            </Link>

            <Link
              href="/contact"
              className="royal-card-light hover:border-gold-primary/60 w-full sm:w-auto px-7 lg:px-8 py-3.5 2xl:py-4 text-xs sm:text-sm font-bold text-navy-primary flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-xs hover:shadow-md border border-gold-primary/40 rounded-xl"
            >
              <PhoneCall className="w-4 h-4 text-gold-dark shrink-0" />
              <span className="whitespace-nowrap">Contact Academic Advisors</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
