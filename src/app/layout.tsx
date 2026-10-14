import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | SahityaYatra",
    default: "SahityaYatra — Marathi & English Books",
  },
  description:
    "Discover and purchase curated Marathi and English books. SahityaYatra brings literature to readers across India.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The [locale] layout sets the <html lang> attribute.
  // This root layout wraps everything.
  return children;
}
