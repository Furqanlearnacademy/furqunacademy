"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  BookOpen,
  GraduationCap,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  Baby,
  Languages,
  Scroll,
  CheckCircle2,
} from "lucide-react";
import {
  AcademicQalamIcon,
  VerifiedQualityShieldIcon,
} from "@/components/ui/SemanticCustomIcons";

export interface MegaCategoryItem {
  id: string;
  name: string;
  arabicName: string;
  categoryQuery: string;
  badge: string;
  badgeClass: string;
  icon: React.ElementType;
  description: string;
  courses: {
    id: string;
    title: string;
    level: string;
    badge?: string;
  }[];
}

export const MEGA_MENU_DATA: MegaCategoryItem[] = [
  {
    id: "quran",
    name: "Quran & Tajweed",
    arabicName: "القرآن والتجويد والإجازة",
    categoryQuery: "Quran Reading",
    badge: "Sanad Ijazah",
    badgeClass: "bg-emerald-tint text-emerald border-emerald/30",
    icon: BookOpen,
    description: "Foundations, advanced phonetics, full memorization & continuous Sanad.",
    courses: [
      {
        id: "quran-reading-nooralbayan",
        title: "Noor Al-Bayan Foundation",
        level: "Beginner",
        badge: "Popular",
      },
      {
        id: "tajweed-practical-rules",
        title: "Practical Tajweed Mastery",
        level: "All Levels",
      },
      {
        id: "hifz-sanad-ijazah",
        title: "Quranic Ijazah with Sanad",
        level: "Advanced",
        badge: "Sanad",
      },
      {
        id: "qiraat-ten-readings",
        title: "The Ten Mutawatir Qira'at",
        level: "Diploma",
      },
      {
        id: "tajweed-maqamat-sound",
        title: "Quranic Maqamat & Vocal Cadence",
        level: "Intermediate",
      },
    ],
  },
  {
    id: "arabic",
    name: "Arabic Language",
    arabicName: "اللغة العربية الفصحى",
    categoryQuery: "Arabic Language",
    badge: "Fusha Fluency",
    badgeClass: "bg-emerald-tint text-emerald border-emerald/30",
    icon: Languages,
    description: "Master conversational Fusha, Quranic grammar, Nahw, and root morphology.",
    courses: [
      {
        id: "arabic-conversation-fusha",
        title: "Standard Arabic (Fusha) Speaking",
        level: "All Levels",
        badge: "Speaking",
      },
      {
        id: "arabic-quranic-grammar-nahw",
        title: "Quranic Grammar & I'rab",
        level: "Intermediate",
      },
      {
        id: "arabic-sarf-morphology",
        title: "Arabic Morphology (Sarf)",
        level: "Advanced",
      },
    ],
  },
  {
    id: "islamic",
    name: "Islamic Studies",
    arabicName: "العلوم الإسلامية والشريعة",
    categoryQuery: "Islamic Studies",
    badge: "Al-Azhar Syllabus",
    badgeClass: "bg-emerald-tint text-emerald border-emerald/30",
    icon: Scroll,
    description: "Deep Quranic contemplation, authentic Seerah, and practical daily Fiqh.",
    courses: [
      {
        id: "islamic-tafseer-tadabbur",
        title: "Tafseer & Quranic Reflection",
        level: "All Levels",
        badge: "Tadabbur",
      },
      {
        id: "islamic-seerah-character",
        title: "Prophetic Seerah & Character",
        level: "All Levels",
      },
      {
        id: "islamic-fiqh-worship",
        title: "Fiqh of Worship & Living",
        level: "Beginner",
      },
    ],
  },
  {
    id: "kids",
    name: "Kids & Youth",
    arabicName: "براعم القرآن والناشئة",
    categoryQuery: "Kids Programs",
    badge: "Ages 5 - 15",
    badgeClass: "bg-emerald-tint text-emerald border-emerald/30",
    icon: Baby,
    description: "Child-friendly Noorani pedagogy, engaging gamification, and moral character.",
    courses: [
      {
        id: "kids-quran-seeds",
        title: "Quran Seeds (Interactive Qaida)",
        level: "Kids (5-9)",
        badge: "Interactive",
      },
      {
        id: "kids-hifz-character",
        title: "Youth Memorization & Ethics",
        level: "Youth (10-15)",
      },
    ],
  },
];

interface CoursesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking?: () => void;
}

export const CoursesMegaMenu: React.FC<CoursesMegaMenuProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.28, ease: LUXURY_EASE }}
      className="fixed top-[74px] sm:top-[82px] lg:top-[88px] xl:top-[94px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1300px] z-50 pointer-events-auto before:absolute before:-top-10 before:left-0 before:right-0 before:h-10 before:content-['']"
      onMouseEnter={() => {}} // keeps open
      onMouseLeave={onClose}
    >
      {/* Mega Menu Outer Panel with Royal Emerald Tint & Pristine White Card Aesthetic */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#FFFFFF] via-[#F4F9F6] to-[#E9F4EF] border border-emerald/25 p-6 sm:p-8 shadow-[0_24px_70px_rgba(14,73,62,0.14)] overflow-hidden">
        
        {/* Top Emerald Ambient Glow Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-emerald to-transparent pointer-events-none" />

        {/* Ambient Soft Emerald Orbs */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-emerald/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-emerald/5 rounded-full blur-3xl pointer-events-none" />

        {/* 4 CATEGORY COLUMNS GRID (Pristine White Cards like the Hero Big Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {MEGA_MENU_DATA.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="flex flex-col justify-between bg-white rounded-2xl p-5 border border-emerald/15 hover:border-emerald/40 shadow-[0_4px_20px_rgba(14,73,62,0.06)] hover:shadow-[0_8px_30px_rgba(14,73,62,0.12)] transition-all duration-300 group/cat"
              >
                <div>
                  {/* Category Header Link */}
                  <Link
                    href={`/courses?category=${encodeURIComponent(category.categoryQuery)}`}
                    prefetch={true}
                    onClick={onClose}
                    className="block space-y-1.5 pb-3 border-b border-emerald/15 group/head"
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-emerald text-white flex items-center justify-center shadow-xs group-hover/head:scale-105 group-hover:bg-[#0A372F] transition-all">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-serif text-base font-black text-emerald group-hover/head:text-[#0A372F] transition-colors tracking-tight">
                          {category.name}
                        </h3>
                      </div>
                      <span
                        className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded-full border shadow-2xs shrink-0 ${category.badgeClass}`}
                      >
                        {category.badge}
                      </span>
                    </div>

                    <p className="text-[11px] text-graphite/75 leading-relaxed font-normal">
                      {category.description}
                    </p>
                  </Link>

                  {/* Course Links List */}
                  <ul className="mt-3.5 space-y-1.5">
                    {category.courses.map((course) => (
                      <li key={course.id}>
                        <Link
                          href={`/courses/${course.id}`}
                          prefetch={true}
                          onClick={onClose}
                          className="group/item flex items-center justify-between p-2 rounded-xl hover:bg-emerald-tint transition-all text-xs font-semibold text-graphite hover:text-emerald"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <ChevronRight className="w-3 h-3 text-emerald shrink-0 transition-transform group-hover/item:translate-x-0.5" />
                            <span className="truncate group-hover/item:font-bold">
                              {course.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            {course.badge && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-emerald-tint text-emerald font-bold border border-emerald/20">
                                {course.badge}
                              </span>
                            )}
                            <span className="text-[10px] text-graphite/60 font-medium">
                              {course.level}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Category Filter CTA Button */}
                <div className="mt-4 pt-3 border-t border-emerald/15">
                  <Link
                    href={`/courses?category=${encodeURIComponent(category.categoryQuery)}`}
                    prefetch={true}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-[11.5px] font-bold text-emerald hover:text-[#0A372F] transition-colors group/cta"
                  >
                    <span>View All {category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM FEATURED ACTION RIBBON */}
        <div className="mt-6 pt-4.5 border-t border-emerald/20 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-3.5 sm:px-5 border border-emerald/20">
          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-graphite">
            <div className="flex items-center gap-1.5">
              <VerifiedQualityShieldIcon className="w-4 h-4 text-emerald shrink-0" />
              <span>Accredited Al-Azhar Scholars</span>
            </div>
            <div className="hidden sm:inline text-emerald/40">•</div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald shrink-0" />
              <span>Unbroken Sanad &amp; Ijazah</span>
            </div>
            <div className="hidden lg:inline text-emerald/40">•</div>
            <div className="hidden lg:flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
              <span>1-on-1 Personalized Live Talaqqi</span>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
            <Link
              href="/courses"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white border border-emerald/30 hover:border-emerald text-emerald text-xs font-black shadow-2xs hover:bg-emerald-tint transition-all whitespace-nowrap"
            >
              Explore All 18 Courses
            </Link>

            <button
              onClick={() => {
                onClose();
                onOpenBooking?.();
              }}
              className="px-4.5 py-2 text-xs font-extrabold rounded-xl bg-emerald hover:bg-[#0A372F] text-white border border-emerald/30 shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-gold-light" />
              <span>Book Free Trial</span>
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
