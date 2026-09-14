"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  Star,
  Clock,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  CalendarCheck,
} from "lucide-react";
import { CourseItem } from "@/data/coursesData";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

interface CourseCardProps {
  course: CourseItem;
  index?: number;
  onOpenDetails: (course: CourseItem) => void;
  onOpenBooking: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  index = 0,
  onOpenDetails,
  onOpenBooking,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald/15 text-emerald border-emerald/30";
      case "Intermediate":
        return "bg-navy-primary/15 text-navy-primary border-navy-primary/30";
      case "Advanced":
        return "bg-[#9B782B]/15 text-[#9B782B] border-[#9B782B]/30";
      case "Kids":
        return "bg-[#E07C7C]/15 text-[#C04848] border-[#E07C7C]/30";
      default:
        return "bg-gold-primary/15 text-gold-dark border-gold-primary/30";
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "100px 0px 0px 0px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { duration: 0.5, delay: (index % 3) * 0.06, ease: LUXURY_EASE }
      }
      className="course-card-liquid flex flex-col justify-between overflow-hidden group border border-gold-primary/30 transition-all duration-300 relative"
    >
      {/* Top Subtle Gold Ambient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent pointer-events-none z-10" />

      {/* Top Image Container */}
      <div className="relative course-card-img-height w-full overflow-hidden shrink-0 bg-navy-primary/10">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle Gradient Shadow Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span
            className={`px-2.5 py-1 rounded-md text-[10.5px] font-bold border backdrop-blur-md shadow-2xs ${getLevelBadgeClass(
              course.level
            )}`}
          >
            {course.level}
          </span>
          {course.sanadIjazah && (
            <span className="px-2.5 py-1 rounded-md text-[10.5px] font-bold bg-navy-primary/80 text-gold-light border border-gold-primary/30 backdrop-blur-md shadow-2xs flex items-center gap-1">
              <AcademicQalamIcon className="w-3 h-3 text-gold-light" />
              <span>Sanad Ijazah</span>
            </span>
          )}
        </div>

        {/* Top Right Price & Certified */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
          <div className="px-2.5 py-1 rounded-md bg-navy-primary/90 text-gold-light font-bold text-xs border border-gold-primary/40 shadow-xs backdrop-blur-md">
            {course.price}
          </div>
          {course.certified && (
            <div className="flex items-center gap-1 bg-emerald/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-2xs backdrop-blur-sm">
              <CheckCircle2 className="w-3 h-3" />
              <span>Al-Azhar Certified</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="course-card-padding flex-1 flex flex-col justify-between space-y-3.5">
        
        {/* Course Title & Description */}
        <div className="space-y-1.5">
          <Link href={`/courses/${course.id}`} className="block group/link">
            <h3 className="font-serif text-lg sm:text-xl xl:text-[21px] font-black text-navy-primary leading-snug group-hover/link:text-gold-dark transition-colors line-clamp-2 [text-shadow:0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(11,27,51,0.15)]">
              {course.title}
            </h3>
          </Link>
          <p className="text-xs text-graphite/80 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Instructor & Meta stats */}
        <div className="pt-2 border-t border-gold-primary/20 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-graphite/80">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gold-primary/20 border border-gold-primary/40 flex items-center justify-center text-[10px] font-bold text-gold-dark">
                {course.instructor.name.charAt(0)}
              </div>
              <span className="font-semibold text-navy-primary truncate max-w-[130px]">
                {course.instructor.name}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gold-dark font-bold">
              <Star className="w-3.5 h-3.5 fill-gold-primary text-gold-primary" />
              <span>{course.rating.toFixed(1)}</span>
              <span className="text-[10px] text-graphite/50 font-normal">
                ({course.reviewsCount})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-graphite/70 font-medium pt-0.5">
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-gold-dark" />
              <span>{course.lessons} Lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-dark" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-gold-dark" />
              <span>{course.students}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/courses/${course.id}`}
            className="py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 bg-white/95 hover:bg-[#FAF5E6] text-emerald border border-gold-primary/45 hover:border-gold-primary cursor-pointer shadow-2xs hover:shadow-xs transition-all group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={onOpenBooking}
            className="btn-royal-gold py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 text-navy-royal shadow-xs hover:shadow-md cursor-pointer border border-gold-light/60 transition-all"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-navy-royal" />
            <span>Book Trial</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
};
