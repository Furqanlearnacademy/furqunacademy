import React from "react";
import Link from "next/link";
import { Award, ArrowRight, CheckCircle } from "lucide-react";

export const GetCertifiedBanner: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 xl:px-14 w-full pb-16">
      <div className="skeuo-parchment rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4 text-left max-w-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-primary to-[#9B782B] text-white flex items-center justify-center shrink-0 shadow-lg shadow-gold-primary/30">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-navy-primary text-white text-[10px] font-bold uppercase tracking-wider mb-1">
              <CheckCircle className="w-3 h-3 text-gold-primary" />
              Accredited Ijazah & Diplomas
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-primary">
              Get Certified
            </h3>
            <p className="text-xs sm:text-sm text-graphite/80 mt-1">
              Complete our structured Quran, Tajweed, or Arabic courses and earn an official recognized certificate signed by Al-Azhar scholars.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/certificates"
            className="neu-btn-navy px-6 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2"
          >
            <span>Verify Certificate</span>
            <ArrowRight className="w-4 h-4 text-gold-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};
