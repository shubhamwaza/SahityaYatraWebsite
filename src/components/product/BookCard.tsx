"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Book } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check } from "lucide-react";

export interface BookCardProps {
  book: Book;
  priority?: boolean;
}

export function BookCard({ book, priority = false }: BookCardProps) {
  const t = useTranslations("product");
  const cartT = useTranslations("cart");
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(book, 1, true);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discountPercent =
    book.compareAtPrice && book.compareAtPrice > book.price
      ? Math.round(((book.compareAtPrice - book.price) / book.compareAtPrice) * 100)
      : null;

  const isClassicMasterpiece =
    book.categories.includes("classics") ||
    book.handle.includes("mrityunjay") ||
    book.handle.includes("chaava") ||
    book.handle.includes("yayati");

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-[#DED0BC]/80 hover:border-[#E8850A]/70 shadow-[0_2px_8px_-1px_rgba(31,26,22,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(31,26,22,0.15)] transition-[transform,box-shadow,border-color] duration-240 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden">
      {/* Clickable Book Cover Presentation (Physical Book Depth & Sheen) */}
      <Link
        href={`/products/${book.handle}`}
        className="relative block p-4 sm:p-5 bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE3]/70 cursor-pointer overflow-hidden"
      >
        <div className="book-stage relative w-full aspect-[2/3] flex items-center justify-center">
          {/* Ambient Diffuse Glow behind book */}
          <div className="book-ambient-glow" />

          {/* Physical 3D Book with Spine Crease & Paper Page Edges */}
          <div className="book-spine-3d relative w-full h-full bg-[#EFE7D8]/90">
            <Image
              src={book.coverImage}
              alt={book.coverImageAlt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={priority}
              className="object-cover"
            />

            {/* Emil Kowalski Specular Light Sheen */}
            <div className="book-sheen" />

            {/* Top-Right Discount Badge */}
            {discountPercent && (
              <div className="absolute top-2 right-2 z-20">
                <span className="bg-[#C62828] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs tracking-tight">
                  {discountPercent}% OFF
                </span>
              </div>
            )}

            {/* Top-Left Classic / Masterpiece Ribbon */}
            {isClassicMasterpiece && (
              <div className="absolute top-2 left-2 z-20">
                <span className="inline-flex items-center gap-0.5 bg-[#1F1A16]/90 backdrop-blur-md text-[#F5A020] text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-[#F5A020]/40 shadow-xs uppercase tracking-wider">
                  ★ {book.language === "marathi" ? "अभिजात" : "Classic"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Language Badge (Overlay) */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
          <Badge
            variant={book.language === "marathi" ? "saffron" : "default"}
            size="sm"
            className="shadow-xs backdrop-blur-md bg-white/90 font-medium text-[11px]"
          >
            {book.language === "marathi" ? "मराठी" : "English"}
          </Badge>
        </div>
      </Link>

      {/* Book Metadata & Actions */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4 space-y-1.5">
        {/* Title */}
        <Link href={`/products/${book.handle}`} className="block group/title">
          <h3
            className={`font-bold text-[#1F1A16] group-hover/title:text-[#E8850A] transition-colors duration-150 line-clamp-2 leading-snug tracking-tight ${
              book.language === "marathi"
                ? "font-devanagari text-base sm:text-lg"
                : "font-latin text-sm sm:text-base"
            }`}
          >
            {book.title}
          </h3>
        </Link>

        {/* Author */}
        <p className="text-xs text-[#7D6F63] line-clamp-1 font-medium">
          {book.author}
        </p>

        {/* Flexible Spacer */}
        <div className="flex-1 min-h-[0.5rem]" />

        {/* Price & Action Row */}
        <div className="pt-2.5 border-t border-[#DED0BC]/50 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-base sm:text-lg font-extrabold text-[#1F1A16] tracking-tight">
              ₹{book.price}
            </span>
            {book.compareAtPrice && book.compareAtPrice > book.price && (
              <span className="text-xs text-[#7D6F63] line-through">
                ₹{book.compareAtPrice}
              </span>
            )}
          </div>

          {/* Quick Add Button with Emil Kowalski press scale and confirmation */}
          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={!book.availableForSale}
            className={`relative inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-90 focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
              added
                ? "bg-[#236B2B] text-white shadow-xs font-semibold"
                : "bg-[#F8F4EC] text-[#1F1A16] hover:bg-[#E8850A] hover:text-white shadow-2xs font-medium"
            }`}
            title={added ? cartT("itemAdded") : t("addToCart")}
            aria-label={`${t("addToCart")} - ${book.title}`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="text-[11px] font-bold">
                  {book.language === "marathi" ? "जोडले" : "Added"}
                </span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">
                  {book.language === "marathi" ? "खरेदी" : "Add"}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
