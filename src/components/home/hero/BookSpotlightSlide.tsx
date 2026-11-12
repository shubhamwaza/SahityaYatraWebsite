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
        {/* Badges Row: Clear, Dignified Accolades */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="saffron" size="md" className="shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>{slide.badgeText[locale]}</span>
          </Badge>

          {/* Literary Masterpiece Honor Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] border border-[#D4AF37]/40 text-[#F5E6BE] text-xs font-semibold backdrop-blur-md shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#F5A020]" />
            <span>{slide.accolade[locale]}</span>
          </div>

          {/* Curator's Choice Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#ECE3D4] text-[11px] font-medium border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34853D]" aria-hidden="true" />
            <span>{isMr ? "संपादकीय शिफारस" : "Curator's Choice"}</span>
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

        {/* Literary Excerpt Quote Card (Refined Parchment Style) */}
        <div className="relative pl-4 py-2.5 border-l-2 border-[#E8850A] bg-white/[0.04] rounded-r-xl max-w-xl backdrop-blur-xs">
          <Quote className="w-4 h-4 text-[#F5A020] mb-1 opacity-80" />
          <p className="text-xs sm:text-sm text-[#F0E6D8] italic leading-relaxed font-serif">
            {slide.quote[locale]}
          </p>
          <span className="block text-[11px] text-[#C5B4A5] font-sans font-medium mt-1.5">
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
              className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-xs font-medium"
            >
              <span>{slide.ctaSecondary.label[locale]}</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* ── Right Column: Clean 3D Physical Book Feature (5 cols) ── */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative group book-stage">
          {/* Physical 3D Book Showcase (Unobstructed Cover Art) */}
          <Link href={slide.ctaPrimary.href} className="block cursor-pointer select-none">
            <div className="book-spine-3d relative w-56 sm:w-64 aspect-[2/3] shadow-[0_24px_50px_rgba(0,0,0,0.6),-8px_0_16px_rgba(0,0,0,0.35)] border border-white/15">
              <div className="relative w-full h-full">
                <Image
                  src={slide.coverImage}
                  alt={slide.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Soft Ambient Book Surface Sheen */}
                <div className="book-sheen" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
