# Virtual Conference Space

## Deskripsi
Virtual Conference Space adalah platform inovatif untuk konferensi video berkualitas tinggi dan interaktif, dirancang untuk memfasilitasi komunikasi dan kolaborasi yang efisien di dunia virtual.

## Fitur Utama
- Video call berkualitas tinggi
- Emoji interaktif
- Chat real-time
- Multi-user support
- Pengaturan yang mudah

## Persyaratan
Sebelum menjalankan aplikasi, pastikan Anda memiliki:
- Node.js (versi 14 atau lebih baru)
- npm (Node Package Manager)

## Instalasi
Ikuti langkah-langkah di bawah ini untuk mengatur proyek di lingkungan lokal Anda:

1. **Clone Repositori**
   ```bash
   git clone https://github.com/username/erwin1412/Virtual-Conference-Space.git
   

2. **npm install**


3. **node server.js**


## Sertifikat SSL

Aplikasi **Virtual Conference Space** menggunakan HTTPS untuk mengamankan komunikasi antara klien dan server, memastikan bahwa data yang dikirim dan diterima tetap rahasia dan tidak dapat diakses oleh pihak ketiga. Untuk mengaktifkan HTTPS, Anda memerlukan dua file penting:

- **server.cert**: File sertifikat SSL yang digunakan untuk mengenkripsi data yang ditransmisikan.
- **server.key**: Kunci privat yang terkait dengan sertifikat. Kunci ini harus dirahasiakan dan tidak boleh dibagikan ke publik.

### Pengaturan Sertifikat SSL

1. **Mendapatkan Sertifikat SSL**:
   Anda dapat menggunakan sertifikat SSL yang dihasilkan sendiri (self-signed) untuk tujuan pengujian lokal, atau membeli sertifikat dari otoritas sertifikat yang terpercaya untuk penggunaan di lingkungan produksi. Untuk membuat sertifikat SSL sendiri, Anda dapat menggunakan OpenSSL dengan perintah berikut:
   ```bash
   openssl req -nodes -new -x509 -keyout server.key -out server.cert



# Virtual Conference Space

## Description
Virtual Conference Space is an innovative platform for high-quality, interactive video conferencing designed to facilitate efficient communication and collaboration in the virtual world.

## Key Features
- High-quality video calls
- Interactive emojis
- Real-time chat
- Multi-user support
- Easy setup

## Requirements
Before running the application, ensure you have:
- Node.js (version 14 or newer)
- npm (Node Package Manager)

## Installation
Follow the steps below to set up the project in your local environment:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/erwin1412/Virtual-Conference-Space.git

2. **npm install**

3. **node server.js**

## SSL SetUp
openssl req -nodes -new -x509 -keyout server.key -out server.cert
