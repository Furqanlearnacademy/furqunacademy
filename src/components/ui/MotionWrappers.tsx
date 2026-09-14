"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion, Variant, Variants } from "framer-motion";

// ============================================================================
// LUXURY TIMING & EASING PRESETS (Calm, Smooth & Apple/Stripe-grade deceleration)
// ============================================================================
export const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Smooth luxury bezier
export const CALM_DURATION = 0.95; // Calm, relaxed duration

// Standard scroll viewport settings - reliably triggers as soon as section approaches view
export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.01,
  margin: "0px 0px 50px 0px",
};

// ============================================================================
// 1. MOTION SECTION WRAPPER
// ============================================================================
interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = "",
  delay = 0,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={DEFAULT_VIEWPORT}
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : {
              duration: CALM_DURATION,
              delay,
              ease: LUXURY_EASE,
            }
      }
      className={className}
    >
      {children}
    </motion.section>
  );
};

// ============================================================================
// 2. STAGGER CONTAINER & STAGGER ITEM
// ============================================================================
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.14,
  delayChildren = 0.1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: shouldReduceMotion
            ? { duration: 0.2 }
            : {
                staggerChildren: staggerDelay,
                delayChildren,
              },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: CALM_DURATION,
      ease: LUXURY_EASE,
    },
  },
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        shouldReduceMotion
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.3 } },
            }
          : staggerItemVariants
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 3. MOTION CARD (INDIVIDUAL STANDALONE CARD WITH INVIEW & HOVER)
// ============================================================================
interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = "",
  delay = 0,
  onClick,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35, scale: 0.98 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={DEFAULT_VIEWPORT}
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : {
              duration: CALM_DURATION,
              delay,
              ease: LUXURY_EASE,
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -5,
              transition: { duration: 0.35, ease: LUXURY_EASE },
            }
      }
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 4. ANIMATED HEADING & TYPOGRAPHY MICRO-ANIMATION
// ============================================================================
interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  className = "",
  delay = 0,
  tag = "div",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[tag] as any;

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={DEFAULT_VIEWPORT}
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : {
              duration: 0.9,
              delay,
              ease: LUXURY_EASE,
            }
      }
      className={className}
    >
      {children}
    </Component>
  );
};

// ============================================================================
// 5. ANIMATED NUMERICAL COUNTER (COUNTS UP WHEN IN VIEW)
// ============================================================================
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2.2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px 100px 0px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = Math.max(duration * 1000, 300);

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * easeProgress;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(end);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value, duration]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
