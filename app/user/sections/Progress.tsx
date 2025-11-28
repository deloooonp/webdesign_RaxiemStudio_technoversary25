import Image from "next/image";

export default function ProgressChart() {
  return (
    <div className="p-4 lg:p-[17px] border-[1.75px] border-gradient rounded-2xl bg-background">
      <div className="flex flex-col gap-4 mb-4">
        <h3 className="text-bodyblack text-lg font-medium">
          Progres Bulan Ini
        </h3>
        <div className="flex flex-col">
          <span className="text-bodyblack text-lg font-semibold">25,6 kg</span>
          <span className="text-green-secondary text-sm">+12,8 kg ↑</span>
        </div>
      </div>

      {/* Chart container - responsive height */}
      <div className="relative w-full h-[180px] sm:h-[220px] lg:h-60 mb-4">
        <Image
          src="/img/user/chart.png"
          alt="Progress chart"
          fill
          className="object-contain"
        />
      </div>

      {/* Months - Responsive text */}
      <div className="flex justify-between items-center pt-4 border-t-[0.75px] border-section-alt text-xs sm:text-sm">
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span className="bg-green-gradient bg-clip-text text-transparent font-medium">
          Oct
        </span>
      </div>
    </div>
  );
}
