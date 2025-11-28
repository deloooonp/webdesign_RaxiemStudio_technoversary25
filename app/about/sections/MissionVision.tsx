import { misivisi } from "@/constants";

export default function MissionVision() {
  return (
    <section className="w-full py-12 px-4 mb-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-[52px]">
        <h2 className="text-display-h2 font-semibold text-bodyblack">
          Misi & Visi
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-[897px]">
          {misivisi.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-6 p-6 bg-green-gradient rounded-[20px] flex-1"
            >
              <div className="shrink-0">
                <img src={item.icon} alt={item.label} className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-display-h3 font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-body text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
