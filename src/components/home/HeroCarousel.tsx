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
import type { Locale } from "./hero/heroTypes";

const SLIDE_DURATION_MS = 8500;

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
      className="relative w-full overflow-hidden bg-[#16110D] text-white"
      aria-roledescription="carousel"
      aria-label={t("heroTitle")}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* ── Rich Atmospheric Canvas (Dignified Warm Vignette) ── */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${activeSlide.theme} opacity-90 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#16110D] via-transparent to-black/25 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 py-10 sm:py-14 lg:py-18">
        {/* ── Active Template Slide Render ── */}
        <div className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          {activeSlide.type === "exhibition" && (
            <ExhibitionSlide slide={activeSlide} locale={locale} />
          )}

          {activeSlide.type === "book" && (
            <BookSpotlightSlide slide={activeSlide} locale={locale} />
          )}

          {activeSlide.type === "festival" && (
            <FestivalSlide slide={activeSlide} locale={locale} />
          )}
        </div>

        {/* ── Carousel Bottom Controls (Refined Segmented Indicators) ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/10 mt-8">
          {/* Segmented Slide Navigation Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#E8850A] text-white shadow-sm ring-1 ring-[#E8850A]"
                      : "bg-white/[0.07] hover:bg-white/[0.14] text-[#ECE3D4] border border-white/10"
                  }`}
                  aria-label={`Slide ${idx + 1}: ${slide.navPill[locale]}`}
                  aria-current={isActive ? "true" : "false"}
                >
                  <span>{slide.navPill[locale]}</span>
                </button>
              );
            })}
          </div>

          {/* Precision Controls: Prev, Next & Pause */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto bg-white/[0.06] p-1 rounded-full border border-white/10 backdrop-blur-xs">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="p-1.5 rounded-full hover:bg-white/15 active:scale-90 text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>

            <div className="w-px h-3.5 bg-white/15" aria-hidden="true" />

            <button
              type="button"
              onClick={prevSlide}
              className="p-1.5 rounded-full hover:bg-white/15 active:scale-90 text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="p-1.5 rounded-full hover:bg-white/15 active:scale-90 text-white/80 hover:text-white transition-all cursor-pointer"
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
