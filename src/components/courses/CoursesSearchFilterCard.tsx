"use client";

import React from "react";
import { Search, X, Award, RotateCcw, ChevronDown } from "lucide-react";

interface CoursesSearchFilterCardProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedLevel: string;
  onLevelSelect: (level: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onlySanad: boolean;
  onToggleSanad: () => void;
  totalCoursesCount: number;
  filteredCoursesCount: number;
  onResetFilters: () => void;
}

export const CoursesSearchFilterCard: React.FC<CoursesSearchFilterCardProps> = ({
  searchQuery,
  onSearchChange,
  selectedLevel,
  onLevelSelect,
  sortBy,
  onSortChange,
  onlySanad,
  onToggleSanad,
  totalCoursesCount,
  filteredCoursesCount,
  onResetFilters,
}) => {
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced", "Mastery"];
  const sortOptions = [
    { label: "Most Popular", value: "popular" },
    { label: "Highest Rated (5.0★)", value: "rating" },
    { label: "Most Lessons", value: "lessons" },
    { label: "Alphabetical (A-Z)", value: "title" },
  ];

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedLevel !== "All Levels" ||
    sortBy !== "popular" ||
    onlySanad;

  const handleSearchSubmit = () => {
    const el = document.getElementById("courses-catalog-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="courses-search-section"
      className="w-full relative"
    >
      {/* Sleek Royal Alabaster Glass Card with Specular Gold Rim and Integrated Search Button */}
      <div className="royal-card-light border border-gold-primary/45 rounded-3xl p-3.5 sm:p-5 lg:py-4.5 lg:px-6 relative overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg">
        {/* Specular Gold Top Edge Rim */}
        <div className="specular-rim-gold" />

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-4 relative z-10">
          
          {/* 1. Live Search Input with Integrated Action Search Button */}
          <div className="flex-1 relative min-w-0">
            <div className="bg-white/95 backdrop-blur-md border border-gold-primary/45 rounded-full flex items-center pl-3.5 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 sm:py-2 w-full min-h-[50px] sm:min-h-[54px] shadow-xs focus-within:border-gold-primary focus-within:ring-2 focus-within:ring-gold-primary/20 transition-all">
              <Search className="w-4 h-4 text-emerald shrink-0 ml-0.5 mr-2 sm:mr-3 opacity-90" />
              <input
                type="text"
                placeholder="Search courses by name, topic, or instructor (e.g. Noor Al-Bayan, Tajweed, Sanad)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit();
                  }
                }}
                className="w-full bg-transparent text-xs sm:text-sm text-navy-primary placeholder:text-graphite/50 outline-hidden font-semibold"
              />
              
              {/* Clear Search Input Button */}
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="p-1.5 rounded-full hover:bg-black/5 text-graphite/60 transition-colors cursor-pointer mr-1.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Integrated Search Button inside the Search Bar */}
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="btn-royal-gold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 text-navy-royal shadow-xs hover:shadow-md transition-all cursor-pointer shrink-0 border border-gold-light/60"
              >
                <Search className="w-3.5 h-3.5 text-navy-royal" />
                <span className="hidden xs:inline">Search</span>
              </button>
            </div>
          </div>

          {/* 2. Controls: Level + Sort + Sanad + Count */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 shrink-0">
            
            {/* Level Selector */}
            <div className="relative min-w-[130px] flex-1 sm:flex-initial">
              <select
                value={selectedLevel}
                onChange={(e) => onLevelSelect(e.target.value)}
                className="w-full min-h-[46px] appearance-none bg-white/95 border border-gold-primary/45 rounded-full px-4 py-2.5 sm:py-3 text-xs font-bold text-navy-primary outline-hidden cursor-pointer shadow-2xs hover:border-gold-primary focus:border-gold-primary transition-all pr-8"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gold-dark absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Selector */}
            <div className="relative min-w-[150px] flex-1 sm:flex-initial">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full min-h-[46px] appearance-none bg-white/95 border border-gold-primary/45 rounded-full px-4 py-2.5 sm:py-3 text-xs font-bold text-navy-primary outline-hidden cursor-pointer shadow-2xs hover:border-gold-primary focus:border-gold-primary transition-all pr-8"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gold-dark absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sanad Ijazah Toggle Button */}
            <button
              onClick={onToggleSanad}
              className={`min-h-[46px] px-4 py-2.5 sm:py-3 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs shrink-0 ${
                onlySanad
                  ? "btn-royal-gold text-navy-royal border border-gold-light/60 font-black shadow-sm"
                  : "bg-white/95 text-graphite/80 border border-gold-primary/40 hover:border-gold-primary hover:text-navy-primary"
              }`}
            >
              <Award className={`w-3.5 h-3.5 ${onlySanad ? "text-navy-royal" : "text-gold-primary"}`} />
              <span>Sanad Only</span>
            </button>

            {/* Reset Button (If active filters exist) */}
            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="min-h-[46px] min-w-[46px] p-2.5 sm:p-3 rounded-full bg-white/95 border border-gold-primary/40 text-graphite/70 hover:text-navy-primary hover:border-gold-primary transition-all cursor-pointer shadow-2xs flex items-center justify-center"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Result Count Badge */}
            <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-navy-primary px-3.5 py-2.5 rounded-full bg-white/95 border border-gold-primary/40 min-h-[46px] shadow-2xs">
              <span>Showing:</span>
              <span className="font-extrabold text-gold-dark">{filteredCoursesCount}</span>
              <span className="text-graphite/60">/ {totalCoursesCount}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
