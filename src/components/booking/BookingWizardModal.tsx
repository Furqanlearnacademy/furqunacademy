"use client";

import React, { useState } from "react";
import { X, Check, Calendar, Clock, User, Globe, ChevronRight, ChevronLeft } from "lucide-react";

interface BookingWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingWizardModal: React.FC<BookingWizardModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [subject, setSubject] = useState("Quran & Tajweed");
  const [gender, setGender] = useState("Any");
  const [date, setDate] = useState("2026-08-06");
  const [timeSlot, setTimeSlot] = useState("06:00 PM");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFinish = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name || !email) {
      setStep(4);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name,
          lastName: "",
          email,
          teacherPreference: gender === "Any" ? "No Preference" : gender,
          courseTitle: subject,
          preferredDate: date,
          preferredTime: timeSlot,
          source: "1-on-1 Trial Booking Wizard Modal",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to book trial. Please try again.");
      }

      setSubmitted(true);
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Graceful fallback if confetti fails
      }
    } catch (err: unknown) {
      console.error("Booking error:", err);
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong while booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#05231D]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FCFBF8] rounded-3xl max-w-xl w-full border border-[#C7A04B]/40 shadow-2xl overflow-hidden relative animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-deep to-[#05231D] text-white p-6 border-b border-[#C7A04B]/30 relative">
          <button
            onClick={onClose}
            aria-label="Close Booking Modal"
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <span className="text-[10px] font-bold text-gold-primary uppercase tracking-widest">
            Step {step} of 4
          </span>
          <h3 className="font-serif text-2xl font-bold mt-1">
            Book Your Free 1-on-1 Trial Class
          </h3>

          {/* Progress Bar */}
          <div className="w-full bg-navy-primary h-1.5 rounded-full mt-4 overflow-hidden border border-gold-primary/20">
            <div
              className="bg-gold-primary h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!submitted ? (
            <>
              {/* STEP 1: SUBJECT */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-navy-primary text-base">
                    Select Your Learning Goal
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "Quran & Tajweed", title: "Quran & Tajweed", desc: "For all levels & ages" },
                      { id: "Noor Al-Bayan", title: "Noor Al-Bayan", desc: "Arabic reading for beginners" },
                      { id: "Arabic Conversation", title: "Arabic Language", desc: "Modern Standard Arabic" },
                      { id: "Islamic Studies", title: "Islamic Studies", desc: "Fiqh, Seerah, & Aqeedah" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSubject(item.id)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          subject === item.id
                            ? "bg-[#FAF8F3] border-gold-primary shadow-xs"
                            : "bg-white border-platinum hover:border-gray-300"
                        }`}
                      >
                        <div className="font-bold text-navy-primary text-sm">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: INSTRUCTOR PREFERENCE */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-navy-primary text-base">
                    Teacher Gender Preference
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {["Male", "Female", "Any"].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`p-3 rounded-xl font-semibold text-xs border transition-all ${
                          gender === g
                            ? "bg-navy-primary text-white border-navy-primary"
                            : "bg-white text-gray-700 border-gray-200"
                        }`}
                      >
                        {g} Instructor
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: DATE & TIMEZONE */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 bg-[#FAF8F3] p-2.5 rounded-lg border border-gold-primary/20">
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-gold-primary" />
                      Auto Timezone:
                    </span>
                    <span className="font-bold text-navy-primary">GMT+3 (Local Time)</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy-primary">Choose Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-xl border border-gray-200 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy-primary">Available Time Slots</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["04:00 PM", "06:00 PM", "08:00 PM", "09:30 PM"].map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setTimeSlot(slot)}
                          className={`p-2 text-xs font-semibold rounded-lg border ${
                            timeSlot === slot
                              ? "bg-gold-primary text-white border-gold-primary"
                              : "bg-white text-gray-700 border-gray-200"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT INFO */}
              {step === 4 && (
                <form onSubmit={handleFinish} className="space-y-3">
                  <h4 className="font-bold text-navy-primary text-base">
                    Student Details
                  </h4>
                  <div>
                    <label className="text-xs font-bold text-gray-600">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abdullah Rahman"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-xl border border-gray-200 mt-1 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. abdullah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-xl border border-gray-200 mt-1 bg-white"
                    />
                  </div>
                </form>
              )}

              {/* Error message */}
              {errorMessage && (
                <div className="mt-4 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold text-center animate-fade-in">
                  {errorMessage}
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    disabled={isSubmitting}
                    className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 flex items-center gap-1 cursor-pointer disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="neu-btn-gold px-6 py-2.5 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleFinish()}
                    disabled={isSubmitting}
                    className="neu-btn-navy px-6 py-2.5 text-xs font-bold flex items-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Confirming...</span>
                      </>
                    ) : (
                      <span>Confirm Free Trial</span>
                    )}
                  </button>
                )}
              </div>
            </>
          ) : (
            /* CONFIRMATION SUCCESS VIEW */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F3EE] text-[#0E7C5E] flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-emerald">
                Trial Class Booked!
              </h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                We have sent a Google Meet invitation and confirmation email to <span className="font-bold text-emerald">{email}</span>.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C7A04B]/30 text-xs text-left max-w-xs mx-auto space-y-1">
                <div><span className="font-bold">Subject:</span> {subject}</div>
                <div><span className="font-bold">Date:</span> {date} at {timeSlot}</div>
                <div><span className="font-bold">Teacher:</span> Certified Al-Azhar Scholar</div>
              </div>
              <button
                onClick={onClose}
                className="neu-btn-navy px-6 py-2.5 text-xs font-bold mt-4"
              >
                Close & Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
