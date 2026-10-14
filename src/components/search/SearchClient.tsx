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
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("placeholder")}
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#DED0BC] rounded-full text-base text-[#2E2620] placeholder-[#8C7B6E] focus:outline-none focus:ring-2 focus:ring-[#E8850A] shadow-xs"
          />
          <Search className="w-5 h-5 text-[#8C7B6E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C7B6E] hover:text-[#2E2620]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Language Filter */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs">
          <button
            type="button"
            onClick={() => setSelectedLanguage("all")}
            className={`px-3 py-1 rounded-full font-semibold transition-colors ${
              selectedLanguage === "all"
                ? "bg-[#2E2620] text-white"
                : "bg-white border border-[#DED0BC] text-[#5C4E42]"
            }`}
          >
            {locale === "mr" ? "सर्व भाषा" : "All Languages"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("marathi")}
            className={`px-3 py-1 rounded-full font-semibold transition-colors ${
              selectedLanguage === "marathi"
                ? "bg-[#E8850A] text-white"
                : "bg-white border border-[#DED0BC] text-[#5C4E42]"
            }`}
          >
            मराठी
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("english")}
            className={`px-3 py-1 rounded-full font-semibold transition-colors ${
              selectedLanguage === "english"
                ? "bg-[#2E2620] text-white"
                : "bg-white border border-[#DED0BC] text-[#5C4E42]"
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
