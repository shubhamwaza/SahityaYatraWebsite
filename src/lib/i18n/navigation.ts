import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware Link, useRouter, usePathname, redirect
// Use these instead of Next.js built-ins so locale is preserved automatically
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
