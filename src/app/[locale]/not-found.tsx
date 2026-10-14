import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("errors");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "var(--color-paper)",
      }}
    >
      <p
        style={{
          fontSize: "5rem",
          fontWeight: 700,
          color: "var(--color-border)",
          lineHeight: 1,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "var(--text-h2)",
          color: "var(--color-ink)",
          fontWeight: 700,
        }}
      >
        {t("notFound")}
      </h1>
      <p style={{ color: "var(--color-ink-secondary)", maxWidth: "400px" }}>
        {t("notFoundMessage")}
      </p>
      <Link
        href="/"
        style={{
          marginTop: "1rem",
          padding: "0.625rem 1.5rem",
          background: "var(--color-saffron)",
          color: "var(--color-white)",
          borderRadius: "var(--radius-full)",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        {t("goHome")}
      </Link>
    </main>
  );
}
