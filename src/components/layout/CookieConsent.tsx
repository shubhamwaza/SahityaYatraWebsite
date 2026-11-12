"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Cookie, ShieldCheck, X } from "lucide-react";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return false;
  return !localStorage.getItem("sahitya_cookie_consent");
}

function getServerSnapshot() {
  return false;
}

function notify() {
  listeners.forEach((cb) => cb());
}

export function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const isInitialPrompt = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsDismissed(false);
      setIsManualOpen(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpen);
    };
  }, []);

  const isOpen = !isDismissed && (isInitialPrompt || isManualOpen);

  const handleChoice = (preference: "all" | "essential") => {
    localStorage.setItem("sahitya_cookie_consent", preference);
    setIsManualOpen(false);
    setIsDismissed(true);
    notify();
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsManualOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      role="region"
      aria-label={t("title")}
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-[#16120F]/95 backdrop-blur-md text-[#ECE3D4] border-t border-[#3D322A] shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="container-site max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left: Icon & Description */}
        <div className="flex items-start gap-3.5 max-w-3xl">
          <div className="p-2.5 rounded-xl bg-[#231D18] border border-white/10 text-[#F5A020] shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                {t("title")}
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#A89887] bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                <ShieldCheck className="w-3 h-3 text-[#4CAF50]" />
                DPDP 2023 Compliant
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#DED0BC]/85 leading-relaxed">
              {t("description")}{" "}
              <Link
                href="/policies/cookies"
                className="text-[#F5A020] hover:text-[#E8850A] underline underline-offset-2 font-medium"
              >
                {t("cookiePolicy")}
              </Link>
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end pt-2 md:pt-0">
          <button
            type="button"
            onClick={() => handleChoice("essential")}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#231D18] text-[#ECE3D4] hover:bg-[#322A23] border border-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A020]"
          >
            {t("essentialOnly")}
          </button>
          <button
            type="button"
            onClick={() => handleChoice("all")}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#E8850A] hover:bg-[#C96E00] text-white shadow-md transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A020]"
          >
            {t("acceptAll")}
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="p-2 rounded-lg text-[#A89887] hover:text-white hover:bg-white/5 transition-colors ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A020]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
