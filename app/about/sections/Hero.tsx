import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 px-4 mb-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[30px] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 flex items-center justify-center lg:h-[660px] h-[330px] overflow-hidden">
          <Image
            src="/img/about/hero-new.png"
            fill
            alt="Hero"
            className="object-cover z-1"
            quality={60}
          />
          <div className="absolute inset-0 z-2 bg-linear-to-b from-50% from-green-secondary/0 to-green-primary" />
          <div className="max-w-[1086px] flex flex-col items-center gap-6 md:text-center z-3">
            <h1 className="md:text-display-h1 text-display-h2  font-bold  text-white">
              Kami percaya, perubahan besar dimulai dari kebiasaan kecil.
            </h1>
            <p className="text-body text-white">
              Bank Sampah Digital hadir untuk menghubungkan masyarakat,
              teknologi, dan keberlanjutan dalam satu platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
