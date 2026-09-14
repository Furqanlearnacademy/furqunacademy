"use client";

import React, { useState, useMemo, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionWrappers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWizardModal } from "@/components/booking/BookingWizardModal";
import { CallToAction } from "@/components/home/CallToAction";
import { EngravedDivider } from "@/components/ui/EngravedDivider";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CoursesSearchFilterCard } from "@/components/courses/CoursesSearchFilterCard";
import { CoursesCategoryTabs } from "@/components/courses/CoursesCategoryTabs";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseDetailModal } from "@/components/courses/CourseDetailModal";
import { CoursesLearningPath } from "@/components/courses/CoursesLearningPath";
import { CoursesAdvisorBanner } from "@/components/courses/CoursesAdvisorBanner";
import { CoursesFAQ } from "@/components/courses/CoursesFAQ";
import { ALL_COURSES, CourseItem, COURSE_CATEGORIES } from "@/data/coursesData";
import { SearchX, RotateCcw } from "lucide-react";
import { AcademicQalamIcon } from "@/components/ui/SemanticCustomIcons";

function CoursesPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("popular");
  const [onlySanad, setOnlySanad] = useState(false);

  const gridSectionRef = useRef<HTMLDivElement>(null);

  // Sync category from URL parameter
  useEffect(() => {
    if (categoryParam) {
      const paramLower = categoryParam.toLowerCase().trim();
      const matched = COURSE_CATEGORIES.find(
        (c) => c.id.toLowerCase() === paramLower || c.name.toLowerCase() === paramLower
      );
      if (matched) {
        setSelectedCategory(matched.id);
      } else if (paramLower.includes("quran") || paramLower.includes("tajweed")) {
        setSelectedCategory("Quran Reading");
      } else if (paramLower.includes("arabic")) {
        setSelectedCategory("Arabic Language");
      } else if (paramLower.includes("islamic")) {
        setSelectedCategory("Islamic Studies");
      } else if (paramLower.includes("kid") || paramLower.includes("youth")) {
        setSelectedCategory("Kids Programs");
      }

      // Smooth scroll to catalog
      setTimeout(() => {
        const el = document.getElementById("courses-catalog-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [categoryParam]);

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_COURSES.length };
    ALL_COURSES.forEach((course) => {
      counts[course.category] = (counts[course.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter and Sort Courses
  const filteredCourses = useMemo(() => {
    let list = ALL_COURSES.filter((course) => {
      // Category filter
      if (selectedCategory !== "All" && course.category !== selectedCategory) {
        return false;
      }

      // Level filter
      if (selectedLevel !== "All Levels" && course.level !== selectedLevel) {
        return false;
      }

      // Sanad Ijazah filter
      if (onlySanad && !course.sanadIjazah) {
        return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = course.title.toLowerCase().includes(query);
        const inArabic = course.arabicTitle.includes(query);
        const inDesc = course.description.toLowerCase().includes(query);
        const inTeacher = course.instructor.name.toLowerCase().includes(query);
        const inCat = course.category.toLowerCase().includes(query);
        if (!inTitle && !inArabic && !inDesc && !inTeacher && !inCat) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    list.sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "lessons") {
        return b.lessons - a.lessons;
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      // Default: Most Popular / Featured
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.reviewsCount - a.reviewsCount;
    });

    return list;
  }, [searchQuery, selectedCategory, selectedLevel, onlySanad, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedLevel("All Levels");
    setSortBy("popular");
    setOnlySanad(false);
  };

  const handleExploreScroll = () => {
    const el = document.getElementById("courses-catalog-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenDetails = (course: CourseItem) => {
    router.push(`/courses/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-transparent text-graphite flex flex-col justify-between selection:bg-gold-primary selection:text-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="space-y-6 sm:space-y-10 lg:space-y-12 overflow-x-clip pb-16">
        
        {/* 1. TOP HERO AREA & SEARCH FILTER CARD (Responsive on Mobile, Full 100vh Viewport Height on Desktop) */}
        <div className="min-h-0 h-auto lg:min-h-screen lg:h-screen pt-[70px] sm:pt-[76px] lg:pt-20 pb-2 sm:pb-3 flex flex-col justify-between overflow-visible lg:overflow-hidden">
          <CoursesHero
            onOpenBooking={() => setBookingOpen(true)}
            onExploreClick={handleExploreScroll}
          />

          <div className="w-full layout-page-px pb-1 mt-3 lg:mt-0">
            <CoursesSearchFilterCard
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedLevel={selectedLevel}
              onLevelSelect={setSelectedLevel}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onlySanad={onlySanad}
              onToggleSanad={() => setOnlySanad(!onlySanad)}
              totalCoursesCount={ALL_COURSES.length}
              filteredCoursesCount={filteredCourses.length}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>

        {/* 2. ENGRAVED 3D ISLAMIC DIVIDER (Between Top Hero/Search Area and Catalog) */}
        <EngravedDivider className="pt-4 sm:pt-10 pb-2 sm:pb-6" />

        {/* 3. "OUR COURSES" SECTION (Max-width 1400px, Grand Title + Category Tabs + Courses Grid) */}
        <section
          id="courses-catalog-section"
          ref={gridSectionRef}
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8"
        >
          {/* Section Title (Strictly 2 lines with balanced responsive font size) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.1, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
            className="text-center max-w-3xl mx-auto space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold-primary/40 shadow-2xs">
              <AcademicQalamIcon className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-xs font-bold text-gold-dark tracking-wide">
                Academic Curriculum &amp; Programs
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight">
              <span className="engraved-emerald">Our Courses</span>
              <span className="block engraved-gold font-serif mt-1 sm:mt-1.5">
                From Foundations to Ijazah
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-graphite/80 leading-relaxed font-medium max-w-2xl mx-auto">
              Explore 18 structured 1-on-1 programs accredited by Al-Azhar scholars with personalized pacing and authentic certification.
            </p>
          </motion.div>

          {/* Category Tabs / Chips */}
          <CoursesCategoryTabs
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            categoryCounts={categoryCounts}
          />

          {/* Courses Cards Grid with Staggered Fade-in Animation */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 courses-grid-gap-var pt-2">
              {filteredCourses.map((course, idx) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={idx}
                  onOpenDetails={handleOpenDetails}
                  onOpenBooking={() => setBookingOpen(true)}
                />
              ))}
            </div>
          ) : (
            /* EMPTY SEARCH RESULTS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: LUXURY_EASE }}
              className="w-full py-16 text-center space-y-4 rounded-3xl bg-white/85 border border-gold-primary/30 p-8 shadow-2xs max-w-xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-navy-primary/10 text-gold-dark mx-auto flex items-center justify-center">
                <SearchX className="w-8 h-8 text-gold-dark" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-navy-primary">
                  No Courses Found
                </h3>
                <p className="text-xs sm:text-sm text-graphite/70">
                  No academic programs matched your current search &amp; filter criteria.
                </p>
              </div>
              <button
                onClick={handleResetFilters}
                className="liquid-glass-btn px-6 py-2.5 text-xs font-bold inline-flex items-center gap-2 cursor-pointer shadow-2xs hover:border-gold-primary"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gold-dark" />
                <span>Reset Filters &amp; Show All</span>
              </button>
            </motion.div>
          )}
        </section>

        {/* 4. ENGRAVED 3D ISLAMIC DIVIDER (Between Courses Grid and Learning Path - Image 1) */}
        <EngravedDivider className="my-6 sm:my-10" />

        {/* 5. LEARNING PATH ROADMAP (PHASES 1 TO 4) */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <CoursesLearningPath onOpenBooking={() => setBookingOpen(true)} />
        </div>

        {/* 6. ENGRAVED 3D ISLAMIC DIVIDER (Between Learning Path and Advisor Banner) */}
        <EngravedDivider className="my-6 sm:my-10" />

        {/* 7. FREE 1-ON-1 PLACEMENT ASSESSMENT BANNER */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <CoursesAdvisorBanner onOpenBooking={() => setBookingOpen(true)} />
        </div>

        {/* 8. FREQUENTLY ASKED QUESTIONS (Dark Theme Outer + Parchment Cards Inside) */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <CoursesFAQ />
        </div>

        {/* 9. ENGRAVED 3D ISLAMIC DIVIDER (Between FAQ and CallToAction - Image 2) */}
        <EngravedDivider className="my-6 sm:my-10" />

        {/* 10. CALL TO ACTION SECTION (Like Homepage) */}
        <div className="w-full">
          <CallToAction onOpenBooking={() => setBookingOpen(true)} />
        </div>
      </main>

      <Footer />

      {/* COURSE DETAILS & SYLLABUS MODAL */}
      <CourseDetailModal
        course={selectedCourse}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpenBooking={() => {
          setModalOpen(false);
          setBookingOpen(true);
        }}
      />

      {/* 1-ON-1 TRIAL BOOKING WIZARD MODAL */}
      <BookingWizardModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={null}>
      <CoursesPageContent />
    </Suspense>
  );
}
