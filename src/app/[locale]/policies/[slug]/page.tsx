import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/lib/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

interface PolicyContent {
  title: { mr: string; en: string };
  lastUpdated: string;
  sections: { heading: { mr: string; en: string }; body: { mr: string; en: string } }[];
}

const policiesData: Record<string, PolicyContent> = {
  privacy: {
    title: { mr: "गोपनीयता धोरण", en: "Privacy Policy" },
    lastUpdated: "14 October 2026",
    sections: [
      {
        heading: {
          mr: "माहिती संकलन व उद्देश",
          en: "Information Collection & Purpose",
        },
        body: {
          mr: "साहित्ययात्रा ग्राहकांची केवळ आवश्यक माहिती (नाव, संपर्क क्रमांक, वितरण पत्ता) पुस्तकांची वितरण सेवा व संपर्क पूर्ण करण्यासाठीच गोळा करते. आम्ही ग्राहकांची वैयक्तिक माहिती कोणत्याही त्रयस्थ संस्थेला विकत नाही.",
          en: "SahityaYatra collects only essential customer information (name, contact number, shipping address) strictly to fulfill orders and provide customer support. We do not sell personal data to any third party.",
        },
      },
      {
        heading: {
          mr: "डेटा सुरक्षा",
          en: "Data Security",
        },
        body: {
          mr: "सर्व ग्राहक माहिती सुरक्षित पद्धतीने साठवली जाते. पेमेंट व्यवहार सुरक्षित व अधिकृत पेमेंट गेटवेद्वारे केले जातात, आणि आम्ही कार्ड डिटेल्स साठवत नाही.",
          en: "All customer data is handled securely. Payment processing is managed via authorized, compliant payment gateways; we do not store raw payment card data.",
        },
      },
    ],
  },
  shipping: {
    title: { mr: "शिपिंग व वितरण धोरण", en: "Shipping & Delivery Policy" },
    lastUpdated: "14 October 2026",
    sections: [
      {
        heading: {
          mr: "वितरण क्षेत्र व पॅकिंग",
          en: "Delivery Coverage & Packaging",
        },
        body: {
          mr: "साहित्ययात्रा संपूर्ण भारतात नोंदणीकृत कुरिअर व पोस्टल सेवांद्वारे पुस्तके पोहोचवते. पुस्तकांना प्रवासात कोणतीही इजा पोहोचणार नाही अशा काळजीपूर्वक व सुरक्षित पॅकिंगमध्ये पुस्तके रवाना केली जातात.",
          en: "SahityaYatra ships orders across India using trusted courier and postal logistics aggregators. Books are packed with care to prevent edge damage or transit wear.",
        },
      },
      {
        heading: {
          mr: "वितरण कालावधी व ट्रॅकिंग",
          en: "Delivery Timelines & Tracking",
        },
        body: {
          mr: "ऑर्डर प्राप्त झाल्यानंतर १ ते २ कार्यालयीन दिवसांत पुस्तक रवाना केले जाते. ठिकाणानुसार साधारण ४ ते ७ दिवसांत घरपोच वितरण होते. डिस्पॅचनंतर ट्रॅकिंग तपशील पाठवला जातो.",
          en: "Orders are typically prepared and dispatched within 1–2 business days. Estimated delivery takes 4–7 business days depending on location. Tracking information is shared upon dispatch.",
        },
      },
    ],
  },
  returns: {
    title: { mr: "परत व परतावा धोरण", en: "Returns & Refund Policy" },
    lastUpdated: "14 October 2026",
    sections: [
      {
        heading: {
          mr: "दोषपूर्ण किंवा चुकीचे पुस्तक",
          en: "Damaged or Incorrect Items",
        },
        body: {
          mr: "जर आपल्याला मिळालेले पुस्तक छपाईदोष असलेले किंवा प्रवासात खराब झालेले असेल, तर डिलिव्हरीनंतर ४८ तासांत आमच्याशी संपर्क साधा. आम्ही विनामूल्य पुस्तक बदलून देऊ किंवा योग्य परतावा करू.",
          en: "If a received book has printing defects, binding errors, or transit damage, please notify us within 48 hours of delivery. We will promptly issue a replacement or processed refund.",
        },
      },
      {
        heading: {
          mr: "परतावा प्रक्रिया",
          en: "Refund Process",
        },
        body: {
          mr: "मान्य केलेल्या परताव्याची रक्कम मूळ पेमेंट पद्धतीद्वारे ५ ते ७ कार्यालयीन दिवसांत जमा केली जाते.",
          en: "Approved refunds are credited back to the original payment source within 5–7 business days upon inspection.",
        },
      },
    ],
  },
  terms: {
    title: { mr: "अटी व शर्ती", en: "Terms & Conditions" },
    lastUpdated: "14 October 2026",
    sections: [
      {
        heading: {
          mr: "उत्पादनांची सत्यता व उपलब्धता",
          en: "Product Authenticity & Availability",
        },
        body: {
          mr: "साहित्ययात्रा केवळ अधिकृत प्रकाशकांची अस्सल छापील पुस्तके विकते. ऑफलाइन प्रदर्शनांमुळे साठ्यात अचानक बदल झाल्यास ग्राहकांना तत्परतेने कळवून योग्य ती पावले उचलली जातात.",
          en: "SahityaYatra sells authentic printed copies directly from authorized publishers. While we maintain close inventory control, physical exhibition activities may occasionally alter live stock, in which case customers are notified immediately.",
        },
      },
      {
        heading: {
          mr: "किंमत व कायदेशीर अधिकारक्षेत्र",
          en: "Pricing & Jurisdiction",
        },
        body: {
          mr: "वेबसाइटवरील सर्व किमती भारतीय रुपयांमध्ये (INR) आहेत. सर्व विवाद महाराष्ट्र राज्य, भारताच्या अधिकारक्षेत्राखाली येतील.",
          en: "All prices on the website are in Indian Rupees (INR). All disputes are subject to the exclusive jurisdiction of courts in Maharashtra, India.",
        },
      },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const policy = policiesData[slug];
  if (!policy) return { title: "Policy | SahityaYatra" };

  const title = policy.title[locale === "mr" ? "mr" : "en"];
  return {
    title: `${title} | साहित्ययात्रा`,
    description: `Official ${title} of SahityaYatra Bookstore.`,
  };
}

export function generateStaticParams() {
  const slugs = Object.keys(policiesData);
  return slugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "mr", slug },
  ]);
}

export default async function PolicyPage({ params }: Props) {
  const { slug, locale } = await params;
  const policy = policiesData[slug];

  if (!policy) {
    notFound();
  }

  const title = policy.title[locale === "mr" ? "mr" : "en"];

  return (
    <div className="container-site py-8 sm:py-16 max-w-3xl space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C7B6E] hover:text-[#2E2620]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{locale === "mr" ? "मुख्यपृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-2 border-b border-[#DED0BC] pb-6">
        <Badge variant="saffron" size="sm">
          <ShieldCheck className="w-3.5 h-3.5 mr-1" />
          {locale === "mr" ? "अधिकृत धोरण" : "Official Policy"}
        </Badge>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#2E2620]">
          {title}
        </h1>
        <p className="text-xs text-[#8C7B6E]">
          {locale === "mr" ? "शेवटचे अपडेट" : "Last updated"}: {policy.lastUpdated}
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-6">
        {policy.sections.map((section, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-[#DED0BC] space-y-2 shadow-2xs"
          >
            <h2 className="text-base sm:text-lg font-bold text-[#2E2620]">
              {section.heading[locale === "mr" ? "mr" : "en"]}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4E42] leading-relaxed">
              {section.body[locale === "mr" ? "mr" : "en"]}
            </p>
          </div>
        ))}
      </div>

      {/* Support query note */}
      <div className="p-4 rounded-xl bg-[#F0E8D8] text-xs text-[#5C4E42] flex items-center justify-between">
        <span>
          {locale === "mr"
            ? "काही शंका असल्यास आमच्याशी संपर्क करा."
            : "Questions about this policy? Contact our support team."}
        </span>
        <Link
          href="/contact"
          className="font-bold text-[#E8850A] hover:underline"
        >
          {locale === "mr" ? "संपर्क पृष्ठ" : "Contact Us"} →
        </Link>
      </div>
    </div>
  );
}
