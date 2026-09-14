"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import {
  IslamicCalligraphyQuoteIcon,
  QualityScoreBadgeIcon,
} from "./PopularCoursesIcons";
import { IslamicRosetteAccentIcon } from "@/components/ui/SemanticCustomIcons";

export const StudentReview: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      id: 1,
      quote:
        "Furqan Learn Academy changed my life! The Al-Azhar teachers are patient and supportive. I can now recite with proper Tajweed.",
      name: "Aisha Khan",
      location: "United States",
      flag: "🇺🇸",
      avatar: "/images/avatars/avatar-4.webp",
      course: "Tajweed Mastery",
      status: "Verified Graduate",
    },
    {
      id: 2,
      quote:
        "As a working mother, 1-on-1 scheduling is a blessing. My son memorized Juz Amma in just 3 months!",
      name: "Fatima Al-Sayed",
      location: "United Kingdom",
      flag: "🇬🇧",
      avatar: "/images/avatars/review-2.webp",
      course: "Kids Quran",
      status: "Parent of Student",
    },
    {
      id: 3,
      quote:
        "The AI Tajweed Assistant gives instant feedback. Truly an academic experience unmatched anywhere.",
      name: "Tariq Mansoor",
      location: "Canada",
      flag: "🇨🇦",
      avatar: "/images/avatars/review-3.webp",
      course: "Quranic Arabic",
      status: "Active Student",
    },
    {
      id: 4,
      quote:
        "Earning my Ijazah with a connected Sanad was my lifelong dream. The Azhari scholars guided me with precision.",
      name: "Omar Al-Farsi",
      location: "Australia",
      flag: "🇦🇺",
      avatar: "/images/avatars/review-1.webp",
      course: "Sanad Ijazah",
      status: "Certified Ijazah",
    },
  ];

  // Autoplay slider interval (4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const current = reviews[currentIdx];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="bg-gradient-to-b from-[#082922] via-[#051C17] to-[#031410] backdrop-blur-xl rounded-3xl p-4 sm:p-5 py-5 border border-gold-primary/45 shadow-[0_12px_36px_rgba(0,0,0,0.4)] relative flex flex-col justify-between overflow-hidden text-white h-full group hover:border-gold-primary/70 transition-all duration-300">
      {/* Top Ambient Gold Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent pointer-events-none" />

      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between text-gold-primary mb-2">
          <div className="flex items-center gap-1.5">
            <IslamicCalligraphyQuoteIcon className="w-4 h-4 text-gold-primary opacity-90 filter drop-shadow-xs" />
            <span className="text-[10px] font-black uppercase tracking-wider text-gold-light">
              Student Story
            </span>
          </div>

          {/* Verified Quality Seal */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold-primary/20 border border-gold-primary/45 text-gold-light text-[9.5px] font-extrabold shadow-2xs">
            <CheckCircle2 className="w-3 h-3 text-gold-primary" />
            <span>Verified</span>
          </div>
        </div>

        {/* Dynamic Quote Text */}
        <div className="p-3 rounded-2xl bg-navy-royal/60 border border-gold-primary/25 backdrop-blur-sm">
          <p className="font-serif text-[11.5px] text-white/95 italic leading-relaxed min-h-[52px] transition-all duration-500 line-clamp-3">
            "{current.quote}"
          </p>
          <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-gold-primary/15 text-[9.5px] text-gold-light/90 font-bold">
            <span>{current.course}</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
              {current.status}
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING 3D HOLY QURAN ON ORNATE WOODEN REHAL */}
      <div className="my-auto py-2 sm:py-3 flex flex-col items-center justify-center relative select-none">
        {/* Divine Golden Aura Glow Behind Quran */}
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-tr from-gold-primary/20 via-gold-light/15 to-transparent rounded-full blur-xl pointer-events-none -z-0" />
        
        {/* Subtle Islamic Rosette Accent */}
        <div className="absolute -top-1 -right-2 w-8 h-8 text-gold-light/40 pointer-events-none">
          <IslamicRosetteAccentIcon className="w-4 h-4 text-gold-light/60" />
        </div>

        {/* Floating 3D Quran Artwork */}
        <div className="relative z-10 animate-float-quran flex items-center justify-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500">
          <Image
            src="/images/quran-stand.webp"
            alt="Holy Quran on Wooden Stand"
            width={208}
            height={160}
            className="w-40 sm:w-48 md:w-52 h-auto max-h-[140px] sm:max-h-[160px] object-contain"
          />
        </div>

        {/* Gentle Soft Shadow Under Rehal */}
        <div className="w-28 sm:w-36 h-3 bg-black/40 rounded-full blur-md -mt-1 pointer-events-none" />
      </div>

      {/* Footer Info & Controls */}
      <div className="pt-2.5 border-t border-gold-primary/30 flex items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2 min-w-0">
          <Image
            src={current.avatar}
            alt={current.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-gold-primary/60 shadow-md shrink-0"
          />
          <div className="min-w-0">
            <div className="text-xs font-extrabold text-white flex items-center gap-1 truncate">
              <span className="truncate">{current.name}</span>
              <span className="text-xs shrink-0">{current.flag}</span>
            </div>
            <div className="text-[9.5px] font-semibold text-gold-light/80 truncate">
              {current.location}
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            className="w-6 h-6 rounded-full bg-navy-royal/70 hover:btn-royal-gold text-gold-light hover:text-navy-royal flex items-center justify-center transition-all cursor-pointer border border-gold-primary/40 shadow-xs"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1 px-0.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx ? "bg-gold-primary w-3" : "bg-white/30 w-1"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-6 h-6 rounded-full bg-navy-royal/70 hover:btn-royal-gold text-gold-light hover:text-navy-royal flex items-center justify-center transition-all cursor-pointer border border-gold-primary/40 shadow-xs"
            aria-label="Next review"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
