"use client";

import React, { useState } from "react";
import { User, GraduationCap, Shield, BookOpen, Calendar, Clock, CheckCircle, Award, BarChart3, Users, DollarSign } from "lucide-react";

export const DashboardView: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"student" | "teacher" | "admin">("student");

  return (
    <div className="space-y-6">
      {/* Role Switcher Header Tabs */}
      <div className="neu-card p-2 bg-white/90 max-w-md mx-auto flex items-center justify-between gap-1">
        <button
          onClick={() => setActiveRole("student")}
          className={`flex-1 py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            activeRole === "student"
              ? "bg-navy-primary text-white shadow-xs"
              : "text-graphite/70 hover:bg-[#FAF8F3]"
          }`}
        >
          <User className="w-3.5 h-3.5" />
          Student View
        </button>

        <button
          onClick={() => setActiveRole("teacher")}
          className={`flex-1 py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            activeRole === "teacher"
              ? "bg-navy-primary text-white shadow-xs"
              : "text-graphite/70 hover:bg-[#FAF8F3]"
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          Teacher View
        </button>

        <button
          onClick={() => setActiveRole("admin")}
          className={`flex-1 py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            activeRole === "admin"
              ? "bg-navy-primary text-white shadow-xs"
              : "text-graphite/70 hover:bg-[#FAF8F3]"
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          Admin View
        </button>
      </div>

      {/* STUDENT DASHBOARD */}
      {activeRole === "student" && (
        <div className="space-y-6 animate-fade-in">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="neu-card p-5 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium">Ongoing Course</span>
                <h4 className="font-serif text-lg font-bold text-navy-primary mt-0.5">
                  Tajweed Mastery
                </h4>
                <div className="w-32 bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gold-primary h-full w-[75%]" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold text-gold-primary">75%</span>
            </div>

            <div className="neu-card p-5 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium">Completed Lessons</span>
                <h4 className="font-serif text-2xl font-bold text-navy-primary mt-0.5">
                  12 Lessons
                </h4>
                <span className="text-[10px] text-emerald font-semibold">+2 this week</span>
              </div>
              <BookOpen className="w-8 h-8 text-gold-primary/60" />
            </div>

            <div className="neu-card p-5 bg-gradient-to-br from-navy-primary to-navy-deep text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-champagne font-medium">Next Live Class</span>
                <h4 className="font-serif text-lg font-bold mt-0.5">
                  Tomorrow 08:00 PM
                </h4>
                <span className="text-[10px] text-gray-300 font-normal">With Sheikh Al-Azhari</span>
              </div>
              <Clock className="w-8 h-8 text-gold-primary" />
            </div>
          </div>

          {/* Recent Lessons Table */}
          <div className="neu-card p-6 bg-white space-y-4">
            <h4 className="font-serif text-xl font-bold text-navy-primary">
              Recent Lessons & Assignments
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-400 font-semibold uppercase tracking-wider">
                    <th className="pb-3">Lesson Title</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Recitation Score</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-semibold text-navy-primary">Surah Al-Baqarah (L4)</td>
                    <td className="py-3"><span className="px-2 py-0.5 rounded-full bg-soft-green text-emerald font-bold">Completed</span></td>
                    <td className="py-3 font-bold text-gold-primary">98% (A+)</td>
                    <td className="py-3"><button className="text-gold-primary font-bold hover:underline">Review Audio</button></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-navy-primary">Tajweed Rules (Madd)</td>
                    <td className="py-3"><span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">In Progress</span></td>
                    <td className="py-3 text-gray-400">Pending</td>
                    <td className="py-3"><button className="text-navy-primary font-bold hover:underline">Resume</button></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-navy-primary">Arabic Grammar (Fusha)</td>
                    <td className="py-3"><span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">Not Started</span></td>
                    <td className="py-3 text-gray-400">-</td>
                    <td className="py-3"><button className="text-gray-400 font-bold">Start</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TEACHER DASHBOARD */}
      {activeRole === "teacher" && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="neu-card p-5 bg-white">
              <span className="text-xs text-gray-500 font-medium">Assigned Students</span>
              <h4 className="font-serif text-2xl font-bold text-navy-primary mt-1">28 Active</h4>
            </div>
            <div className="neu-card p-5 bg-white">
              <span className="text-xs text-gray-500 font-medium">Classes This Month</span>
              <h4 className="font-serif text-2xl font-bold text-navy-primary mt-1">64 Hours</h4>
            </div>
            <div className="neu-card p-5 bg-white">
              <span className="text-xs text-gray-500 font-medium">Student Satisfaction</span>
              <h4 className="font-serif text-2xl font-bold text-emerald mt-1">4.98 / 5.0</h4>
            </div>
          </div>
        </div>
      )}

      {/* ADMIN DASHBOARD */}
      {activeRole === "admin" && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="neu-card p-5 bg-white">
              <span className="text-xs text-gray-500 font-medium">Total Revenue</span>
              <h4 className="font-serif text-2xl font-bold text-navy-primary mt-1">$48,250</h4>
            </div>
            <div className="neu-card p-5 bg-white">
              <span className="text-xs text-gray-500 font-medium">Total Students</span>
              <h4 className="font-serif text-2xl font-bold text-navy-primary mt-1">10,420</h4>
            </div>
            <div className="neu-card p-5 bg-white">
              <span className="text-xs text-gray-500 font-medium">Active Teachers</span>
              <h4 className="font-serif text-2xl font-bold text-navy-primary mt-1">112</h4>
            </div>
            <div className="neu-card p-5 bg-white">
              <span className="text-xs text-gray-500 font-medium">Completed Certificates</span>
              <h4 className="font-serif text-2xl font-bold text-gold-primary mt-1">8,941</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
