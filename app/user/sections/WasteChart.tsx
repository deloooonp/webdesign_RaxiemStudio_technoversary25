import Image from "next/image";
import { wasteDistribution } from "@/constants";

export default function WasteDistributionCard() {
  return (
    <div className="p-4 lg:p-[17px] border-[1.75px] border-gradient rounded-2xl bg-background">
      <div className="mb-6">
        <h3 className="text-bodyblack text-lg font-semibold">
          Distribusi Jenis Sampah
        </h3>
      </div>

      {/* Responsive layout with proper overflow handling */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-16 lg:px-8 min-w-0">
        {/* Pie Chart - Shrinkable */}
        <div className="shrink-0 w-40 h-40 md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] relative">
          <Image
            src="/img/user/pie-chart.png"
            fill
            alt="Pie Chart"
            className="object-contain"
          />
        </div>

        {/* Legend - Flexible width */}
        <div className="flex flex-col gap-3 flex-1 min-w-0 w-full md:w-auto">
          {wasteDistribution.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-between min-w-0"
            >
              {/* Color Box */}
              <div
                className="w-5 h-5 rounded shrink-0"
                style={{ backgroundColor: item.color }}
              />

              {/* Type & Percentage */}
              <div className="flex items-center flex-1 gap-4 min-w-0">
                <span className="text-sm md:text-base font-medium text-bodyblack truncate">
                  {item.type}
                </span>
                <span className="text-sm md:text-base font-medium text-bodyblack shrink-0">
                  {item.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
