import { shopifyFetch, isShopifyConfigured } from "./client";
import {
  ShopifyProduct,
  ShopifyCollection,
  ShopifyCart,
  normalizeShopifyProduct,
} from "./types";
import { Book } from "@/types";
import { getAllBooks } from "@/lib/sampleBooks";

// ── GraphQL Fragments ────────────────────────────────────────────────────────

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    availableForSale
    vendor
    tags
    featuredImage {
      url
      altText
      width
      height
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 1) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          quantityAvailable
        }
      }
    }
    authorMetafield: metafield(namespace: "custom", key: "author") {
      value
    }
    languageMetafield: metafield(namespace: "custom", key: "language") {
      value
    }
    isbnMetafield: metafield(namespace: "custom", key: "isbn") {
      value
    }
    publisherMetafield: metafield(namespace: "custom", key: "publisher") {
      value
    }
    pageCountMetafield: metafield(namespace: "custom", key: "page_count") {
      value
    }
    formatMetafield: metafield(namespace: "custom", key: "format") {
      value
    }
  }
`;

// ── Queries ──────────────────────────────────────────────────────────────────

/**
 * Fetches all books. Gracefully falls back to curated sampleBooks if
 * Shopify has 0 products or is not configured yet.
 */
export async function getBooks(options?: {
  first?: number;
  query?: string;
  sortKey?: string;
  reverse?: boolean;
}): Promise<Book[]> {
  if (!isShopifyConfigured()) {
    return getAllBooks();
  }

  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProducts($first: Int, $query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
      products(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {
        edges {
          node {
            ...ProductFields
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<{
    products: {
      edges: Array<{ node: ShopifyProduct }>;
    };
  }>({
    query,
    variables: {
      first: options?.first || 50,
      query: options?.query,
      sortKey: options?.sortKey || "BEST_SELLING",
      reverse: options?.reverse || false,
    },
    tags: ["products"],
  });

  const shopifyProducts = response.body.data?.products?.edges || [];

  // Graceful fallback: If store has 0 products uploaded, return sample books
  if (shopifyProducts.length === 0) {
    return getAllBooks();
  }

  return shopifyProducts.map(({ node }) => normalizeShopifyProduct(node));
}

/**
 * Fetches a single book by handle.
 */
export async function getBookByHandle(handle: string): Promise<Book | undefined> {
  if (!isShopifyConfigured()) {
    return getAllBooks().find((b) => b.handle === handle);
  }

  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProductByHandle($handle: String!) {
      product(handle: $handle) {
        ...ProductFields
      }
    }
  `;

  const response = await shopifyFetch<{
    product: ShopifyProduct | null;
  }>({
    query,
    variables: { handle },
    tags: [`product-${handle}`],
  });

  const product = response.body.data?.product;

  if (!product) {
    // Fall back to sampleBooks if handle not found on Shopify
    return getAllBooks().find((b) => b.handle === handle);
  }

  return normalizeShopifyProduct(product);
}

/**
 * Fetches collections from Shopify.
 */
export async function getShopifyCollections(): Promise<ShopifyCollection[]> {
  if (!isShopifyConfigured()) {
    return [];
  }

  const query = `
    query GetCollections {
      collections(first: 20) {
        edges {
          node {
            id
            handle
            title
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<{
    collections: {
      edges: Array<{ node: ShopifyCollection }>;
    };
  }>({
    query,
    tags: ["collections"],
  });

  return (response.body.data?.collections?.edges || []).map(({ node }) => node);
}

// ── Cart Operations (Storefront API) ─────────────────────────────────────────

export async function createShopifyCart(): Promise<ShopifyCart | null> {
  if (!isShopifyConfigured()) return null;

  const mutation = `
    mutation CreateCart {
      cartCreate {
        cart {
          id
          checkoutUrl
          totalQuantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;

  const res = await shopifyFetch<{
    cartCreate: { cart: ShopifyCart };
  }>({
    query: mutation,
    cache: "no-store",
  });

  return res.body.data?.cartCreate?.cart || null;
}

export async function addToShopifyCart(
  cartId: string,
  lines: Array<{ merchandiseId: string; quantity: number }>
): Promise<ShopifyCart | null> {
  if (!isShopifyConfigured()) return null;

  const mutation = `
    mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          totalQuantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;

  const res = await shopifyFetch<{
    cartLinesAdd: { cart: ShopifyCart };
  }>({
    query: mutation,
    variables: { cartId, lines },
    cache: "no-store",
  });

  return res.body.data?.cartLinesAdd?.cart || null;
}
