"use client";

import React from "react";
import { BookOpen, UserCheck, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter, LUXURY_EASE } from "@/components/ui/MotionWrappers";

// Custom Authentic Islamic Hexagonal Star Khatam Emblem SVG Component
const IslamicHexagonCrest = () => (
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 px-5 py-1.5 rounded-t-xl bg-white/70 backdrop-blur-xl border-t border-x border-emerald/20 shadow-xs">
    {/* Left Decorative Gold Accent Line */}
    <div className="w-5 h-[1.5px] bg-gradient-to-r from-transparent to-gold-primary" />

    {/* Authentic Islamic Hexagonal Khatam Vector SVG Emblem */}
    <svg className="w-4 h-4 text-emerald filter drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
      {/* Outer Hexagram / Rub el Hizb Geometric Points */}
      <polygon
        points="12,1.5 15.5,3.5 19.5,2 19.5,6.2 22.5,9 20.5,12.5 22.5,16 19.5,18.8 19.5,23 15.5,21.5 12,23.5 8.5,21.5 4.5,23 4.5,18.8 1.5,16 3.5,12.5 1.5,9 4.5,6.2 4.5,2 8.5,3.5"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Inner Precision Hexagon Ring */}
      <polygon
        points="12,5 17.5,8.2 17.5,14.8 12,18 6.5,14.8 6.5,8.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      {/* Inner Inverted Accent Hexagon */}
      <polygon
        points="12,7 15.5,9 15.5,13 12,15 8.5,13 8.5,9"
        fill="currentColor"
        fillOpacity="0.8"
      />
      {/* Core Center Dot */}
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
    </svg>

    {/* Right Decorative Gold Accent Line */}
    <div className="w-5 h-[1.5px] bg-gradient-to-l from-transparent to-gold-primary" />
  </div>
);

interface StatsBarProps {
  className?: string;
  isEmbedded?: boolean;
}

export const StatsBar: React.FC<StatsBarProps> = ({ className = "", isEmbedded = false }) => {
  const stats = [
    {
      icon: BookOpen,
      numericValue: 18,
      suffix: "+",
      label: "Accredited Courses",
      arabicLabel: "دورة معتمدة بالسند",
    },
    {
      icon: UserCheck,
      numericValue: 100,
      suffix: "+",
      label: "Al-Azhar Scholars",
      arabicLabel: "معلم ومجاز أزهري",
    },
    {
      icon: Users,
      numericValue: 500,
      suffix: "+",
      label: "Graduated Students",
      arabicLabel: "طالب متخرج ومتقن",
    },
    {
      icon: Globe,
      numericValue: 35,
      suffix: "+",
      label: "Global Countries",
      arabicLabel: "دولة حول العالم",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1, ease: LUXURY_EASE }}
      className={`w-full max-w-[1640px] mx-auto ${isEmbedded ? "" : "px-3 sm:px-6 lg:px-8 xl:px-12 pb-1 pt-0"} ${className}`}
    >
      {/* UNIFIED CARD SURFACE: Royal Alabaster Glass Card with Specular Gold Rim */}
      <div className="royal-card-light relative overflow-hidden group py-4 sm:py-4.5 lg:py-5 px-4 sm:px-6 lg:px-8 rounded-[22px]">
        {/* Specular Gold Top Edge Rim */}
        <div className="specular-rim-gold" />

        {/* 4 Stats Grid with Clean Vertical Inset Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-4 md:gap-y-0 relative z-10 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative flex items-center justify-start md:justify-center gap-3 sm:gap-4 px-2 sm:px-3 py-0.5 group/stat w-full"
              >
                {/* Clean Vertical Divider between stats */}
                {idx > 0 && (
                  <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-10 sm:h-11 items-center pointer-events-none">
                    <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold-primary/45 to-transparent" />
                  </div>
                )}

                {/* Stat Icon Box with Gold & Emerald Hue */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-gradient-to-br from-[#FAF5E6] to-white flex items-center justify-center shrink-0 border border-gold-primary/35 text-emerald transition-all duration-300 group-hover/stat:scale-105 group-hover/stat:border-gold-primary shadow-[0_2px_8px_rgba(212,175,55,0.1)]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald stroke-[2.2]" />
                </div>

                <div className="min-w-0 text-left">
                  {/* Engraved Metric Number */}
                  <div className="font-serif text-2xl sm:text-[27px] lg:text-[29px] font-extrabold engraved-number tracking-tight leading-none flex items-baseline gap-0.5">
                    <AnimatedCounter value={stat.numericValue} suffix="" duration={1.8} />
                    <span className="engraved-suffix text-lg sm:text-xl font-serif font-black">{stat.suffix}</span>
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-bold text-graphite mt-0.5 truncate [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#8C6214] truncate font-arabic">
                    {stat.arabicLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Elegant Gold Accent Line at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />

        {/* Authentic Islamic Hexagonal Crest Accent at Bottom Center */}
        <IslamicHexagonCrest />
      </div>
    </motion.div>
  );
};
