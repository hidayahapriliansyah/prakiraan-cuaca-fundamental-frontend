Halo, Semuanya! Ini adalah project yang saya kerjakan untuk memenuhi submission kelas Belajar Fundamental Front-End Web Development Dicoding.
Alhamdulillah saya dapat kempatan untuk belajar di tingkat menengah program Lintasarta Cloudeka Digischool 2022. Alhamdulillah ya Allah ... seneng banget.

Alhamdulillah saya sudah berhasil menyelesaikan submission di kelas ini. Submission yang telah saya kerjakan sudah memenuhi kriteria :

1. Menggunakan standar ES6 sintaks dalam menuliskan kode JavaScript pada proyek yang dibuat.
2. Terdapat minimal satu penerapan custom element.
3. Menggunakan Webpack sebagai module bundler (tahap produksi).
4. Memanfaatkan Webpack sebagai environment dalam pengembangan proyek (tahap development).
5. Memanfaatkan API dengan menggunakan konsep AJAX dalam menampilkan data yang dinamis pada aplikasi yang dibuat.
6. Menentukkan tema aplikasi yang ingin dibuat, terkecuali tema Club Finder/Pencarian Klub Olahraga, Sepak Bola, atau Dicoding Books. Saya membuat aplikasi menampilkan prakiraan cuaca dari openweathermap.org.

Saya juga mengerjakan semua saran penilaian yaitu :
1. Menerapkan tampilan aplikasi yang menarik:
- Memiliki pemilihan warna yang pas dengan tema aplikasi. Saya memberi warna kombinasi putih, biru dan abu yang saya dapatkan dari pallete colorhunt.
- Tata letak elemen yang pas. Saya sudah menerapkan styling dengan vanila css se-fluent mungkin agar pengguna nyaman menggunakan aplikasi yang saya buat. 
Contoh : Tidak ada konten yang bertumpuk.
- Penggunaan font yang pas dengan tema. Saya menggunakan font Comfortaa yang bersifat cursive sehingga aplikasi memiliki 
- Penerapan padding, margin yang pas. Saya sangat peduli dengan penerapan white space (ruang kosong) yang diterapkan pada desain agar desain tidak terlihat penuh dan nyaman dinikmati berlama lama. Saya sudah beberapa kali merombak desain sehingga mendapatkan desain yang baik seperti saat ini.
- Responsif pada seluruh ukuran layar perangkat. Saya menerapkan media query untuk tampilan tablet dan desktop, dengan default desain mobile. Saya menerapkan konsep design mobile first. Saya menerapkan css flexbox dan grid sehingga pengaturan posisi komponen ui aplikasi dapat ditempatkan lebih mudah. (Ini seru banget asli).

2. Menggunakan package pihak ke-3 yang di-install melalui package manager (bukan CDN). Saya menggunakan Axios sebagai function request api.
3. Menuliskan kode dengan bersih dan konsisten. Saya menggunakan Eslint dengan style Air Bnb pada semua kode di folder src (saya tidak menerapkan eslint di luar folder tersebut seperti file webpack.common.js, di sana terdapat error import/no-extranous-dependencies yang mengharuskan plugin di instal sebagai dependencies bukan devDependencies). Pada styling ini saya hanya mematikan fitur linebreak-style karena menurut saya pengaturan itu tidak diperlukan.

4. Bereksplorasi pada penerapan webpack. Seperti: 
- Menggunakan Loader atau Plugin di luar yang diajarkan pada modul.
Selain menggunakn HtmlWebpackPlugin, Babel loader, Style dan CSS loader yang telah saya pelajari di materi ini,  menggunakan ImageMinimizerPlugin untuk me-minify ukuran gambar (jpeg, png, gif) pada assets sehingga ukuran aplikasi menjadi lebih kecil dan dapat dimuat lebih cepat.

Saya menggunakan html-loader agar semua src yang di-hardcode pada tag html di file template.html dapat dikenali sebagai require sehingga nanti pada saat bundling development maupun production, alamat src bisa dinamis.

Saya juga menggunakan CleanWebpackPlugin agar pada saat proses build production bundling tidak terjadi duplikasi file pada folder output (dist).

- Menerapkan optimasi bundle seperti minifying atau split chunk.
Saya menerapkan optimazion SplitChunk agar tidak terjadi duplikasi module. Saya juga menyetel performance agar tidak terjadi warning ketika ukuran asset lebih dari 244 kb. Itu terjadi karena pada saat proses bundling file bundle.js memiliki ukuran lebih dari 326 Kib yang mana itu disebabkan oleh dimuatnya package Axios yang digunakan sebagai dependencies yang memiliki kode berukuran cukup besar.

Alhamdulillah semua kriteria di atas sudah terpenuhi. Sekilas mengenai detail aplikasinya seperti ini:

Terdapat 3 API yang digunakan dalam aplikasi ini yaitu :
1. Openweathermap.org sebagai main api tempat data yang akan dikonsumsi.
2. Ipinfo.io sebagai pemberi koordinat latitude dan longitude yang selanjutnya dapat diolah menjadi parameter endpoint API openweathermap.org.
3. Restcountries.com sebagai pemberi info detail mengenai lokasi yang diberikan oleh Ipinfo.io juga sebagai pencari kode negara yang dapat digunakan pada endpoint API openweathermap.org.

Fitur-fitur pada aplikasi ini adalah :
1. Menampilkan prakiraan cuaca saat ini di lokasi pengguna mengakses aplikasi.
Ketika aplikasi dinyalakan, aplikasi akan langsung mengirim request pada Ipinfo untuk mendapatkan lokasi berupa latitude dan longitude, yang selanjutnya dijadikan sebagai parameter wajib pada endpoint openweathermap.org. Data lokasi diolah di 2 endpoint yaitu endpoint untuk mendapatkan data saat ini dan data cuaca 5 hari per 3 jam dari hari ini.

2. Menampilkan prakiraan cuaca beberapa jam ke depan di di lokasi pengguna mengakses aplikasi.
Data diambil dari endpoint Call 5 day / 3 hour forecast data openweathermap.org, yang difilter berdasarkan waktu saat ini.

3. Menampilkan prakiraaan cuaca berdasarkan lokasi yang dicari pengguna dengan input lokasi kota sebagai input utama, dan negara sebagai input optional.
Model input ini dipilih karena terdapat nama kota yang sama dari negara yang berbeda seperti Bali, Indonesia dan Bali, India. Jika input yang dimasukkan hanya Bali maka akan menghasilkan data prakiraan cuaca Bali Indonesia. Maka agar bisa mendapatkan data Bali India saya menambahkan fitur input negara.
Pada saat user melakukan input kota dan negara, aplikasi menggunakan method get sehingga data dapat disimpan di URL. Data di URL ini dirender menjadi object javascript yang menghasilkan data city, dan country. Data ini yang digunakan untuk melakukan request openweathermap berdasarkan nama kota.

4. Bilingual language.
Aplikasi menggunakan default bahasa Inggris. Namun jika lokasi yang terdeteksi memiliki kode negara ID maka tampilan aplikasi menggunakn bahasa Indonesia. Saya membuat folder dictionary yang di dalamnya terdapat 2 data json yaitu id.json dan en.json yang di dalamnya terdapat kamus mini yang digunakan agar tampilan bahasa di aplikasi dinamis.

5. Error handling.
Saya sudah menerapakn error handling pada setiap pemanggilan API dengan skenario :
- Menampilkan Network Error saat aplikasi offline.
- Menampilkan error jika nama kota yang dicari tidak valid. (Nama kota harus lengkap dan penulisannya harus benar). 
- Jika input nama kota benar, tapi input nama negara salah, maka data yang diolah oleh openweathermap hanya berdasarkan nama kota. 
- Jika input nama kota dan negara salah, maka akan menampilkan error.

Error handling di bawah ini dibuat agar jika ada pihak lain ingin mengembangkan aplikasi ini :
- Menampilkan error jika key pada api salah. API yang menggunakan key pada aplikasi ini adalah API Openweathermap dan Ipinfo. Saya membuat endpoint yang dipanggil menggunakan key api yang terdapat di folder api/key, harapannya agar ke depannya aplikasi ini dapat digunakan oleh orang lain dengan menggunakan key yang berbeda sesuai dengan akun yang terdaftar di masing-masing web API tersebut.
- Menampilkan error jika url path endpoint salah.
- Menampilkan error jika domain endpoint salah. (Sama dengan Network Error)
- Menampilkan error jika lokasi latitude atau longitude yang menjadi parameter endpoint openweathermap salah.

6. Live Clock berdasarkan lokasi pengguna. 
Saya membuat sendiri library aplikasi ini. Waktu yang ditampilkan adalah berdasarkan lokasi pengguna, bukan lokasi cuaca. Saya berharap ke depannya saya bisa mengembangkan fitur ini agar bisa sesuai dengan GTM lokasi yang ditampilkan. Namun untuk sekarang fitur ini sudah cukup sebagai pemanis dan juga tidak mengganggu pemenuhan kriteria submission.

7. Loading animation. 
Loading animation akan tampil ketika window masih menjalankan event load, dan element loading akan hilang jika DOMContentLoaded terpanggil. Saya menggunakan gif loading animation dari https://connect-hub.laurentian.ca/logout/spinner.gif

8. Iconnya bikinan saya sendiri huhuhu ... i_i
Data yang dihasilkan dari openweathermap mengandung kode icon yang dapat langsung dipakai sebagai argumen endpoint untuk memuat gambar dari openweathermap itu sendiri. Namun karena resolusi gambarnya kurang besar, sehingga tidak cocok untuk dijadikan sebagai main content yang mana harus menggunakan gambar dengan resolusi yang cukup. Akhirnya saya bikin sendiri deh pakai Corel Draw ... Saya mencari referensi gambar icon cuaca kebanyakan tidak sesuai dengan deskripsi kode icon nya. Jadi bikin sendiri deh ... biar hasilnya maksmimal ...

Alhamdulillah bisa dapet kesempatan belajar di kelas ini secara gratis dari program Lintasarta Cloudeka. Bagi saya ini pengalaman yang baru, karena saya juga baru belajar pemrograman. Semoga dengan pengerjaan tugas ini ke depannya saya bisa terus berkembang dan menjadi expert di bidang Web development. Meskipun cukup pusing ngerjainnya karena saya tipe orangnya lebih suka belajr dari audio visual huhuuhu ... tapi alhamdulillah sedikit sedikit sekarang saya sudah mulai terbiasa dengan membaca sumber dokumentasi langsung dari teknologi yang digunakan. Terima kasih Dicoding. Terima kasih Lintasarta Cloudeka. Selamat tahun baru 2023!
