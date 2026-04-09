## 🚀 Fitur Utama

- **Hero Image Dinamis**: Latar belakang pada halaman hero (`Hero.tsx`) menggunakan gambar berkualitas tinggi secara acak dari sumber eksternal (Unsplash/Picsum) sehingga memberikan nuansa berbeda pada setiap *refresh*.
- **Elemen Teks yang Dapat Diedit**: Memiliki UI berupa *glassmorphism box* di tengah Hero Image yang memanfaatkan atribut `contenteditable="true"`. Ini memungkinkan teks di dalam kotak tersebut dapat diedit langsung oleh pengguna di browser.
- **Header Navigasi Sticky**: Header navigasi tetap terlihat (lengket di bagian atas layar) secara halus saat di-*scroll* ke bawah.
- **Menu Mobile Interaktif**: Menyediakan Hamburger Menu (*toggle*) untuk navigasi rapi pada ukuran layar *mobile* dan tablet.
- **Ikon Sosial Media Reaktif**: Ikon-ikon media sosial (di bawah logo) telah diatur agar menunjuk ke akun resmi Hashmicro dan dilengkapi dengan efek animasi *hover* serta *scale* menggunakan `framer-motion`.
- **Desain Layar Responsif**: Tampilan secara otomatis beradaptasi (berbentuk 1 kolom di layar HP, dan berubah menjadi bentuk *grid* di *desktop*) memastikan keterbacaan artikel "Diary of Mine" dkk. tetap proporsional di semua perangkat.

## 🛠️ Teknologi yang Digunakan

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) - Framework UI dan Builder.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript.
- [Framer Motion](https://www.framer.com/motion/) - Pustaka animasi (efek *hover*, *slide down* header, kemunculan list blog).
- [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/) - Pustaka Ikon.
- **Vanilla CSS** - Pengaturan style termasuk *variables* (Tokens), *animations* dan *glassmorphism*.

---

## 💻 Panduan Instalasi dan Menjalankan Proyek Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan *project* ini di laptop atau komputer Anda.

### Persyaratan Sistem
Pastikan perangkat Anda sudah terinstal:
- [Node.js](https://nodejs.org/en/) (Disarankan versi LTS, v18+)
- [npm](https://www.npmjs.com/) (Biasanya sudah *include* saat instalasi Node.js)

### Langkah-Langkah:

1. **Buka terminal dan arahkan ke direktori proyek utama:**
   Buka aplikasi Terminal, Command Prompt, atau PowerShell Anda.
   ```bash
   # Masuk ke folder proyek
   cd d:\Website\test\hashmicro
   ```

2. **Instal Dependensi (Library):**
   Jalankan perintah ini untuk mengunduh semua pustaka (React, Framer Motion, dsb) yang diperlukan ke dalam folder `node_modules`.
   ```bash
   npm install
   ```

3. **Jalankan Server Development Lokal:**
   ```bash
   npm run dev
   ```

4. **Buka di Browser:**
   Proses sebelumnya akan menghasilkan URL (biasanya `http://localhost:5173`). Buka *link* tersebut di *browser* (Chrome, Firefox, Safari) untuk melihat *website* secara langsung!

### Perintah Tambahan

- **Build untuk Production:**
  Untuk meng-*compile* kode TypeScript dan mem-bundling proyek agar siap *deploy* (ke Vercel/Netlify/Hosting):
  ```bash
  npm run build
  ```
  Ini akan menghasilkan foler `dist/` yang berisi kumpulan *file static* Anda.

- **Type Check Compiler:**
  Untuk memastikan tidak ada kesalahan tipe data file `.tsx` pada TypeScript:
  ```bash
  npx tsc
  ```
