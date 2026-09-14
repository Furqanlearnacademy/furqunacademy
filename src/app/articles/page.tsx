"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";
import { ArticlesHero } from "@/components/articles/ArticlesHero";
import { ArticlesSearchFilterCard } from "@/components/articles/ArticlesSearchFilterCard";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ArticleDetailModal } from "@/components/articles/ArticleDetailModal";
import { CoursesAdvisorBanner } from "@/components/courses/CoursesAdvisorBanner";
import { CallToAction } from "@/components/home/CallToAction";
import { EngravedDivider } from "@/components/ui/EngravedDivider";
import { ARTICLES_DATA, Article } from "@/data/articlesData";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Eye,
  CheckCircle2,
  GraduationCap,
  Award,
  PhoneCall,
  Search,
} from "lucide-react";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

export default function ArticlesPage() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = [
    "All",
    "Tajweed Masterclass",
    "Hifz & Memorization",
    "Quranic Sciences",
    "Family & Kids",
    "Pedagogy & Foundations",
    "Quranic Arabic & Grammar",
  ];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.arabicTitle.includes(searchQuery) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES_DATA[0];

  return (
    <div className="min-h-screen bg-transparent text-navy-primary flex flex-col justify-between selection:bg-gold-primary selection:text-white">
      {/* GLOBAL NAVBAR */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-[84px] sm:pt-[90px] lg:pt-[96px] pb-16 sm:pb-20 space-y-8 sm:space-y-12 overflow-x-clip">

        {/* ========================================================================= */}
        {/* 1. ARTICLES HERO SECTION (Big Luxury Card Spanning Width with CTAs) */}
        {/* ========================================================================= */}
        <ArticlesHero onOpenBooking={() => setBookingOpen(true)} />

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="pt-2 sm:pt-4 pb-2 sm:pb-4" />

        {/* ========================================================================= */}
        {/* 2. SEARCH & CATEGORY FILTER CARD (Liquid Glass Bar) */}
        {/* ========================================================================= */}
        <ArticlesSearchFilterCard
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          categories={categories}
          totalResults={filteredArticles.length}
        />

        {/* ========================================================================= */}
        {/* 3. FEATURED ARTICLE SPOTLIGHT (Only shown when not filtering or searching) */}
        {/* ========================================================================= */}
        {!searchQuery && selectedCategory === "All" && featuredArticle && (
          <section className="w-full max-w-[1400px] mx-auto layout-page-px">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: LUXURY_EASE }}
              className="royal-card-light specular-rim-gold p-6 sm:p-8 lg:p-10 rounded-3xl border border-gold-primary/35 relative overflow-hidden group shadow-md hover:shadow-xl transition-all"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
                {/* Left Side: Featured Metadata & Article Info (7 cols) */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0E493E] text-gold-bright text-xs font-black shadow-2xs inline-flex items-center gap-1.5 border border-gold-primary/40">
                      <Award className="w-3.5 h-3.5 text-gold-light shrink-0" />
                      <span>Editor's Choice Deep Dive</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/95 text-navy-primary border border-gold-primary/40 text-xs font-bold shadow-2xs">
                      {featuredArticle.category}
                    </span>
                  </div>

                  <Link href={`/articles/${featuredArticle.slug || featuredArticle.id}`} className="block group/title">
                    <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-black text-navy-primary leading-snug [text-shadow:0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(11,27,51,0.12)] group-hover/title:text-gold-dark transition-colors line-clamp-2">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-xl">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Author Bar */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gold-primary/40">
                      <Image
                        src={featuredArticle.author.avatar}
                        alt={featuredArticle.author.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-navy-primary block">
                        {featuredArticle.author.name}
                      </span>
                      <span className="text-[11px] text-graphite/60 block">
                        {featuredArticle.author.role} · {featuredArticle.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Read Deep Dive Trigger */}
                  <div className="pt-3">
                    <Link
                      href={`/articles/${featuredArticle.slug || featuredArticle.id}`}
                      className="btn-royal-gold px-7 py-3 text-xs sm:text-sm font-bold inline-flex items-center gap-2 cursor-pointer shadow-md hover:shadow-xl rounded-xl"
                    >
                      <span>Read Complete Masterclass</span>
                      <ArrowRight className="w-4 h-4 text-navy-primary" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Visual Artwork Frame (5 cols) */}
                <div className="lg:col-span-5 relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-gold-primary/35 shadow-md">
                  <Link href={`/articles/${featuredArticle.slug || featuredArticle.id}`} className="block w-full h-full relative group/img">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/70 via-transparent to-transparent pointer-events-none" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="pt-2 sm:pt-4 pb-2 sm:pb-4" />

        {/* ========================================================================= */}
        {/* 4. ARTICLES CATALOG SECTION (Grand Title + 3-Column Luxury Cards) */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1400px] mx-auto layout-page-px space-y-8 sm:space-y-10">
          
          {/* Grand Section Title */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.1, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
            className="text-center max-w-3xl mx-auto space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold-primary/40 shadow-2xs">
              <AcademicQalamIcon className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-xs font-bold text-gold-dark tracking-wide">
                Scholarly Research &amp; Publications
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight">
              <span className="engraved-emerald">Scholarly Library</span>
              <span className="block engraved-gold font-serif mt-1 sm:mt-1.5">
                Authentic Insights &amp; Guidance
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-graphite/80 leading-relaxed font-medium max-w-2xl mx-auto">
              Explore peer-reviewed publications and practical breakdowns written by accredited Al-Azhar instructors to deepen your Quranic knowledge.
            </p>
          </motion.div>

          {/* Grid or Empty State */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 space-y-4 rounded-3xl bg-white/85 border border-gold-primary/30 p-8 shadow-2xs max-w-xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-navy-primary">
                No matching articles found
              </h3>
              <p className="text-xs sm:text-sm text-graphite/70 max-w-md mx-auto">
                Try searching for broader keywords like "Tajweed", "Hifz", "Arabic", or reset your category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="liquid-glass-btn px-6 py-2.5 text-xs font-bold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
              {filteredArticles.map((art, idx) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  index={idx}
                  onOpenArticle={(selected) => router.push(`/articles/${selected.slug || selected.id}`)}
                />
              ))}
            </div>
          )}
        </section>

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="my-6 sm:my-10" />

        {/* ========================================================================= */}
        {/* 5. ACADEMIC CONSULTATION BANNER */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1400px] mx-auto layout-page-px">
          <CoursesAdvisorBanner onOpenBooking={() => setBookingOpen(true)} />
        </div>

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="my-6 sm:my-10" />

        {/* ========================================================================= */}
        {/* 6. CALL TO ACTION SECTION */}
        {/* ========================================================================= */}
        <div className="w-full">
          <CallToAction onOpenBooking={() => setBookingOpen(true)} />
        </div>

      </main>

      {/* ARTICLE READING DETAIL MODAL */}
      <ArticleDetailModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onOpenBooking={() => {
          setActiveArticle(null);
          setBookingOpen(true);
        }}
      />

      {/* GLOBAL BOOKING WIZARD MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
