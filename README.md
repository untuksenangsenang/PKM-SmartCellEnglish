# SMART CELL ENGLISH

**SMART CELL ENGLISH** adalah platform edukasi *microlearning* modern berbasis *web* yang didesain secara spesifik untuk memfasilitasi peningkatan _life skill_ (kemampuan Bahasa Inggris) bagi anak binaan di LPKA Kelas II B Wonosari. Platform ini dikembangkan sebagai luaran dari program PKM-PM Universitas Ahmad Dahlan.

![Motto](https://img.shields.io/badge/Status-Development-blue?style=for-the-badge) ![Next.js](https://img.shields.io/badge/Next.js%2015-black?style=for-the-badge&logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📌 Fitur Utama

- **Antarmuka Mobile-First**: Dioptimalkan secara penuh untuk akses melalui perangkat seluler (HP) dengan interaksi yang nyaman seperti navigasi *bottom menu*.
- **Learning Modules**: Sistem modul pembelajaran dengan kartu *(cards)* yang menunjukkan riwayat progres materi harian.
- **Learning Videos**: Media integrasi pemutar YouTube/Video untuk latihan pengucapan visual.
- **Speaking Time (Podcast Player)**: Audio *storytelling* yang interaktif untuk melatih struktur bahasa Inggris pasif & aktif.
- **Gamified Quiz**: Evaluasi harian menggunakan efek transisi modern (*framer-motion*) yang responsif.
- **Desain "Clean & Solid"**: Meminimalisir distraksi dengan skema warna cerah (Biru dan Putih) yang memicu fokus belajar anak-anak.

## 💻 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide-React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## 📂 Struktur Direktori

\`\`\`
├── app/
│   ├── globals.css           # Konfigurasi Tema (Warna brand & dasar) Tailwind CSS v4
│   ├── layout.tsx            # Struktur Root (Memuat Inter Font, Navbar, Footer)
│   ├── page.tsx              # Halaman Dashboard Utama / Beranda
│   ├── modules/              # Halaman Modul Pembelajaran
│   ├── videos/               # Halaman Daftar Video Pembelajaran
│   ├── podcast/              # Halaman Latihan Listening & Speaking
│   └── quiz/                 # Halaman Tantangan Gamifikasi Kuis
├── components/               # Komponen UI Reusable
│   ├── Footer.tsx            # Informasi Kredit Mitra
│   ├── ModuleCard.tsx        # Kartu navigasi progres Modul
│   ├── Navbar.tsx            # Navigasi utama adaptif (Desktop & Mobile Bottom Nav)
│   └── PodcastPlayer.tsx     # Player MP3/Audio tetap di layar bawah (Sticky-bottom)
├── lib/
│   └── utils.ts              # Fungsi utilitas (penggabungan kelas Tailwind dengan cn)
├── public/                   # Aset Statis (Icon, gambar statis pendukung, dll)
└── package.json              # Daftar dependencies proyek
\`\`\`

## 🚀 Cara Menjalankan Secara Lokal (Development)

Pastikan Node.js (minimal versi 18.x) telah terinstall.

1. **Unduh repositori ini** (atau akses direktori source code di komputer Anda).
2. **Install Dependensi**
   \`\`\`bash
   npm install
   \`\`\`
3. **Jalankan Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Buka [http://localhost:3000](http://localhost:3000) (atau menyesuaikan port yang terbuka) melalui *browser* Anda untuk melihat hasil platform secara *live*.

---
Dikembangkan oleh **Tim PKM-PM Universitas Ahmad Dahlan**.
Didedikasikan untuk **Mitra LPKA Kelas II B Wonosari**.
