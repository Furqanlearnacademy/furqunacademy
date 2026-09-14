"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [dismissedTooltip, setDismissedTooltip] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const phoneNumber = "201063204740";
  const defaultMessage = encodeURIComponent(
    "Assalamu Alaikum! I would like to inquire about Furqan Learn Academy classes and free evaluation trial."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-8 sm:bottom-10 lg:bottom-12 left-5 sm:left-7 lg:left-8 z-40 flex items-center gap-3 pointer-events-auto flex-row">
      {/* Floating Circular WhatsApp Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Furqan Learn Academy on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", damping: 18, stiffness: 260 }}
        className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2BF078] text-white flex items-center justify-center shadow-[0_12px_32px_rgba(37,211,102,0.42),0_4px_12px_rgba(0,0,0,0.15)] border-2 border-white/80 group cursor-pointer shrink-0"
      >
        {/* Outer Pulsing Radar Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Online Presence Indicator Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
        </span>

        {/* Authentic WhatsApp SVG Logo */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.11 1.523 5.838L.055 23.473l5.803-1.521A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.585-.494-5.088-1.356l-.365-.217-3.447.904.92-3.361-.238-.379A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </motion.a>

      {/* Interactive Floating Tooltip Pill (Opens to the right of the button) */}
      <AnimatePresence>
        {hovered && !dismissedTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-500/35 shadow-[0_10px_30px_rgba(7,22,46,0.15)] text-navy-primary shrink-0"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
            </div>

            <div className="text-left">
              <p className="text-xs font-black text-navy-primary leading-tight">
                Chat with Al-Azhar Advisor
              </p>
              <p className="text-[10px] text-emerald-800 font-semibold">
                Instant WhatsApp Support · 24/7
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setDismissedTooltip(true);
              }}
              className="text-graphite/40 hover:text-graphite/80 p-0.5 ml-1 transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
