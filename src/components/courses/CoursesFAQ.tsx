"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { ChevronDown, HelpCircle, BookOpen } from "lucide-react";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

export const CoursesFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      q: "How do 1-on-1 live classes work at Furqan Learn Academy?",
      a: "All classes are conducted live via high-definition video conferencing (Zoom or Google Meet). You and your dedicated Al-Azhar instructor share an interactive digital Mushaf, whiteboards, and audio playback tools. Every lesson is customized to your exact learning speed and schedule.",
    },
    {
      q: "Are all teachers certified from Al-Azhar University?",
      a: "Yes. 100% of our male and female instructors are graduates of prestigious Islamic faculties (such as Al-Azhar University's Faculty of Holy Quran & Islamic Studies, Language & Translation, or Sharia). They hold authenticated Ijazahs with continuous chains of transmission (Sanad) and have extensive experience teaching non-native speakers in fluent English.",
    },
    {
      q: "Can I choose my preferred class days and reschedule if needed?",
      a: "Absolutely. We offer 24/7 flexible scheduling across all timezones (US, UK, Canada, Australia, Europe, Gulf, etc.). You can choose the days and hours that suit you best, and easily reschedule lessons with 24 hours advance notice via your student portal.",
    },
    {
      q: "Do you have qualified female Quran teachers for sisters and young children?",
      a: "Yes, we have a dedicated team of certified female Al-Azhar scholars (Hafidhat with Ijazah) specialized in teaching sisters, girls, and young children in a comfortable, patient, and culturally respectful environment.",
    },
    {
      q: "What is the difference between a Course Diploma and an Ijazah with Sanad?",
      a: "A Course Diploma confirms that you completed the academic syllabus and passed tests for that specific level. An Ijazah with Sanad is the highest traditional certification in Islam, earned by reciting the entire 30 Juz from memory or Mushaf to a certified Sheikh, granting you an unbroken chain of transmission connected directly to the Prophet Muhammad (ﷺ) and formal authorization to teach.",
    },
    {
      q: "How does the Free Trial Class work?",
      a: "When you book a free trial class, you will be paired 1-on-1 with an Al-Azhar instructor for a 30-minute session. The instructor will assess your current level, demonstrate our teaching methodology, recommend the ideal course track, and answer all your questions. No credit card or commitment is required.",
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
      {/* Dark Theme Outer Shell */}
      <div className="w-full courses-faq-dark p-6 sm:p-10 lg:p-14 border border-gold-primary/35 space-y-8 relative">
        {/* Background Ambient Glow */}
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0E493E]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Header with Dark Theme Contrast */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="text-center max-w-2xl mx-auto space-y-3 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-primary/40 shadow-2xs">
            <AcademicQalamIcon className="w-4 h-4 text-gold-light" />
            <span className="text-xs font-bold text-gold-light tracking-wide">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Everything You Need To Know <br className="hidden sm:inline" />
            <span className="gold-foil-text font-serif mt-1 block">
              About Our Courses &amp; Enrollment
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#FAF6EE]/80 leading-relaxed font-medium">
            Clear answers to common questions about our Al-Azhar certified syllabus, scheduling, teachers, and trial classes.
          </p>
        </motion.div>

        {/* FAQ Accordion Items */}
        <div className="space-y-3 max-w-3xl mx-auto relative z-10 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: LUXURY_EASE,
                }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-br from-[#FAF6EE] to-[#F5ECE3] border-gold-primary shadow-md"
                    : "bg-white/90 border-gold-primary/30 hover:border-gold-primary/70 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-5 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-navy-primary leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-navy-primary text-gold-light rotate-180"
                        : "bg-navy-primary/10 text-navy-primary"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-graphite/85 leading-relaxed border-t border-gold-primary/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
