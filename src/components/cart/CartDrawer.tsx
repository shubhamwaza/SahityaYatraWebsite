"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { useCart } from "@/context/CartContext";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Truck,
  ArrowRight,
  ShieldCheck,
  Lock,
  Sparkles,
} from "lucide-react";

export function CartDrawer() {
  const t = useTranslations("cart");
  const locale = useLocale();
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    totalCount,
    subtotal,
    freeShippingRemaining,
    freeShippingProgress,
  } = useCart();

  // Keyboard shortcut: close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* 1. Backdrop Scrim */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* 2. Slide-Over Panel (Apple-grade Spring Motion) */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t("title")}
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md sm:max-w-lg bg-[#FCFBF7] shadow-2xl flex flex-col transition-transform duration-350 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-[#DED0BC]/70 bg-white/80 backdrop-blur-md flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-full bg-[#FFF4E5] text-[#E8850A]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#1F1A16] optical-title flex items-center gap-2">
                <span>{locale === "mr" ? "तुमची झोळी" : "Your Basket"}</span>
                {totalCount > 0 && (
                  <span className="text-xs bg-[#E8850A] text-white font-extrabold px-2 py-0.5 rounded-full">
                    {totalCount}
                  </span>
                )}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCart}
            className="p-2 rounded-full text-[#7D6F63] hover:text-[#1F1A16] hover:bg-[#F8F4EC] active:scale-90 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#E8850A]"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-[#FAF6EF] px-5 py-3 border-b border-[#DED0BC]/60 shrink-0">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <div className="flex items-center gap-1.5 text-[#1F1A16]">
              <Truck className="w-3.5 h-3.5 text-[#E8850A]" />
              {freeShippingRemaining > 0 ? (
                <span>
                  {locale === "mr" ? (
                    <>मोफत डिलिव्हरीसाठी अजून <strong className="text-[#E8850A]">₹{freeShippingRemaining}</strong> ची खरेदी करा</>
                  ) : (
                    <>Add <strong className="text-[#E8850A]">₹{freeShippingRemaining}</strong> more for Free Delivery</>
                  )}
                </span>
              ) : (
                <span className="text-[#236B2B] font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {locale === "mr"
                    ? "अभिनंदन! संपूर्ण भारतात मोफत डिलिव्हरी लागू झाली!"
                    : "You've unlocked Free Delivery across India!"}
                </span>
              )}
            </div>
            <span className="text-[11px] text-[#7D6F63]">{freeShippingProgress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-[#E8DFC0]/60 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ease-out rounded-full ${
                freeShippingRemaining === 0
                  ? "bg-[#236B2B]"
                  : "bg-gradient-to-r from-[#E8850A] to-[#F5A020]"
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Drawer Body: Cart Items or Empty State */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#FAF4EA] border border-[#DED0BC]/70 flex items-center justify-center text-[#E8850A] shadow-inner">
                <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="space-y-1.5 max-w-xs">
                <h3 className="text-lg font-bold text-[#1F1A16] optical-title">
                  {locale === "mr" ? "तुमची झोळी सध्या रिकामी आहे" : "Your Basket is Empty"}
                </h3>
                <p className="text-xs sm:text-sm text-[#7D6F63]">
                  {locale === "mr"
                    ? "आमच्या ग्रंथदालनातील समृद्ध मराठी व इंग्रजी पुस्तके शोधून वाचनाचा आनंद घ्या."
                    : "Explore our rich collection of Marathi classics and acclaimed English titles."}
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8850A] hover:bg-[#C06B00] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <Link href="/shop" onClick={closeCart} className="flex items-center gap-1.5">
                  <span>{locale === "mr" ? "पुस्तके शोधा" : "Explore Books"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </button>
            </div>
          ) : (
            /* Item List */
            <ul className="space-y-4">
              {items.map(({ book, quantity }) => (
                <li
                  key={book.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-white border border-[#DED0BC]/70 shadow-2xs hover:border-[#E8850A]/40 transition-colors"
                >
                  {/* Miniature 3D Book Cover */}
                  <Link
                    href={`/products/${book.handle}`}
                    onClick={closeCart}
                    className="relative w-16 sm:w-20 aspect-[2/3] shrink-0 book-spine-3d bg-[#EFE7D8]/80 shadow-xs"
                  >
                    <Image
                      src={book.coverImage}
                      alt={book.coverImageAlt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2">
                    <div>
                      <Link
                        href={`/products/${book.handle}`}
                        onClick={closeCart}
                        className="block font-bold text-xs sm:text-sm text-[#1F1A16] hover:text-[#E8850A] line-clamp-2 leading-snug transition-colors"
                      >
                        {book.title}
                      </Link>
                      <p className="text-[11px] text-[#7D6F63] truncate mt-0.5">
                        {book.author}
                      </p>
                    </div>

                    {/* Price & Stepper Row */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className="text-sm font-extrabold text-[#1F1A16]">
                        ₹{book.price * quantity}
                        {quantity > 1 && (
                          <span className="text-[10px] font-normal text-[#7D6F63] ml-1">
                            (₹{book.price} × {quantity})
                          </span>
                        )}
                      </span>

                      {/* Stepper & Trash Pill */}
                      <div className="flex items-center gap-2">
                        {/* Stepper */}
                        <div className="inline-flex items-center rounded-full border border-[#DED0BC] bg-[#F8F4EC] p-0.5 shadow-2xs">
                          <button
                            type="button"
                            onClick={() => updateQuantity(book.id, quantity - 1)}
                            className="p-1 rounded-full hover:bg-white text-[#1F1A16] active:scale-90 transition-transform cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#1F1A16]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(book.id, quantity + 1)}
                            className="p-1 rounded-full hover:bg-white text-[#1F1A16] active:scale-90 transition-transform cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => removeItem(book.id)}
                          className="p-1.5 text-[#7D6F63] hover:text-[#C62828] active:scale-90 transition-colors cursor-pointer"
                          aria-label={t("remove")}
                          title={t("remove")}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Drawer Footer: Subtotal & Apple Checkout */}
        {items.length > 0 && (
          <div className="border-t border-[#DED0BC]/80 bg-white/95 backdrop-blur-md p-5 space-y-3 shrink-0 shadow-[0_-4px_20px_rgba(31,26,22,0.05)]">
            {/* Calculation Lines */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center text-[#7D6F63]">
                <span>{locale === "mr" ? "उप-एकूण (Subtotal)" : "Subtotal"}</span>
                <span className="text-sm font-bold text-[#1F1A16]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-[#7D6F63]">
                <span>{locale === "mr" ? "डिलिव्हरी (Delivery)" : "Delivery"}</span>
                <span className={freeShippingRemaining === 0 ? "text-[#236B2B] font-bold" : "text-[#7D6F63]"}>
                  {freeShippingRemaining === 0
                    ? locale === "mr" ? "मोफत (FREE)" : "FREE"
                    : locale === "mr" ? "चेकआउटच्या वेळी मोजले जाईल" : "Calculated next"}
                </span>
              </div>
            </div>

            {/* Apple Primary Checkout Button */}
            <button
              type="button"
              onClick={() => {
                // When connected with Shopify Checkout, will redirect to cart.checkoutUrl
                // For development, provide direct prompt or toast
                alert(
                  locale === "mr"
                    ? `साहित्ययात्रा: एकूण ₹${subtotal} ची ऑर्डर चेकआउटसाठी सज्ज आहे. (Shopify Payment Gateway द्वारे सुरक्षित व्यवहार)`
                    : `SahityaYatra: Order of ₹${subtotal} is ready for checkout via Shopify Payment Gateway.`
                );
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#1F1A16] hover:bg-[#E8850A] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-150 active:scale-[0.98] cursor-pointer"
            >
              <Lock className="w-4 h-4 text-[#F5A020]" />
              <span>{locale === "mr" ? "सुरक्षित चेकआउट करा" : "Proceed to Checkout"}</span>
              <span className="ml-1 text-xs font-normal opacity-75">• ₹{subtotal}</span>
            </button>

            {/* Trust Badges Strip */}
            <div className="pt-1 flex items-center justify-center gap-4 text-[10px] text-[#7D6F63] font-medium">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#236B2B]" />
                <span>{locale === "mr" ? "सुरक्षित व्यवहार" : "Secure Payment"}</span>
              </div>
              <span>•</span>
              <span>{locale === "mr" ? "भारतभर घरपोच" : "All-India Delivery"}</span>
              <span>•</span>
              <span>{locale === "mr" ? "१००% अस्सल पुस्तके" : "100% Genuine Books"}</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
