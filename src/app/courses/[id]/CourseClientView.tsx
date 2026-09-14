"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { ALL_COURSES } from "@/data/coursesData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";
import { CourseCard } from "@/components/courses/CourseCard";
import { EngravedDivider } from "@/components/ui/EngravedDivider";
import {
  Clock,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  CalendarCheck,
  Award,
  GraduationCap,
  PhoneCall,
  ChevronDown,
  Check,
  Layers,
  Compass,
  Video,
  CheckCircle,
} from "lucide-react";
import {
  AcademicQalamIcon,
  VerifiedQualityShieldIcon,
  IslamicRosetteAccentIcon,
} from "@/components/ui/SemanticCustomIcons";

interface CourseClientViewProps {
  initialId?: string;
}

export function CourseClientView({ initialId }: CourseClientViewProps) {
  const params = useParams();
  const router = useRouter();
  const courseId = (params?.id as string) || initialId;
  const shouldReduceMotion = useReducedMotion();

  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"syllabus" | "outcomes" | "why" | "prereq">("syllabus");
  const [expandedLevels, setExpandedLevels] = useState<number[]>([1, 2]);

  // Find current course or fallback
  const course = ALL_COURSES.find((c) => c.id === courseId) || ALL_COURSES[0];

  // Related courses (same category, excluding current course, max 3)
  const relatedCourses = ALL_COURSES.filter(
    (c) => c.category === course.category && c.id !== course.id
  ).slice(0, 3);

  const displayRelated =
    relatedCourses.length > 0
      ? relatedCourses
      : ALL_COURSES.filter((c) => c.id !== course.id).slice(0, 3);

  const toggleLevel = (lvlNum: number) => {
    setExpandedLevels((prev) =>
      prev.includes(lvlNum) ? prev.filter((n) => n !== lvlNum) : [...prev, lvlNum]
    );
  };

  // Structured Academic Level Stages based on course syllabus or generated rich plan
  const academicLevels = [
    {
      levelNumber: 1,
      title: "Level 1: Placement Evaluation & Foundational Mastery",
      arabicTitle: "المستوى الأول: التقييم وضبط الأصول والقواعد الأساسية",
      duration: "Weeks 1 - 4",
      lessonsCount: "8 Lessons",
      objectives: "Assess baseline recitation, correct core phonetic articulation points (Makharij), and build individual study pacing.",
      modules: course.syllabus.slice(0, 2).map((m) => ({
        name: m.title,
        topics: m.topics,
      })),
      milestone: "Quarterly Placement Benchmark & Diagnostic Audio Exam",
    },
    {
      levelNumber: 2,
      title: "Level 2: Intensive Applied Talaqqi & Retention Loop",
      arabicTitle: "المستوى الثاني: التلقي المكثف والتطبيق العملي المحكم",
      duration: "Weeks 5 - 10",
      lessonsCount: "12 Lessons",
      objectives: "Verse-by-verse oral transmission (Talaqqi), applying Mudood, Ghunnah, Waqf & Ibtidaa under real-time scholar supervision.",
      modules: course.syllabus.slice(2, 4).length > 0
        ? course.syllabus.slice(2, 4).map((m) => ({ name: m.title, topics: m.topics }))
        : [
            {
              name: "Continuous Oral Recitation Drills",
              topics: ["Systematic daily repetition", "Diaphragmatic breath management", "Eliminating hesitation during long verses"],
            },
            {
              name: "Consolidation & Similar Verses (Mutashabihat)",
              topics: ["Mapping identical verses across Surahs", "Reinforcing past portions (Manzil)", "Mid-term oral evaluation"],
            },
          ],
      milestone: "Mid-Term Viva Voce Recitation Assessment with Al-Azhar Panel",
    },
    {
      levelNumber: 3,
      title: "Level 3: Advanced Fluency, Precision & Sanad Preparation",
      arabicTitle: "المستوى الثالث: التمكين والإتقان والتحضير لختمة الإجازة",
      duration: "Weeks 11 - 16+",
      lessonsCount: "16+ Lessons",
      objectives: "Full Surah consolidation, theoretical Tajweed mastery, flawless melody pacing, and comprehensive Khatmah defense.",
      modules: [
        {
          name: "Deep Recitation Analysis & Vocal Resonance",
          topics: ["Mastering Tarteel rhythm without vocal strain", "Flawless stopping and restarting rules", "Spiritual contemplation (Tadabbur) in prayer"],
        },
        {
          name: "Comprehensive Khatmah & Certification Defense",
          topics: ["Final full-portion oral examination", "Issuing official Al-Azhar accredited certificate", "Living Sanad registration and accreditation"],
        },
      ],
      milestone: "Final Graduation Recitation Defense & Sanad Ijazah Conferral",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-navy-primary flex flex-col justify-between selection:bg-gold-primary/25 selection:text-navy-primary">
      {/* 1. GLOBAL NAVBAR */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="overflow-x-clip">
        
        {/* ========================================================================= */}
        {/* 1. FULL-WIDTH HERO SECTION WITH PARALLAX BACKGROUND & GRADUAL NAVY OVERLAY */}
        {/* ========================================================================= */}
        <section className="relative w-full min-h-screen lg:min-h-[100dvh] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 overflow-hidden border-b border-gold-primary/30">
          
          {/* Full-width Background Image Container with Smooth Parallax / Scale Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: LUXURY_EASE }}
              className="relative w-full h-full"
            >
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center transform-gpu"
              />
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* ROYAL ISLAMIC EMERALD & GOLD LUXURY OVERLAYS */}
          {/* ========================================================================= */}
          
          {/* 1. Vertical Atmospheric Gradient: Soft Emerald depth building gently towards bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08332B]/35 via-[#08332B]/20 via-45% to-[#05231D]/75 pointer-events-none" />

          {/* 2. Directional Left-to-Right Emerald Vignette: Gentle contrast behind text while letting image shine on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05231D]/70 via-[#08332B]/40 to-transparent pointer-events-none" />

          {/* 3. Radiant ambient gold light glow (Top-Left) */}
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gold-primary/15 rounded-full blur-3xl pointer-events-none" />

          {/* 4. Radiant subtle emerald ambient glow (Bottom-Right) */}
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald/15 rounded-full blur-3xl pointer-events-none" />

          {/* 5. Seamless bottom fade into deep emerald baseline */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#05231D]/60 to-transparent pointer-events-none" />

          {/* ========================================================================= */}
          {/* FOREGROUND HERO CONTENT */}
          {/* ========================================================================= */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto layout-page-px space-y-6 sm:space-y-7">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" prefetch={true} className="hover:text-gold-light transition-colors">Home</Link>
              <span className="text-gold-light/60">•</span>
              <Link href="/courses" prefetch={true} className="hover:text-gold-light transition-colors">Courses</Link>
              <span className="text-gold-light/60">•</span>
              <span className="text-gold-light font-black truncate max-w-[200px] sm:max-w-none">{course.title}</span>
            </nav>

            {/* Badges Pill Row (Strict single-line row on mobile with scaled font & compact padding) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-nowrap overflow-x-auto sm:overflow-visible scrollbar-none pb-0.5 max-w-full">
              <span className="px-2.5 xs:px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-black bg-gold-primary/25 text-gold-light border border-gold-primary/50 shadow-xs backdrop-blur-md shrink-0 whitespace-nowrap">
                {course.category}
              </span>

              <span className="px-2.5 xs:px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-black bg-white/15 text-white border border-white/25 shadow-2xs backdrop-blur-md shrink-0 whitespace-nowrap">
                {course.level} Level
              </span>

              {course.sanadIjazah && (
                <span className="px-2.5 xs:px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-bold bg-white/15 text-white border border-gold-primary/45 shadow-2xs inline-flex items-center gap-1 sm:gap-1.5 backdrop-blur-md shrink-0 whitespace-nowrap">
                  <VerifiedQualityShieldIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-light shrink-0" />
                  <span>Verified Sanad Ijazah</span>
                </span>
              )}

              {course.certified && (
                <span className="px-2.5 xs:px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-bold bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-2xs inline-flex items-center gap-1 sm:gap-1.5 backdrop-blur-md shrink-0 whitespace-nowrap">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                  <span>Al-Azhar Certified</span>
                </span>
              )}
            </div>

            {/* Main Headline */}
            <div className="space-y-2 max-w-4xl text-left">
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: LUXURY_EASE }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black tracking-tight text-white leading-[1.16] [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]"
              >
                {course.title}
              </motion.h1>
            </div>

            {/* Course Detailed Description */}
            <p className="text-xs sm:text-sm md:text-[15.5px] text-white/90 font-medium leading-relaxed max-w-3xl text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
              {course.fullDescription || course.description}
            </p>

            {/* Key Metrics Glass Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl pt-1">
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-xs text-left space-y-0.5">
                <div className="flex items-center gap-1.5 text-gold-light">
                  <Award className="w-4 h-4 text-gold-light" />
                  <span className="text-sm font-black text-white">{course.rating.toFixed(1)}</span>
                </div>
                <p className="text-xs text-white/70 font-semibold truncate">
                  {course.reviewsCount} Reviews
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-xs text-left space-y-0.5">
                <div className="flex items-center gap-1.5 text-gold-light">
                  <BookOpen className="w-4 h-4 text-gold-light" />
                  <span className="text-sm font-black text-white">{course.lessons} Lessons</span>
                </div>
                <p className="text-xs text-white/70 font-semibold truncate">
                  1-on-1 Talaqqi
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-xs text-left space-y-0.5">
                <div className="flex items-center gap-1.5 text-gold-light">
                  <Clock className="w-4 h-4 text-gold-light" />
                  <span className="text-sm font-black text-white">Flexible</span>
                </div>
                <p className="text-xs text-white/70 font-semibold truncate">
                  {course.duration}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-xs text-left space-y-0.5">
                <div className="flex items-center gap-1.5 text-gold-light">
                  <Users className="w-4 h-4 text-gold-light" />
                  <span className="text-sm font-black text-white">{course.students}+</span>
                </div>
                <p className="text-xs text-white/70 font-semibold truncate">
                  Graduated
                </p>
              </div>
            </div>

            {/* Hero Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => setBookingOpen(true)}
                className="btn-royal-gold px-8 py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-gold-light/60 cursor-pointer text-navy-royal"
              >
                <CalendarCheck className="w-4 h-4 text-navy-royal" />
                <span>Book 2 Free Trial Classes</span>
                <ArrowRight className="w-4 h-4 text-navy-royal" />
              </button>

              <Link
                href="/contact"
                prefetch={true}
                className="px-7 py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 border border-white/30 hover:border-gold-primary bg-white/10 hover:bg-white/20 transition-all cursor-pointer backdrop-blur-md shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-gold-light" />
                <span>Speak With Academic Advisor</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. INTERACTIVE 4-TAB ACADEMIC FRAMEWORK (Light Luxury Theme) */}
        {/* ========================================================================= */}
        <section id="curriculum-tabs" className="relative w-full py-14 sm:py-20 bg-white border-b border-gold-primary/20">
          <div className="w-full max-w-[1400px] mx-auto layout-page-px space-y-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gold-primary/15 border border-gold-primary/35 text-xs font-bold text-gold-dark shadow-2xs">
                <AcademicQalamIcon className="w-4 h-4 text-gold-dark" />
                <span>Scholarly Study Framework</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold engraved-emerald tracking-tight">
                Comprehensive Academic Curriculum
              </h2>

              <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-2xl mx-auto">
                Every level is delivered 1-on-1 with accredited Al-Azhar scholars, combining rigorous classical oral transmission (Talaqqi) with modern interactive progress milestones.
              </p>
            </div>

            {/* Segmented Tab Navigation Bar */}
            <div className="flex items-center justify-center">
              <div className="inline-flex p-1.5 rounded-2xl royal-card-light border border-gold-primary/35 shadow-xs gap-1.5 overflow-x-auto max-w-full">
                <button
                  onClick={() => setActiveTab("syllabus")}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "syllabus"
                      ? "btn-royal-gold text-navy-royal shadow-sm font-black border border-gold-light/60"
                      : "text-graphite/80 hover:text-navy-primary hover:bg-gold-primary/10"
                  }`}
                >
                  <BookOpen className={`w-4 h-4 ${activeTab === "syllabus" ? "text-navy-royal" : "text-gold-dark"}`} />
                  <span>Curriculum &amp; Level Plan</span>
                </button>

                <button
                  onClick={() => setActiveTab("outcomes")}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "outcomes"
                      ? "btn-royal-gold text-navy-royal shadow-sm font-black border border-gold-light/60"
                      : "text-graphite/80 hover:text-navy-primary hover:bg-gold-primary/10"
                  }`}
                >
                  <Award className={`w-4 h-4 ${activeTab === "outcomes" ? "text-navy-royal" : "text-gold-dark"}`} />
                  <span>Learning Outcomes</span>
                </button>

                <button
                  onClick={() => setActiveTab("why")}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "why"
                      ? "btn-royal-gold text-navy-royal shadow-sm font-black border border-gold-light/60"
                      : "text-graphite/80 hover:text-navy-primary hover:bg-gold-primary/10"
                  }`}
                >
                  <GraduationCap className={`w-4 h-4 ${activeTab === "why" ? "text-navy-royal" : "text-gold-dark"}`} />
                  <span>Why This Program</span>
                </button>

                <button
                  onClick={() => setActiveTab("prereq")}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "prereq"
                      ? "btn-royal-gold text-navy-royal shadow-sm font-black border border-gold-light/60"
                      : "text-graphite/80 hover:text-navy-primary hover:bg-gold-primary/10"
                  }`}
                >
                  <ShieldCheck className={`w-4 h-4 ${activeTab === "prereq" ? "text-navy-royal" : "text-gold-dark"}`} />
                  <span>Prerequisites &amp; Ijazah</span>
                </button>
              </div>
            </div>

            {/* TAB 1: CURRICULUM & MULTI-STAGE LEVELS PLAN */}
            {activeTab === "syllabus" && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Level Controls Toolbar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#FAF6EE] border border-gold-primary/30 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-primary/20 text-gold-dark flex items-center justify-center shrink-0 border border-gold-primary/35 shadow-2xs">
                      <Layers className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-navy-primary">
                        Structured 3-Stage Academic Pathway
                      </h3>
                      <p className="text-xs text-graphite/75">
                        {course.lessons} Scheduled 1-on-1 Sessions • Complete Milestone Tests Included
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setExpandedLevels([1, 2, 3])}
                      className="text-xs font-bold text-navy-primary hover:text-gold-dark cursor-pointer px-3.5 py-1.5 rounded-xl bg-white border border-gold-primary/35 shadow-2xs transition-all"
                    >
                      Expand All Levels
                    </button>
                    <button
                      onClick={() => setExpandedLevels([])}
                      className="text-xs font-bold text-graphite/60 hover:text-navy-primary cursor-pointer px-3.5 py-1.5 rounded-xl bg-white border border-gold-primary/35 shadow-2xs transition-all"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* Level Cards Stack */}
                <div className="space-y-5">
                  {academicLevels.map((lvl) => {
                    const isExpanded = expandedLevels.includes(lvl.levelNumber);
                    return (
                      <div
                        key={lvl.levelNumber}
                        className="rounded-3xl royal-card-light border border-gold-primary/35 overflow-hidden shadow-xs hover:shadow-md transition-all"
                      >
                        {/* Header Toggle */}
                        <button
                          onClick={() => toggleLevel(lvl.levelNumber)}
                          className="w-full p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left cursor-pointer hover:bg-gold-primary/5 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-navy-primary text-gold-light font-serif font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                              {lvl.levelNumber}
                            </div>
                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-navy-primary">
                                  {lvl.title}
                                </h4>
                                <span className="px-2.5 py-0.5 rounded-md text-[10.5px] font-bold bg-white border border-gold-primary/35 text-gold-dark shadow-2xs">
                                  {lvl.duration} • {lvl.lessonsCount}
                                </span>
                              </div>
                              <p className="font-serif text-gold-dark italic text-xs sm:text-sm font-semibold">
                                {lvl.arabicTitle}
                              </p>
                              <p className="text-xs text-graphite/80 leading-relaxed pt-1">
                                {lvl.objectives}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                            <span className="text-xs font-bold text-navy-primary hidden sm:inline">
                              {isExpanded ? "Hide Modules" : "View Modules"}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-gold-primary/15 text-gold-dark flex items-center justify-center border border-gold-primary/35">
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </button>

                        {/* Expanded Modules Body */}
                        {isExpanded && (
                          <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-gold-primary/25 bg-white/70 space-y-6">
                            {/* Modules Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {lvl.modules.map((mod, mIdx) => (
                                <div
                                   key={mIdx}
                                  className="p-4 sm:p-5 rounded-2xl bg-white border border-gold-primary/30 space-y-2.5 shadow-2xs"
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-lg bg-navy-primary text-gold-light flex items-center justify-center text-xs font-bold shrink-0">
                                      {mIdx + 1}
                                    </div>
                                    <h5 className="font-serif font-bold text-sm text-navy-primary">
                                      {mod.name}
                                    </h5>
                                  </div>

                                  <div className="space-y-1.5 pl-2">
                                    {mod.topics.map((t, tIdx) => (
                                      <div key={tIdx} className="flex items-start gap-2 text-xs text-graphite/85 font-medium">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                        <span>{t}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Milestone Callout */}
                            <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-primary/15 via-[#FAF6EE] to-white border border-gold-primary/40 flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <Award className="w-5 h-5 text-gold-dark shrink-0" />
                                <div>
                                  <span className="text-[11px] uppercase tracking-wider text-gold-dark font-black block">
                                    Graduation Milestone for Level {lvl.levelNumber}
                                  </span>
                                  <span className="text-xs sm:text-sm font-bold text-navy-primary">
                                    {lvl.milestone}
                                  </span>
                                </div>
                              </div>

                              <button
                                onClick={() => setBookingOpen(true)}
                                className="btn-royal-gold px-4 py-2 rounded-xl text-xs font-black text-navy-royal border border-gold-light/60 cursor-pointer shrink-0 hidden sm:block shadow-xs"
                              >
                                Enroll in Level {lvl.levelNumber}
                              </button>
                            </div>

                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 2: LEARNING OUTCOMES */}
            {activeTab === "outcomes" && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-10 rounded-3xl royal-card-light border border-gold-primary/35 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-gold-primary/25 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-primary/20 text-gold-dark flex items-center justify-center shrink-0 border border-gold-primary/40 shadow-2xs">
                    <Award className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-primary">
                      Target Competencies &amp; Recitation Mastery
                    </h3>
                    <p className="text-xs text-graphite/75">
                      By completing this program with your dedicated Azhari Sheikh, you will achieve the following milestones:
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {course.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gold-primary/30 shadow-2xs hover:border-gold-primary transition-all group"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-primary leading-relaxed">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold-primary/25">
                  <div className="flex items-center gap-2 text-xs text-graphite/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Personalized progress tracking with weekly feedback reports.</span>
                  </div>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="btn-royal-gold px-5 py-2.5 rounded-xl text-xs font-black text-navy-royal shadow-xs cursor-pointer border border-gold-light/60"
                  >
                    Start Your Assessment
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 3: WHY THIS PROGRAM */}
            {activeTab === "why" && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-10 rounded-3xl royal-card-light border border-gold-primary/35 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-gold-primary/25 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-primary/20 text-gold-dark flex items-center justify-center shrink-0 border border-gold-primary/40 shadow-2xs">
                    <GraduationCap className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-primary">
                      Why Choose This Al-Azhar Academic Program?
                    </h3>
                    <p className="text-xs text-graphite/75">
                      Discover why over 3,400+ students worldwide trust Furqan Learn Academy for authentic Quranic education.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                  <div className="p-5 rounded-2xl bg-white border border-gold-primary/30 space-y-2.5 shadow-2xs">
                    <div className="w-9 h-9 rounded-xl bg-gold-primary/15 text-gold-dark flex items-center justify-center">
                      <VerifiedQualityShieldIcon className="w-5 h-5 text-gold-dark" />
                    </div>
                    <h4 className="font-serif font-bold text-navy-primary text-base">
                      Living Sanad Transmission
                    </h4>
                    <p className="text-xs text-graphite/80 leading-relaxed">
                      Learn through continuous oral transmission (Talaqqi) tracing directly back through generations of accredited Al-Azhar masters.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gold-primary/30 space-y-2.5 shadow-2xs">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-500/30">
                      <Users className="w-5 h-5 text-emerald-700" />
                    </div>
                    <h4 className="font-serif font-bold text-navy-primary text-base">
                      Strictly 1-on-1 Dedicated Tutor
                    </h4>
                    <p className="text-xs text-graphite/80 leading-relaxed">
                      100% personalized attention. The Sheikh listens to your recitation verse-by-verse, correcting tongue positioning and breath modulation in real time.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gold-primary/30 space-y-2.5 shadow-2xs">
                    <div className="w-9 h-9 rounded-xl bg-navy-primary/10 text-navy-primary flex items-center justify-center border border-navy-primary/20">
                      <Clock className="w-5 h-5 text-gold-dark" />
                    </div>
                    <h4 className="font-serif font-bold text-navy-primary text-base">
                      Global Flexible Scheduling
                    </h4>
                    <p className="text-xs text-graphite/80 leading-relaxed">
                      Choose class times that fit your family timezone across USA, UK, Europe, Australia, and the Middle East, 24 hours a day, 7 days a week.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: PREREQUISITES & CERTIFICATE */}
            {activeTab === "prereq" && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] border border-gold-primary/40 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-gold-primary/25 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-primary/20 text-gold-dark flex items-center justify-center shrink-0 border border-gold-primary/40 shadow-2xs">
                    <ShieldCheck className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-primary">
                      Course Prerequisites &amp; Graduation Certification
                    </h3>
                    <p className="text-xs text-graphite/75">
                      Learn about entry requirements, expected commitment, and accredited certificates.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Target Audience & Requirements */}
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-white border border-gold-primary/30 space-y-2 shadow-2xs">
                      <h4 className="font-serif font-bold text-navy-primary text-base flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold-dark" />
                        <span>Target Audience</span>
                      </h4>
                      <p className="text-xs text-graphite/85 leading-relaxed">
                        {course.targetAudience || "Designed for adults, teenagers, and kids seeking authentic Quranic reading, Tajweed correction, and structured progression under certified Al-Azhar tutors."}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-gold-primary/30 space-y-2 shadow-2xs">
                      <h4 className="font-serif font-bold text-navy-primary text-base flex items-center gap-2">
                        <Compass className="w-4 h-4 text-gold-dark" />
                        <span>Prerequisites</span>
                      </h4>
                      <p className="text-xs text-graphite/85 leading-relaxed">
                        {course.prerequisites || "No prior Arabic or Quran knowledge required for beginner levels. A free 1-on-1 evaluation session determines your exact starting point."}
                      </p>
                    </div>
                  </div>

                  {/* Certificate Showcase Card */}
                  <div className="p-6 rounded-2xl royal-card-dark text-white border border-gold-primary/50 space-y-4 shadow-md flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-gold-primary/20 text-gold-light border border-gold-primary/40 text-[10.5px] font-bold">
                          Official Academic Credential
                        </span>
                        <IslamicRosetteAccentIcon className="w-5 h-5 text-gold-primary" />
                      </div>

                      <h4 className="font-serif text-lg font-bold text-white pt-2">
                        Al-Azhar Verified Completion Certificate &amp; Sanad
                      </h4>
                      <p className="text-xs text-white/80 leading-relaxed">
                        Upon fulfilling attendance and recitation benchmarks, students receive an official digital and printable certificate with a verifiable QR code signed by accredited Al-Azhar University supervisors.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-gold-light font-semibold">
                      <span>Includes Living Sanad Pathway</span>
                      <Award className="w-4 h-4 text-gold-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. HOW TO BEGIN: REFINED STEP-BY-STEP ADMISSION ROADMAP */}
        {/* ========================================================================= */}
        <section className="relative w-full bg-[#FAF6EE] py-14 sm:py-20 border-b border-gold-primary/20">
          <div className="w-full max-w-[1400px] mx-auto layout-page-px space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gold-primary/15 border border-gold-primary/35 text-xs font-bold text-gold-dark shadow-2xs">
                <Compass className="w-4 h-4 text-gold-dark" />
                <span>Simple 4-Step Onboarding</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold engraved-emerald tracking-tight">
                How To Begin Your Quran Journey
              </h2>

              <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed font-normal">
                Begin in under 24 hours with zero commitment and full tutor matching flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Step 1 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gold-primary/35 shadow-xs space-y-3 relative group hover:border-gold-primary hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-black text-gold-dark group-hover:scale-105 transition-transform">
                    01
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gold-primary/15 text-gold-dark flex items-center justify-center border border-gold-primary/30">
                    <CalendarCheck className="w-4 h-4 text-gold-dark" />
                  </div>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-navy-primary">
                  Book Free Placement
                </h3>
                <p className="text-xs text-graphite/80 leading-relaxed">
                  Select your preferred day, time, and whether you prefer a male or female Azhari tutor.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gold-primary/35 shadow-xs space-y-3 relative group hover:border-gold-primary hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-black text-gold-dark group-hover:scale-105 transition-transform">
                    02
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gold-primary/15 text-gold-dark flex items-center justify-center border border-gold-primary/30">
                    <Video className="w-4 h-4 text-gold-dark" />
                  </div>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-navy-primary">
                  1-on-1 Trial Class
                </h3>
                <p className="text-xs text-graphite/80 leading-relaxed">
                  Meet your Sheikh in our virtual classroom for live recitation feedback and diagnostic benchmark.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gold-primary/35 shadow-xs space-y-3 relative group hover:border-gold-primary hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-black text-gold-dark group-hover:scale-105 transition-transform">
                    03
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gold-primary/15 text-gold-dark flex items-center justify-center border border-gold-primary/30">
                    <AcademicQalamIcon className="w-4 h-4 text-gold-dark" />
                  </div>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-navy-primary">
                  Personalized Plan
                </h3>
                <p className="text-xs text-graphite/80 leading-relaxed">
                  Receive a customized weekly pacing plan tailored to your pace, memory capacity, and goals.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gold-primary/35 shadow-xs space-y-3 relative group hover:border-gold-primary hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-black text-gold-dark group-hover:scale-105 transition-transform">
                    04
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gold-primary/15 text-gold-dark flex items-center justify-center border border-gold-primary/30">
                    <Award className="w-4 h-4 text-gold-dark" />
                  </div>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-navy-primary">
                  Sanad &amp; Certificate
                </h3>
                <p className="text-xs text-graphite/80 leading-relaxed">
                  Graduate with accredited Al-Azhar certification and an unbroken chain of recitation transmission.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. RELATED / COMPLEMENTARY COURSES SECTION */}
        {/* ========================================================================= */}
        <section className="relative w-full py-14 sm:py-20 bg-white border-b border-gold-primary/20">
          <div className="w-full max-w-[1400px] mx-auto layout-page-px space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Continue Your Learning Path
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold engraved-emerald">
                  Related Academic Programs
                </h2>
              </div>
              <Link
                href="/courses"
                prefetch={true}
                className="text-xs sm:text-sm font-bold text-gold-dark hover:text-navy-primary flex items-center gap-1.5 transition-colors"
              >
                <span>View All 18 Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayRelated.map((relCourse) => (
                <CourseCard
                  key={relCourse.id}
                  course={relCourse}
                  onOpenDetails={(c) => router.push(`/courses/${c.id}`)}
                  onOpenBooking={() => setBookingOpen(true)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="pt-2 sm:pt-4 pb-4 sm:pb-8" />

        {/* ========================================================================= */}
        {/* 5. BOTTOM RISK-FREE CLOSING CTA (Gradual Transition to Royal Deep Accent) */}
        {/* ========================================================================= */}
        <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF6EE] to-[#F3EACF]">
          <div className="w-full max-w-[1400px] mx-auto layout-page-px">
            <div className="royal-card-dark rounded-3xl p-8 sm:p-12 lg:p-16 border border-gold-primary/50 shadow-2xl text-center space-y-6 relative overflow-hidden">
              
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-primary/20 text-gold-light border border-gold-primary/50 text-xs font-bold shadow-xs">
                  <CalendarCheck className="w-3.5 h-3.5 text-gold-light" />
                  <span>Begin Your Journey Risk-Free</span>
                </span>

                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Experience 1-on-1 Quran Learning With Al-Azhar Scholars
                </h2>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Take your first step today with 2 free trial classes. No credit card required. Personalized match with a qualified Azhari Sheikh within 24 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="btn-royal-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 text-navy-royal shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-gold-light/60 cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4 text-navy-royal" />
                    <span>Start Free 1-on-1 Trial</span>
                    <ArrowRight className="w-4 h-4 text-navy-royal" />
                  </button>

                  <Link
                    href="/contact"
                    prefetch={true}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 border border-white/30 hover:border-gold-primary transition-all cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-md"
                  >
                    <PhoneCall className="w-4 h-4 text-gold-light" />
                    <span>Contact Academic Advisors</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 6. GLOBAL FOOTER */}
      <Footer />

      {/* 7. BOOKING WIZARD MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
