"use client";

import React, { useState } from "react";
import { Search, Award, CheckCircle2, Download, Printer, ShieldCheck } from "lucide-react";

export const CertificateViewer: React.FC = () => {
  const [certCode, setCertCode] = useState("RUH-2026-8941");
  const [verifiedCert, setVerifiedCert] = useState<{
    id: string;
    student: string;
    course: string;
    date: string;
    grade: string;
    instructor: string;
  } | null>({
    id: "RUH-2026-8941",
    student: "Aisha Khan",
    course: "Tajweed Rules Mastery & Quranic Recitation",
    date: "August 4, 2026",
    grade: "Pass with High Honors (Mumtaz)",
    instructor: "Sheikh Ahmed Al-Azhari",
  });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certCode.trim()) {
      setVerifiedCert({
        id: certCode.toUpperCase(),
        student: "Aisha Khan",
        course: "Tajweed Rules Mastery & Quranic Recitation",
        date: "August 4, 2026",
        grade: "Pass with High Honors (Mumtaz)",
        instructor: "Sheikh Ahmed Al-Azhari",
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Input Box */}
      <div className="neu-card p-6 bg-white/90 max-w-xl mx-auto space-y-3">
        <h3 className="font-serif text-xl font-bold text-navy-primary">
          Official Certificate Verification Portal
        </h3>
        <p className="text-xs text-gray-600">
          Enter the 12-digit serial number printed at the bottom of the diploma to verify authenticity.
        </p>

        <form onSubmit={handleVerify} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              value={certCode}
              onChange={(e) => setCertCode(e.target.value)}
              placeholder="e.g. RUH-2026-8941"
              className="w-full pl-9 pr-3 py-2 text-xs font-semibold rounded-xl border border-gray-200 uppercase bg-[#FAF8F3]"
            />
          </div>
          <button
            type="submit"
            className="neu-btn-navy px-4 py-2 text-xs font-bold shrink-0"
          >
            Verify Code
          </button>
        </form>
      </div>

      {/* Verified Certificate Viewer (Skeuomorphic Parchment Diploma) */}
      {verifiedCert && (
        <div className="max-w-3xl mx-auto animate-fade-in space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-emerald bg-soft-green p-3 rounded-xl border border-emerald/30">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald" />
              Official Verification Status: Authenticated & Registered in Academic Ledger
            </span>
            <span className="text-gray-500 font-normal">ID: {verifiedCert.id}</span>
          </div>

          {/* Skeuomorphic Parchment Certificate Card */}
          <div className="skeuo-parchment p-8 sm:p-12 rounded-2xl text-center space-y-6 relative overflow-hidden">
            {/* Corner Decorative Borders */}
            <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-gold-primary" />
            <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-gold-primary" />
            <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-gold-primary" />
            <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-gold-primary" />

            {/* Header Emblem */}
            <div className="flex flex-col items-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-primary to-[#9B782B] text-white flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7" />
              </div>
              <span className="font-serif text-emerald text-2xl font-bold tracking-tight">
                Furqan Learn Academy
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-primary">
                Academic Certificate of Completion
              </span>
            </div>

            {/* Certificate Body Text */}
            <div className="space-y-3 py-4 max-w-lg mx-auto">
              <p className="text-xs text-gray-600 font-medium italic">
                This is to certify that
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-primary border-b-2 border-gold-primary/30 pb-2">
                {verifiedCert.student}
              </h2>
              <p className="text-xs text-gray-600 font-medium">
                has successfully completed all academic requirements for the course
              </p>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-gold-primary">
                {verifiedCert.course}
              </h4>
              <p className="text-xs text-gray-500">
                Grade Achieved: <span className="font-bold text-navy-primary">{verifiedCert.grade}</span>
              </p>
            </div>

            {/* Bottom Seals & Signatures */}
            <div className="pt-6 border-t border-gold-primary/30 grid grid-cols-2 sm:grid-cols-3 items-center gap-4 text-xs">
              <div className="text-left space-y-1">
                <div className="font-serif italic font-bold text-navy-primary text-base">
                  {verifiedCert.instructor}
                </div>
                <div className="text-[10px] text-gray-500 font-semibold">
                  Al-Azhar Certified Instructor
                </div>
              </div>

              {/* Gold Foil Seal Graphic */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-primary via-gold-light to-[#9B782B] p-1 shadow-lg flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-white flex flex-col items-center justify-center text-[8px] font-bold text-white uppercase text-center leading-none">
                    <span>Verified</span>
                    <span className="text-[10px]">★</span>
                    <span>Authentic</span>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-1 col-span-2 sm:col-span-1">
                <div className="text-gray-500 font-medium text-[11px]">
                  Issue Date: <span className="font-bold text-navy-primary">{verifiedCert.date}</span>
                </div>
                <div className="text-[10px] text-gray-400">
                  Verification Code: {verifiedCert.id}
                </div>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-bold text-navy-primary bg-white border border-gray-200 rounded-xl flex items-center gap-2 hover:border-gold-primary"
            >
              <Printer className="w-4 h-4 text-gold-primary" />
              Print Certificate
            </button>
            <button
              onClick={() => alert("Downloading official PDF diploma...")}
              className="neu-btn-gold px-5 py-2 text-xs font-bold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF Diploma
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
