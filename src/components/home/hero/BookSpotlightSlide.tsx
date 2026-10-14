"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  Star,
  Quote,
  Award,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import type { BookSpotlightSlideData, Locale } from "./heroTypes";

type Props = {
  slide: BookSpotlightSlideData;
  locale: Locale;
};

export function BookSpotlightSlide({ slide, locale }: Props) {
  const isMr = locale === "mr";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[460px] lg:min-h-[500px]">
      {/* ── Left Column: Narrative & Literary Accolades (7 cols) ── */}
      <div className="lg:col-span-7 space-y-5 sm:space-y-6">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="saffron" size="md" className="shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>{slide.badgeText[locale]}</span>
          </Badge>

          {/* Metallic Gold Foil Accolade Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F3E5AB]/25 to-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5E6BE] text-xs font-semibold backdrop-blur-md shadow-xs">
            <Star className="w-3 h-3 text-[#F5A020] fill-[#F5A020]" />
            <span>{slide.accolade[locale]}</span>
          </div>
        </div>

        {/* Display Headline */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight optical-display ${
            isMr ? "font-devanagari" : "font-latin"
          }`}
        >
          {slide.title[locale]}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-[#ECE3D4]/90 max-w-xl leading-relaxed font-normal">
          {slide.subtitle[locale]}
        </p>

        {/* Literary Excerpt Quote Card */}
        <div className="relative pl-4 py-2 border-l-2 border-[#E8850A]/70 bg-white/5 rounded-r-xl max-w-xl backdrop-blur-xs">
          <Quote className="w-4 h-4 text-[#F5A020] mb-1 opacity-70" />
          <p className="text-xs sm:text-sm text-[#F0E6D8] italic leading-relaxed font-serif">
            {slide.quote[locale]}
          </p>
          <span className="block text-[11px] text-[#C5B4A5] font-sans font-medium mt-1">
            {slide.bookMeta[locale]}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href={slide.ctaPrimary.href}>
            <Button variant="primary" size="lg" className="shadow-lg font-bold">
              <span>{slide.ctaPrimary.label[locale]}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>

          <Link href={slide.ctaSecondary.href}>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              <span>{slide.ctaSecondary.label[locale]}</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* ── Right Column: Physical 3D Book Feature with Ambient Aura (5 cols) ── */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative group book-stage">
          {/* Dynamic Colored Halo Bleed (Matching Book Cover) */}
          <div
            className="absolute inset-0 rounded-full blur-3xl scale-125 transition-all duration-700 pointer-events-none"
            style={{ backgroundColor: slide.auraColor }}
          />

          {/* Physical 3D Book Showcase */}
          <Link href={slide.ctaPrimary.href} className="block cursor-pointer">
            <div className="book-spine-3d relative w-56 sm:w-64 aspect-[2/3] shadow-[0_28px_60px_rgba(0,0,0,0.7),-10px_0_20px_rgba(0,0,0,0.45)] border border-white/20">
              <div className="relative w-full h-full">
                <Image
                  src={slide.coverImage}
                  alt={slide.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover"
                />

                {/* Emil Kowalski Specular Light Sheen */}
                <div className="book-sheen" />
              </div>
            </div>
          </Link>

          {/* Floating Curator Pill with Pulsing Sprout Dot */}
          <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#DED0BC] px-3.5 py-1.5 rounded-full shadow-lg text-[11px] font-bold text-[#1F1A16] flex items-center gap-1.5 z-20">
            <span className="w-2 h-2 rounded-full bg-[#236B2B] animate-pulse" />
            <span>{isMr ? "संपादकीय शिफारस" : "Curator's Choice"}</span>
          </div>

          {/* Award Seal Ribbon */}
          <div className="absolute -top-3 -left-3 sm:-left-4 bg-[#1F1A16]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#F5A020] px-3 py-1 rounded-full shadow-md text-[10px] font-bold flex items-center gap-1 z-20">
            <Award className="w-3.5 h-3.5 text-[#F5A020]" />
            <span>{isMr ? "अभिजात ग्रंथ" : "Masterpiece"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
