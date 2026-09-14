"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Star,
  BookOpen,
  CheckCircle2,
  Award,
  ShieldCheck,
  GraduationCap,
  Users,
  Layers,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { CourseItem } from "@/data/coursesData";
import { AcademicQalamIcon, VerifiedQualityShieldIcon } from "@/components/ui/SemanticCustomIcons";

interface CourseDetailModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "syllabus" | "instructor">("overview");

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-primary/60 backdrop-blur-md overflow-y-auto animate-fade-in">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl course-modal-panel overflow-hidden z-10 my-8 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Top Header with Thumbnail & Close Button */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-emerald-deep via-emerald-royal to-emerald-deep text-white border-b border-gold-primary/30 shrink-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 z-20"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pr-10">
            {/* Thumbnail */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-gold-primary/50 shadow-lg hidden sm:block">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Course Title & Info */}
            <div className="space-y-2 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-gold-primary text-navy-primary font-bold shadow-xs">
                  {course.category}
                </span>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-white/20 text-gold-light border border-white/20">
                  Level: {course.level}
                </span>
                {course.sanadIjazah && (
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald text-white shadow-xs flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Sanad Ijazah
                  </span>
                )}
              </div>

              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
                {course.title}
              </h2>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-1">
                <div className="flex items-center gap-1 text-gold-light font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#F4DC8C] text-[#F4DC8C]" />
                  <span>{course.rating.toFixed(2)}</span>
                  <span className="text-white/60 font-normal">
                    ({course.reviewsCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-gold-light" />
                  <span>{course.students} Enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-gold-light" />
                  <span>{course.lessons} Lessons ({course.duration})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 pt-5 -mb-2 border-t border-white/15 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-gold-primary text-navy-primary shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Course Overview & Outcomes
            </button>
            <button
              onClick={() => setActiveTab("syllabus")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === "syllabus"
                  ? "bg-gold-primary text-navy-primary shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Curriculum & Syllabus ({course.syllabus.length} Modules)
            </button>
            <button
              onClick={() => setActiveTab("instructor")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === "instructor"
                  ? "bg-gold-primary text-navy-primary shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Instructor & Sanad Credentials
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-transparent text-graphite">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Detailed Description */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gold-dark flex items-center gap-2">
                  <AcademicQalamIcon className="w-4 h-4 text-gold-primary" />
                  Program Description
                </h3>
                <p className="text-sm text-graphite/90 leading-relaxed font-normal bg-white/60 p-4 rounded-2xl border border-gold-primary/20">
                  {course.fullDescription}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-primary flex items-center gap-2">
                  <VerifiedQualityShieldIcon className="w-4 h-4 text-emerald" />
                  What You Will Learn & Master
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-gold-primary/20 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                      <span className="text-xs text-graphite font-medium leading-normal">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience & Prerequisites */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/70 border border-gold-primary/25 space-y-1.5">
                  <span className="text-xs font-bold text-navy-primary block">
                    Who Is This Course For?
                  </span>
                  <p className="text-xs text-graphite/80 leading-relaxed">
                    {course.targetAudience}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-gold-primary/25 space-y-1.5">
                  <span className="text-xs font-bold text-navy-primary block">
                    Prerequisites & Entry Requirements
                  </span>
                  <p className="text-xs text-graphite/80 leading-relaxed">
                    {course.prerequisites}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYLLABUS */}
          {activeTab === "syllabus" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-primary flex items-center gap-2">
                  <Layers className="w-4 h-4 text-gold-primary" />
                  Detailed Step-by-Step Curriculum
                </h3>
                <span className="text-xs font-bold text-gold-dark">
                  {course.lessons} Live 1-on-1 Sessions
                </span>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((mod) => (
                  <div
                    key={mod.moduleNumber}
                    className="p-4 sm:p-5 rounded-2xl bg-white/85 border border-gold-primary/30 shadow-xs space-y-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-navy-primary text-gold-light text-xs font-bold flex items-center justify-center shrink-0">
                        {mod.moduleNumber}
                      </span>
                      <h4 className="text-sm font-bold text-navy-primary">
                        {mod.title}
                      </h4>
                    </div>

                    <ul className="pl-10 space-y-1.5 text-xs text-graphite/80 list-disc list-outside">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="leading-relaxed">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INSTRUCTOR & SANAD */}
          {activeTab === "instructor" && (
            <div className="space-y-6">
              {/* Instructor Bio Box */}
              <div className="p-6 rounded-2xl bg-white/90 border border-gold-primary/35 shadow-xs space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-primary to-navy-deep text-gold-light flex items-center justify-center text-xl font-bold shadow-md border border-gold-primary/40 shrink-0">
                    <GraduationCap className="w-7 h-7 text-gold-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-primary">
                      {course.instructor.name}
                    </h3>
                    <p className="text-xs font-serif font-bold text-gold-dark dir-rtl">
                      {course.instructor.arabicName}
                    </p>
                    <p className="text-xs text-graphite/70 mt-0.5">
                      {course.instructor.title}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gold-primary/15 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                    <span className="font-bold text-navy-primary">
                      Al-Azhar University Certified Faculty
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold-dark shrink-0" />
                    <span className="font-bold text-navy-primary">
                      {course.instructor.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sanad / Certificate Information */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF8F3] to-[#F5EEDC] border border-gold-primary/40 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold-dark" />
                  <span className="text-sm font-bold text-navy-primary">
                    {course.sanadIjazah
                      ? "Official Sanad Connected to Prophet Muhammad (ﷺ)"
                      : "Official Furqan Learn Academy Completion Diploma"}
                  </span>
                </div>
                <p className="text-xs text-graphite/85 leading-relaxed">
                  Upon fulfilling all syllabus checkpoints and passing the oral graduation evaluation, you will receive a verifiable digital and print certificate stamped by Al-Azhar certified scholars.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-6 bg-white/95 border-t border-gold-primary/25 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-serif font-bold text-navy-primary">
              {course.price}
            </span>
            <span className="text-xs text-graphite/60 font-medium">
              • Includes Free Trial Class
            </span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full sm:w-auto">
            <Link
              href={`/courses/${course.id}`}
              onClick={onClose}
              className="liquid-glass-btn px-4 py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-gold-primary cursor-pointer w-full sm:w-auto text-center"
            >
              <span>Full Page</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-dark" />
            </Link>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="liquid-glass-btn-navy shimmer-gold-sweep px-6 py-3 text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg w-full sm:w-auto text-center border border-gold-primary/50"
            >
              <CalendarCheck className="w-4 h-4 text-gold-light" />
              <span>Book Free Trial</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
