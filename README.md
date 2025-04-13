# Aplikasi Web CRM

Aplikasi **Customer Relationship Management (CRM)** berbasis web yang dibangun menggunakan **ReactJS + Vite**, **NodeJS**, **ExpressJS**, **PostgreSQL**, dan **TailwindCSS**.  
Aplikasi ini dirancang untuk membantu proses manajemen calon pelanggan (lead), produk/layanan, proyek, dan pelanggan yang telah berlangganan.

---

## ✨ Fitur Utama

- 🔐 **Halaman Login** – Sistem autentikasi pengguna
- 📋 **Halaman List Calon Customer (Lead)** – Menampilkan dan mengelola daftar calon pelanggan
- 📦 **Halaman Master Produk (Layanan)** – Menambahkan dan mengelola layanan/produk
- 📁 **Halaman Proyek** – Memproses calon customer menjadi proyek disertai approval dari manager
- 👥 **Halaman Pelanggan** – Menampilkan pelanggan yang sudah berlangganan beserta daftar layanan mereka

---

## 🛠️ Teknologi yang Digunakan

| Bagian   | Teknologi                   |
| -------- | --------------------------- |
| Frontend | ReactJS + Vite, TailwindCSS |
| Backend  | NodeJS, ExpressJS           |
| Database | PostgreSQL                  |

---

## 🚀 Cara Menjalankan

### 1. Clone Repository

```bash
git clone https://github.com/msuryasyahruli/surya_crm.git
cd crm-web-app
```

### 2. Konfigurasi Environment Variable

Buat file .env

```bash
VITE_API_URL="api_key"
```

### 3. Install Dependency

```bash
npm install
```

### 4. Menjalankan Aplikasi

```bash
npm run dev
```

---

## ✅ Role Pengguna

- **Manager/Admin:** dapat meng-approve proyek
- **Staff:** hanya bisa input dan proses lead

---

## 🗃️ Struktur Database (Umum)

- users
- products
- customers

---

## 👨‍💻 Pengembang

Dibuat oleh **Muhammad Surya Syahruli**

![License: MIT](LESENCE)
