# host-shell-vue-cli

Project host micro frontend berbasis **Vue CLI** yang memuat remote `mfe-kost-v2` menggunakan **Webpack 5 Module Federation**.

## Menjalankan project

### 1. Jalankan remote terlebih dahulu

```bash
cd mfe-kost-v2
npm install
npm run serve
```

Remote akan aktif di:

```text
http://127.0.0.1:5003/remoteEntry.js
```

### 2. Jalankan host Vue CLI

```bash
cd host-shell-vue-cli
npm install
npm run serve
```

Host akan aktif di:

```text
http://127.0.0.1:5000
```

## Route yang tersedia

- `/` -> Dashboard host
- `/kost` -> halaman khusus untuk remote kost

## Catatan penting

- `src/main.js` menggunakan async bootstrap (`import('./bootstrap')`) agar shared module seperti `vue` tidak terkena error eager consumption.
- Remote yang dipanggil adalah `kost/KostApp` dari URL `http://127.0.0.1:5003/remoteEntry.js`.
