"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Flame,
  Truck,
  Sparkles,
  ArrowRight,
  Gift,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import type { FestivalSlideData, Locale } from "./heroTypes";

type Props = {
  slide: FestivalSlideData;
  locale: Locale;
};

export function FestivalSlide({ slide, locale }: Props) {
  const isMr = locale === "mr";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[460px] lg:min-h-[500px]">
      {/* ── Left Column: Festive Announcement & Delivery Guarantee (7 cols) ── */}
      <div className="lg:col-span-7 space-y-5">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="saffron" size="md" className="shadow-xs backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 mr-1 text-[#F5A020]" />
            <span>{slide.badgeText[locale]}</span>
          </Badge>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/25 via-[#F3E5AB]/30 to-[#D4AF37]/25 border border-[#D4AF37]/50 text-[#F5E6BE] text-xs font-semibold backdrop-blur-md shadow-xs">
            <Sparkles className="w-3 h-3 text-[#F5A020]" />
            <span>{slide.festivalTag[locale]}</span>
          </div>
        </div>

        {/* Display Headline */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-[1.14] tracking-tight optical-display ${
            isMr ? "font-devanagari" : "font-latin"
          }`}
        >
          {slide.title[locale]}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#ECE3D4]/90 max-w-xl leading-relaxed font-normal">
          {slide.subtitle[locale]}
        </p>

        {/* Festive Guarantee & Perks Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-[#DED0BC]/30 shadow-lg space-y-3.5 max-w-xl">
          {/* Top Line: Safe Delivery Guarantee */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5E6BE] font-semibold pb-3 border-b border-white/15">
            <div className="p-1.5 rounded-lg bg-[#E8850A]/20 text-[#E8850A]">
              <Truck className="w-4 h-4" />
            </div>
            <span>{slide.deliveryGuarantee[locale]}</span>
          </div>

          {/* Bundle Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {slide.bundlePerks[locale].map((perk, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#ECE3D4]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#236B2B] shrink-0" />
                <span className="font-medium">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href={slide.ctaPrimary.href}>
            <Button variant="primary" size="lg" className="shadow-lg font-bold">
              <Gift className="w-4 h-4 mr-1.5" />
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

      {/* ── Right Column: The 3-Cover Overlapping Festive Cascade (5 cols) ── */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative group w-full max-w-[340px] sm:max-w-[380px] h-[340px] flex items-center justify-center">
          {/* Ambient Warm Golden Aura */}
          <div
            className="absolute inset-0 rounded-full blur-3xl scale-125 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: slide.auraColor }}
          />

          {/* Cover Fan Stack */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left Cover (Rotated -8 deg) */}
            <div className="absolute left-4 sm:left-6 w-36 sm:w-40 aspect-[2/3] -rotate-8 rounded-lg shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:-rotate-12 z-10">
              <Image
                src={slide.covers[0].image}
                alt={slide.covers[0].alt}
                fill
                sizes="(max-width: 640px) 144px, 160px"
                className="object-cover"
              />
              <div className="book-sheen" />
            </div>

            {/* Right Cover (Rotated +8 deg) */}
            <div className="absolute right-4 sm:right-6 w-36 sm:w-40 aspect-[2/3] rotate-8 rounded-lg shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:rotate-12 z-10">
              <Image
                src={slide.covers[1].image}
                alt={slide.covers[1].alt}
                fill
                sizes="(max-width: 640px) 144px, 160px"
                className="object-cover"
              />
              <div className="book-sheen" />
            </div>

            {/* Center Front Cover (Elevated & Straight) */}
            <div className="relative w-40 sm:w-44 aspect-[2/3] rounded-lg shadow-2xl border border-white/30 overflow-hidden transform transition-all duration-500 hover:scale-105 z-20">
              <Image
                src={slide.covers[2].image}
                alt={slide.covers[2].alt}
                fill
                priority
                sizes="(max-width: 640px) 160px, 176px"
                className="object-cover"
              />
              <div className="book-sheen" />
            </div>

            {/* Floating Festive Gold Badge */}
            <div className="absolute -bottom-2 sm:-bottom-3 bg-[#1F1A16]/95 backdrop-blur-md border border-[#D4AF37]/60 text-[#F5E6BE] px-4 py-1.5 rounded-full shadow-xl text-xs font-bold flex items-center gap-2 z-30">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A020]" />
              <span>{isMr ? "वार्षिक विशेषांक संच" : "Annual Special Editions"}</span>
            </div>

            {/* Complimentary Bookmark Ribbon Tag */}
            <div className="absolute -top-2 -right-1 sm:right-2 bg-[#E8850A] text-white px-3 py-1 rounded-full shadow-lg text-[10px] font-bold flex items-center gap-1 z-30">
              <Bookmark className="w-3 h-3" />
              <span>{isMr ? "+ मोफत बुकमार्क" : "+ Free Bookmark"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
