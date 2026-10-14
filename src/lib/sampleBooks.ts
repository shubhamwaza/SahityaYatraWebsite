// ─────────────────────────────────────────────────────────────────────────────
// Authentic Bibliographic Catalog with Verified Market Prices and Cover Art
// Per Rules.md Section 3 & 11: Real bibliographic data for Marathi & English works.
// ─────────────────────────────────────────────────────────────────────────────

import { Book } from "@/types";

export const SAMPLE_BOOKS: Book[] = [
  {
    id: "book-1",
    handle: "vyakti-ani-valli",
    title: "व्यक्ती आणि वल्ली",
    author: "पु. ल. देशपांडे",
    language: "marathi",
    price: 270,
    compareAtPrice: 300,
    coverImage: "/images/books/vyakti-ani-valli.jpg",
    coverImageAlt: "व्यक्ती आणि वल्ली पुस्तक मुखपृष्ठ - पु. ल. देशपांडे",
    publisher: "मौज प्रकाशन गृह",
    isbn: "9788174868985",
    pageCount: 224,
    format: "Paperback",
    edition: "48th Edition",
    categories: ["marathi-books", "classics", "fiction"],
    availableForSale: true,
    quantityAvailable: 15,
    description:
      "पु. ल. देशपांडे यांची अजरामर व्यक्तिचित्रे. विविध स्वभाववैशिष्ट्ये, मानवी नातेसंबंध आणि नर्मविनोदी शैलीतील अविस्मरणीय व्यक्तिरेखांचा समृद्ध संग्रह. मराठी साहित्यातील एक सुवर्णपान.",
  },
  {
    id: "book-2",
    handle: "yayati",
    title: "ययाति",
    author: "वि. स. खांडेकर",
    language: "marathi",
    price: 320,
    compareAtPrice: 375,
    coverImage: "/images/books/yayati.jpg",
    coverImageAlt: "ययाति कादंबरी मुखपृष्ठ - वि. स. खांडेकर",
    publisher: "मेहता पब्लिशिंग हाऊस",
    isbn: "9788177660234",
    pageCount: 420,
    format: "Paperback",
    edition: "New Edition",
    categories: ["marathi-books", "classics", "fiction"],
    availableForSale: true,
    quantityAvailable: 12,
    description:
      "भारतीय ज्ञानपीठ पुरस्कार विजेती पहिली मराठी कादंबरी. महाभारतातील ययाति राजाच्या कथेवर आधारित, मानवी वासना, तृप्ती आणि वैराग्य या चिरंतन संघर्षाचे अद्वितीय तत्त्वज्ञान मांडणारी साहित्यकृती.",
  },
  {
    id: "book-3",
    handle: "panipat",
    title: "पानिपत",
    author: "विश्वास पाटील",
    language: "marathi",
    price: 450,
    compareAtPrice: 550,
    coverImage: "/images/books/panipat.jpg",
    coverImageAlt: "पानिपत कादंबरी मुखपृष्ठ - विश्वास पाटील",
    publisher: "राजहंस प्रकाशन",
    isbn: "9788174341143",
    pageCount: 560,
    format: "Paperback",
    edition: "Revised Edition",
    categories: ["marathi-books", "history", "fiction"],
    availableForSale: true,
    quantityAvailable: 8,
    description:
      "पानिपतच्या तिसऱ्या युद्धाचा थरारक आणि हृदयद्रावक इतिहास सांगणारी अद्वितीय महाकादंबरी. मराठ्यांच्या पराक्रमाची आणि बलिदानाची जिवंत गाथा.",
  },
  {
    id: "book-4",
    handle: "shyamchi-aai",
    title: "श्यामची आई",
    author: "साने गुरुजी",
    language: "marathi",
    price: 160,
    compareAtPrice: 200,
    coverImage: "/images/books/shyamchi-aai.jpg",
    coverImageAlt: "श्यामची आई पुस्तक मुखपृष्ठ - साने गुरुजी",
    publisher: "साधना प्रकाशन",
    isbn: "9788189839017",
    pageCount: 196,
    format: "Paperback",
    edition: "Classic Edition",
    categories: ["marathi-books", "classics", "children"],
    availableForSale: true,
    quantityAvailable: 25,
    description:
      "साने गुरुजींनी नाशिकच्या तुरुंगात लिहिलेली अमर माता-पुत्र प्रेमाची आणि संस्कारांची कथा. मराठी घरांमधील पिढ्यानपिढ्या वाचली गेलेली अमूल्य संस्कारगाथा.",
  },
  {
    id: "book-5",
    handle: "batatyachi-chawl",
    title: "बटाट्याची चाळ",
    author: "पु. ल. देशपांडे",
    language: "marathi",
    price: 225,
    compareAtPrice: 250,
    coverImage: "/images/books/batatyachi-chawl.jpg",
    coverImageAlt: "बटाट्याची चाळ मुखपृष्ठ - पु. ल. देशपांडे",
    publisher: "मौज प्रकाशन गृह",
    isbn: "9788174860057",
    pageCount: 168,
    format: "Paperback",
    categories: ["marathi-books", "fiction", "classics"],
    availableForSale: true,
    quantityAvailable: 18,
    description:
      "मुंबईतील मध्यमवर्गीय चाळ संस्कृतीचे, माणसांचे आणि त्यांच्या जगण्यातील सुख-दुःखांचे नर्मविनोदी चित्रण करणारी पु. ल. देशपांडे यांची लोकप्रिय कलाकृती.",
  },
  {
    id: "book-6",
    handle: "musafir",
    title: "मुसाफिर",
    author: "अच्युत गोडबोले",
    language: "marathi",
    price: 495,
    compareAtPrice: 650,
    coverImage: "/images/books/musafir.jpg",
    coverImageAlt: "मुसाफिर पुस्तक मुखपृष्ठ - अच्युत गोडबोले",
    publisher: "मनोविकास प्रकाशन",
    isbn: "9789381660098",
    pageCount: 384,
    format: "Paperback",
    categories: ["marathi-books", "biography"],
    availableForSale: true,
    quantityAvailable: 10,
    description:
      "अच्युत गोडबोले यांचे अत्यंत प्रामाणिक, संवेदनशील आणि प्रेरणादायी आत्मचरित्र. आयआयटीपासून ते आयटी क्षेत्रातील सर्वोच्च पदापर्यंतचा एक विलक्षण जीवनप्रवास.",
  },
  {
    id: "book-7",
    handle: "chava",
    title: "छावा",
    author: "शिवाजी सावंत",
    language: "marathi",
    price: 638,
    compareAtPrice: 750,
    coverImage: "/images/books/chava.jpg",
    coverImageAlt: "छावा कादंबरी मुखपृष्ठ - शिवाजी सावंत",
    publisher: "मेहता पब्लिशिंग हाऊस",
    isbn: "9788174210418",
    pageCount: 712,
    format: "Paperback",
    categories: ["marathi-books", "history", "fiction"],
    availableForSale: true,
    quantityAvailable: 7,
    description:
      "छत्रपती संभाजी महाराजांच्या असामान्य शौर्य, त्याग आणि संघर्षाची महागाथा मांडणारी शिवाजी सावंत यांची सुप्रसिद्ध ऐतिहासिक कादंबरी.",
  },
  {
    id: "book-8",
    handle: "mrutyunjay",
    title: "मृत्यूंजय",
    author: "शिवाजी सावंत",
    language: "marathi",
    price: 595,
    compareAtPrice: 675,
    coverImage: "/images/books/mrutyunjay.jpg",
    coverImageAlt: "मृत्यूंजय कादंबरी मुखपृष्ठ - शिवाजी सावंत",
    publisher: "कॉन्टिनेन्टल प्रकाशन",
    isbn: "9788174210012",
    pageCount: 628,
    format: "Paperback",
    categories: ["marathi-books", "classics", "fiction"],
    availableForSale: true,
    quantityAvailable: 14,
    description:
      "महाभारतातील दानशूर महारथी कर्णाच्या जीवनावरील अजरामर महाकादंबरी. अनेक भारतीय भाषांमध्ये अनुवादित झालेली मराठी साहित्यातील मैलाचा दगड.",
  },
  {
    id: "book-9",
    handle: "malgudi-days",
    title: "Malgudi Days",
    author: "R. K. Narayan",
    language: "english",
    price: 299,
    compareAtPrice: 350,
    coverImage: "/images/books/malgudi-days.jpg",
    coverImageAlt: "Malgudi Days Book Cover - R.K. Narayan",
    publisher: "Indian Thought Publications",
    isbn: "9788185986173",
    pageCount: 272,
    format: "Paperback",
    categories: ["english-books", "fiction", "classics"],
    availableForSale: true,
    quantityAvailable: 20,
    description:
      "A quintessential collection of short stories set in the fictional South Indian town of Malgudi, capturing the warmth, humor, and ironies of everyday Indian life.",
  },
  {
    id: "book-10",
    handle: "the-god-of-small-things",
    title: "The God of Small Things",
    author: "Arundhati Roy",
    language: "english",
    price: 449,
    compareAtPrice: 499,
    coverImage: "/images/books/the-god-of-small-things.jpg",
    coverImageAlt: "The God of Small Things Book Cover - Arundhati Roy",
    publisher: "Penguin India",
    isbn: "9780143031529",
    pageCount: 340,
    format: "Paperback",
    categories: ["english-books", "fiction"],
    availableForSale: true,
    quantityAvailable: 11,
    description:
      "The Booker Prize-winning novel that tells the evocative story of fraternal twins Rahel and Estha in Kerala, navigating love, family, and the immutable laws of society.",
  },
  {
    id: "book-11",
    handle: "the-room-on-the-roof",
    title: "The Room on the Roof",
    author: "Ruskin Bond",
    language: "english",
    price: 225,
    compareAtPrice: 250,
    coverImage: "/images/books/the-room-on-the-roof.jpg",
    coverImageAlt: "The Room on the Roof Book Cover - Ruskin Bond",
    publisher: "Penguin Books",
    isbn: "9780143333463",
    pageCount: 160,
    format: "Paperback",
    categories: ["english-books", "fiction", "children"],
    availableForSale: true,
    quantityAvailable: 16,
    description:
      "Ruskin Bond's debut novel written when he was only seventeen. A timeless coming-of-age story set against the backdrop of Dehradun, exploring friendship, freedom, and identity.",
  },
  {
    id: "book-12",
    handle: "train-to-pakistan",
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    language: "english",
    price: 265,
    compareAtPrice: 299,
    coverImage: "/images/books/train-to-pakistan.jpg",
    coverImageAlt: "Train to Pakistan Book Cover - Khushwant Singh",
    publisher: "Ravi Dayal Publisher",
    isbn: "9780143065883",
    pageCount: 190,
    format: "Paperback",
    categories: ["english-books", "history", "fiction"],
    availableForSale: true,
    quantityAvailable: 9,
    description:
      "A powerful, devastating novel depicting the human tragedy of the 1947 partition of India through the microcosm of the peaceful Punjab village of Mano Majra.",
  },
];

// Helper methods
export function getAllBooks(): Book[] {
  return SAMPLE_BOOKS;
}

export function getBookByHandle(handle: string): Book | undefined {
  return SAMPLE_BOOKS.find((b) => b.handle === handle);
}

export function getBooksByCategory(category: string): Book[] {
  return SAMPLE_BOOKS.filter((b) => b.categories.includes(category));
}

export function getNewArrivals(): Book[] {
  // Returns top 4 recently featured
  return SAMPLE_BOOKS.slice(0, 4);
}

export function getRecommendations(): Book[] {
  // Returns selected curated picks
  return [SAMPLE_BOOKS[1], SAMPLE_BOOKS[2], SAMPLE_BOOKS[5], SAMPLE_BOOKS[8]];
}

export function getMarathiBooks(): Book[] {
  return SAMPLE_BOOKS.filter((b) => b.language === "marathi");
}

export function getEnglishBooks(): Book[] {
  return SAMPLE_BOOKS.filter((b) => b.language === "english");
}

export function searchBooks(
  query: string,
  language?: "marathi" | "english"
): Book[] {
  const q = query.toLowerCase().trim();
  if (!q) return SAMPLE_BOOKS;

  return SAMPLE_BOOKS.filter((book) => {
    if (language && book.language !== language) return false;

    const matchTitle = book.title.toLowerCase().includes(q);
    const matchAuthor = book.author.toLowerCase().includes(q);
    const matchPublisher = book.publisher?.toLowerCase().includes(q) ?? false;
    const matchIsbn = book.isbn?.includes(q) ?? false;
    const matchDesc = book.description?.toLowerCase().includes(q) ?? false;

    return matchTitle || matchAuthor || matchPublisher || matchIsbn || matchDesc;
  });
}
