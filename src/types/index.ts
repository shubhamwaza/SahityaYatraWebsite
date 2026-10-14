import type en from "../messages/en.json";

export type Locale = "en" | "mr";

// next-intl type-safe messages
export type Messages = typeof en;

// Prototype book type — will be replaced by Shopify product type after integration
export interface Book {
  id: string;
  handle: string;
  title: string;
  author: string;
  language: "marathi" | "english";
  price: number;
  compareAtPrice?: number;
  coverImage: string;
  coverImageAlt: string;
  description?: string;
  publisher?: string;
  isbn?: string;
  pageCount?: number;
  format?: string;
  edition?: string;
  categories: string[];
  availableForSale: boolean;
  quantityAvailable?: number;
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description?: string;
  image?: string;
  books: Book[];
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
