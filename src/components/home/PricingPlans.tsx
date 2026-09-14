"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  Check,
  Clock,
  ArrowRight,
  Crown,
  ShieldCheck,
} from "lucide-react";
import { BestValueRibbonIcon } from "@/components/ui/SemanticCustomIcons";
import { PaymentMethodsCarousel } from "./PaymentMethodsCarousel";
import { EngravedDivider } from "@/components/ui/EngravedDivider";

// =========================================================================
// SEMANTIC ISLAMIC SVG ICONS FOR PRICING PLANS
// =========================================================================

// 1. Starter: Foundation Study Bookmarks & Tablet
const StarterPlanIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path d="M8 8V16M12 8V16M16 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 2. Regular: Open Quran on Rehal Bookstand
const RegularPlanIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 6.5C3 5.67157 3.67157 5 4.5 5H10.5C11.3284 5 12 5.67157 12 6.5V17C12 17.5 11.5 18 11 18H4.5C3.67157 18 3 17.3284 3 16.5V6.5Z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M21 6.5C21 5.67157 20.3284 5 19.5 5H13.5C12.6716 5 12 5.67157 12 6.5V17C12 17.5 12.5 18 13 18H19.5C20.3284 18 21 17.3284 21 16.5V6.5Z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M6 19.5L18 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 19.5L12 16L16 19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 3. Intensive: Azhari Scholar Cap & Quill
const IntensivePlanIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6 10.5V16C6 17.5 8.68629 19 12 19C15.3137 19 18 17.5 18 16V10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M22 8.5V14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 4. Premium: Star of Ijazah & Scholar Seal
const PremiumPlanIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L14.5 7.5L20.5 8L16 12.5L17.5 18.5L12 15.5L6.5 18.5L8 12.5L3.5 8L9.5 7.5L12 2Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);



type Duration = "30" | "45" | "60";

interface PricingPlanData {
  id: string;
  name: string;
  frequency: string;
  popular?: boolean;
  saveTag?: string;
  icon: React.FC<{ className?: string }>;
  accentColor: {
    badgeBg: string;
    iconBg: string;
    iconColor: string;
    liquidBorder: string;
    glowBg: string;
  };
  prices: {
    "30": { price: number; original?: number };
    "45": { price: number; original?: number };
    "60": { price: number; original?: number };
  };
  features: (duration: Duration) => string[];
  ctaText: string;
  isGoldCta?: boolean;
}

const PRICING_PLANS: PricingPlanData[] = [
  {
    id: "starter",
    name: "Starter",
    frequency: "1 CLASS / WEEK",
    icon: StarterPlanIcon,
    accentColor: {
      badgeBg: "bg-emerald-tint text-emerald border-emerald/25",
      iconBg: "bg-emerald-tint text-emerald border-emerald/25",
      iconColor: "text-emerald",
      liquidBorder: "border-emerald/20 hover:border-emerald/40",
      glowBg: "from-emerald/10 via-transparent to-transparent",
    },
    prices: {
      "30": { price: 6 },
      "45": { price: 9 },
      "60": { price: 12 },
    },
    features: (d) => [
      `${d}-min sessions`,
      "Certified teacher",
      "Progress reports",
      "WhatsApp support",
    ],
    ctaText: "Choose Plan",
    isGoldCta: false,
  },
  {
    id: "regular",
    name: "Regular",
    frequency: "2 CLASSES / WEEK",
    popular: true,
    saveTag: "SAVE 10%",
    icon: RegularPlanIcon,
    accentColor: {
      badgeBg: "bg-emerald text-white font-black border-emerald-royal shadow-xs",
      iconBg: "bg-emerald/15 text-emerald border-emerald/30",
      iconColor: "text-emerald",
      liquidBorder: "border-emerald ring-2 ring-emerald/25",
      glowBg: "from-emerald/20 via-emerald/10 to-transparent",
    },
    prices: {
      "30": { price: 12, original: 14 },
      "45": { price: 18, original: 20 },
      "60": { price: 24, original: 27 },
    },
    features: (d) => [
      `${d}-min sessions`,
      "Expert teacher",
      "Weekly reports",
      "Priority support",
      "Free materials",
    ],
    ctaText: "Start Learning Now",
    isGoldCta: true,
  },
  {
    id: "intensive",
    name: "Intensive",
    frequency: "3 CLASSES / WEEK",
    saveTag: "SAVE 15%",
    icon: IntensivePlanIcon,
    accentColor: {
      badgeBg: "bg-emerald-tint text-emerald border-emerald/25",
      iconBg: "bg-emerald-tint text-emerald border-emerald/25",
      iconColor: "text-emerald",
      liquidBorder: "border-emerald/20 hover:border-emerald/40",
      glowBg: "from-emerald/10 via-transparent to-transparent",
    },
    prices: {
      "30": { price: 18, original: 21 },
      "45": { price: 27, original: 32 },
      "60": { price: 36, original: 42 },
    },
    features: (d) => [
      `${d}-min sessions`,
      "Master teacher",
      "Detailed reports",
      "24/7 support",
      "Premium materials",
      "Recorded sessions",
    ],
    ctaText: "Choose Plan",
    isGoldCta: false,
  },
  {
    id: "premium",
    name: "Premium",
    frequency: "4 CLASSES / WEEK",
    saveTag: "SAVE 20%",
    icon: PremiumPlanIcon,
    accentColor: {
      badgeBg: "bg-emerald-tint text-emerald border-emerald/25",
      iconBg: "bg-emerald/15 text-emerald border-emerald/30",
      iconColor: "text-emerald",
      liquidBorder: "border-emerald/25 hover:border-emerald/50",
      glowBg: "from-emerald/15 via-emerald/5 to-transparent",
    },
    prices: {
      "30": { price: 24, original: 30 },
      "45": { price: 36, original: 45 },
      "60": { price: 48, original: 60 },
    },
    features: (d) => [
      `${d}-min sessions`,
      "Sheikh with Ijazah",
      "Daily feedback",
      "VIP support",
      "All materials included",
      "All sessions recorded",
      "Certificate included",
    ],
    ctaText: "Choose Plan",
    isGoldCta: false,
  },
];

interface PricingPlansProps {
  onOpenBooking?: () => void;
  className?: string;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onOpenBooking, className }) => {
  const [duration, setDuration] = useState<Duration>("30");

  const durations: { key: Duration; label: string }[] = [
    { key: "30", label: "30 Minutes" },
    { key: "45", label: "45 Minutes" },
    { key: "60", label: "60 Minutes" },
  ];

  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "50px 0px 0px 0px" }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className={`w-full ${className !== undefined ? className : "py-12 sm:py-16 lg:py-20"} relative scroll-mt-20`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-10 sm:space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER (ENGRAVED TITLE & FLEXIBLE PRICING BADGE) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="text-center max-w-3xl mx-auto space-y-3.5"
        >
          {/* Top Flexible Pricing Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-tint border border-emerald/25 text-emerald text-xs sm:text-sm font-bold shadow-[0_2px_12px_rgba(14,73,62,0.08)]">
            <Crown className="w-4 h-4 text-emerald" />
            <span className="tracking-wide">Flexible Pricing</span>
          </div>

          {/* Majestic Engraved Section Title */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="engraved-emerald mr-2.5 sm:mr-3.5">Choose</span>
            <span className="engraved-gold">Your Plan</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-graphite/80 font-semibold leading-relaxed max-w-2xl mx-auto">
            Select the perfect plan based on class duration and frequency.
          </p>

          {/* ========================================================================= */}
          {/* INTERACTIVE DURATION TOGGLE (30m, 45m, 60m) */}
          {/* ========================================================================= */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-[#EAF2EE]/90 border border-emerald/20 shadow-[inset_0_2px_5px_rgba(14,73,62,0.06),0_4px_12px_rgba(0,0,0,0.03)] backdrop-blur-md">
              {durations.map((d) => {
                const isActive = duration === d.key;
                return (
                  <button
                    key={d.key}
                    type="button"
                    onClick={() => setDuration(d.key)}
                    className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "text-white shadow-[0_4px_12px_rgba(14,73,62,0.25)]"
                        : "text-graphite/70 hover:text-emerald"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDurationPill"
                        className="absolute inset-0 bg-emerald rounded-full border border-emerald-royal"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    <Clock className={`w-3.5 h-3.5 relative z-10 ${isActive ? "text-white" : "text-graphite/50"}`} />
                    <span className="relative z-10">{d.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 4 PRICING CARDS (LIQUID GLASS ON LIGHT THEME) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const Icon = plan.icon;
            const priceInfo = plan.prices[duration];
            const features = plan.features(duration);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: LUXURY_EASE }}
                className={`liquid-glass-card relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 border-2 ${
                  plan.popular
                    ? "!border-gold-primary shadow-[0_22px_50px_rgba(212,175,55,0.25),0_8px_25px_rgba(14,73,62,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] ring-4 ring-gold-primary/20 scale-[1.03] z-20"
                    : "!border-gold-primary/35 hover:!border-gold-primary/75 shadow-[0_10px_30px_rgba(14,73,62,0.06),0_4px_14px_rgba(212,175,55,0.08),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_38px_rgba(212,175,55,0.18)] hover:-translate-y-1 z-10"
                } transition-all duration-300 group overflow-visible`}
              >
                {/* Engraved Center-Top Notch POPULAR Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-4 py-1 rounded-full btn-royal-gold text-navy-royal text-[10.5px] sm:text-[11px] font-black tracking-wider uppercase shadow-[0_4px_16px_rgba(212,175,55,0.45)] border border-gold-light ring-4 ring-[#FAF9F5] select-none whitespace-nowrap">
                    <BestValueRibbonIcon className="w-3.5 h-3.5 text-navy-royal" />
                    <span>POPULAR</span>
                  </div>
                )}

                {/* Background Liquid Glass Ambient Glow (contained inside rounded card mask) */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div
                    className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${plan.accentColor.glowBg} rounded-full blur-2xl`}
                  />
                </div>

                <div>
                  {/* TOP ROW: ICON & SAVE BADGE */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    {/* Semantic Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 ${plan.accentColor.iconBg} shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Save Tag Badge */}
                    {plan.saveTag && (
                      <span className="text-[10px] sm:text-[10.5px] font-extrabold text-emerald bg-emerald/10 border border-emerald/25 px-2.5 py-0.5 rounded-full shadow-2xs">
                        {plan.saveTag}
                      </span>
                    )}
                  </div>

                  {/* PLAN TITLE & FREQUENCY */}
                  <div className="space-y-1 mb-5">
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-navy-primary tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] font-bold text-graphite/70 tracking-widest uppercase font-mono">
                      {plan.frequency}
                    </p>
                  </div>

                  {/* PRICE DISPLAY (ANIMATED UPON DURATION SWITCH) */}
                  <div className="pb-5 mb-5 border-b border-emerald/15 flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-emerald font-serif align-top">$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.id}-${duration}`}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl sm:text-5xl font-black text-navy-primary font-serif tracking-tight"
                      >
                        {priceInfo.price}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-xs font-semibold text-graphite/60">/mo</span>

                    {/* Strikethrough Original Price if Discounted */}
                    {priceInfo.original && (
                      <span className="text-xs font-bold text-graphite/45 line-through ml-1.5">
                        ${priceInfo.original}
                      </span>
                    )}
                  </div>

                  {/* FEATURES LIST */}
                  <ul className="space-y-3 mb-8">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-graphite/90">
                        <div className="w-4 h-4 rounded-full bg-emerald/15 flex items-center justify-center shrink-0 border border-emerald/30">
                          <Check className="w-2.5 h-2.5 text-emerald stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CALL TO ACTION BUTTON */}
                <div>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className={`w-full py-3 px-4 rounded-full text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md group/btn ${
                      plan.popular
                        ? "btn-royal-gold text-navy-royal shadow-[0_4px_18px_rgba(212,175,55,0.4)] border border-gold-light/60"
                        : "bg-gradient-to-r from-[#FAF6EE] to-[#F5EEDC] hover:btn-royal-gold text-navy-royal border-2 border-gold-primary/45 hover:border-gold-light shadow-xs hover:shadow-md"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-current group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM GUARANTEE & TRUST NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE }}
          className="pt-2 text-center flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-graphite/75"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald" />
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald" />
            <span>Cancel or Reschedule Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-emerald" />
            <span>Official Azhari Certified Instructors</span>
          </div>
        </motion.div>

        {/* CONTINUOUS SMOOTH PAYMENT METHODS CAROUSEL */}
        <div className="pt-2">
          <EngravedDivider className="mb-6 sm:mb-8" />
          <PaymentMethodsCarousel />
        </div>

      </div>
    </motion.section>
  );
};
