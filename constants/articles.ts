import { generateSlug } from "@/lib/utils";
import { Article } from "@/types";

export const allArticles: Article[] = [
  {
    id: 1,
    title: "Cara Ngurangin Sampah Plastik Tanpa Harus Zero Waste",
    excerpt: "Tips ringan buat ngurangin plastik sekali pakai tanpa ribet.",
    image: "/img/article/article1.png",
    popular: true,
    date: "12 Nov 2025",
    readTime: "4 Menit Baca",
    body: `Banyak orang punya mindset kalau hidup ramah lingkungan itu harus ekstrem. Harus nol sampah, harus selalu bawa jar kaca, harus punya alat makan stainless yang super aesthetic, dan harus punya rumah tanpa plastik sama sekali. Padahal kenyataannya gak begitu. Yang paling penting bukan sempurna — tapi konsisten mulai dari hal kecil yang bisa dipertahankan dalam jangka panjang.

Perubahan gaya hidup itu mirip olahraga. Kalau lu langsung maksa lari 10 km padahal sebelumnya jarang gerak, hasilnya cuma dua: capek, ujung-ujungnya berhenti, terus nyalahin diri sendiri. Tapi kalau lu mulai dari jalan kaki 10 menit tiap hari, lama-lama tubuh adaptasi dan jadi kebiasaan. Prinsip yang sama berlaku buat gaya hidup lebih eco-friendly: mulai pelan, tapi stabil.

Berikut beberapa langkah sederhana yang bisa lu mulai tanpa perlu modal besar atau effort ribet:

**1. Bawa tas belanja reusable.**  
   Kedengeran remeh, tapi kantong plastik sekali pakai adalah salah satu penyumbang sampah terbesar di kota besar. Tas belanja reusable bisa dipakai ratusan kali, dan kalau lu bawa terus di tas atau motor, lama-lama jadi refleks.

**2. Gunakan botol minum sendiri.**  
   Selain hemat, ini bisa ngurangin jumlah botol plastik yang cuma dipakai 5 menit tapi butuh ratusan tahun buat terurai. Gak perlu beli tumbler mahal — yang penting dipakai.

**3. Tolak sedotan plastik.**  
   Ini langkah paling ringan. Cuma perlu satu kalimat: “tanpa sedotan ya.” Semakin sering dilakukan, semakin otomatis.

Masalah utama bukan aksinya — tapi mindset. Banyak yang gagal karena nunggu momen yang ‘ideal’ atau ngerasa harus langsung sempurna. Padahal, kebiasaan kecil yang dilakukan setiap hari jauh lebih berdampak dibanding perubahan besar yang cuma bertahan seminggu.

Jadi, mulai aja dulu. Gak perlu nunggu siap.`,
  },
  {
    id: 2,
    title: "Jenis Sampah yang Paling cepet ngasih Poin",
    excerpt: 'List sampah paling "cuan" yang wajib banget kamu pilah di rumah.',
    image: "/img/article/article2.png",
    popular: true,
    date: "11 Nov 2025",
    readTime: "2 Menit Baca",
    body: `Gak semua jenis sampah punya nilai yang sama. Ada material yang gampang diproses ulang dan ada yang malah repot karena butuh teknologi tertentu. Makanya kalau tujuan lu bukan cuma buang tapi *dapet poin atau cuan*, penting buat tau mana yang paling bernilai.

Kategori yang biasanya punya poin lebih tinggi adalah jenis sampah yang punya demand besar di industri daur ulang. Contohnya, plastik PET dari botol minuman itu stabil permintaannya karena bisa diolah lagi jadi serat tekstil, kemasan baru, sampai material konstruksi. Hasilnya? Poinnya lebih stabil dan sering lebih tinggi dibanding plastik tipis kayak kemasan snack yang sulit diproses.

Berikut material yang paling 'cuan' buat dikumpulin:

**- Logam (aluminium dan besi)**  
  Nilainya lebih tinggi karena bisa diproses berkali-kali tanpa nurunin kualitas. Kaleng minum, panci rusak, atau baut-baut kecil? Simpan.

**- Plastik PET**  
  Ini primadonanya. Botol air minum, botol teh, dan beberapa botol minuman lainnya selalu punya value.

**- Karton tebal & kertas bersih**  
  Kertas itu masih punya nilai selama *gak basah, gak berminyak, dan gak sobek parah.* Kardus bekas belanja online? Simpen, lipat rapi, jangan remes.

Satu hal yang harus lu tau: cara nyimpen menentukan nilai. Barang yang udah kotor, lembek, bau, atau lembab bisa turunin poin bahkan nol.

Jadi, bukan cuma kumpulin—tapi rawat. Itu bedanya sampah biasa sama sampah bernilai.`,
  },
  {
    id: 3,
    title: "Mulai Daur Ulang dari Rumah dengan Langkah Simpel",
    excerpt: "Panduan cepat yang bisa langsung kamu terapin hari ini.",
    image: "/img/article/article3.png",
    popular: true,
    date: "10 Nov 2025",
    readTime: "3 Menit Baca",
    body: `Banyak orang mikir daur ulang butuh sistem rumit, aturan ribet, dan harus sediain banyak tempat sampah. Nyatanya, lo bisa mulai dari langkah kecil di rumah tanpa ubah banyak rutinitas.

Kuncinya bukan alat — tapi kebiasaan. Dan semua kebiasaan dimulai dari hal sederhana yang bisa dilakukan setiap hari tanpa ngerasa terbebani.

Mulai dari tiga kebiasaan dasar ini:

**1. Pisahkan sampah basah dan kering.**  
   Kalau masih nyampur, proses daur ulang jadi lebih susah dan bau makin cepat muncul.

**2. Bilas barang yang bisa didaur ulang.**  
   Gak perlu steril. Cukup hilangin sisa makanan atau minuman. Biar gak jamuran atau bau.

**3. Sediakan tempat penyimpanan khusus.**  
   Kotak bekas, ember, keranjang—apa pun bisa. Yang penting konsisten dan mudah aksesnya.

Hal yang bikin orang berhenti biasanya bukan susahnya proses—tapi karena kebiasaan gak kebangun. Jadi mulai dari langkah kecil, ulang tiap hari, sampai otomatis.

Karena daur ulang bukan sprint. Ini maraton kebiasaan.`,
  },
  {
    id: 4,
    title: "Cara Bedain Sampah Organik & Anorganik",
    excerpt:
      "Penjelasan paling simpel buat kamu yang masih suka bingung bedain dua jenis sampah ini.",
    image: "/img/article/article4.png",
    date: "9 Des 2025",
    readTime: "3 Menit Baca",
    body: `Cara paling gampang buat bedain sampah organik dan anorganik adalah dengan satu pertanyaan: *barang ini bisa kembali ke alam tanpa campur tangan pabrik gak?*

Kalau jawabannya *ya*, itu organik. Kalau butuh teknologi dan proses pabrik panjang, itu anorganik.

Contoh paling umum:

**- Organik:** sisa makanan, tulang, daun, kulit buah, kopi, dan sisa sayur. Semua ini bisa terurai dan berubah jadi kompos.

**- Anorganik:** plastik, kaca, kaleng, kertas kemasan, foil, aluminium, dan material buatan manusia lainnya.

Kenapa pemisahan ini penting? Karena sampah organik yang bercampur dengan plastik atau logam bikin proses daur ulang gagal. Kardus yang tadinya punya nilai bisa jadi gak kepake kalau kena minyak atau sisa makanan.

Satu langkah kecil: mulai dari dua tempat sampah dulu. Yang satu buat organik, yang satu buat anorganik. Dari situ, pelan-pelan kategori bisa dikembangin.`,
  },
  {
    id: 5,
    title: "Kebiasaan Eco-Friendly yang Gampang Banget Dilakuin",
    excerpt:
      "Kebiasaan kecil yang bikin hidup kamu lebih ramah lingkungan tanpa harus berubah total.",
    image: "/img/article/article5.png",
    date: "13 Nov 2025",
    readTime: "5 Menit Baca",
    body: `Banyak yang pengen hidup lebih eco-friendly tapi berhenti karena merasa harus langsung berubah total. Padahal perubahan kecil yang dilakukan konsisten jauh lebih efektif daripada perubahan besar yang cuma bertahan beberapa hari.

Kuncinya adalah membangun kebiasaan yang gak terasa berat.

Beberapa kebiasaan yang bisa mulai hari ini:

- Matikan lampu dan alat elektronik saat gak digunakan  
- Bawa reusable bottle atau cup saat beli minuman  
- Gunakan ulang kantong belanja  
- Pilih produk isi ulang daripada beli kemasan baru  

Awalnya mungkin kerasa ribet. Tapi setelah beberapa minggu, kebiasaan ini jadi refleks. Dan begitu udah jadi rutinitas, lu gak bakal balik ke cara lama.

Perubahan gaya hidup bukan soal besar — tapi soal keberlanjutan.`,
  },
  {
    id: 6,
    title: "Cara Ecovest Ngeolah Setoran Kamu Jadi Poin",
    excerpt:
      "Alur singkat dari proses setor sampai poin tercatat di dashboard kamu.",
    image: "/img/article/article6.png",
    date: "18 Nov 2025",
    readTime: "4 Menit Baca",
    body: `Setiap kali kamu setor sampah di sistem seperti Ecovest, ada serangkaian langkah yang terjadi sebelum poin muncul di dashboard. Banyak yang mikir prosesnya simpel: setor → dapet poin. Tapi realitanya ada verifikasi dan klasifikasi supaya nilai yang kamu terima sesuai kualitas sampah yang dikumpulkan.

Biasanya alurnya seperti ini:

**1. Penyortiran awal**  
   Petugas memisahkan jenis material berdasarkan kategori dan memastikan gak ada kontaminasi atau barang yang salah masuk.

**2. Penimbangan**  
   Semakin berat dan semakin bersih materialnya, semakin besar potensi poin yang didapat.

**3. Konversi ke nilai poin**  
   Sistem ngubah data berat + kategori → nilai poin berdasarkan standar yang ditetapkan.

**4. Validasi dan sinkronisasi**  
   Proses terakhir adalah verifikasi human + sistem supaya input gak salah.

Lamanya waktu proses tergantung antrean dan volume material. Tapi satu hal pasti: makin rapi dan bersih kamu setor, makin cepat proses berjalan.

Sederhana: kualitas = kecepatan + poin maksimal.`,
  },
  {
    id: 7,
    title: "Komunitas Daur Ulang Itu Seru? Ini Buktinya.",
    excerpt:
      "Cerita komunitas yang sering ngadain kegiatan bareng biar daur ulang makin fun.",
    image: "/img/article/article7.png",
    date: "22 Nov 2025",
    readTime: "3 Menit Baca",
    body: `Banyak yang nganggep kegiatan daur ulang itu membosankan, monoton, dan cuma soal kumpulin sampah. Tapi begitu ada komunitas, semuanya berubah.

Komunitas bikin kegiatan ini lebih fun, lebih meaningful, dan lebih sosial. Ada workshop kreatif buat bikin kerajinan dari barang bekas, ada sesi edukasi bareng, sampai kegiatan rutin setor sampah rame-rame.

Selain nambah skill dan wawasan, komunitas juga bantu jaga konsistensi. Karena jujur aja: ngerubah kebiasaan sendirian itu berat. Tapi kalau ada temen yang sama-sama jalanin, motivasi jadi lebih stabil.

Kadang, yang kita butuhin cuma ngerasa gak sendirian. Itu sudah cukup buat bikin perubahan jadi mungkin.`,
  },
  {
    id: 8,
    title: "Masalah Plastik di Indonesia & Cara Nguranginnya",
    excerpt:
      "Fakta singkat soal sampah plastik dan langkah kecil yang bisa kamu mulai hari ini.",
    image: "/img/article/article8.png",
    date: "25 Nov 2025",
    readTime: "5 Menit Baca",
    body: `Indonesia masih jadi salah satu penyumbang sampah plastik terbesar di dunia, dan sebagian besar datang dari plastik sekali pakai. Ironisnya, banyak dari plastik ini cuma dipake beberapa menit—tapi butuh ratusan tahun buat terurai.

Mungkin kita gak bisa ngilangin semuanya dalam waktu singkat. Tapi kita bisa pelan-pelan ngurangin.

Beberapa langkah sederhana:

-Bawa kantong belanja sendiri
-Pilih produk yang tidak over-packaging
-Pakai wadah yang bisa diisi ulang
-Hindari plastik sekali pakai kalau ada alternatifnya

Perubahan ini mungkin keliatan kecil waktu dilakukan sendirian. Tapi kalau jutaan orang ambil langkah yang sama, hasilnya signifikan.

Sampah plastik bukan sekadar masalah lingkungan — ini masalah kebiasaan. Dan kebiasaan bisa diubah.`,
  },
  {
    id: 9,
    title: "Cara Nyimpen Sampah Supaya Nilainya Tetap Tinggi",
    excerpt:
      "Tips ngerapiin, ngebersihin, dan nyimpen sampah biar pas setor lebih maksimal.",
    image: "/img/article/article9.png",
    date: "25 Nov 2025",
    readTime: "5 Menit Baca",
    body: `Sampah yang kamu kumpulkan sebenarnya bisa dibilang aset—asal disimpan dengan benar. Masalahnya, banyak yang kumpulin barang bekas asal-asalan: lembab, bau, bercampur, bahkan jamuran. Hasilnya? Nilai turun atau bahkan ditolak.

Kalau kamu mau nilai maksimal, simpan dengan cara ini:

-Bilas botol plastik dari sisa minuman
-Lipat kardus rapi tanpa merusak struktur
-Pisahkan material berdasarkan kategori (plastik, logam, kaca, kertas)
-Simpan di tempat yang kering dan gak lembab

Tujuannya simpel: pastikan material tetap bersih, kering, dan layak proses.

Karena pada akhirnya, *cara kamu menyimpan menentukan hasil yang kamu dapat*.`,
  },
  {
    id: 10,
    title: "5 Jenis Sampah yang Bisa Jadi Uang",
    excerpt:
      "Pelajari jenis-jenis sampah yang bisa kamu ubah jadi sumber penghasilan dan dampak lingkungan positif.",
    image: "/img/home/article1.png",
    date: "18 Nov 2025",
    readTime: "4 Menit Baca",
    body: `Gak semua sampah bisa dipakai ulang atau punya nilai ekonomis, tapi ada beberapa jenis material yang bisa jadi uang atau poin selama disimpan dengan benar.

Kategori yang paling bernilai:

**1. Plastik PET**
**2. Kaleng aluminium**
**3. Kaca**
**4. Karton & kertas tebal**
**5. Logam serbaguna**

Material-material ini banyak dicari karena bisa diproses ulang menjadi produk baru tanpa kehilangan kualitas secara signifikan.

Kalau kamu mulai kumpulin jenis-jenis ini secara rutin, hasilnya bisa jadi kebiasaan baik dan bonusnya: ada keuntungan nyata.

Daripada dibuang dan berakhir di TPA, jauh lebih baik dikembalikan ke sistem ekonomi.`,
  },
  {
    id: 11,
    title: "Cara Pisahkan Sampah Rumah Tangga",
    excerpt:
      "Mulai kenali cara mudah memisahkan sampah organik dan anorganik agar proses daur ulang jadi efisien dan berdampak nyata.",
    image: "/img/home/article2.png",
    date: "15 Nov 2025",
    readTime: "4 Menit Baca",
    body: `Pisahin sampah rumah tangga itu bukan soal ribet atau butuh banyak tempat. Kunci sebenarnya ada pada sistem yang simpel dan mudah dijalanin sehari-hari.

Langkah paling dasar:

-Siapkan dua tempat: satu organik, satu anorganik
-Bilas barang yang bisa didaur ulang
-Jangan tunggu sampai numpuk sebelum dipindahkan

Saat pemilahan jadi kebiasaan, proses lanjutan seperti daur ulang atau kompos akan jauh lebih mudah.

Satu rumah satu kebiasaan kecil bisa bikin efek besar di lingkungan. Mulainya dari dapur rumah sendiri.`,
  },
  {
    id: 12,
    title: "Zero Waste: Gaya Hidup atau Tantangan?",
    excerpt:
      "Yuk pahami prinsip zero waste lifestyle dan gimana kamu bisa mulai dari kebiasaan kecil sehari-hari.",
    image: "/img/home/article3.png",
    date: "13 Nov 2025",
    readTime: "5 Menit Baca",
    body: `Zero waste sering dianggap sebagai gaya hidup yang ekstrem, mahal, dan sulit diterapkan. Tapi makna sebenarnya jauh lebih sederhana: mengurangi sampah sebanyak mungkin melalui pilihan yang lebih sadar.

Mulai dari hal kecil:

-Bawa wadah makanan sendiri
-Pilih produk yang bisa diisi ulang
-Belanja seperlunya, bukan sekadarnya

Tujuannya bukan sempurna — tapi progres. Semakin sering kita membuat pilihan kecil yang lebih baik, semakin besar dampaknya dalam jangka panjang.

Karena hidup minim sampah bukan tujuan akhir — itu perjalanan.`,
  },
].map((article) => ({
  ...article,
  slug: generateSlug(article.title),
}));
