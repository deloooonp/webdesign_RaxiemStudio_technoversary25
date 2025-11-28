import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function notFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center px-4 py-5">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-bodyblack mb-4">404</h1>
          <h1 className="text-4xl font-bold text-bodyblack mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Oops! Halaman ini belum tersedia atau sedang dibuat. Coba kembali ke
            beranda untuk melanjutkan eksplorasi.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-green-gradient text-white font-medium rounded-2xl hover:shadow-lg transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
