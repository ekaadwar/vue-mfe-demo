# Project Setup Guide

Dokumentasi singkat untuk melakukan clone, instalasi, dan menjalankan project.

---

## 1) Cara Clone Project

1. Pastikan Git sudah ter-install:

   ```bash
   git --version
   ```

2. Clone repository:

   ```bash
   git clone <REPO_URL>
   ```

3. Masuk ke folder project:

   ```bash
   cd <NAMA_FOLDER_PROJECT>
   ```

4. (Opsional) Checkout ke branch tertentu jika dibutuhkan:
   ```bash
   git checkout <NAMA_BRANCH>
   ```

---

## 2) Cara Instalasi Project

> Pastikan sudah ter-install: **Node.js** dan **npm** (atau yarn/pnpm jika project kamu pakai itu).

1. Install dependencies:

   ```bash
   npm install
   ```

2. (Opsional) Jika ada file environment:
   - Copy file `.env.example` menjadi `.env`:
     ```bash
     cp .env.example .env
     ```
   - Lalu sesuaikan nilai konfigurasi di file `.env`.

---

## 3) Cara Menjalankan Project

### Menjalankan di mode development

```bash
npm run dev
```

### Menjalankan di mode production (umum)

1. Build project:

   ```bash
   npm run build
   ```

2. Jalankan hasil build:
   ```bash
   npm run start
   ```

---

## Notes

- Jika menggunakan port tertentu, cek output terminal atau konfigurasi di `.env`.
- Jika kamu menggunakan package manager lain:
  - Yarn: `yarn install`, `yarn dev`
  - PNPM: `pnpm install`, `pnpm dev`
