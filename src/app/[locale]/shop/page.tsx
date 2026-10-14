import React from "react";
import type { Metadata } from "next";
import { getBooks } from "@/lib/shopify/queries";
import { ShopClient } from "@/components/shop/ShopClient";
import { Badge } from "@/components/ui/Badge";
import { BookOpen } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "mr"
        ? "सर्व पुस्तके | साहित्ययात्रा"
        : "All Books | SahityaYatra",
    description:
      locale === "mr"
        ? "साहित्ययात्रा दालनातील सर्व मराठी व इंग्रजी पुस्तके ब्राउझ करा."
        : "Browse our entire curated catalog of Marathi and English literature.",
  };
}

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  const books = await getBooks();

  return (
    <div className="container-site py-8 sm:py-12 space-y-6">
      {/* Header */}
      <div className="space-y-2 border-b border-[#DED0BC] pb-6">
        <div className="inline-flex items-center gap-2">
          <Badge variant="saffron" size="sm">
            <BookOpen className="w-3.5 h-3.5 mr-1" />
            {locale === "mr" ? "ग्रंथ दालन" : "Curated Bookstore"}
          </Badge>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#2E2620]">
          {locale === "mr" ? "सर्व पुस्तके" : "All Books"}
        </h1>
        <p className="text-xs sm:text-sm text-[#5C4E42] max-w-2xl">
          {locale === "mr"
            ? "मराठी अभिजात साहित्यापासून आधुनिक विचारवंत लेखकांपर्यंत, सर्व पुस्तके येथे उपलब्ध आहेत."
            : "Explore our collection of authentic Marathi classics, contemporary novels, history, and English literature."}
        </p>
      </div>

      {/* Interactive Catalog Client */}
      <ShopClient initialBooks={books} />
    </div>
  );
}
