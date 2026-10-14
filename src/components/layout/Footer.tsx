import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const categoriesT = useTranslations("categories");
  const policiesT = useTranslations("policies");
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E2620] text-[#DED0BC] border-t border-[#453A32] mt-auto">
      {/* Main Footer Links */}
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              {/* Logo in negative / brightened container for dark footer */}
              <div className="bg-[#F8F4EC] p-2.5 rounded-lg inline-block shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="SahityaYatra"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-[#DED0BC]/80 max-w-sm leading-relaxed">
              {locale === "mr"
                ? "साहित्ययात्रा ही मराठी व इंग्रजी साहित्याची विश्वासू ग्रंथदालन आहे. प्रदर्शन व ऑनलाइन माध्यमांद्वारे आम्ही भारतभरातील वाचकांपर्यंत समृद्ध पुस्तके पोहोचवतो."
                : "SahityaYatra is a dedicated Marathi & English bookstore rooted in offline exhibitions, now bringing carefully curated literature to readers across India."}
            </p>

            <div className="pt-2">
              <a
                href="https://www.facebook.com/SahityaYatraShop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5A020] hover:text-[#E8850A] transition-colors bg-[#453A32]/60 px-3 py-1.5 rounded-full border border-[#DED0BC]/20 hover:border-[#F5A020]/40"
              >
                <span>{t("followUs")}: Facebook.com/SahityaYatraShop</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {categoriesT("allCategories")}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/collections/marathi-books"
                  className="hover:text-white transition-colors"
                >
                  {categoriesT("marathiBooks")}
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/english-books"
                  className="hover:text-white transition-colors"
                >
                  {categoriesT("englishBooks")}
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/poetry"
                  className="hover:text-white transition-colors"
                >
                  {categoriesT("poetry")}
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/biography"
                  className="hover:text-white transition-colors"
                >
                  {categoriesT("biography")}
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/history"
                  className="hover:text-white transition-colors"
                >
                  {categoriesT("history")}
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/fiction"
                  className="hover:text-white transition-colors"
                >
                  {categoriesT("fiction")}
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/children"
                  className="hover:text-white transition-colors"
                >
                  {categoriesT("children")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & About */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {navT("about")}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  {navT("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  {navT("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  {navT("allBooks")}
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="hover:text-white transition-colors"
                >
                  {navT("collections")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies & Trust */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {locale === "mr" ? "धोरणे व मदत" : "Customer Policies"}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/policies/shipping"
                  className="hover:text-white transition-colors"
                >
                  {policiesT("shipping")}
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/returns"
                  className="hover:text-white transition-colors"
                >
                  {policiesT("returns")}
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/privacy"
                  className="hover:text-white transition-colors"
                >
                  {policiesT("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/terms"
                  className="hover:text-white transition-colors"
                >
                  {policiesT("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-[#453A32] py-4 bg-[#231D18] text-xs text-[#DED0BC]/70">
        <div className="container-site flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>
            © {currentYear} SahityaYatra. {t("allRightsReserved")}.
          </p>
          <p className="text-[11px] text-[#DED0BC]/60 text-center sm:text-right">
            {locale === "mr"
              ? "साहित्याची सेवा — भारतभरातील वाचकांसाठी"
              : "Serving readers across India with authentic literature"}
          </p>
        </div>
      </div>
    </footer>
  );
}
