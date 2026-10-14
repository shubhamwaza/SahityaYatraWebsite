import React from "react";
import type { Metadata } from "next";
import { Link } from "@/lib/i18n/navigation";
import { BookCard } from "@/components/product/BookCard";
import { Badge } from "@/components/ui/Badge";
import {
  getBooksByCategory,
  getMarathiBooks,
  getEnglishBooks,
} from "@/lib/sampleBooks";
import { BookOpen, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const categoryNames: Record<string, { mr: string; en: string }> = {
  "marathi-books": { mr: "मराठी पुस्तके", en: "Marathi Books" },
  "english-books": { mr: "इंग्रजी पुस्तके", en: "English Books" },
  poetry: { mr: "कविता व काव्यसंग्रह", en: "Poetry & Verse" },
  biography: { mr: "आत्मचरित्र व जीवनचरित्र", en: "Biography & Memoirs" },
  history: { mr: "ऐतिहासिक साहित्य", en: "History & Heritage" },
  fiction: { mr: "कथा व कादंबरी", en: "Fiction & Novels" },
  children: { mr: "बालसाहित्य", en: "Children's Literature" },
  classics: { mr: "अभिजात अभिमान ग्रंथ", en: "Classics & Masterpieces" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const name =
    categoryNames[slug]?.[locale === "mr" ? "mr" : "en"] ?? slug;

  return {
    title: `${name} | साहित्ययात्रा`,
    description: `Explore curated ${name} at SahityaYatra Bookstore.`,
  };
}

export function generateStaticParams() {
  const slugs = Object.keys(categoryNames);
  return slugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "mr", slug },
  ]);
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug, locale } = await params;

  let books = [];
  if (slug === "marathi-books") {
    books = getMarathiBooks();
  } else if (slug === "english-books") {
    books = getEnglishBooks();
  } else {
    books = getBooksByCategory(slug);
  }

  const title =
    categoryNames[slug]?.[locale === "mr" ? "mr" : "en"] ??
    slug.replace("-", " ");

  return (
    <div className="container-site py-8 sm:py-12 space-y-8">
      {/* Breadcrumb & Header */}
      <div className="space-y-4 border-b border-[#DED0BC] pb-6">
        <nav aria-label="Breadcrumb" className="text-xs text-[#8C7B6E]">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#2E2620]">
                {locale === "mr" ? "मुख्यपृष्ठ" : "Home"}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/collections" className="hover:text-[#2E2620]">
                {locale === "mr" ? "संग्रह" : "Collections"}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-[#2E2620]">{title}</li>
          </ol>
        </nav>

        <div className="space-y-1">
          <Badge variant="saffron" size="sm">
            <BookOpen className="w-3.5 h-3.5 mr-1" />
            {books.length} {locale === "mr" ? "पुस्तके" : "titles"}
          </Badge>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#2E2620]">
            {title}
          </h1>
        </div>
      </div>

      {/* Books Grid */}
      {books.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-[#DED0BC] space-y-4 max-w-md mx-auto">
          <p className="text-base font-bold text-[#2E2620]">
            {locale === "mr"
              ? "या संग्रहात सध्या पुस्तके उपलब्ध नाहीत."
              : "No books currently found in this collection."}
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-[#E8850A] text-white rounded-full"
          >
            <span>{locale === "mr" ? "सर्व पुस्तके पाहा" : "Browse All Books"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
