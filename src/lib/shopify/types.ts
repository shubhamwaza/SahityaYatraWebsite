import { Book } from "@/types";

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface MoneyV2 {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: MoneyV2;
  compareAtPrice: MoneyV2 | null;
  quantityAvailable?: number | null;
}

export interface ShopifyMetafield {
  namespace: string;
  key: string;
  value: string;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  availableForSale: boolean;
  vendor?: string;
  tags: string[];
  featuredImage: ShopifyImage | null;
  images: {
    edges: Array<{ node: ShopifyImage }>;
  };
  priceRange: {
    minVariantPrice: MoneyV2;
    maxVariantPrice: MoneyV2;
  };
  compareAtPriceRange: {
    minVariantPrice: MoneyV2;
    maxVariantPrice: MoneyV2;
  };
  variants: {
    edges: Array<{ node: ShopifyProductVariant }>;
  };
  authorMetafield?: { value: string } | null;
  languageMetafield?: { value: string } | null;
  isbnMetafield?: { value: string } | null;
  publisherMetafield?: { value: string } | null;
  pageCountMetafield?: { value: string } | null;
  formatMetafield?: { value: string } | null;
}

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ShopifyImage | null;
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;
  cost: {
    totalAmount: MoneyV2;
  };
  merchandise: {
    id: string;
    title: string;
    product: {
      id: string;
      handle: string;
      title: string;
      featuredImage: ShopifyImage | null;
    };
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: MoneyV2;
    subtotalAmount: MoneyV2;
  };
  lines: {
    edges: Array<{ node: ShopifyCartLine }>;
  };
}

/**
 * Normalizes a raw Shopify GraphQL Product into SahityaYatra's Book type.
 */
export function normalizeShopifyProduct(product: ShopifyProduct): Book {
  // Extract author
  const authorTag = product.tags.find((t) => t.toLowerCase().startsWith("author:"));
  const author =
    product.authorMetafield?.value ||
    (authorTag ? authorTag.split(":")[1]?.trim() : product.vendor) ||
    "SahityaYatra Curation";

  // Detect language (Devanagari unicode range \u0900-\u097F or tag/metafield)
  const isDevanagari = /[\u0900-\u097F]/.test(product.title);
  const langTag = product.tags.find((t) =>
    ["marathi", "english"].includes(t.toLowerCase())
  );
  const language = (
    product.languageMetafield?.value?.toLowerCase() === "english" ||
    langTag?.toLowerCase() === "english"
      ? "english"
      : isDevanagari || langTag?.toLowerCase() === "marathi"
      ? "marathi"
      : "marathi"
  ) as "marathi" | "english";

  // Pricing
  const price = Math.round(parseFloat(product.priceRange.minVariantPrice.amount));
  const rawCompareAt = product.compareAtPriceRange?.minVariantPrice?.amount;
  const compareAtPrice = rawCompareAt
    ? Math.round(parseFloat(rawCompareAt))
    : undefined;

  // Categories derived from tags
  const standardCategories = [
    "marathi-books",
    "english-books",
    "poetry",
    "biography",
    "history",
    "fiction",
    "children",
    "classics",
  ];
  const categories: string[] = [language === "marathi" ? "marathi-books" : "english-books"];
  for (const tag of product.tags) {
    const slug = tag.toLowerCase().replace(/\s+/g, "-");
    if (standardCategories.includes(slug) && !categories.includes(slug)) {
      categories.push(slug);
    }
  }

  // ISBN & specs
  const isbnTag = product.tags.find((t) => t.toLowerCase().startsWith("isbn:"));
  const isbn =
    product.isbnMetafield?.value ||
    (isbnTag ? isbnTag.split(":")[1]?.trim() : undefined);

  const publisher = product.publisherMetafield?.value || product.vendor;
  const pageCount = product.pageCountMetafield?.value
    ? parseInt(product.pageCountMetafield.value, 10)
    : undefined;
  const format = product.formatMetafield?.value || "Paperback";

  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    author,
    language,
    price,
    compareAtPrice: compareAtPrice && compareAtPrice > price ? compareAtPrice : undefined,
    coverImage: product.featuredImage?.url || "/images/books/batatyachi-chawl.jpg",
    coverImageAlt: product.featuredImage?.altText || product.title,
    description: product.description,
    publisher,
    isbn,
    pageCount,
    format,
    categories,
    availableForSale: product.availableForSale,
    quantityAvailable: product.variants.edges[0]?.node.quantityAvailable ?? undefined,
  };
}
