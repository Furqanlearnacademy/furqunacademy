"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  ARTICLES_DATA,
} from "@/data/articlesData";
import { ALL_COURSES } from "@/data/coursesData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";
import { EngravedDivider } from "@/components/ui/EngravedDivider";
import { ArticleCard } from "@/components/articles/ArticleCard";
import {
  Clock,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  GraduationCap,
  PhoneCall,
  Share2,
  Eye,
  Calendar,
  Copy,
  CheckCheck,
  MessageCircle,
} from "lucide-react";
import {
  AcademicQalamIcon,
  CoreWisdomInsightIcon,
} from "@/components/ui/SemanticCustomIcons";

interface ArticleClientViewProps {
  initialSlug?: string;
}

export function ArticleClientView({ initialSlug }: ArticleClientViewProps) {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || initialSlug;
  const shouldReduceMotion = useReducedMotion();

  const [bookingOpen, setBookingOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Find article by slug or id
  const article =
    ARTICLES_DATA.find((a) => a.slug === slug || a.id === slug) ||
    ARTICLES_DATA[0];

  // Related articles (excluding current article, max 3)
  const relatedArticles = ARTICLES_DATA.filter(
    (a) => a.id !== article.id
  ).slice(0, 3);

  // Recommended course based on article category
  const recommendedCourse =
    ALL_COURSES.find((c) =>
      article.category.toLowerCase().includes("tajweed")
        ? c.category === "Tajweed"
        : article.category.toLowerCase().includes("hifz")
        ? c.category === "Quran Memorization"
        : c.category === "Quran Reading"
    ) || ALL_COURSES[0];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-bg-main text-graphite flex flex-col justify-between selection:bg-gold-primary/20 selection:text-navy-primary">
      {/* 1. GLOBAL NAVBAR */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="overflow-x-clip">
        
        {/* ========================================================================= */}
        {/* 1. GRAND FULL-WIDTH & FULL-HEIGHT ARTICLE HERO SECTION (Navy Gradual Overlay) */}
        {/* ========================================================================= */}
        <section className="relative w-full min-h-screen lg:min-h-[100dvh] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 overflow-hidden border-b border-gold-primary/30">
          
          {/* Full-width Background Image Container with Smooth Parallax / Scale Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: LUXURY_EASE }}
              className="relative w-full h-full"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center transform-gpu"
              />
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* ROYAL ISLAMIC EMERALD & GOLD LUXURY OVERLAYS */}
          {/* ========================================================================= */}
          
          {/* 1. Vertical Atmospheric Gradient: Soft Emerald depth building gently towards bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08332B]/35 via-[#08332B]/20 via-45% to-[#05231D]/75 pointer-events-none" />

          {/* 2. Directional Left-to-Right Emerald Vignette: Gentle contrast behind text while letting image shine on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05231D]/70 via-[#08332B]/40 to-transparent pointer-events-none" />

          {/* 3. Radiant ambient gold light glow (Top-Left) */}
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gold-primary/15 rounded-full blur-3xl pointer-events-none" />

          {/* 4. Radiant subtle emerald ambient glow (Bottom-Right) */}
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald/15 rounded-full blur-3xl pointer-events-none" />

          {/* 5. Seamless bottom fade into deep emerald baseline */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#05231D]/60 to-transparent pointer-events-none" />

          {/* Hero Foreground Content */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto layout-page-px space-y-6 sm:space-y-7">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" prefetch={true} className="hover:text-gold-light transition-colors">Home</Link>
              <span className="text-gold-light/60">•</span>
              <Link href="/articles" prefetch={true} className="hover:text-gold-light transition-colors">Articles &amp; Research</Link>
              <span className="text-gold-light/60">•</span>
              <span className="text-gold-light font-black truncate max-w-[200px] sm:max-w-none">{article.title}</span>
            </nav>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-gold-primary/25 text-gold-light border border-gold-primary/50 shadow-xs backdrop-blur-md flex items-center gap-1.5">
                <AcademicQalamIcon className="w-3.5 h-3.5 text-gold-light" />
                <span>{article.category}</span>
              </span>

              {article.badge && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-white/15 text-white border border-white/25 shadow-2xs backdrop-blur-md">
                  {article.badge}
                </span>
              )}

              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-2xs flex items-center gap-1.5 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Al-Azhar Peer-Reviewed</span>
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2 max-w-4xl text-left">
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: LUXURY_EASE }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black tracking-tight text-white leading-[1.16] [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]"
              >
                {article.title}
              </motion.h1>
            </div>

            {/* Excerpt */}
            <p className="text-xs sm:text-sm md:text-[15.5px] text-white/90 font-medium leading-relaxed max-w-3xl text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
              {article.excerpt}
            </p>

            {/* Article Meta Bar & Author Info */}
            <div className="pt-3 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              
              {/* Author Info */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-2xs">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gold-primary/60 shrink-0 shadow-xs">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-white">{article.author.name}</span>
                    {article.author.azharCertified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <span className="text-[11px] text-white/70 block">{article.author.role}</span>
                </div>
              </div>

              {/* Reading Metrics */}
              <div className="flex items-center gap-2 text-xs text-white font-bold">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/15 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-gold-light" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/15 shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-gold-light" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/15 shadow-2xs">
                  <Eye className="w-3.5 h-3.5 text-gold-light" />
                  <span>{article.views}</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* LUXURY ENGRAVED DIVIDER (Padded down from Hero) */}
        <EngravedDivider className="pt-8 sm:pt-14 pb-4 sm:pb-8" />

        {/* ========================================================================= */}
        {/* 3. MAIN ARTICLE READING LAYOUT (2 Columns: Article Content + Sticky Sidebar) */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1400px] mx-auto layout-page-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT MAIN READING COLUMN (8 cols) */}
            <article className="lg:col-span-8 space-y-8">
              
              {/* KEY TAKEAWAYS BOX */}
              {article.keyTakeaway && (
                <div className="royal-card-light p-6 sm:p-7 rounded-3xl border-2 border-gold-primary/45 shadow-sm space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-2.5 text-gold-dark font-bold text-sm">
                    <CoreWisdomInsightIcon className="w-5 h-5 text-gold-primary" />
                    <span className="uppercase tracking-wider">Scholarly Key Takeaway</span>
                  </div>
                  <p className="text-sm sm:text-base font-serif font-bold text-navy-primary leading-relaxed italic">
                    &ldquo;{article.keyTakeaway}&rdquo;
                  </p>
                </div>
              )}

              {/* ARTICLE INTRODUCTION */}
              <div className="royal-card-light p-6 sm:p-10 rounded-3xl border border-gold-primary/30 shadow-xs space-y-6">
                
                {/* Intro Paragraph */}
                <p className="text-sm sm:text-base text-graphite/90 leading-relaxed font-normal first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-gold-dark first-letter:mr-2 first-letter:float-left">
                  {article.content.intro}
                </p>

                {/* SUBSECTIONS */}
                <div className="space-y-8 pt-4">
                  {article.content.sections.map((sec, idx) => (
                    <section key={idx} id={`section-${idx + 1}`} className="space-y-4 pt-2">
                      <h2 className="font-serif text-xl sm:text-2xl font-bold engraved-emerald flex items-center gap-2.5">
                        <span className="w-2 h-6 rounded-full bg-gold-primary shrink-0" />
                        <span>{sec.heading}</span>
                      </h2>

                      {/* Arabic Calligraphic Quote / Ayah Callout */}
                      {sec.arabicQuote && (
                        <div className="my-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FAF6EE] to-[#F3EACF] border-r-4 border-gold-primary text-right shadow-2xs space-y-2">
                          <p className="font-serif text-lg sm:text-xl font-bold text-navy-primary leading-loose tracking-wide dir-rtl">
                            « {sec.arabicQuote} »
                          </p>
                          <span className="text-[11px] font-semibold text-gold-dark block">
                            — الشاهد القرآني / الحديث الشريف / المتن
                          </span>
                        </div>
                      )}

                      {/* Body Paragraph */}
                      <p className="text-sm sm:text-base text-graphite/85 leading-relaxed">
                        {sec.body}
                      </p>

                      {/* Bullet Points */}
                      {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                        <div className="space-y-2.5 pt-2">
                          {sec.bulletPoints.map((bp, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF6EE]/60 border border-gold-primary/20">
                              <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-semibold text-navy-primary/90 leading-relaxed">
                                {bp}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* CONCLUSION */}
                {article.content.conclusion && (
                  <div className="mt-8 p-6 rounded-2xl royal-card-dark text-white border border-gold-primary/40 space-y-3 shadow-md">
                    <div className="flex items-center gap-2 text-gold-light text-xs font-bold uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4 text-gold-primary" />
                      <span>Academic Summary &amp; Recommended Next Steps</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                      {article.content.conclusion}
                    </p>
                  </div>
                )}

                {/* TAGS ROW */}
                <div className="pt-6 border-t border-gold-primary/20 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-graphite/60 mr-1">Topics:</span>
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gold-primary/30 text-navy-primary shadow-2xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* SOCIAL SHARE BAR */}
                <div className="pt-4 border-t border-gold-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-gold-dark" />
                    <span className="text-xs font-bold text-navy-primary">Share This Scholarly Article:</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-gold-primary/40 text-navy-primary text-xs font-bold flex items-center gap-1.5 hover:border-gold-primary transition-all cursor-pointer shadow-2xs"
                    >
                      {copied ? (
                        <>
                          <CheckCheck className="w-3.5 h-3.5 text-emerald" />
                          <span className="text-emerald font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-gold-dark" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white border border-gold-primary/40 text-navy-primary hover:text-emerald hover:border-emerald transition-all shadow-2xs"
                      aria-label="Share on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white border border-gold-primary/40 text-navy-primary hover:text-gold-dark hover:border-gold-primary transition-all shadow-2xs"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white border border-gold-primary/40 text-navy-primary hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-2xs"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

              {/* AUTHOR SPOTLIGHT CARD */}
              <div className="p-6 sm:p-8 rounded-3xl royal-card-light border border-gold-primary/35 shadow-md flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold-primary/60 shrink-0 shadow-md">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-primary text-gold-light border border-gold-primary/40 text-[10.5px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-light" />
                    <span>Al-Azhar University Accredited Faculty</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-primary">
                    Written by {article.author.name}
                  </h3>
                  <p className="text-xs text-graphite/80 leading-relaxed">
                    {article.author.role}. Dedicated to authentic Sanad transmission and modern phonetic instruction for international students worldwide.
                  </p>
                </div>
              </div>

            </article>

            {/* RIGHT STICKY SIDEBAR (4 cols) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* TABLE OF CONTENTS CARD */}
              <div className="royal-card-light p-6 rounded-3xl border border-gold-primary/30 shadow-xs space-y-4">
                <div className="flex items-center gap-2 border-b border-gold-primary/20 pb-3">
                  <BookOpen className="w-4 h-4 text-gold-dark" />
                  <h3 className="font-serif text-base font-bold text-navy-primary">
                    Table of Contents
                  </h3>
                </div>

                <nav className="space-y-2">
                  {article.content.sections.map((sec, idx) => (
                    <a
                      key={idx}
                      href={`#section-${idx + 1}`}
                      className="block text-xs font-semibold text-graphite/80 hover:text-gold-dark hover:translate-x-1 transition-all py-1 border-b border-gold-primary/10 last:border-0 truncate"
                    >
                      {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* RECOMMENDED COURSE CARD */}
              <div className="royal-card-dark p-6 rounded-3xl border border-gold-primary/40 text-white shadow-md space-y-4">
                <span className="px-3 py-1 rounded-full bg-gold-primary/20 text-gold-light border border-gold-primary/40 text-[10.5px] font-bold block w-fit">
                  Recommended Academic Program
                </span>

                <div className="space-y-1.5">
                  <h4 className="font-serif text-base font-bold text-white line-clamp-2">
                    {recommendedCourse.title}
                  </h4>
                  <p className="text-xs text-gold-light italic font-serif">
                    {recommendedCourse.arabicTitle}
                  </p>
                </div>

                <p className="text-xs text-white/75 line-clamp-3 leading-relaxed">
                  {recommendedCourse.description}
                </p>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs text-gold-light font-bold">
                    {recommendedCourse.lessons} Lessons • 1-on-1 Talaqqi
                  </span>
                  <Link
                    href={`/courses/${recommendedCourse.id}`}
                    prefetch={true}
                    className="btn-royal-gold px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1 text-navy-royal border border-gold-light/60 cursor-pointer shadow-xs"
                  >
                    <span>View Course</span>
                    <ArrowRight className="w-3 h-3 text-navy-royal" />
                  </Link>
                </div>
              </div>

              {/* FREE TRIAL QUICK BOOKING CARD */}
              <div className="royal-card-light p-6 rounded-3xl border border-gold-primary/35 shadow-md text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-navy-primary text-gold-light mx-auto flex items-center justify-center shadow-xs">
                  <BookOpen className="w-6 h-6 text-gold-primary" />
                </div>
                <h4 className="font-serif text-base font-bold text-navy-primary">
                  Start Live Recitation Practice
                </h4>
                <p className="text-xs text-graphite/75 leading-relaxed">
                  Book 2 free trial classes with an accredited Al-Azhar tutor. Personalized 1-on-1 feedback.
                </p>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="btn-royal-gold w-full py-3 rounded-xl text-xs font-black text-navy-royal shadow-xs hover:shadow-md cursor-pointer border border-gold-light/60"
                >
                  Book 2 Free Trial Classes
                </button>
              </div>

            </aside>

          </div>
        </section>

        {/* LUXURY ENGRAVED DIVIDER */}
        <EngravedDivider className="pt-8 sm:pt-14 pb-4 sm:pb-8" />

        {/* ========================================================================= */}
        {/* 4. RELATED ARTICLES SECTION */}
        {/* ========================================================================= */}
        {relatedArticles.length > 0 && (
          <>
            <section className="w-full max-w-[1400px] mx-auto layout-page-px pt-10 sm:pt-16 pb-12 sm:pb-16 space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-gold-primary/20 pb-4">
                <div>
                  <span className="text-xs font-bold text-gold-dark uppercase tracking-wider block">
                    Al-Azhar Quranic Library
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold engraved-emerald">
                    Related Research &amp; Guides
                  </h2>
                </div>

                <Link
                  href="/articles"
                  prefetch={true}
                  className="royal-card-light px-4 py-2 text-xs font-bold flex items-center gap-1.5 group cursor-pointer border border-gold-primary/40 hover:border-gold-primary rounded-xl text-navy-primary shadow-2xs"
                >
                  <span>Explore All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-dark group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedArticles.map((relArt, idx) => (
                  <ArticleCard
                    key={relArt.id}
                    article={relArt}
                    index={idx}
                    onOpenArticle={(a) => router.push(`/articles/${a.slug || a.id}`)}
                  />
                ))}
              </div>
            </section>

            {/* LUXURY ENGRAVED DIVIDER */}
            <EngravedDivider className="pt-2 sm:pt-4 pb-8 sm:pb-12" />
          </>
        )}

        {/* ========================================================================= */}
        {/* 5. CLOSING GRAND CTA BANNER */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1400px] mx-auto layout-page-px pb-20 sm:pb-28">
          <div className="royal-card-light rounded-3xl p-8 sm:p-12 lg:p-16 border border-gold-primary/45 shadow-xl text-center space-y-6 relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-navy-primary text-gold-light border border-gold-primary/40 text-xs font-bold shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-gold-light" />
                <span>Transform Knowledge Into Practice</span>
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold engraved-emerald leading-tight">
                Study Directly With Al-Azhar Academic Faculty
              </h2>

              <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed">
                Experience personalized 1-on-1 recitation guidance, continuous Sanad tracking, and structured Quranic tracks from the comfort of your home.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="btn-royal-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 text-navy-royal shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-gold-light/60 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-navy-royal" />
                  <span>Start Free 1-on-1 Trial</span>
                  <ArrowRight className="w-4 h-4 text-navy-royal" />
                </button>

                <Link
                  href="/contact"
                  prefetch={true}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-navy-primary flex items-center justify-center gap-2 border border-gold-primary/45 hover:border-gold-primary transition-all cursor-pointer bg-white/90 hover:bg-white shadow-xs"
                >
                  <PhoneCall className="w-4 h-4 text-gold-dark" />
                  <span>Contact Academic Advisors</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* BOOKING WIZARD MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
