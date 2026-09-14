"use client";

import React from "react";
import { Search, X, SlidersHorizontal, ArrowUpDown, ShieldCheck } from "lucide-react";
import { COURSE_CATEGORIES } from "@/data/coursesData";
import {
  AllFeaturedIcon,
  QuranReadingIcon,
  TajweedVoiceIcon,
  ArabicCalligraphyIcon,
  IslamicStudiesIcon,
  AzharSanadBadgeIcon,
} from "@/components/home/PopularCoursesIcons";
import { GraduationCap } from "lucide-react";

interface CoursesFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  selectedLevel: string;
  onLevelSelect: (lvl: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onlySanad: boolean;
  onToggleSanad: () => void;
  totalCoursesCount: number;
  filteredCoursesCount: number;
  onResetFilters: () => void;
  categoryCounts: Record<string, number>;
}

export const CoursesFilterBar: React.FC<CoursesFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  selectedLevel,
  onLevelSelect,
  sortBy,
  onSortChange,
  onlySanad,
  onToggleSanad,
  totalCoursesCount,
  filteredCoursesCount,
  onResetFilters,
  categoryCounts,
}) => {
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced", "Kids"];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "Quran Reading":
        return <QuranReadingIcon className="w-4 h-4" />;
      case "Tajweed":
        return <TajweedVoiceIcon className="w-4 h-4" />;
      case "Quran Memorization":
        return <AzharSanadBadgeIcon className="w-4 h-4" />;
      case "Arabic Language":
        return <ArabicCalligraphyIcon className="w-4 h-4" />;
      case "Islamic Studies":
        return <IslamicStudiesIcon className="w-4 h-4" />;
      case "Kids Programs":
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <AllFeaturedIcon className="w-4 h-4" />;
    }
  };

  const isFiltered =
    searchQuery.trim().length > 0 ||
    selectedCategory !== "All" ||
    selectedLevel !== "All Levels" ||
    onlySanad ||
    sortBy !== "popular";

  return (
    <div id="courses-filter-section" className="w-full max-w-[1400px] mx-auto space-y-4">
      {/* Sticky High-Transparency Glass Filter Container */}
      <div className="courses-filter-sticky p-4 sm:p-5 lg:p-6 space-y-4 backdrop-blur-2xl">
        {/* Top Row: Search Input + Sorting + Sanad Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Live Search Input */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="courses-search-bar flex items-center px-4 py-2.5 w-full">
              <Search className="w-4 h-4 text-gold-dark shrink-0 mr-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search courses by title, Arabic terms, topics, or Azhari teacher..."
                className="w-full bg-transparent text-xs sm:text-sm text-navy-primary placeholder:text-graphite/50 focus:outline-hidden font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="text-graphite/40 hover:text-navy-primary p-1 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Level Filter Dropdown */}
          <div className="md:col-span-3 lg:col-span-2.5 flex items-center">
            <div className="relative w-full">
              <select
                value={selectedLevel}
                onChange={(e) => onLevelSelect(e.target.value)}
                className="w-full bg-white/90 backdrop-blur-md text-navy-primary text-xs sm:text-sm font-semibold py-2.5 px-3.5 pr-8 rounded-full border border-gold-primary/35 shadow-xs focus:outline-hidden focus:border-gold-primary cursor-pointer appearance-none"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    Level: {lvl}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gold-dark">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Sort Selector Dropdown */}
          <div className="md:col-span-3 lg:col-span-2.5 flex items-center">
            <div className="relative w-full">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full bg-white/90 backdrop-blur-md text-navy-primary text-xs sm:text-sm font-semibold py-2.5 px-3.5 pr-8 rounded-full border border-gold-primary/35 shadow-xs focus:outline-hidden focus:border-gold-primary cursor-pointer appearance-none"
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="rating">Sort: Highest Rated</option>
                <option value="lessons">Sort: Most Lessons</option>
                <option value="title">Sort: Title (A-Z)</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gold-dark">
                <ArrowUpDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
          {COURSE_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] ?? 0;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className={`courses-chip-btn px-4 py-2 text-xs sm:text-sm flex items-center gap-2 shrink-0 cursor-pointer transition-all ${
                  isActive ? "courses-chip-btn-active" : ""
                }`}
              >
                <span className={isActive ? "text-gold-light" : "text-gold-dark"}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-gold-light"
                      : "bg-navy-primary/10 text-navy-primary"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Row: Sanad Toggle Switch + Active Filters Summary */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gold-primary/20 text-xs text-graphite">
          <div className="flex items-center gap-3">
            {/* Sanad Ijazah Fast Toggle */}
            <button
              onClick={onToggleSanad}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all cursor-pointer font-bold ${
                onlySanad
                  ? "bg-emerald text-white border-emerald shadow-xs"
                  : "bg-white/80 backdrop-blur-md text-graphite hover:bg-white border-gold-primary/30"
              }`}
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${onlySanad ? "text-white" : "text-emerald"}`} />
              <span>Official Sanad Ijazah Only</span>
            </button>

            <span className="text-graphite/60 hidden sm:inline">|</span>

            {/* Results Count */}
            <div className="font-semibold text-navy-primary">
              Showing <span className="font-bold text-gold-dark">{filteredCoursesCount}</span> of {totalCoursesCount} Academic Programs
            </div>
          </div>

          {/* Clear Filters Button */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-gold-dark hover:text-navy-primary font-bold hover:underline cursor-pointer transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
