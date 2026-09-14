import React from "react";

// ==========================================
// 1. CATEGORY ICONS
// ==========================================

export const AllFeaturedIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L14.39 8.26L21 9.27L16.2 13.97L17.33 20.54L12 17.27L6.67 20.54L7.8 13.97L3 9.27L9.61 8.26L12 2Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="11.5" r="2.5" fill="currentColor" />
  </svg>
);

export const QuranReadingIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Open Quran Book on Rehal Stand */}
    <path
      d="M2 5.5C3.8 4.6 6.3 4.2 9 4.8C10.6 5.1 11.6 6 12 6.8C12.4 6 13.4 5.1 15 4.8C17.7 4.2 20.2 4.6 22 5.5V18.5C20.2 17.6 17.7 17.2 15 17.8C13.4 18.1 12.4 19 12 19.8C11.6 19 10.6 18.1 9 17.8C6.3 17.2 3.8 17.6 2 18.5V5.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 7V19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 8.5C7.2 8.2 8.5 8.3 9.5 8.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14.5 8.7C15.5 8.3 16.8 8.2 18 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    {/* Rehal Crossed Base */}
    <path d="M6 21L18 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const TajweedVoiceIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Vocal Recitation Wave & Tilawah Resonance */}
    <path d="M3 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 3V21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M15 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 11V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 2C13.5 2 15.5 3 17 4.5" stroke="currentColor" strokeWidth="1.4" strokeDasharray="1.5 2" />
  </svg>
);

export const ArabicCalligraphyIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Arabic Letter 'Dad' and Calligraphic Reed Qalam */}
    <path
      d="M4 14.5C5.5 13 8 12 11 12C14.5 12 17 13.5 17 16C17 18 15 19.5 12 19.5C8 19.5 5 17.5 4 14.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 15.5C18.5 15.5 20.5 16.5 20.5 18C20.5 20 18 21.5 14 21.5C10 21.5 7 20 6 18.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Nuqta (Calligraphy Dot) */}
    <rect x="10.5" y="6" width="3" height="3" transform="rotate(45 10.5 6)" fill="currentColor" />
    {/* Qalam Nib */}
    <path d="M19 2.5L21.5 5L15 11.5L12.5 9L19 2.5Z" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const IslamicStudiesIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mosque Dome, Crescent & Minaret */}
    <path
      d="M12 3V5M12 5C8.5 7.5 7 11 7 14V21H17V14C17 11 15.5 7.5 12 5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Crescent Finial */}
    <path
      d="M13.2 2.2C12.5 2.5 12 3.2 12 4C12 4.8 12.5 5.5 13.2 5.8C12.8 6 12.3 6 11.8 5.8C10.7 5.2 10.3 3.8 10.9 2.7C11.3 2.1 12 1.8 12.6 1.8C12.8 1.8 13 1.9 13.2 2.2Z"
      fill="currentColor"
    />
    {/* Mihrab Arch Door */}
    <path d="M10 21V16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    {/* Base Horizon */}
    <path d="M3 21H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// ==========================================
// 2. COURSE CARD BADGE ICONS
// ==========================================

export const LevelSeedBeginnerIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Foundation / Beginner Step */}
    <path d="M12 21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M12 11C12 7.5 15 5 18.5 5C18.5 8.5 16 11.5 12 11Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C12 12.5 9.5 10.5 7 10.5C7 13 9 15.5 12 15Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="21" r="1.5" fill="currentColor" />
  </svg>
);

export const LevelStepIntermediateIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dual Rising Crest / Ascending Step */}
    <path d="M4 18L10 12L14 16L20 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8H20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4" cy="18" r="1.5" fill="currentColor" />
    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
    <circle cx="14" cy="16" r="1.5" fill="currentColor" />
    <circle cx="20" cy="8" r="1.5" fill="currentColor" />
  </svg>
);

export const LevelMasterAdvancedIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scholar Mastery Crown & Seal */}
    <path
      d="M3 17L5 7L10 12L12 4L14 12L19 7L21 17H3Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="5" cy="6" r="1.2" fill="currentColor" />
    <circle cx="12" cy="3" r="1.2" fill="currentColor" />
    <circle cx="19" cy="6" r="1.2" fill="currentColor" />
    <path d="M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const QualityScoreBadgeIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Laurel Wreath Excellence Seal */}
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 7C6.5 8.5 7 10 7 12C7 14 6.5 15.5 6 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M18 7C17.5 8.5 17 10 17 12C17 14 17.5 15.5 18 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const AzharSanadBadgeIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Al-Azhar Mosque & Connected Chain Ribbon */}
    <path d="M12 2L14 5H10L12 2Z" fill="currentColor" />
    <path d="M12 5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M5 21V10C5 9.4 5.4 9 6 9H18C18.6 9 19 9.4 19 10V21" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 13C9 11.3 10.3 10 12 10C13.7 10 15 11.3 15 13V21H9V13Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 21H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// ==========================================
// 3. CARD METADATA ICONS
// ==========================================

export const StudentsGroupIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 20C17 17.8 14.8 16 12 16C9.2 16 7 17.8 7 20"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M21 19C21 17.5 19.5 16.2 17.5 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="19" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 19C3 17.5 4.5 16.2 6.5 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="5" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const LessonsBookletIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 19.5V4.5C4 3.7 4.7 3 5.5 3H19.5V21H5.5C4.7 21 4 20.3 4 19.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4 17.5H19.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 7.5H15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8 11.5H13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const DurationTimeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7V12L15.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3V1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 23V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const DetailsInfoIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="1.25" fill="currentColor" />
  </svg>
);

export const EnrollKeyArrowIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ==========================================
// 4. WHY CHOOSE US CUSTOM BENEFIT ICONS
// ==========================================

export const AzharScholarIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Azhar Scholar Turban & Aura */}
    <path d="M12 2C7 2 5 6 5 8C5 10 7 11 12 11C17 11 19 10 19 8C19 6 17 2 12 2Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6.5 8.5C6.5 13 9 15 12 15C15 15 17.5 13 17.5 8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 22C4 18 7.5 17 12 17C16.5 17 20 18 20 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Star of knowledge on turban */}
    <circle cx="12" cy="5.5" r="1" fill="currentColor" />
  </svg>
);

export const OneOnOneLiveIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Live Interactive 1-on-1 Studio & Mic */}
    <rect x="2" y="4" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8" cy="11" r="2.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="16" cy="11" r="2.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M11 11H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StructuredHifzIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Structured Memorization Milestone Ribbon */}
    <path d="M12 3L4 7V13C4 18 7.5 21.5 12 22C16.5 21.5 20 18 20 13V7L12 3Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IjazahSanadIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ijazah Sanad Diploma Scroll with Wax Seal */}
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 7H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8 10H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="15" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 14L13 16L11 16L12 14Z" fill="currentColor" />
  </svg>
);

export const FamilyScheduleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 24/7 Global Flexible Family Calendar */}
    <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 9H21" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="8" cy="14" r="1.2" fill="currentColor" />
    <circle cx="12" cy="14" r="1.2" fill="currentColor" />
    <circle cx="16" cy="14" r="1.2" fill="currentColor" />
    <circle cx="8" cy="17.5" r="1.2" fill="currentColor" />
    <circle cx="12" cy="17.5" r="1.2" fill="currentColor" />
  </svg>
);

// ==========================================
// 5. STUDENT REVIEW ICONS
// ==========================================

export const IslamicCalligraphyQuoteIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Elegant Quranic Quote Marks */}
    <path
      d="M5 14C5 11 7 8.5 10 8V10C8.5 10 7.5 11 7.5 12H10V17H5V14Z"
      fill="currentColor"
    />
    <path
      d="M14 14C14 11 16 8.5 19 8V10C17.5 10 16.5 11 16.5 12H19V17H14V14Z"
      fill="currentColor"
    />
  </svg>
);

export const VerifiedStudentSealIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L14.7 4.5L18.4 4.3L19.8 7.7L23 9.7L22.4 13.4L23.9 16.8L21 19.1L20.2 22.8L16.5 23.1L14.1 26L11 24.3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8.5 12.5L11 15L16 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
