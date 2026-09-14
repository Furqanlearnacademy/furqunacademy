"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Clock,
  Calendar,
  Eye,
  CheckCircle2,
  Bookmark,
  Share2,
  ArrowRight,
  BookOpen,
  PhoneCall,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Article } from "@/data/articlesData";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenBooking,
}) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [article]);

  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-primary/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#FAF6EE] rounded-3xl border-2 border-gold-primary/40 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#FAF6EE]/95 backdrop-blur-md px-6 py-4 border-b border-gold-primary/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-navy-primary text-gold-light text-xs font-extrabold shadow-2xs">
                {article.category}
              </span>
              <span className="text-xs text-graphite/60 font-medium">
                {article.readTime}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/80 hover:bg-gold-primary/20 border border-gold-primary/40 flex items-center justify-center text-navy-primary hover:text-gold-dark transition-all cursor-pointer shadow-2xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Title */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-navy-primary leading-tight [text-shadow:0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(11,27,51,0.15)]">
                {article.title}
              </h2>
            </div>

            {/* Author Profile Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-gold-primary/30 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-primary/40">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-navy-primary">
                      {article.author.name}
                    </span>
                    {article.author.azharCertified && (
                      <span className="px-2 py-0.5 rounded-full bg-navy-primary text-gold-light text-[10px] font-extrabold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-gold-primary" />
                        <span>Al-Azhar Certified</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-graphite/70 block">
                    {article.author.role} · {article.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Takeaway Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-navy-primary text-white border border-gold-primary/40 space-y-1.5 shadow-md">
              <div className="flex items-center gap-2 text-gold-light text-xs font-bold uppercase tracking-wider">
                <AcademicQalamIcon className="w-4 h-4 text-gold-primary" />
                <span>Executive Summary &amp; Key Takeaway</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                {article.keyTakeaway}
              </p>
            </div>

            {/* Article Body Sections */}
            <div className="space-y-5 text-xs sm:text-sm text-graphite/85 leading-relaxed">
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy-primary/90">
                {article.content.intro}
              </p>

              {article.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-3 border-t border-gold-primary/20">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-primary">
                    {sec.heading}
                  </h3>

                  {sec.arabicQuote && (
                    <div className="p-4 rounded-xl bg-gold-primary/10 border-r-4 border-r-gold-primary font-serif text-base sm:text-lg text-navy-primary font-bold text-right my-2">
                      {sec.arabicQuote}
                    </div>
                  )}

                  <p className="leading-relaxed">{sec.body}</p>

                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="space-y-2 pl-2">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="p-4 rounded-2xl bg-white/90 border border-gold-primary/30 space-y-1.5 mt-4">
                <h4 className="font-serif text-base font-bold text-navy-primary">
                  Concluding Scholarly Advice:
                </h4>
                <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed">
                  {article.content.conclusion}
                </p>
              </div>
            </div>

            {/* Bottom Action Strip */}
            <div className="pt-6 border-t border-gold-primary/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/articles/${article.slug || article.id}`}
                  onClick={onClose}
                  className="liquid-glass-btn px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer text-navy-primary hover:border-gold-primary"
                >
                  <span>Full Article Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-dark" />
                </Link>

                <Link
                  href="/courses"
                  onClick={onClose}
                  className="liquid-glass-btn-navy shimmer-gold-sweep px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 text-white border border-gold-primary/50 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-gold-light" />
                  <span>Join Related Course</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="liquid-glass-btn px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Contact Advisor</span>
                </Link>
              </div>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.excerpt,
                      url: window.location.href,
                    }).catch(() => {});
                  }
                }}
                className="liquid-glass-btn px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer text-graphite/70"
              >
                <Share2 className="w-3.5 h-3.5 text-gold-dark" />
                <span>Share Article</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
