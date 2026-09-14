"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StudentReview } from "@/components/home/StudentReview";
import { ALL_COURSES, CourseItem } from "@/data/coursesData";
import {
  AllFeaturedIcon,
  QuranReadingIcon,
  TajweedVoiceIcon,
  ArabicCalligraphyIcon,
  IslamicStudiesIcon,
  LevelSeedBeginnerIcon,
  LevelStepIntermediateIcon,
  LevelMasterAdvancedIcon,
  QualityScoreBadgeIcon,
  AzharSanadBadgeIcon,
  StudentsGroupIcon,
  LessonsBookletIcon,
  DurationTimeIcon,
  DetailsInfoIcon,
  EnrollKeyArrowIcon,
} from "@/components/home/PopularCoursesIcons";

interface PopularCoursesProps {
  onOpenBooking?: () => void;
}

export const PopularCourses: React.FC<PopularCoursesProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", label: "Featured Courses", icon: AllFeaturedIcon },
    { name: "Quran Reading", label: "Quran Reading", icon: QuranReadingIcon },
    { name: "Tajweed", label: "Tajweed Mastery", icon: TajweedVoiceIcon },
    { name: "Arabic", label: "Arabic Language", icon: ArabicCalligraphyIcon },
    { name: "Islamic Studies", label: "Islamic Studies", icon: IslamicStudiesIcon },
  ];

  // Helper functions for dedicated SVGs
  const getCategoryIcon = (category: string, className = "w-3.5 h-3.5") => {
    switch (category) {
      case "Quran Reading":
        return <QuranReadingIcon className={className} />;
      case "Tajweed":
        return <TajweedVoiceIcon className={className} />;
      case "Arabic Language":
      case "Arabic":
        return <ArabicCalligraphyIcon className={className} />;
      case "Islamic Studies":
        return <IslamicStudiesIcon className={className} />;
      default:
        return <AllFeaturedIcon className={className} />;
    }
  };

  const getLevelIcon = (level: string, className = "w-3 h-3") => {
    switch (level) {
      case "Beginner":
        return <LevelSeedBeginnerIcon className={className} />;
      case "Intermediate":
        return <LevelStepIntermediateIcon className={className} />;
      default:
        return <LevelMasterAdvancedIcon className={className} />;
    }
  };

  // Filter logic: Show 6 courses from ALL_COURSES based on selected category tab
  const filteredCourses =
    activeCategory === "All"
      ? ALL_COURSES.slice(0, 6)
      : ALL_COURSES.filter((c) => {
          if (activeCategory === "Arabic") return c.category === "Arabic Language";
          return c.category === activeCategory;
        }).slice(0, 6);

  return (
    <motion.section
      id="courses"
      initial={{ opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "50px 0px 0px 0px" }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="space-y-8 relative scroll-mt-28"
    >
      {/* SECTION HEADER ROW (CLEAN TYPOGRAPHY) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="space-y-2.5 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto"
        >
          {/* Curricula Sanad Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-navy-royal/70 backdrop-blur-md border border-gold-primary/45 text-gold-light text-[10.5px] sm:text-xs md:text-sm font-bold sm:font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.35)] w-fit mx-auto lg:mx-0">
            <AzharSanadBadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-primary shrink-0" />
            <span className="tracking-normal sm:tracking-wide">Al-Azhar Certified Curricula & Academic Sanad</span>
          </div>

          {/* Majestic Enlarged Section Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.15] text-center lg:text-left w-full">
            <span>Popular </span>
            <span className="gold-foil-text font-serif">
              Quranic Courses
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#FAF6EE]/90 font-medium max-w-3xl lg:max-w-4xl leading-relaxed pt-1 text-center lg:text-left mx-auto lg:mx-0">
            Structured 1-on-1 and interactive group learning paths designed and mentored by Al-Azhar certified scholars.
          </p>
        </motion.div>

        {/* Explore All Link Button (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="shrink-0 self-start lg:self-auto hidden lg:block"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full btn-royal-gold text-navy-royal font-black text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.35)] border border-gold-light/60 cursor-pointer group"
          >
            <span>Explore All 18 Courses</span>
            <EnrollKeyArrowIcon className="w-4 h-4 text-navy-royal group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* CATEGORY TABS BAR WITH DEDICATED SEMANTIC SVG ICONS */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}
        className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 pb-3 pt-1 w-full"
      >
        {categories.map((cat, idx) => {
          const isActive = activeCategory === cat.name;
          const Icon = cat.icon;
          const isLastOdd = idx === categories.length - 1 && categories.length % 2 !== 0;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`w-full sm:w-auto px-3.5 sm:px-5.5 py-3 sm:py-3.5 rounded-full text-[11.5px] sm:text-sm font-bold sm:font-extrabold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-center ${
                isLastOdd ? "col-span-2 max-w-[calc(50%-0.35rem)] mx-auto sm:max-w-none sm:col-span-1 sm:mx-0" : ""
              } ${
                isActive
                  ? "btn-royal-gold text-navy-royal font-black shadow-[0_4px_16px_rgba(212,175,55,0.4)] scale-[1.02] border border-gold-light"
                  : "bg-[#07241E]/80 backdrop-blur-md text-[#FAF6EE]/85 hover:text-white hover:bg-[#0C3830] border border-gold-primary/25 hover:border-gold-primary/50 shadow-sm hover:scale-[1.01]"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-navy-royal" : "text-gold-light"}`} />
              <span className="truncate">{cat.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* TWO-CONTAINER LAYOUT:
          1. Left Container: 6 Course Cards in a 3-Column Grid (flex-1)
          2. Right Container: Compact About & Review Column (w-full lg:w-[310px] xl:w-[330px])
      */}
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 xl:gap-10 items-start">
        {/* Left: 6 Course Cards in 3 Columns (content-start prevents single-row tabs from stretching vertically) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 content-start items-start w-full">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.12, ease: LUXURY_EASE }}
              className="liquid-glass-card rounded-3xl p-4 sm:p-5 py-5 relative flex flex-col justify-between overflow-hidden group h-full border border-gold-primary/30 hover:border-gold-primary/60 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
            >
              {/* Top Subtle Gold Ambient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent pointer-events-none" />

              <div>
                {/* Clickable Image Container */}
                <Link href={`/courses/${course.id}`} className="block group/img">
                  <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden relative border border-emerald/20 shadow-inner mb-4 bg-emerald/10">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Level Badge with Custom Level SVG */}
                    <div className="absolute top-2.5 left-2.5 bg-emerald-deep/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-emerald-tint border border-emerald/30 shadow-sm flex items-center gap-1.5 z-10">
                      {getLevelIcon(course.level, "w-3 h-3 text-emerald-tint")}
                      <span>{course.level}</span>
                    </div>

                    {/* Quality Rating Badge with Gold Star */}
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold text-navy-royal border border-gold-primary/30 shadow-xs flex items-center gap-1 z-10">
                      <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      <span>{course.rating.toFixed(1)}</span>
                    </div>

                    {/* Certified Sanad Badge */}
                    {course.sanadIjazah && (
                      <div className="absolute bottom-2.5 left-2.5 bg-gradient-to-r from-emerald-deep to-navy-royal text-gold-light px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wide shadow-md flex items-center gap-1 z-10 border border-gold-primary/45">
                        <AzharSanadBadgeIcon className="w-3 h-3 text-gold-primary" />
                        <span>Al-Azhar Sanad</span>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Category Pill Tag & Student Count */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-emerald bg-emerald-tint border border-emerald/25 px-2.5 py-0.5 rounded-full shadow-xs inline-flex items-center gap-1">
                    {getCategoryIcon(course.category, "w-3 h-3 text-emerald")}
                    <span>{course.category}</span>
                  </span>
                  <span className="text-[10px] font-extrabold text-graphite-muted flex items-center gap-1">
                    <StudentsGroupIcon className="w-3 h-3 text-emerald/70" />
                    <span>{course.students.includes("Students") ? course.students : `${course.students} Students`}</span>
                  </span>
                </div>

                {/* Title (Crisp Deep Charcoal with Link) */}
                <Link href={`/courses/${course.id}`} className="block group/title">
                  <h4 className="font-serif text-lg sm:text-xl xl:text-[21px] font-black text-graphite tracking-tight leading-snug group-hover/title:text-emerald transition-colors line-clamp-2 my-1.5">
                    {course.title}
                  </h4>
                </Link>

                {/* Description (High-Contrast Slate/Graphite) */}
                <p className="text-[11.5px] text-graphite-secondary font-medium leading-relaxed line-clamp-2 mt-1 mb-3.5">
                  {course.description}
                </p>

                {/* Metadata Info Bar */}
                <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-gold-primary/15 text-[11px] font-extrabold text-graphite mb-3.5 bg-white/90 backdrop-blur-md p-2 rounded-xl border border-gold-primary/20 shadow-xs">
                  <div className="flex items-center gap-1.5 truncate">
                    <LessonsBookletIcon className="w-3.5 h-3.5 text-emerald shrink-0" />
                    <span className="truncate">{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <DurationTimeIcon className="w-3.5 h-3.5 text-emerald shrink-0" />
                    <span className="truncate">{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Dual Action Buttons (Direct Links to Course Page) */}
              <div className="flex items-center gap-2 pt-2 border-t border-gold-primary/15">
                <Link
                  href={`/courses/${course.id}`}
                  className="flex-1 py-2 px-2 rounded-full bg-white hover:bg-[#FAF6EE] text-navy-royal font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-gold-primary/35 hover:border-gold-primary shadow-xs hover:shadow-md cursor-pointer group/btn"
                >
                  <DetailsInfoIcon className="w-3.5 h-3.5 text-emerald group-hover/btn:scale-110 transition-transform" />
                  <span>Details</span>
                </Link>

                <button
                  onClick={onOpenBooking}
                  className="flex-1 py-2 px-2 rounded-full btn-royal-gold text-navy-royal font-black text-xs flex items-center justify-center gap-1 transition-all duration-300 shadow-[0_3px_10px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_18px_rgba(212,175,55,0.45)] border border-gold-light/60 cursor-pointer group/btn truncate"
                >
                  <span className="truncate">Enroll Now</span>
                  <EnrollKeyArrowIcon className="w-3 h-3 text-navy-royal group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Sidebar: Compact About & Review Column */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.2, ease: LUXURY_EASE }}
          className="w-full lg:w-[300px] xl:w-[325px] 2xl:w-[340px] shrink-0 flex flex-col justify-start gap-5 xl:gap-6"
        >
          <div className="w-full">
            <WhyChooseUs />
          </div>
          <div className="w-full">
            <StudentReview />
          </div>
        </motion.div>
      </div>

      {/* Mobile Only: Centered Explore All Courses Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: LUXURY_EASE }}
        className="flex lg:hidden justify-center items-center pt-2 sm:pt-4 w-full"
      >
        <Link
          href="/courses"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full btn-royal-gold text-navy-royal font-black text-xs sm:text-sm transition-all duration-300 shadow-xl hover:shadow-2xl border border-gold-light/60 cursor-pointer group"
        >
          <span>Explore All 18 Courses</span>
          <EnrollKeyArrowIcon className="w-4 h-4 text-navy-royal group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.section>
  );
};
