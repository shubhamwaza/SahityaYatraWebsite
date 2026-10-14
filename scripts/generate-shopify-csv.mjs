import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const products = [
  {
    handle: "vyakti-ani-valli",
    title: "व्यक्ती आणि वल्ली | Vyakti Ani Valli - पु. ल. देशपांडे",
    body: "<p><strong>व्यक्ती आणि वल्ली (Vyakti Ani Valli)</strong></p><p>लेखक: पु. ल. देशपांडे (P. L. Deshpande)<br>प्रकाशक: मौज प्रकाशन गृह (Mauj Prakashan Gruha)<br>साहित्य अकादमी पुरस्कार प्राप्त अजरामर ग्रंथ.</p><p>हसवता हसवता माणसांच्या अंतरंगाचे पदर उलगडणारी, मराठी मनाला दशकांनुवर्षे भुरळ घालणारी अद्वितीय व्यक्तिचित्रे. अण्णा वडगावकर, अंतू बर्वा, नंदा प्रधान, सखाराम गटणे यांसारख्या अनेक अजरामर पात्रांचा समृद्ध संग्रह.</p>",
    vendor: "मौज प्रकाशन गृह",
    type: "Books / मराठी साहित्य",
    tags: "marathi-books, classics, fiction, पु. ल. देशपांडे, मौज प्रकाशन गृह, साहित्य अकादमी",
    price: "270.00",
    compareAtPrice: "300.00",
    image: "https://covers.openlibrary.org/b/id/10370190-L.jpg",
  },
  {
    handle: "yayati",
    title: "ययाति | Yayati - वि. स. खांडेकर",
    body: "<p><strong>ययाति (Yayati)</strong></p><p>लेखक: वि. स. खांडेकर (V. S. Khandekar)<br>प्रकाशक: मेहता पब्लिशिंग हाऊस (Mehta Publishing House)<br>भारतीय ज्ञानपीठ पुरस्कार विजेती पहिली मराठी कादंबरी.</p><p>महाभारतातील ययाति राजाच्या कथेवर आधारित, मानवी वासना, तृप्ती आणि वैराग्य या चिरंतन संघर्षाचे अद्वितीय तत्त्वज्ञान मांडणारी साहित्यकृती.</p>",
    vendor: "मेहता पब्लिशिंग हाऊस",
    type: "Books / मराठी साहित्य",
    tags: "marathi-books, classics, fiction, वि. स. खांडेकर, मेहता पब्लिशिंग हाऊस, ज्ञानपीठ पुरस्कार",
    price: "320.00",
    compareAtPrice: "375.00",
    image: "https://www.bookganga.com/eBooks/Content/images/books/8fdbe24c331443ba934ec1cf01305f7c.jpg",
  },
  {
    handle: "panipat",
    title: "पानिपत | Panipat - विश्वास पाटील",
    body: "<p><strong>पानिपत (Panipat)</strong></p><p>लेखक: विश्वास पाटील (Vishwas Patil)<br>प्रकाशक: राजहंस प्रकाशन (Rajhans Prakashan)</p><p>पानिपतच्या तिसऱ्या युद्धाचा थरारक आणि हृदयद्रावक इतिहास सांगणारी अद्वितीय महाकादंबरी. मराठ्यांच्या पराक्रमाची आणि बलिदानाची जिवंत गाथा.</p>",
    vendor: "राजहंस प्रकाशन",
    type: "Books / ऐतिहासिक कादंबरी",
    tags: "marathi-books, history, fiction, विश्वास पाटील, राजहंस प्रकाशन, मराठा इतिहास",
    price: "450.00",
    compareAtPrice: "550.00",
    image: "https://www.bookganga.com/eBooks/Content/images/books/facea240d5b948f19d3fb270a017d82d.jpg",
  },
  {
    handle: "shyamchi-aai",
    title: "श्यामची आई | Shyamchi Aai - साने गुरुजी",
    body: "<p><strong>श्यामची आई (Shyamchi Aai)</strong></p><p>लेखक: साने गुरुजी (Sane Guruji)<br>प्रकाशक: साधना प्रकाशन (Sadhana Prakashan)</p><p>साने गुरुजींनी नाशिकच्या तुरुंगात लिहिलेली अमर माता-पुत्र प्रेमाची आणि संस्कारांची कथा. मराठी घरांमधील पिढ्यानपिढ्या वाचली गेलेली अमूल्य संस्कारगाथा.</p>",
    vendor: "साधना प्रकाशन",
    type: "Books / संस्कार साहित्य",
    tags: "marathi-books, classics, children, साने गुरुजी, साधना प्रकाशन, संस्कार",
    price: "160.00",
    compareAtPrice: "200.00",
    image: "https://www.bookganga.com/eBooks/Content/images/books/5f89a858d5af4e6787ab61082d2a1418.jpg",
  },
  {
    handle: "batatyachi-chawl",
    title: "बटाट्याची चाळ | Batatyachi Chawl - पु. ल. देशपांडे",
    body: "<p><strong>बटाट्याची चाळ (Batatyachi Chawl)</strong></p><p>लेखक: पु. ल. देशपांडे (P. L. Deshpande)<br>प्रकाशक: मौज प्रकाशन गृह (Mauj Prakashan Gruha)</p><p>मुंबईतील मध्यमवर्गीय चाळ संस्कृतीचे, माणसांचे आणि त्यांच्या जगण्यातील सुख-दुःखांचे नर्मविनोदी चित्रण करणारी पु. ल. देशपांडे यांची लोकप्रिय कलाकृती.</p>",
    vendor: "मौज प्रकाशन गृह",
    type: "Books / विनोदी साहित्य",
    tags: "marathi-books, fiction, classics, पु. ल. देशपांडे, मौज प्रकाशन गृह, चाळ संस्कृती",
    price: "225.00",
    compareAtPrice: "250.00",
    image: "https://www.bookganga.com/eBooks/Content/images/books/8378514c5b0b40ca9ba7c19c03e64869.jpg",
  },
  {
    handle: "musafir",
    title: "मुसाफिर | Musafir - अच्युत गोडबोले",
    body: "<p><strong>मुसाफिर (Musafir)</strong></p><p>लेखक: अच्युत गोडबोले (Achyut Godbole)<br>प्रकाशक: मनोविकास प्रकाशन (Manovikas Prakashan)</p><p>अच्युत गोडबोले यांचे अत्यंत प्रामाणिक, संवेदनशील आणि प्रेरणादायी आत्मचरित्र. आयआयटीपासून ते आयटी क्षेत्रातील सर्वोच्च पदापर्यंतचा एक विलक्षण जीवनप्रवास.</p>",
    vendor: "मनोविकास प्रकाशन",
    type: "Books / आत्मचरित्र",
    tags: "marathi-books, biography, अच्युत गोडबोले, मनोविकास प्रकाशन, प्रेरणादायी",
    price: "495.00",
    compareAtPrice: "650.00",
    image: "https://www.bookganga.com/eBooks/Content/images/books/0986dc457e2148aa935cd477d0271c58.jpg",
  },
  {
    handle: "chava",
    title: "छावा | Chaava - शिवाजी सावंत",
    body: "<p><strong>छावा (Chaava)</strong></p><p>लेखक: शिवाजी सावंत (Shivaji Sawant)<br>प्रकाशक: मेहता पब्लिशिंग हाऊस (Mehta Publishing House)</p><p>छत्रपती संभाजी महाराजांच्या असामान्य शौर्य, त्याग आणि संघर्षाची महागाथा मांडणारी शिवाजी सावंत यांची सुप्रसिद्ध ऐतिहासिक कादंबरी.</p>",
    vendor: "मेहता पब्लिशिंग हाऊस",
    type: "Books / ऐतिहासिक कादंबरी",
    tags: "marathi-books, history, fiction, शिवाजी सावंत, संभाजी महाराज, मेहता पब्लिशिंग",
    price: "638.00",
    compareAtPrice: "750.00",
    image: "https://cdn.shopify.com/s/files/1/0848/7724/6697/files/51ICmU9_HdL._AC_UF1000_1000_QL80.jpg?v=1791987759",
  },
  {
    handle: "mrutyunjay",
    title: "मृत्युंजय | Mrityunjay - शिवाजी सावंत",
    body: "<p><strong>मृत्युंजय (Mrityunjay)</strong></p><p>लेखक: शिवाजी सावंत (Shivaji Sawant)<br>प्रकाशक: कॉन्टिनेन्टल प्रकाशन (Continental Prakashan)</p><p>महाभारतातील दानशूर महारथी कर्णाच्या जीवनावरील अजरामर महाकादंबरी. अनेक भारतीय भाषांमध्ये अनुवादित झालेली मराठी साहित्यातील मैलाचा दगड.</p>",
    vendor: "कॉन्टिनेन्टल प्रकाशन",
    type: "Books / महाकादंबरी",
    tags: "marathi-books, classics, fiction, शिवाजी सावंत, कर्ण, कॉन्टिनेन्टल प्रकाशन",
    price: "595.00",
    compareAtPrice: "675.00",
    image: "https://cdn.shopify.com/s/files/1/0848/7724/6697/files/81etl72UXTL._SL1500.jpg?v=1791989829",
  },
  {
    handle: "malgudi-days",
    title: "Malgudi Days - R. K. Narayan",
    body: "<p><strong>Malgudi Days</strong> by R. K. Narayan</p><p>Publisher: Indian Thought Publications / Penguin Classics</p><p>A quintessential collection of short stories set in the fictional South Indian town of Malgudi, capturing the warmth, humor, and ironies of everyday Indian life.</p>",
    vendor: "Indian Thought Publications",
    type: "Books / Indian Writing in English",
    tags: "english-books, fiction, classics, R. K. Narayan, Penguin",
    price: "299.00",
    compareAtPrice: "350.00",
    image: "https://covers.openlibrary.org/b/id/7981639-L.jpg",
  },
  {
    handle: "the-god-of-small-things",
    title: "The God of Small Things - Arundhati Roy",
    body: "<p><strong>The God of Small Things</strong> by Arundhati Roy</p><p>Publisher: Penguin India (Booker Prize Winner)</p><p>The Booker Prize-winning novel that tells the evocative story of fraternal twins Rahel and Estha in Kerala, navigating love, family, and the immutable laws of society.</p>",
    vendor: "Penguin India",
    type: "Books / Indian Writing in English",
    tags: "english-books, fiction, Arundhati Roy, Booker Prize, Penguin",
    price: "449.00",
    compareAtPrice: "499.00",
    image: "https://covers.openlibrary.org/b/id/10513792-L.jpg",
  },
  {
    handle: "the-room-on-the-roof",
    title: "The Room on the Roof - Ruskin Bond",
    body: "<p><strong>The Room on the Roof</strong> by Ruskin Bond</p><p>Publisher: Penguin India (John Llewellyn Rhys Prize Winner)</p><p>Ruskin Bond's debut novel written when he was only seventeen. A timeless coming-of-age story set against the backdrop of Dehradun, exploring friendship, freedom, and identity.</p>",
    vendor: "Penguin India",
    type: "Books / Young Adult & Classics",
    tags: "english-books, fiction, children, Ruskin Bond, Penguin",
    price: "225.00",
    compareAtPrice: "250.00",
    image: "https://covers.openlibrary.org/b/id/7553102-L.jpg",
  },
  {
    handle: "train-to-pakistan",
    title: "Train to Pakistan - Khushwant Singh",
    body: "<p><strong>Train to Pakistan</strong> by Khushwant Singh</p><p>Publisher: Ravi Dayal / Penguin India</p><p>A powerful, devastating novel depicting the human tragedy of the 1947 partition of India through the microcosm of the peaceful Punjab village of Mano Majra.</p>",
    vendor: "Ravi Dayal / Penguin India",
    type: "Books / Historical Fiction",
    tags: "english-books, history, fiction, Khushwant Singh, Partition, Penguin",
    price: "265.00",
    compareAtPrice: "299.00",
    image: "https://covers.openlibrary.org/b/id/568646-L.jpg",
  },
];

function escapeCsv(str) {
  if (str === null || str === undefined) return "";
  const s = String(str);
  if (s.includes(",") || s.includes('"') || s.includes("\n") || s.includes("\r")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

const headers = [
  "Handle",
  "Title",
  "Body (HTML)",
  "Vendor",
  "Product Category",
  "Type",
  "Tags",
  "Published",
  "Option1 Name",
  "Option1 Value",
  "Variant SKU",
  "Variant Grams",
  "Variant Inventory Tracker",
  "Variant Inventory Qty",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Price",
  "Variant Compare At Price",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Image Src",
  "Image Position",
  "Image Alt Text",
  "Gift Card",
  "SEO Title",
  "SEO Description",
  "Status",
];

const rows = [headers.join(",")];

for (const p of products) {
  const row = [
    escapeCsv(p.handle),
    escapeCsv(p.title),
    escapeCsv(p.body),
    escapeCsv(p.vendor),
    escapeCsv("Media > Books"),
    escapeCsv(p.type),
    escapeCsv(p.tags),
    "TRUE",
    "Title",
    "Default Title",
    escapeCsv(`SY-${p.handle.toUpperCase()}`),
    "400",
    "shopify",
    "15",
    "deny",
    "manual",
    p.price,
    p.compareAtPrice,
    "TRUE",
    "FALSE",
    escapeCsv(p.image),
    "1",
    escapeCsv(p.title),
    "FALSE",
    escapeCsv(p.title),
    escapeCsv(`Buy ${p.title} online at SahityaYatra with all-India doorstep delivery.`),
    "active",
  ];
  rows.push(row.join(","));
}

const csvContent = rows.join("\n");
const outputPath = path.join(__dirname, "../shopify_products_import.csv");
fs.writeFileSync(outputPath, csvContent, "utf-8");
console.log(`Generated Shopify import CSV at: ${outputPath}`);
