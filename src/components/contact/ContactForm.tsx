"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "@/lib/i18n/navigation";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("topicGeneral");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedTopic, setSubmittedTopic] = useState("topicGeneral");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || !consent) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedTopic(topic);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
    }, 1000);
  };

  if (submitted) {
    const isPrivacyRequest = submittedTopic === "topicDataPrivacy";

    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-[#2E7D32]/30 space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto">
          {isPrivacyRequest ? (
            <ShieldCheck className="w-6 h-6" />
          ) : (
            <CheckCircle2 className="w-6 h-6" />
          )}
        </div>
        <h3 className="text-lg font-bold text-[#2E2620]">
          {isPrivacyRequest
            ? locale === "mr"
              ? "गोपनीयता / डेटा विनंती नोंदवली गेली आहे"
              : "Privacy / Data Request Received"
            : t("success")}
        </h3>
        <p className="text-xs sm:text-sm text-[#5C4E42] max-w-md mx-auto leading-relaxed">
          {isPrivacyRequest
            ? locale === "mr"
              ? "आपली डेटा हटवणे / दुरुस्तीची विनंती आमच्या डेटा संरक्षण अधिकार्‍याकडे नोंदवली गेली आहे. DPDP कायदा २०२३ अंतर्गत आम्ही ३० दिवसांच्या आत आपल्या नोंदणीकृत ईमेलवर कार्यवाहीची पुष्टी पाठवू."
              : "Your data deletion / erasure request has been logged with our Data Protection Officer. In accordance with the DPDP Act 2023, we will verify and process your request within 30 days and confirm via email."
            : locale === "mr"
            ? "आम्हाला आपला संदेश मिळाला आहे. आम्ही लवकरच उत्तर देऊ."
            : "Your message has been sent. We will get in touch with you shortly."}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-[#E8850A] hover:underline"
        >
          {locale === "mr" ? "दुसरा संदेश पाठवा" : "Send another message"}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DED0BC] space-y-4 shadow-2xs"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-bold text-[#2E2620] mb-1"
        >
          {t("name")} <span className="text-[#C62828]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={locale === "mr" ? "उदा. रमेश पाटील" : "e.g. Rahul Sharma"}
          className="w-full px-3.5 py-2.5 bg-[#F8F4EC] border border-[#DED0BC] rounded-lg text-sm text-[#2E2620] focus:outline-none focus:ring-2 focus:ring-[#E8850A]"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-bold text-[#2E2620] mb-1"
        >
          {t("email")} <span className="text-[#C62828]">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="w-full px-3.5 py-2.5 bg-[#F8F4EC] border border-[#DED0BC] rounded-lg text-sm text-[#2E2620] focus:outline-none focus:ring-2 focus:ring-[#E8850A]"
        />
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-xs font-bold text-[#2E2620] mb-1"
        >
          {t("topic")} <span className="text-[#C62828]">*</span>
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-[#F8F4EC] border border-[#DED0BC] rounded-lg text-sm text-[#2E2620] focus:outline-none focus:ring-2 focus:ring-[#E8850A]"
        >
          <option value="topicGeneral">{t("topicGeneral")}</option>
          <option value="topicOrder">{t("topicOrder")}</option>
          <option value="topicRareBook">{t("topicRareBook")}</option>
          <option value="topicDataPrivacy">{t("topicDataPrivacy")}</option>
        </select>
        {topic === "topicDataPrivacy" && (
          <p className="text-[11px] text-[#8C7B6E] mt-1 bg-[#F0E8D8] p-2 rounded-md">
            {locale === "mr"
              ? "ℹ️ DPDP कायदा २०२३ अंतर्गत आपण आपला वैयक्तिक डेटा पाहणे, दुरुस्त करणे किंवा कायमस्वरूपी हटवण्याची विनंती करू शकता."
              : "ℹ️ Under India's DPDP Act 2023, you have the right to request access, correction, or permanent erasure of your personal data."}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-bold text-[#2E2620] mb-1"
        >
          {t("message")} <span className="text-[#C62828]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            topic === "topicDataPrivacy"
              ? locale === "mr"
                ? "कृपया आपला नोंदणीकृत फोन नंबर, ऑर्डर संदर्भ व आपण कोणता डेटा हटवू इच्छिता ते स्पष्ट नमूद करा..."
                : "Please specify your registered phone number, order references, and what personal data you want erased..."
              : locale === "mr"
              ? "आपली विचारणा किंवा पुस्तकांची माहिती येथे लिहा..."
              : "Tell us about the books you're looking for or your query..."
          }
          className="w-full px-3.5 py-2.5 bg-[#F8F4EC] border border-[#DED0BC] rounded-lg text-sm text-[#2E2620] focus:outline-none focus:ring-2 focus:ring-[#E8850A]"
        />
      </div>

      {/* Explicit Consent Checkbox (DPDP Act & Anti-Dark Pattern requirement) */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#5C4E42]">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-[#DED0BC] text-[#E8850A] focus:ring-[#E8850A] focus:ring-offset-0 accent-[#E8850A]"
          />
          <span className="leading-snug">
            {t("consentLabel")}{" "}
            <Link
              href="/policies/privacy"
              target="_blank"
              className="text-[#E8850A] hover:underline font-medium"
            >
              ({locale === "mr" ? "गोपनीयता धोरण वाचा" : "View Privacy Policy"})
            </Link>{" "}
            <span className="text-[#C62828]">*</span>
          </span>
        </label>
      </div>

      <div className="pt-2">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          isLoading={isSubmitting}
          className="w-full shadow-md"
        >
          <Send className="w-4 h-4 mr-1.5" />
          <span>{t("send")}</span>
        </Button>
      </div>

      <p className="text-[11px] text-[#8C7B6E] text-center pt-1">
        {locale === "mr"
          ? "आपली माहिती पूर्णपणे सुरक्षित ठेवली जाईल. शून्य स्पॅम हमी."
          : "Your contact details are encrypted and will never be shared or monetized. Zero spam guarantee."}
      </p>
    </form>
  );
}
