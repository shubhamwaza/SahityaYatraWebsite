"use client";

import React from "react";
import { Link } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  MapPin,
  Calendar,
  Clock,
  Navigation,
  BookOpen,
  ArrowRight,
  Sparkles,
  Ticket,
} from "lucide-react";
import type { ExhibitionSlideData, Locale } from "./heroTypes";

type Props = {
  slide: ExhibitionSlideData;
  locale: Locale;
};

export function ExhibitionSlide({ slide, locale }: Props) {
  const isMr = locale === "mr";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px] lg:min-h-[500px]">
      {/* ── Left Column: Editorial Announcement & Ticket Details (7 cols) ── */}
      <div className="lg:col-span-7 space-y-5">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="saffron" size="md" className="shadow-xs backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 mr-1" />
            <span>{slide.badgeText[locale]}</span>
          </Badge>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F3E5AB]/25 to-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5E6BE] text-xs font-semibold backdrop-blur-md shadow-xs">
            <Calendar className="w-3 h-3 text-[#F5A020]" />
            <span>{slide.liveStatus[locale]}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[#ECE3D4] text-[11px] font-medium border border-white/15">
            <Sparkles className="w-3 h-3 text-[#E8850A]" />
            <span>{slide.city[locale]}</span>
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

        {/* ── Integrated Archival Ticket Stub Feature Card ── */}
        <div className="relative p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-[#DED0BC]/30 shadow-lg space-y-3.5 max-w-xl">
          {/* Top Row: Dates & Timings */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/15 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#F5E6BE] font-semibold">
              <Calendar className="w-4 h-4 text-[#E8850A] shrink-0" />
              <span>{slide.dates[locale]}</span>
              <span className="text-white/40">•</span>
              <span className="text-[#ECE3D4] font-normal">{slide.days[locale]}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#ECE3D4]/80">
              <Clock className="w-3.5 h-3.5 text-[#E8850A] shrink-0" />
              <span>{slide.timings[locale]}</span>
            </div>
          </div>

          {/* Middle Row: Venue Location */}
          <div className="flex items-start gap-2.5 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 text-[#E8850A] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white">{slide.venueName[locale]}</p>
              <p className="text-xs text-[#C5B4A5] mt-0.5">{slide.venueAddress[locale]}</p>
            </div>
          </div>

          {/* Bottom Row: Micro Feature Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {slide.highlights[locale].map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 text-white text-[11px] font-medium border border-white/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8850A]" />
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* ── Actions Row ── */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={slide.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="primary" size="lg" className="shadow-lg font-bold">
              <Navigation className="w-4 h-4 mr-1.5" />
              <span>{slide.ctaPrimary.label[locale]}</span>
            </Button>
          </a>

          <Link href={slide.ctaSecondary.href}>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              <span>{slide.ctaSecondary.label[locale]}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* ── Right Column: Digital Commemorative Exhibition Pass Stub (5 cols) ── */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative group w-full max-w-[320px] sm:max-w-[340px]">
          {/* Dynamic Colored Halo Aura */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl scale-110 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: slide.auraColor }}
          />

          {/* The Physical Exhibition Ticket Card */}
          <div className="relative rounded-2xl bg-[#FCFBF7] text-[#1F1A16] border border-[#DED0BC] shadow-[0_24px_50px_rgba(0,0,0,0.45)] overflow-hidden">
            {/* Top Header Ribbon with Saffron Accent */}
            <div className="bg-[#1F1A16] text-[#F5E6BE] px-5 py-3.5 border-b border-[#DED0BC]/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4 text-[#E8850A]" />
                <span className="text-xs font-bold tracking-wider uppercase font-latin">
                  SahityaYatra Pass
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8850A]/20 text-[#F5A020] border border-[#E8850A]/40">
                {isMr ? "प्रवेश विनामूल्य" : "FREE ENTRY"}
              </span>
            </div>

            {/* Ticket Body Content */}
            <div className="p-5 space-y-4">
              {/* City & Year Watermark */}
              <div className="border-b border-[#DED0BC]/70 pb-3">
                <span className="text-[10px] font-bold text-[#E8850A] tracking-widest uppercase block font-latin">
                  Official Exhibition Stall
                </span>
                <h3 className="text-2xl font-black text-[#1F1A16] mt-0.5 font-devanagari">
                  {slide.city[locale]}
                </h3>
                <p className="text-xs text-[#54483E] mt-0.5 font-medium">
                  {slide.venueName[locale]}
                </p>
              </div>

              {/* Event Timing Data Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                  <span className="text-[10px] text-[#7D6F63] block font-medium">
                    {isMr ? "तारीख" : "Dates"}
                  </span>
                  <span className="font-bold text-[#1F1A16] block mt-0.5 text-xs">
                    {slide.dates[locale]}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                  <span className="text-[10px] text-[#7D6F63] block font-medium">
                    {isMr ? "वेळ" : "Timings"}
                  </span>
                  <span className="font-bold text-[#1F1A16] block mt-0.5 text-xs">
                    {slide.timings[locale]}
                  </span>
                </div>
              </div>

              {/* Perforated Tear-Line with Visual Punch-Out Notches */}
              <div className="relative py-2 flex items-center justify-between">
                <span className="absolute -left-7 w-4 h-4 rounded-full bg-[#150F0C] border-r border-[#DED0BC]" />
                <div className="w-full border-t-2 border-dashed border-[#DED0BC]" />
                <span className="absolute -right-7 w-4 h-4 rounded-full bg-[#150F0C] border-l border-[#DED0BC]" />
              </div>

              {/* Bottom Stub: Barcode & Heritage Seal */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <div className="h-6 flex items-center gap-[2px] opacity-75">
                    {[12, 18, 8, 22, 14, 20, 6, 16, 24, 10, 18, 14, 8, 20, 12].map(
                      (h, i) => (
                        <span
                          key={i}
                          className="w-[2.5px] bg-[#1F1A16] rounded-xs"
                          style={{ height: `${h}px` }}
                        />
                      )
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-[#7D6F63] tracking-widest mt-1 block">
                    SY-PUN-2026-EXH
                  </span>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#236B2B]/10 border border-[#236B2B]/30 text-[#236B2B] text-[10px] font-bold">
                    <BookOpen className="w-3 h-3" />
                    <span>२५+ वर्षे परंपरा</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
