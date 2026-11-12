"use client";

import React, { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Book } from "@/types";
import { BookCard } from "@/components/product/BookCard";
import { ArrowUpDown, ChevronDown, RotateCcw, BookOpen } from "lucide-react";

interface ShopClientProps {
  initialBooks: Book[];
}

export function ShopClient({ initialBooks }: ShopClientProps) {
  const filtersT = useTranslations("filters");
  const categoriesT = useTranslations("categories");
  const locale = useLocale();

  const [selectedLanguage, setSelectedLanguage] = useState<
    "all" | "marathi" | "english"
  >("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high" | "title">("default");

  const categories = [
    { id: "all", label: categoriesT("allCategories") },
    { id: "marathi-books", label: categoriesT("marathiBooks") },
    { id: "english-books", label: categoriesT("englishBooks") },
    { id: "fiction", label: categoriesT("fiction") },
    { id: "classics", label: categoriesT("classics") },
    { id: "history", label: categoriesT("history") },
    { id: "biography", label: categoriesT("biography") },
    { id: "children", label: categoriesT("children") },
  ];

  const filteredBooks = useMemo(() => {
    let list = [...initialBooks];

    // Filter language
    if (selectedLanguage !== "all") {
      list = list.filter((b) => b.language === selectedLanguage);
    }

    // Filter category
    if (selectedCategory !== "all") {
      list = list.filter((b) => b.categories.includes(selectedCategory));
    }

    // Sort
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "title") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [initialBooks, selectedLanguage, selectedCategory, sortBy]);

  return (
    <div className="space-y-6">
      {/* Filter and Sort Toolbar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DED0BC]/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_2px_8px_rgba(31,26,22,0.04)]">
        {/* Language Segmented Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap" role="group" aria-label={filtersT("language")}>
          <span className="text-xs font-bold text-[#7D6F63] uppercase tracking-wider mr-1">
            {filtersT("language")}:
          </span>
          <button
            type="button"
            onClick={() => setSelectedLanguage("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              selectedLanguage === "all"
                ? "bg-[#1F1A16] text-white shadow-xs"
                : "bg-[#F8F4EC] text-[#54483E] hover:bg-[#EFE7D8]"
            }`}
          >
            {locale === "mr" ? "सर्व भाषा" : "All Languages"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("marathi")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              selectedLanguage === "marathi"
                ? "bg-[#E8850A] text-white shadow-xs font-devanagari font-bold"
                : "bg-[#F8F4EC] text-[#54483E] hover:bg-[#EFE7D8]"
            }`}
          >
            मराठी
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("english")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              selectedLanguage === "english"
                ? "bg-[#1F1A16] text-white shadow-xs font-bold"
                : "bg-[#F8F4EC] text-[#54483E] hover:bg-[#EFE7D8]"
            }`}
          >
            English
          </button>
        </div>

        {/* Sort Select with Custom Chevron Indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#7D6F63] shrink-0" />
          <label htmlFor="sort-books" className="text-xs font-bold text-[#7D6F63] uppercase tracking-wider">
            {filtersT("sortBy")}:
          </label>
          <div className="relative inline-flex items-center">
            <select
              id="sort-books"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="appearance-none text-xs sm:text-sm bg-[#FCFBF7] border border-[#DED0BC] hover:border-[#E8850A]/70 rounded-xl pl-3 pr-8 py-1.5 text-[#1F1A16] font-medium focus:outline-none focus:ring-2 focus:ring-[#E8850A] cursor-pointer shadow-2xs transition-colors"
            >
              <option value="default">{filtersT("sortNewest")}</option>
              <option value="price-low">{filtersT("sortPriceLow")}</option>
              <option value="price-high">{filtersT("sortPriceHigh")}</option>
              <option value="title">{filtersT("sortTitle")}</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#7D6F63] absolute right-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer active:scale-95 transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              selectedCategory === cat.id
                ? "bg-[#E8850A] text-white border-[#E8850A] shadow-xs"
                : "bg-white text-[#54483E] border-[#DED0BC] hover:border-[#E8850A]/70 hover:bg-[#FAF7F2]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Count & Active Filters Indicator */}
      <div className="flex items-center justify-between text-xs text-[#5C4E42] px-1">
        <p className="font-medium">
          {locale === "mr"
            ? `${filteredBooks.length} पुस्तके उपलब्ध`
            : `Showing ${filteredBooks.length} books`}
        </p>

        {(selectedLanguage !== "all" || selectedCategory !== "all") && (
          <button
            type="button"
            onClick={() => {
              setSelectedLanguage("all");
              setSelectedCategory("all");
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DED0BC] text-[#E8850A] font-semibold hover:bg-[#F3EDE3] active:scale-95 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#E8850A]"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{filtersT("reset")}</span>
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        /* Empty State with Curated Quick Recovery Options */
        <div className="p-8 sm:p-12 text-center bg-[#FCFBF7] rounded-3xl border border-[#DED0BC]/80 space-y-4 max-w-lg mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FFF4E5] text-[#E8850A] flex items-center justify-center mx-auto shadow-inner">
            <BookOpen className="w-6 h-6 stroke-[1.75]" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#2E2620]">
              {locale === "mr"
                ? "या निकषांनुसार कोणतीही पुस्तके आढळली नाहीत"
                : "No books match your selected filters"}
            </h3>
            <p className="text-xs text-[#7D6F63] leading-relaxed">
              {locale === "mr"
                ? "वेगळी श्रेणी निवडून पाहा किंवा खालील लोकप्रिय विभागांमधील पुस्तके शोधा:"
                : "Try exploring these popular literature categories instead:"}
            </p>
          </div>

          {/* Quick Popular Category Pills for Fast Recovery */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setSelectedLanguage("marathi");
                setSelectedCategory("classics");
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#DED0BC] hover:border-[#E8850A] text-[#2E2620] hover:text-[#E8850A] active:scale-95 transition-all cursor-pointer"
            >
              {locale === "mr" ? "अभिजात मराठी (Classics)" : "Marathi Classics"}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedLanguage("marathi");
                setSelectedCategory("fiction");
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#DED0BC] hover:border-[#E8850A] text-[#2E2620] hover:text-[#E8850A] active:scale-95 transition-all cursor-pointer"
            >
              {locale === "mr" ? "कादंबरी (Fiction)" : "Fiction"}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedLanguage("all");
                setSelectedCategory("history");
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#DED0BC] hover:border-[#E8850A] text-[#2E2620] hover:text-[#E8850A] active:scale-95 transition-all cursor-pointer"
            >
              {locale === "mr" ? "इतिहास (History)" : "History"}
            </button>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSelectedLanguage("all");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#E8850A] hover:bg-[#D47000] text-white text-xs font-bold rounded-full shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{filtersT("reset")}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
