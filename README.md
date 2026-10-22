# 🌟 Portofolio Resmi - RAFAEL STEVAN WITJAKSONO

Website portofolio modern dengan gaya visual **Light Theme Glassmorphism**, dirancang dengan kombinasi warna **Biru Cerah**, **Toska Muda**, **Putih Bersih**, serta aksen **Neon Pill Hijau Cerah**.

---

## 📑 Struktur Halaman & Fitur Utama

1. **Halaman Utama (`index.html`)**
   - Berjudul dan bertuliskan **"Portofolio Saya"**.
   - Foto resmi Rafael Stevan Witjaksono berbingkai efek *glass aura*.
   - Gambar & ikon ilustrasi vektor bertema teknologi dan kreativitas.
   - **Slide Interaktif Glassmorphism** (Carousel) yang dapat digeser atau berganti otomatis.
   - Tombol-tombol bergradien dengan efek kilau kaca (*glass shine*).

2. **Halaman Profil (`profil.html`)**
   - Nama lengkap tertera jelas: **RAFAEL STEVAN WITJAKSONO**.
   - Foto resmi profil.
   - Biodata & Biografi dengan gaya bahasa semi-formal, santun, dan mudah dipahami.
   - Kategori **Keahlian & Minat** dengan lencana *Neon Pill*.
   - Prinsip kerja, nilai pribadi, dan visi masa depan.

3. **Halaman Kontak (`kontak.html`)**
   - Judul utama: **"Hubungi Kontak Ini"**.
   - Kartu sorotan Instagram resmi: **`@rayzzfzxt_ft_morales_12`** dengan tombol langsung ke Instagram dan tombol salin *username* interaktif.
   - Formulir pesan interaktif dengan efek *Glassmorphism* dan modal notifikasi konfirmasi pengiriman pesan.
   - Informasi jam respons komunikasi.

---

## 🎨 Palet Warna & Desain

- **Biru Cerah (Sky Blue / Cyan):** `#0284c7`, `#0ea5e9`
- **Toska Muda (Light Turquoise):** `#2dd4bf`, `#ccfbf1`
- **Putih Bersih (Pure White):** `#ffffff`, `#f8fafc`
- **Neon Pill / Hijau Cerah:** `#22c55e`, `#a3e635`
- **Glassmorphism Effect:** `backdrop-filter: blur(16px)`, transparansi halus, border putih halus, bayangan ganda bercahaya.

---

## 🚀 Panduan Upload / Deploy ke Vercel

Website ini sudah dikonfigurasi 100% siap untuk di-deploy ke **Vercel** tanpa konfigurasi rumit. File `vercel.json` sudah disediakan untuk *clean URL routing*.

### Cara 1: Menggunakan Vercel CLI (Paling Cepat via Terminal)
1. Buka PowerShell atau Terminal di dalam folder proyek ini:
   ```bash
   cd "C:\Users\RAFAEL\.gemini\antigravity\scratch\portfolio-rafael"
   ```
2. Jalankan perintah Vercel:
   ```bash
   npx vercel
   ```
3. Ikuti petunjuk di layar (tekan Enter untuk pilihan default).
4. Dalam hitungan detik, Anda akan mendapatkan URL live gratis (contoh: `https://portfolio-rafael.vercel.app`).
5. Untuk deploy ke production permanen, jalankan:
   ```bash
   npx vercel --prod
   ```

---

### Cara 2: Menghubungkan via GitHub ke Vercel (Sangat Direkomendasikan)
1. Buat repositori baru di akun [GitHub](https://github.com) Anda (misalnya diberi nama `portofolio-rafael`).
2. Masuk ke folder proyek dan upload kode:
   ```bash
   git init
   git add .
   git commit -m "Portofolio Rafael Stevan Witjaksono"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/portofolio-rafael.git
   git push -u origin main
   ```
3. Buka situs [Vercel](https://vercel.com) dan login/signup dengan akun GitHub.
4. Klik tombol **"Add New..."** -> **"Project"**.
5. Pilih repositori `portofolio-rafael` lalu klik **"Deploy"**.
6. Vercel akan otomatis memproses dan memberikan domain gratis yang langsung aktif!

---

## 💻 Menjalankan di Komputer Lokal (Localhost)

Cukup klik dua kali file `index.html` pada File Explorer untuk membukanya langsung di browser (Chrome, Edge, Firefox), atau gunakan perintah:

```bash
npx serve .
```
Lalu buka alamat yang tertera di browser (biasanya `http://localhost:3000`).
