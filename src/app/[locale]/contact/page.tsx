import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { MapPin, MessageSquare } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "mr"
        ? "संपर्क करा | साहित्ययात्रा"
        : "Contact Us | SahityaYatra",
    description:
      locale === "mr"
        ? "साहित्ययात्रा ग्रंथदालनाशी संपर्क करा. ग्रंथ प्रदर्शने व पुस्तकांविषयी विचारणा."
        : "Get in touch with SahityaYatra bookstore for catalog inquiries and exhibition updates.",
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="container-site py-8 sm:py-16 max-w-4xl space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <Badge variant="saffron" size="sm">
          <MessageSquare className="w-3.5 h-3.5 mr-1" />
          {locale === "mr" ? "संवाद" : "Get In Touch"}
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#2E2620]">
          {locale === "mr" ? "आमच्याशी संपर्क करा" : "Contact SahityaYatra"}
        </h1>
        <p className="text-xs sm:text-sm text-[#5C4E42]">
          {locale === "mr"
            ? "पुस्तकांविषयी विचारणा, ग्रंथ प्रदर्शनांचे वेळापत्रक किंवा शंकांसाठी संदेश पाठवा."
            : "Have a question about a title or want to inquire about upcoming exhibitions? Send us a message."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct details */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-[#DED0BC] space-y-4 shadow-2xs">
            <h2 className="text-lg font-bold text-[#2E2620]">
              {locale === "mr" ? "थेट संपर्क" : "Direct Channels"}
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-[#5C4E42]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E8850A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2E2620]">
                    {locale === "mr" ? "कार्यक्षेत्र" : "Service Region"}
                  </p>
                  <p className="text-xs text-[#8C7B6E]">
                    {locale === "mr"
                      ? "महाराष्ट्र व संपूर्ण भारत (घरपोच सेवा)"
                      : "Maharashtra & All-India Delivery"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-[#E8850A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2E2620]">Facebook</p>
                  <a
                    href="https://www.facebook.com/SahityaYatraShop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#E8850A] hover:underline"
                  >
                    /SahityaYatraShop ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0E8D8] border border-[#DED0BC] space-y-2 text-xs text-[#5C4E42]">
            <p className="font-bold text-[#2E2620]">
              {locale === "mr" ? "ग्रंथ प्रदर्शने" : "Offline Exhibitions"}
            </p>
            <p>
              {locale === "mr"
                ? "आमच्या आगामी ग्रंथ प्रदर्शनांचे वेळापत्रक व ठिकाणांची माहिती मिळवण्यासाठी आमच्या फेसबुक पेजला भेट द्या."
                : "To know the venues and dates of our upcoming book exhibitions, follow our official Facebook page."}
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
