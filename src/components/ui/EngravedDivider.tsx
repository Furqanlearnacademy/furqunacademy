"use client";

import React from "react";

interface EngravedDividerProps {
  className?: string;
  withMedallion?: boolean;
}

export const EngravedDivider: React.FC<EngravedDividerProps> = ({
  className = "pt-8 sm:pt-14 pb-4 sm:pb-8",
  withMedallion = true,
}) => {
  return (
    <div className={`relative flex items-center justify-center max-w-[1300px] mx-auto px-4 sm:px-8 ${className}`}>
      {/* LEFT ENGRAVED GROOVE */}
      <div className="relative flex-1 h-[2px]">
        {/* Top Dark Carved Inset Line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B1B33]/15 to-[#0B1B33]/25 rounded-full" />
        {/* Bottom Bright Highlight Line for 3D Bevel Relief */}
        <div className="absolute inset-0 translate-y-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-white/95 rounded-full" />
        {/* Subtle Emerald Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald/20 to-emerald/40" />
      </div>

      {/* CENTRAL CARVED ISLAMIC MEDALLION */}
      {withMedallion && (
        <div className="relative mx-3 sm:mx-6 shrink-0 flex items-center justify-center">
          {/* Outer Sunken Ring */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF2EE] border-2 border-emerald/35 shadow-[inset_0_2px_4px_rgba(14,73,62,0.15),inset_0_-2px_3px_rgba(255,255,255,0.9),0_2px_8px_rgba(14,73,62,0.15)] flex items-center justify-center">
            
            {/* Inner Raised 8-Point Rub El Hizb Islamic Star */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-emerald drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Square 1 */}
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="currentColor"
                fillOpacity="0.15"
              />
              {/* Rotated Square 2 (45 degrees) */}
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="1.5"
                transform="rotate(45 12 12)"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="currentColor"
                fillOpacity="0.15"
              />
              {/* Center Core Dot */}
              <circle cx="12" cy="12" r="2.2" fill="currentColor" />
            </svg>
          </div>

          {/* Left & Right Delicate Side Dots */}
          <div className="absolute -left-2.5 w-1.5 h-1.5 rounded-full bg-emerald/70 shadow-[0_1px_0_rgba(255,255,255,0.9)]" />
          <div className="absolute -right-2.5 w-1.5 h-1.5 rounded-full bg-emerald/70 shadow-[0_1px_0_rgba(255,255,255,0.9)]" />
        </div>
      )}

      {/* RIGHT ENGRAVED GROOVE */}
      <div className="relative flex-1 h-[2px]">
        {/* Top Dark Carved Inset Line */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0B1B33]/15 to-[#0B1B33]/25 rounded-full" />
        {/* Bottom Bright Highlight Line for 3D Bevel Relief */}
        <div className="absolute inset-0 translate-y-[1.5px] bg-gradient-to-l from-transparent via-white/80 to-white/95 rounded-full" />
        {/* Subtle Emerald Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-emerald/20 to-emerald/40" />
      </div>
    </div>
  );
};
