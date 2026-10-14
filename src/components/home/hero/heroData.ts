import type { HeroSlide } from "./heroTypes";

export const heroSlidesData: HeroSlide[] = [
  // 1. Template A: Exhibition Tour Ticket (ग्रंथ प्रदर्शन व दौरा)
  {
    type: "exhibition",
    id: "hero-exhibition-pune",
    navPill: {
      mr: "🏛️ पुणे भव्य ग्रंथप्रदर्शन",
      en: "🏛️ Pune Book Tour",
    },
    city: {
      mr: "पुणे दौरा २०२६",
      en: "Pune Tour 2026",
    },
    badgeText: {
      mr: "ग्रंथ प्रदर्शन परंपरा",
      en: "Exhibition Tradition",
    },
    liveStatus: {
      mr: "आगामी शनिवार - रविवार",
      en: "Upcoming This Weekend",
    },
    title: {
      mr: "पुणेकरांसाठी भव्य ग्रंथप्रदर्शन दालन!",
      en: "Grand Book Exhibition Arrives in Pune!",
    },
    subtitle: {
      mr: "साहित्ययात्रा घेऊन येत आहे ५,०००+ हून अधिक अजरामर पुस्तकांचा प्रत्यक्ष खजिना. ऐतिहासिक महाकादंबऱ्या, आत्मचरित्रे, नाटक आणि बालसाहित्याची समृद्ध पर्वणी.",
      en: "SahityaYatra brings over 5,000 timeless titles directly to Pune readers. Explore Maharashtra's finest historical epics, biographies, plays, and youth literature in person.",
    },
    venueName: {
      mr: "टिळक स्मारक मंदिर, टिळक रोड",
      en: "Tilak Smarak Mandir, Tilak Road",
    },
    venueAddress: {
      mr: "सदाशिव पेठ, पुणे, महाराष्ट्र ४११०३०",
      en: "Sadashiv Peth, Pune, Maharashtra 411030",
    },
    dates: {
      mr: "२२ ते २४ ऑक्टोबर २०२६",
      en: "22 to 24 October 2026",
    },
    days: {
      mr: "शुक्रवार ते रविवार",
      en: "Friday to Sunday",
    },
    timings: {
      mr: "सकाळी १०:०० ते रात्री ९:००",
      en: "10:00 AM to 9:00 PM",
    },
    highlights: {
      mr: [
        "५,०००+ छापील ग्रंथ",
        "विनामूल्य प्रवेश",
        "विशेष सवलत दालन",
        "अस्सल अधिकृत आवृत्ती",
      ],
      en: [
        "5,000+ Print Titles",
        "Free Admission",
        "Exclusive Stall Offers",
        "100% Authentic Editions",
      ],
    },
    googleMapsUrl: "https://maps.google.com/?q=Tilak+Smarak+Mandir+Pune",
    ctaPrimary: {
      label: {
        mr: "स्थळ व दिशा (Google Maps)",
        en: "Venue & Directions",
      },
      href: "https://maps.google.com/?q=Tilak+Smarak+Mandir+Pune",
    },
    ctaSecondary: {
      label: {
        mr: "प्रदर्शनाची पुस्तके पहा",
        en: "View Exhibition Catalogue",
      },
      href: "/shop",
    },
    theme: "from-[#1F1612] via-[#2A1D16] to-[#150F0C]",
    accentGlow: "bg-[#E8850A]/25",
    auraColor: "rgba(232, 133, 10, 0.4)",
  },

  // 2. Template B: Masterpiece Book Spotlight (अभिजात ग्रंथ व प्रकाशन)
  {
    type: "book",
    id: "hero-book-mrutyunjay",
    navPill: {
      mr: "📖 मृत्युंजय",
      en: "📖 Mrityunjay",
    },
    badgeText: {
      mr: "मराठी अभिजात महाकादंबरी",
      en: "Celebrated Indian Epic",
    },
    accolade: {
      mr: "साहित्य अकादमी व ज्ञानपीठ सन्मानित लेखक",
      en: "Sahitya Akademi & Jnanpith Honored Author",
    },
    title: {
      mr: "मृत्युंजय — शिवाजी सावंत",
      en: "Mrityunjay — Shivaji Sawant",
    },
    subtitle: {
      mr: "महाभारतातील दानशूर, उपेक्षित सूर्यपुत्र कर्णाच्या अथांग संघर्षाची, मैत्रीची आणि दातृत्वाची विश्वविख्यात महागाथा, जी लाखो वाचकांच्या हृदयाला स्पर्शून जाते.",
      en: "The magnum opus chronicling the agony, nobility, and towering generosity of Karna, translated across dozens of global languages.",
    },
    quote: {
      mr: "“मृत्यूवर विजय मिळवणारे दातृत्व आणि अन्यायाविरुद्ध अखेरपर्यंत लढणारा अजेय योद्धा.”",
      en: "“A triumphant masterpiece exploring destiny, sacrifice, and the unbreakable spirit of Karna.”",
    },
    bookMeta: {
      mr: "काँटिनेन्टल प्रकाशन • ९६० पृष्ठे • हार्डबाउंड आवृत्ती २०२६",
      en: "Continental Prakashan • 960 Pages • Hardbound Edition",
    },
    coverImage: "/images/books/mrutyunjay.svg",
    coverAlt: "Mrityunjay Book Cover",
    ctaPrimary: {
      label: {
        mr: "पुस्तक खरेदी करा (₹५९५)",
        en: "Order Book (₹595)",
      },
      href: "/products/mrutyunjay",
    },
    ctaSecondary: {
      label: {
        mr: "सविस्तर माहिती पहा",
        en: "View Synopsis",
      },
      href: "/products/mrutyunjay",
    },
    theme: "from-[#281512] via-[#3B1C17] to-[#1C0D0B]",
    accentGlow: "bg-[#D93020]/25",
    auraColor: "rgba(217, 48, 32, 0.38)",
  },

  // 3. Template C: Cultural Festival Envelope (सण, उत्सव व विशेष पर्व)
  {
    type: "festival",
    id: "hero-festival-diwali-ank",
    navPill: {
      mr: "🪔 दिवाळी अंक संच",
      en: "🪔 Diwali Ank Set",
    },
    festivalTag: {
      mr: "दिवाळी अंक पर्व २०२६ • पूर्वनोंदणी सुरू",
      en: "Diwali Ank Festival 2026 • Pre-Orders Open",
    },
    badgeText: {
      mr: "महाराष्ट्राची साहित्योत्सव परंपरा",
      en: "Maharashtra's Literary Heritage",
    },
    title: {
      mr: "यंदाची दिवाळी समृद्ध वाचनाची — मानांकित दिवाळी अंक संच",
      en: "Celebrate Deepavali with Maharashtra's Premier Literary Editions",
    },
    subtitle: {
      mr: "मौज, आवाज, दीपावली, नवल — महाराष्ट्रातील नामांकित दिवाळी अंकांचा खास एकत्रित संच. कथा, ललित, राजकारण आणि विनोदाची वार्षिक समृद्ध मेजवानी.",
      en: "Mauj, Awaz, Deepavali, Naval — pre-order the curated bundle of iconic annual literary magazines delivered safely across India.",
    },
    deliveryGuarantee: {
      mr: "लक्ष्मीन पूजनापूर्वी खात्रीशीर घरपोच वितरण (All-India Delivery)",
      en: "Guaranteed Safe Delivery Before Lakshmi Pujan Across India",
    },
    bundlePerks: {
      mr: [
        "विनामूल्य धातूचे साहित्ययात्रा बुकमार्क",
        "सुरक्षित वॉटरप्रूफ पॅकिंग",
        "₹५०० वर भारतभर मोफत डिलिव्हरी",
        "अधिकृत मूळ आवृत्ती",
      ],
      en: [
        "Free Commemorative Metal Bookmark",
        "Damage-Proof Waterproof Packing",
        "Free All-India Shipping above ₹500",
        "100% Authentic Publisher Copies",
      ],
    },
    covers: [
      {
        image: "/images/books/vyakti-ani-valli.svg",
        alt: "Mauj Diwali Ank",
        title: "मौज",
      },
      {
        image: "/images/books/batatyachi-chaal.svg",
        alt: "Awaz Diwali Ank",
        title: "आवाज",
      },
      {
        image: "/images/books/yayati.svg",
        alt: "Deepavali Special",
        title: "दीपावली",
      },
    ],
    ctaPrimary: {
      label: {
        mr: "दिवाळी अंक संच बुक करा",
        en: "Pre-Order Diwali Bundle",
      },
      href: "/collections/marathi-books",
    },
    ctaSecondary: {
      label: {
        mr: "सर्व दिवाळी अंक सूची",
        en: "View All Magazines",
      },
      href: "/shop",
    },
    theme: "from-[#2A1408] via-[#3D1E0C] to-[#1F0C05]",
    accentGlow: "bg-[#E8850A]/30",
    auraColor: "rgba(232, 133, 10, 0.45)",
  },

  // 4. Template D: Archival Dispatch & Book Mission (साहित्य संवाद / दुर्मीळ ग्रंथ शोध)
  {
    type: "dispatch",
    id: "hero-dispatch-rare-books",
    navPill: {
      mr: "✍️ दुर्मीळ ग्रंथ शोध",
      en: "✍️ Rare Book Mission",
    },
    dispatchTag: {
      mr: "२५ वर्षांची ग्रंथ निष्ठा • दुर्मीळ ग्रंथ शोध मोहीम",
      en: "25-Year Heritage • Rare Book Sourcing Bureau",
    },
    badgeText: {
      mr: "व्यक्तिगत ग्रंथ शोध सेवा",
      en: "Bespoke Book Sourcing",
    },
    title: {
      mr: "कोणतेही अप्रकाशित किंवा दुर्मीळ मराठी पुस्तक हवे आहे?",
      en: "Searching for an Out-of-Print or Rare Marathi Classic?",
    },
    subtitle: {
      mr: "गेल्या २५ वर्षांत महाराष्ट्रातील शेकडो प्रकाशक, जुनी वाचनालये आणि ग्रंथप्रेमींशी जोडलेल्या आमच्या अधिकृत जाळ्यामधून आम्ही आपल्यासाठी दुर्मीळ पुस्तके शोधून देतो.",
      en: "Drawing upon our 25-year network with Maharashtra's oldest publishers, archivists, and collectors, we track down rare, out-of-print, and forgotten gems for you.",
    },
    letterQuote: {
      mr: "“वाचकाची आवडती कथा किंवा जुनी कविता त्याच्या हाती सोपवणे, हाच आमच्या २५ वर्षांच्या ग्रंथप्रवासाचा खरा आनंद आहे.”",
      en: "“Placing a long-sought, cherished book into a reader’s hands has been the heartbeat of our 25-year journey.”",
    },
    curatorNote: {
      mr: "— साहित्ययात्रा संस्थापक परिवार (२५+ वर्षे ग्रंथ प्रदर्शन परंपरा)",
      en: "— SahityaYatra Founder Family (25+ Years of Book Exhibitions)",
    },
    highlights: {
      mr: [
        "दुर्मीळ ग्रंथ शोध मोहीम",
        "संस्था व महाविद्यालयांसाठी ग्रंथ प्रदर्शन",
        "वैयक्तिक ग्रंथालय उभारणी सल्ला",
      ],
      en: [
        "Out-of-Print Sourcing",
        "Campus & College Exhibitions",
        "Home Library Curation",
      ],
    },
    ctaPrimary: {
      label: {
        mr: "दुर्मीळ पुस्तक मागणी नोंदवा",
        en: "Request a Rare Book",
      },
      href: "/contact",
    },
    ctaSecondary: {
      label: {
        mr: "संस्थेत प्रदर्शन भरवा",
        en: "Host an Exhibition",
      },
      href: "/contact",
    },
    theme: "from-[#14231A] via-[#1E3326] to-[#0F1B14]",
    accentGlow: "bg-[#236B2B]/30",
    auraColor: "rgba(35, 107, 43, 0.4)",
  },
];
