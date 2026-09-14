"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  BookOpen,
  ArrowRight,
  Clock,
  User,
  Headphones,
  FileText,
  Share2,
  Bookmark,
  CheckCircle2,
  Volume2,
  Flame,
  Eye,
  ChevronRight,
} from "lucide-react";
import {
  AcademicQalamIcon,
  CoreWisdomInsightIcon,
} from "@/components/ui/SemanticCustomIcons";

// =========================================================================
// 6 CINEMATIC ARTICLES DATA (Scholarly, Authentic & Asymmetric Bento Layout)
// =========================================================================
export const FEATURED_ARTICLES = [
  {
    id: "art-1",
    slug: "art-of-tarteel-vocal-modulation-tajweed",
    title: "The Art of Tarteel: Mastering Vocal Modulation & Tajweed Phonetics",
    arabicTitle: "فن الترتيل وأسرار ضبط مخارج الحروف الصوتية ومقامات التلاوة",
    category: "Tajweed Masterclass",
    categoryColor: "bg-gold-primary/15 text-gold-light border-gold-primary/40 shadow-xs",
    badge: "Featured Masterclass",
    readTime: "7 min read",
    listenTime: "8 min audio",
    views: "4.9k views",
    date: "Aug 12, 2026",
    author: {
      name: "Dr. Ahmed Al-Azhari",
      role: "Senior Tajweed Scholar & Qira'at Master",
      avatar: "/images/avatars/review-4.webp",
    },
    image: "/images/courses/tajweed.webp",
    excerpt:
      "An in-depth scholarly breakdown of how classical vocal resonance harmonizes with accurate articulatory phonetics (Makharij & Sifat) to produce reverent, tear-inspiring Tilawah.",
    keyTakeaway: "Mastering breath control and elongation (Madd) transforms recitation fluency.",
    tags: ["Tajweed", "Tarteel", "Makharij", "Vocal Control"],
  },
  {
    id: "art-2",
    slug: "step-by-step-memorize-surah-al-kahf",
    title: "Step-by-Step Guide: How Non-Arabic Speakers Can Memorize Surah Al-Kahf",
    arabicTitle: "دليل الحفظ المتقن لسورة الكهف لغير الناطقين بالعربية خطوة بخطوة",
    category: "Hifz & Memorization",
    categoryColor: "bg-emerald-royal/80 text-emerald-tint border-emerald/40 shadow-xs",
    badge: "Practical Guide",
    readTime: "5 min read",
    listenTime: "6 min audio",
    views: "3.2k views",
    date: "Aug 10, 2026",
    author: {
      name: "Ustadh Farooq Al-Mansoor",
      role: "Head of Hifz Programs",
      avatar: "/images/avatars/review-1.webp",
    },
    image: "/images/courses/hifz.webp",
    excerpt:
      "Breaking down 110 verses into mnemonic thematic quarters, rhythmic repetitions, and daily retention loops designed for busy professionals.",
    keyTakeaway: "Thematic grouping reduces memorization cognitive fatigue by 40%.",
    tags: ["Hifz", "Surah Al-Kahf", "Retention", "Memory"],
  },
  {
    id: "art-3",
    slug: "ten-authentic-qiraat-connected-sanad-history",
    title: "The 10 Authentic Qira'at: Chains of Transmission (Sanad) Explained",
    arabicTitle: "القراءات العشر المتواترة وتاريخ أسانيدها المتصلة للنبي ﷺ",
    category: "Quranic Sciences",
    categoryColor: "bg-gold-primary/15 text-gold-light border-gold-primary/40 shadow-xs",
    badge: "Scholarly Research",
    readTime: "9 min read",
    listenTime: "11 min audio",
    views: "2.8k views",
    date: "Aug 06, 2026",
    author: {
      name: "Dr. Mahmoud Al-Suhaili",
      role: "Ten Qira'at Ijazah Holder",
      avatar: "/images/avatars/review-3.webp",
    },
    image: "/images/courses/qiraat.webp",
    excerpt:
      "Explore the uninterrupted golden chains connecting modern Azhari reciters back through the Imams of Qira'at directly to the Companions and Prophet Muhammad ﷺ.",
    keyTakeaway: "Every single letter in the Mutawatir Qira'at is preserved with rigorous oral verification.",
    tags: ["Qira'at", "Sanad", "Ijazah", "Hadith & Isnad"],
  },
  {
    id: "art-4",
    slug: "parents-handbook-raising-quran-loving-children",
    title: "Parent's Handbook: Raising Quran-Loving Children in the Digital Era",
    arabicTitle: "دليل الآباء: غرس حب القرآن في قلوب الأبناء في العصر الرقمي",
    category: "Family & Kids",
    categoryColor: "bg-emerald-royal/80 text-emerald-tint border-emerald/40 shadow-xs",
    badge: "Parenting Focus",
    readTime: "4 min read",
    listenTime: "5 min audio",
    views: "5.1k views",
    date: "Aug 03, 2026",
    author: {
      name: "Ustadha Maryam Hassan",
      role: "Child Islamic Education Specialist",
      avatar: "/images/avatars/review-2.webp",
    },
    image: "/images/courses/kids-foundation.webp",
    excerpt:
      "5 psychological and positive habit-building strategies to connect young hearts with daily Tilawah without screen fatigue or resistance.",
    keyTakeaway: "Positive emotional association creates lifelong love for Quran recitation.",
    tags: ["Kids", "Parenting", "Habit Building", "Motivation"],
  },
  {
    id: "art-5",
    slug: "noor-al-bayan-vs-traditional-methods",
    title: "Noor Al-Bayan vs Traditional Methods: The Foundational Science",
    arabicTitle: "منهج نور البيان وتأسيس القراءة السليمة مقارنة بالأساليب التقليدية",
    category: "Pedagogy & Foundations",
    categoryColor: "bg-gold-primary/15 text-gold-light border-gold-primary/40 shadow-xs",
    badge: "Methodology",
    readTime: "6 min read",
    listenTime: "7 min audio",
    views: "3.7k views",
    date: "Jul 28, 2026",
    author: {
      name: "Ustadh Ibrahim Zaki",
      role: "Noor Al-Bayan Certified Trainer",
      avatar: "/images/avatars/avatar-1.webp",
    },
    image: "/images/courses/nooralbayan.webp",
    excerpt:
      "Why phonetic spelling rules and Harakat isolation accelerate Arabic and Quranic literacy 3x faster for non-Arabic beginners.",
    keyTakeaway: "Systematic vowel progression eliminates pronunciation hesitation completely.",
    tags: ["Noor Al-Bayan", "Phonetics", "Beginners", "Arabic"],
  },
  {
    id: "art-6",
    slug: "linguistic-miracles-in-quran-opening-surahs",
    title: "Spiritual Reflections: Linguistic Miracles in Quranic Cadence",
    arabicTitle: "تأملات بيانية: أسرار الإعجاز اللغوي والإيقاع الصوتي في فواتح السور",
    category: "Tafseer & Reflection",
    categoryColor: "bg-emerald-royal/80 text-emerald-tint border-emerald/40 shadow-xs",
    badge: "Tafseer Gems",
    readTime: "5 min read",
    listenTime: "6 min audio",
    views: "4.3k views",
    date: "Jul 22, 2026",
    author: {
      name: "Dr. Taha Al-Mursi",
      role: "Professor of Quranic Linguistics",
      avatar: "/images/avatars/avatar-3.webp",
    },
    image: "/images/courses/tafseer.webp",
    excerpt:
      "Unveiling the mathematical symmetry and rhythmic phonetic resonance in the early Meccan revelations that captivated classical Arab poets.",
    keyTakeaway: "The Quranic word choice balances acoustic harmony with precise theological depth.",
    tags: ["Tafseer", "Linguistics", "Eloquence", "Reflection"],
  },
];

export const LatestArticles: React.FC = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>([]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedArticles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const heroArticle = FEATURED_ARTICLES[0];
  const secondaryArticles = [FEATURED_ARTICLES[1], FEATURED_ARTICLES[2]];
  const wideArticle = FEATURED_ARTICLES[3];
  const compactArticles = [FEATURED_ARTICLES[4], FEATURED_ARTICLES[5]];

  return (
    <motion.section
      id="articles"
      initial={{ opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "50px 0px 0px 0px" }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="w-full bg-gradient-to-b from-emerald via-emerald-deep to-emerald pt-20 lg:pt-28 pb-16 sm:pb-20 border-y border-gold-primary/35 shadow-[inset_0_0_80px_rgba(0,0,0,0.55)] relative overflow-hidden text-white scroll-mt-20"
    >
      {/* Dark Porous Paper Texture Layer */}
      <div className="absolute inset-0 dark-paper-porous-texture opacity-85 pointer-events-none z-0" />

      {/* Dynamic Background Effects (Glowing Orbs & Arabesque Geometry) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-royal/30 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C7A04B' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M40 40L0 0h80L40 40zM0 80l40-40 40 40H0zM40 0l40 40-40 40L0 40 40 0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* ============================================================ */}
        {/* SECTION HEADER: CINEMATIC SCHOLARLY TITLE & VIEW ALL ACTION */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-gold-primary/25">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: LUXURY_EASE }}
            className="space-y-3 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-primary/15 border-2 border-gold-primary/45 shadow-sm text-gold-light">
              <AcademicQalamIcon className="w-3.5 h-3.5 text-gold-light" />
              <span className="text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-gold-light">
                Academic Research & Quranic Insights
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              <span>Quranic Wisdom & </span>
              <span className="gold-foil-text font-serif">
                Scholarly Articles
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Explore authentic Tajweed analyses, memorization methodologies, and spiritual reflections penned by our certified Al-Azhar scholars.
            </p>
          </motion.div>

          {/* Desktop Right "View All Articles" Luxury Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: LUXURY_EASE }}
            className="hidden lg:block shrink-0 self-auto"
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl btn-royal-gold text-navy-royal font-black text-sm shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:scale-105 transition-all duration-300 shrink-0 group cursor-pointer border border-gold-light/60"
            >
              <span>Explore All Articles</span>
              <div className="w-6 h-6 rounded-full bg-navy-royal text-gold-light flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* ASYMMETRIC BENTO GRID (6 HIGH-IMPACT ARTICLE CARDS) */}
        {/* ============================================================ */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* ---------------------------------------------------------- */}
          {/* CARD 1: HERO FEATURED ARTICLE (7 COLS TALL CINEMATIC CARD) */}
          {/* ---------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: LUXURY_EASE }}
            className="lg:col-span-7 flex flex-col"
          >
            <Link
              href={`/articles/${heroArticle.slug}`}
              className="rounded-3xl bg-emerald-deep/85 backdrop-blur-2xl border border-emerald-400/25 shadow-[0_16px_40px_rgba(0,0,0,0.4)] overflow-hidden relative group hover:border-emerald-300/60 hover:bg-[#072E27] hover:shadow-[0_20px_50px_rgba(14,73,62,0.3)] transition-all duration-500 flex flex-col justify-between h-full cursor-pointer"
            >
              {/* Top Subtle Emerald Ambient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald/40 to-transparent pointer-events-none z-20" />

              {/* Background Image with Zoom & Dark Gradient Overlay */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                <Image
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/40 to-transparent pointer-events-none" />

                {/* Top Badges & Bookmark Action */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="whitespace-nowrap px-3 py-1 rounded-full bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary text-navy-primary font-black text-xs shadow-md flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      {heroArticle.badge}
                    </span>
                    <span className={`whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${heroArticle.categoryColor}`}>
                      {heroArticle.category}
                    </span>
                  </div>

                  <button
                    onClick={(e) => toggleBookmark(heroArticle.id, e)}
                    className="w-9 h-9 rounded-full bg-navy-primary/80 backdrop-blur-md border border-gold-primary/40 text-gold-light hover:bg-gold-primary hover:text-navy-primary flex items-center justify-center transition-all shadow-md cursor-pointer shrink-0"
                    aria-label="Bookmark article"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${bookmarkedArticles.includes(heroArticle.id) ? "fill-current text-gold-primary" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Audio Listen Pill Floating on Image */}
                <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-primary/90 backdrop-blur-md border border-gold-primary/40 text-gold-light text-xs font-bold shadow-lg">
                  <Headphones className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
                  <span>{heroArticle.listenTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-black text-white group-hover:text-gold-light transition-colors leading-snug [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] line-clamp-2">
                    {heroArticle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light line-clamp-3">
                    {heroArticle.excerpt}
                  </p>
                </div>

                {/* Key Takeaway Pill */}
                <div className="p-3.5 rounded-2xl bg-gold-primary/10 backdrop-blur-md border border-gold-primary/25 text-xs sm:text-sm text-gray-200 font-normal flex items-start gap-2.5 shadow-xs">
                  <CoreWisdomInsightIcon className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-bold text-gold-light">Core Insight: </strong>
                    {heroArticle.keyTakeaway}
                  </span>
                </div>

                {/* Author & Footer Meta */}
                <div className="pt-4 border-t border-gold-primary/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={heroArticle.author.avatar}
                      alt={heroArticle.author.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-gold-primary/60 shadow-md"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {heroArticle.author.name}
                      </h4>
                      <p className="text-[11px] text-gold-light/80 font-normal">
                        {heroArticle.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-normal text-gray-300 shrink-0">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-light" />
                      {heroArticle.readTime}
                    </span>
                    <span className="hidden sm:inline text-gold-primary/50">•</span>
                    <span className="hidden sm:flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-gold-light" />
                      {heroArticle.views}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ---------------------------------------------------------- */}
          {/* CARDS 2 & 3: TWO EDITORIAL CARDS (5 COLS STACKED VERTICAL) */}
          {/* ---------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.15, ease: LUXURY_EASE }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {secondaryArticles.map((art) => (
              <Link
                key={art.id}
                href={`/articles/${art.slug}`}
                className="rounded-3xl p-4.5 sm:p-6 bg-emerald-deep/85 backdrop-blur-2xl border border-emerald-400/25 shadow-[0_12px_32px_rgba(0,0,0,0.35)] relative overflow-hidden group hover:border-emerald-300/60 hover:bg-[#072E27] hover:shadow-[0_16px_40px_rgba(14,73,62,0.25)] transition-all duration-400 flex flex-col justify-between flex-1 cursor-pointer"
              >
                {/* Top Subtle Emerald Glow Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald/40 to-transparent pointer-events-none" />

                <div className="flex gap-3.5 sm:gap-4 items-start">
                  {/* Left Thumbnail with Zoom */}
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 relative border border-gold-primary/30 shadow-sm">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 640px) 80px, 112px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 z-10">
                      <span className="w-5 h-5 rounded-full bg-navy-primary/90 text-gold-light text-[10px] font-bold flex items-center justify-center border border-gold-primary/40 shadow-xs">
                        <Headphones className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className={`whitespace-nowrap px-2 py-0.5 rounded-full text-[9.5px] sm:text-[10.5px] font-bold border shrink-0 ${art.categoryColor}`}>
                        {art.category}
                      </span>
                      <span className="whitespace-nowrap text-[10.5px] sm:text-[11px] font-normal text-gray-300 flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3 text-gold-light" />
                        {art.readTime}
                      </span>
                    </div>

                    <h4 className="font-serif text-sm sm:text-base lg:text-lg font-black text-white group-hover:text-gold-light transition-colors leading-snug line-clamp-2 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                      {art.title}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-gray-300 line-clamp-2 leading-relaxed font-light">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Author & Action */}
                <div className="mt-4 pt-3 border-t border-gold-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <Image
                      src={art.author.avatar}
                      alt={art.author.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-gold-primary/50"
                    />
                    <span className="text-xs font-medium text-gray-200 truncate">
                      {art.author.name}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-primary/15 border border-gold-primary/40 text-gold-light hover:bg-gold-primary hover:text-navy-primary text-xs font-bold group-hover:translate-x-0.5 transition-all shadow-xs">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* ---------------------------------------------------------- */}
          {/* CARD 4: WIDE HORIZONTAL EDITORIAL BANNER (6 COLS) */}
          {/* ---------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.1, ease: LUXURY_EASE }}
            className="lg:col-span-6 flex flex-col"
          >
            <Link
              href={`/articles/${wideArticle.slug}`}
              className="rounded-3xl p-5 sm:p-7 bg-emerald-deep/85 backdrop-blur-2xl border border-emerald-400/25 shadow-[0_12px_32px_rgba(0,0,0,0.35)] relative overflow-hidden group hover:border-emerald-300/60 hover:bg-[#072E27] hover:shadow-[0_16px_40px_rgba(14,73,62,0.25)] transition-all duration-400 flex flex-col justify-between h-full cursor-pointer"
            >
              {/* Top Subtle Emerald Glow Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald/40 to-transparent pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-1.5 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`whitespace-nowrap px-2 py-0.5 rounded-full text-[9.5px] sm:text-[10.5px] font-bold border ${wideArticle.categoryColor}`}>
                      {wideArticle.category}
                    </span>
                    <span className="whitespace-nowrap px-2 py-0.5 rounded-full bg-gold-primary/20 text-gold-light text-[9.5px] sm:text-[10.5px] font-bold border border-gold-primary/40 shadow-2xs">
                      {wideArticle.badge}
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-[10.5px] sm:text-xs text-gray-300 font-normal flex items-center gap-1 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-gold-light" />
                    {wideArticle.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-black text-white group-hover:text-gold-light transition-colors leading-snug [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                  {wideArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                  {wideArticle.excerpt}
                </p>

                {/* Practical Takeaway Pill */}
                <div className="p-3 rounded-2xl bg-gold-primary/10 backdrop-blur-md border border-gold-primary/25 text-xs text-gray-200 font-normal flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0" />
                  <span className="truncate">{wideArticle.keyTakeaway}</span>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-gold-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={wideArticle.author.avatar}
                    alt={wideArticle.author.name}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-gold-primary/60"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-white leading-tight">{wideArticle.author.name}</p>
                    <p className="text-[10.5px] text-gray-400 font-light">{wideArticle.date}</p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gold-primary/15 border border-gold-primary/40 text-gold-light group-hover:bg-gold-primary group-hover:text-navy-primary flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ---------------------------------------------------------- */}
          {/* CARDS 5 & 6: TWO COMPACT ASYMMETRIC TILES (3 COLS EACH) */}
          {/* ---------------------------------------------------------- */}
          {compactArticles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: (idx + 2) * 0.1, ease: LUXURY_EASE }}
              className="lg:col-span-3 flex flex-col"
            >
              <Link
                href={`/articles/${art.slug}`}
                className="rounded-3xl p-5 sm:p-6 bg-emerald-deep/85 backdrop-blur-2xl border border-emerald-400/25 shadow-[0_12px_32px_rgba(0,0,0,0.35)] relative overflow-hidden group hover:border-emerald-300/60 hover:bg-[#072E27] hover:shadow-[0_16px_40px_rgba(14,73,62,0.25)] transition-all duration-400 flex flex-col justify-between h-full cursor-pointer"
              >
                {/* Top Subtle Emerald Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald/40 to-transparent pointer-events-none" />

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className={`whitespace-nowrap px-2 py-0.5 rounded-full text-[9.5px] sm:text-[10.5px] font-bold border shrink-0 ${art.categoryColor}`}>
                      {art.category}
                    </span>
                    <span className="whitespace-nowrap text-[10px] sm:text-[10.5px] text-gray-300 font-normal shrink-0">
                      {art.readTime}
                    </span>
                  </div>

                  <h4 className="font-serif text-sm sm:text-base font-black text-white group-hover:text-gold-light transition-colors leading-snug line-clamp-2 sm:line-clamp-3 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                    {art.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-gray-300 line-clamp-2 sm:line-clamp-3 leading-relaxed font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gold-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <Image
                      src={art.author.avatar}
                      alt={art.author.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-gold-primary/50"
                    />
                    <span className="text-xs font-medium text-gray-200 truncate">
                      {art.author.name.split(" ")[1] || art.author.name}
                    </span>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-gold-primary/15 border border-gold-primary/40 text-gold-light group-hover:bg-gold-primary group-hover:text-navy-primary flex items-center justify-center transition-colors shadow-2xs">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* Mobile View All Articles Button */}
        <div className="lg:hidden flex justify-center mt-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl btn-royal-gold text-navy-royal font-black text-sm shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:scale-105 transition-all duration-300 group cursor-pointer border border-gold-light/60"
          >
            <span>Explore All Articles</span>
            <div className="w-6 h-6 rounded-full bg-navy-royal text-gold-light flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </Link>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM CALLOUT BAR: EXPLORE FULL ARTICLES & WHITE PAPERS */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-deep/90 via-[#06241E]/95 to-emerald-deep/90 backdrop-blur-2xl border border-gold-primary/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-center md:text-left"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald to-emerald-deep text-gold-light flex items-center justify-center shadow-lg shrink-0 mx-auto md:mx-0 border border-gold-primary/45">
              <BookOpen className="w-6 h-6 stroke-[2.5] text-gold-light" />
            </div>
            <div className="space-y-1 max-w-2xl mx-auto md:mx-0">
              <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-white leading-snug">
                Seeking In-Depth Research Papers & Audio Tajweed Series?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Browse our comprehensive index of 60+ verified Islamic studies guides, Tajweed charts, and downloadable PDFs.
              </p>
            </div>
          </div>

          <Link
            href="/articles"
            className="w-full sm:w-auto justify-center px-6 py-3 rounded-xl btn-royal-gold text-navy-royal font-black text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-md shrink-0 flex items-center gap-2 relative z-10 cursor-pointer border border-gold-light/60"
          >
            <span>Browse Full Library</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

