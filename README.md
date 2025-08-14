# Literae
Literae adalah sebuah project frontend dummy **online book store**. 
Semua data buku diambil dari **Google Books API**, dan data **cart** / **bookmark** disimpan di **localStorage**

## Cara Menjalankan 
1. Clone Repository
   ```bash
   git glone https://github.com/lexiiyz/minilemon-test.git
   cd minilemon-test
3. Install Dependencies
   ```bash
   npm install
5. Jalankan di Development Server
   ```bash
   npm run dev
4. Buka di Browser
   ```bash
   http://localhost:5173

## Fitur
- Home Page
  - Hero section
  - Book of The Day (random book setiap refresh)
  - Rekomendasi kategori: Klasik, Baru, Pilihan Kurator
  - Best Seller
- Product Page
  - List semua buku hasil pencarian / kategori
  - Card buku dengan tombol:
    - Tambah ke keranjang
    - Bookmark
- Book Detail Page
  - Detail buku (cover, penulis, sinopsis)
  - Tombol tambah ke keranjang
  - Tombol bookmark
  - Skeleton loader
- Cart Page
  - Lihat daftar buku di keranjang
  - Hapus dan update jumlah buku dari keranjang
- Bookmark Page
  - Lihat daftar buku yang dibookmark
  - Hapus dari bookmark
- Responsive Design
  - Desktop & mobile friendly
  - Sidebar jika di mobile

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion
- AOS
- Google Books API
