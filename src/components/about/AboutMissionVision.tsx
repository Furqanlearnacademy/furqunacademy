"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { Target, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { AcademicQalamIcon, VerifiedQualityShieldIcon } from "@/components/ui/SemanticCustomIcons";

export const AboutMissionVision: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      id: "mission",
      icon: Target,
      tag: "Academic Mission",
      arabicTag: "رسالتنا الأكاديمية",
      title: "Authentic Divine Learning For Every Home",
      desc: "To deliver uncompromising, authentic Quranic and Arabic education to Muslims worldwide through individual Talaqqi, combining historical Al-Azhar methodology with modern virtual classrooms.",
      highlights: [
        "Direct 1-on-1 personalized Talaqqi",
        "Rigorous Makharaj & Tajweed precision",
        "Flexible global time-zone scheduling",
      ],
      badgeColor: "from-gold-primary/20 via-gold-light/20 to-gold-primary/10 text-gold-dark border-gold-primary/35",
      accentGlow: "bg-gold-primary/10",
    },
    {
      id: "vision",
      icon: Compass,
      tag: "Global Vision",
      arabicTag: "رؤيتنا المستقبلية",
      title: "The World's Trusted Quranic Sanctuary",
      desc: "To stand as the preeminent international institution for sacred Islamic sciences, nurturing a generation of learners who recite with beauty, memorize with confidence, and embody Quranic character.",
      highlights: [
        "Globally recognized Ijazah certification",
        "Empathetic, child-friendly Azhari tutors",
        "Lifelong connection with the Book of Allah",
      ],
      badgeColor: "from-navy-primary/15 via-emerald-deep/10 to-navy-primary/15 text-navy-primary border-navy-primary/30",
      accentGlow: "bg-navy-primary/10",
    },
    {
      id: "philosophy",
      icon: HeartHandshake,
      tag: "Pedagogical Philosophy",
      arabicTag: "فلسفتنا التعليمية",
      title: "Mastery Over Mass-Production",
      desc: "We believe true knowledge is transmitted from heart to heart. Every student learns at their individual pace with dedicated mentors who prioritize spiritual warmth and pedagogical patience.",
      highlights: [
        "Customized curriculum progression",
        "Positive reinforcement & motivation",
        "Comprehensive Tadabbur (understanding)",
      ],
      badgeColor: "from-emerald/15 via-emerald/20 to-emerald/10 text-emerald-800 border-emerald/30",
      accentGlow: "bg-emerald/10",
    },
  ];

  return (
    <section aria-label="Our Mission and Vision" className="w-full max-w-[1400px] mx-auto layout-page-px py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gold-primary/35 shadow-xs">
          <Target className="w-3.5 h-3.5 text-gold-primary" />
          <span className="text-xs font-bold text-gold-primary tracking-wide">
            Institutional Foundation
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary">
          Guiding Principles Of <br />
          <span className="gold-gradient-glow italic font-serif">Furqan Learn Academy</span>
        </h2>
        <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-2xl mx-auto">
          Founded upon centuries of Al-Azhar scholarship, our institution is guided by enduring values of sincerity, academic rigor, and compassionate instruction.
        </p>
      </div>

      {/* 3 Pillar Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3 }
                  : { duration: 0.8, delay: idx * 0.15, ease: LUXURY_EASE }
              }
              className="bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-gold-primary transition-all duration-500 shadow-xs hover:shadow-xl hover:-translate-y-1 border border-gold-primary/40"
            >
              {/* Card Glow */}
              <div className={`absolute -top-12 -right-12 w-44 h-44 ${pillar.accentGlow} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700`} />

              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] text-navy-primary flex items-center justify-center border border-gold-primary/40 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-gold-dark stroke-[2.2]" />
                  </div>
                  <span className={`text-[10.5px] font-extrabold px-3 py-1 rounded-full border bg-gradient-to-r ${pillar.badgeColor} shadow-2xs`}>
                    {pillar.tag}
                  </span>
                </div>

                {/* Arabic Sub-tag */}
                <span className="text-[11px] font-bold text-gold-dark block font-arabic mb-1">
                  {pillar.arabicTag}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-primary mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-gold-primary/20 space-y-2">
                {pillar.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-navy-primary font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
