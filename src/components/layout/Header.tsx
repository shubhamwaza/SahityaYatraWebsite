"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, useRouter } from "@/lib/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useCart } from "@/context/CartContext";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const t = useTranslations("nav");
  const categoriesT = useTranslations("categories");
  const searchT = useTranslations("search");
  const locale = useLocale();
  const router = useRouter();
  const { totalCount, openCart } = useCart();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dynamic scroll listener for smooth header transformation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navCategories = [
    { href: "/collections/marathi-books", label: categoriesT("marathiBooks") },
    { href: "/collections/english-books", label: categoriesT("englishBooks") },
    { href: "/collections/poetry", label: categoriesT("poetry") },
    { href: "/collections/biography", label: categoriesT("biography") },
    { href: "/collections/history", label: categoriesT("history") },
    { href: "/collections/fiction", label: categoriesT("fiction") },
    { href: "/collections/children", label: categoriesT("children") },
    { href: "/shop", label: t("allBooks") },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isScrolled
          ? "bg-[#F8F4EC]/95 backdrop-blur-md shadow-xs border-b border-[#DED0BC]/80"
          : "glass-nav"
      }`}
    >
      {/* ── Top Micro-Bar: Literary Ethos & Exhibition Roots ── */}
      <div
        className={`bg-[#1F1A16] text-[#ECE3D4] text-xs px-4 border-b border-black/10 transition-all duration-300 ease-out overflow-hidden ${
          isScrolled
            ? "max-h-0 py-0 opacity-0 border-transparent pointer-events-none"
            : "max-h-10 py-1.5 opacity-100"
        }`}
      >
        <div className="container-site flex justify-between items-center text-[11px] sm:text-xs">
          <p className="truncate font-medium tracking-tight">
            {locale === "mr"
              ? "साहित्ययात्रा — २५+ वर्षांचा ग्रंथप्रदर्शनाचा वारसा • मराठी व इंग्रजी साहित्य दालन"
              : "SahityaYatra — 25+ Years of Exhibition Heritage • Curated Indian Literature"}
          </p>
          <div className="hidden sm:flex items-center gap-5 text-[#DED0BC]">
            <Link
              href="/about"
              className="hover:text-white transition-colors text-[11px] font-medium"
            >
              {t("about")}
            </Link>
            <span className="text-[#54483E]" aria-hidden="true">•</span>
            <Link
              href="/contact"
              className="hover:text-white transition-colors text-[11px] font-medium"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Header Bar ── */}
      <div
        className={`container-site transition-all duration-300 ease-out ${
          isScrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Mobile Menu Toggle (Min 44x44 touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2.5 -ml-2 text-[#1F1A16] hover:text-[#E8850A] active:scale-95 transition-transform rounded-xl cursor-pointer"
            aria-label={t("menu")}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo with Smooth Dynamic Scroll Scaling */}
          <Link
            href="/"
            className="group flex items-center shrink-0 active:scale-[0.98] transition-transform rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A]"
            aria-label="SahityaYatra"
          >
            <div
              className={`relative flex items-center origin-left transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isScrolled
                  ? "h-9 sm:h-10 md:h-11 w-auto"
                  : "h-11 sm:h-13 md:h-16 lg:h-18 w-auto"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="SahityaYatra"
                width={320}
                height={175}
                priority
                className={`w-auto object-contain transition-all duration-300 select-none drop-shadow-[0_1px_2px_rgba(31,26,22,0.06)] group-hover:drop-shadow-[0_2px_8px_rgba(232,133,10,0.18)] ${
                  isScrolled
                    ? "h-9 sm:h-10 md:h-11"
                    : "h-11 sm:h-13 md:h-16 lg:h-18"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Search Bar (Apple-style pill with optical search button) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-lg mx-6 items-center relative"
          >
            <label htmlFor="desktop-search" className="sr-only">
              {searchT("label")}
            </label>
            <div className="relative w-full group">
              <input
                id="desktop-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchT("placeholder")}
                className="w-full pl-10 pr-24 py-2 bg-white/90 hover:bg-white focus:bg-white border border-[#DED0BC]/80 focus:border-[#E8850A] rounded-full text-xs sm:text-sm text-[#1F1A16] placeholder-[#7D6F63] focus:outline-none focus:ring-2 focus:ring-[#E8850A]/25 transition-all duration-150 shadow-2xs"
              />
              <Search className="w-4 h-4 text-[#7D6F63] group-focus-within:text-[#E8850A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1 bg-[#1F1A16] hover:bg-[#E8850A] active:scale-95 text-white text-xs font-semibold rounded-full transition-all duration-150 flex items-center gap-1 shadow-2xs cursor-pointer"
              >
                <span>{t("search")}</span>
              </button>
            </div>
          </form>

          {/* Right Action Icons & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LanguageSwitcher />

            {/* Cart Trigger Button */}
            <button
              type="button"
              onClick={openCart}
              className="p-2.5 text-[#1F1A16] hover:text-[#E8850A] active:scale-95 transition-all relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8850A] rounded-full bg-white/80 hover:bg-white border border-[#DED0BC]/80 shadow-2xs cursor-pointer"
              aria-label={t("cart")}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {isMounted && totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E8850A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Directly below main bar on small viewports) */}
        <form onSubmit={handleSearchSubmit} className="mt-2.5 md:hidden">
          <label htmlFor="mobile-search" className="sr-only">
            {searchT("label")}
          </label>
          <div className="relative w-full">
            <input
              id="mobile-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchT("placeholder")}
              className="w-full pl-9 pr-20 py-2 bg-white border border-[#DED0BC] rounded-full text-xs sm:text-sm text-[#1F1A16] placeholder-[#8C7B6E] focus:outline-none focus:ring-2 focus:ring-[#E8850A] shadow-2xs"
            />
            <Search className="w-3.5 h-3.5 text-[#8C7B6E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#E8850A] text-white text-xs font-semibold rounded-full active:scale-95 transition-transform cursor-pointer"
            >
              {t("search")}
            </button>
          </div>
        </form>
      </div>

      {/* ── Desktop Category Navigation Row (Tactile Pill Hit Targets) ── */}
      <nav
        aria-label="Categories navigation"
        className="hidden md:block border-t border-[#DED0BC]/60 bg-[#F0E8D8]/40 backdrop-blur-xs"
      >
        <div className="container-site">
          <ul className="flex items-center justify-between text-xs sm:text-sm font-medium py-1.5 overflow-x-auto gap-2">
            {navCategories.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="px-3 py-1 rounded-full text-[#54483E] hover:text-[#1F1A16] hover:bg-black/5 active:bg-black/10 transition-colors inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Mobile Slide-Out Drawer Navigation (transitions-dev Panel Reveal) ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={t("menu")}
      >
        {/* Backdrop Scrim */}
        <div
          className="absolute inset-0 bg-black/45 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={`relative z-10 w-4/5 max-w-sm bg-[#F8F4EC] h-full shadow-2xl flex flex-col p-5 overflow-y-auto transform transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#DED0BC]">
            <Image
              src="/images/logo.png"
              alt="SahityaYatra"
              width={220}
              height={120}
              className="h-11 w-auto object-contain drop-shadow-[0_1px_2px_rgba(31,26,22,0.06)]"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1F1A16] hover:text-[#E8850A] rounded-full active:scale-90 transition-transform cursor-pointer"
              aria-label={t("close")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Categories List */}
          <div className="py-4">
            <p className="text-xs font-bold text-[#8C7B6E] uppercase tracking-wider mb-2">
              {categoriesT("allCategories")}
            </p>
            <ul className="space-y-1">
              {navCategories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-2 text-sm font-medium text-[#1F1A16] hover:text-[#E8850A] hover:bg-[#EFE7D8]/50 rounded-xl transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#8C7B6E]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support Links */}
          <div className="mt-auto pt-4 border-t border-[#DED0BC] space-y-2 text-xs text-[#54483E]">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#E8850A]"
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#E8850A]"
            >
              {t("contact")}
            </Link>
            <a
              href="https://www.facebook.com/SahityaYatraShop"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1 text-[#C06B00] font-semibold hover:underline"
            >
              Facebook: /SahityaYatraShop ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
