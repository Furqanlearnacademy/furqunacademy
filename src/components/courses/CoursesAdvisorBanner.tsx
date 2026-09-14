"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { Calendar, CheckCircle2, ArrowRight, CalendarCheck } from "lucide-react";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

interface CoursesAdvisorBannerProps {
  onOpenBooking: () => void;
}

export const CoursesAdvisorBanner: React.FC<CoursesAdvisorBannerProps> = ({ onOpenBooking }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "50px 0px 0px 0px" }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="w-full max-w-[1400px] mx-auto py-6 sm:py-8 relative"
    >
      <div className="w-full rounded-3xl royal-card-light p-6 sm:p-10 lg:p-12 border border-gold-primary/45 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-md">
        {/* Specular Gold Top Edge Rim */}
        <div className="specular-rim-gold" />

        {/* Background Decorative Gold Watermark */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Column: Text & Guarantees */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="space-y-4 max-w-2xl text-center lg:text-left relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-tint text-emerald text-xs font-bold border border-emerald/30 shadow-2xs">
            <AcademicQalamIcon className="w-3.5 h-3.5 text-emerald" />
            <span>Need Help Choosing The Right Program?</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold engraved-emerald leading-tight">
            Schedule a Free 1-on-1 Level Assessment with an Azhari Sheikh
          </h3>

          <p className="text-xs sm:text-sm text-graphite/85 leading-relaxed font-medium">
            In just 15 minutes, our certified scholar will evaluate your current reading, Tajweed, or Arabic proficiency and design a personalized learning plan matching your goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-navy-primary justify-center lg:justify-start">
              <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
              <span>Zero Commitment & 100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-navy-primary justify-center lg:justify-start">
              <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
              <span>Choose Your Preferred Date & Time</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-navy-primary justify-center lg:justify-start">
              <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
              <span>Male & Female Certified Tutors</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-navy-primary justify-center lg:justify-start">
              <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
              <span>Tailored Roadmap & Course Materials</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-End CTA Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="w-full lg:w-auto shrink-0 flex flex-col items-center relative z-10"
        >
          <div className="royal-card-dark text-white p-7 sm:p-8 lg:p-9 rounded-3xl border border-gold-primary/45 space-y-4 w-full sm:w-[360px] lg:w-[390px] xl:w-[420px] text-center relative overflow-hidden shadow-xl">
            {/* Ambient Gold Glow Inside Card */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-gold-primary/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-gold-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="w-13 h-13 rounded-2xl bg-gold-primary/20 text-gold-light mx-auto flex items-center justify-center border border-gold-primary/40 shadow-xs">
              <Calendar className="w-6 h-6 text-gold-primary" />
            </div>

            <div className="space-y-1.5">
              <h4 className="font-serif text-xl font-bold text-white tracking-wide">
                Book 1-on-1 Trial
              </h4>
              <p className="text-xs text-gold-light font-medium">
                100% Free Live Video Class
              </p>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full btn-royal-gold py-3.5 px-6 rounded-full text-xs sm:text-sm font-black flex items-center justify-center gap-2.5 border border-gold-light/60 cursor-pointer shadow-md hover:shadow-xl transition-all whitespace-nowrap text-navy-royal"
              >
                <CalendarCheck className="w-4 h-4 text-navy-royal shrink-0" />
                <span>Select Date &amp; Time</span>
                <ArrowRight className="w-4 h-4 text-navy-royal shrink-0" />
              </button>
            </div>

            <span className="text-[11px] text-white/60 block pt-0.5">
              No credit card required
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
