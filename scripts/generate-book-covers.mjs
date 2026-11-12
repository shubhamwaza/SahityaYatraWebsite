import fs from "fs";
import path from "path";

const books = [
  {
    filename: "vyakti-ani-valli.svg",
    title: "व्यक्ती आणि वल्ली",
    author: "पु. ल. देशपांडे",
    bg: "#8A3324",
    accent: "#E5A93C",
    sub: "मौज प्रकाशन",
  },
  {
    filename: "yayati.svg",
    title: "ययाति",
    author: "वि. स. खांडेकर",
    bg: "#1E3A5F",
    accent: "#E2C044",
    sub: "ज्ञानपीठ पुरस्कार विजेती कादंबरी",
  },
  {
    filename: "panipat.svg",
    title: "पानिपत",
    author: "विश्वास पाटील",
    bg: "#5C1D24",
    accent: "#F28C38",
    sub: "ऐतिहासिक महाकादंबरी",
  },
  {
    filename: "shyamchi-aai.svg",
    title: "श्यामची आई",
    author: "साने गुरुजी",
    bg: "#2E5339",
    accent: "#D6E5D8",
    sub: "सदाबहार अभिजात साहित्य",
  },
  {
    filename: "batatyachi-chawl.svg",
    title: "बटाट्याची चाळ",
    author: "पु. ल. देशपांडे",
    bg: "#354F52",
    accent: "#CAD2C5",
    sub: "विनोदी अभिजात कलाकृती",
  },
  {
    filename: "musafir.svg",
    title: "मुसाफिर",
    author: "अच्युत गोडबोले",
    bg: "#4A4036",
    accent: "#E8850A",
    sub: "मनोवेधक आत्मचरित्र",
  },
  {
    filename: "chava.svg",
    title: "छावा",
    author: "शिवाजी सावंत",
    bg: "#6B2D2D",
    accent: "#F0B27A",
    sub: "संभाजी महाराजांची महागाथा",
  },
  {
    filename: "mrutyunjay.svg",
    title: "मृत्यूंजय",
    author: "शिवाजी सावंत",
    bg: "#1D2D44",
    accent: "#E0A96D",
    sub: "कर्णाची अमर जीवनगाथा",
  },
  {
    filename: "malgudi-days.svg",
    title: "Malgudi Days",
    author: "R. K. Narayan",
    bg: "#3D314A",
    accent: "#E8C547",
    sub: "Classic Indian Short Stories",
  },
  {
    filename: "the-god-of-small-things.svg",
    title: "The God of Small Things",
    author: "Arundhati Roy",
    bg: "#1B4332",
    accent: "#D8F3DC",
    sub: "Booker Prize Winner",
  },
  {
    filename: "the-room-on-the-roof.svg",
    title: "The Room on the Roof",
    author: "Ruskin Bond",
    bg: "#2B2D42",
    accent: "#8D99AE",
    sub: "A Himalayan Classic",
  },
  {
    filename: "train-to-pakistan.svg",
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    bg: "#540B0E",
    accent: "#E09F3E",
    sub: "Historical Fiction",
  },
  {
    filename: "shriman-yogi.svg",
    title: "श्रीमान योगी",
    author: "रणजित देसाई",
    bg: "#8B2500",
    accent: "#F4C430",
    sub: "छत्रपती शिवाजी महाराजांची महागाथा",
  },
  {
    filename: "swami.svg",
    title: "स्वामी",
    author: "रणजित देसाई",
    bg: "#4A154B",
    accent: "#E0BBE4",
    sub: "साहित्य अकादमी पुरस्कार प्राप्त",
  },
  {
    filename: "partner.svg",
    title: "पार्टनर",
    author: "व. पु. काळे",
    bg: "#1F4E5B",
    accent: "#FFD166",
    sub: "मैत्री व जीवनाचे अनोखे तत्त्वज्ञान",
  },
  {
    filename: "kosala.svg",
    title: "कोसला",
    author: "भालचंद्र नेमाडे",
    bg: "#2B2D42",
    accent: "#E9D8A6",
    sub: "युगप्रवर्तक ज्ञानपीठ कलाकृती",
  },
  {
    filename: "baluta.svg",
    title: "बलुतं",
    author: "दया पवार",
    bg: "#3E2723",
    accent: "#D7CCC8",
    sub: "मैलाचा दगड ठरलेली आत्मकथा",
  },
  {
    filename: "natsamrat.svg",
    title: "नटसम्राट",
    author: "कुसुमाग्रज",
    bg: "#31101E",
    accent: "#FFC107",
    sub: "मराठी रंगभूमीवरील अमर नाटक",
  },
  {
    filename: "kimayagar.svg",
    title: "किमयागार",
    author: "अच्युत गोडबोले",
    bg: "#0B3C5D",
    accent: "#328CC1",
    sub: "विज्ञानाचा थक्क करणारा इतिहास",
  },
  {
    filename: "radheya.svg",
    title: "राधेय",
    author: "रणजित देसाई",
    bg: "#5A1827",
    accent: "#E59866",
    sub: "महाभारतातील कर्णाची व्यथा",
  },
  {
    filename: "zadazadati.svg",
    title: "झाडाझडती",
    author: "विश्वास पाटील",
    bg: "#1C3122",
    accent: "#A3C9A8",
    sub: "साहित्य अकादमी सन्मानित कादंबरी",
  },
  {
    filename: "vapurza.svg",
    title: "वपुर्झा",
    author: "व. पु. काळे",
    bg: "#4E3629",
    accent: "#F3C98B",
    sub: "माणसांच्या नात्यांचे सुरेख चिंतन",
  },
  {
    filename: "raja-shivchhatrapati.svg",
    title: "राजा शिवछत्रपती",
    author: "बाबासाहेब पुरंदरे",
    bg: "#7A1C1C",
    accent: "#FAD02C",
    sub: "शिवशाहीर बाबासाहेब पुरंदरे",
  },
  {
    filename: "uchalya.svg",
    title: "उचल्या",
    author: "लक्ष्मण गायकवाड",
    bg: "#2E383F",
    accent: "#E0A96D",
    sub: "साहित्य अकादमी पुरस्कार विजेते आत्मकथन",
  },
  {
    filename: "aajichya-potaditil-goshti.svg",
    title: "आजीच्या पोतडीतील गोष्टी",
    author: "सुधा मूर्ती",
    bg: "#2C5E43",
    accent: "#FCEADE",
    sub: "संस्कारक्षम व मनोरंजक बालकथा",
  },
  {
    filename: "mahanayak.svg",
    title: "महानायक",
    author: "विश्वास पाटील",
    bg: "#283747",
    accent: "#F39C12",
    sub: "नेताजी सुभाषचंद्रांची महागाथा",
  },
  {
    filename: "yugandhar.svg",
    title: "युगंधर",
    author: "शिवाजी सावंत",
    bg: "#1A2530",
    accent: "#F4D03F",
    sub: "भगवान श्रीकृष्णाची जीवनगाथा",
  },
  {
    filename: "amrutvel.svg",
    title: "अमृतवेल",
    author: "वि. स. खांडेकर",
    bg: "#4A235A",
    accent: "#D2B4DE",
    sub: "मानवी मूल्यांचा भावस्पर्शी शोध",
  },
];

const targetDir = path.join(process.cwd(), "public", "images", "books");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const book of books) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${book.bg}" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.3" />
    </filter>
  </defs>
  
  <!-- Book Cover Background -->
  <rect width="400" height="600" fill="url(#grad)" rx="8" />
  
  <!-- Subtle Spine Line -->
  <rect x="0" y="0" width="22" height="600" fill="#000000" opacity="0.25" />
  <line x1="22" y1="0" x2="22" y2="600" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1.5" />
  
  <!-- Decorative Frame -->
  <rect x="36" y="32" width="330" height="536" fill="none" stroke="${book.accent}" stroke-opacity="0.35" stroke-width="1.5" rx="4" />
  <rect x="42" y="38" width="318" height="524" fill="none" stroke="${book.accent}" stroke-opacity="0.15" stroke-width="1" rx="2" />
  
  <!-- Literary Emblem Motif -->
  <g transform="translate(200, 150)">
    <circle cx="0" cy="0" r="32" fill="none" stroke="${book.accent}" stroke-width="1.5" opacity="0.5" />
    <path d="M-14,-6 C-8,-14 8,-14 14,-6 C18,0 0,16 0,16 C0,16 -18,0 -14,-6 Z" fill="${book.accent}" opacity="0.8" />
  </g>

  <!-- Title -->
  <text x="200" y="270" text-anchor="middle" font-family="'Mukta', 'IBM Plex Sans', sans-serif" font-weight="700" font-size="28" fill="#FFFFFF" letter-spacing="0.5">
    ${book.title}
  </text>
  
  <!-- Thin divider -->
  <line x1="120" y1="310" x2="280" y2="310" stroke="${book.accent}" stroke-width="1.5" opacity="0.6" />
  
  <!-- Author -->
  <text x="200" y="350" text-anchor="middle" font-family="'Mukta', 'IBM Plex Sans', sans-serif" font-weight="500" font-size="20" fill="${book.accent}">
    ${book.author}
  </text>
  
  <!-- Category / Note -->
  <text x="200" y="385" text-anchor="middle" font-family="'Mukta', 'IBM Plex Sans', sans-serif" font-weight="400" font-size="13" fill="#DED0BC" opacity="0.85">
    ${book.sub}
  </text>
  
  <!-- Bottom Brand Mark -->
  <g transform="translate(200, 520)">
    <text x="0" y="0" text-anchor="middle" font-family="'Mukta', sans-serif" font-weight="600" font-size="12" fill="${book.accent}" opacity="0.75" letter-spacing="2">
      साहित्ययात्रा
    </text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(targetDir, book.filename), svg);
}

console.log(`Successfully generated ${books.length} sample book cover SVGs!`);
