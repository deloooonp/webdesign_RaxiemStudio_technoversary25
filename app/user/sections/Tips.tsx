import Link from "next/link";

export default function Tips() {
  return (
    <div className="flex flex-col gap-[22px] ">
      <div className="flex items-start gap-6 px-6 py-13 rounded-[20px] border-gradient">
        <img
          src="/icons/about/visi.svg"
          alt="Tips"
          className="bg-green-gradient rounded-md"
        />
        <div className="flex flex-col gap-[14.83px]">
          <div className="flex flex-col gap-[15px]">
            <h4 className="text-display-h3 font-medium text-bodyblack">
              Tahukah Kamu?
            </h4>
            <p className="text-body text-bodyblack w-full">
              Setiap 1 kg plastik yang didaur ulang bisa mengurangi emisi karbon
              hingga 1,5 kg CO₂.
            </p>
          </div>
          {/* <Link
            href="/edukasi"
            className="flex items-center gap-2.5 py-0.5 border-b border-green-secondary w-fit"
          >
            <span className="text-body bg-green-gradient bg-clip-text text-transparent">
              Baca Selengkapnya
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
