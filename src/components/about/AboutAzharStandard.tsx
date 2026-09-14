"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Award,
  ArrowRight,
  FileCheck,
  Search,
} from "lucide-react";
import {
  VerifiedQualityShieldIcon,
  AcademicQalamIcon,
  BestValueRibbonIcon,
} from "@/components/ui/SemanticCustomIcons";

export const AboutAzharStandard: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const vettingSteps = [
    {
      step: "01",
      title: "Al-Azhar University Degree Verification",
      desc: "All scholars hold verified honors degrees from Quranic Sciences, Usul Al-Din, or Arabic faculties.",
    },
    {
      step: "02",
      title: "Live Tajweed & Qira'at Auditions",
      desc: "Multi-stage live oral examinations assessing Makharaj, Sifat, and unbroken Sanad transmission.",
    },
    {
      step: "03",
      title: "Classical Fluency & English Command",
      desc: "Mastery of pure Classical Arabic (Fusha) paired with fluent English for international students.",
    },
    {
      step: "04",
      title: "Empathetic Pedagogy & Psychology",
      desc: "Certified training in child psychology, modern digital teaching tools, and positive encouragement.",
    },
    {
      step: "05",
      title: "Quarterly Senior Quality Supervision",
      desc: "Regular academic supervision and recorded lesson evaluations ensuring 99.8% excellence.",
    },
  ];

  return (
    <section aria-label="Al-Azhar Quality Standard" className="w-full max-w-[1400px] mx-auto layout-page-px py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

        {/* LEFT COLUMN: 5-Stage Vetting Process (7 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.3 }
              : { duration: 0.9, ease: LUXURY_EASE }
          }
          className="lg:col-span-7 flex flex-col justify-between space-y-5"
        >
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gold-primary/35 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-primary" />
              <span className="text-xs font-bold text-gold-primary tracking-wide">
                Rigorous Faculty Vetting
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-primary">
              The Al-Azhar Standard: <br />
              <span className="gold-gradient-glow italic font-serif">Only The Top 1.5% Accepted</span>
            </h2>
            <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-xl">
              We uphold the most stringent faculty vetting process in the digital Islamic education sphere. Our scholars combine deep scholarly mastery with heartfelt pedagogical warmth.
            </p>
          </div>

          {/* 5 Steps List - Uniform Equal Heights & Warm Luxury Gradient */}
          <div className="space-y-2.5 pt-1 flex flex-col justify-between flex-1">
            {vettingSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] rounded-xl p-3 sm:p-3.5 flex items-center gap-3.5 border border-gold-primary/40 hover:border-gold-primary transition-all duration-300 shadow-2xs hover:shadow-xs min-h-[72px]"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-primary text-gold-light text-xs font-bold font-serif flex items-center justify-center shrink-0 shadow-2xs">
                  {s.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-navy-primary leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-graphite/75 leading-tight mt-0.5">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Official Accreditation Card (5 cols) - STRICT LUXURY NAVY THEME */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.3 }
              : { duration: 0.9, delay: 0.15, ease: LUXURY_EASE }
          }
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="rounded-3xl p-7 sm:p-9 royal-card-dark text-white border-2 border-gold-primary/50 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full space-y-6">
            {/* Background Image Texture & Ambient Gold Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#C7A04B_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-gold-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-gold-primary/60 text-gold-light flex items-center justify-center shadow-lg">
                  <VerifiedQualityShieldIcon className="w-8 h-8 text-gold-primary" />
                </div>
                <span className="text-[10.5px] font-extrabold px-3.5 py-1 rounded-full bg-gold-primary/25 text-gold-light border border-gold-primary/50 uppercase tracking-wider shadow-xs">
                  Accredited Sanad
                </span>
              </div>

              {/* Title */}
              <div>
                <span className="text-xs font-bold text-gold-primary font-arabic block mb-1">
                  الاعتماد الأكاديمي والسند المتصل
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Official Academic Accreditation & Ijazah
                </h3>
              </div>

              {/* Accreditation Bullet Points */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                  <span className="text-white/90">Graduates receive authentic Ijazah with unbroken Sanad</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                  <span className="text-white/90">Curricula reviewed and endorsed by senior Azhari scholars</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                  <span className="text-white/90">Digital QR Verification System on all diplomas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                  <span className="text-white/90">Recognized by international Islamic centers and schools</span>
                </li>
              </ul>
            </div>

            {/* Bottom Verification Link */}
            <div className="relative z-10 pt-5 border-t border-gold-primary/35">
              <Link
                href="/certificates"
                className="liquid-glass-btn-navy shimmer-gold-sweep w-full py-3.5 px-5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 rounded-xl shadow-lg border border-gold-primary/60 text-white cursor-pointer hover:bg-gold-primary hover:text-navy-primary transition-all"
              >
                <Search className="w-4 h-4 text-gold-light shrink-0" />
                <span>Verify Student Certificate System</span>
                <ArrowRight className="w-4 h-4 text-gold-light shrink-0" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
