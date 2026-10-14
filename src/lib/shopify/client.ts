const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || "2025-01";

export function isShopifyConfigured(): boolean {
  return Boolean(
    domain &&
    storefrontAccessToken &&
    !domain.includes("your-store") &&
    !storefrontAccessToken.includes("your_storefront")
  );
}

export async function shopifyFetch<T>({
  query,
  variables,
  cache = process.env.NODE_ENV === "development" ? "no-store" : "default",
  tags,
  revalidate = 60,
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
  revalidate?: number;
}): Promise<{ status: number; body: { data?: T; errors?: Array<{ message: string }> } }> {
  if (!isShopifyConfigured()) {
    return {
      status: 200,
      body: { data: undefined },
    };
  }

  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken as string,
      },
      body: JSON.stringify({
        query,
        ...(variables && { variables }),
      }),
      cache,
      next: {
        revalidate: process.env.NODE_ENV === "development" ? 0 : revalidate,
        ...(tags && { tags }),
      },
    });

    const body = await response.json();

    if (body.errors) {
      console.warn("Shopify GraphQL errors:", body.errors);
    }

    return {
      status: response.status,
      body,
    };
  } catch (error) {
    console.error("Shopify Storefront fetch failed:", error);
    return {
      status: 500,
      body: {
        errors: [{ message: error instanceof Error ? error.message : "Shopify fetch error" }],
      },
    };
  }
}
