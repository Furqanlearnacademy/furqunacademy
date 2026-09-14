"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import {
  ChevronDown,
  Search,
  Check,
  Clock,
  Calendar,
  User,
  Mail,
  FileText,
  Video,
  GraduationCap,
  Globe,
  Send,
  MessageCircle,
  BookOpen,
  Award,
} from "lucide-react";
import { IslamicStudiesScrollIcon } from "@/components/ui/SemanticCustomIcons";

// ==========================================
// CUSTOM SEMANTIC REGISTRATION BADGE SVG
// ==========================================
const RegistrationPathwayIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6C15 6.55228 14.5523 7 14 7H10C9.44772 7 9 6.55228 9 6V5Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ==========================================
// COUNTRIES DATA WITH FLAGS & DIAL CODES
// ==========================================
interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
  timezones?: string[];
}

const COUNTRIES: Country[] = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸", timezones: ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"] },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧", timezones: ["Europe/London"] },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦", timezones: ["America/Toronto", "America/Vancouver"] },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺", timezones: ["Australia/Sydney", "Australia/Melbourne"] },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦", timezones: ["Asia/Riyadh"] },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪", timezones: ["Asia/Dubai"] },
  { name: "Egypt", code: "EG", dialCode: "+20", flag: "🇪🇬", timezones: ["Africa/Cairo"] },
  { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼", timezones: ["Asia/Kuwait"] },
  { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦", timezones: ["Asia/Qatar"] },
  { name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲", timezones: ["Asia/Muscat"] },
  { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭", timezones: ["Asia/Bahrain"] },
  { name: "Jordan", code: "JO", dialCode: "+962", flag: "🇯🇴", timezones: ["Asia/Amman"] },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪", timezones: ["Europe/Berlin"] },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷", timezones: ["Europe/Paris"] },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾", timezones: ["Asia/Kuala_Lumpur"] },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬", timezones: ["Asia/Singapore"] },
  { name: "Indonesia", code: "ID", dialCode: "+62", flag: "🇮🇩", timezones: ["Asia/Jakarta"] },
  { name: "Pakistan", code: "PK", dialCode: "+92", flag: "🇵🇰", timezones: ["Asia/Karachi"] },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳", timezones: ["Asia/Kolkata"] },
  { name: "Turkey", code: "TR", dialCode: "+90", flag: "🇹🇷", timezones: ["Europe/Istanbul"] },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱", timezones: ["Europe/Amsterdam"] },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪", timezones: ["Europe/Stockholm"] },
  { name: "Norway", code: "NO", dialCode: "+47", flag: "🇳🇴", timezones: ["Europe/Oslo"] },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭", timezones: ["Europe/Zurich"] },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪", timezones: ["Europe/Dublin"] },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿", timezones: ["Pacific/Auckland"] },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦", timezones: ["Africa/Johannesburg"] },
  { name: "Morocco", code: "MA", dialCode: "+212", flag: "🇲🇦", timezones: ["Africa/Casablanca"] },
  { name: "Algeria", code: "DZ", dialCode: "+213", flag: "🇩🇿", timezones: ["Africa/Algiers"] },
];

interface CourseOption {
  id: string;
  title: string;
  tag: string;
  icon: React.FC<{ className?: string }>;
}

const COURSES_LIST: CourseOption[] = [
  {
    id: "noor-bayan",
    title: "Quran Reading For Beginners (Noor Al-Bayan)",
    tag: "Beginner Friendly",
    icon: BookOpen,
  },
  {
    id: "tajweed",
    title: "Tajweed Rules & Voice Control",
    tag: "Practical Recitation",
    icon: IslamicStudiesScrollIcon,
  },
  {
    id: "hifz",
    title: "Hifz & Quran Memorization Path",
    tag: "Structured Tracking",
    icon: Award,
  },
  {
    id: "kids",
    title: "Kids Quran & Interactive Juz Amma",
    tag: "Fun & Engaging",
    icon: GraduationCap,
  },
  {
    id: "arabic",
    title: "Conversational Arabic & Grammar (Nahw)",
    tag: "Classical & Daily",
    icon: FileText,
  },
  {
    id: "islamic",
    title: "Islamic Studies & Aqeedah Essentials",
    tag: "Comprehensive Fiqh",
    icon: BookOpen,
  },
  {
    id: "ijazah",
    title: "Ijazah Sanad Certification with Scholars",
    tag: "Authentic Chain",
    icon: Award,
  },
];

export const HowItWorks: React.FC = () => {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [teacherPreference, setTeacherPreference] = useState<"Male" | "Female" | "No Preference">("No Preference");
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<CourseOption>(COURSES_LIST[0]);
  const [message, setMessage] = useState("");

  // Country dropdown state & search
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [autoDetected, setAutoDetected] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Custom Course dropdown state
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const courseDropdownRef = useRef<HTMLDivElement>(null);

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Automatic Country Detection using Timezone / Locale
  useEffect(() => {
    try {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const userLang = typeof navigator !== "undefined" ? navigator.language : "";

      let matchedCountry: Country | undefined;

      // 1. Try match by timezone
      if (userTimezone) {
        matchedCountry = COUNTRIES.find((c) =>
          c.timezones?.some((tz) => userTimezone.toLowerCase().includes(tz.toLowerCase().split("/")[1]))
        );
      }

      // 2. Try match by browser locale
      if (!matchedCountry && userLang) {
        const langCountryCode = userLang.split("-")[1]?.toUpperCase();
        if (langCountryCode) {
          matchedCountry = COUNTRIES.find((c) => c.code === langCountryCode);
        }
      }

      if (matchedCountry) {
        setSelectedCountry(matchedCountry);
        setAutoDetected(true);
      }
    } catch {
      // Fallback silently
    }
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setCountryDropdownOpen(false);
      }
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(event.target as Node)) {
        setCourseDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          age,
          gender,
          teacherPreference,
          country: `${selectedCountry.name} (${selectedCountry.code})`,
          countryDialCode: selectedCountry.dialCode,
          whatsappNumber,
          courseTitle: selectedCourse.title,
          courseTag: selectedCourse.tag,
          message,
          source: "Home Page Free Trial Form",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send application. Please try again.");
      }

      setIsSubmitted(true);
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#C9A24D", "#0B1B33", "#10B981", "#E8D18C"],
        });
      } catch {
        // Fallback if confetti fails to load
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong while submitting. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      num: "1",
      badgeColor: "from-[#0A382F] via-[#06231C] to-[#041712]",
      lineGradient: "from-[#D4AF37] via-[#AA7A1E] to-[#D4AF37]",
      borderRing: "border-gold-primary/60 shadow-[inset_0_2px_4px_rgba(255,242,200,0.3),0_6px_16px_rgba(14,73,62,0.35)]",
      title: "Fill in The Free Trial Form",
      desc: "Submit your details to select the best learning path for your personalized 1-on-1 trial class.",
      icon: FileText,
    },
    {
      num: "2",
      badgeColor: "from-[#082E26] via-[#051C17] to-[#03130F]",
      lineGradient: "from-[#AA7A1E] via-[#D4AF37] to-[#AA7A1E]",
      borderRing: "border-gold-primary/60 shadow-[inset_0_2px_4px_rgba(255,242,200,0.3),0_6px_16px_rgba(14,73,62,0.35)]",
      title: "Confirm The Appointment",
      desc: "Our Al-Azhar coordinator will contact you via WhatsApp or email to confirm your exact class time.",
      icon: Calendar,
    },
    {
      num: "3",
      badgeColor: "from-[#072821] via-[#041713] to-[#020F0C]",
      lineGradient: "from-[#D4AF37] via-[#AA7A1E] to-[#D4AF37]",
      borderRing: "border-gold-primary/60 shadow-[inset_0_2px_4px_rgba(255,242,200,0.3),0_6px_16px_rgba(14,73,62,0.35)]",
      title: "Download Meeting App",
      desc: "Download Zoom or Microsoft Teams to connect directly with your teacher (room link is provided).",
      icon: Video,
    },
    {
      num: "4",
      badgeColor: "from-[#06221C] via-[#03130F] to-[#020B08]",
      lineGradient: "",
      borderRing: "border-gold-primary/60 shadow-[inset_0_2px_4px_rgba(255,242,200,0.3),0_6px_16px_rgba(14,73,62,0.35)]",
      title: "Start Your Free Trial Class",
      desc: "Enjoy an interactive session with an authentic Azhari scholar and experience our curriculum firsthand.",
      icon: GraduationCap,
    },
  ];

  return (
    <motion.div
      id="how-it-works"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.85, ease: LUXURY_EASE }}
      className="w-full space-y-5 sm:space-y-6 scroll-mt-24"
    >
      {/* SECTION HEADER (MAJESTIC & PROMINENT) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: LUXURY_EASE }}
        className="text-center max-w-3xl mx-auto space-y-2.5"
      >
        {/* Curricula Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-4.5 py-1.5 rounded-full bg-emerald-tint border border-emerald/30 text-emerald text-xs sm:text-sm font-extrabold shadow-xs">
          <RegistrationPathwayIcon className="w-4 h-4 text-emerald" />
          <span className="tracking-wide">Simple 4-Step Registration Process</span>
        </div>

        {/* Majestic Large Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
          <span className="engraved-emerald mr-3 sm:mr-4 md:mr-5">
            How It
          </span>
          <span className="engraved-gold">
            Works
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-graphite-secondary font-semibold leading-relaxed max-w-2xl mx-auto">
          Get started with your Islamic & Quranic education journey in just 4 simple steps
        </p>
      </motion.div>

      {/* 2-COLUMN BALANCED GRID:
          - Left: Spine with 3D Number Badges & Progressive Connecting Lines + 4 Step Cards (Hero Style: border-l-[5px] gold border, luxury gradient, full font size)
          - Right: Streamlined Free Trial Form
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 xl:gap-7 items-stretch">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: TIMELINE SPINE & 4 STEP CARDS (6 Cols) */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 flex gap-2.5 sm:gap-3.5 items-stretch h-full">
          
          {/* SPINE COLUMN: 3D NUMBER BADGES & PROGRESSIVE CONNECTING LINES */}
          <div className="flex flex-col items-center justify-between shrink-0 py-0.5">
            {steps.map((step, idx) => (
              <React.Fragment key={step.num}>
                {/* ENGRAVED 3D NUMBER BADGE (SEQUENTIAL POP-IN) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.35, ease: LUXURY_EASE }}
                  className="relative group/badge"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.badgeColor} text-white font-bold flex items-center justify-center border-2 ${step.borderRing} ring-2 ring-gold-primary/30 ring-offset-1 ring-offset-[#FAF6EE] transition-transform duration-300 group-hover/badge:scale-105 select-none shrink-0 shadow-md`}
                  >
                    <span className="text-base sm:text-xl md:text-2xl font-bold font-serif tracking-tight gold-foil-text">
                      {step.num}
                    </span>
                  </div>
                </motion.div>

                {/* PROGRESSIVE CONNECTING LINE SEGMENT */}
                {idx < steps.length - 1 && (
                  <div className="w-[3px] sm:w-[3.5px] flex-1 my-0.5 rounded-full bg-navy-primary/10 shadow-xs relative overflow-hidden" style={{ minHeight: "12px" }}>
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: idx * 0.35 + 0.15, ease: "easeInOut" }}
                      style={{ originY: 0 }}
                      className={`w-full h-full bg-gradient-to-b ${step.lineGradient} opacity-90 rounded-full`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 4 STEP CARDS (WITH HERO SIDEBAR CARD STYLING + FULL FONT SIZES) */}
          <div className="flex-1 flex flex-col justify-between gap-2 sm:gap-2.5 md:gap-3 h-full">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.35 + 0.05, ease: LUXURY_EASE }}
                  className="flex-1 flex flex-col justify-center liquid-glass-card rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gold-primary/30 border-l-[5px] !border-l-gold-primary shadow-xs hover:shadow-md hover:border-gold-primary/60 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Top Subtle Gold Ambient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald/0 via-emerald/5 to-emerald/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="flex items-center gap-2 sm:gap-2.5 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-gold-tint/50 flex items-center justify-center text-navy-royal shrink-0 border border-gold-primary/30 group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-3.5 h-3.5 text-navy-royal" />
                    </div>
                    {/* Clear, Full Size Title */}
                    <h3 className="font-serif text-sm sm:text-base lg:text-lg font-black text-graphite tracking-tight leading-snug truncate">
                      {step.title}
                    </h3>
                  </div>
                  {/* Clear, Full Size Description */}
                  <p className="text-xs sm:text-[13px] text-graphite-secondary font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: BOOK YOUR FREE TRIAL FORM (STREAMLINED & COMPACT) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}
          className="lg:col-span-6 w-full h-full flex flex-col"
        >
          <div className="liquid-glass-card rounded-3xl p-3.5 sm:p-4.5 lg:p-5 border-2 border-gold-primary/35 shadow-md relative overflow-visible text-graphite flex-1 flex flex-col justify-between">
            {/* Top Subtle Gold Accent Line */}
            <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent pointer-events-none rounded-full" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5 flex-1 flex flex-col justify-between">
                {/* Form Header */}
                <div className="text-center pb-2 border-b border-gold-primary/20">
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight leading-tight text-navy-royal">
                    <span>Book Your </span>
                    <span className="gold-foil-text font-serif">Free Trial</span>
                  </h3>
                  <p className="text-[10.5px] sm:text-xs text-graphite-secondary font-semibold mt-0.5">
                    Fill out the form below & our team will reach out within 24h
                  </p>
                </div>

                {/* ROW 1: First Name & Last Name */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                      <User className="w-3 h-3 text-emerald" />
                      <span>First Name <span className="text-emerald">*</span></span>
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. Abdullah"
                      className="w-full h-8.5 sm:h-9 px-3 rounded-xl bg-white border border-emerald/20 text-graphite text-xs placeholder-graphite/40 focus:outline-none focus:border-emerald focus:ring-1.5 focus:ring-emerald/20 transition-all font-semibold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] box-border"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                      <User className="w-3 h-3 text-emerald" />
                      <span>Last Name <span className="text-emerald">*</span></span>
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Mansoor"
                      className="w-full h-8.5 sm:h-9 px-3 rounded-xl bg-white border border-emerald/20 text-graphite text-xs placeholder-graphite/40 focus:outline-none focus:border-emerald focus:ring-1.5 focus:ring-emerald/20 transition-all font-semibold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] box-border"
                    />
                  </div>
                </div>

                {/* ROW 2: Email & Student Age */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                      <Mail className="w-3 h-3 text-emerald" />
                      <span>Email <span className="text-emerald">*</span></span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full h-8.5 sm:h-9 px-3 rounded-xl bg-white border border-emerald/20 text-graphite text-xs placeholder-graphite/40 focus:outline-none focus:border-emerald focus:ring-1.5 focus:ring-emerald/20 transition-all font-semibold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] box-border"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald" />
                      <span>Student Age <span className="text-emerald">*</span></span>
                    </label>
                    <input
                      type="number"
                      min="4"
                      max="99"
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g. 12"
                      className="w-full h-8.5 sm:h-9 px-3 rounded-xl bg-white border border-emerald/20 text-graphite text-xs placeholder-graphite/40 focus:outline-none focus:border-emerald focus:ring-1.5 focus:ring-emerald/20 transition-all font-semibold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] box-border"
                    />
                  </div>
                </div>

                {/* ROW 3: Student Gender & Teacher Preference Side-by-Side */}
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Gender Selection */}
                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                      <User className="w-3 h-3 text-emerald" />
                      <span>Gender <span className="text-emerald">*</span></span>
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setGender("Male")}
                        className={`h-8 sm:h-8.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-1 ${
                          gender === "Male"
                            ? "bg-emerald text-white border-emerald shadow-xs font-black"
                            : "bg-white text-graphite-secondary border-emerald/20 hover:bg-emerald-tint shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        <span>♂ Male</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender("Female")}
                        className={`h-8 sm:h-8.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-1 ${
                          gender === "Female"
                            ? "bg-emerald text-white border-emerald shadow-xs font-black"
                            : "bg-white text-graphite-secondary border-emerald/20 hover:bg-emerald-tint shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        <span>♀ Female</span>
                      </button>
                    </div>
                  </div>

                  {/* Teacher Preference */}
                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-emerald" />
                      <span>Teacher <span className="text-emerald">*</span></span>
                    </label>
                    <div className="grid grid-cols-3 gap-1">
                      {(["Male", "Female", "Any"] as const).map((pref) => {
                        const isMatch = (pref === "Any" && teacherPreference === "No Preference") || teacherPreference === pref;
                        return (
                          <button
                            key={pref}
                            type="button"
                            onClick={() => setTeacherPreference(pref === "Any" ? "No Preference" : pref)}
                            className={`h-8 sm:h-8.5 px-1 rounded-lg text-[10.5px] sm:text-xs font-bold transition-all cursor-pointer border flex items-center justify-center text-center truncate ${
                              isMatch
                                ? "bg-emerald text-white border-emerald shadow-xs font-black"
                                : "bg-white text-graphite-secondary border-emerald/20 hover:bg-emerald-tint shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                            }`}
                          >
                            <span className="truncate">{pref}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ROW 4: Country & WhatsApp Number */}
                <div className="grid grid-cols-2 gap-2.5 items-start">
                  {/* Country Selector Dropdown */}
                  <div className="space-y-1 relative" ref={countryDropdownRef}>
                    <div className="h-4 flex items-center justify-between">
                      <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1 leading-none">
                        <Globe className="w-3 h-3 text-emerald shrink-0" />
                        <span>Country <span className="text-emerald">*</span></span>
                      </label>
                      {autoDetected && (
                        <span className="text-[8px] font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-1.5 py-0.2 rounded-full leading-none shrink-0">
                          Auto
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setCountryDropdownOpen((prev) => !prev)}
                      className="w-full h-8.5 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-white border border-emerald/20 text-graphite text-xs flex items-center justify-between focus:outline-none focus:border-emerald transition-all cursor-pointer font-semibold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] box-border"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-sm shrink-0">{selectedCountry.flag}</span>
                        <span className="truncate">{selectedCountry.name}</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-emerald shrink-0 ml-1 transition-transform duration-200 ${countryDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Searchable Dropdown Menu */}
                    {countryDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#FCFBF9] border-2 border-emerald/30 rounded-2xl shadow-[0_16px_40px_rgba(14,73,62,0.18)] overflow-hidden backdrop-blur-2xl animate-fade-in max-h-48 flex flex-col">
                        <div className="p-1.5 border-b border-emerald/15 bg-white/95 flex items-center gap-1.5">
                          <Search className="w-3 h-3 text-emerald shrink-0" />
                          <input
                            type="text"
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            placeholder="Search country..."
                            className="w-full bg-transparent text-xs text-graphite placeholder-graphite/40 focus:outline-none font-semibold"
                            autoFocus
                          />
                        </div>
                        <div className="overflow-y-auto p-1 space-y-0.5">
                          {filteredCountries.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(c);
                                setCountryDropdownOpen(false);
                                setCountrySearch("");
                              }}
                              className={`w-full px-2 py-1 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                                selectedCountry.code === c.code
                                  ? "bg-emerald-tint text-emerald font-black"
                                  : "text-graphite hover:bg-white font-semibold"
                              }`}
                            >
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span>{c.flag}</span>
                                <span className="truncate">{c.name}</span>
                              </div>
                              <span className="text-emerald font-mono text-[11px] shrink-0 ml-2 font-bold">
                                {c.dialCode}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-1">
                    <div className="h-4 flex items-center">
                      <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1 leading-none">
                        <MessageCircle className="w-3 h-3 text-emerald shrink-0" />
                        <span>WhatsApp <span className="text-emerald">*</span></span>
                      </label>
                    </div>

                    <div className="w-full h-8.5 sm:h-9 flex rounded-xl bg-white border border-emerald/20 overflow-hidden focus-within:border-emerald focus-within:ring-1.5 focus-within:ring-emerald/20 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] box-border">
                      <span className="px-2 sm:px-2.5 h-full bg-emerald-tint text-emerald font-mono text-xs font-black border-r border-emerald/20 flex items-center justify-center shrink-0">
                        {selectedCountry.dialCode}
                      </span>
                      <input
                        type="tel"
                        required
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="111 866 0083"
                        className="w-full h-full px-2.5 bg-transparent text-graphite text-xs placeholder-graphite/40 focus:outline-none font-semibold min-w-0"
                      />
                    </div>
                  </div>
                </div>

                {/* ROW 5: Choose Course */}
                <div className="space-y-1 relative z-40" ref={courseDropdownRef}>
                  <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-emerald" />
                    <span>Choose Course <span className="text-emerald">*</span></span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setCourseDropdownOpen((prev) => !prev)}
                    className="w-full h-8.5 sm:h-9 px-3 rounded-xl bg-white border border-emerald/20 text-graphite text-xs flex items-center justify-between focus:outline-none focus:border-emerald focus:ring-1.5 focus:ring-emerald/20 transition-all cursor-pointer font-semibold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] group box-border"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-4.5 h-4.5 rounded-md bg-emerald-tint flex items-center justify-center text-emerald shrink-0">
                        <selectedCourse.icon className="w-3 h-3" />
                      </div>
                      <span className="truncate text-left text-xs">{selectedCourse.title}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-emerald shrink-0 ml-1 transition-transform duration-200 ${courseDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Course Dropdown List */}
                  {courseDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#FCFBF9] border-2 border-emerald/30 rounded-2xl shadow-[0_20px_50px_rgba(14,73,62,0.2)] overflow-hidden backdrop-blur-2xl animate-fade-in max-h-52 overflow-y-auto p-1 space-y-0.5">
                      {COURSES_LIST.map((course) => {
                        const Icon = course.icon;
                        const isSelected = selectedCourse.id === course.id;
                        return (
                          <button
                            key={course.id}
                            type="button"
                            onClick={() => {
                              setSelectedCourse(course);
                              setCourseDropdownOpen(false);
                            }}
                            className={`w-full px-2.5 py-1.5 rounded-xl text-left flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                              isSelected
                                ? "bg-emerald-tint border border-emerald/30 text-emerald font-black shadow-xs"
                                : "hover:bg-white text-graphite/90 font-medium"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? "bg-emerald text-white" : "bg-emerald-tint text-emerald"}`}>
                                <Icon className="w-3 h-3" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-graphite truncate leading-tight">
                                  {course.title}
                                </p>
                                <span className="text-[9.5px] text-emerald/80 font-medium">
                                  {course.tag}
                                </span>
                              </div>
                            </div>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-emerald shrink-0 stroke-[2.5]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* ROW 6: Message (Optional) */}
                <div className="space-y-1">
                  <label className="text-[11px] sm:text-xs font-bold text-graphite flex items-center gap-1">
                    <FileText className="w-3 h-3 text-emerald" />
                    <span>Message (Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your goals, schedule preference, etc..."
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-emerald/20 text-graphite text-xs placeholder-graphite/40 focus:outline-none focus:border-emerald focus:ring-1.5 focus:ring-emerald/20 transition-all resize-none font-semibold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] min-h-[48px] sm:min-h-[52px]"
                  />
                </div>

                {/* ERROR ALERT */}
                {errorMessage && (
                  <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold animate-fade-in text-center">
                    {errorMessage}
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 sm:py-3 px-5 rounded-full btn-royal-gold text-navy-royal font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer group/submit disabled:opacity-75 shadow-[0_4px_18px_rgba(212,175,55,0.4)] border border-gold-light/60"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 border-2 border-navy-royal border-t-transparent rounded-full animate-spin" />
                        <span className="text-navy-royal font-black">Securing Your Free Trial...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-navy-royal group-hover/submit:translate-x-1 transition-transform" />
                        <span className="text-navy-royal font-black">Book Free Trial Class Now</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* SUBMISSION SUCCESS CARD */
              <div className="py-6 px-3 text-center space-y-3 animate-fade-in flex flex-col items-center justify-center h-full">
                <div className="w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center shadow-md border-2 border-white">
                  <Check className="w-6 h-6 stroke-[3] text-white" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-emerald">
                    Alhamdulillah, Request Received!
                  </h3>
                  <p className="text-xs text-graphite-secondary max-w-sm mx-auto leading-relaxed">
                    Thank you <span className="text-emerald font-bold">{firstName} {lastName}</span>. Your free trial request for <span className="text-emerald-royal font-bold">{selectedCourse.title}</span> has been received.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-emerald/20 text-xs text-graphite space-y-1 max-w-sm w-full shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-graphite-muted">Coordinator:</span>
                    <span className="font-bold text-emerald">Al-Azhar Academic Team</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-graphite-muted">WhatsApp:</span>
                    <span className="font-mono font-bold text-emerald">{selectedCountry.dialCode} {whatsappNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-graphite-muted">Response Time:</span>
                    <span className="font-bold text-emerald">Within 24 Hours</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setWhatsappNumber("");
                    setMessage("");
                  }}
                  className="px-5 py-2 rounded-full border border-emerald/30 text-emerald hover:bg-emerald-tint text-xs font-bold transition-colors cursor-pointer"
                >
                  Book Another Class
                </button>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
