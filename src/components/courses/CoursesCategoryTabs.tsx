"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { COURSE_CATEGORIES } from "@/data/coursesData";

interface CoursesCategoryTabsProps {
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  categoryCounts: Record<string, number>;
}

export const CoursesCategoryTabs: React.FC<CoursesCategoryTabsProps> = ({
  selectedCategory,
  onCategorySelect,
  categoryCounts,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : { duration: 0.8, delay: 0.1, ease: LUXURY_EASE }
      }
      className="w-full max-w-[1400px] mx-auto py-1"
    >
      {/* Category Pills / Chips Container */}
      <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
        {COURSE_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className={`courses-chip-btn px-4 py-2 text-xs font-bold shrink-0 inline-flex items-center gap-2 cursor-pointer transition-all duration-200 ${
                isActive ? "courses-chip-btn-active scale-102" : "hover:border-gold-primary"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                  isActive
                    ? "bg-gold-primary text-navy-primary font-extrabold"
                    : "bg-black/5 text-graphite/80"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};
