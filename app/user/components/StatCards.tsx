import { statCards } from "@/constants";

export default function StatCard() {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      {statCards.map(({ icon, label, text }) => (
        <div
          key={label}
          className="flex md:flex-col p-4 border-[1.75px] border-gradient rounded-2xl bg-background gap-3.5 md:flex-1 items-start justify-between"
        >
          {/* Icon */}
          <img
            src={icon}
            alt={label}
            className="w-10 h-10 md:w-8 md:h-8 object-contain shrink-0"
          />

          {/* Text Content */}
          <div className="flex flex-col gap-1 md:gap-2 w-full">
            <span className="text-sm text-bodyblack leading-tight">
              {label}
            </span>
            <span className="text-lg md:text-base font-semibold text-bodyblack">
              {text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
