import { redirect } from "next/navigation";

// Root page — redirect / to /en (default locale)
// The middleware handles locale detection from Accept-Language headers
// but this ensures a clean fallback for the root path
export default function RootPage() {
  redirect("/en");
}
