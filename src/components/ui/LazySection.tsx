"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  minHeight?: string | number;
  rootMargin?: string;
  className?: string;
  id?: string;
}

/**
 * LazySection
 * Defers rendering and client hydration of below-the-fold sections
 * until the user scrolls within `rootMargin` (default 350px) of the section.
 * This frees up the CPU & GPU during initial page load, ensuring
 * that hero animations and carousels render at buttery-smooth 60fps.
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  minHeight = "400px",
  rootMargin = "350px 0px",
  className = "",
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;
    const el = containerRef.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, rootMargin]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`transition-opacity duration-500 ${className} ${isVisible ? "opacity-100" : "opacity-90"}`}
      style={{
        minHeight: !isVisible ? minHeight : undefined,
        containIntrinsicSize: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
        contentVisibility: "auto",
      }}
    >
      {isVisible ? children : (
        <div
          aria-hidden="true"
          style={{ minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight }}
          className="w-full pointer-events-none"
        />
      )}
    </div>
  );
};
