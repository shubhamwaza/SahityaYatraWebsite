"use client";

import React, { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Book } from "@/types";
import { BookCard } from "@/components/product/BookCard";
import { ArrowUpDown } from "lucide-react";

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
      <div className="p-4 rounded-xl bg-white border border-[#DED0BC] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
        {/* Language Quick Tabs */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#8C7B6E] uppercase tracking-wider mr-1">
            {filtersT("language")}:
          </span>
          <button
            type="button"
            onClick={() => setSelectedLanguage("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedLanguage === "all"
                ? "bg-[#2E2620] text-white shadow-xs"
                : "bg-[#F8F4EC] text-[#5C4E42] hover:bg-[#F0E8D8]"
            }`}
          >
            {locale === "mr" ? "सर्व भाषा" : "All Languages"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("marathi")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedLanguage === "marathi"
                ? "bg-[#E8850A] text-white shadow-xs"
                : "bg-[#F8F4EC] text-[#5C4E42] hover:bg-[#F0E8D8]"
            }`}
          >
            मराठी
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage("english")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedLanguage === "english"
                ? "bg-[#2E2620] text-white shadow-xs"
                : "bg-[#F8F4EC] text-[#5C4E42] hover:bg-[#F0E8D8]"
            }`}
          >
            English
          </button>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 shrink-0">
          <ArrowUpDown className="w-4 h-4 text-[#8C7B6E]" />
          <label htmlFor="sort-books" className="text-xs font-bold text-[#8C7B6E] uppercase tracking-wider">
            {filtersT("sortBy")}:
          </label>
          <select
            id="sort-books"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="text-xs sm:text-sm bg-[#F8F4EC] border border-[#DED0BC] rounded-lg px-2.5 py-1.5 text-[#2E2620] focus:outline-none focus:ring-2 focus:ring-[#E8850A]"
          >
            <option value="default">{filtersT("sortNewest")}</option>
            <option value="price-low">{filtersT("sortPriceLow")}</option>
            <option value="price-high">{filtersT("sortPriceHigh")}</option>
            <option value="title">{filtersT("sortTitle")}</option>
          </select>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? "bg-[#E8850A] text-white border-[#E8850A]"
                : "bg-white text-[#5C4E42] border-[#DED0BC] hover:border-[#E8850A]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Count & Active Filters Indicator */}
      <div className="flex items-center justify-between text-xs text-[#5C4E42] px-1">
        <p>
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
            className="text-[#E8850A] font-semibold hover:underline"
          >
            {filtersT("reset")}
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
        /* Empty State */
        <div className="p-12 text-center bg-white rounded-2xl border border-[#DED0BC] space-y-4">
          <p className="text-base font-bold text-[#2E2620]">
            {locale === "mr"
              ? "या निकषांनुसार कोणतीही पुस्तके आढळली नाहीत"
              : "No books match your selected filters"}
          </p>
          <p className="text-xs text-[#5C4E42] max-w-sm mx-auto">
            {locale === "mr"
              ? "कृपया वेगळी श्रेणी निवडून पाहा किंवा फिल्टर रीसेट करा."
              : "Try switching languages or resetting your category filters."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedLanguage("all");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 bg-[#E8850A] text-white text-xs font-bold rounded-full"
          >
            {filtersT("reset")}
          </button>
        </div>
      )}
    </div>
  );
}
