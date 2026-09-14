"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { Milestone, CheckCircle2, TrendingUp, Calendar } from "lucide-react";
import { AcademicQalamIcon, VerifiedQualityShieldIcon } from "@/components/ui/SemanticCustomIcons";

export const AboutMilestones: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const milestones = [
    {
      year: "2018",
      title: "Foundation & First Cohort",
      desc: "Established in Cairo by senior Al-Azhar University faculty with an inaugural cohort of 50 dedicated students.",
      badge: "Inception",
    },
    {
      year: "2020",
      title: "Global Digital Expansion",
      desc: "Transitioned to high-definition 1-on-1 virtual classrooms, expanding across 35 countries in Europe, North America, and Gulf.",
      badge: "35+ Countries",
    },
    {
      year: "2022",
      title: "Ijazah & Qira'at Department",
      desc: "Launched official Sanad certification and Advanced 10 Qira'at tracks under senior Azhari scholars of recitation.",
      badge: "Sanad Accreditation",
    },
    {
      year: "2024",
      title: "15,000+ Teaching Hours Milestone",
      desc: "Celebrated over 15,000 live 1-on-1 hours taught, reaching 500+ enrolled students across 35+ countries and 100+ certified scholars.",
      badge: "Major Milestone",
    },
    {
      year: "2026",
      title: "Next-Gen Academic Sanctuary",
      desc: "Unveiled our ultra-luxury global learning platform with seamless advisor booking and instant certificate verification.",
      badge: "Present Day",
    },
  ];

  return (
    <section aria-label="Our Journey and Milestones" className="w-full max-w-[1400px] mx-auto layout-page-px py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gold-primary/35 shadow-xs">
          <Calendar className="w-3.5 h-3.5 text-gold-primary" />
          <span className="text-xs font-bold text-gold-primary tracking-wide">
            Our Historic Journey
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary">
          From A Cairo Vision To <br />
          <span className="gold-gradient-glow italic font-serif">Global Quranic Impact</span>
        </h2>
        <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-2xl mx-auto">
          A track record of continuous growth, unwavering adherence to tradition, and profound dedication to Quranic students worldwide.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {milestones.map((m, idx) => (
          <motion.div
            key={m.year}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { duration: 0.7, delay: idx * 0.1, ease: LUXURY_EASE }
            }
            className="bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] rounded-2xl p-5 flex flex-col justify-between border border-gold-primary/40 hover:border-gold-primary transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-serif text-2xl font-black text-navy-primary tracking-tight">
                  {m.year}
                </span>
                <span className="text-[9.5px] font-extrabold px-2 py-0.5 rounded-full bg-gold-primary/15 text-navy-primary border border-gold-primary/30">
                  {m.badge}
                </span>
              </div>

              <h3 className="font-serif text-sm sm:text-base font-bold text-navy-primary mb-2 leading-snug">
                {m.title}
              </h3>

              <p className="text-[11px] sm:text-xs text-graphite/75 leading-relaxed">
                {m.desc}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-gold-primary/15 flex items-center gap-1.5 text-[10.5px] font-bold text-gold-dark">
              <CheckCircle2 className="w-3 h-3 text-emerald shrink-0" />
              <span>Historic Milestone</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
