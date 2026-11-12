"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { BookCard } from "@/components/product/BookCard";
import { searchBooks } from "@/lib/sampleBooks";
import { Search, X, Sparkles, BookOpen } from "lucide-react";

export function SearchClient() {
  const t = useTranslations("search");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedLanguage, setSelectedLanguage] = useState<
    "all" | "marathi" | "english"
  >("all");

  const results = useMemo(() => {
    return searchBooks(
      query,
      selectedLanguage === "all" ? undefined : selectedLanguage
    );
  }, [query, selectedLanguage]);

  const popularSuggestions = [
    { label: "मृत्युंजय", query: "मृत्युंजय" },
    { label: "पु. ल. देशपांडे", query: "पु. ल. देशपांडे" },
    { label: "ययाति", query: "ययाति" },
    { label: "श्यामची आई", query: "श्यामची आई" },
    { label: "शिवाजी सावंत", query: "शिवाजी सावंत" },
  ];

  return (
    <div className="space-y-8">
      {/* Search Bar Input */}
      <div className="max-w-2xl mx-auto">
        <div className="relative group">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("placeholder")}
            aria-label={t("placeholder")}
            className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-white border border-[#DED0BC] hover:border-[#CDBDA6] focus:border-[#E8850A] rounded-2xl sm:rounded-full text-base text-[#1F1A16] placeholder-[#7D6F63] focus:outline-none focus:ring-4 focus:ring-[#E8850A]/15 shadow-sm transition-all"
          />
          <Search className="w-5 h-5 text-[#7D6F63] group-focus-within:text-[#E8850A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 text-[#7D6F63] hover:text-[#1F1A16] hover:bg-[#F8F4EC] active:scale-90 rounded-full cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
              aria-label={locale === "mr" ? "शोध साफ करा" : "Clear search"}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Language Filter */}
        <div
          className="flex items-center justify-center gap-2 mt-5 text-xs flex-wrap"
          role="group"
          aria-label={locale === "mr" ? "भाषा फिल्टर" : "Language Filter"}
        >
          <button
            type="button"
            onClick={() => setSelectedLanguage("all")}
            className={`px-3.5 py-1.5 rounded-full font-semibold cursor-pointer active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              selectedLanguage === "all"
                ? "bg-[#1F1A16] text-white shadow-xs"
                : "bg-white border border-[#DED0BC] text-[#54483E] hover:bg-[#FAF7F2]"
            }`}
          >
            {locale === "mr" ? "सर्व भाषा" : "All Languages"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("marathi")}
            className={`px-3.5 py-1.5 rounded-full font-semibold cursor-pointer active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              selectedLanguage === "marathi"
                ? "bg-[#E8850A] text-white shadow-xs font-devanagari font-bold"
                : "bg-white border border-[#DED0BC] text-[#54483E] hover:bg-[#FAF7F2]"
            }`}
          >
            मराठी
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("english")}
            className={`px-3.5 py-1.5 rounded-full font-semibold cursor-pointer active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              selectedLanguage === "english"
                ? "bg-[#1F1A16] text-white shadow-xs font-bold"
                : "bg-white border border-[#DED0BC] text-[#54483E] hover:bg-[#FAF7F2]"
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-[#DED0BC]/80 pb-3 text-xs sm:text-sm text-[#5C4E42]">
        <p className="font-medium">
          {query.trim()
            ? t("results", { count: results.length, query: query.trim() })
            : locale === "mr"
            ? `एकूण ${results.length} पुस्तके उपलब्ध`
            : `Browsing all ${results.length} books`}
        </p>

        {query.trim() && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedLanguage("all");
            }}
            className="text-[#E8850A] font-semibold hover:underline cursor-pointer"
          >
            {locale === "mr" ? "शोध रीसेट करा" : "Clear Query"}
          </button>
        )}
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        /* Empty State with Curated Literary Discovery Chips */
        <div className="py-12 sm:py-16 text-center bg-[#FCFBF7] rounded-3xl border border-[#DED0BC]/80 p-6 sm:p-10 space-y-5 max-w-lg mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#FFF4E5] text-[#E8850A] flex items-center justify-center mx-auto shadow-inner">
            <BookOpen className="w-7 h-7 stroke-[1.75]" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg sm:text-xl font-bold text-[#2E2620]">
              {t("noResults", { query: query.trim() })}
            </h2>

            <p className="text-xs sm:text-sm text-[#7D6F63] leading-relaxed max-w-sm mx-auto">
              {t("noResultsMessage")}
            </p>
          </div>

          {/* Curated Reader Recommendations */}
          <div className="pt-2 space-y-2.5">
            <p className="text-xs font-semibold text-[#8C7B6E] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E8850A]" />
              <span>
                {locale === "mr"
                  ? "किंवा या लोकप्रिय साहित्यकृती शोधा:"
                  : "Or explore these reader favorites:"}
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {popularSuggestions.map((item) => (
                <button
                  key={item.query}
                  type="button"
                  onClick={() => setQuery(item.query)}
                  className="px-3.5 py-1.5 bg-white border border-[#DED0BC] hover:border-[#E8850A] text-[#2E2620] hover:text-[#E8850A] text-xs font-medium rounded-full active:scale-95 transition-all shadow-2xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedLanguage("all");
              }}
              className="px-5 py-2.5 bg-[#E8850A] hover:bg-[#D47000] text-white text-xs sm:text-sm font-bold rounded-full shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
            >
              {locale === "mr" ? "सर्व पुस्तके पाहा" : "View All Books"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
