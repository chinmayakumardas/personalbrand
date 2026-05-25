
"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="bg-background p-4">
      <div
        className="
          relative isolate overflow-hidden
          h-[calc(100vh-2rem)]
          w-full rounded-[12px]
          border border-white/10
          px-5 py-7
          sm:px-7 sm:py-8
          md:px-9 md:py-10
          lg:px-12 lg:py-12
        "
        style={{
          background: `
            linear-gradient(135deg, #0a0a0a 0%, #000000 50%, #0f0f0f 100%),

            radial-gradient(circle at 50% 45%, rgba(255,255,255,0.08), transparent 55%),
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04), transparent 50%),
            radial-gradient(circle at 80% 25%, rgba(255,255,255,0.03), transparent 50%),
            radial-gradient(circle at 30% 85%, rgba(255,255,255,0.03), transparent 55%)
          `,
        }}
      >
        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.92)_100%)]" />

        {/* CONTENT */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
          
          {/* LEFT */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              Creative Developer
            </p>

            <h1
              className="
                mt-6
                cta-fade
                text-[40px]
                sm:text-[80px]
                md:text-[100px]
                
                font-semibold
                leading-[0.9]
                tracking-tight
                uppercase
                text-white
              "
            >
              MOVING
              <br />
              BRANDS
              <br />
              FORWARD
            </h1>

            <p className="mt-6 max-w-[520px] text-white/60 text-[14px] leading-[1.7]">
              Every brand carries a story shaped into a clear path that users
              can understand and follow without confusion or friction.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="
                  group bg-white text-black
                  px-6 py-3 rounded-xl
                  text-[12px] tracking-widest uppercase
                  flex items-center gap-2
                  hover:opacity-90 transition
                  cursor-pointer
                "
              >
                GET A CUSTOM QUOTE
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => router.push("/work")}
                className="
                  h-11 rounded-xl border border-white/10
                  bg-white/5 px-6 text-[12px]
                  uppercase tracking-widest text-white
                  backdrop-blur-md transition
                  hover:bg-white/10
                  cursor-pointer
                "
              >
                Explore Work
              </button>
            </div>
          </div>

          <div className="hidden lg:flex" />
        </div>

        {/* YEAR */}
        <div className="absolute bottom-5 right-5 lg:bottom-10 lg:right-10 font-black text-white/[0.05] text-[clamp(5rem,10vw,10rem)] pointer-events-none">
          2026
        </div>

        {/* SCROLL */}
       <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-white/60">
  Scroll to explore
  <ArrowDown className="h-4 w-4" />
</div>
      </div>
    </section>
  );
}