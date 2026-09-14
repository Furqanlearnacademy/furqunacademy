"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { ShieldCheck, BookOpen, Users, Heart, Award, CheckCircle2 } from "lucide-react";
import { AcademicQalamIcon, VerifiedQualityShieldIcon } from "@/components/ui/SemanticCustomIcons";

export const AboutValues: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      id: "sanad",
      icon: VerifiedQualityShieldIcon,
      title: "Authentic Sanad & Oral Chain",
      arabicTitle: "الأصالة والسند المتصل",
      desc: "Every letter taught preserves the unbroken chain of oral transmission reaching directly back to Prophet Muhammad ﷺ through certified Al-Azhar mashayikh.",
      badge: "Isnad Mutawatir",
    },
    {
      id: "pedagogy",
      icon: AcademicQalamIcon,
      title: "Al-Azhar Scholarly Standard",
      arabicTitle: "المنهج الأزهري الرصين",
      desc: "Systematic learning pathways structured by faculty from the historic Al-Azhar University, covering foundational Noor Al-Bayan through the Ten Mutawatirah Qira'at.",
      badge: "Azhar Syllabus",
    },
    {
      id: "talaqqi",
      icon: Users,
      title: "Personalized 1-on-1 Talaqqi",
      arabicTitle: "التلقي والمشافهة الفردية",
      desc: "Live, real-time mouth-to-ear articulation correction (Makharij & Sifat) tailored to your specific schedule, learning pace, and age group.",
      badge: "Direct Tutoring",
    },
    {
      id: "tadabbur",
      icon: Heart,
      title: "Character & Spiritual Tadabbur",
      arabicTitle: "التدبر وبناء الشخصية",
      desc: "Moving beyond mechanical recitation to foster genuine comprehension, spiritual tranquility, and practical living by noble Quranic ethics.",
      badge: "Holistic Growth",
    },
  ];

  return (
    <section aria-label="Our Core Values" className="w-full max-w-[1400px] mx-auto layout-page-px py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gold-primary/35 shadow-xs">
          <Award className="w-3.5 h-3.5 text-gold-primary" />
          <span className="text-xs font-bold text-gold-primary tracking-wide">
            Pillars of Excellence
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary">
          Our Four Pillars Of <br />
          <span className="gold-gradient-glow italic font-serif">Academic Distinction</span>
        </h2>
        <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-2xl mx-auto">
          The non-negotiable standards that define every lesson, every tutor interaction, and every certificate issued by Furqan Learn Academy.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {values.map((val, idx) => {
          const Icon = val.icon;
          return (
            <motion.div
              key={val.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3 }
                  : { duration: 0.8, delay: idx * 0.1, ease: LUXURY_EASE }
              }
              className="bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] rounded-2xl p-6 flex flex-col justify-between group hover:border-gold-primary transition-all duration-400 border border-gold-primary/40 shadow-xs hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white via-[#FAF6EE] to-[#F3EACF] text-navy-primary flex items-center justify-center border border-gold-primary/40 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-gold-dark stroke-[2.2]" />
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-gold-primary/15 text-navy-primary border border-gold-primary/30 shadow-2xs">
                    {val.badge}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-gold-dark block font-arabic mb-1">
                  {val.arabicTitle}
                </span>

                <h3 className="font-serif text-lg font-bold text-navy-primary mb-2 leading-snug">
                  {val.title}
                </h3>

                <p className="text-xs text-graphite/80 leading-relaxed">
                  {val.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gold-primary/15 flex items-center gap-1.5 text-[11px] font-bold text-gold-dark">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                <span>Verified Quality Promise</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
