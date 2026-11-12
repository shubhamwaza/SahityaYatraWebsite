"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Book } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BookCard } from "@/components/product/BookCard";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import {
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  Minus,
  Plus,
} from "lucide-react";

interface ProductDetailClientProps {
  book: Book;
  relatedBooks: Book[];
}

export function ProductDetailClient({
  book,
  relatedBooks,
}: ProductDetailClientProps) {
  const t = useTranslations("product");
  const cartT = useTranslations("cart");
  const navT = useTranslations("nav");
  const locale = useLocale();
  const { addItem, openCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const mainBuyBoxRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = () => {
    addItem(book, quantity, false);
    setAdded(true);
    toast.success(
      locale === "mr" ? "पुस्तकाची पिशवीत नोंद झाली!" : "Added to your reading bag",
      {
        description: `${quantity > 1 ? `${quantity}× ` : ""}₹${book.price * quantity} • ${book.title}`,
        action: {
          label: locale === "mr" ? "पिशवी पहा" : "View Bag",
          onClick: () => openCart(),
        },
      }
    );
    setTimeout(() => setAdded(false), 2500);
  };

  // Smart mobile sticky purchase bar observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar only when the main purchase box has scrolled out of view
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = mainBuyBoxRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const discountPercent =
    book.compareAtPrice && book.compareAtPrice > book.price
      ? Math.round(((book.compareAtPrice - book.price) / book.compareAtPrice) * 100)
      : null;

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#8C7B6E]">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-[#2E2620]">
              {navT("home")}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/shop" className="hover:text-[#2E2620]">
              {navT("allBooks")}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/collections/${book.language === "marathi" ? "marathi-books" : "english-books"}`}
              className="hover:text-[#2E2620]"
            >
              {book.language === "marathi" ? "मराठी पुस्तके" : "English Books"}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-[#2E2620] truncate max-w-[200px]">
            {book.title}
          </li>
        </ol>
      </nav>

      {/* Main Balanced Product Panel (Desktop 2-Col, Mobile Stacked) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Book Cover Presentation (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FCFBF7] to-[#F5EFEB] border border-[#DED0BC]/80 shadow-[0_4px_20px_-2px_rgba(31,26,22,0.06)] flex justify-center group">
            <div className="book-stage w-full relative flex justify-center items-center">
              {/* Dynamic Warm Ambient Glow */}
              <div className="book-ambient-glow" />

              <div className="book-spine-3d relative w-full aspect-[2/3] shadow-[0_16px_36px_-6px_rgba(31,26,22,0.2),-6px_0_12px_rgba(0,0,0,0.15)] bg-[#EFE7D8]/90">
                <Image
                  src={book.coverImage}
                  alt={book.coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-cover"
                />

                {/* Emil Kowalski Specular Light Sheen */}
                <div className="book-sheen" />
              </div>
            </div>
          </div>

          <p className="text-[11px] text-[#7D6F63] text-center mt-3 font-medium">
            {locale === "mr"
              ? "मूळ व अधिकृत आवृत्ती • भौतिक छापील पुस्तक"
              : "Authentic Edition • Physical Print Copy"}
          </p>
        </div>

        {/* Right Column: Book Details & Purchase Box (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge
                variant={book.language === "marathi" ? "saffron" : "default"}
                size="sm"
              >
                {book.language === "marathi" ? "मराठी साहित्य" : "English Literature"}
              </Badge>
              <Badge variant="sprout" size="sm">
                {t("inStock")}
              </Badge>
            </div>

            <h1
              className={`text-2xl sm:text-4xl font-bold text-[#2E2620] leading-tight ${
                book.language === "marathi" ? "font-devanagari" : "font-latin"
              }`}
            >
              {book.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5C4E42] font-semibold">
              <span className="text-xs text-[#8C7B6E] font-normal uppercase tracking-wider block">
                {t("author")}
              </span>
              {book.author}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DED0BC]/80 shadow-[0_2px_8px_rgba(31,26,22,0.04)] space-y-2.5">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2E2620] tracking-tight">
                ₹{book.price}
              </span>
              {book.compareAtPrice && book.compareAtPrice > book.price && (
                <>
                  <span className="text-base sm:text-lg text-[#8C7B6E] line-through font-medium">
                    ₹{book.compareAtPrice}
                  </span>
                  {discountPercent && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#C62828]/10 text-[#C62828] border border-[#C62828]/25">
                      {discountPercent}% {locale === "mr" ? "सूट" : "OFF"}
                    </span>
                  )}
                </>
              )}
              <span className="text-xs text-[#2E7D32] font-semibold bg-[#2E7D32]/8 px-2 py-0.5 rounded-md">
                {locale === "mr" ? "किंमत कर समाविष्ट" : "Inclusive of all taxes"}
              </span>
            </div>

            {/* In-Stock Indicator */}
            <p className="text-xs text-[#2E7D32] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
              {book.quantityAvailable && book.quantityAvailable < 10
                ? t("lowStock", { count: book.quantityAvailable })
                : t("inStock")}
            </p>
          </div>

          {/* Main Buy Box Ref (Observed for mobile sticky bar) */}
          <div ref={mainBuyBoxRef} className="space-y-4 pt-2">
            {/* Quantity Selector & Add to Cart Row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[#DED0BC] bg-white rounded-full p-1 shrink-0 shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#2E2620] hover:bg-[#F8F4EC] active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  disabled={quantity <= 1}
                  aria-label={locale === "mr" ? "प्रमाण कमी करा" : "Decrease quantity"}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-sm text-[#2E2620] tabular-nums select-none">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#2E2620] hover:bg-[#F8F4EC] active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] cursor-pointer"
                  aria-label={locale === "mr" ? "प्रमाण वाढवा" : "Increase quantity"}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={!book.availableForSale}
                className="flex-1 shadow-sm active:scale-[0.98] transition-transform"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 mr-1" />
                    <span>{cartT("itemAdded")}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-1" />
                    <span>{t("addToCart")}</span>
                  </>
                )}
              </Button>
            </div>

            {/* Delivery Guarantee Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C4E42] pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FCFBF7] border border-[#DED0BC]/70">
                <Truck className="w-4 h-4 text-[#E8850A] shrink-0" />
                <span>
                  {locale === "mr"
                    ? "भारतभर सुरक्षित घरपोच वितरण"
                    : "Safe delivery across India"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FCFBF7] border border-[#DED0BC]/70">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>
                  {locale === "mr"
                    ? "१००% अस्सल व मूळ आवृत्ती"
                    : "100% Genuine Print Copy"}
                </span>
              </div>
            </div>
          </div>

          {/* Book Synopsis */}
          {book.description && (
            <div className="space-y-2.5 pt-5 border-t border-[#DED0BC]/70">
              <h2 className="text-base font-bold text-[#2E2620] tracking-tight">
                {t("description")}
              </h2>
              <div
                className={`max-w-2xl text-sm sm:text-[15px] text-[#5C4E42] leading-[1.75] ${
                  book.language === "marathi" ? "font-devanagari tracking-normal" : "font-latin"
                }`}
              >
                {book.description}
              </div>
            </div>
          )}

          {/* Bibliographic Specifications Table */}
          <div className="space-y-3 pt-5 border-t border-[#DED0BC]/70">
            <h2 className="text-base font-bold text-[#2E2620] tracking-tight">
              {t("specifications")}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {book.publisher && (
                <div className="p-3 bg-[#FCFBF7] rounded-xl border border-[#DED0BC]/70 hover:border-[#E8850A]/40 transition-colors shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-[#8C7B6E] font-medium block mb-1">
                    {t("publisher")}
                  </span>
                  <span className="text-sm font-semibold text-[#2E2620]">
                    {book.publisher}
                  </span>
                </div>
              )}

              {book.isbn && (
                <div className="p-3 bg-[#FCFBF7] rounded-xl border border-[#DED0BC]/70 hover:border-[#E8850A]/40 transition-colors shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-[#8C7B6E] font-medium block mb-1">
                    {t("isbn")}
                  </span>
                  <span className="text-sm font-semibold text-[#2E2620] font-mono">
                    {book.isbn}
                  </span>
                </div>
              )}

              {book.pageCount && (
                <div className="p-3 bg-[#FCFBF7] rounded-xl border border-[#DED0BC]/70 hover:border-[#E8850A]/40 transition-colors shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-[#8C7B6E] font-medium block mb-1">
                    {t("pages")}
                  </span>
                  <span className="text-sm font-semibold text-[#2E2620] tabular-nums">
                    {book.pageCount}
                  </span>
                </div>
              )}

              {book.format && (
                <div className="p-3 bg-[#FCFBF7] rounded-xl border border-[#DED0BC]/70 hover:border-[#E8850A]/40 transition-colors shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-[#8C7B6E] font-medium block mb-1">
                    {t("format")}
                  </span>
                  <span className="text-sm font-semibold text-[#2E2620]">
                    {book.format}
                  </span>
                </div>
              )}

              <div className="p-3 bg-[#FCFBF7] rounded-xl border border-[#DED0BC]/70 hover:border-[#E8850A]/40 transition-colors shadow-2xs">
                <span className="text-[11px] uppercase tracking-wider text-[#8C7B6E] font-medium block mb-1">
                  {t("language")}
                </span>
                <span className="text-sm font-semibold text-[#2E2620]">
                  {book.language === "marathi" ? "मराठी (Marathi)" : "English"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      {relatedBooks.length > 0 && (
        <section className="pt-8 border-t border-[#DED0BC]/70 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2E2620] tracking-tight">
              {t("relatedBooks")}
            </h2>
            <Link
              href="/shop"
              className="text-xs sm:text-sm font-bold text-[#E8850A] hover:text-[#D47000] underline-offset-4 hover:underline transition-colors"
            >
              {locale === "mr" ? "सर्व पाहा →" : "View All →"}
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedBooks.map((relBook) => (
              <BookCard key={relBook.id} book={relBook} />
            ))}
          </div>
        </section>
      )}

      {/* Smart Mobile Sticky Purchase Bar (Design.md Section 9.4) */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 bg-[#FCFBF7]/95 backdrop-blur-xl border-t border-[#DED0BC]/80 p-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(31,26,22,0.12)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          <div className="truncate min-w-0">
            <p className="text-xs font-bold text-[#2E2620] truncate">
              {book.title}
            </p>
            <p className="text-sm font-extrabold text-[#E8850A] tabular-nums">
              ₹{book.price}
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={handleAddToCart}
            disabled={!book.availableForSale}
            className="shrink-0 shadow-sm active:scale-95 transition-transform"
          >
            {added ? (
              <Check className="w-4 h-4 mr-1" />
            ) : (
              <ShoppingBag className="w-4 h-4 mr-1" />
            )}
            <span>{t("addToCart")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
