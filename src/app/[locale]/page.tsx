import React from "react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/lib/i18n/navigation";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { HeritagePavilion } from "@/components/home/HeritagePavilion";
import { BookCard } from "@/components/product/BookCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getBooks } from "@/lib/shopify/queries";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
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

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const allBooks = await getBooks();
  const newArrivals = allBooks.slice(0, 4);
  const recommendations =
    allBooks.slice(4, 8).length > 0 ? allBooks.slice(4, 8) : allBooks.slice(0, 4);
  const marathiHighlights = allBooks
    .filter((b) => b.language === "marathi")
    .slice(0, 4);
  const englishHighlights = allBooks
    .filter((b) => b.language === "english")
    .slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Campaign Hero Showcase */}
      <HeroCarousel />

      {/* 2. Category Quick-Browse Strip (Apple Segmented Pills) */}
      <CategoryStrip />

      {/* 3. Section: New Arrivals (नवीन आगमन | New Arrivals) */}
      <section className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#DED0BC]/70">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="saffron" size="sm">
                <Sparkles className="w-3 h-3 mr-1" />
                {locale === "mr" ? "ताजी पुस्तके" : "Fresh Collection"}
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F1A16] optical-title">
              {t("newArrivalsMarathi")}
            </h2>
            <p className="text-xs sm:text-sm text-[#7D6F63]">
              {locale === "mr"
                ? "आमच्या संग्रहातील नव्याने दाखल झालेली निवडक पुस्तके"
                : "Handpicked newly catalogued titles across genres"}
            </p>
          </div>

          <Link
            href="/shop"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E8850A] hover:text-[#C06B00] group cursor-pointer"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4-Column Product Grid with Optical Balance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {newArrivals.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* 4. Section: SahityaYatra Recommendations (आमच्या शिफारसी | Our Recommendations) */}
      <section className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#DED0BC]/70">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="sprout" size="sm">
                <BookOpen className="w-3 h-3 mr-1" />
                {locale === "mr" ? "संपादकीय निवड" : "Curator's Choice"}
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F1A16] optical-title">
              {t("ourRecommendationsMarathi")}
            </h2>
            <p className="text-xs sm:text-sm text-[#7D6F63]">
              {locale === "mr"
                ? "वाचकांनी अवश्य वाचावीत अशी चिरंतन व मोलाची पुस्तके"
                : "Essential reading recommended by our seasoned bibliophiles"}
            </p>
          </div>

          <Link
            href="/collections/marathi-books"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E8850A] hover:text-[#C06B00] group cursor-pointer"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {recommendations.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* 5. Feature Banner: Marathi Literature Spotlight (Apple Editorial Story Card) */}
      <section className="container-site">
        <div className="rounded-3xl bg-gradient-to-br from-[#2D1A16] via-[#3D221C] to-[#1C0F0C] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle background glow */}
          <div
            className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#E8850A]/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-[#F5A020] uppercase tracking-widest">
              {locale === "mr" ? "मराठी साहित्याचे दालन" : "Marathi Literature Spotlight"}
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight font-devanagari">
              {locale === "mr"
                ? "समृद्ध मराठी ग्रंथ संपदा, आता तुमच्या घरी"
                : "Treasured Marathi Classics & Modern Masterpieces"}
            </h2>

            <p className="text-xs sm:text-base text-[#ECE3D4]/90 leading-relaxed font-normal">
              {locale === "mr"
                ? "संत साहित्य, ऐतिहासिक महाकादंबऱ्या, विनोदी साहित्य, ललित निबंध आणि सामाजिक विचार मांडणारी सर्वोत्कृष्ट पुस्तके."
                : "From timeless historical sagas to contemporary memoirs, explore the finest expressions of Marathi culture."}
            </p>

            <div className="pt-2">
              <Link href="/collections/marathi-books">
                <Button
                  variant="primary"
                  size="md"
                  className="bg-[#E8850A] text-white hover:bg-[#D47500] font-bold shadow-lg"
                >
                  <span>{locale === "mr" ? "मराठी पुस्तके पाहा" : "Explore Marathi Books"}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Book Cards Grid inside Spotlight */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-10 border-t border-white/15">
            {marathiHighlights.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: English Literature Highlights */}
      <section className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#DED0BC]/70">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F1A16] optical-title">
              {locale === "mr"
                ? "इंग्रजी पुस्तके | English Literature"
                : "English Literature & Indian Authors"}
            </h2>
            <p className="text-xs sm:text-sm text-[#7D6F63]">
              {locale === "mr"
                ? "भारतीय व जागतिक इंग्रजी साहित्यातील प्रसिद्ध पुस्तके"
                : "Classic fiction, memoirs, and celebrated Indian writings in English"}
            </p>
          </div>

          <Link
            href="/collections/english-books"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E8850A] hover:text-[#C06B00] group cursor-pointer"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {englishHighlights.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* 7. The Father's Heritage Exhibition Pavilion (25+ Years Legacy) */}
      <HeritagePavilion />
    </div>
  );
}
