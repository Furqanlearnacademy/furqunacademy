import React from "react";
import Link from "next/link";
import {
  AzharScholarIcon,
  OneOnOneLiveIcon,
  StructuredHifzIcon,
  IjazahSanadIcon,
  FamilyScheduleIcon,
  AzharSanadBadgeIcon,
  EnrollKeyArrowIcon,
} from "./PopularCoursesIcons";

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Qualified Al-Azhar Scholars",
      desc: "Native Egyptian certified Azhari instructors",
      icon: AzharScholarIcon,
    },
    {
      title: "1-on-1 & Interactive Sessions",
      desc: "Personalized pace and direct correction",
      icon: OneOnOneLiveIcon,
    },
    {
      title: "Structured Tajweed & Hifz Path",
      desc: "Step-by-step accredited curriculum",
      icon: StructuredHifzIcon,
    },
    {
      title: "Certified Ijazah with Sanad",
      desc: "Connected lineage back to Prophet (ﷺ)",
      icon: IjazahSanadIcon,
    },
    {
      title: "Flexible Family 24/7 Scheduling",
      desc: "Learn from anywhere in any timezone",
      icon: FamilyScheduleIcon,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#082922] via-[#051C17] to-[#031410] backdrop-blur-xl rounded-3xl p-4 sm:p-5 py-5 border border-gold-primary/45 shadow-[0_12px_36px_rgba(0,0,0,0.4)] relative flex flex-col justify-between overflow-hidden text-white h-full group hover:border-gold-primary/70 transition-all duration-300">
      {/* Top Subtle Gold Ambient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent pointer-events-none" />

      <div className="space-y-3">
        {/* Badge (Centered) */}
        <div className="flex items-center justify-center text-center">
          <span className="text-[10.5px] font-bold text-gold-light bg-navy-royal/70 border border-gold-primary/50 px-3 py-1 rounded-full shadow-xs inline-flex items-center gap-1.5 mx-auto">
            <AzharSanadBadgeIcon className="w-3.5 h-3.5 text-gold-primary" />
            <span>Why Furqan Learn?</span>
          </span>
        </div>

        {/* Heading & Subtitle (Centered) */}
        <div className="text-center">
          <h4 className="font-serif text-lg xl:text-xl font-bold text-white tracking-tight">
            <span>Why Choose </span>
            <span className="gold-foil-text font-serif">Our Academy?</span>
          </h4>
          <p className="text-[11.5px] text-[#FAF6EE]/85 font-medium leading-relaxed mt-0.5 max-w-xs mx-auto">
            Traditional Islamic scholarship with modern AI tools.
          </p>
        </div>

        {/* Benefits List with Custom Meaningful SVGs */}
        <ul className="space-y-2 pt-1.5 border-t border-gold-primary/20">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <li
                key={idx}
                className="flex items-center gap-2.5 p-1.5 rounded-xl bg-navy-royal/60 border border-gold-primary/25 hover:border-gold-primary/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-gold-primary/15 border border-gold-primary/40 flex items-center justify-center text-gold-light shrink-0">
                  <Icon className="w-3.5 h-3.5 text-gold-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11.5px] font-extrabold text-white truncate">
                    {benefit.title}
                  </div>
                  <div className="text-[9.5px] font-semibold text-gold-light/75 truncate">
                    {benefit.desc}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Action */}
      <div className="pt-3 border-t border-gold-primary/20 mt-2">
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-full btn-royal-gold text-navy-royal font-black text-xs transition-all duration-300 shadow-md hover:shadow-lg border border-gold-light/60 group/link cursor-pointer"
        >
          <span>Learn More About Us</span>
          <EnrollKeyArrowIcon className="w-3.5 h-3.5 text-navy-royal group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
