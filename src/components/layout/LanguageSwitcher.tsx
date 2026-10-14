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
      className={`inline-flex items-center rounded-full bg-[#F0E8D8] p-1 border border-[#DED0BC] ${className}`}
      role="group"
      aria-label={t("language")}
    >
      <span className="sr-only">{t("language")}</span>
      <div className="pl-1.5 pr-1 text-[#5C4E42]" aria-hidden="true">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => switchLocale("mr")}
        disabled={isPending}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-150 ${
          locale === "mr"
            ? "bg-[#E8850A] text-white shadow-xs"
            : "text-[#5C4E42] hover:text-[#2E2620]"
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
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-150 ${
          locale === "en"
            ? "bg-[#2E2620] text-white shadow-xs"
            : "text-[#5C4E42] hover:text-[#2E2620]"
        }`}
        aria-pressed={locale === "en"}
        lang="en"
      >
        EN
      </button>
    </div>
  );
}
