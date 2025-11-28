import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full py-12 px-4 mb-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-28">
        <div className="relative w-full lg:w-[466px] h-[265px] lg:h-auto lg:aspect-466/265">
          <Image
            src="/img/about/ourstory.png"
            alt="Community gathering"
            fill
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-6 w-full lg:w-xl">
          <h2 className="text-display-h2 font-semibold text-bodyblack">
            Dari Kampus ke Komunitas
          </h2>
          <div className="text-body text-bodyblack space-y-6">
            <p>
              Lingkungan belajar itu bukan cuma ruang kelas, slide presentasi,
              atau tugas yang menumpuk. Kadang hal paling bermakna justru muncul
              ketika mahasiswa mulai terlibat dengan dunia nyata. Di titik itu,
              teori berhenti jadi tulisan — dan berubah menjadi aksi. Di
              ruang-ruang kecil seperti workshop komunitas, kolaborasi mulai
              terbentuk, ide berkembang, dan rasa memiliki mulai tumbuh.
            </p>

            <p>
              Program ini lahir dari kebutuhan sederhana: menjembatani kampus
              dengan masyarakat. Banyak mahasiswa punya skill, energi, dan
              kreativitas, tapi nggak punya ruang untuk menerapkannya.
              Sebaliknya, komunitas punya kebutuhan dan potensi besar, tapi
              sering jalan sendirian. Lewat kegiatan yang disusun secara
              kolaboratif, kedua sisi saling menguatkan. Mahasiswa belajar
              mendengar, beradaptasi, dan bertanggung jawab, sementara komunitas
              mendapatkan dukungan, solusi, dan ruang pemberdayaan.
            </p>

            <p>
              Seiring berjalannya waktu, kegiatan ini berubah jadi lebih dari
              sekadar proyek. Ia jadi tempat di mana hubungan terbangun, ide
              diuji, dan keberanian muncul. Banyak peserta bilang bahwa proses
              ini membuka perspektif baru tentang kerja sama, keberlanjutan, dan
              dampak sosial. Dan itu tujuannya: menciptakan ruang belajar yang
              hidup, relevan, dan berkelanjutan — yang bukan cuma menambah
              pengetahuan, tapi juga membentuk karakter dan kontribusi nyata
              bagi masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
