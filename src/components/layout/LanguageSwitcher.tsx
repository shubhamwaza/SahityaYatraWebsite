"use client";

import React, { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("nav");

  const switchLocale = (newLocale: "en" | "mr") => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={`inline-flex items-center rounded-full bg-[#EFE7D8]/80 p-0.5 border border-[#DED0BC]/80 shadow-xs ${className}`}
      role="group"
      aria-label={t("language")}
    >
      <span className="sr-only">{t("language")}</span>
      <div className="pl-2 pr-1 text-[#7D6F63]" aria-hidden="true">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => switchLocale("mr")}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-150 active:scale-95 cursor-pointer ${
          locale === "mr"
            ? "bg-[#E8850A] text-white shadow-sm font-devanagari font-bold"
            : "text-[#54483E] hover:text-[#1F1A16] hover:bg-white/40"
        }`}
        aria-pressed={locale === "mr"}
        lang="mr"
      >
        मराठी
      </button>

      <button
        type="button"
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-150 active:scale-95 cursor-pointer ${
          locale === "en"
            ? "bg-[#1F1A16] text-white shadow-sm font-bold"
            : "text-[#54483E] hover:text-[#1F1A16] hover:bg-white/40"
        }`}
        aria-pressed={locale === "en"}
        lang="en"
      >
        EN
      </button>
    </div>
  );
}
