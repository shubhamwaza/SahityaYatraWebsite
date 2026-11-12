"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export function HeroBento() {
  const locale = useLocale();
  const t = useTranslations("home");
  const cartT = useTranslations("cart");
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  // Book of the Week: Mrityunjay (मृत्यूंजय)
  const spotlightBook =
    SAMPLE_BOOKS.find((b) => b.handle === "mrutyunjay") || SAMPLE_BOOKS[0];

  const handleQuickAdd = () => {
    addItem(spotlightBook, 1, false);
    setAdded(true);
    toast.success(
      locale === "mr" ? "पुस्तकाची पिशवीत नोंद झाली!" : "Added to your reading bag",
      {
        description: `₹${spotlightBook.price} • ${spotlightBook.title} (${spotlightBook.author})`,
        action: {
          label: locale === "mr" ? "पिशवी पहा" : "View Bag",
          onClick: () => openCart(),
        },
      }
    );
    setTimeout(() => setAdded(false), 2500);
  };

  const discountPercent =
    spotlightBook.compareAtPrice && spotlightBook.compareAtPrice > spotlightBook.price
      ? Math.round(
          ((spotlightBook.compareAtPrice - spotlightBook.price) /
            spotlightBook.compareAtPrice) *
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
        <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EF] to-[#F3EDE3]/70 border border-[#DED0BC]/85 p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_-4px_rgba(31,26,22,0.06)] flex flex-col justify-between relative overflow-hidden group">
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

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1A16] hover:bg-[#E8850A] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg active:scale-95 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
              >
                <span>{locale === "mr" ? "सर्व पुस्तके पाहा" : "Explore All Books"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#FAF4EA] hover:bg-[#EFE7D8] text-[#1F1A16] text-xs sm:text-sm font-semibold border border-[#DED0BC] active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
              >
                <span>{locale === "mr" ? "आमचा प्रवास" : "Our Heritage"}</span>
              </Link>
            </div>
          </div>

          {/* Centerpiece: Physical Overlapping 3D Book Fan */}
          <div className="relative py-6 sm:py-8 my-2 sm:my-4 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full max-w-md h-48 sm:h-56">
              {/* Book 1 (Left Tilt): Vyakti Ani Valli */}
              <Link
                href="/products/vyakti-ani-valli"
                className="absolute left-6 sm:left-12 -rotate-8 hover:-rotate-10 hover:-translate-y-2 transition-all duration-300 w-24 sm:w-28 aspect-[2/3] book-spine-3d bg-[#EFE7D8] shadow-[0_12px_24px_-4px_rgba(31,26,22,0.22)] rounded-xs overflow-hidden cursor-pointer group/b1"
                aria-label="व्यक्ती आणि वल्ली - पु. ल. देशपांडे"
              >
                <Image
                  src="/images/books/vyakti-ani-valli.jpg"
                  alt="व्यक्ती आणि वल्ली"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
                <div className="book-sheen" />
              </Link>

              {/* Book 3 (Right Tilt): Chava */}
              <Link
                href="/products/chava"
                className="absolute right-6 sm:right-12 rotate-8 hover:rotate-10 hover:-translate-y-2 transition-all duration-300 w-24 sm:w-28 aspect-[2/3] book-spine-3d bg-[#EFE7D8] shadow-[0_12px_24px_-4px_rgba(31,26,22,0.22)] rounded-xs overflow-hidden cursor-pointer group/b3"
                aria-label="छावा - शिवाजी सावंत"
              >
                <Image
                  src="/images/books/chava.jpg"
                  alt="छावा"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
                <div className="book-sheen" />
              </Link>

              {/* Book 2 (Center Hero): Yayati */}
              <Link
                href="/products/yayati"
                className="relative z-20 hover:-translate-y-3 transition-transform duration-300 w-28 sm:w-32 aspect-[2/3] book-spine-3d bg-[#EFE7D8] shadow-[0_18px_36px_-6px_rgba(31,26,22,0.3)] rounded-xs overflow-hidden cursor-pointer group/b2"
                aria-label="ययाति - वि. स. खांडेकर"
              >
                <Image
                  src="/images/books/yayati.jpg"
                  alt="ययाति"
                  fill
                  sizes="140px"
                  className="object-cover"
                  priority
                />
                <div className="book-sheen" />
              </Link>
            </div>
          </div>

          {/* Bottom Trust Indicators Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 sm:pt-5 border-t border-[#DED0BC]/70 text-xs text-[#5C4E42] relative z-10">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#E8850A] shrink-0" />
              <span className="font-medium">
                {locale === "mr" ? "भारतभर सुरक्षित घरपोच" : "All-India Delivery"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
              <span className="font-medium">
                {locale === "mr" ? "१००% अस्सल छापील प्रती" : "100% Genuine Editions"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E8850A] shrink-0" />
              <span className="font-medium">
                {locale === "mr" ? "५,०००+ निवडक ग्रंथ" : "5,000+ Curated Titles"}
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* RIGHT COLUMN (5 cols): Card 2 (Exhibition Ticket) + Card 3 (Book)   */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
          {/* ────────────────────────────────────────────────────────────── */}
          {/* CARD 2: Live Pune Exhibition Ticket Pass (Authentic Physical)   */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div className="rounded-3xl bg-[#1C1510] text-[#ECE3D4] border border-[#3D2E24] p-5 sm:p-6 shadow-md relative overflow-hidden flex flex-col justify-between group">
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
              <div className="relative my-3.5">
                <div className="border-t border-dashed border-white/15 w-full" />
                {/* Visual Ticket Hole Notches */}
                <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FAF7F2] border-r border-[#3D2E24]" />
                <div className="absolute -right-7 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FAF7F2] border-l border-[#3D2E24]" />
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
            <div className="pt-4 mt-2">
              <a
                href="https://maps.google.com/?q=Tilak+Smarak+Mandir+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#E8850A] hover:bg-[#D47000] text-white text-xs font-bold shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A020]"
              >
                <span>
                  {locale === "mr" ? "स्थळ व दिशा (Google Maps)" : "Venue & Directions"}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────── */}
          {/* CARD 3: Book of the Week Spotlight with 1-Click Quick Add       */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div className="rounded-3xl bg-[#FCFBF7] border border-[#DED0BC]/80 p-4 sm:p-5 shadow-[0_2px_12px_rgba(31,26,22,0.04)] flex flex-col sm:flex-row gap-4 items-center justify-between relative group hover:border-[#E8850A]/70 transition-colors">
            {/* Physical 3D Miniature Book Cover */}
            <Link
              href={`/products/${spotlightBook.handle}`}
              className="relative w-20 sm:w-24 aspect-[2/3] shrink-0 book-spine-3d bg-[#EFE7D8]/90 shadow-md group-hover:scale-102 transition-transform cursor-pointer"
              aria-label={spotlightBook.title}
            >
              <Image
                src={spotlightBook.coverImage}
                alt={spotlightBook.coverImageAlt}
                fill
                sizes="100px"
                className="object-cover"
              />
              <div className="book-sheen" />
            </Link>

            {/* Details & Quick Add Row */}
            <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2 w-full">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8850A] bg-[#FFF4E5] px-2 py-0.5 rounded-md border border-[#E8850A]/20">
                    {locale === "mr" ? "या आठवड्याची शिफारस" : "Book of the Week"}
                  </span>
                  {discountPercent && (
                    <span className="text-[10px] font-bold text-[#C62828] bg-[#C62828]/10 px-1.5 py-0.5 rounded-md">
                      {discountPercent}% {locale === "mr" ? "सूट" : "OFF"}
                    </span>
                  )}
                </div>

                <Link
                  href={`/products/${spotlightBook.handle}`}
                  className="block font-bold text-sm sm:text-base text-[#1F1A16] hover:text-[#E8850A] line-clamp-1 transition-colors mt-1"
                >
                  {spotlightBook.title}
                </Link>

                <p className="text-[11px] text-[#7D6F63] truncate">
                  {spotlightBook.author} • {spotlightBook.publisher}
                </p>
              </div>

              {/* Price & Tactile Quick Add Button */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base sm:text-lg font-extrabold text-[#1F1A16] tabular-nums">
                    ₹{spotlightBook.price}
                  </span>
                  {spotlightBook.compareAtPrice && (
                    <span className="text-xs text-[#8C7B6E] line-through font-medium tabular-nums">
                      ₹{spotlightBook.compareAtPrice}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F1A16] hover:bg-[#E8850A] text-white text-xs font-bold active:scale-95 transition-all shadow-2xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
                  aria-label={`Add ${spotlightBook.title} to bag`}
                >
                  {added ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
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
