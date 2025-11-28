import Link from "next/link";

type CTASectionProps = {
  label: string;
  text: string;
  cta: string;
};

export default function CTASection({ label, text, cta }: CTASectionProps) {
  return (
    <>
      <section className="w-full px-4 mt-15 py-5">
        <div className="max-w-[968px] mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-display-h2 font-bold text-bodyblack text-center">
              {/* Setiap botol plastik yang kamu daur ulang, bumi semakin bernafas. */}
              {label}
            </h2>
            <p className="text-display-h3 font-medium text-bodyblack text-center">
              {/* Gabung sekarang dan jadi bagian dari gerakan Trash to Tech
              Movement. */}
              {text}
            </p>
          </div>
          <Link
            href="/user"
            className="px-5 py-4 bg-green-gradient text-white text-body font-medium rounded-2xl hover:shadow-lg transition-all hover:scale-110"
          >
            {/* Gabung Sekarang */}
            {cta}
          </Link>
        </div>
      </section>
      <div
        className="py-40"
        style={{
          background: "linear-gradient(180deg, #F5F5F5 0.02%, #156B56 92.54%)",
        }}
      ></div>
    </>
  );
}
