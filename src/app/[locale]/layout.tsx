import type { Metadata } from "next";
import { Mukta, IBM_Plex_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import type { Locale } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import "@/app/globals.css";

// ── Fonts ──────────────────────────────────────────────────────────────────
// Mukta: Devanagari, used for Marathi content
const mukta = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mukta",
  display: "swap",
  preload: true,
});

// IBM Plex Sans: Latin, used for English content and UI
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  preload: true,
});

// ── Types ──────────────────────────────────────────────────────────────────
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// ── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    description: t("heroSubtitle"),
    alternates: {
      languages: {
        en: "/en",
        mr: "/mr",
      },
    },
    openGraph: {
      siteName: "SahityaYatra",
      locale: locale === "mr" ? "mr_IN" : "en_IN",
    },
  };
}

// Generate static params for both locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ── Layout ─────────────────────────────────────────────────────────────────
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${mukta.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F4EC] text-[#2E2620]">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <CartProvider>
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
