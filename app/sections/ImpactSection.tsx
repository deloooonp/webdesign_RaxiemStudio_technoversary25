import Image from "next/image";
import { impacts } from "@/constants";

export default function JejakDigital() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1047px] mx-auto flex flex-col justify-center items-center gap-10 md:gap-[52px]">
        <div className="flex flex-col justify-center items-center gap-2.5">
          <h2 className="text-center text-display-h2 font-semibold text-bodyblack">
            Dampak Nyata dari Gerakan Digital
          </h2>
          <p className="w-full text-center text-body text-bodyblack">
            Setiap sampah yang kamu kumpulkan punya cerita. Bareng, kita ubah
            sampah jadi solusi & Dampak Nyata
          </p>
        </div>
        <Image
          src="/img/home/jejakdigital.png"
          width={1047}
          height={394}
          alt="Jejak Digital Indonesia"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {impacts.map((item) => (
          <div
            key={item.text}
            className="flex flex-col justify-center gap-[9px] h-[124px] p-[17px] md:text-start text-center"
          >
            <p className="text-display-h2 font-bold bg-green-gradient bg-clip-text text-transparent min-h-12">
              {item.label}
            </p>
            <p className="lg:text-display-h3 text-body-semibold font-medium bg-green-gradient bg-clip-text text-transparent lg:w-full">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
