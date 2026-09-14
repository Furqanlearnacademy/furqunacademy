import React from "react";

// =========================================================================
// AUTHENTIC SEMANTIC CUSTOM SVG ICONS (Zero Generic Stars)
// =========================================================================

// 1. Pricing Plan & Tier Tag Icon (For Navbar and Pricing Headings)
export const NavPricingPlanIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2 10H22" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="6.5" cy="14.5" r="1.2" fill="currentColor" />
    <path d="M11 14.5H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 2. AI Coach / Intelligent Tajweed Voice Waveform Icon
export const NavAiCoachVoiceIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 12V12.01M12 9V15M16 11V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="12" cy="6.5" r="0.75" fill="currentColor" />
  </svg>
);

// 3. Academic Islamic Calligraphy Reed Pen & Ink (For Research & Article Badges)
export const AcademicQalamIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.5 2.5L21.5 5.5L8.5 18.5L3 21L5.5 15.5L18.5 2.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M14.5 6.5L17.5 9.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="15" r="0.75" fill="currentColor" />
  </svg>
);

// 4. Most Popular / Best Value Scholar Seal Badge (Replaces Star in Pricing Card)
export const BestValueRibbonIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 14.5L7 21L12 18.5L17 21L15 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 9L11.5 10.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 5. Islamic 8-Point Geometric Rosette (Khatam Rub El Hizb) Accent
export const IslamicRosetteAccentIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="5" y="5" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" transform="rotate(45 12 12)" />
    <circle cx="12" cy="12" r="2.2" fill="currentColor" />
  </svg>
);

// 6. Core Insight & Wisdom Lamp Icon (For Article key takeaways)
export const CoreWisdomInsightIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C8.13401 2 5 5.13401 5 9C5 11.3824 6.1895 13.4872 8 14.7434V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V14.7434C17.8105 13.4872 19 11.3824 19 9C19 5.13401 15.866 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M9 21H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 6V9M10.5 7.5H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 7. Verified Tutor Quality Shield (For tutor ratings and certifications)
export const VerifiedQualityShieldIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 12L11 14L15 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 8. Islamic Studies Manuscript Scroll Icon (For course selection)
export const IslamicStudiesScrollIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 3H18C19.1046 3 20 3.89543 20 5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V5C4 3.89543 4.89543 3 6 3H8Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M8 3V19" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7H16M12 11H16M12 15H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
