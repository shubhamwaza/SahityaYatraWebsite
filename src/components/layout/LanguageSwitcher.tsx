"use client";

import React, { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { Globe, Loader2 } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("nav");

  const switchLocale = (newLocale: "en" | "mr") => {
    if (newLocale === locale || isPending) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={`relative inline-flex items-center rounded-full bg-[#EFE7D8]/90 p-1 border border-[#DED0BC]/90 shadow-2xs select-none ${className}`}
      role="group"
      aria-label={t("language")}
    >
      <span className="sr-only">{t("language")}</span>

      {/* Globe Icon / Loading Indicator */}
      <div className="pl-1.5 pr-1 text-[#7D6F63] flex items-center" aria-hidden="true">
        {isPending ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#E8850A]" />
        ) : (
          <Globe className="w-3.5 h-3.5" />
        )}
      </div>

      {/* Marathi Option */}
      <button
        type="button"
        onClick={() => switchLocale("mr")}
        disabled={isPending}
        className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 active:scale-95 cursor-pointer ${
          locale === "mr"
            ? "bg-[#E8850A] text-white shadow-xs font-devanagari font-bold"
            : "text-[#54483E] hover:text-[#1F1A16] hover:bg-white/50"
        } ${isPending ? "opacity-60 cursor-wait" : ""}`}
        aria-pressed={locale === "mr"}
        lang="mr"
      >
        मराठी
      </button>

      {/* English Option */}
      <button
        type="button"
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 active:scale-95 cursor-pointer ${
          locale === "en"
            ? "bg-[#1F1A16] text-white shadow-xs font-bold"
            : "text-[#54483E] hover:text-[#1F1A16] hover:bg-white/50"
        } ${isPending ? "opacity-60 cursor-wait" : ""}`}
        aria-pressed={locale === "en"}
        lang="en"
      >
        EN
      </button>
    </div>
  );
}
