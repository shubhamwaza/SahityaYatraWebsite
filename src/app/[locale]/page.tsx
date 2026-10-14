import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/lib/i18n/navigation";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { BookCard } from "@/components/product/BookCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  getNewArrivals,
  getRecommendations,
  getMarathiBooks,
  getEnglishBooks,
} from "@/lib/sampleBooks";
import {
  ArrowRight,
  BookOpen,
  MapPin,
  Sparkles,
  Truck,
  HeartHandshake,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title:
      locale === "mr"
        ? "साहित्ययात्रा — मराठी व इंग्रजी ग्रंथदालन"
        : "SahityaYatra — Marathi & English Bookstore",
    description: t("heroSubtitle"),
  };
}

export default function HomePage() {
  const t = useTranslations("home");
  const navT = useTranslations("nav");
  const locale = useLocale();

  const newArrivals = getNewArrivals();
  const recommendations = getRecommendations();
  const marathiHighlights = getMarathiBooks().slice(2, 6);
  const englishHighlights = getEnglishBooks().slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* 1. Campaign Hero Carousel */}
      <HeroCarousel />

      {/* 2. Category Quick-Browse Strip */}
      <CategoryStrip />

      {/* 3. Section: New Arrivals (नवीन आगमन | New Arrivals) */}
      <section className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-[#DED0BC]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="saffron" size="sm">
                <Sparkles className="w-3 h-3 mr-1" />
                {locale === "mr" ? "ताजी पुस्तके" : "Fresh Collection"}
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2620]">
              {t("newArrivalsMarathi")}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4E42] mt-1">
              {locale === "mr"
                ? "आमच्या संग्रहातील नव्याने दाखल झालेली निवडक पुस्तके"
                : "Handpicked newly catalogued titles across genres"}
            </p>
          </div>

          <Link
            href="/shop"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E8850A] hover:text-[#C06B00] group"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* 4. Section: SahityaYatra Recommendations (आमच्या शिफारसी | Our Recommendations) */}
      <section className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-[#DED0BC]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="sprout" size="sm">
                <BookOpen className="w-3 h-3 mr-1" />
                {locale === "mr" ? "संपादकीय निवड" : "Curator's Choice"}
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2620]">
              {t("ourRecommendationsMarathi")}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4E42] mt-1">
              {locale === "mr"
                ? "वाचकांनी अवश्य वाचावीत अशी चिरंतन व मोलाची पुस्तके"
                : "Essential reading recommended by our seasoned bibliophiles"}
            </p>
          </div>

          <Link
            href="/collections/marathi-books"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E8850A] hover:text-[#C06B00] group"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {recommendations.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* 5. Feature Banner: Marathi Literature Spotlight */}
      <section className="container-site">
        <div className="rounded-2xl bg-gradient-to-r from-[#8A3324] via-[#702418] to-[#45140D] text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">
          {/* Subtle background glow */}
          <div
            className="absolute right-0 top-0 w-80 h-80 rounded-full bg-[#E5A93C]/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
              {locale === "mr" ? "मराठी साहित्याचे दालन" : "Marathi Literature Focus"}
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold leading-tight font-devanagari">
              {locale === "mr"
                ? "समृद्ध मराठी ग्रंथ संपदा, आता तुमच्या घरी"
                : "Treasured Marathi Classics & Modern Masterpieces"}
            </h2>

            <p className="text-xs sm:text-sm text-[#DED0BC] leading-relaxed">
              {locale === "mr"
                ? "संत साहित्य, ऐतिहासिक महाकादंबऱ्या, विनोदी साहित्य, ललित निबंध आणि सामाजिक विचार मांडणारी सर्वोत्कृष्ट पुस्तके."
                : "From timeless historical sagas to contemporary memoirs, explore the finest expressions of Marathi culture."}
            </p>

            <div className="pt-2">
              <Link href="/collections/marathi-books">
                <Button
                  variant="primary"
                  size="md"
                  className="bg-[#E5A93C] text-[#2E2620] hover:bg-[#F28C38] font-bold"
                >
                  <span>{locale === "mr" ? "मराठी पुस्तके पाहा" : "Explore Marathi Books"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Book Cards Grid inside Spotlight */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
            {marathiHighlights.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: English Literature Highlights */}
      <section className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-[#DED0BC]">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2620]">
              {locale === "mr"
                ? "इंग्रजी पुस्तके | English Literature"
                : "English Literature & Indian Authors"}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4E42] mt-1">
              {locale === "mr"
                ? "भारतीय व जागतिक इंग्रजी साहित्यातील प्रसिद्ध पुस्तके"
                : "Classic fiction, memoirs, and celebrated Indian writings in English"}
            </p>
          </div>

          <Link
            href="/collections/english-books"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E8850A] hover:text-[#C06B00] group"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {englishHighlights.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* 7. Exhibition Heritage & Brand Trust Narrative */}
      <section className="container-site">
        <div className="rounded-2xl bg-white border border-[#DED0BC] p-6 sm:p-10 lg:p-12 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Story */}
            <div className="space-y-4">
              <Badge variant="saffron" size="sm">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {locale === "mr" ? "ग्रंथ प्रदर्शन परंपरा" : "Exhibition Roots"}
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E2620] leading-snug">
                {locale === "mr"
                  ? "प्रत्यक्ष प्रदर्शनांपासून सुरू झालेला वाचनप्रवास"
                  : "Born From Book Exhibitions, Now Across India"}
              </h2>

              <p className="text-xs sm:text-sm text-[#5C4E42] leading-relaxed">
                {locale === "mr"
                  ? "साहित्ययात्रा ही केवळ एक ऑनलाइन दुकान नसून, वर्षानुवर्षे ग्रंथ प्रदर्शनांच्या माध्यमातून वाचकांशी जोडलेली एक विश्वासू संस्था आहे. 5,000 पेक्षा जास्त पुस्तकांच्या समृद्ध अनुभवातून आम्ही प्रत्येक वाचकासाठी योग्य पुस्तक निवडण्यास मदत करतो."
                  : "SahityaYatra began with offline book exhibitions, speaking directly with readers across Maharashtra. Drawing from our broader catalogue of over 5,000 titles, we curate reading that enriches minds and endures across generations."}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/about">
                  <Button variant="outline" size="md">
                    <span>{navT("about")}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>

                <a
                  href="https://www.facebook.com/SahityaYatraShop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-[#E8850A] hover:underline"
                >
                  Facebook: /SahityaYatraShop ↗
                </a>
              </div>
            </div>

            {/* 3 Value Pillars */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                <div className="p-2 rounded-lg bg-[#E8850A]/10 text-[#E8850A] shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2E2620]">
                    {locale === "mr" ? "प्रामाणिक ग्रंथ निवड" : "Literary Curation"}
                  </h3>
                  <p className="text-xs text-[#5C4E42] mt-0.5">
                    {locale === "mr"
                      ? "केवळ लोकप्रिय नव्हे, तर वाचनीय व विचारप्रवर्तक पुस्तकांची निवड."
                      : "Handpicked literature valued for substance, quality, and literary merit."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                <div className="p-2 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] shrink-0 mt-0.5">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2E2620]">
                    {locale === "mr" ? "सुरक्षित भारतभर वितरण" : "Careful Delivery in India"}
                  </h3>
                  <p className="text-xs text-[#5C4E42] mt-0.5">
                    {locale === "mr"
                      ? "पुस्तकांना इजा पोहोचणार नाही अशा सुरक्षित पॅकिंगसह घरपोच."
                      : "Respectful, damage-free packaging delivered straight to your doorstep."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F4EC] border border-[#DED0BC]/60">
                <div className="p-2 rounded-lg bg-[#3F51B5]/10 text-[#3F51B5] shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2E2620]">
                    {locale === "mr" ? "वाचकांचा विश्वास" : "Reader-First Support"}
                  </h3>
                  <p className="text-xs text-[#5C4E42] mt-0.5">
                    {locale === "mr"
                      ? "पुस्तकांच्या निवडीत व खरेदीत वैयक्तिक मदत व प्रामाणिक मार्गदर्शन."
                      : "Honest customer support dedicated to assisting book lovers."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
