## Sertifikat SSL

Aplikasi **Virtual Conference Space** menggunakan HTTPS untuk mengamankan komunikasi antara klien dan server, memastikan bahwa data yang dikirim dan diterima tetap rahasia dan tidak dapat diakses oleh pihak ketiga. Untuk mengaktifkan HTTPS, Anda memerlukan dua file penting:

- **server.cert**: File sertifikat SSL yang digunakan untuk mengenkripsi data yang ditransmisikan.
- **server.key**: Kunci privat yang terkait dengan sertifikat. Kunci ini harus dirahasiakan dan tidak boleh dibagikan ke publik.

### Pengaturan Sertifikat SSL

1. **Mendapatkan Sertifikat SSL**:
   Anda dapat menggunakan sertifikat SSL yang dihasilkan sendiri (self-signed) untuk tujuan pengujian lokal, atau membeli sertifikat dari otoritas sertifikat yang terpercaya untuk penggunaan di lingkungan produksi. Untuk membuat sertifikat SSL sendiri, Anda dapat menggunakan OpenSSL dengan perintah berikut:
   ```bash
   openssl req -nodes -new -x509 -keyout server.key -out server.cert
# Virtual-Conference-Space