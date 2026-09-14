"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  Clock,
  Eye,
  Calendar,
  ArrowRight,
  Bookmark,
  Share2,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { Article } from "@/data/articlesData";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

interface ArticleCardProps {
  article: Article;
  index?: number;
  onOpenArticle: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  index = 0,
  onOpenArticle,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : { duration: 0.8, delay: (index % 3) * 0.1, ease: LUXURY_EASE }
      }
      className="course-card-liquid specular-rim-gold flex flex-col justify-between overflow-hidden group border border-gold-primary/30 transition-all duration-300 relative shadow-2xs hover:shadow-xl hover:-translate-y-1 rounded-2xl"
    >
      {/* Top Subtle Gold Ambient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent pointer-events-none z-10" />

      {/* TOP IMAGE & BADGES */}
      <div className="relative h-[200px] w-full overflow-hidden shrink-0 bg-navy-primary/10">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/85 via-black/20 to-transparent pointer-events-none" />

        {/* Category & Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-md text-[10.5px] font-bold bg-[#0E493E] text-gold-bright border border-gold-primary/45 backdrop-blur-md shadow-2xs">
            {article.category}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[10.5px] font-bold bg-white/95 text-navy-primary border border-gold-primary/35 backdrop-blur-md shadow-2xs">
            {article.badge}
          </span>
        </div>

        {/* Read Time & Views */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-[11px] font-bold text-white/90">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
            <Clock className="w-3.5 h-3.5 text-gold-light" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
            <Eye className="w-3.5 h-3.5 text-gold-light" />
            <span>{article.views}</span>
          </div>
        </div>
      </div>

      {/* MIDDLE CONTENT: Titles & Excerpt */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Link href={`/articles/${article.slug || article.id}`} className="block group/link">
            <h3 className="font-serif text-lg sm:text-xl xl:text-[21px] font-black text-navy-primary group-hover/link:text-gold-dark transition-colors line-clamp-2 leading-snug [text-shadow:0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(11,27,51,0.12)]">
              {article.title}
            </h3>
          </Link>

          <p className="text-xs text-graphite/80 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* AUTHOR & DATE */}
        <div className="pt-3 border-t border-gold-primary/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-primary/40 shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-navy-primary block truncate max-w-[150px]">
                {article.author.name}
              </span>
              <span className="text-[10px] text-graphite/60 block">
                {article.date}
              </span>
            </div>
          </div>

          <Link
            href={`/articles/${article.slug || article.id}`}
            className="royal-card-light hover:btn-royal-gold px-3.5 py-1.5 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs border border-gold-primary/35 rounded-xl text-navy-primary"
          >
            <span>Read</span>
            <ArrowRight className="w-3 h-3 text-gold-dark group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
