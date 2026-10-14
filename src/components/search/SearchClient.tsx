"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { BookCard } from "@/components/product/BookCard";
import { searchBooks } from "@/lib/sampleBooks";
import { Search, X } from "lucide-react";

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
            className="w-full pl-12 pr-12 py-4 bg-white/95 backdrop-blur-md border border-[#DED0BC]/80 hover:border-[#CDBDA6] focus:border-[#E8850A] rounded-2xl sm:rounded-full text-base text-[#1F1A16] placeholder-[#7D6F63] focus:outline-none focus:ring-4 focus:ring-[#E8850A]/15 shadow-sm transition-all duration-150"
          />
          <Search className="w-5 h-5 text-[#7D6F63] group-focus-within:text-[#E8850A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[#7D6F63] hover:text-[#1F1A16] active:scale-90 rounded-full cursor-pointer transition-transform"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Language Filter */}
        <div className="flex items-center justify-center gap-2 mt-5 text-xs">
          <button
            type="button"
            onClick={() => setSelectedLanguage("all")}
            className={`px-3.5 py-1.5 rounded-full font-semibold cursor-pointer active:scale-95 transition-all duration-150 ${
              selectedLanguage === "all"
                ? "bg-[#1F1A16] text-white shadow-xs"
                : "bg-white/80 border border-[#DED0BC] text-[#54483E] hover:bg-[#EFE7D8]"
            }`}
          >
            {locale === "mr" ? "सर्व भाषा" : "All Languages"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("marathi")}
            className={`px-3.5 py-1.5 rounded-full font-semibold cursor-pointer active:scale-95 transition-all duration-150 ${
              selectedLanguage === "marathi"
                ? "bg-[#E8850A] text-white shadow-xs font-devanagari font-bold"
                : "bg-white/80 border border-[#DED0BC] text-[#54483E] hover:bg-[#EFE7D8]"
            }`}
          >
            मराठी
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("english")}
            className={`px-3.5 py-1.5 rounded-full font-semibold cursor-pointer active:scale-95 transition-all duration-150 ${
              selectedLanguage === "english"
                ? "bg-[#1F1A16] text-white shadow-xs font-bold"
                : "bg-white/80 border border-[#DED0BC] text-[#54483E] hover:bg-[#EFE7D8]"
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-[#DED0BC] pb-3 text-xs sm:text-sm text-[#5C4E42]">
        <p>
          {query.trim()
            ? t("results", { count: results.length, query: query.trim() })
            : locale === "mr"
            ? `एकूण ${results.length} पुस्तके`
            : `Browsing all ${results.length} books`}
        </p>
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center bg-white rounded-2xl border border-[#DED0BC] p-8 space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#FFF3E0] text-[#E8850A] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>

          <h2 className="text-lg font-bold text-[#2E2620]">
            {t("noResults", { query: query.trim() })}
          </h2>

          <p className="text-xs sm:text-sm text-[#5C4E42]">
            {t("noResultsMessage")}
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedLanguage("all");
              }}
              className="px-4 py-2 bg-[#E8850A] text-white text-xs font-bold rounded-full"
            >
              {locale === "mr" ? "सर्व पुस्तके पाहा" : "View All Books"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
