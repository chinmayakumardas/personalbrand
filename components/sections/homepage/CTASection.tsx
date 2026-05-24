


"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // initial state (hidden)
      gsap.set(".cta-fade", {
        opacity: 0,
        y: 70,
      });

      // animate on scroll
      gsap.to(".cta-fade", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background px-4">
      <div className="max-w-[1400px] mx-auto py-20 md:py-32 flex flex-col items-center text-center">

        {/* LABEL */}
        <div className="cta-fade text-[12px] tracking-[0.2em] uppercase text-black/60 mb-6">
          [ SERIOUSLY ]
        </div>

        {/* HEADING */}
        <h2
          className="
            cta-fade
            text-[40px]
            sm:text-[80px]
            md:text-[120px]
            lg:text-[140px]
            font-semibold
            leading-[0.9]
            tracking-tight
            uppercase
            text-black
          "
        >
          LET’S CUT <br /> THE BS.
        </h2>

        {/* BUTTON */}
        <button
          onClick={() => router.push("/contact")}
          className="
            cta-fade
            mt-10

            bg-black
            text-white

            px-6 py-3
            rounded-xl

            text-[12px]
            tracking-widest
            uppercase

            flex items-center gap-2

            hover:opacity-90
            transition
          "
        >
          GET A CUSTOM QUOTE →
        </button>

      </div>
    </section>
  );
}