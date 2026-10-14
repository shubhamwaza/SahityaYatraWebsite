import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "mr"
        ? "आमच्याबद्दल | साहित्ययात्रा"
        : "About Us | SahityaYatra",
    description:
      locale === "mr"
        ? "साहित्ययात्रा ग्रंथदालनाची परंपरा, ग्रंथ प्रदर्शनांचा इतिहास आणि वाचन संस्कृती."
        : "Learn about SahityaYatra's roots in book exhibitions and our mission to curate fine literature.",
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="container-site py-8 sm:py-16 space-y-12 max-w-4xl">
      {/* Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <Badge variant="saffron" size="sm">
          <BookOpen className="w-3.5 h-3.5 mr-1" />
          {locale === "mr" ? "आमची ग्रंथगाथा" : "Our Story"}
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#2E2620]">
          {locale === "mr" ? "साहित्ययात्रा विषयी" : "About SahityaYatra"}
        </h1>
        <p className="text-sm sm:text-base text-[#5C4E42]">
          {locale === "mr"
            ? "ग्रंथ प्रदर्शनांच्या प्रत्यक्ष संवादातून वाचकांच्या घरात पुस्तकांचे दालन."
            : "From offline book exhibitions to reader homes across India."}
        </p>
      </div>

      {/* Narrative Card */}
      <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#DED0BC] space-y-6 text-[#5C4E42] text-sm sm:text-base leading-relaxed shadow-2xs">
        <h2 className="text-xl sm:text-2xl font-bold text-[#2E2620]">
          {locale === "mr"
            ? "प्रदर्शनांच्या परंपरेतून जन्मलेले डिजिटल दालन"
            : "A Heritage of Personal Curation"}
        </h2>

        <p>
          {locale === "mr"
            ? "साहित्ययात्रा ही केवळ पुस्तकांची विक्री करणारी वेबसाइट नाही, तर अनेक वर्षांपासून राज्यभरात आयोजित केलेल्या ग्रंथ प्रदर्शनांच्या अनुभवातून वाचकांच्या आवडीनिवडी, गरजा आणि अभिरुची समजून घेतलेली एक आपुलकीची संस्था आहे."
            : "SahityaYatra was founded on the belief that discovering the right book requires care and literary knowledge. Through years of offline exhibitions across Maharashtra, we met readers face-to-face, understanding what touches hearts and sparks curiosity."}
        </p>

        <p>
          {locale === "mr"
            ? "आमच्या प्रत्यक्ष कॅटलॉगमध्ये 5,000 ते 6,000 पुस्तकांचा खजिना आहे. या ऑनलाइन दालनाद्वारे, आम्ही सुरुवातीला अत्यंत निवडक आणि दर्जेदार पुस्तके घेऊन आलो आहोत, जेणेकरून वाचकांना चांगल्या पुस्तकांपर्यंत पोहोचणे अधिक सोपे व्हावे."
            : "While our full offline inventory encompasses over 5,000 titles, our online portal brings a carefully curated selection of Marathi classics, contemporary bestsellers, and accessible English literature to your fingertips."}
        </p>

        <div className="p-5 rounded-xl bg-[#F8F4EC] border-l-4 border-[#E8850A] space-y-2">
          <p className="font-bold text-[#2E2620] text-base">
            {locale === "mr" ? "आमचे मुख्य तत्त्व" : "Our Guiding Principle"}
          </p>
          <p className="italic text-xs sm:text-sm text-[#5C4E42]">
            {locale === "mr"
              ? "‘वाचकांना योग्य पुस्तक शोधण्यास मदत करणे, ते काय विकत घेत आहेत हे स्पष्टपणे समजणे, आणि संपूर्ण विश्वासाने खरेदी पूर्ण करणे.’"
              : "'Help readers find the right book, understand what they are buying, and complete their purchase with confidence.'"}
          </p>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white border border-[#DED0BC] space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#E8850A]/10 text-[#E8850A] flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#2E2620]">
            {locale === "mr" ? "निवडक वाचन" : "Curated Selection"}
          </h3>
          <p className="text-xs text-[#5C4E42] leading-relaxed">
            {locale === "mr"
              ? "केवळ पुस्तकांची संख्या वाढवणे नव्हे, तर खरोखर मोलाचे साहित्य वाचकांपर्यंत पोहोचवणे."
              : "Quality and resonance prioritized over pure catalogue size."}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white border border-[#DED0BC] space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#2E2620]">
            {locale === "mr" ? "विश्वसनीय माहिती" : "Accurate Metadata"}
          </h3>
          <p className="text-xs text-[#5C4E42] leading-relaxed">
            {locale === "mr"
              ? "प्रत्येक पुस्तकाचे मूळ नाव, लेखक, प्रकाशक आणि माहितीची सत्यता पडताळलेली."
              : "No fabricated claims, authentic publisher editions, and verified stock."}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white border border-[#DED0BC] space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#3F51B5]/10 text-[#3F51B5] flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#2E2620]">
            {locale === "mr" ? "वाचक नाते" : "Reader Community"}
          </h3>
          <p className="text-xs text-[#5C4E42] leading-relaxed">
            {locale === "mr"
              ? "प्रदर्शनांच्या प्रत्यक्ष नात्याप्रमाणे ऑनलाइन ग्राहकांशी प्रामाणिक संवाद."
              : "Direct, personal relationship with book lovers nurtured through exhibitions."}
          </p>
        </div>
      </div>

      {/* Community Link */}
      <div className="p-6 rounded-2xl bg-[#2E2620] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">
            {locale === "mr" ? "आमच्या फेसबुक पेजला भेट द्या" : "Join our Facebook Community"}
          </h3>
          <p className="text-xs text-[#DED0BC]">
            {locale === "mr"
              ? "नवीन पुस्तके, प्रदर्शने व कार्यक्रमांचे अपडेट्स मिळवा."
              : "Stay updated on upcoming exhibitions and new book arrivals."}
          </p>
        </div>

        <a
          href="https://www.facebook.com/SahityaYatraShop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="md">
            <span>Facebook: /SahityaYatraShop ↗</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
