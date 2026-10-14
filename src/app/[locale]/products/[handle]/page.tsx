import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBookByHandle, getBooks } from "@/lib/shopify/queries";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { getAllBooks } from "@/lib/sampleBooks";

type Props = {
  params: Promise<{ locale: string; handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const book = await getBookByHandle(handle);

  if (!book) {
    return {
      title: "Book Not Found | SahityaYatra",
    };
  }

  return {
    title: `${book.title} — ${book.author} | SahityaYatra`,
    description:
      book.description ??
      `Discover ${book.title} by ${book.author} at SahityaYatra Bookstore.`,
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: book.description,
      images: [book.coverImage],
    },
  };
}

export function generateStaticParams() {
  const books = getAllBooks();
  return books.flatMap((book) => [
    { locale: "en", handle: book.handle },
    { locale: "mr", handle: book.handle },
  ]);
}

export default async function ProductDetailPage({ params }: Props) {
  const { handle } = await params;
  const book = await getBookByHandle(handle);

  if (!book) {
    notFound();
  }

  // Get up to 4 related books from the same category or language
  const allBooks = await getBooks();
  const relatedBooks = allBooks
    .filter((b) => b.id !== book.id && (b.language === book.language || b.categories.some(c => book.categories.includes(c))))
    .slice(0, 4);

  return (
    <div className="container-site py-8 sm:py-12">
      <ProductDetailClient book={book} relatedBooks={relatedBooks} />
    </div>
  );
}
