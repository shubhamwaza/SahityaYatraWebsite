"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { SAMPLE_BOOKS } from "@/lib/sampleBooks";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";

// Curated top Marathi titles for the auto-rotating hero spotlight
const SPOTLIGHT_ROTATION = [
  {
    handle: "mrutyunjay",
    badgeMr: "या आठवड्याची शिफारस",
    badgeEn: "Book of the Week",
    categoryMr: "ज्ञानपीठ व साहित्य अकादमी",
    categoryEn: "Classic Masterpiece",
    taglineMr: "महाभारतातील कर्ण या अद्वितीय व्यक्तिमत्त्वाचा संघर्ष आणि एकाकीपणा मांडणारी अजरामर महाकादंबरी.",
    taglineEn: "The immortal epic chronicle of Karna's tragic valor, honor, and inner dilemma.",
  },
  {
    handle: "chava",
    badgeMr: "वाचकांची सर्वाधिक पसंती",
    badgeEn: "Reader's Choice",
    categoryMr: "ऐतिहासिक महाकादंबरी",
    categoryEn: "Historical Epic",
    taglineMr: "छत्रपती संभाजी महाराजांच्या देदीप्यमान शौर्य, असीम त्याग व स्वाभिमानाची रोमांचक गाथा.",
    taglineEn: "The thrilling saga of Chhatrapati Sambhaji Maharaj's courage, valor, and supreme sacrifice.",
  },
  {
    handle: "yayati",
    badgeMr: "ज्ञानपीठ पुरस्कार विजेती",
    badgeEn: "Jnanpith Award Winner",
    categoryMr: "अभिजात मानसशास्त्रीय साहित्य",
    categoryEn: "Philosophical Classic",
    taglineMr: "मानवी वासना, क्षणभंगुर यौवन, त्याग आणि आत्मिक समाधानाचा वेध घेणारी जागतिक दर्जाची कलाकृती.",
    taglineEn: "A profound literary exploration of desire, aging, moral dilemma, and eternal contentment.",
  },
  {
    handle: "panipat",
    badgeMr: "अखंड वाचकप्रिय",
    badgeEn: "All-Time Bestseller",
    categoryMr: "रणसंग्रामाचा थरारक इतिहास",
    categoryEn: "Epic War Chronicle",
    taglineMr: "१७६१ च्या पानिपतच्या तिसऱ्या महायुद्धात मराठी फौजांनी दाखवलेल्या अद्वितीय पराक्रमाचा साक्षीदार.",
    taglineEn: "The breathtaking epic narrative of Maratha valor at the monumental battle of Panipat in 1761.",
  },
  {
    handle: "kosala",
    badgeMr: "आधुनिक मराठी मैलाचा दगड",
    badgeEn: "Modern Classic",
    categoryMr: "प्रायोगिक विचारप्रवर्तक कादंबरी",
    categoryEn: "Iconic Fiction",
    taglineMr: "तरुण मनातील बंडखोरी, शिक्षणव्यवस्थेवरील तिरकस भाष्य व अस्तित्वाचा निर्भीड शोध.",
    taglineEn: "The iconic novel capturing youth rebellion, identity, and existential self-discovery.",
  },
];

export function HeroBento() {
  const locale = useLocale();
  const t = useTranslations("home");
  const cartT = useTranslations("cart");
  const { addItem, openCart } = useCart();

  // Spotlight carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [added, setAdded] = useState(false);

  // Auto-advance spotlight every 4.5 seconds unless user hovers
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SPOTLIGHT_ROTATION.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeMeta = SPOTLIGHT_ROTATION[currentIndex];
  const activeBook =
    SAMPLE_BOOKS.find((b) => b.handle === activeMeta.handle) ||
    SAMPLE_BOOKS.find((b) => b.handle === "mrutyunjay") ||
    SAMPLE_BOOKS[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? SPOTLIGHT_ROTATION.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SPOTLIGHT_ROTATION.length);
  }, []);

  const handleQuickAdd = () => {
    addItem(activeBook, 1, false);
    setAdded(true);
    toast.success(
      locale === "mr" ? "पुस्तकाची पिशवीत नोंद झाली!" : "Added to your reading bag",
      {
        description: `₹${activeBook.price} • ${activeBook.title} (${activeBook.author})`,
        action: {
          label: locale === "mr" ? "पिशवी पहा" : "View Bag",
          onClick: () => openCart(),
        },
      }
    );
    setTimeout(() => setAdded(false), 2200);
  };

  const discountPercent =
    activeBook.compareAtPrice && activeBook.compareAtPrice > activeBook.price
      ? Math.round(
          ((activeBook.compareAtPrice - activeBook.price) /
            activeBook.compareAtPrice) *
            100
        )
      : null;

  return (
    <section className="container-site pt-2 pb-6 sm:pt-4 sm:pb-8">
      {/* ── Asymmetric Bento Grid (12 Cols: 7 Left, 5 Right) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* CARD 1: Main Editorial Gateway & Literature Mosaic (7 cols)       */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 rounded-[28px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EF] to-[#F3EDE3]/70 border border-[#DED0BC]/85 p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_-4px_rgba(31,26,22,0.06)] flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[#E8850A]/6 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Editorial Kicker & Heritage Seal */}
          <div className="space-y-4 sm:space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8850A]/10 border border-[#E8850A]/20 text-[#E8850A] text-xs font-bold tracking-tight shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8850A] animate-pulse" />
              <span>
                {locale === "mr"
                  ? "२५ वर्षांची ग्रंथ परंपरा • २५+ शहरे • ५०+ प्रदर्शने"
                  : "25 Years of Literary Excellence • 25+ Cities"}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1F1A16] leading-[1.2] tracking-tight optical-title ${
                locale === "mr" ? "font-devanagari" : "font-latin"
              }`}
            >
              {locale === "mr"
                ? "मराठी अभिजात साहित्याचा समृद्ध खजिना, थेट तुमच्या घरापर्यंत."
                : "Maharashtra's Timeless Literary Heritage, Delivered to Your Doorstep."}
            </h1>

            {/* Synopsis */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#5C4E42] max-w-xl leading-relaxed">
              {locale === "mr"
                ? "पु. ल. देशपांडे, वि. स. खांडेकर, साने गुरुजी व विश्वास पाटील यांच्या अजरामर महाकादंबऱ्यांपासून ते नव्या पिढीच्या विचारवंतांपर्यंत — ५,०००+ हून अधिक अधिकृत, छापील ग्रंथ."
                : "From the celebrated masterpieces of Pu. La. Deshpande, V. S. Khandekar, and Shivaji Sawant to acclaimed contemporary writers — over 5,000 authentic print editions."}
            </p>

            {/* Dual CTAs with Optical Alignment & Tactile Feedback */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8850A] hover:bg-[#D47000] text-white font-bold text-sm shadow-[0_2px_8px_rgba(232,133,10,0.3)] hover:shadow-[0_4px_16px_rgba(232,133,10,0.4)] active:scale-[0.96] transition-transform duration-150 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
              >
                <span>{locale === "mr" ? "सर्व ग्रंथ पहा" : "Explore Catalog"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/collections/classics"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF6EF] hover:bg-[#F3EDE3] border border-[#DED0BC] text-[#1F1A16] font-semibold text-sm active:scale-[0.96] transition-transform duration-150 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DED0BC]"
              >
                <span>{locale === "mr" ? "अभिजात कलाकृती" : "Classics"}</span>
              </Link>
            </div>
          </div>

          {/* Bottom Physical Bookshelf Mosaic & Guarantees */}
          <div className="mt-8 pt-6 border-t border-[#DED0BC]/60 relative z-10 space-y-4">
            <div className="flex items-center justify-between text-xs text-[#7D6F63]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                {locale === "mr" ? "लोकप्रिय ग्रंथमाला" : "Featured Masterpieces"}
              </span>
              <Link
                href="/collections/marathi-books"
                className="text-[#E8850A] hover:underline font-bold text-xs inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{locale === "mr" ? "सर्व १००+ पुस्तके" : "All 100+ Books"}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Curated Mini-Covers Preview */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 overflow-hidden">
              {SAMPLE_BOOKS.slice(0, 4).map((book) => (
                <Link
                  key={book.id}
                  href={`/products/${book.handle}`}
                  className="group/book relative block aspect-[2/3] rounded-lg overflow-hidden bg-[#EFE7D8] shadow-sm hover:shadow-md transition-[transform,box-shadow] duration-200 hover:-translate-y-1 cursor-pointer"
                >
                  <Image
                    src={book.coverImage}
                    alt={book.coverImageAlt}
                    fill
                    sizes="(max-width: 768px) 25vw, 120px"
                    className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/book:opacity-100 transition-opacity flex items-end p-1.5">
                    <span className="text-[10px] text-white font-bold leading-tight line-clamp-1">
                      {book.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Heritage Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#7D6F63] pt-2">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#E8850A]" />
                <span>{locale === "mr" ? "भारतभर सुरक्षित घरपोच" : "All-India Delivery"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{locale === "mr" ? "१००% अस्सल छापील प्रती" : "100% Genuine Editions"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E8850A]" />
                <span>{locale === "mr" ? "१००+ निवडक ग्रंथ" : "100+ Curated Titles"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* RIGHT COLUMN (5 cols): Card 2 (Exhibition) + Card 3 (Spotlight)    */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
          {/* ────────────────────────────────────────────────────────────── */}
          {/* CARD 2: Live Pune Exhibition Ticket Pass                        */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div className="rounded-[28px] bg-[#1C1510] text-[#ECE3D4] border border-[#3D2E24] p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(28,21,16,0.25)] relative overflow-hidden flex flex-col justify-between group">
            {/* Ambient Background Warmth */}
            <div
              className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#E8850A]/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Ticket Top Bar */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E8850A]/20 text-[#F5A020] border border-[#E8850A]/35 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#F5A020] animate-pulse" />
                  {locale === "mr" ? "आगामी महाप्रदर्शन" : "Upcoming Exhibition"}
                </span>
                <span className="text-[11px] text-[#DED0BC]/70 font-mono font-medium">
                  {locale === "mr" ? "पुणे दौरा २०२६" : "Pune Tour 2026"}
                </span>
              </div>

              {/* Event Title */}
              <h2
                className={`text-lg sm:text-xl font-bold text-white mt-3 optical-title ${
                  locale === "mr" ? "font-devanagari" : "font-latin"
                }`}
              >
                {locale === "mr"
                  ? "🏛️ पुणे भव्य ग्रंथप्रदर्शन दालन २०२६"
                  : "🏛️ Grand Pune Book Exhibition 2026"}
              </h2>

              {/* Perforated Ticket Divider with Edge Notches */}
              <div className="relative my-3">
                <div className="border-t border-dashed border-white/15 w-full" />
                <div className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FAF7F2] border-r border-[#3D2E24]" />
                <div className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FAF7F2] border-l border-[#3D2E24]" />
              </div>

              {/* Venue & Time Details */}
              <div className="space-y-2 text-xs text-[#DED0BC]/85">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F5A020] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {locale === "mr"
                        ? "टिळक स्मारक मंदिर, टिळक रोड"
                        : "Tilak Smarak Mandir, Tilak Road"}
                    </span>
                    <span className="text-[11px] text-[#DED0BC]/70">
                      {locale === "mr"
                        ? "सदाशिव पेठ, पुणे, महाराष्ट्र ४११०३०"
                        : "Sadashiv Peth, Pune 411030"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#F5A020] shrink-0" />
                  <span>
                    {locale === "mr"
                      ? "२२ ते २४ ऑक्टोबर २०२६ • शुक्रवार ते रविवार"
                      : "22 to 24 October 2026 • Friday to Sunday"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#F5A020] shrink-0" />
                  <span>
                    {locale === "mr"
                      ? "सकाळी १०:०० ते रात्री ९:०० (विनामूल्य प्रवेश)"
                      : "10:00 AM to 9:00 PM (Free Entry)"}
                  </span>
                </div>
              </div>
            </div>

            {/* External Google Maps Action */}
            <div className="pt-3.5 mt-1">
              <a
                href="https://maps.google.com/?q=Tilak+Smarak+Mandir+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 min-h-[42px] rounded-full bg-[#E8850A] hover:bg-[#D47000] text-white text-xs font-bold shadow-sm hover:shadow active:scale-[0.96] transition-transform duration-150 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A020]"
              >
                <span>
                  {locale === "mr" ? "स्थळ व दिशा (Google Maps)" : "Venue & Directions"}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────── */}
          {/* CARD 3: Expanded Auto-Rotating Curated Spotlight (Full Height)   */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex-1 rounded-[28px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F5EFE6] border border-[#DED0BC]/85 p-4 sm:p-6 shadow-[0_4px_24px_-4px_rgba(31,26,22,0.06)] flex flex-col justify-between relative overflow-hidden group hover:border-[#E8850A]/60 transition-[border-color,box-shadow] duration-200"
          >
            {/* Ambient Background Warmth */}
            <div
              className="absolute -right-8 -top-8 w-44 h-44 bg-[#E8850A]/8 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Header: Rotating Badge & Progress Navigation */}
            <div className="flex items-center justify-between gap-2 relative z-10 pb-2.5 sm:pb-3 border-b border-[#DED0BC]/50">
              <div className="flex items-center gap-2 min-w-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E8850A]/12 text-[#C66A00] border border-[#E8850A]/25 shadow-2xs shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8850A] animate-pulse" />
                  {locale === "mr" ? activeMeta.badgeMr : activeMeta.badgeEn}
                </span>
                <span className="text-[11px] text-[#7D6F63] hidden sm:inline-block font-medium truncate">
                  {locale === "mr" ? activeMeta.categoryMr : activeMeta.categoryEn}
                </span>
              </div>

              {/* Progress Indicators & Micro Controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-7 h-7 sm:w-8 sm:h-8 min-w-[28px] min-h-[28px] rounded-full flex items-center justify-center bg-[#FAF6EF] hover:bg-[#EFE7D8] text-[#5C4E42] border border-[#DED0BC] active:scale-[0.96] transition-transform duration-150 ease-out cursor-pointer"
                  aria-label="Previous book"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Micro Dots */}
                <div className="flex items-center gap-1 px-1">
                  {SPOTLIGHT_ROTATION.map((item, idx) => (
                    <button
                      key={item.handle}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? "w-4 bg-[#E8850A]"
                          : "w-1.5 bg-[#DED0BC] hover:bg-[#8C7B6E]"
                      }`}
                      aria-label={`Go to book ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-7 h-7 sm:w-8 sm:h-8 min-w-[28px] min-h-[28px] rounded-full flex items-center justify-center bg-[#FAF6EF] hover:bg-[#EFE7D8] text-[#5C4E42] border border-[#DED0BC] active:scale-[0.96] transition-transform duration-150 ease-out cursor-pointer"
                  aria-label="Next book"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Center Showcase: Prominent 3D Book & Editorial Typography */}
            <div className="my-auto py-3 sm:py-4 flex flex-row items-center gap-3.5 sm:gap-6 relative z-10">
              {/* Grand 3D Physical Book Cover */}
              <Link
                href={`/products/${activeBook.handle}`}
                className="relative w-24 sm:w-32 lg:w-36 aspect-[2/3] shrink-0 book-spine-3d bg-[#EFE7D8] shadow-[0_16px_36px_-8px_rgba(31,26,22,0.25),0_4px_12px_-2px_rgba(31,26,22,0.12)] group-hover:scale-[1.02] transition-transform duration-300 cursor-pointer rounded-xs overflow-hidden"
                aria-label={activeBook.title}
              >
                <Image
                  src={activeBook.coverImage}
                  alt={activeBook.coverImageAlt}
                  fill
                  sizes="(max-width: 640px) 96px, 144px"
                  className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
                  priority
                />
                <div className="book-sheen" />
              </Link>

              {/* Editorial Details & Tagline */}
              <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
                <div className="space-y-0.5 sm:space-y-1">
                  <Link
                    href={`/products/${activeBook.handle}`}
                    className="block font-bold text-base sm:text-lg lg:text-xl text-[#1F1A16] hover:text-[#E8850A] transition-colors leading-tight line-clamp-2 optical-title"
                  >
                    {activeBook.title}
                  </Link>

                  <p className="text-xs sm:text-[13px] text-[#5C4E42] font-medium line-clamp-1">
                    {activeBook.author}
                    {activeBook.publisher && (
                      <span className="text-[#8C7B6E] font-normal">
                        {" "}• {activeBook.publisher}
                      </span>
                    )}
                  </p>
                </div>

                {/* Literary Quote / Synopsis Excerpt */}
                <p className="text-[11px] sm:text-xs text-[#6B5C4F] italic leading-normal sm:leading-relaxed line-clamp-2 sm:line-clamp-3 bg-[#FFFDF9]/80 border border-[#EAE0D2] p-2 sm:p-2.5 rounded-lg sm:rounded-xl shadow-2xs">
                  “{locale === "mr" ? activeMeta.taglineMr : activeMeta.taglineEn}”
                </p>

                {/* Badges Row */}
                <div className="flex items-center gap-2 pt-0.5 flex-wrap">
                  {discountPercent && (
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#236B2B] bg-[#236B2B]/10 px-2 py-0.5 rounded-full">
                      {discountPercent}% {locale === "mr" ? "सूट" : "OFF"}
                    </span>
                  )}
                  <span className="text-[10px] sm:text-[11px] text-[#7D6F63] flex items-center gap-1">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E8850A]" />
                    <span>{locale === "mr" ? "अधिकृत छापील आवृत्ती" : "Authentic Edition"}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Pricing & Tactile Quick Add (Optical Alignment) */}
            <div className="pt-2.5 sm:pt-3 border-t border-[#DED0BC]/60 flex items-center justify-between gap-2 relative z-10">
              <div className="flex items-baseline gap-1.5 sm:gap-2 shrink-0">
                <span className="text-lg sm:text-2xl font-extrabold text-[#1F1A16] tabular-nums">
                  ₹{activeBook.price}
                </span>
                {activeBook.compareAtPrice && (
                  <span className="text-xs sm:text-sm text-[#8C7B6E] line-through font-medium tabular-nums">
                    ₹{activeBook.compareAtPrice}
                  </span>
                )}
              </div>

              {/* Optical Action Group */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Link
                  href={`/products/${activeBook.handle}`}
                  className="hidden md:inline-flex text-xs font-semibold text-[#7D6F63] hover:text-[#1F1A16] transition-colors py-2 px-1"
                >
                  {locale === "mr" ? "तपशील पहा" : "Details"} →
                </Link>

                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:ps-4 sm:pe-3.5 sm:py-2.5 rounded-full bg-[#1F1A16] hover:bg-[#E8850A] text-white text-xs sm:text-sm font-bold active:scale-[0.96] transition-transform duration-150 ease-out shadow-sm hover:shadow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] shrink-0 min-h-[38px] sm:min-h-[42px]"
                  aria-label={`Add ${activeBook.title} to bag`}
                >
                  {added ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#A5D6A7]" />
                      <span>{cartT("itemAdded")}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{locale === "mr" ? "पिशवीत जोडा" : "Quick Add"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
