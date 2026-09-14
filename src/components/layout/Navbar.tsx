"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import {
  CoursesMegaMenu,
  MEGA_MENU_DATA,
} from "@/components/layout/CoursesMegaMenu";
import {
  Home,
  BookOpen,
  Newspaper,
  Info,
  Menu,
  X,
  CalendarCheck,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  NavPricingPlanIcon,
} from "@/components/ui/SemanticCustomIcons";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileCoursesExpanded, setMobileCoursesExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile drawer is open while allowing smooth internal scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnterCourses = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveCourses = () => {
    leaveTimerRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Courses", href: "/courses", icon: BookOpen, hasMega: true },
    { name: "Articles", href: "/articles", icon: Newspaper },
    { name: "Pricing", href: "/pricing", icon: NavPricingPlanIcon },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact Us", href: "/contact", icon: PhoneCall },
  ];

  // Only apply dark hero navbar on single course and single article pages with photographic hero
  const isDarkHeroPage =
    (pathname.startsWith("/courses/") && pathname !== "/courses") ||
    (pathname.startsWith("/articles/") && pathname !== "/articles");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkHeroPage
            ? "bg-emerald-deep/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2.5 sm:py-3 border-b border-gold-primary/20"
            : "bg-[#FAF7F0]/90 backdrop-blur-xl shadow-[0_4px_25px_rgba(14,73,62,0.07)] py-2.5 sm:py-3 border-b border-gold-primary/30"
          : isDarkHeroPage
          ? "bg-gradient-to-b from-emerald-deep/90 via-emerald-deep/45 to-transparent py-3 sm:py-4 border-none"
          : "bg-transparent py-3 sm:py-4 border-b border-transparent"
      }`}
    >
      <div className="w-full layout-page-px flex items-center justify-between relative">
        {/* Brand Logo */}
        <Logo variant={isDarkHeroPage ? "dark" : scrolled ? "light" : "light"} />

        {/* Desktop Frameless Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.hasMega && pathname.startsWith("/courses"));

            if (link.hasMega) {
              return (
                <div
                  key={link.href}
                  className="relative flex items-center"
                  onMouseEnter={handleMouseEnterCourses}
                  onMouseLeave={handleMouseLeaveCourses}
                >
                  <Link
                    href={link.href}
                    prefetch={true}
                    onClick={() => setMegaMenuOpen(false)}
                    className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-extrabold transition-all duration-200 group cursor-pointer ${
                      isDarkHeroPage
                        ? isActive || megaMenuOpen
                          ? "text-gold-light scale-[1.03]"
                          : "text-white/90 hover:text-gold-light hover:scale-[1.02]"
                        : isActive || megaMenuOpen
                        ? "text-emerald scale-[1.03]"
                        : "text-graphite/80 hover:text-emerald hover:scale-[1.02]"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 xl:w-4.5 xl:h-4.5 stroke-[2.2] transition-transform duration-200 group-hover:scale-110 ${
                        isDarkHeroPage
                          ? "text-gold-primary filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                          : isActive || megaMenuOpen
                          ? "text-emerald filter drop-shadow-[0_1px_2px_rgba(14,73,62,0.35)]"
                          : "text-graphite/60 group-hover:text-emerald"
                      }`}
                    />
                    <span className={`tracking-tight font-extrabold ${isDarkHeroPage ? "[text-shadow:0_1px_3px_rgba(0,0,0,0.8)]" : "[text-shadow:0_1px_1px_rgba(255,255,255,0.8)]"}`}>
                      {link.name}
                    </span>

                    {/* Highly Visible, Styled Chevron Badge */}
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setMegaMenuOpen((prev) => !prev);
                      }}
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-full ml-0.5 transition-all duration-200 ${
                        isDarkHeroPage
                          ? megaMenuOpen
                            ? "bg-gradient-to-tr from-emerald to-emerald-light text-white shadow-[0_0_10px_rgba(14,73,62,0.7)] scale-105"
                            : "bg-white/15 text-gold-light border border-gold-primary/50 group-hover:bg-emerald group-hover:text-white"
                          : megaMenuOpen
                          ? "bg-emerald text-white shadow-xs scale-105 border border-emerald"
                          : "bg-emerald-tint text-emerald border border-emerald/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] group-hover:bg-emerald group-hover:text-white"
                      }`}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 stroke-[2.8] transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180" : "group-hover:translate-y-0.5"
                        }`}
                      />
                    </span>

                    {/* Active Indicator Underline (24K Radiant Gold) */}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    )}
                  </Link>

                  {/* Desktop Mega Menu Dropdown */}
                  <AnimatePresence>
                    {megaMenuOpen && (
                      <div
                        onMouseEnter={handleMouseEnterCourses}
                        onMouseLeave={handleMouseLeaveCourses}
                      >
                        <CoursesMegaMenu
                          isOpen={megaMenuOpen}
                          onClose={() => setMegaMenuOpen(false)}
                          onOpenBooking={onOpenBooking}
                        />
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-extrabold transition-all duration-200 group cursor-pointer ${
                  isDarkHeroPage
                    ? isActive
                      ? "text-gold-light scale-[1.03]"
                      : "text-white/90 hover:text-gold-light hover:scale-[1.02]"
                    : isActive
                    ? "text-emerald scale-[1.03]"
                    : "text-graphite/80 hover:text-emerald hover:scale-[1.02]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 xl:w-4.5 xl:h-4.5 stroke-[2.2] transition-transform duration-200 group-hover:scale-110 ${
                    isDarkHeroPage
                      ? "text-gold-primary filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : isActive
                      ? "text-emerald filter drop-shadow-[0_1px_2px_rgba(14,73,62,0.35)]"
                      : "text-graphite/60 group-hover:text-emerald"
                  }`}
                />

                <span className={`tracking-tight font-extrabold ${isDarkHeroPage ? "[text-shadow:0_1px_3px_rgba(0,0,0,0.8)]" : "[text-shadow:0_1px_1px_rgba(255,255,255,0.8)]"}`}>
                  {link.name}
                </span>

                {/* Active Indicator Underline (24K Radiant Gold) */}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop only: 24K Royal Gilded Button) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="btn-royal-gold px-6 py-2.5 rounded-full text-xs xl:text-sm tracking-wide cursor-pointer flex items-center gap-1.5 shadow-[0_4px_16px_rgba(212,175,55,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#07261F]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`p-2 rounded-xl border transition-all cursor-pointer shadow-xs active:scale-95 ${
              isDarkHeroPage
                ? "text-gold-light hover:text-white bg-white/10 border-white/20 backdrop-blur-md"
                : "text-navy-primary hover:text-gold-primary bg-[#FAF6EE]/80 border-gold-primary/30"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Luxury Slide-in Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-primary/70 backdrop-blur-md z-[998] lg:hidden"
            />

            {/* Sidebar Slide-in Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : { type: "spring", damping: 28, stiffness: 280 }
              }
              className="fixed top-0 right-0 bottom-0 w-[88vw] max-w-[360px] h-[100dvh] z-[999] bg-gradient-to-b from-emerald-royal via-emerald to-emerald-deep border-l border-gold-primary/35 p-5 sm:p-6 flex flex-col justify-between shadow-[-16px_0_40px_rgba(0,0,0,0.6)] overflow-y-auto overscroll-contain touch-pan-y lg:hidden"
            >
              {/* Drawer Top Header: Logo + Close Button */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gold-primary/25">
                  <Logo variant="dark" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-primary/20 border border-gold-primary/30 flex items-center justify-center text-white hover:text-gold-light transition-all cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links with Staggered Visual Feel */}
                <nav className="mt-5 space-y-2">
                  {navLinks.map((link, idx) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    if (link.hasMega) {
                      return (
                        <div key={link.href} className="space-y-1.5">
                          <div
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${isActive || mobileCoursesExpanded
                                ? "bg-gradient-to-r from-gold-primary/25 to-gold-primary/10 border border-gold-primary/50 text-gold-light shadow-sm"
                                : "text-gray-200 hover:text-white hover:bg-white/5 border border-transparent"
                              }`}
                            onClick={() => setMobileCoursesExpanded(!mobileCoursesExpanded)}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive || mobileCoursesExpanded
                                    ? "bg-gold-primary text-navy-primary shadow-xs"
                                    : "bg-white/10 text-gold-light"
                                  }`}
                              >
                                <Icon className="w-4 h-4 stroke-[2.2]" />
                              </div>
                              <span className="tracking-tight">{link.name}</span>
                            </div>

                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                                mobileCoursesExpanded
                                  ? "bg-gold-primary text-navy-primary shadow-xs scale-105"
                                  : "bg-white/10 text-gold-light border border-gold-primary/30"
                              }`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 stroke-[2.8] transition-transform duration-200 ${
                                  mobileCoursesExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </div>

                          {/* Mobile Courses Accordion Submenu */}
                          <AnimatePresence>
                            {mobileCoursesExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="pl-3 pr-1 py-2 space-y-3 bg-white/5 rounded-xl border border-gold-primary/20 overflow-hidden"
                              >
                                {MEGA_MENU_DATA.map((cat) => (
                                  <div key={cat.id} className="space-y-1">
                                    <Link
                                      href={`/courses?category=${encodeURIComponent(cat.categoryQuery)}`}
                                      prefetch={true}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center justify-between text-xs font-bold text-gold-light hover:text-white py-1 px-2 rounded-lg bg-white/5 border border-gold-primary/20"
                                    >
                                      <span>{cat.name}</span>
                                      <span className="text-[10px] text-gray-300">View Category →</span>
                                    </Link>

                                    <div className="pl-2 space-y-1">
                                      {cat.courses.slice(0, 3).map((c) => (
                                        <Link
                                          key={c.id}
                                          href={`/courses/${c.id}`}
                                          prefetch={true}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="block text-[11px] text-gray-300 hover:text-gold-light py-0.5 truncate"
                                        >
                                          • {c.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}

                                <div className="pt-2 border-t border-white/10 text-center">
                                  <Link
                                    href="/courses"
                                    prefetch={true}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xs font-black text-gold-light hover:underline inline-flex items-center gap-1"
                                  >
                                    <span>Browse All 18 Courses</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <motion.div
                        key={link.href}
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          prefetch={true}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive
                              ? "bg-gradient-to-r from-gold-primary/25 to-gold-primary/10 border border-gold-primary/50 text-gold-light shadow-sm"
                              : "text-gray-200 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive
                                  ? "bg-gold-primary text-navy-primary shadow-xs"
                                  : "bg-white/10 text-gold-light"
                                }`}
                            >
                              <Icon className="w-4 h-4 stroke-[2.2]" />
                            </div>
                            <span className="tracking-tight">{link.name}</span>
                          </div>

                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-gold-light shadow-[0_0_6px_rgba(244,220,140,0.8)]" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom CTA Area */}
              <div className="pt-5 mt-6 border-t border-gold-primary/20 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking?.();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F4DC8C] to-[#C7A04B] text-navy-primary font-extrabold text-sm shadow-[0_8px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Start Free Trial Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-gray-400 font-medium">
                  2 Free Evaluation Sessions · No Card Required
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

