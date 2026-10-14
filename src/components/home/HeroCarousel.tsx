"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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
  Star,
  Quote,
  Award,
} from "lucide-react";

const SLIDE_DURATION_MS = 7000;

export function HeroCarousel() {
  const locale = useLocale();
  const t = useTranslations("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: "slide-1",
      badgeText: locale === "mr" ? "मराठी अभिजात साहित्य" : "Marathi Classic Masterpiece",
      badgeIcon: Sparkles,
      accolade:
        locale === "mr"
          ? "साहित्य अकादमी पुरस्कार प्राप्त अजरामर ग्रंथ"
          : "Sahitya Akademi Award-Winning Masterpiece",
      title:
        locale === "mr"
          ? "व्यक्ती आणि वल्ली — पु. ल. देशपांडे"
          : "Vyakti Ani Valli — P. L. Deshpande",
      subtitle:
        locale === "mr"
          ? "हसवता हसवता माणसांच्या अंतरंगाचे पदर उलगडणारी, मराठी मनाला दशकांनुवर्षे भुरळ घालणारी अद्वितीय व्यक्तिचित्रे."
          : "Timeless character portraits that capture the wit, warmth, and soul of Maharashtra across generations.",
      quote:
        locale === "mr"
          ? "“माणसं जोडण्याची आणि जगण्यावर प्रेम करण्याची पु. लं. ची ही शैली आजही तितकीच ताजी वाटते.”"
          : "“A celebration of eccentric, endearing human souls penned by Maharashtra’s greatest humorist.”",
      bookMeta:
        locale === "mr"
          ? "मूळ व अधिकृत प्रकाशन • मौज प्रकाशन गृह"
          : "Authentic Edition • Mauj Prakashan Gruha",
      coverImage: "/images/books/vyakti-ani-valli.svg",
      coverAlt: "Vyakti Ani Valli Book Cover",
      ctaPrimary: {
        label: locale === "mr" ? "पुस्तक पाहा व खरेदी करा" : "Explore & Order",
        href: "/products/vyakti-ani-valli",
      },
      ctaSecondary: {
        label: locale === "mr" ? "मराठी ग्रंथसंग्रह" : "Browse Marathi Books",
        href: "/collections/marathi-books",
      },
      theme: "from-[#201813] via-[#2E2018] to-[#18110D]",
      accentGlow: "bg-[#E8850A]/25",
      auraColor: "rgba(232, 133, 10, 0.4)",
    },
    {
      id: "slide-2",
      badgeText: locale === "mr" ? "अद्वितीय महाकादंबरी" : "Celebrated Indian Epic",
      badgeIcon: BookOpen,
      accolade:
        locale === "mr"
          ? "भारतीय साहित्यातील सूर्यपुत्र कर्णाची अमर गाथा"
          : "The Immortal Saga of Karna in Indian Literature",
      title:
        locale === "mr"
          ? "मृत्युंजय — शिवाजी सावंत"
          : "Mrityunjay — Shivaji Sawant",
      subtitle:
        locale === "mr"
          ? "महाभारतातील दानशूर, उपेक्षित सूर्यपुत्र कर्णाच्या अथांग संघर्षाची, मैत्रीची आणि दातृत्वाची विश्वविख्यात महागाथा."
          : "The magnum opus chronicling the agony, nobility, and towering generosity of Karna, translated into dozens of global languages.",
      quote:
        locale === "mr"
          ? "“मृत्यूवर विजय मिळवणारे दातृत्व आणि अन्यायाविरुद्ध अखेरपर्यंत लढणारा अजेय योद्धा.”"
          : "“A triumphant masterpiece exploring destiny, sacrifice, and the unbreakable spirit of Karna.”",
      bookMeta:
        locale === "mr"
          ? "काँटिनेन्टल प्रकाशन • ज्ञानपीठ नामांकित लेखक"
          : "Continental Prakashan • Jnanpith Nominated Author",
      coverImage: "/images/books/mrutyunjay.svg",
      coverAlt: "Mrityunjay Book Cover",
      ctaPrimary: {
        label: locale === "mr" ? "मृत्युंजय पाहा" : "View Mrityunjay",
        href: "/products/mrutyunjay",
      },
      ctaSecondary: {
        label: locale === "mr" ? "ऐतिहासिक संग्रह" : "Historical Classics",
        href: "/collections/marathi-books",
      },
      theme: "from-[#281512] via-[#3B1C17] to-[#1C0D0B]",
      accentGlow: "bg-[#D93020]/25",
      auraColor: "rgba(217, 48, 32, 0.38)",
    },
    {
      id: "slide-3",
      badgeText: locale === "mr" ? "२५+ वर्षे ग्रंथसेवा" : "25+ Years of Heritage",
      badgeIcon: MapPin,
      accolade:
        locale === "mr"
          ? "महाराष्ट्रातील लाखो वाचकांचा अखंड विश्वास"
          : "Trusted by Readers Across Maharashtra for 25+ Years",
      title:
        locale === "mr"
          ? "प्रदर्शनांची समृद्ध परंपरा, थेट तुमच्या घरी"
          : "Rooted in Exhibitions, Delivered Across India",
      subtitle:
        locale === "mr"
          ? "गावोगावी भरवलेली ग्रंथ प्रदर्शने आणि वाचकांशी साधलेला जिव्हाळ्याचा संवाद. ५,०००+ पुस्तकांच्या संग्रहातून थेट घरपोच."
          : "Born from physical book fairs and authentic literary conversations. Now bringing carefully curated literature to doorsteps across India.",
      quote:
        locale === "mr"
          ? "“प्रत्येक प्रदर्शनात वाचकांच्या डोळ्यांतील कौतुक आणि पुस्तकांशी जोडलेली ही आमची २५ वर्षांची निष्ठा आहे.”"
          : "“Every exhibition connected us directly with readers who cherish the printed word.”",
      bookMeta:
        locale === "mr"
          ? "अस्सल छापील पुस्तके • भारतभर सुरक्षित घरपोच"
          : "Authentic Print Editions • All-India Express Delivery",
      coverImage: "/images/books/panipat.svg",
      coverAlt: "Panipat by Vishwas Patil",
      ctaPrimary: {
        label: locale === "mr" ? "आमचा प्रवास वाचा" : "Explore Our Heritage",
        href: "/about",
      },
      ctaSecondary: {
        label: locale === "mr" ? "सर्व पुस्तके" : "All Books",
        href: "/shop",
      },
      theme: "from-[#14231A] via-[#1E3326] to-[#0F1B14]",
      accentGlow: "bg-[#236B2B]/30",
      auraColor: "rgba(35, 107, 43, 0.4)",
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
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const activeSlide = slides[currentSlide];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#15100D] text-white"
      aria-roledescription="carousel"
      aria-label={t("heroTitle")}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* 1. Dynamic Background Color Atmosphere */}
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

      <div className="container-site relative z-10 py-12 sm:py-20 lg:py-24">
        {/* 2-Column Apple Books Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[460px]">
          {/* Left Column: Narrative & Literary Accolades (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="saffron" size="md" className="shadow-xs backdrop-blur-md">
                <BadgeIcon className="w-3.5 h-3.5 mr-1" />
                <span>{activeSlide.badgeText}</span>
              </Badge>

              {/* Metallic Gold Foil Accolade Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F3E5AB]/25 to-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5E6BE] text-xs font-semibold backdrop-blur-md shadow-xs">
                <Star className="w-3 h-3 text-[#F5A020] fill-[#F5A020]" />
                <span>{activeSlide.accolade}</span>
              </div>
            </div>

            {/* Title with Optical Display Typography */}
            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight optical-display ${
                locale === "mr" ? "font-devanagari" : "font-latin"
              }`}
            >
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#ECE3D4]/90 max-w-xl leading-relaxed font-normal">
              {activeSlide.subtitle}
            </p>

            {/* Literary Excerpt Quote Card (Apple Glass Styling) */}
            <div className="relative pl-4 py-2 border-l-2 border-[#E8850A]/70 bg-white/5 rounded-r-xl max-w-xl backdrop-blur-xs">
              <Quote className="w-4 h-4 text-[#F5A020] mb-1 opacity-70" />
              <p className="text-xs sm:text-sm text-[#F0E6D8] italic leading-relaxed font-serif">
                {activeSlide.quote}
              </p>
              <span className="block text-[11px] text-[#C5B4A5] font-sans font-medium mt-1">
                {activeSlide.bookMeta}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href={activeSlide.ctaPrimary.href}>
                <Button variant="primary" size="lg" className="shadow-lg font-bold">
                  <span>{activeSlide.ctaPrimary.label}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>

              <Link href={activeSlide.ctaSecondary.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                >
                  <span>{activeSlide.ctaSecondary.label}</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Physical 3D Book Feature with Ambient Aura (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group book-stage">
              {/* Dynamic Colored Halo Bleed (Matching Book Cover) */}
              <div
                className="absolute inset-0 rounded-full blur-3xl scale-125 transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: activeSlide.auraColor }}
              />

              {/* Physical 3D Book Showcase */}
              <Link href={activeSlide.ctaPrimary.href} className="block cursor-pointer">
                <div className="book-spine-3d relative w-56 sm:w-64 aspect-[2/3] shadow-[0_28px_60px_rgba(0,0,0,0.7),-10px_0_20px_rgba(0,0,0,0.45)] border border-white/20">
                  <div className="relative w-full h-full">
                    <Image
                      src={activeSlide.coverImage}
                      alt={activeSlide.coverAlt}
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
                <span>
                  {locale === "mr" ? "संपादकीय शिफारस" : "Curator's Choice"}
                </span>
              </div>

              {/* Award Seal Ribbon */}
              <div className="absolute -top-3 -left-3 sm:-left-4 bg-[#1F1A16]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#F5A020] px-3 py-1 rounded-full shadow-md text-[10px] font-bold flex items-center gap-1 z-20">
                <Award className="w-3.5 h-3.5 text-[#F5A020]" />
                <span>{locale === "mr" ? "अभिजात ग्रंथ" : "Masterpiece"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Bottom Controls */}
        <div className="flex items-center justify-between pt-8 sm:pt-12 border-t border-white/15 mt-8">
          {/* Apple-Style Expanding Capsule Indicators */}
          <div className="flex items-center gap-2.5">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full h-2 cursor-pointer relative overflow-hidden ${
                  currentSlide === idx
                    ? "w-10 bg-[#E8850A]"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
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
