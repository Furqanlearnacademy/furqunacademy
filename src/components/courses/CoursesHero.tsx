"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  GraduationCap,
  Award,
  BookOpen,
  ArrowDown,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Clock,
  Users,
} from "lucide-react";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

interface CoursesHeroProps {
  onOpenBooking: () => void;
  onExploreClick: () => void;
}

export const CoursesHero: React.FC<CoursesHeroProps> = ({
  onOpenBooking,
  onExploreClick,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.1, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { duration: 0.5, ease: LUXURY_EASE }
      }
      className="w-full layout-page-px flex-1 flex flex-col justify-center hero-section-py min-h-0"
    >
      {/* HERO MAIN GRID: Matches Homepage (Left 1fr Big Card, Right Stack of 5 Small Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_var(--sidebar-w-lg)] xl:grid-cols-[1fr_var(--sidebar-w-xl)] 2xl:grid-cols-[1fr_var(--sidebar-w-2xl)] hero-main-grid-var items-stretch h-full">

        {/* LEFT MAIN BIG CARD: Adopted Official Royal Mosque Background with Emerald & Gold Styling */}
        <div className="rounded-[28px] border border-emerald/20 shadow-[0_20px_50px_rgba(14,73,62,0.07),inset_0_1.5px_2px_rgba(255,255,255,0.85),0_0_0_1px_rgba(255,255,255,0.4)] hero-big-card-padding overflow-hidden flex flex-col justify-between relative group min-h-0 md:min-h-0 h-full bg-[#FAF9F5]">
          {/* Background Image Layer (Landscape Arch v2 tailored for wide screens) */}
          <Image
            src="/images/backgrounds/hero-card-bg-v2.png"
            alt="Furqan Learn Hero Background Desktop"
            fill
            priority
            fetchPriority="high"
            quality={90}
            sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 75vw, 1100px"
            className="object-fill pointer-events-none hidden md:block"
          />

          {/* Desktop Overlay: Enhances text legibility while keeping mosque & arch radiant */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/15 pointer-events-none hidden md:block" />

          {/* Mobile Background Texture & Watermark */}
          <div className="absolute inset-0 islamic-royal-watermark opacity-25 pointer-events-none select-none md:hidden" />

          {/* INNER CONTENT CONTAINER (2-Column on Desktop: Text on Left, Realistic 3D Scene on Right, 100svh on Mobile) */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 h-full min-h-0 md:min-h-0">

            {/* LEFT TEXT COLUMN (Distributed vertically on mobile to balance space naturally) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left justify-between md:justify-center flex-1 md:flex-initial w-full max-w-xl xl:max-w-2xl py-3 sm:py-4 md:py-0">

              {/* Top Badge with Luxury Spring Reveal */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.2 }
                    : { duration: 0.5, delay: 0.05, ease: LUXURY_EASE }
                }
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] border border-gold-primary/40 shadow-2xs w-fit mx-auto md:mx-0 mt-1 mb-1.5 md:mt-0 md:mb-1"
              >
                <AcademicQalamIcon className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
                <span className="text-[10.5px] sm:text-xs font-bold text-gold-primary tracking-wide">
                  Al-Azhar Accredited Syllabus &amp; Continuous Sanad
                </span>
              </motion.div>

              {/* Main Headline with Smooth Deceleration (Playfair Display & Sculpted 3D Engraving) */}
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.2 }
                    : { duration: 0.6, delay: 0.1, ease: LUXURY_EASE }
                }
                className="font-serif hero-headline-var font-extrabold tracking-tight text-center md:text-left my-1.5 sm:my-2 leading-tight"
              >
                <span className="block engraved-emerald sm:whitespace-nowrap">
                  Master The Holy Quran
                </span>
                <span className="block engraved-gold sm:whitespace-nowrap mt-0.5 sm:mt-1">
                  With Authentic Sanad.
                </span>
              </motion.h1>

              {/* Subtitle with Relaxed Luxury Transition */}
              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.2 }
                    : { duration: 0.6, delay: 0.15, ease: LUXURY_EASE }
                }
                className="text-[12px] sm:text-sm lg:text-base 2xl:text-lg text-navy-primary/85 font-medium leading-relaxed max-w-xl 2xl:max-w-2xl text-center md:text-left my-1 sm:my-1.5"
              >
                Explore 18 structured academic programs in Quran reading, applied Tajweed, complete memorization (Hifz), and Quranic Arabic. Taught 1-on-1 by certified Al-Azhar scholars.
              </motion.p>

              {/* Trust Checkpoints with Staggered Rise */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.2 }
                    : { duration: 0.6, delay: 0.2, ease: LUXURY_EASE }
                }
                className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full my-2 sm:my-2.5 max-w-lg 2xl:max-w-xl"
              >
                <div className="flex items-center justify-center sm:justify-start gap-1.5 bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gold-primary/30 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-emerald shrink-0" />
                  <span className="text-[10px] sm:text-[11px] 2xl:text-xs font-bold text-navy-primary truncate">100% 1-on-1 Live</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gold-primary/30 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-gold-dark shrink-0" />
                  <span className="text-[10px] sm:text-[11px] 2xl:text-xs font-bold text-navy-primary truncate">Azhar Certified</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gold-primary/30 shadow-2xs">
                  <Award className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-gold-primary shrink-0" />
                  <span className="text-[10px] sm:text-[11px] 2xl:text-xs font-bold text-navy-primary truncate">Sanad Ijazah</span>
                </div>
              </motion.div>

              {/* CTA Action Buttons with Scale & Shadow Animation (Enlarged on 1600px+ Large Screens) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.2, delay: 0.85, ease: LUXURY_EASE }
                }
                className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full sm:flex sm:w-auto sm:items-center sm:gap-3 2xl:gap-4 pt-2 sm:pt-2.5 md:pt-1.5 justify-center mt-1 sm:mt-0"
              >
                <button
                  onClick={onOpenBooking}
                  className="btn-royal-gold w-full sm:w-auto px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-gold-light/60 cursor-pointer rounded-xl"
                >
                  <CalendarCheck className="w-4 h-4 text-navy-royal shrink-0" />
                  <span className="sm:hidden whitespace-nowrap">Free Trial</span>
                  <span className="hidden sm:inline whitespace-nowrap">Book Free 1-on-1 Trial Class</span>
                </button>

                <button
                  onClick={onExploreClick}
                  className="w-full sm:w-auto px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 bg-white/90 hover:bg-[#FAF5E6] text-emerald border border-gold-primary/45 hover:border-gold-primary rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer group"
                >
                  <BookOpen className="w-4 h-4 text-emerald shrink-0" />
                  <span className="sm:hidden whitespace-nowrap">All Tracks</span>
                  <span className="hidden sm:inline whitespace-nowrap">Explore All Tracks</span>
                  <ArrowDown className="w-3.5 h-3.5 text-emerald group-hover:translate-y-0.5 transition-transform shrink-0" />
                </button>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: 3D REALISTIC LAYERED COMPOSITION
                - Z-Index Layer 1 (Background): Scholar (2.png) seated further back
                - Z-Index Layer 2 (Middle Base): Extra Grand Wooden Desk (1.png)
                - Z-Index Layer 3 (Foreground): Laptop (3.png) on desk surface
                Sequential Animated Entrance: Desk (1) -> Scholar (2) -> Laptop (3) */}
            <div className="flex flex-1 w-full h-full min-h-[220px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[430px] items-end justify-center relative select-none pointer-events-none pb-0 mt-3 md:mt-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[680px] xl:max-w-[780px] h-[210px] sm:h-[270px] md:h-[340px] lg:h-[440px] flex items-end justify-center">

                {/* LAYER 1: Scholar / Sheikh (Image 2) */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 130 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.3 }
                      : { duration: 1.5, delay: 1.55, ease: LUXURY_EASE }
                  }
                  className="hero-scene-scholar"
                >
                  <Image
                    src="/images/scholar-seated.webp"
                    alt="Al-Azhar Certified Scholar Holding Quran"
                    fill
                    sizes="(max-width: 768px) 440px, (max-width: 1024px) 760px, 840px"
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* LAYER 2: Extra Large Wooden Desk (Image 1) */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 120 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.3 }
                      : { duration: 1.4, delay: 0.9, ease: LUXURY_EASE }
                  }
                  className="hero-scene-desk"
                >
                  <Image
                    src="/images/1.webp"
                    alt="Wooden Study Desk"
                    fill
                    sizes="(max-width: 768px) 440px, (max-width: 1024px) 760px, 840px"
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* LAYER 3: Small Sleek Laptop (Image 3) */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 140, y: -6 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.3 }
                      : { duration: 1.4, delay: 2.2, ease: LUXURY_EASE }
                  }
                  className="hero-scene-laptop"
                >
                  <Image
                    src="/images/laptop-platform.webp"
                    alt="Furqan Learn Academy Online Platform"
                    fill
                    sizes="(max-width: 768px) 85px, (max-width: 1024px) 138px, 148px"
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </motion.div>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT STACKED SIDEBAR CARDS (Outside Big Card, Matching Homepage Layout) */}
        <div className="w-full flex flex-col justify-between sidebar-cards-gap h-auto lg:h-full mt-4 lg:mt-0">

          {/* Card 1: Expert Teachers */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { duration: 0.5, delay: 0.1, ease: LUXURY_EASE }
            }
            className="flex-1 royal-card-light rounded-2xl sidebar-card-p flex items-center gap-2.5 sm:gap-3 group cursor-pointer border border-gold-primary/45 border-l-[4px] border-l-gold-primary hover:border-gold-primary shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FAF5E6] to-white text-emerald flex items-center justify-center shrink-0 border border-gold-primary/35 shadow-2xs group-hover:scale-105 transition-transform">
              <GraduationCap className="w-4.5 sm:w-5 h-4.5 sm:h-5 text-emerald stroke-[2.2]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-xs xl:text-sm font-extrabold text-navy-primary tracking-tight truncate">
                  Expert Teachers
                </h4>
                <span className="text-[9px] sm:text-[9.5px] font-extrabold text-navy-primary bg-gold-primary/20 border border-gold-primary/35 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">
                  Al-Azhar
                </span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-navy-primary/80 font-semibold leading-tight mt-0.5 truncate">
                Certified Male &amp; Female Scholars
              </p>
            </div>
          </motion.div>

          {/* Card 2: 18 Structured Programs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { duration: 0.5, delay: 0.15, ease: LUXURY_EASE }
            }
            className="flex-1 royal-card-light rounded-2xl sidebar-card-p flex items-center gap-2.5 sm:gap-3 group cursor-pointer border border-gold-primary/45 border-l-[4px] border-l-gold-primary hover:border-gold-primary shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FAF5E6] to-white text-emerald flex items-center justify-center shrink-0 border border-gold-primary/35 shadow-2xs group-hover:scale-105 transition-transform">
              <BookOpen className="w-4.5 sm:w-5 h-4.5 sm:h-5 text-emerald stroke-[2.2]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-xs xl:text-sm font-extrabold text-navy-primary tracking-tight truncate">
                  18 Programs
                </h4>
                <span className="text-[9px] sm:text-[9.5px] font-extrabold text-navy-primary bg-gold-primary/20 border border-gold-primary/35 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">
                  All Levels
                </span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-navy-primary/80 font-semibold leading-tight mt-0.5 truncate">
                From Noor Al-Bayan to Ijazah
              </p>
            </div>
          </motion.div>

          {/* Card 3: Flexible 24/7 Schedule */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { duration: 0.5, delay: 0.2, ease: LUXURY_EASE }
            }
            className="flex-1 royal-card-light rounded-2xl sidebar-card-p flex items-center gap-2.5 sm:gap-3 group cursor-pointer border border-gold-primary/45 border-l-[4px] border-l-gold-primary hover:border-gold-primary shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FAF5E6] to-white text-emerald flex items-center justify-center shrink-0 border border-gold-primary/35 shadow-2xs group-hover:scale-105 transition-transform">
              <Clock className="w-4.5 sm:w-5 h-4.5 sm:h-5 text-emerald stroke-[2.2]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-xs xl:text-sm font-extrabold text-navy-primary tracking-tight truncate">
                  Flexible Schedule
                </h4>
                <span className="text-[9px] sm:text-[9.5px] font-extrabold text-navy-primary bg-gold-primary/20 border border-gold-primary/35 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">
                  24/7
                </span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-navy-primary/80 font-semibold leading-tight mt-0.5 truncate">
                Live Classes in Any Timezone
              </p>
            </div>
          </motion.div>

          {/* Card 4: Continuous Sanad & Ijazah */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { duration: 0.5, delay: 0.25, ease: LUXURY_EASE }
            }
            className="flex-1 royal-card-light rounded-2xl sidebar-card-p flex items-center gap-2.5 sm:gap-3 group cursor-pointer border border-gold-primary/45 border-l-[4px] border-l-gold-primary hover:border-gold-primary shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FAF5E6] to-white text-emerald flex items-center justify-center shrink-0 border border-gold-primary/35 shadow-2xs group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-4.5 sm:w-5 h-4.5 sm:h-5 text-emerald stroke-[2.2]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-xs xl:text-sm font-extrabold text-navy-primary tracking-tight truncate">
                  Continuous Sanad
                </h4>
                <span className="text-[9px] sm:text-[9.5px] font-extrabold text-navy-primary bg-gold-primary/20 border border-gold-primary/35 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">
                  Ijazah
                </span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-navy-primary/80 font-semibold leading-tight mt-0.5 truncate">
                Direct Lineage to Prophet (ﷺ)
              </p>
            </div>
          </motion.div>

          {/* Card 5: 1-on-1 Live Mentorship */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.2, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { duration: 0.5, delay: 0.3, ease: LUXURY_EASE }
            }
            className="flex-1 royal-card-light rounded-2xl sidebar-card-p flex items-center gap-2.5 sm:gap-3 group cursor-pointer border border-gold-primary/45 border-l-[4px] border-l-gold-primary hover:border-gold-primary shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FAF5E6] to-white text-emerald flex items-center justify-center shrink-0 border border-gold-primary/35 shadow-2xs group-hover:scale-105 transition-transform">
              <Users className="w-4.5 sm:w-5 h-4.5 sm:h-5 text-emerald stroke-[2.2]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-xs xl:text-sm font-extrabold text-navy-primary tracking-tight truncate">
                  1-on-1 Mentorship
                </h4>
                <span className="text-[9px] sm:text-[9.5px] font-extrabold text-navy-primary bg-gold-primary/20 border border-gold-primary/35 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">
                  Live
                </span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-navy-primary/80 font-semibold leading-tight mt-0.5 truncate">
                Customized Pace &amp; Guidance
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};
