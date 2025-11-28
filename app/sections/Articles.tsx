import Link from "next/link";
import { allArticles } from "@/constants";
import Image from "next/image";

export default function Articles() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:items-start items-center gap-[52px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-display-h2 font-semibold text-bodyblack">
              Belajar Kelola Sampah Lebih Cerdas
            </h2>
            <p className="text-body text-bodyblack max-w-[600px]">
              Mulai dari hal kecil, pahami gimana teknologi bisa bantu kita
              hadapi masalah lingkungan. Yuk baca insight dan tips dari
              komunitas peduli bumi.
            </p>
          </div>

          <Link
            href="/article"
            className="text-body font-medium bg-green-gradient bg-clip-text text-transparent border-b-2 border-green-primary hover:opacity-70 transition-opacity"
          >
            Selengkapnya
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-7 w-full">
          {allArticles.slice(-3).map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-end items-start gap-8 md:w-[363px] md:h-[600px] h-[400px] p-6 rounded-[20px] overflow-hidden"
            >
              <Image
                src={item.image}
                fill
                alt={item.excerpt}
                className="object-cover z-1 transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 z-2 opacity-90"
                style={{
                  background: `linear-gradient(180deg, rgba(7, 39, 31, 0.20) 50%, rgba(7, 39, 31, 1) 100%)`,
                }}
              />
              <div className="flex flex-col items-start gap-3.5 w-full max-w-[328px] z-3">
                <h3 className="text-display-h3 font-semibold text-white max-w-[247px]">
                  {item.title}
                </h3>
                <p className="text-body text-white line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              <Link
                href={`/article/${item.slug}`}
                className="flex items-center gap-2.5 py-0.5 border-b border-white text-white font-medium text-[18px] hover:opacity-80 transition-opacity z-3"
              >
                Baca Selengkapnya
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
