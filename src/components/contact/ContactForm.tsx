"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-[#2E7D32]/30 space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#2E2620]">
          {t("success")}
        </h3>
        <p className="text-xs sm:text-sm text-[#5C4E42]">
          {locale === "mr"
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
            locale === "mr"
              ? "आपली विचारणा किंवा पुस्तकांची माहिती येथे लिहा..."
              : "Tell us about the books you're looking for or your query..."
          }
          className="w-full px-3.5 py-2.5 bg-[#F8F4EC] border border-[#DED0BC] rounded-lg text-sm text-[#2E2620] focus:outline-none focus:ring-2 focus:ring-[#E8850A]"
        />
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
          ? "आपली माहिती पूर्णपणे सुरक्षित ठेवली जाईल."
          : "Your contact details are respected and will never be shared."}
      </p>
    </form>
  );
}
