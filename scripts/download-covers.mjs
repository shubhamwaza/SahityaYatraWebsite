import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, "../public/images/books");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const booksToDownload = [
  {
    id: "mrutyunjay",
    url: "https://cdn.shopify.com/s/files/1/0848/7724/6697/files/81etl72UXTL._SL1500.jpg?v=1791989829",
  },
  {
    id: "chava",
    url: "https://cdn.shopify.com/s/files/1/0848/7724/6697/files/51ICmU9_HdL._AC_UF1000_1000_QL80.jpg?v=1791987759",
  },
  {
    id: "vyakti-ani-valli",
    url: "https://covers.openlibrary.org/b/id/10370190-L.jpg",
  },
  {
    id: "yayati",
    url: "https://www.bookganga.com/eBooks/Content/images/books/8fdbe24c331443ba934ec1cf01305f7c.jpg",
  },
  {
    id: "panipat",
    url: "https://www.bookganga.com/eBooks/Content/images/books/facea240d5b948f19d3fb270a017d82d.jpg",
  },
  {
    id: "shyamchi-aai",
    url: "https://www.bookganga.com/eBooks/Content/images/books/5f89a858d5af4e6787ab61082d2a1418.jpg",
  },
  {
    id: "batatyachi-chawl",
    url: "https://www.bookganga.com/eBooks/Content/images/books/8378514c5b0b40ca9ba7c19c03e64869.jpg",
  },
  {
    id: "musafir",
    url: "https://www.bookganga.com/eBooks/Content/images/books/0986dc457e2148aa935cd477d0271c58.jpg",
  },
  {
    id: "malgudi-days",
    url: "https://covers.openlibrary.org/b/id/7981639-L.jpg",
  },
  {
    id: "the-god-of-small-things",
    url: "https://covers.openlibrary.org/b/id/10513792-L.jpg",
  },
  {
    id: "the-room-on-the-roof",
    url: "https://covers.openlibrary.org/b/id/7553102-L.jpg",
  },
  {
    id: "train-to-pakistan",
    url: "https://covers.openlibrary.org/b/id/568646-L.jpg",
  },
];

async function downloadAll() {
  console.log("Starting book cover downloads...");
  for (const book of booksToDownload) {
    const destPath = path.join(targetDir, `${book.id}.jpg`);
    try {
      console.log(`Downloading ${book.id}...`);
      const res = await fetch(book.url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(destPath, buffer);
      console.log(`✓ Saved ${book.id}.jpg (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`✗ Failed to download ${book.id}:`, err.message);
    }
  }
  console.log("Download complete!");
}

downloadAll();
