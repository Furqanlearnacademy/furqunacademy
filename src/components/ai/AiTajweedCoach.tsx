"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { NavAiCoachVoiceIcon } from "@/components/ui/SemanticCustomIcons";

export const AiTajweedCoach: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState("surah-fatiha");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Audio wave animation simulator
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      ctx.beginPath();
      ctx.moveTo(0, height / 2);

      for (let x = 0; x < width; x += 4) {
        const freq = isRecording ? 0.05 : 0.02;
        const amp = isRecording ? 25 : 8;
        const y = height / 2 + Math.sin(x * freq + phase) * amp * Math.cos(x * 0.01);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = isRecording ? "#C7A04B" : "rgba(7, 22, 46, 0.25)";
      ctx.lineWidth = isRecording ? 3 : 1.5;
      ctx.stroke();

      phase += isRecording ? 0.15 : 0.05;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isRecording]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setAnalyzed(false);

    // Simulate 4 seconds recording
    setTimeout(() => {
      setIsRecording(false);
      setIsAnalyzing(true);

      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalyzed(true);
      }, 1500);
    }, 3500);
  };

  return (
    <div className="neu-card p-6 sm:p-8 bg-white/95 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F3] border border-gold-primary/30 text-xs font-bold text-gold-primary">
            <NavAiCoachVoiceIcon className="w-3.5 h-3.5" />
            AI Audio Intelligence
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-primary mt-1">
            AI Tajweed & Pronunciation Coach
          </h3>
          <p className="text-xs sm:text-sm text-graphite/70">
            Recite into your microphone to get instant phoneme analysis and Tajweed accuracy feedback.
          </p>
        </div>

        {/* Surah Selector */}
        <select
          value={selectedSurah}
          onChange={(e) => setSelectedSurah(e.target.value)}
          className="px-3 py-2 text-xs font-semibold text-navy-primary bg-[#FAF8F3] border border-gold-primary/30 rounded-xl focus:outline-none"
        >
          <option value="surah-fatiha">Surah Al-Fatiha (Ayah 1-3)</option>
          <option value="surah-ikhlas">Surah Al-Ikhlas (Complete)</option>
          <option value="surah-falaq">Surah Al-Falaq (Ayah 1-2)</option>
        </select>
      </div>

      {/* Target Recitation Box */}
      <div className="p-4 rounded-xl bg-[#FAF8F3] border border-gold-primary/20 text-center space-y-2">
        <span className="text-[11px] font-bold text-gold-primary uppercase tracking-wider">
          Practice Verse
        </span>
        <p className="font-serif text-2xl sm:text-3xl text-navy-primary font-bold dir-rtl leading-loose">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <p className="text-xs text-gray-500 italic">
          "Bismillahir-Rahmanir-Raheem"
        </p>
      </div>

      {/* Waveform Visualizer Canvas */}
      <div className="relative h-28 rounded-xl bg-navy-primary p-4 flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          width={600}
          height={100}
          className="w-full h-full"
        />

        {isAnalyzing && (
          <div className="absolute inset-0 bg-navy-primary/90 backdrop-blur-xs flex items-center justify-center gap-3 text-gold-primary text-xs font-bold">
            <RefreshCw className="w-5 h-5 animate-spin" />
            Analyzing Makharij & Tajweed rules...
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex justify-center">
        {!isRecording && !isAnalyzing ? (
          <button
            onClick={handleStartRecording}
            className="neu-btn-gold px-8 py-3 text-sm font-bold flex items-center gap-2"
          >
            <Mic className="w-4 h-4" />
            <span>{analyzed ? "Try Again" : "Start Live Recitation"}</span>
          </button>
        ) : isRecording ? (
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 text-white text-xs font-bold animate-pulse">
            <Mic className="w-4 h-4" />
            <span>Recording... Speak clearly</span>
          </div>
        ) : null}
      </div>

      {/* Analysis Results Display */}
      {analyzed && (
        <div className="space-y-4 pt-4 border-t border-platinum animate-fade-in">
          <div className="flex items-center justify-between p-4 rounded-xl bg-soft-green border border-emerald/30">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald" />
              <div>
                <h4 className="text-sm font-bold text-navy-primary">
                  Tajweed Accuracy: 96%
                </h4>
                <p className="text-xs text-emerald">
                  Excellent Madd extension and clear pronunciation!
                </p>
              </div>
            </div>
            <span className="text-xl font-bold font-serif text-emerald">
              A+
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E7E8EB]">
              <span className="text-[10px] font-bold text-gray-400 uppercase">
                Madd Extension
              </span>
              <div className="text-sm font-bold text-emerald mt-0.5">
                2.1s (Perfect)
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E7E8EB]">
              <span className="text-[10px] font-bold text-gray-400 uppercase">
                Ghunnah Nasalization
              </span>
              <div className="text-sm font-bold text-emerald mt-0.5">
                Clear & Sustained
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E7E8EB]">
              <span className="text-[10px] font-bold text-gray-400 uppercase">
                Makhraj Precision
              </span>
              <div className="text-sm font-bold text-[#0E7C5E] mt-0.5">
                98% Vocal Pitch
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
