import React, { Suspense } from "react";
import type { Metadata } from "next";
import { SearchClient } from "@/components/search/SearchClient";
import { Badge } from "@/components/ui/Badge";
import { Search } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "mr"
        ? "पुस्तके शोधा | साहित्ययात्रा"
        : "Search Books | SahityaYatra",
    description:
      locale === "mr"
        ? "शीर्षक, लेखक किंवा ISBN ने मराठी व इंग्रजी पुस्तके शोधा."
        : "Search Marathi and English books by title, author, or ISBN.",
  };
}

export default async function SearchPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="container-site py-8 sm:py-12 space-y-6">
      {/* Search Page Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto pb-4">
        <Badge variant="saffron" size="sm">
          <Search className="w-3.5 h-3.5 mr-1" />
          {locale === "mr" ? "पुस्तके शोधा" : "Book Finder"}
        </Badge>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#2E2620]">
          {locale === "mr" ? "साहित्य शोध" : "Search Literature"}
        </h1>
        <p className="text-xs sm:text-sm text-[#5C4E42]">
          {locale === "mr"
            ? "पुस्तकाचे नाव, लेखक किंवा प्रकाशक टाकून थेट शोधा."
            : "Search by book title, author, publisher, or subject."}
        </p>
      </div>

      {/* Suspense Wrapped Search Client */}
      <Suspense
        fallback={
          <div className="py-12 text-center text-sm text-[#8C7B6E]">
            {locale === "mr" ? "लोड होत आहे..." : "Loading search..."}
          </div>
        }
      >
        <SearchClient />
      </Suspense>
    </div>
  );
}
