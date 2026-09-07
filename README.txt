WEBSITE BUCIN MONOKROM

1. Copy isi folder ini ke:
   C:\websitebucin

2. Foto harus berada di:
   assets\images\1.jpg
   assets\images\2.jpg
   ...
   assets\images\10.jpg

3. Lagu sudah bernama:
   assets\audio\monokrom.mp3

4. Buka project menggunakan VS Code + Live Server.
   Jangan hanya double-click index.html jika browser bermasalah membaca audio lokal.

5. Cara menjalankan:
   - Buka folder C:\websitebucin di VS Code
   - Klik kanan index.html
   - Open with Live Server
   - Tekan Ctrl + F5 pada browser setelah mengganti file

6. Jika foto atau lagu tidak muncul, pastikan nama folder adalah:
   assets

   BUKAN:
   asessts

7. Sinkronisasi:
   Buka js\script.js lalu cari:
   const scenes = [
   const lyricCues = [

   Angka "time" menggunakan satuan detik.
   Contoh:
   { time: 22.7, lyric: "Lembaran foto hitam putih" }

8. File sudah responsive untuk laptop dan HP.
