# Deskripsi Project
Project ini dibuat untuk kebutuhan pengujian dan penerapan metodologi micro-frontend. Aplikasi dibangun dalam bentuk Single Page Application (SPA) yang menampilkan data Hotel dan Coliving dalam satu aplikasi host. Modul Hotel dan Coliving masing-masing merupakan remote application yang berjalan terpisah pada environment yang berbeda.

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
   git clone git@github.com:ekaadwar/vue-mfe-demo.git
   ```

3. Masuk ke folder project:

   ```bash
   cd vue-mfe-demo
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

### Build Masing-Masing Remote Project

```bash
cd /mfe-coliving
npm run build

cd /mfe-hotel
npm run build
```

### Jalankan Masing-Masing Project

1. Coliving Project:

   ```bash
   cd /mfe-coliving
   npm run dev
   ```

2. Hotel Project:
   ```bash
   cd /mfe-hotel
   npm run dev
   ```

3. Host Project:
   ```bash
   cd /host-shell
   npm run dev
   ```

---
