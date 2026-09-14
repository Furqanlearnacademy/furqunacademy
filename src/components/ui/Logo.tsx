import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  className = "",
  showTagline = true,
}) => {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-graphite";
  const subtextColor = isDark ? "text-gold-primary" : "text-emerald";
  const logoSrc = isDark
    ? "/images/furqan-logo-white-transparent.webp"
    : "/images/furqan-logo-transparent.webp";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none ${className}`}
      aria-label="Furqan Learn Academy Home"
    >
      {/* Brand Calligraphic Emblem */}
      <div className="relative w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <Image
          src={logoSrc}
          alt="Furqan Learn Academy Emblem"
          width={52}
          height={52}
          priority
          className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
        />
      </div>

      {/* Brand Typography (Matching Brand Identity System) */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif text-lg sm:text-2xl font-extrabold tracking-tight ${textColor} group-hover:text-emerald transition-colors`}
          >
            Furqan Learn
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.22em] ${subtextColor}`}
          >
            ACADEMY
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-semibold tracking-wider ${
              isDark ? "text-gold-light/75" : "text-graphite/70"
            } mt-1 uppercase`}
          >
            Quran • Arabic • Islamic Studies
          </span>
        )}
      </div>
    </Link>
  );
};
