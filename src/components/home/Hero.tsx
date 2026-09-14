"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Award,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  ShieldCheck,
  Languages,
  CalendarCheck,
  Scroll,
  Baby,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroProps {
  onOpenBooking?: () => void;
}

// 8 Featured Courses for the 3D Cylindrical Revolving Carousel (matching screenshot)
const CAROUSEL_COURSES = [
  {
    id: "kids-quran",
    title: "Quran for Kids",
    arabicTitle: "تأسيس القرآن للأطفال",
    category: "Kids Foundation",
    badge: "Age 5-14",
    image: "/images/courses/kids-foundation.webp",
    link: "/courses/kids-quran-interactive-foundation",
  },
  {
    id: "tajweed-mastery",
    title: "Tajweed & Recitation",
    arabicTitle: "التجويد وأحكام الترتيل",
    category: "Masterclass",
    badge: "Top Rated",
    image: "/images/courses/tajweed.webp",
    link: "/courses/tajweed-rules-mastery",
  },
  {
    id: "arabic-grammar",
    title: "Arabic Grammar & Nahw",
    arabicTitle: "النحو وقواعد العربية",
    category: "Arabic Science",
    badge: "Classical Arabic",
    image: "/images/courses/nahw-grammar.webp",
    link: "/courses/arabic-nahw-grammar",
  },
  {
    id: "hifz-program",
    title: "Full Quran Hifz",
    arabicTitle: "تحفيظ القرآن الكريم",
    category: "Memorization",
    badge: "Intensive",
    image: "/images/courses/hifz.webp",
    link: "/courses/hifz-full-quran-program",
  },
  {
    id: "noor-albayan",
    title: "Noor Al-Bayan Reading",
    arabicTitle: "نور البيان والقراءة",
    category: "Beginners",
    badge: "Step-by-Step",
    image: "/images/courses/nooralbayan.webp",
    link: "/courses/quran-reading-nooralbayan",
  },
  {
    id: "tafseer-studies",
    title: "Quranic Tafseer & Seerah",
    arabicTitle: "تفسير القرآن والسيرة",
    category: "Islamic Studies",
    badge: "Deep Meaning",
    image: "/images/courses/tafseer.webp",
    link: "/courses/islamic-studies-tafseer-essentials",
  },
  {
    id: "sanad-ijazah",
    title: "Sanad & Ijazah Program",
    arabicTitle: "برنامج الإجازة بالسند",
    category: "Accreditation",
    badge: "To Prophet ﷺ",
    image: "/images/courses/sanad-ijazah.webp",
    link: "/courses/hifz-sanad-ijazah-program",
  },
  {
    id: "arabic-conversation",
    title: "Conversational Arabic",
    arabicTitle: "المحادثة باللغة العربية",
    category: "Fluency",
    badge: "Live Dialogue",
    image: "/images/courses/arabic-conversation.webp",
    link: "/courses/arabic-fusha-conversation",
  },
];

// 4 Core Academic Disciplines (Stacked vertically on the right side of the carousel)
const ACADEMIC_TRACKS = [
  {
    id: "quran-tajweed",
    name: "Quran & Tajweed",
    arabicName: "القرآن والتجويد",
    tag: "Recitation & Ijazah",
    arabicTag: "إجازة بالسند المتصل",
    icon: BookOpen,
    link: "/courses",
  },
  {
    id: "arabic-language",
    name: "Arabic Language",
    arabicName: "اللغة العربية الفصحى",
    tag: "Classical & Grammar",
    arabicTag: "فصحى، نحو، ومحادثة",
    icon: Languages,
    link: "/courses",
  },
  {
    id: "islamic-studies",
    name: "Islamic Studies",
    arabicName: "الدراسات الإسلامية",
    tag: "Faith, Fiqh & Seerah",
    arabicTag: "عقيدة، فقه، وسيرة",
    icon: Scroll,
    link: "/courses",
  },
  {
    id: "kids-program",
    name: "Kids & Youth Program",
    arabicName: "برامج الأطفال والناشئة",
    tag: "Noor Al-Bayan & Foundation",
    arabicTag: "تأسيس ونور البيان",
    icon: Baby,
    link: "/courses/kids-quran-interactive-foundation",
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState<number>(1440);
  const total = CAROUSEL_COURSES.length;

  // Dynamic radius calculation tailored specifically so 1400px & 1500px screens have no overlap,
  // while preserving full large dimensions on 1600px, 1920px, and 2560px+ screens.
  const getRadius = (width: number) => {
    if (width >= 2560) return 260;
    if (width >= 1920) return 238;
    if (width >= 1600) return 218;
    if (width >= 1500) return 192; // tailored for 1500px - 1599px screens
    if (width >= 1400) return 176; // tailored for 1400px - 1499px screens
    if (width >= 1200) return 162;
    if (width >= 992) return 148;
    if (width >= 768) return 138;
    if (width >= 435) return 128;
    return 120; // tailored for 360px - 430px mobile screens
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentRadius = getRadius(windowWidth);

  return (
    <section className="relative w-full flex-1 flex flex-col justify-center pt-1 pb-1 px-3 sm:px-6 lg:px-6 xl:px-8 2xl:px-12 min-h-0">
      {/* MAJESTIC HERO CONTAINER: Signature Luxury Gradient on Mobile, Landscape Mosque Arch on Desktop */}
      <div className="w-full max-w-[1640px] mx-auto rounded-[28px] border border-emerald/20 shadow-[0_20px_50px_rgba(14,73,62,0.07),inset_0_1.5px_2px_rgba(255,255,255,0.85),0_0_0_1px_rgba(255,255,255,0.4)] p-4 sm:p-7 lg:py-6 lg:px-7 xl:py-6 xl:px-8 2xl:py-7 2xl:px-12 min-h-[520px] lg:min-h-[540px] xl:min-h-[560px] flex-1 flex flex-col justify-center relative overflow-hidden hero-mobile-bg md:bg-none">
        {/* Subtle Islamic Royal Watermark for luxury depth on mobile */}
        <div className="absolute inset-0 islamic-royal-watermark opacity-25 pointer-events-none select-none md:hidden" />

        {/* Ambient subtle decorative light orbs on mobile */}
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-emerald/5 rounded-full blur-2xl pointer-events-none md:hidden" />
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gold-primary/10 rounded-full blur-2xl pointer-events-none md:hidden" />

        {/* Desktop Background Image (Landscape arch tailored for wide screens) */}
        <Image
          src="/images/backgrounds/hero-card-bg-v2.png"
          alt="Furqan Learn Hero Background Desktop"
          fill
          priority
          unoptimized
          className="object-fill pointer-events-none hidden md:block"
        />

        {/* Desktop Overlay: Enhances text legibility on wide screens while keeping mosque & arch radiant */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/45 to-white/10 pointer-events-none hidden md:block" />

        {/* 3-ZONE BALANCED & SYMMETRICAL GRID:
            - Left (Zone 1): col-span-4 (Brand Headline, Mission, CTAs & Trust Badges)
            - Center (Zone 2): col-span-4 (3D Revolving Cylinder Carousel, equidistant between left and right wings)
            - Right (Zone 3): col-span-4 (4 Vertical Academic Track Cards)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-5 xl:gap-6 2xl:gap-8 items-center relative z-10">

          {/* ========================================================
              ZONE 1 (LEFT COLUMN): Symmetrical col-span-4 (Balanced width)
             ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 sm:space-y-4.5 xl:space-y-5 justify-center w-full max-w-[420px] sm:max-w-[440px] xl:max-w-[465px] 2xl:max-w-[500px]">
            {/* Top Verified Academy Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: LUXURY_EASE }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gold-primary/40 shadow-[0_2px_10px_rgba(212,175,55,0.12)] max-w-full"
            >
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald animate-pulse shrink-0" />
              <span className="text-[10.5px] sm:text-xs font-black text-emerald tracking-wide uppercase whitespace-nowrap">
                Furqan Learn Academy
              </span>
              <span className="text-gold-primary text-[10px] sm:text-xs shrink-0 font-black">✦</span>
              <span className="text-[10.5px] sm:text-xs font-bold text-graphite-secondary whitespace-nowrap">
                Al-Azhar Certified
              </span>
            </motion.div>

            {/* Majestic 2-Line Engraved Headline (Royal Emerald & 24K Radiant Gold Foil) */}
            <div className="pt-0.5 w-full overflow-hidden">
              <h1 className="font-serif text-2xl xs:text-[27px] sm:text-[32px] lg:text-[27.5px] xl:text-[32px] 2xl:text-[42px] font-extrabold tracking-tight leading-[1.15]">
                <motion.span
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.28, ease: LUXURY_EASE }}
                  className="block engraved-emerald whitespace-nowrap"
                >
                  Master The Noble Quran
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.42, ease: LUXURY_EASE }}
                  className="block engraved-gold whitespace-nowrap mt-0.5 sm:mt-1"
                >
                  &amp; Arabic Language
                </motion.span>
              </h1>
            </div>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55, ease: LUXURY_EASE }}
              className="text-xs 2xl:text-sm text-graphite-secondary font-medium leading-relaxed max-w-[390px] xl:max-w-[420px] 2xl:max-w-md pt-0.5"
            >
              Personalized 1-on-1 online classes for kids and adults. Master Tajweed,
              memorize with understanding, speak fluent Arabic, and attain accredited
              Ijazah certification at your own flexible pace.
            </motion.p>

            {/* Core Action Buttons (24K Royal Gilded & Ivory Glass) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68, ease: LUXURY_EASE }}
              className="flex flex-col sm:flex-row items-center gap-2.5 2xl:gap-3 w-full sm:w-auto pt-1"
            >
              <motion.button
                type="button"
                onClick={onOpenBooking}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="btn-royal-gold w-full sm:w-auto px-4.5 xl:px-5 2xl:px-6 py-2.5 2xl:py-3.5 rounded-xl text-xs 2xl:text-sm tracking-wide shadow-[0_4px_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-1.5 2xl:gap-2 group cursor-pointer shrink-0"
              >
                <CalendarCheck className="w-4 h-4 text-[#07261F] group-hover:scale-110 transition-transform shrink-0" />
                <span>Book Free Trial Class</span>
                <ArrowRight className="w-4 h-4 text-[#07261F] group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/courses"
                  className="w-full sm:w-auto px-4 xl:px-4.5 2xl:px-6 py-2.5 2xl:py-3.5 rounded-xl bg-white/90 hover:bg-[#FAF5E6] text-emerald border border-gold-primary/45 hover:border-gold-primary font-bold text-xs 2xl:text-sm tracking-wide shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 2xl:gap-2 cursor-pointer shrink-0"
                >
                  <BookOpen className="w-4 h-4 text-emerald" />
                  <span>Explore Courses</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Proof Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.82, ease: LUXURY_EASE }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 xl:gap-3 2xl:gap-5 pt-2 sm:pt-3 border-t border-gold-primary/25 w-full max-w-[360px] 2xl:max-w-none"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-gold-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-gold-primary text-gold-dark"
                    />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-graphite">
                  4.95/5
                </span>
              </div>
              <div className="text-xs text-graphite-secondary font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald shrink-0" />
                <span>Al-Azhar Sanad</span>
              </div>
              <div className="text-xs text-graphite-secondary font-medium flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald shrink-0" />
                <span>24/7 Scheduling</span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              ZONE 2 (CENTER COLUMN): 3D Revolving Auto-Gallery (Equidistant to Left & Right Wings)
             ======================================================== */}
          <div
            className="hero-carousel-container lg:col-span-4 xl:col-span-4 flex flex-col items-center justify-center relative w-full select-none -translate-y-2 sm:translate-y-0 lg:translate-y-11 xl:translate-y-13 lg:translate-x-0 2xl:translate-x-6"
            style={{
              top: windowWidth >= 1024 ? "5vh" : undefined,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.38, ease: LUXURY_EASE }}
              className="w-full flex flex-col items-center justify-center"
            >
              {/* Parent 3D Stage Viewport */}
              <div className="Reboot-Auto-Gallery-Parent">
                {/* Rotating Cylinder Hub */}
                <div className="Reboot-Auto-Gallery">
                  {CAROUSEL_COURSES.map((course, index) => {
                    const angle = (index * 360) / total;
                    return (
                      <div
                        key={course.id}
                        onClick={() => router.push(course.link)}
                        data-link={course.link}
                        data-tooltip={course.arabicTitle}
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(${currentRadius}px)`,
                        }}
                        className="elementor-widget-image group"
                      >
                        {/* Inner card container: Royal Emerald Green Body with 24K Gold Rim, Specular Lighting & Depth */}
                        <div className="card-inner relative w-full h-full flex flex-col bg-gradient-to-b from-[#0B3D34] via-[#072822] to-[#041915] rounded-[16px] overflow-hidden border border-gold-primary/45 group-hover:border-gold-primary transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_15px_rgba(212,175,55,0.15),inset_0_1px_1.5px_rgba(255,242,200,0.4)]">
                          {/* Top Subtle Gold Ambient Line */}
                          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-primary/70 to-transparent pointer-events-none z-20" />

                          {/* Top 50%: Thumbnail Image with Gilded Badges */}
                          <div className="card-thumb relative w-full h-[50%] overflow-hidden bg-[#041915] shrink-0">
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              sizes="(max-width: 640px) 110px, 160px"
                              priority={index < 4}
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Subtle gradient vignette to blend gently with emerald body */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#072822]/40 via-transparent to-black/10 pointer-events-none" />

                            {/* Top Badges: Gilded single-line pill badge */}
                            <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between z-10 pointer-events-none gap-1">
                              <span className="badge-tag px-1.5 sm:px-2 py-0.5 rounded-full text-[5.5px] sm:text-[6.5px] font-black tracking-tight bg-gradient-to-r from-[#FFFDF8] via-[#FAF3DE] to-[#F5E8BE] text-navy-royal border border-gold-primary/60 shadow-xs backdrop-blur-xs whitespace-nowrap shrink-0 leading-none">
                                {course.badge}
                              </span>
                              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-navy-royal/85 text-gold-light flex items-center justify-center text-[6px] sm:text-[7px] shadow-xs border border-gold-primary/50 backdrop-blur-xs shrink-0 font-bold">
                                ★
                              </span>
                            </div>
                          </div>

                          {/* Bottom 50%: Dedicated Content Area (Rich Royal Emerald Green with Gold & White Typography) */}
                          <div className="flex-1 p-1.5 sm:p-2.5 flex flex-col justify-between bg-gradient-to-b from-[#072822] to-[#041915] text-left overflow-hidden">
                            <div className="space-y-0.5">
                              {/* Category in Soft Radiant Gold */}
                              <span className="text-[6.5px] sm:text-[7.5px] font-extrabold uppercase tracking-wider text-gold-light block truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                                {course.category}
                              </span>

                              {/* Full Course Title in Crisp Pure White with subtle shadow */}
                              <h4 className="font-serif text-[9px] sm:text-[10.5px] font-bold text-white tracking-tight leading-[1.2] line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                                {course.title}
                              </h4>

                              {/* Arabic Subtitle in Gilded Gold */}
                              <p className="text-[7.5px] sm:text-[8.5px] font-arabic font-bold text-gold-primary truncate drop-shadow-xs" dir="rtl">
                                {course.arabicTitle}
                              </p>
                            </div>

                            {/* Footer: Explore link with gold accent */}
                            <div className="pt-0.5 sm:pt-1 border-t border-gold-primary/25 flex items-center justify-between text-[7px] sm:text-[7.5px] font-extrabold text-gold-light group-hover:text-gold-bright transition-colors">
                              <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                                <span>Explore</span>
                                <span>→</span>
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary group-hover:bg-gold-bright transition-colors shadow-xs" />
                            </div>
                          </div>
                        </div>

                        {/* Interactive Tooltip on Hover */}
                        <div className="image-tooltip">
                          {course.arabicTitle} • {course.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Glowing Floor Reflection Pool */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.70, ease: LUXURY_EASE }}
                className="w-[85%] max-w-[420px] h-6 bg-gradient-to-r from-transparent via-emerald/20 to-transparent blur-xl rounded-full pointer-events-none -mt-3"
              />
            </motion.div>
          </div>

          {/* ========================================================
              ZONE 3 (RIGHT COLUMN): 4 Academic Track Cards (Royal Glassmorphism, Balanced ~370px-385px)
             ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-end justify-center w-full">
            <div className="w-full max-w-[370px] sm:max-w-[385px] xl:max-w-[400px] 2xl:max-w-[430px] flex flex-col gap-2.5 sm:gap-3">
              {/* Header Label with Staggered Entrance */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: LUXURY_EASE }}
                className="text-[11px] font-black uppercase tracking-wider text-graphite-muted flex items-center justify-between px-1 mb-0.5"
              >
                <span>Academic Disciplines:</span>
                <span className="text-gold-primary font-bold text-[10px] bg-emerald-deep px-2 py-0.5 rounded-full border border-gold-primary/30">
                  4 Tracks
                </span>
              </motion.div>

              <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
                {ACADEMIC_TRACKS.map((track, index) => {
                  const Icon = track.icon;
                  return (
                    <motion.div
                      key={track.id}
                      initial={{ opacity: 0, x: 65, y: -16, scale: 0.94 }}
                      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.55 + index * 0.16,
                        ease: LUXURY_EASE,
                      }}
                      whileHover={{ x: -4, scale: 1.015 }}
                      className="w-full"
                    >
                      <Link
                        href={track.link}
                        className="group relative flex items-center justify-between p-3 sm:p-3.5 rounded-[18px] bg-gradient-to-r from-[#0E493E] via-[#0B3D34] to-[#072B24] text-white border border-gold-primary/30 hover:border-gold-primary/70 shadow-[0_6px_20px_rgba(7,43,36,0.22)] hover:shadow-[0_10px_30px_rgba(7,43,36,0.38)] transition-all duration-300 overflow-hidden cursor-pointer w-full"
                      >
                        {/* Top specular gold ambient highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFF0C2] to-transparent opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 via-gold-primary/10 to-gold-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        {/* Shimmer Light Sheen Sweep on Entrance */}
                        <motion.div
                          initial={{ x: "-100%", opacity: 0 }}
                          animate={{ x: "250%", opacity: [0, 0.45, 0] }}
                          transition={{
                            delay: 0.75 + index * 0.16,
                            duration: 0.95,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-10"
                        />

                        <div className="flex items-center gap-3 min-w-0 flex-1 relative z-20">
                          {/* Icon Badge with Royal Gold Accent */}
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-gradient-to-br from-white/15 to-white/5 border border-gold-primary/45 flex items-center justify-center text-gold-primary group-hover:scale-105 group-hover:bg-gold-primary group-hover:text-[#07261F] transition-all shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                            <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform" />
                          </div>

                          {/* Text Info */}
                          <div className="min-w-0 text-left flex-1 space-y-0.5">
                            <h3 className="text-xs sm:text-sm font-bold text-white font-serif tracking-tight leading-tight group-hover:text-gold-light transition-colors truncate">
                              {track.name}
                            </h3>
                            <div className="text-[11px] sm:text-xs font-bold text-gold-primary font-serif leading-tight truncate">
                              {track.arabicName}
                            </div>
                            <div className="text-[9.5px] sm:text-[10px] text-emerald-100/75 font-medium leading-tight truncate">
                              {track.tag}
                            </div>
                          </div>
                        </div>

                        {/* Action Arrow with Gold Ring */}
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 border border-gold-primary/30 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-[#07261F] group-hover:translate-x-1 transition-all shrink-0 ml-2 shadow-xs relative z-20">
                          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
