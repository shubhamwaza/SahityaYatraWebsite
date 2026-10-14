"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { heroSlidesData } from "./hero/heroData";
import { ExhibitionSlide } from "./hero/ExhibitionSlide";
import { BookSpotlightSlide } from "./hero/BookSpotlightSlide";
import { FestivalSlide } from "./hero/FestivalSlide";
import { DispatchSlide } from "./hero/DispatchSlide";
import type { Locale } from "./hero/heroTypes";

const SLIDE_DURATION_MS = 8500; // 8.5 seconds for comfortable reading

export function HeroCarousel() {
  const locale = useLocale() as Locale;
  const t = useTranslations("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = heroSlidesData;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#15100D] text-white"
      aria-roledescription="carousel"
      aria-label={t("heroTitle")}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* 1. Dynamic Background Atmosphere matching Active Slide */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${activeSlide.theme} transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
      />

      {/* 2. Apple Keynote Ambient Halos */}
      <div
        className={`absolute -right-20 -top-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full ${activeSlide.accentGlow} blur-[120px] transition-all duration-700 pointer-events-none`}
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 -bottom-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#E8850A]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Subtle Archival Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 py-10 sm:py-16 lg:py-20">
        {/* ── Active Template Slide Render ── */}
        <div className="transition-opacity duration-500 ease-out">
          {activeSlide.type === "exhibition" && (
            <ExhibitionSlide slide={activeSlide} locale={locale} />
          )}

          {activeSlide.type === "book" && (
            <BookSpotlightSlide slide={activeSlide} locale={locale} />
          )}

          {activeSlide.type === "festival" && (
            <FestivalSlide slide={activeSlide} locale={locale} />
          )}

          {activeSlide.type === "dispatch" && (
            <DispatchSlide slide={activeSlide} locale={locale} />
          )}
        </div>

        {/* ── Carousel Bottom Controls & Labeled Category Capsules ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 sm:pt-10 border-t border-white/15 mt-8">
          {/* Labeled Pill Capsules (Direct Jump to Categories) */}
          <div className="flex flex-wrap items-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#E8850A] text-white shadow-md ring-2 ring-[#E8850A]/40"
                      : "bg-white/10 hover:bg-white/20 text-[#ECE3D4] border border-white/10"
                  }`}
                  aria-label={`Slide ${idx + 1}: ${slide.navPill[locale]}`}
                  aria-current={isActive ? "true" : "false"}
                >
                  <span>{slide.navPill[locale]}</span>
                  {isActive && isPlaying && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls: Prev, Next & Pause */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white transition-all cursor-pointer"
              aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
