import React from "react";
import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import {
  Layers,
  Flame,
  Globe,
  Feather,
  UserCheck,
  Compass,
  Smile,
  BookOpen,
  ArrowRight,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "mr"
        ? "संग्रह व श्रेणी | साहित्ययात्रा"
        : "Collections & Genres | SahityaYatra",
    description:
      locale === "mr"
        ? "साहित्ययात्रा दालनातील सर्व विषयांचे व साहित्यप्रकारांचे विशेष संग्रह."
        : "Browse curated collections and genres across Marathi & English literature.",
  };
}

export default function CollectionsPage() {
  const t = useTranslations("categories");
  const locale = useLocale();

  const collections = [
    {
      slug: "marathi-books",
      title: t("marathiBooks"),
      desc:
        locale === "mr"
          ? "अभिजात कादंबऱ्या, कथासंग्रह व नामवंत मराठी लेखकांची पुस्तके."
          : "Classic novels, stories, and acclaimed Marathi literary works.",
      icon: Flame,
      color: "bg-[#FFF3E0] border-[#F5A020]/40 text-[#C06B00]",
    },
    {
      slug: "english-books",
      title: t("englishBooks"),
      desc:
        locale === "mr"
          ? "भारतीय व जागतिक इंग्रजी साहित्य, कादंबऱ्या व निबंध."
          : "Indian English writing, international fiction, and celebrated memoirs.",
      icon: Globe,
      color: "bg-[#F0E8D8] border-[#DED0BC] text-[#5C4E42]",
    },
    {
      slug: "poetry",
      title: t("poetry"),
      desc:
        locale === "mr"
          ? "भावस्पर्शी कवितासंग्रह, गझल व काव्यरचना."
          : "Evocative poetry collections and lyrical verse.",
      icon: Feather,
      color: "bg-[#E8F5E9] border-[#43A047]/30 text-[#2E7D32]",
    },
    {
      slug: "biography",
      title: t("biography"),
      desc:
        locale === "mr"
          ? "महान विचारवंत, क्रांतिकारक व दिग्गजांचे जीवनपट."
          : "Inspiring biographies, memoirs, and autobiographical narratives.",
      icon: UserCheck,
      color: "bg-[#FFF8E1] border-[#FFB300]/30 text-[#B78103]",
    },
    {
      slug: "history",
      title: t("history"),
      desc:
        locale === "mr"
          ? "मराठ्यांचा इतिहास, स्वातंत्र्यलढा व ऐतिहासिक महागाथा."
          : "Historical sagas, historical documentation, and freedom struggles.",
      icon: Compass,
      color: "bg-[#EFEBE9] border-[#8D6E63]/30 text-[#5D4037]",
    },
    {
      slug: "fiction",
      title: t("fiction"),
      desc:
        locale === "mr"
          ? "लोकप्रिय कादंबऱ्या, सामाजिक कथा व रहस्यकथा."
          : "Popular novels, short stories, and social narratives.",
      icon: BookOpen,
      color: "bg-[#EDE7F6] border-[#7E57C2]/30 text-[#512DA8]",
    },
    {
      slug: "children",
      title: t("children"),
      desc:
        locale === "mr"
          ? "संस्कारक्षम व मनोरंजक बालकथा आणि सचित्र पुस्तके."
          : "Enriching tales, illustrated books, and children's literature.",
      icon: Smile,
      color: "bg-[#E0F7FA] border-[#00ACC1]/30 text-[#00838F]",
    },
    {
      slug: "classics",
      title: t("classics"),
      desc:
        locale === "mr"
          ? "पिढ्यानपिढ्या जतन केलेल्या अमर व मोलाच्या कलाकृती."
          : "Enduring literary masterworks that define Indian cultural heritage.",
      icon: Layers,
      color: "bg-[#FCE4EC] border-[#E91E63]/30 text-[#AD1457]",
    },
  ];

  return (
    <div className="container-site py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="space-y-2 border-b border-[#DED0BC] pb-6">
        <Badge variant="saffron" size="sm">
          <Layers className="w-3.5 h-3.5 mr-1" />
          {locale === "mr" ? "विशेष संग्रह" : "Curated Themes"}
        </Badge>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#2E2620]">
          {locale === "mr" ? "साहित्य संग्रह" : "Book Collections"}
        </h1>
        <p className="text-xs sm:text-sm text-[#5C4E42] max-w-2xl">
          {locale === "mr"
            ? "विविध विषयानुसार व साहित्य प्रकारानुसार निवडलेली पुस्तके सहज शोधा."
            : "Explore thematic collections curated for discerning readers across Marathi & English."}
        </p>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {collections.map((col) => {
          const Icon = col.icon;
          return (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="p-6 rounded-2xl bg-white border border-[#DED0BC] hover:border-[#E8850A] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${col.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-[#2E2620] group-hover:text-[#E8850A] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs text-[#5C4E42] leading-relaxed">
                  {col.desc}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#DED0BC]/40 flex items-center justify-between text-xs font-bold text-[#E8850A]">
                <span>{locale === "mr" ? "पुस्तके पाहा" : "View Books"}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
