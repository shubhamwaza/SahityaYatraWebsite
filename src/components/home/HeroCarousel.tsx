"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  BookOpen,
  Sparkles,
  MapPin,
} from "lucide-react";

export function HeroCarousel() {
  const locale = useLocale();
  const t = useTranslations("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: "slide-1",
      badgeText: locale === "mr" ? "साहित्य संवर्धन" : "Literary Curation",
      badgeIcon: Sparkles,
      title:
        locale === "mr"
          ? "तुमचा साहित्य प्रवास इथून सुरू होतो"
          : "Your Literary Journey Begins Here",
      subtitle:
        locale === "mr"
          ? "मराठी व इंग्रजी साहित्याची समृद्ध दालन — कादंबऱ्या, कथासंग्रह, चरित्रे आणि विचारवंत लेखकांची निवडक पुस्तके."
          : "A curated sanctuary of Marathi and English literature — novels, biographies, history, and thought-provoking writing.",
      ctaPrimary: {
        label: t("heroCta"),
        href: "/shop",
      },
      ctaSecondary: {
        label: locale === "mr" ? "मराठी पुस्तके" : "Marathi Books",
        href: "/collections/marathi-books",
      },
      theme: "from-[#2E2620] via-[#3D332B] to-[#241E1A]",
      accentGlow: "bg-[#E8850A]/20",
    },
    {
      id: "slide-2",
      badgeText: locale === "mr" ? "मराठी अभिजात" : "Marathi Classics",
      badgeIcon: BookOpen,
      title:
        locale === "mr"
          ? "अभिजात व समकालीन साहित्याची ओळख"
          : "Celebrated Marathi & Indian Masterpieces",
      subtitle:
        locale === "mr"
          ? "पु. ल. देशपांडे, वि. स. खांडेकर, विश्वास पाटील, साने गुरुजी यांच्या अजरामर कलाकृती आता एकाच ठिकाणी."
          : "Iconic works by Pu La Deshpande, V. S. Khandekar, Vishwas Patil, and Sane Guruji preserved for generations of readers.",
      ctaPrimary: {
        label: locale === "mr" ? "संग्रह पाहा" : "Explore Classics",
        href: "/collections/marathi-books",
      },
      ctaSecondary: {
        label: locale === "mr" ? "सर्व पुस्तके" : "All Books",
        href: "/shop",
      },
      theme: "from-[#301E1A] via-[#48281F] to-[#251613]",
      accentGlow: "bg-[#D93020]/20",
    },
    {
      id: "slide-3",
      badgeText: locale === "mr" ? "प्रदर्शन परंपरा" : "Exhibition Heritage",
      badgeIcon: MapPin,
      title:
        locale === "mr"
          ? "ग्रंथ प्रदर्शने व प्रत्यक्ष पुस्तक संवाद"
          : "Rooted in Exhibitions, Delivered Across India",
      subtitle:
        locale === "mr"
          ? "ऑफलाइन ग्रंथ प्रदर्शनांच्या समृद्ध अनुभवातून थेट वाचकांच्या हाती. आता ऑनलाइन दालनाद्वारे संपूर्ण भारतात घरपोच."
          : "Born from offline book exhibitions and personal curation, now bringing trusted delivery to literature enthusiasts across India.",
      ctaPrimary: {
        label: locale === "mr" ? "आमच्याबद्दल जाणून घ्या" : "Our Story",
        href: "/about",
      },
      ctaSecondary: {
        label: locale === "mr" ? "नवीन आगमन" : "New Arrivals",
        href: "/shop",
      },
      theme: "from-[#1F2C24] via-[#2A3C32] to-[#17221C]",
      accentGlow: "bg-[#2E7D32]/25",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const activeSlide = slides[currentSlide];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1A1512] text-white"
      aria-roledescription="carousel"
      aria-label={t("heroTitle")}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Gradient & Ambient Warmth */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${activeSlide.theme} transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
      />

      {/* Saffron & Sprout Ambient Glows (Apple Keynote Style) */}
      <div
        className={`absolute -right-24 -top-24 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full ${activeSlide.accentGlow} blur-3xl transition-all duration-700 pointer-events-none`}
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 -bottom-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#E8850A]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle literary dot matrix grid */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 py-12 sm:py-20 lg:py-24">
        {/* 2-Column Apple Books Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[420px]">
          {/* Left Column: Narrative & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="saffron" size="md" className="shadow-xs backdrop-blur-md">
                <BadgeIcon className="w-3.5 h-3.5 mr-1" />
                <span>{activeSlide.badgeText}</span>
              </Badge>
            </div>

            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight ${
                locale === "mr" ? "font-devanagari" : "font-latin"
              }`}
            >
              {activeSlide.title}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#ECE3D4]/90 max-w-xl leading-relaxed font-normal">
              {activeSlide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href={activeSlide.ctaPrimary.href}>
                <Button variant="primary" size="lg" className="shadow-lg">
                  <span>{activeSlide.ctaPrimary.label}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>

              <Link href={activeSlide.ctaSecondary.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-xs"
                >
                  <span>{activeSlide.ctaSecondary.label}</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Physical 3D Book Feature (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Ambient Book Aura */}
              <div className="absolute inset-0 bg-[#E8850A]/25 blur-2xl rounded-full scale-90 pointer-events-none" />

              {/* Physical 3D Book Showcase */}
              <div className="book-spine-3d relative w-56 sm:w-64 aspect-[2/3] shadow-[0_20px_50px_rgba(0,0,0,0.6),-8px_0_16px_rgba(0,0,0,0.4)] border border-white/15">
                <div className="relative w-full h-full">
                  <Image
                    src={
                      currentSlide === 0
                        ? "/images/books/vyakti-ani-valli.svg"
                        : currentSlide === 1
                        ? "/images/books/mrutyunjay.svg"
                        : "/images/books/panipat.svg"
                    }
                    alt="Featured Book Cover"
                    fill
                    priority
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Curator Pill */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#DED0BC] px-3.5 py-1.5 rounded-full shadow-lg text-[11px] font-bold text-[#1F1A16] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#236B2B]" />
                <span>
                  {locale === "mr" ? "संपादकीय शिफारस" : "Editorial Choice"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Bottom Controls */}
        <div className="flex items-center justify-between pt-8 sm:pt-12 border-t border-white/15 mt-8">
          {/* Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-200 rounded-full h-2 cursor-pointer ${
                  currentSlide === idx
                    ? "w-8 bg-[#E8850A]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={currentSlide === idx ? "true" : "false"}
              />
            ))}
          </div>

          {/* Controls: Prev, Next & Pause */}
          <div className="flex items-center gap-2">
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
