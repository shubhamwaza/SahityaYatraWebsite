"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Book } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BookCard } from "@/components/product/BookCard";
import {
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
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

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const mainBuyBoxRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = () => {
    setAdded(true);
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
          <div className="relative w-full max-w-sm aspect-[2/3] rounded-2xl overflow-hidden border border-[#DED0BC] shadow-lg bg-[#F0E8D8]/60">
            <Image
              src={book.coverImage}
              alt={book.coverImageAlt}
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
              className="object-cover"
            />
            {discountPercent && (
              <div className="absolute top-4 right-4">
                <span className="bg-[#C62828] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                  {discountPercent}% OFF
                </span>
              </div>
            )}
          </div>

          <p className="text-[11px] text-[#8C7B6E] text-center mt-3">
            {locale === "mr"
              ? "मूळ व अधिकृत आवृत्ती • छापील पुस्तक"
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
          <div className="p-4 rounded-xl bg-white border border-[#DED0BC] space-y-2">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-extrabold text-[#2E2620]">
                ₹{book.price}
              </span>
              {book.compareAtPrice && book.compareAtPrice > book.price && (
                <span className="text-base text-[#8C7B6E] line-through">
                  ₹{book.compareAtPrice}
                </span>
              )}
              <span className="text-xs text-[#2E7D32] font-semibold">
                {locale === "mr" ? "किंमत कर समाविष्ट" : "Inclusive of all taxes"}
              </span>
            </div>

            {/* In-Stock Indicator */}
            <p className="text-xs text-[#2E7D32] font-medium flex items-center gap-1.5">
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
              <div className="flex items-center border border-[#DED0BC] bg-white rounded-full p-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#2E2620] hover:bg-[#F8F4EC] disabled:opacity-30"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-[#2E2620]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#2E2620] hover:bg-[#F8F4EC]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={!book.availableForSale}
                className="flex-1 shadow-md"
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
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8F4EC] border border-[#DED0BC]/60">
                <Truck className="w-4 h-4 text-[#E8850A] shrink-0" />
                <span>
                  {locale === "mr"
                    ? "भारतभर सुरक्षित घरपोच वितरण"
                    : "Safe delivery across India"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8F4EC] border border-[#DED0BC]/60">
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
            <div className="space-y-2 pt-4 border-t border-[#DED0BC]">
              <h2 className="text-base font-bold text-[#2E2620]">
                {t("description")}
              </h2>
              <p className="text-sm text-[#5C4E42] leading-relaxed">
                {book.description}
              </p>
            </div>
          )}

          {/* Bibliographic Specifications Table */}
          <div className="space-y-3 pt-4 border-t border-[#DED0BC]">
            <h2 className="text-base font-bold text-[#2E2620]">
              {t("specifications")}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {book.publisher && (
                <div className="p-3 bg-white rounded-lg border border-[#DED0BC]/60">
                  <span className="text-[#8C7B6E] block font-semibold mb-0.5">
                    {t("publisher")}
                  </span>
                  <span className="text-[#2E2620] font-medium">
                    {book.publisher}
                  </span>
                </div>
              )}

              {book.isbn && (
                <div className="p-3 bg-white rounded-lg border border-[#DED0BC]/60">
                  <span className="text-[#8C7B6E] block font-semibold mb-0.5">
                    {t("isbn")}
                  </span>
                  <span className="text-[#2E2620] font-mono font-medium">
                    {book.isbn}
                  </span>
                </div>
              )}

              {book.pageCount && (
                <div className="p-3 bg-white rounded-lg border border-[#DED0BC]/60">
                  <span className="text-[#8C7B6E] block font-semibold mb-0.5">
                    {t("pages")}
                  </span>
                  <span className="text-[#2E2620] font-medium">
                    {book.pageCount}
                  </span>
                </div>
              )}

              {book.format && (
                <div className="p-3 bg-white rounded-lg border border-[#DED0BC]/60">
                  <span className="text-[#8C7B6E] block font-semibold mb-0.5">
                    {t("format")}
                  </span>
                  <span className="text-[#2E2620] font-medium">
                    {book.format}
                  </span>
                </div>
              )}

              <div className="p-3 bg-white rounded-lg border border-[#DED0BC]/60">
                <span className="text-[#8C7B6E] block font-semibold mb-0.5">
                  {t("language")}
                </span>
                <span className="text-[#2E2620] font-medium">
                  {book.language === "marathi" ? "मराठी (Marathi)" : "English"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      {relatedBooks.length > 0 && (
        <section className="pt-8 border-t border-[#DED0BC] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2E2620]">
              {t("relatedBooks")}
            </h2>
            <Link
              href="/shop"
              className="text-xs sm:text-sm font-bold text-[#E8850A] hover:underline"
            >
              {locale === "mr" ? "सर्व पाहा" : "View All"}
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
        className={`fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DED0BC] p-3 shadow-2xl transition-transform duration-300 md:hidden ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="truncate">
            <p className="text-xs font-bold text-[#2E2620] truncate">
              {book.title}
            </p>
            <p className="text-sm font-extrabold text-[#E8850A]">
              ₹{book.price}
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={handleAddToCart}
            disabled={!book.availableForSale}
            className="shrink-0 shadow-sm"
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
