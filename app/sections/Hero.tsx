"use client";

import Link from "next/link";
import { clouds } from "@/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const cloudsRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    cloudsRef.current.forEach((cloud, i) => {
      if (!cloud) return;

      gsap.to(cloud, {
        x: 30,
        duration: 4 + i,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.to(imgRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 25,
      ease: "none",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <section className="w-full py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-8 lg:gap-25">
        <div className="flex flex-col items-start gap-6 w-full lg:w-1/2 md:pr-7">
          <h1 className="text-display-h2 lg:text-display-h1 font-bold text-bodyblack">
            Ubah Sampahmu Jadi Cuan
          </h1>
          <p className="text-body text-bodyblack md:w-md">
            Bangun kebiasaan hijau dari rumahmu. Kelola sampah lebih cerdas,
            transparan, dan berkelanjutan, semua lewat platform digital.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Link
              href="/register"
              className="px-5 py-4 md:text-body-medium text-sm bg-green-gradient text-background rounded-2xl hover:scale-110 transition"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[520px] z-1 ">
            <Image
              ref={imgRef}
              src="/img/home/hero.png"
              height={500}
              width={500}
              alt="Bumi"
              className="w-full h-auto block z-2"
            />

            {clouds.map((item, i) => (
              <img
                key={item.alt}
                ref={(el) => {
                  if (el) cloudsRef.current[i] = el;
                }}
                src="/img/home/awan.svg"
                alt={item.alt}
                className={` ${item.className} -z-1`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
