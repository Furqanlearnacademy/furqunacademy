"use client";

import React from "react";
import { Search, X, Filter, BookOpen } from "lucide-react";

interface ArticlesSearchFilterCardProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  categories: string[];
  totalResults: number;
}

export const ArticlesSearchFilterCard: React.FC<ArticlesSearchFilterCardProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  categories,
  totalResults,
}) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto layout-page-px">
      <div className="royal-card-light specular-rim-gold border border-gold-primary/45 rounded-3xl p-4 sm:p-6 lg:py-5 lg:px-7 relative overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg space-y-4 sm:space-y-5">
        
        {/* Top Controls: Search Input Bar + Results Counter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-10">
          {/* Live Search Input with Integrated Clear Button */}
          <div className="flex-1 relative min-w-0">
            <div className="bg-white/95 backdrop-blur-md border border-gold-primary/45 rounded-full flex items-center pl-3.5 sm:pl-4 pr-2 py-1.5 sm:py-2 w-full min-h-[50px] sm:min-h-[54px] shadow-xs focus-within:border-gold-primary focus-within:ring-2 focus-within:ring-gold-primary/20 transition-all">
              <Search className="w-4 h-4 text-emerald shrink-0 ml-0.5 mr-2 sm:mr-3 opacity-90" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search articles by topic, Tajweed rule, Surah, or scholar..."
                className="w-full bg-transparent text-xs sm:text-sm text-navy-primary placeholder:text-graphite/50 outline-hidden font-semibold"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="p-1.5 rounded-full hover:bg-black/5 text-graphite/60 transition-colors cursor-pointer mr-1.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results Badge */}
          <div className="shrink-0 flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-full bg-white/90 border border-gold-primary/40 text-navy-primary text-xs font-bold shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span className="whitespace-nowrap">
              {totalResults} {totalResults === 1 ? "Article" : "Articles"} Found
            </span>
          </div>
        </div>

        {/* Category Filter Pills / Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategorySelect(cat)}
                className={`courses-chip-btn px-4 py-2 text-xs font-bold shrink-0 cursor-pointer transition-all duration-200 ${
                  isActive ? "courses-chip-btn-active scale-102" : "hover:border-gold-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
