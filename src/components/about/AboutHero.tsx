"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  GraduationCap,
  ShieldCheck,
  Globe,
  Crown,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  BookOpen,
  Award,
} from "lucide-react";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

interface AboutHeroProps {
  onOpenBooking?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onOpenBooking }) => {
  const shouldReduceMotion = useReducedMotion();

  const statsCards = [
    {
      id: "stat-1",
      icon: GraduationCap,
      value: "15,000+",
      label: "Live Hours Taught",
      badge: "Global Impact",
      badgeClass: "bg-gold-primary/15 text-gold-dark border-gold-primary/35",
    },
    {
      id: "stat-2",
      icon: ShieldCheck,
      value: "100+ Scholars",
      label: "Al-Azhar Certified",
      badge: "Top 1% Faculty",
      badgeClass: "bg-emerald/10 text-emerald border-emerald/30",
    },
    {
      id: "stat-3",
      icon: Globe,
      value: "35+ Nations",
      label: "Worldwide Learners",
      badge: "500+ Students",
      badgeClass: "bg-gold-primary/15 text-gold-dark border-gold-primary/35",
    },
    {
      id: "stat-4",
      icon: AcademicQalamIcon,
      value: "100% Sanad",
      label: "Direct Oral Talaqqi",
      badge: "Golden Chains",
      badgeClass: "bg-gold-primary/15 text-gold-dark border-gold-primary/35",
    },
    {
      id: "stat-5",
      icon: Crown,
      value: "99.8% Rating",
      label: "Parent Satisfaction",
      badge: "5-Star Standard",
      badgeClass: "bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary text-navy-royal font-bold border-gold-primary/60",
    },
  ];

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : { duration: 1.15, ease: LUXURY_EASE }
      }
      className="w-full layout-page-px flex-1 flex flex-col justify-center hero-section-py min-h-0"
    >
      {/* HERO MAIN GRID: Matches Homepage (Left 1fr Big Card, Right Stack of 5 Small Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_var(--sidebar-w-lg)] xl:grid-cols-[1fr_var(--sidebar-w-xl)] 2xl:grid-cols-[1fr_var(--sidebar-w-2xl)] hero-main-grid-var items-stretch h-full">

        {/* LEFT MAIN BIG CARD (Royal Islamic Luxury Signature) */}
        <div className="royal-card-light specular-rim-gold rounded-[28px] border border-gold-primary/35 shadow-xl hero-big-card-padding overflow-hidden flex flex-col justify-between relative group min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] 2xl:min-h-[720px]">
          {/* Background Image Layer (Approved Mosque Arch Signature) */}
          <Image
            src="/images/backgrounds/hero-card-bg-v2.png"
            alt="Furqan Learn About Hero Background"
            fill
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 75vw, 1100px"
            className="object-cover object-left md:object-fill pointer-events-none transition-transform duration-700 group-hover:scale-101"
          />

          {/* Ambient Subtle Luminous Wash & Gold Atmosphere (Crystal Clear Legibility) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20 pointer-events-none hidden md:block" />
          <div className="absolute inset-0 bg-white/85 pointer-events-none md:hidden" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* INNER CONTENT CONTAINER (2-Column on Desktop: Text on Left, Quran Stand Artwork on Right) */}
          <div className="flex flex-col justify-between md:grid md:grid-cols-12 hero-main-grid-var items-center h-full min-h-[calc(100svh-6.25rem)] md:min-h-0 relative z-10">

            {/* LEFT TEXT COLUMN */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3 }
                  : { duration: 1.2, delay: 0.15, ease: LUXURY_EASE }
              }
              className="md:col-span-7 lg:col-span-7 xl:col-span-7 hero-text-flow-gap text-center md:text-left flex flex-col items-center md:items-start justify-center pt-2 md:pt-0"
            >
              {/* Top Badge */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.1, delay: 0.25, ease: LUXURY_EASE }
                }
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full royal-card-light border border-gold-primary/45 shadow-sm w-fit mx-auto md:mx-0"
              >
                <AcademicQalamIcon className="w-3.5 h-3.5 text-gold-dark animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs font-extrabold text-gold-dark tracking-wide">
                  Al-Azhar Accredited Scholarly Legacy
                </span>
              </motion.div>

              {/* Main Headline with Royal Sculpted Engraved Typography */}
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.3, delay: 0.45, ease: LUXURY_EASE }
                }
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black tracking-tight text-center md:text-left leading-[1.2] mt-1 sm:mt-1.5"
              >
                <span className="block engraved-emerald sm:whitespace-nowrap">
                  Preserving Sacred Heritage,
                </span>
                <span className="block engraved-gold italic font-serif sm:whitespace-nowrap mt-0.5 sm:mt-1">
                  Inspiring Future Generations.
                </span>
              </motion.h1>

              {/* Subtitle - Concise, Punchy & Well-Proportioned */}
              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.25, delay: 0.65, ease: LUXURY_EASE }
                }
                className="text-xs sm:text-sm md:text-[14.5px] text-navy-primary/85 font-medium leading-relaxed text-center md:text-left mx-auto md:mx-0 max-w-2xl px-0.5"
              >
                Connecting Muslims worldwide with the Holy Quran through authentic Al-Azhar scholarship, personalized 1-on-1 Talaqqi, and unbroken Sanad.
              </motion.p>

              {/* Trust Badges Status Bar */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.2, delay: 0.75, ease: LUXURY_EASE }
                }
                className="flex flex-wrap sm:grid sm:grid-cols-3 justify-center md:justify-start gap-1.5 sm:gap-2.5 w-full max-w-md mx-auto md:mx-0 pt-1"
              >
                <div className="flex items-center justify-center md:justify-start gap-1.5 royal-card-light px-2.5 sm:px-3 py-1.5 rounded-xl border border-gold-primary/35 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-navy-primary">
                    Verified Sanad
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1.5 royal-card-light px-2.5 sm:px-3 py-1.5 rounded-xl border border-gold-primary/35 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-navy-primary">
                    Azhar Faculty
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1.5 royal-card-light px-2.5 sm:px-3 py-1.5 rounded-xl border border-gold-primary/35 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-navy-primary">
                    Global Ijazah
                  </span>
                </div>
              </motion.div>

              {/* Action Buttons (Courses & Contact) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.2, delay: 0.85, ease: LUXURY_EASE }
                }
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4 w-full sm:w-auto"
              >
                <Link
                  href="/courses"
                  className="btn-royal-gold w-full sm:w-auto px-6 lg:px-7 py-3 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-gold-light/60 cursor-pointer rounded-xl text-navy-royal"
                >
                  <GraduationCap className="w-4 h-4 text-navy-royal shrink-0" />
                  <span className="whitespace-nowrap">Explore Academic Tracks</span>
                  <ArrowRight className="w-4 h-4 text-navy-royal shrink-0" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 lg:px-7 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 bg-white/90 hover:bg-[#FAF5E6] text-emerald border border-gold-primary/45 hover:border-gold-primary rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer group"
                >
                  <PhoneCall className="w-4 h-4 text-emerald shrink-0" />
                  <span className="whitespace-nowrap">Contact Academic Advisors</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT QURAN ARTWORK COLUMN (Quran on Wooden Stand emerging from right side) */}
            <div className="md:col-span-5 lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center md:justify-end relative min-h-[290px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[420px] pb-4 md:pb-0 self-center md:self-end mt-6 md:mt-0 overflow-visible w-full">
              {/* Soft Ambient Golden Halo Behind Quran */}
              <div className="absolute bottom-0 right-2 w-72 lg:w-84 h-72 lg:h-84 bg-gold-primary/20 rounded-full blur-3xl pointer-events-none" />

              {/* Quran on Wooden Stand Artwork */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 60, scale: 0.94 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.4, delay: 0.45, ease: LUXURY_EASE }
                }
                className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] flex items-end justify-center md:justify-end group self-center md:self-end shrink-0 translate-y-3 sm:translate-y-4 md:translate-y-6 lg:translate-y-8"
              >
                <Image
                  src="/images/quran-stand.webp"
                  alt="Holy Quran on Traditional Wooden Rehal Stand"
                  width={440}
                  height={440}
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 440px"
                  className="w-full h-auto object-contain filter drop-shadow-[0_16px_36px_rgba(11,27,51,0.28)] group-hover:scale-104 transition-transform duration-500"
                />
              </motion.div>
            </div>

          </div>
        </div>

        {/* RIGHT STACKED CARDS (5 Small Luxury Cards Stack for Statistics & Milestones) */}
        <div className="w-full flex flex-col justify-between sidebar-cards-gap h-auto lg:h-full mt-8 lg:mt-0">
          {statsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.1, delay: 0.3 + idx * 0.1, ease: LUXURY_EASE }
                }
                className="flex-1 royal-card-light rounded-2xl sidebar-card-p flex items-center gap-3 group cursor-pointer border border-gold-primary/35 border-l-[5px] border-l-gold-primary hover:border-gold-primary shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 via-gold-primary/5 to-gold-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Icon Container */}
                <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-xl xl:rounded-2xl bg-white/90 text-navy-primary flex items-center justify-center shrink-0 border border-gold-primary/45 shadow-[0_4px_12px_rgba(7,21,43,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.9)] group-hover:scale-105 group-hover:border-gold-primary transition-all duration-300">
                  <Icon className="w-5 h-5 xl:w-5.5 xl:h-5.5 text-gold-dark stroke-[2.2] filter drop-shadow-[0_1px_2px_rgba(153,117,25,0.3)]" />
                </div>

                {/* Text & Badge */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs xl:text-sm font-extrabold text-navy-primary tracking-tight truncate">
                      {card.value}
                    </h4>
                    <span className={`text-[9.5px] xl:text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shrink-0 shadow-2xs border ${card.badgeClass}`}>
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-[10px] xl:text-[11px] text-navy-primary/85 font-semibold leading-tight mt-0.5 truncate">
                    {card.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};
