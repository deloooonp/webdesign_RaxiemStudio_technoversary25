import { team } from "@/constants";
import Image from "next/image";

export default function Team() {
  return (
    <section className="w-full py-12 px-4 mb-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-[52px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-display-h2 font-semibold text-bodyblack">
            Tim di Balik Gerakan Hijau Digital
          </h2>
          <p className="text-body text-bodyblack">
            Satu langkah digital untuk sejuta dampak ekologis.
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-full">
          {team.map((item) => (
            <div
              key={item.name}
              className="relative md:w-[220px] md:h-[303px] w-xs h-[400px] rounded-[15px] overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 220px"
              />

              <div className="absolute inset-0 bg-linear-to-b from-transparent from-75% to-green-primary" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-0.5">
                <p className="text-body font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-body text-white">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
