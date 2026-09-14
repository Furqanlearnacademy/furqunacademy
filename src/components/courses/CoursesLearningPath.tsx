"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { BookOpen, ShieldCheck, ArrowRight, CheckCircle2, CalendarCheck } from "lucide-react";
import { AcademicQalamIcon, VerifiedQualityShieldIcon } from "@/components/ui/SemanticCustomIcons";

interface CoursesLearningPathProps {
  onOpenBooking: () => void;
}

export const CoursesLearningPath: React.FC<CoursesLearningPathProps> = ({ onOpenBooking }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      stepNumber: "Phase 1",
      title: "Foundational Literacy",
      arabicTitle: "التأسيس وقراءة الحروف",
      category: "Noor Al-Bayan & Phonetics",
      duration: "1 - 3 Months",
      description: "Master Arabic letter shapes, vowel rules (Harakat), Sukoon, and basic reading of short verses with zero prior knowledge.",
      keyMilestone: "Fluent Mushaf reading with basic pronunciation accuracy",
      icon: AcademicQalamIcon,
    },
    {
      stepNumber: "Phase 2",
      title: "Tajweed & Tarteel Mastery",
      arabicTitle: "التجويد وأحكام الترتيل",
      category: "Theoretical & Applied Tajweed",
      duration: "3 - 6 Months",
      description: "Learn and apply Nun Sakinah, Meem Sakinah, Mudood (prolongations), Makharij, and Sifat to recite with melodious precision.",
      keyMilestone: "Matn Tuhfat Al-Atfal or Al-Jazariyyah certification",
      icon: VerifiedQualityShieldIcon,
    },
    {
      stepNumber: "Phase 3",
      title: "Hifz & Deep Tafseer",
      arabicTitle: "الحفظ والتدبر والتفسير",
      category: "1-on-1 Memorization Track",
      duration: "6 - 18 Months",
      description: "Customized daily memorization with long-term retention systems (Muraja'ah) alongside thematic Tafseer and Quranic Arabic.",
      keyMilestone: "Full or partial Quran memorization with permanent retention",
      icon: BookOpen,
    },
    {
      stepNumber: "Phase 4",
      title: "Continuous Sanad & Ijazah",
      arabicTitle: "الإجازة بالسند المتصل",
      category: "Sanad to Prophet Muhammad (ﷺ)",
      duration: "6 - 12 Months",
      description: "Recite the full 30 Juz to a certified Grand Sheikh, earning an authentic continuous chain of transmission and teaching authorization.",
      keyMilestone: "Official Al-Azhar Stamped Ijazah Diploma",
      icon: ShieldCheck,
    },
  ];

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "50px 0px 0px 0px" }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="w-full max-w-[1400px] mx-auto py-8 sm:py-12 relative"
    >
      {/* Outer Card without harsh black bottom shadows */}
      <div className="w-full courses-hero-glass p-6 sm:p-10 lg:p-14 border border-gold-primary/35 space-y-8 relative">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold-primary/40 shadow-2xs">
            <AcademicQalamIcon className="w-4 h-4 text-gold-dark" />
            <span className="text-xs font-bold text-gold-dark tracking-wide">
              Academic Progression Roadmap
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
            <span className="engraved-emerald">From First Arabic Letter</span> <br className="hidden sm:inline" />
            <span className="engraved-gold font-serif mt-1 inline-block">
              To Official Sanad Ijazah
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed font-medium">
            Our structured 4-phase academic framework guides you from complete beginner to accredited Quran teacher with continuous Sanad.
          </p>
        </motion.div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.stepNumber}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 0.8, delay: idx * 0.12, ease: LUXURY_EASE }
                }
                className="bg-navy-primary text-white p-5 sm:p-6 rounded-3xl border border-gold-primary/40 relative flex flex-col justify-between group hover:border-gold-primary/80 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
              >
                {/* Top Subtle Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent pointer-events-none" />

                {/* Ambient Gold Glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gold-primary/10 rounded-full blur-xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Top Row: Phase Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-gold-primary/20 border border-gold-primary/40 text-gold-light text-xs font-extrabold shadow-2xs">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-gold-primary/40 flex items-center justify-center text-gold-light shadow-2xs group-hover:scale-110 group-hover:bg-gold-primary/20 transition-all">
                      <Icon className="w-5 h-5 text-gold-primary stroke-[2]" />
                    </div>
                  </div>

                  {/* Title and Category */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg sm:text-xl font-black text-white group-hover:text-gold-light transition-colors [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                      {step.title}
                    </h3>
                    <span className="inline-block text-[11px] font-bold text-gold-light/90 bg-white/10 px-2.5 py-0.5 rounded-full mt-1 border border-white/10">
                      {step.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Milestone Badge */}
                <div className="mt-5 pt-3 border-t border-gold-primary/25 space-y-1 relative z-10">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-gold-light">
                    Key Outcome:
                  </span>
                  <div className="flex items-start gap-1.5 text-xs font-bold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0 mt-0.5" />
                    <span>{step.keyMilestone}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-gold-primary/30"
        >
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-navy-primary">
              Not sure which phase matches your current skills?
            </h4>
            <p className="text-xs text-graphite/70">
              Our scholars conduct a free 15-minute 1-on-1 placement assessment to customize your track.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="liquid-glass-btn-navy shimmer-gold-sweep px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer shrink-0 shadow-xs hover:shadow-md border border-gold-primary/50"
          >
            <CalendarCheck className="w-4 h-4 text-gold-light" />
            <span>Book Placement Assessment</span>
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
};
