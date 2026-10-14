"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, useRouter } from "@/lib/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const t = useTranslations("nav");
  const categoriesT = useTranslations("categories");
  const searchT = useTranslations("search");
  const locale = useLocale();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-40 w-full bg-[#F8F4EC]/95 backdrop-blur-md border-b border-[#DED0BC]">
      {/* Top micro-bar: literary ethos & exhibition roots */}
      <div className="bg-[#2E2620] text-[#DED0BC] text-xs py-1.5 px-4 text-center">
        <div className="container-site flex justify-between items-center text-[11px] sm:text-xs">
          <p className="truncate">
            {locale === "mr"
              ? "साहित्ययात्रा — ग्रंथ प्रदर्शन व मराठी-इंग्रजी पुस्तकांचे दालन"
              : "SahityaYatra — Dedicated Marathi & English Book Curation"}
          </p>
          <div className="hidden sm:flex items-center gap-4 text-[#EDE4D4]">
            <Link
              href="/about"
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container-site py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 -ml-2 text-[#2E2620] hover:text-[#E8850A] focus-visible:ring-2 focus-visible:ring-[#E8850A] rounded-md"
            aria-label={t("menu")}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:ring-2 focus-visible:ring-[#E8850A] rounded-md p-1"
          >
            <Image
              src="/images/logo.png"
              alt="SahityaYatra"
              width={160}
              height={55}
              priority
              className="h-9 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Search Bar (Search-Led Architecture) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-xl mx-4 items-center relative"
          >
            <label htmlFor="desktop-search" className="sr-only">
              {searchT("label")}
            </label>
            <div className="relative w-full">
              <input
                id="desktop-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchT("placeholder")}
                className="w-full pl-10 pr-24 py-2.5 bg-white border border-[#DED0BC] rounded-full text-sm text-[#2E2620] placeholder-[#8C7B6E] focus:outline-none focus:ring-2 focus:ring-[#E8850A] focus:border-transparent transition-all shadow-2xs"
              />
              <Search className="w-4 h-4 text-[#8C7B6E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-[#E8850A] hover:bg-[#C06B00] text-white text-xs font-medium rounded-full transition-colors flex items-center gap-1"
              >
                <span>{t("search")}</span>
              </button>
            </div>
          </form>

          {/* Right Action Icons & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <LanguageSwitcher />

            {/* Cart Icon Link */}
            <Link
              href="/shop"
              className="p-2 text-[#2E2620] hover:text-[#E8850A] relative focus-visible:ring-2 focus-visible:ring-[#E8850A] rounded-full"
              aria-label={t("cart")}
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute top-1 right-1 bg-[#E8850A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar (Directly below main bar) */}
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
              className="w-full pl-9 pr-20 py-2 bg-white border border-[#DED0BC] rounded-full text-xs sm:text-sm text-[#2E2620] placeholder-[#8C7B6E] focus:outline-none focus:ring-2 focus:ring-[#E8850A] shadow-2xs"
            />
            <Search className="w-3.5 h-3.5 text-[#8C7B6E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#E8850A] text-white text-xs font-medium rounded-full"
            >
              {t("search")}
            </button>
          </div>
        </form>
      </div>

      {/* Desktop Category Navigation Row */}
      <nav
        aria-label="Categories navigation"
        className="hidden md:block border-t border-[#DED0BC]/60 bg-[#F0E8D8]/50"
      >
        <div className="container-site">
          <ul className="flex items-center justify-between text-xs sm:text-sm font-medium py-2 overflow-x-auto gap-4">
            {navCategories.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="text-[#5C4E42] hover:text-[#E8850A] hover:underline underline-offset-4 transition-colors py-1 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-xs flex"
          role="dialog"
          aria-modal="true"
          aria-label={t("menu")}
        >
          <div className="w-4/5 max-w-sm bg-[#F8F4EC] h-full shadow-2xl flex flex-col p-5 overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#DED0BC]">
              <Image
                src="/images/logo.png"
                alt="SahityaYatra"
                width={130}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#2E2620] hover:text-[#E8850A] rounded-full"
                aria-label={t("close")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Categories list */}
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
                      className="flex items-center justify-between py-2 text-sm font-medium text-[#2E2620] hover:text-[#E8850A] border-b border-[#DED0BC]/30"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#8C7B6E]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Support links */}
            <div className="mt-auto pt-4 border-t border-[#DED0BC] space-y-2 text-xs text-[#5C4E42]">
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

          {/* Backdrop click to close */}
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
}
