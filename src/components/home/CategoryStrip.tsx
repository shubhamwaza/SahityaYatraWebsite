import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import {
  BookOpen,
  Feather,
  UserCheck,
  Compass,
  Smile,
  Globe,
  Flame,
  Layers,
} from "lucide-react";

export function CategoryStrip() {
  const t = useTranslations("categories");

  const categories = [
    {
      label: t("marathiBooks"),
      href: "/collections/marathi-books",
      icon: Flame,
      highlight: true,
    },
    {
      label: t("englishBooks"),
      href: "/collections/english-books",
      icon: Globe,
      highlight: false,
    },
    {
      label: t("poetry"),
      href: "/collections/poetry",
      icon: Feather,
      highlight: false,
    },
    {
      label: t("biography"),
      href: "/collections/biography",
      icon: UserCheck,
      highlight: false,
    },
    {
      label: t("history"),
      href: "/collections/history",
      icon: Compass,
      highlight: false,
    },
    {
      label: t("fiction"),
      href: "/collections/fiction",
      icon: BookOpen,
      highlight: false,
    },
    {
      label: t("children"),
      href: "/collections/children",
      icon: Smile,
      highlight: false,
    },
    {
      label: t("classics"),
      href: "/collections/classics",
      icon: Layers,
      highlight: false,
    },
  ];

  return (
    <nav
      aria-label="Category shortcuts"
      className="w-full bg-[#FCFBF7] border-b border-[#DED0BC]/70 py-3 shadow-2xs sticky top-[69px] sm:top-[75px] z-30 backdrop-blur-md"
    >
      <div className="container-site">
        {/* Horizontal scroll container with hidden scrollbar styling */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1 -my-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 cursor-pointer will-change-transform active:scale-95 transition-[transform,background-color,border-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] border focus-visible:ring-2 focus-visible:ring-[#E8850A] ${
                  cat.highlight
                    ? "bg-[#FFF4E5] text-[#C06B00] border-[#E8850A]/30 shadow-xs hover:bg-[#FFE8CC]"
                    : "bg-white/80 text-[#1F1A16] border-[#DED0BC]/80 hover:border-[#E8850A] hover:bg-white shadow-2xs"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-inherit" />
                <span>{cat.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
