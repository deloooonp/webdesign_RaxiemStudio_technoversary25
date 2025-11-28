"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { howItWorks } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".how-it-works",
        start: isDesktop ? "top 50%" : "top 10%",
        toggleActions: "play none none none",
      },
    });

    const cards = gsap.utils.toArray<HTMLElement>(".how-card");
    const lines = gsap.utils.toArray<HTMLElement>(".how-line");

    if (!cards.length) return;

    cards.forEach((card, i) => {
      const textElements = card.querySelectorAll<HTMLElement>("h3, p");

      card.classList.add("bg-green-gradient");
      card.style.backgroundSize = isDesktop ? "0% 100%" : "100% 0%";
      card.style.backgroundRepeat = "no-repeat";
      card.style.backgroundPosition = isDesktop ? "left center" : "center top";

      tl.to(card, {
        backgroundSize: "100% 100%",
        duration: 1,
        ease: "power1.out",
      });

      tl.to(
        textElements,
        {
          color: "#fff",
          duration: 0.7,
          ease: "power1.out",
        },
        "<"
      );

      const inner = lines[i]?.querySelector<HTMLElement>(".how-line-inner");
      if (inner) {
        tl.to(inner, {
          [isDesktop ? "width" : "height"]: "100%",
          duration: 1,
          ease: "power1.inOut",
        });
      }
    });

    // cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="how-it-works w-full py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-[52px]">
        <h2 className="text-display-h2 font-semibold text-bodyblack">
          Cara Kerja Kami
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center lg:gap-0 w-full">
          {howItWorks.map((item, index) => (
            <div key={item.alt} className="contents">
              <div className="how-card flex flex-col items-center gap-6 p-6 bg-background rounded-[20px] w-full max-w-[266px] lg:mt-0 border-[1.75px] border-section-alt">
                <div className="p-2.5">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-[75px] h-[75px]"
                  />
                </div>
                <div className="flex flex-col items-start gap-3.5 w-full">
                  <h3 className="text-display-h3 font-medium text-bodyblack text-center w-full">
                    {item.title}
                  </h3>
                  <p className="text-body text-bodyblack text-center h-[92px]">
                    {item.text}
                  </p>
                </div>
              </div>
              {index < howItWorks.length - 1 && (
                <div className="how-line md:w-[140px] md:h-[3px] w-[3] h-[100px] bg-section-alt relative overflow-hidden rounded-full">
                  <div className="how-line-inner absolute left-0 top-0 md:h-full md:w-0 w-full h-0 bg-[#3C9861]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
