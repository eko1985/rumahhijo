RUMAH HIJO · STANDAR PPI — VERSI APLIKASI (PWA)
================================================

Folder ini adalah aplikasi lengkap yang bisa diinstal di HP dan laptop,
dan tetap bisa dipakai TANPA INTERNET setelah dibuka pertama kali
(semua 35 contoh dokumen ikut tersimpan, ±11 MB).

Aplikasi harus dibuka lewat alamat https:// agar bisa diinstal.
Membuka index.html langsung dari folder (file://) tidak bisa diinstal.


A. MENGONLINEKAN (pilih salah satu, gratis)
-------------------------------------------
1) Netlify Drop — paling cepat, tanpa akun teknis
   - Ekstrak ZIP ini.
   - Buka https://app.netlify.com/drop di laptop.
   - Seret folder "rumah-hijo-pwa" ke halaman tersebut.
   - Tunggu selesai, salin alamat https://....netlify.app yang muncul.
   - (Disarankan login/daftar agar situs tidak terhapus otomatis.)

2) GitHub Pages
   - Buat repository baru, unggah SEMUA isi folder (index.html di paling atas).
   - Settings → Pages → Source: "Deploy from a branch" → branch main, folder / (root).
   - Alamatnya: https://<username>.github.io/<nama-repo>/

3) Hosting milik RS/organisasi
   - Unggah seluruh isi folder ke satu direktori yang bisa diakses lewat https.


B. MENGINSTAL
-------------
Android (Chrome)  : buka alamatnya → tombol "Instal aplikasi" di aplikasi,
                    atau menu ⋮ → "Instal aplikasi".
iPhone/iPad       : buka di Safari → tombol Bagikan → "Tambahkan ke Layar Utama".
Laptop (Chrome/Edge): ikon instal di ujung kanan bilah alamat, atau menu ⋮ →
                    "Instal Rumah HIJO".

Setelah tulisan "✓ Siap dipakai offline" muncul di aplikasi, semua halaman dan
dokumen sudah tersimpan dan aman dipakai di ruangan tanpa sinyal.


C. MEMPERBARUI ISI
------------------
Ganti file yang perlu diubah, lalu unggah ulang seluruh folder.
File sw.js berisi nomor versi; aplikasi yang sudah terinstal akan
mengambil versi baru saat dibuka berikutnya dengan internet.


Isi folder
----------
index.html            halaman aplikasi
manifest.webmanifest  identitas aplikasi (nama, ikon, warna)
sw.js                 penyimpan offline
icons/                ikon aplikasi
real/                 gambar pratinjau setiap halaman dokumen
files/                file Word/Excel asli (sudah dirapikan) + ZIP semua dokumen
