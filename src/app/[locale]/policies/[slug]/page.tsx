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
    title: { mr: "गोपनीयता धोरण (Privacy Policy)", en: "Privacy Policy" },
    lastUpdated: "27 October 2026",
    sections: [
      {
        heading: {
          mr: "१. डेटा फिड्युशियरी व कायदेशीर अधिष्ठान (Data Fiduciary)",
          en: "1. Data Fiduciary & Legal Standing (DPDP Act 2023)",
        },
        body: {
          mr: "साहित्ययात्रा (SahityaYatra Books & Exhibitions) ही भारताच्या डिजिटल वैयक्तिक डेटा संरक्षण कायदा, २०२३ (DPDP Act, 2023) आणि माहिती तंत्रज्ञान कायदा, २००० (कलम ४३A व SPDI नियम २०११) अंतर्गत डेटा फिड्युशियरी (Data Fiduciary) म्हणून कार्य करते. आमचे मुख्य कार्यालय सदाशिव पेठ, पुणे, महाराष्ट्र ४११०३० येथे स्थित आहे. आम्ही वाचकांच्या वैयक्तिक गोपनीयतेचे व डेटा सुरक्षिततेचे संपूर्ण संरक्षण करण्यास वचनबद्ध आहोत.",
          en: "SahityaYatra Books & Exhibitions acts as a Data Fiduciary under India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000 (Section 43A and SPDI Rules 2011). Our registered office is located at Sadashiv Peth, Pune, Maharashtra 411030, India. We are dedicated to maintaining strict confidentiality, data security, and consumer privacy.",
        },
      },
      {
        heading: {
          mr: "२. किमान डेटा संकलन धोरण (Data Minimization)",
          en: "2. Data Minimization & Categories of Data Collected",
        },
        body: {
          mr: "आमच्या 'डेटा मिनिमायझेशन' तत्त्वानुसार, आम्ही केवळ पुस्तकांची घरपोच डिलिव्हरी, कर पावत्या आणि ग्राहक संपर्क पूर्ण करण्यासाठी आवश्यक असणारीच माहिती गोळा करतो: (अ) पूर्ण नाव, (ब) पिनकोडसह अचूक वितरण पत्ता, (क) मोबाइल क्रमांक (केवळ कुरिअर डिलिव्हरी व एसएमएस ट्रॅकिंगसाठी), आणि (ड) ईमेल पत्ता (ऑर्डर पावती व ट्रॅकिंगसाठी). आम्ही कोणतीही बायोमेट्रिक, संवेदनशील वैयक्तिक किंवा अनावश्यक पार्श्वभूमी माहिती गोळा करत नाही.",
          en: "Under our strict Data Minimization principle, we collect only the minimum personal data strictly necessary to fulfill your book purchases, provide legal tax invoices, and arrange courier delivery: (a) Full Name, (b) Accurate postal Delivery Address with PIN code, (c) Mobile Phone Number (strictly for courier delivery dispatch and SMS tracking), and (d) Email Address (for order receipts and dispatch updates). We do not collect biometric, sensitive personal, or unnecessary background data.",
        },
      },
      {
        heading: {
          mr: "३. पेमेंट सुरक्षितता व कार्ड डिटेल्स न साठवणे (Payment Security)",
          en: "3. Payment Security & Zero Raw Card Data Storage",
        },
        body: {
          mr: "साहित्ययात्रा आपल्या सर्व्हरवर कोणत्याही ग्राहकाचे क्रेडिट कार्ड, डेबिट कार्ड क्रमांक, सीव्हीव्ही (CVV) किंवा नेट बँकिंग पासवर्ड साठवत नाही. सर्व आर्थिक व्यवहार थेट प्रमाणित PCI-DSS लेव्हल १ कम्प्लायंट पेमेंट गेटवे (Shopify Payments / Razorpay / UPI) द्वारे TLS 1.3 एन्क्रिप्शनने सुरक्षितपणे पूर्ण केले जातात.",
          en: "SahityaYatra does NOT store, process, or retain any customer credit/debit card numbers, CVVs, or Net Banking passwords on its servers. All payments are processed directly via certified, PCI-DSS Level 1 compliant payment gateways (Shopify Payments / Razorpay / UPI) utilizing industry-standard TLS 1.3 cryptographic encryption.",
        },
      },
      {
        heading: {
          mr: "४. शून्य डेटा विक्री व अधिकृत पुरवठादार (Third-Party Processors)",
          en: "4. Zero Data Monetization & Authorized Logistics Processors",
        },
        body: {
          mr: "आम्ही ग्राहकांचा वैयक्तिक डेटा कोणत्याही जाहिरातदार, डेटा ब्रोकर किंवा त्रयस्थ मार्केटिंग एजन्सीला विकत नाही, भाड्याने देत नाही किंवा मोनेटाईज करत नाही. पार्सल पोहोचवण्यासाठी माहिती केवळ अधिकृत लॉजिस्टिक्स संस्थांशी (उदा. इंडिया पोस्ट, शिपरॉकेट, नोंदणीकृत कुरिअर) आणि ई-कॉमर्स इन्फ्रास्ट्रक्चर पुरवठादार (Shopify Inc.) यांच्याशीच करारातील गोपनीयतेनुसार सामायिक केली जाते.",
          en: "We strictly DO NOT sell, rent, monetize, or trade your personal information with data brokers, marketing agencies, or advertisers. Delivery information is shared solely with designated logistics partners (India Post, Shiprocket, trusted registered couriers) and our commerce infrastructure host (Shopify Inc.) under strict confidentiality agreements to execute physical parcel dispatch.",
        },
      },
      {
        heading: {
          mr: "५. बालसाहित्य व अल्पवयीन मुलांची गोपनीयता (Children's Privacy - DPDP Sec 9)",
          en: "5. Children's Data & Parental Consent (DPDP Act Sec 9)",
        },
        body: {
          mr: "DPDP कायदा, २०२३ च्या कलम ९ नुसार, साहित्ययात्रा १८ वर्षांखालील मुलांचा कोणताही वैयक्तिक डेटा पालकांच्या संमतीशिवाय जाणीवपूर्वक गोळा करत नाही. आम्ही समृद्ध बालसाहित्य व संस्कारकथा उपलब्ध करत असलो, तरी सर्व खरेदी व संपर्क पालकांद्वारे किंवा सज्ञान व्यक्तीद्वारेच केले जाणे बंधनकारक आहे. पालकांच्या सूचनेनुसार मुलांची कोणतीही माहिती तत्काळ कायमस्वरूपी हटवली जाईल.",
          en: "In accordance with Section 9 of the DPDP Act, 2023, SahityaYatra does not knowingly collect or process personal data of children under 18 years of age without verifiable parental or guardian consent. While we curate wholesome children's literature, all purchases and inquiries must be executed by parents, guardians, or adults. Any inadvertent minor data reported by a parent will be immediately and permanently erased.",
        },
      },
      {
        heading: {
          mr: "६. डेटा हटवण्याचा अधिकार व नागरिक हक्क (Data Deletion Rights)",
          en: "6. Right to Data Erasure & Data Subject Access (DPDP Act / GDPR)",
        },
        body: {
          mr: "DPDP कायदा २०२३ आणि जागतिक गोपनीयता मानकांनुसार वाचकांना संपूर्ण कायदेशीर हक्क आहेत: (१) साठवलेल्या डेटाचा सारांश मिळवणे, (२) माहितीत दुरुस्ती करणे, (३) डेटा कायमस्वरूपी हटवणे (डेटा डिलिशन), (४) संमती मागे घेणे, आणि (५) तक्रार नोंदवणे. आपण आमच्या संपर्क पृष्ठावरील 'डेटा हटवणे / गोपनीयता विनंती' हा पर्याय निवडून किंवा थेट grievance@sahityayatra.com वर ईमेल करून हा हक्क वापरू शकता. आम्ही ३० दिवसांच्या आत अशा विनंत्या पूर्ण करतो.",
          en: "Under the DPDP Act, 2023 and global data protection standards, users enjoy full statutory rights: (1) Right to access a summary of personal data held, (2) Right to correction of inaccurate data, (3) Right to complete, permanent data erasure / deletion, (4) Right to withdraw consent, and (5) Right to grievance redressal. You can submit a request directly via the 'Data Deletion / Privacy Request' topic on our Contact page or email grievance@sahityayatra.com. Verified requests are fulfilled within 30 days.",
        },
      },
      {
        heading: {
          mr: "७. वैधानिक तक्रार निवारण अधिकारी (Grievance Redressal Officer)",
          en: "7. Statutory Grievance Redressal Officer (IT Rules 2021)",
        },
        body: {
          mr: "माहिती तंत्रज्ञान (मध्यस्थ मार्गदर्शक तत्त्वे व डिजिटल मीडिया आचारसंहिता) नियम, २०२१ आणि DPDP कायदा २०२३ च्या कलम १२ नुसार आमचे नियुक्त तक्रार निवारण अधिकारी खालीलप्रमाणे आहेत:\n• नाव/पद: तक्रार निवारण अधिकारी (Grievance Officer)\n• संस्था: साहित्ययात्रा ग्रंथ व प्रदर्शने\n• पत्ता: सदाशिव पेठ, टिळक रोड, पुणे, महाराष्ट्र ४११०३०, भारत\n• ईमेल: grievance@sahityayatra.com\n• पोहोच: ४८ तासांच्या आत; औपचारिक निवारण: कमाल ३० दिवसांत.",
          en: "In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and Section 12 of the DPDP Act, 2023, our designated Grievance Officer is:\n• Officer: Grievance Redressal Officer\n• Organization: SahityaYatra Books & Exhibitions\n• Address: Sadashiv Peth, Tilak Road, Pune, Maharashtra 411030, India\n• Email: grievance@sahityayatra.com\n• Response time: Acknowledgment within 48 hours; resolution within 30 days.",
        },
      },
      {
        heading: {
          mr: "८. पारदर्शक ईमेल व अनसबस्क्राइब धोरण (Email & Unsubscribe Notice)",
          en: "8. Transparent Email Communications & Unsubscribe Policy",
        },
        body: {
          mr: "आम्ही वाचकांच्या इनबॉक्सचा आदर करतो. ऑर्डर पावती व ट्रॅकिंग हे केवळ आवश्यक व्यवहारापुरते मर्यादित असते. भविष्यातील कोणत्याही प्रदर्शन वार्तापत्रामध्ये खाली एक-क्लिक 'Unsubscribe' (सदस्यत्व रद्द करा) लिंक स्पष्ट दिलेली असते. तसेच आपण contact@sahityayatra.com वर 'Unsubscribe' लिहून ईमेल केल्यास ४८ तासांत सर्व प्रचारात्मक संदेश कायमचे बंद केले जातात.",
          en: "We respect your inbox. Transactional emails (invoices, dispatch tracking) are strictly separated from exhibition newsletters. Any promotional announcement sent by SahityaYatra contains a conspicuous, one-click Unsubscribe link at the bottom of the email. You may also opt out at any time by emailing contact@sahityayatra.com with the subject line 'Unsubscribe', processed within 48 hours.",
        },
      },
    ],
  },
  terms: {
    title: { mr: "अटी व शर्ती (Terms of Service)", en: "Terms of Service" },
    lastUpdated: "27 October 2026",
    sections: [
      {
        heading: {
          mr: "१. अटींची स्वीकृती व पात्रता (Acceptance & Eligibility)",
          en: "1. Acceptance of Terms & Eligibility",
        },
        body: {
          mr: "साहित्ययात्रा वेबसाइट वापरून किंवा ऑर्डर नोंदवून आपण या अटी व शर्तींना कायदेशीर मान्यता देता. खरेदीदार व्यक्ती किमान १८ वर्षांची असावी किंवा सज्ञान पालक/पालकांच्या देखरेखीखाली वेबसाइट वापरत असावी.",
          en: "By accessing, browsing, or purchasing from SahityaYatra, you agree to be bound by these Terms of Service. You affirm that you are at least 18 years old or are using the platform under the active supervision of a parent or legal guardian.",
        },
      },
      {
        heading: {
          mr: "२. अस्सल अधिकृत आवृत्ती व बौद्धिक संपदा (Intellectual Property)",
          en: "2. Authentic Publisher Editions & Intellectual Property",
        },
        body: {
          mr: "साहित्ययात्रा ही अधिकृत प्रकाशकांची अस्सल छापील पुस्तके विकणारी अधिकृत संस्था आहे. सर्व पुस्तकांची शीर्षके, मुखपृष्ठे, आतील मजकूर व ट्रेडमार्क हे संबंधित लेखक, अनुवादक आणि प्रकाशकांची बौद्धिक संपदा आहेत. साहित्ययात्राचे नाव, लोगो व डिझाइन हे भारतीय कायद्यानुसार संरक्षित आहेत.",
          en: "SahityaYatra acts as an authorized bookseller representing recognized publishers. All book titles, covers, literary contents, and author trademarks remain the intellectual property of their respective creators and publishing houses. The SahityaYatra name, logo, motifs, and editorial designs are protected under Indian trademark and copyright statutes.",
        },
      },
      {
        heading: {
          mr: "३. पारदर्शक किमती व छपाई त्रुटी संरक्षण (Pricing & Clerical Errors)",
          en: "3. Transparent Pricing & Protection Against Pricing Errors",
        },
        body: {
          mr: "ग्राहक संरक्षण (ई-कॉमर्स) नियम, २०२० नुसार सर्व किमती भारतीय रुपयांमध्ये (INR) असून सर्व करांसह आहेत. कोणत्याही छपाईदोष किंवा तांत्रिक त्रुटीमुळे पुस्तकाची किंमत चुकीची नमूद झाली असल्यास, पार्सल पाठवण्यापूर्वी ऑर्डर रद्द करून ग्राहकाचे १००% पैसे तात्काळ परत करण्याचा अधिकार साहित्ययात्रेकडे राखीव आहे.",
          en: "Under the Consumer Protection (E-Commerce) Rules, 2020, all prices are displayed in Indian Rupees (INR) and are fully inclusive of all applicable taxes. In the event of a typographical or clerical error in pricing, SahityaYatra reserves the right to cancel the order prior to parcel dispatch and issue an immediate 100% full refund.",
        },
      },
      {
        heading: {
          mr: "४. डार्क पॅटर्न बंदी हमी (Anti-Dark Patterns Guarantee)",
          en: "4. Prohibition of Dark Patterns & Consumer Protection",
        },
        body: {
          mr: "केंद्रीय ग्राहक संरक्षण प्राधिकरण (CCPA) च्या डार्क पॅटर्न प्रतिबंधक नियम, २०२३ नुसार साहित्ययात्रा खात्री देते की: वेबसाइटवर कोणतेही खोटे घाई निर्माण करणारे टाइमर, छुपे शुल्क, किंवा आपोआप टिक केलेले बॉक्सेस नाहीत. व्यवहार पूर्णपणे पारदर्शक आहेत.",
          en: "In accordance with the Guidelines for Prevention and Regulation of Dark Patterns, 2023 issued by the Central Consumer Protection Authority (CCPA), SahityaYatra guarantees: zero false scarcity countdowns, zero drip pricing, zero disguised fees, and zero pre-ticked opt-in checkboxes. All transactions are fully transparent.",
        },
      },
      {
        heading: {
          mr: "५. ऑर्डर स्वीकृती व रद्द करण्याचे नियम (Order Acceptance & Cancellation)",
          en: "5. Order Acceptance & Pre-Dispatch Cancellation",
        },
        body: {
          mr: "पार्सल रवाना होऊन ट्रॅकिंग क्रमांक जारी झाल्यावर विक्री करार पूर्ण होतो. पार्सल रवाना होण्यापूर्वी ग्राहक कोणतीही ऑर्डर विनामूल्य रद्द करू शकतात आणि भरलेली संपूर्ण रक्कम कोणतीही कपात न करता मूळ खात्यात त्वरित परत केली जाते.",
          en: "A sales contract is concluded once the parcel has been dispatched and tracking information generated. Customers retain the right to cancel any order prior to physical dispatch for an immediate, no-fee 100% refund by contacting customer support.",
        },
      },
      {
        heading: {
          mr: "६. जबाबदारीची मर्यादा (Limitation of Liability)",
          en: "6. Limitation of Liability & Force Majeure",
        },
        body: {
          mr: "कायद्यानुसार साहित्ययात्राची कमाल जबाबदारी ही ग्राहकाने संबंधित पुस्तकासाठी भरलेल्या प्रत्यक्ष किमतीपुरतीच मर्यादित राहील. नैसर्गिक आपत्ती, अतिवृष्टी किंवा कुरिअर संप यांसारख्या अनपेक्षित अडचणींमुळे झालेल्या विलंबास साहित्ययात्रा जबाबदार असणार नाही.",
          en: "To the maximum extent permitted by applicable Indian law, SahityaYatra's total liability for any claim shall not exceed the actual purchase price paid by the customer for the specific book in dispute. We are not liable for transit delays caused by natural calamities, weather disruptions, or courier operational strikes (Force Majeure).",
        },
      },
      {
        heading: {
          mr: "७. अधिकारक्षेत्र व न्यायालयीन वाद (Governing Law & Jurisdiction)",
          en: "7. Governing Law & Dispute Jurisdiction",
        },
        body: {
          mr: "या अटी व शर्तींचे नियमन भारताच्या कायद्यानुसार होईल. कोणत्याही कायदेशीर वादाच्या बाबतीत केवळ पुणे, महाराष्ट्र, भारत येथील सक्षम दिवाणी न्यायालयांनाच विशेष अधिकारक्षेत्र असेल.",
          en: "These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, arbitration, or proceeding shall be subject to the exclusive jurisdiction of the competent civil courts in Pune, Maharashtra, India.",
        },
      },
    ],
  },
  returns: {
    title: { mr: "परत व परतावा धोरण (Returns & Refunds)", en: "Returns & Refund Policy" },
    lastUpdated: "27 October 2026",
    sections: [
      {
        heading: {
          mr: "१. ७ दिवसांचे सुलभ परत व परतावा धोरण (7-Day Return Guarantee)",
          en: "1. 7-Day Return & Replacement Guarantee",
        },
        body: {
          mr: "आम्ही सर्व पुस्तके सुरक्षितपणे तपासून पाठवतो. तरीही पुस्तकातील पाने गहाळ असणे, छपाई दोष, चुकीचे पुस्तक किंवा प्रवासात पार्सल खराब झाले असल्यास, डिलिव्हरीनंतर ७ दिवसांच्या आत विनामूल्य बदलून दिले जाईल. कृपया डिलिव्हरीनंतर ४८ तासांत फोटोसह contact@sahityayatra.com वर संपर्क साधावा.",
          en: "We inspect every copy with care. If you receive a book with misprinted pages, binding defects, transit damage, or an incorrect title, you are covered by our 7-day return guarantee. Please notify us within 48 hours of delivery with clear photographs at contact@sahityayatra.com.",
        },
      },
      {
        heading: {
          mr: "२. विनामूल्य बदलून देणे अथवा १००% परतावा (Replacements & Full Refunds)",
          en: "2. Free Replacement or 100% Full Refund Choice",
        },
        body: {
          mr: "ग्राहकांच्या पसंतीनुसार साहित्ययात्रा कोणतेही अतिरिक्त शुल्क न आकारता नवीन अस्सल पुस्तक विनामूल्य पाठवेल किंवा मूळ पेमेंट खात्यात १००% पैसे परत करेल. आम्ही कोणतेही छुपे शुल्क किंवा रिस्टॉकिंग फी आकारत नाही.",
          en: "At the customer's choice, SahityaYatra will either dispatch a fresh, authentic replacement copy at zero additional cost (we bear all courier charges) or process a 100% full refund directly to the original payment source. We charge ZERO restocking fees and ZERO return processing penalties.",
        },
      },
      {
        heading: {
          mr: "३. परतावा जमा होण्याची मुदत (Refund Timelines - RBI Guidelines)",
          en: "3. Refund Settlement Timelines (RBI Mandated)",
        },
        body: {
          mr: "परतावा मंजूर झाल्यानंतर ५ ते ७ कार्यालयीन दिवसांत रिझर्व्ह बँक ऑफ इंडियाच्या (RBI) मार्गदर्शक तत्त्वांप्रमाणे मूळ बँक/UPI खात्यात पैसे जमा केले जातात.",
          en: "Once approved, refunds are credited back to your original payment method (UPI, Net Banking, Credit/Debit Card) within 5 to 7 business days, strictly conforming to Reserve Bank of India (RBI) turnaround benchmarks.",
        },
      },
      {
        heading: {
          mr: "४. पार्सल रवाना होण्यापूर्वी विनामूल्य रद्द (Pre-Dispatch Cancellations)",
          en: "4. Instant Cancellation Prior to Dispatch",
        },
        body: {
          mr: "पार्सल कुरिअरकडे सोपवण्यापूर्वी ग्राहक आपली ऑर्डर विनामूल्य रद्द करू शकतात. भरलेली संपूर्ण रक्कम कोणतीही कपात न करता त्वरित परत केली जाते.",
          en: "You may cancel any order before physical courier dispatch for an immediate, no-questions-asked 100% refund. Simply message our support team with your order reference.",
        },
      },
    ],
  },
  shipping: {
    title: { mr: "शिपिंग व वितरण धोरण (Shipping & Delivery)", en: "Shipping & Delivery Policy" },
    lastUpdated: "27 October 2026",
    sections: [
      {
        heading: {
          mr: "१. अखिल भारतीय पार्सल वितरण (All-India Delivery Coverage)",
          en: "1. Comprehensive All-India Delivery Coverage",
        },
        body: {
          mr: "साहित्ययात्रा संपूर्ण भारतातील १९,०००+ पिनकोड्सवर नोंदणीकृत कुरिअर व इंडिया पोस्टद्वारे घरपोच पुस्तके पोहोचवते. प्रत्येक पार्सल सुरक्षितपणे पोहोचेल याची आम्ही दक्षता घेतो.",
          en: "SahityaYatra ships books across 19,000+ PIN codes in all Indian states and Union Territories utilizing trusted registered courier aggregators and India Post Speed Post services.",
        },
      },
      {
        heading: {
          mr: "२. सुरक्षित वॉटरप्रूफ पॅकिंग (Archival Damage-Proof Packaging)",
          en: "2. Damage-Proof Archival Packaging",
        },
        body: {
          mr: "पुस्तकांना प्रवासात कोणतीही इजा, कोपऱ्यांची घडी किंवा ओल येऊ नये म्हणून आम्ही मल्टिलेअर बबल रॅप, वॉटरप्रूफ आवरण आणि कडक संरक्षणासह मजबूत पॅकिंग करतो.",
          en: "To prevent corner bumping, spine wear, or moisture damage during transit, books are packed in heavy-duty multi-layer bubble wrap and waterproof security envelopes.",
        },
      },
      {
        heading: {
          mr: "३. डिस्पॅच व डिलिव्हरी कालावधी (Dispatch & Transit Timelines)",
          en: "3. Dispatch Timelines & Doorstep Delivery Estimates",
        },
        body: {
          mr: "ऑर्डर प्राप्त झाल्यानंतर १ ते २ कार्यालयीन दिवसांत पुस्तक रवाना केले जाते. महाराष्ट्रातील प्रमुख शहरांमध्ये ३ ते ५ दिवस आणि उर्वरित भारतात ४ ते ७ दिवसांत पुस्तके पोहोचतात. डिस्पॅचनंतर एसएमएस व ईमेलवर थेट ट्रॅकिंग लिंक दिली जाते.",
          en: "Orders are prepared and dispatched within 1 to 2 business days. Estimated delivery takes 3–5 business days within Maharashtra and 4–7 business days across other Indian states. A tracking link is dispatched via SMS and email immediately upon carrier handover.",
        },
      },
      {
        heading: {
          mr: "४. मोफत डिलिव्हरी व पारदर्शक दर (Transparent Shipping & Free Delivery)",
          en: "4. Free Delivery Threshold & Transparent Shipping Fees",
        },
        body: {
          mr: "₹५०० किंवा त्याहून अधिक मूल्याच्या सर्व ऑर्डर्सवर भारतभर मोफत डिलिव्हरी दिली जाते. ₹५०० च्या आतील ऑर्डर्ससाठी नाममात्र कुरिअर शुल्क (₹४० ते ₹६०) चेकआउटच्या वेळी स्पष्ट दाखवले जाते. कोणतेही छुपे पॅकिंग किंवा अतिरिक्त शुल्क आकारले जात नाही.",
          en: "Free shipping is automatically applied on all orders of ₹500 or more across India. For orders under ₹500, a modest flat courier fee (₹40 to ₹60 depending on weight/distance) is calculated transparently before checkout. There are zero hidden handling charges.",
        },
      },
    ],
  },
  cookies: {
    title: { mr: "कुकी धोरण (Cookie Policy)", en: "Cookie Policy" },
    lastUpdated: "27 October 2026",
    sections: [
      {
        heading: {
          mr: "१. कुकीज म्हणजे काय व आमचे तत्त्व (What Are Cookies & Our Philosophy)",
          en: "1. What Are Cookies & Our Privacy-First Approach",
        },
        body: {
          mr: "कुकीज या आपल्या ब्राउझरमध्ये साठवल्या जाणाऱ्या छोट्या टेक्स्ट फाईल्स असतात, ज्या वेबसाइट सुरळीत चालण्यास मदत करतात. साहित्ययात्रा गोपनीयतेला सर्वोच्च प्राधान्य देते: आम्ही केवळ आपली शॉपिंग कार्ट आणि भाषा निवड (मराठी/इंग्रजी) लक्षात ठेवण्यासाठीच आवश्यक कुकीज वापरतो. आम्ही कोणत्याही आक्रमक त्रयस्थ ट्रॅकिंग कुकीज वापरत नाही.",
          en: "Cookies are small text files placed on your device to ensure smooth website operation. SahityaYatra strictly adheres to a privacy-first approach: we use cookies exclusively to support your reading experience, preserve your shopping cart, and remember your language choice (मराठी or English). We do not deploy invasive cross-site tracking cookies.",
        },
      },
      {
        heading: {
          mr: "२. आम्ही वापरत असलेल्या कुकीजचे प्रकार (Categories of Cookies Used)",
          en: "2. Categories of Cookies We Use",
        },
        body: {
          mr: "• अत्यंत आवश्यक कुकीज (Strictly Necessary): कार्टमध्ये पुस्तके जोडणे, सत्र सुरक्षा आणि चेकआउट टोकन यासाठी अनिवार्य. या बंद करता येत नाहीत.\n• प्राधान्य कुकीज (Preferences): आपली निवडलेली भाषा (मराठी किंवा इंग्रजी) आणि कुकी संमती निर्णय लक्षात ठेवणे.\n• कार्यक्षमता कुकीज (Diagnostics - Opt-in): वेबसाइटच्या लोडिंग वेगाचे निनावी तांत्रिक विश्लेषण करण्यासाठी (केवळ आपल्या संमतीने).",
          en: "• Strictly Necessary Cookies: Essential for maintaining your cart, session security, and checkout tokens (Shopify storefront token). These cannot be disabled.\n• Preference Cookies: Remember your language preference (Marathi or English) and your cookie consent decision.\n• Diagnostic / Performance Cookies (Opt-in only): Collect anonymized aggregate metrics to monitor page load speeds without identifying individual visitors.",
        },
      },
      {
        heading: {
          mr: "३. कुकी प्राधान्ये नियंत्रित करणे (Managing Your Cookie Preferences)",
          en: "3. Managing and Withdrawing Cookie Consent",
        },
        body: {
          mr: "कुकीजवर आपले पूर्ण नियंत्रण आहे. आपण आमच्या वेबसाइटच्या तळटीपामधील 'कुकी प्राधान्ये' (Cookie Preferences) वर क्लिक करून कधीही आपल्या पसंती बदलू शकता, किंवा ब्राउझर सेटिंग्जमधून कुकीज डिलीट करू शकता.",
          en: "You have complete control over your cookies. You can accept or decline non-essential cookies at any time via our Cookie Consent banner or by clicking 'Cookie Preferences' in our website footer. You can also block or clear cookies via your browser settings (Chrome, Safari, Firefox, Edge).",
        },
      },
      {
        heading: {
          mr: "४. त्रयस्थ तंत्रज्ञान व सुरक्षितता (Third-Party Services)",
          en: "4. Third-Party Technologies & Font Privacy",
        },
        body: {
          mr: "सुरक्षित पेमेंटसाठी शॉपिफायची अधिकृत प्रणाली वापरली जाते. वेबसाइटवरील फाँट्स (मुक्ता आणि आयबीएम प्लेक्स सॅन्स) स्थानिकरित्या ऑप्टिमाइझ केलेले असल्याने कोणताही वैयक्तिक डेटा बाहेरील सर्व्हरला जात नाही.",
          en: "Payment transactions are secured via Shopify's certified infrastructure. Web fonts (Mukta and IBM Plex Sans) are bundled through Next.js font optimization, eliminating external user IP tracking by third parties.",
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
