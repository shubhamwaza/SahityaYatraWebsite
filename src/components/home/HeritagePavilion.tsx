"use client";

import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Award,
  BookOpen,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Quote,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export function HeritagePavilion() {
  const locale = useLocale();

  const exhibitionCities = [
    { mr: "पुणे", en: "Pune" },
    { mr: "मुंबई", en: "Mumbai" },
    { mr: "नाशिक", en: "Nashik" },
    { mr: "कोल्हापूर", en: "Kolhapur" },
    { mr: "छ. संभाजीनगर", en: "Sambhajinagar" },
    { mr: "सातारा", en: "Satara" },
    { mr: "नागपूर", en: "Nagpur" },
    { mr: "सोलापूर", en: "Solapur" },
    { mr: "ठाणे", en: "Thane" },
  ];

  return (
    <section className="container-site" aria-label="Exhibition Heritage">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#241A14] via-[#2F2119] to-[#1C130E] text-white p-7 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-[#D4AF37]/30">
        {/* Ambient Warm Golden Halos */}
        <div
          className="absolute -right-24 -top-24 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full bg-[#E8850A]/20 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#236B2B]/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Vintage Literary Archival Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#F5A020_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-10 sm:space-y-12">
          {/* Header Row: Title & Commemorative Brass Seal */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <Badge variant="saffron" size="sm" className="shadow-xs backdrop-blur-md">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>१९९९ – २०२६ • २५+ वर्षे</span>
                </Badge>
                <span className="text-xs font-semibold text-[#F5A020] uppercase tracking-widest hidden sm:inline">
                  {locale === "mr" ? "ग्रंथ प्रदर्शन परंपरा" : "Exhibition Heritage"}
                </span>
              </div>

              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight optical-display ${
                  locale === "mr" ? "font-devanagari" : "font-latin"
                }`}
              >
                {locale === "mr"
                  ? "२५ वर्षांची प्रत्यक्ष ग्रंथसेवा, आता अखंड डिजिटल दालनात"
                  : "25+ Years of Book Exhibitions, Now Across India"}
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-[#ECE3D4]/90 leading-relaxed font-normal">
                {locale === "mr"
                  ? "साहित्य संमेलने, महाविद्यालयीन ग्रंथ दालने आणि गावोगावी भरवलेली प्रदर्शने यातून उभा राहिलेला अतूट वाचक विश्वास. ५,०००+ पुस्तकांच्या अनुभवातून थेट तुमच्या घरापर्यंत."
                  : "Born from physical book fairs, college exhibitions, and deep conversations with readers across Maharashtra. Drawing from 5,000+ curated titles, delivering trusted literature to your doorstep."}
              </p>
            </div>

            {/* Commemorative Brass Medallion Seal (Honor to Father's 25 Years) */}
            <div className="shrink-0 flex items-center justify-start lg:justify-end">
              <div className="relative group/seal">
                {/* Golden Seal Rotating Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5A020] opacity-30 blur-lg group-hover/seal:opacity-60 transition-opacity" />

                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#3D291F] via-[#2A1B14] to-[#1C120D] border-2 border-[#D4AF37]/60 shadow-xl flex flex-col items-center justify-center text-center p-2">
                  <Award className="w-6 h-6 text-[#F5A020] mb-0.5" />
                  <span className="text-base sm:text-lg font-black text-white tracking-tight leading-none">
                    २५+ वर्षे
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#F5E6BE] uppercase tracking-wider mt-0.5">
                    {locale === "mr" ? "ग्रंथ निष्ठा" : "Heritage"}
                  </span>
                  <span className="text-[8px] text-[#A8988B] mt-0.5 font-medium">
                    1999 – 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Grand Heritage Stat Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#F5A020]/40 transition-colors backdrop-blur-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#E8850A]/20 text-[#F5A020]">
                  <Calendar className="w-4 h-4" />
                </span>
                <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  २५+
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                {locale === "mr" ? "अखंड ग्रंथसेवा" : "Years of Service"}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#C5B4A5] leading-snug">
                {locale === "mr"
                  ? "१९९९ पासून अखंड सुरू असलेला समृद्ध वाचनप्रवास"
                  : "Dedicated to the written word since 1999"}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#F5A020]/40 transition-colors backdrop-blur-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#236B2B]/20 text-[#34853D]">
                  <BookOpen className="w-4 h-4" />
                </span>
                <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  ५,०००+
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                {locale === "mr" ? "अस्सल पुस्तके" : "Curated Titles"}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#C5B4A5] leading-snug">
                {locale === "mr"
                  ? "अभिजात साहित्यापासून आधुनिक विचारवंत लेखकांपर्यंत"
                  : "Spanning classics to contemporary writings"}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#F5A020]/40 transition-colors backdrop-blur-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#E8850A]/20 text-[#F5A020]">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  १००+
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                {locale === "mr" ? "ग्रंथ प्रदर्शने" : "Book Exhibitions"}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#C5B4A5] leading-snug">
                {locale === "mr"
                  ? "महाराष्ट्रातील प्रमुख शहरे व महाविद्यालयांत थेट संवाद"
                  : "Connecting readers across Maharashtra"}
              </p>
            </div>

            {/* Stat 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#F5A020]/40 transition-colors backdrop-blur-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#236B2B]/20 text-[#34853D]">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  १००%
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                {locale === "mr" ? "अस्सल आवृत्त्या" : "Authentic Copies"}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#C5B4A5] leading-snug">
                {locale === "mr"
                  ? "थेट मौज, काँटिनेन्टल, राजहंस अशा नामांकित प्रकाशकांकडून"
                  : "Directly sourced from trusted publishers"}
              </p>
            </div>
          </div>

          {/* Founder's Archival Letter Card (The Heart of the Exhibition) */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#FFFDF8] to-[#F5EFEB] text-[#1F1A16] p-6 sm:p-8 lg:p-10 shadow-xl border border-[#DED0BC]/80">
            {/* Watermark Sprout */}
            <div className="absolute right-6 bottom-6 opacity-5 pointer-events-none">
              <Image
                src="/images/logo.png"
                alt="Watermark"
                width={160}
                height={50}
                className="w-36 h-auto grayscale"
              />
            </div>

            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-[#E8850A]">
                <Quote className="w-6 h-6 rotate-180" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#7D6F63]">
                  {locale === "mr" ? "संयोजकांचे मनोगत" : "Founder's Heritage Note"}
                </span>
              </div>

              <blockquote className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#2E2620] font-serif italic">
                {locale === "mr"
                  ? "“पुस्तके ही केवळ पानांची जुळवाजुळव नसतात; ती मानवी मनाला घडवणारे दीपस्तंभ असतात. २५ वर्षांपूर्वी जेव्हा आम्ही ग्रंथ प्रदर्शनांची सुरुवात केली, तेव्हा प्रत्येक वाचकासाठी योग्य पुस्तक निवडणे हेच आमचे व्रत होते. आज हेच व्रत या डिजिटल दालनाच्या माध्यमातून भारताच्या कानाकोपऱ्यातील वाचकांपर्यंत पोहोचवत आहोत.”"
                  : "“Books are not merely bound paper; they are beacons that shape the human spirit. When we held our very first exhibition over two decades ago, our purpose was simple: to handpick books that leave an enduring mark. Today, that exact legacy extends into this online sanctuary.”"}
              </blockquote>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#DED0BC]/70">
                <div>
                  <h4 className="font-bold text-sm text-[#1F1A16]">
                    {locale === "mr" ? "साहित्ययात्रा ग्रंथदालन परिवार" : "SahityaYatra Exhibition Family"}
                  </h4>
                  <p className="text-xs text-[#7D6F63]">
                    {locale === "mr"
                      ? "२५+ वर्षे समर्पित ग्रंथ प्रचार व संवर्धन • महाराष्ट्र"
                      : "25+ Years Dedicated to Literary Heritage • Maharashtra"}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#236B2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#236B2B]" />
                  <span>{locale === "mr" ? "प्रमाणित ग्रंथ प्रदर्शन संयोजक" : "Certified Literary Exhibition Organizers"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exhibition Footprint Ribbon (Cities Across Maharashtra) */}
          <div className="pt-2 space-y-3">
            <p className="text-xs font-bold text-[#C5B4A5] uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F5A020]" />
              <span>{locale === "mr" ? "प्रदर्शनांचे प्रमुख थांबे" : "Major Exhibition Locations"}</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {exhibitionCities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/15 text-[#ECE3D4] transition-colors"
                >
                  📍 {locale === "mr" ? city.mr : city.en}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/about">
              <Button
                variant="primary"
                size="md"
                className="bg-[#E8850A] text-white hover:bg-[#D47500] font-bold shadow-lg"
              >
                <span>{locale === "mr" ? "आमचा २५ वर्षांचा प्रवास वाचा" : "Read Our Full Journey"}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>

            <Link href="/collections/marathi-books">
              <Button
                variant="outline"
                size="md"
                className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-xs font-medium"
              >
                <span>{locale === "mr" ? "प्रदर्शनातील पुस्तके पाहा" : "Browse Exhibition Books"}</span>
              </Button>
            </Link>

            <a
              href="https://www.facebook.com/SahityaYatraShop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-[#F5A020] hover:underline ml-auto"
            >
              Facebook: /SahityaYatraShop ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
