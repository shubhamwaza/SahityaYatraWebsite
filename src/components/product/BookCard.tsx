"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Book } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ShoppingBag, Check } from "lucide-react";

export interface BookCardProps {
  book: Book;
  priority?: boolean;
}

export function BookCard({ book, priority = false }: BookCardProps) {
  const t = useTranslations("product");
  const cartT = useTranslations("cart");
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discountPercent =
    book.compareAtPrice && book.compareAtPrice > book.price
      ? Math.round(((book.compareAtPrice - book.price) / book.compareAtPrice) * 100)
      : null;

  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-[#DED0BC] overflow-hidden hover:border-[#E8850A] hover:shadow-md transition-all duration-200">
      {/* Clickable Image Container */}
      <Link
        href={`/products/${book.handle}`}
        className="relative block aspect-[2/3] w-full overflow-hidden bg-[#F0E8D8]/50"
      >
        <Image
          src={book.coverImage}
          alt={book.coverImageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />

        {/* Language Badge */}
        <div className="absolute top-2.5 left-2.5">
          <Badge
            variant={book.language === "marathi" ? "saffron" : "default"}
            size="sm"
            className="shadow-2xs font-semibold backdrop-blur-xs"
          >
            {book.language === "marathi" ? "मराठी" : "English"}
          </Badge>
        </div>

        {/* Discount Badge (only if verified discount) */}
        {discountPercent && (
          <div className="absolute top-2.5 right-2.5">
            <span className="bg-[#C62828] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
              {discountPercent}% OFF
            </span>
          </div>
        )}
      </Link>

      {/* Book Information */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4 space-y-2">
        {/* Title */}
        <Link href={`/products/${book.handle}`} className="block">
          <h3
            className={`font-bold text-[#2E2620] group-hover:text-[#E8850A] transition-colors line-clamp-2 leading-snug ${
              book.language === "marathi"
                ? "font-devanagari text-base sm:text-lg"
                : "font-latin text-sm sm:text-base"
            }`}
          >
            {book.title}
          </h3>
        </Link>

        {/* Author */}
        <p className="text-xs sm:text-sm text-[#5C4E42] line-clamp-1 font-medium">
          {book.author}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-[#DED0BC]/40 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-base sm:text-lg font-bold text-[#2E2620]">
              ₹{book.price}
            </span>
            {book.compareAtPrice && book.compareAtPrice > book.price && (
              <span className="text-xs text-[#8C7B6E] line-through">
                ₹{book.compareAtPrice}
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={!book.availableForSale}
            className={`p-2 rounded-full transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              added
                ? "bg-[#2E7D32] text-white"
                : "bg-[#F8F4EC] text-[#2E2620] hover:bg-[#E8850A] hover:text-white"
            }`}
            title={added ? cartT("itemAdded") : t("addToCart")}
            aria-label={`${t("addToCart")} - ${book.title}`}
          >
            {added ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
