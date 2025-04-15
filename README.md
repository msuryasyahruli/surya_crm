# Aplikasi Web CRM

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Table of Contents

- [Aplikasi Web CRM](#aplikasi-web-crm)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
- [Cara Menjalankan](#-cara-menjalankan)
  - [Clone Repository](#1-clone-repository)
  - [Konfigurasi Environment Variable](#2-konfigurasi-environment-variable)
  - [Install Dependency](#3-install-dependency)
  - [Menjalankan Aplikasi](#4-menjalankan-aplikasi)
- [Info Login](#-info-login)
- [Struktur Database (Umum)](#️-struktur-database-umum)
- [Pengembang](#-pengembang)

Aplikasi **Customer Relationship Management (CRM)** berbasis web yang dibangun menggunakan **ReactJS + Vite**, **NodeJS**, **ExpressJS**, **PostgreSQL**, dan **TailwindCSS**.  
Aplikasi ini dirancang untuk membantu proses manajemen calon pelanggan (lead), produk/layanan, proyek, dan pelanggan yang telah berlangganan.

### 🔗 **Backend repository:** [Lihat Repository Backend](https://github.com/msuryasyahruli/BE-Customer-Relationship-Management-)

## ✨ Fitur Utama

- 🔐 **Halaman Login** – Sistem autentikasi pengguna
- 📋 **Halaman List Calon Customer (Lead)** – Menampilkan dan mengelola daftar calon pelanggan
- 📦 **Halaman Master Produk (Layanan)** – Menambahkan dan mengelola layanan/produk
- 👥 **Halaman Pelanggan** – Menampilkan pelanggan yang sudah berlangganan beserta daftar layanan mereka
<!-- - 📁 **Halaman Proyek** – Memproses calon customer menjadi proyek disertai approval dari manager -->

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
cd surya_crm
code .
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

Pastikan backend juga berjalan. Kamu bisa temukan backend di sini: https://github.com/msuryasyahruli/BE-Customer-Relationship-Management-

---

## 🔑 Info Login

Gunakan akun berikut untuk mencoba aplikasi:

**Akun Admin**

- Email: admin123@gmail.com
- Password: adminadmin

---

## 🗃️ Struktur Database (Umum)

- users
- products
- customers

---

## 👨‍💻 Pengembang

Dibuat oleh [Muhammad Surya Syahruli](https://github.com/msuryasyahruli)

##### 📅 Tanggal pengerjaan: 10 April – 13 April 2025
