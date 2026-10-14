"use client";

import React from "react";
import { Link } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import type { DispatchSlideData, Locale } from "./heroTypes";

type Props = {
  slide: DispatchSlideData;
  locale: Locale;
};

export function DispatchSlide({ slide, locale }: Props) {
  const isMr = locale === "mr";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[460px] lg:min-h-[500px]">
      {/* ── Left Column: Editorial Dispatch Narrative & Mission (7 cols) ── */}
      <div className="lg:col-span-7 space-y-5">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="saffron" size="md" className="shadow-xs backdrop-blur-md">
            <Search className="w-3.5 h-3.5 mr-1" />
            <span>{slide.badgeText[locale]}</span>
          </Badge>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#236B2B]/20 via-[#34853D]/25 to-[#236B2B]/20 border border-[#236B2B]/40 text-[#A7F3D0] text-xs font-semibold backdrop-blur-md shadow-xs">
            <ShieldCheck className="w-3 h-3 text-[#34D399]" />
            <span>{slide.dispatchTag[locale]}</span>
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

        {/* Archival Founder Quote & Service Pillars Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-[#DED0BC]/30 shadow-lg space-y-3.5 max-w-xl">
          {/* Founder Quotation */}
          <div className="border-l-2 border-[#E8850A] pl-3.5 py-1">
            <p className="text-xs sm:text-sm text-[#F5E6BE] italic leading-relaxed font-serif">
              {slide.letterQuote[locale]}
            </p>
            <span className="block text-[11px] text-[#C5B4A5] font-sans font-medium mt-1">
              {slide.curatorNote[locale]}
            </span>
          </div>

          {/* Sourcing Highlights */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10">
            {slide.highlights[locale].map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-white text-[11px] font-medium border border-white/10"
              >
                <CheckCircle className="w-3 h-3 text-[#236B2B]" />
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href={slide.ctaPrimary.href}>
            <Button variant="primary" size="lg" className="shadow-lg font-bold">
              <Search className="w-4 h-4 mr-1.5" />
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
              <BookOpen className="w-4 h-4 mr-1.5" />
              <span>{slide.ctaSecondary.label[locale]}</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* ── Right Column: Archival Sourcing Bureau Card (5 cols) ── */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative group w-full max-w-[320px] sm:max-w-[340px]">
          {/* Dynamic Green/Emerald Ambient Aura */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl scale-110 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: slide.auraColor }}
          />

          {/* The Archival Sourcing Card */}
          <div className="relative rounded-2xl bg-[#FCFBF7] text-[#1F1A16] border border-[#DED0BC] shadow-[0_24px_50px_rgba(0,0,0,0.45)] overflow-hidden">
            {/* Top Seal Header */}
            <div className="bg-[#14231A] text-[#A7F3D0] px-5 py-3.5 border-b border-[#DED0BC]/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                <span className="text-xs font-bold tracking-wider uppercase font-latin">
                  Rare Book Bureau
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#34D399]/20 text-[#A7F3D0] border border-[#34D399]/30">
                २५ वर्षे अनुभव
              </span>
            </div>

            {/* Sourcing Process Steps */}
            <div className="p-5 space-y-4">
              <div className="border-b border-[#DED0BC]/70 pb-3">
                <span className="text-[10px] font-bold text-[#236B2B] tracking-widest uppercase block font-latin">
                  Bespoke Archive Sourcing
                </span>
                <h3 className="text-xl font-bold text-[#1F1A16] mt-0.5 font-devanagari">
                  {isMr ? "दुर्मीळ ग्रंथ शोध मोहीम" : "Rare Book Search"}
                </h3>
                <p className="text-xs text-[#54483E] mt-0.5">
                  {isMr
                    ? "कोणत्याही जुन्या किंवा अप्रकाशित ग्रंथासाठी"
                    : "For any out-of-print classic or archive title"}
                </p>
              </div>

              {/* 3 Step Protocol */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                  <span className="w-5 h-5 rounded-full bg-[#E8850A]/20 text-[#E8850A] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    १
                  </span>
                  <div>
                    <span className="font-bold text-[#1F1A16] block">
                      {isMr ? "नाव व माहिती पाठवा" : "Submit Title & Author"}
                    </span>
                    <span className="text-[11px] text-[#7D6F63]">
                      {isMr ? "ऑनलाइन फॉर्म किंवा व्हॉट्सॲपद्वारे" : "Via form or direct message"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                  <span className="w-5 h-5 rounded-full bg-[#236B2B]/20 text-[#236B2B] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    २
                  </span>
                  <div>
                    <span className="font-bold text-[#1F1A16] block">
                      {isMr ? "प्रकाशक व वाचनालय शोध" : "Archival Network Search"}
                    </span>
                    <span className="text-[11px] text-[#7D6F63]">
                      {isMr ? "महाराष्ट्रातील जुन्या संग्रहातून" : "Across Maharashtra publishers"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                  <span className="w-5 h-5 rounded-full bg-[#3F51B5]/20 text-[#3F51B5] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    ३
                  </span>
                  <div>
                    <span className="font-bold text-[#1F1A16] block">
                      {isMr ? "सुरक्षित घरपोच डिलिव्हरी" : "Secure Doorstep Delivery"}
                    </span>
                    <span className="text-[11px] text-[#7D6F63]">
                      {isMr ? "खात्रीशीर मूळ छापील प्रत" : "100% authentic print copy"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Authentic Footer */}
              <div className="pt-2 border-t border-[#DED0BC]/70 flex items-center justify-between text-[11px] text-[#54483E]">
                <span className="flex items-center gap-1 font-semibold text-[#236B2B]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {isMr ? "अस्सल प्रतीची खात्री" : "100% Verified Editions"}
                </span>
                <Link
                  href="/contact"
                  className="font-bold text-[#E8850A] hover:underline flex items-center gap-0.5"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>{isMr ? "चौकशी करा ↗" : "Inquire ↗"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
