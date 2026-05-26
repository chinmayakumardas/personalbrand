// import AboutHeroSection from "@/components/sections/aboutpage/AboutHeroSection";

// export default function About() {
//   return (
//     <main className="min-h-screen bg-background text-black overflow-hidden">
//       <AboutHeroSection />

   
//     </main>
//   );
// }


// app/about/page.tsx














"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden p-4 text-white">
      <section
        className="
          relative isolate overflow-hidden
          min-h-[calc(100vh-2rem)]
          w-full
          rounded-[12px]
          border border-white/10
          bg-black
          px-5 py-7
          sm:px-7 sm:py-8
          md:px-9 md:py-10
          lg:px-12 lg:py-12
        "
      >
        {/* GRID OVERLAY */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* GRADIENT GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col">
          
          {/* TOP LABEL */}
          <div className="pb-8">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
              [ About Me ]
            </p>
          </div>

          {/* ================= FIRST ROW ================= */}
          <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
            
            {/* LEFT STATS */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              
              <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02] p-8 min-h-[180px] flex flex-col justify-between">
                <div className="absolute -left-10 top-1/2 h-[120px] w-[120px] -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

                <h2 className="relative z-10 text-5xl font-semibold tracking-tight">
                  2+
                </h2>

                <p className="relative z-10 text-sm text-white/45">
                  Years Experience
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02] p-8 min-h-[180px] flex flex-col justify-between">
                <div className="absolute -left-10 top-1/2 h-[120px] w-[120px] -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

                <h2 className="relative z-10 text-5xl font-semibold tracking-tight">
                  25+
                </h2>

                <p className="relative z-10 text-sm text-white/45">
                  Projects Completed
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.02] p-8 min-h-[180px] flex flex-col justify-between">
                <div className="absolute -left-10 top-1/2 h-[120px] w-[120px] -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

                <h2 className="relative z-10 text-5xl font-semibold tracking-tight">
                  100%
                </h2>

                <p className="relative z-10 text-sm text-white/45">
                  Passion & Precision
                </p>
              </div>
            </div>

            {/* IMAGE CARD */}
            <div className="lg:col-span-3">
              <div
                className="
                  relative overflow-hidden
                  rounded-[18px]
                  border border-white/10
                  bg-white/[0.02]
                  min-h-[560px]
                "
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-end p-7">
                  <h2 className="text-[34px] font-semibold leading-none">
                    Chinmaya Das
                  </h2>

                  <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-white/60">
                    Creative Developer
                  </p>
                </div>
              </div>
            </div>

            {/* MAIN INTRO CARD */}
            <div className="lg:col-span-7">
              <div
                className="
                  relative overflow-hidden
                  rounded-[18px]
                  border border-white/10
                  bg-white/[0.02]
                  min-h-[560px]
                  p-8 md:p-12
                  flex flex-col justify-between
                "
              >
                {/* GLOW */}
                <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

                {/* TOP */}
                <div className="relative z-10">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                    The Developer
                  </p>

                  <h1
                    className="
                      mt-8
                      text-[42px]
                      sm:text-[60px]
                      md:text-[78px]
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.05em]
                      uppercase
                    "
                  >
                    DESIGNING
                    <br />
                    MODERN WEB
                    <br />
                    EXPERIENCES
                  </h1>
                </div>

                {/* CENTER TEXT */}
                <div className="relative z-10 max-w-[760px]">
                  <p className="text-[15px] leading-[2] text-white/60">
                    I’m a creative frontend developer focused on crafting modern,
                    immersive, and motion-driven digital experiences with strong
                    attention to detail and interaction.
                  </p>

                  <p className="mt-8 text-[15px] leading-[2] text-white/40">
                    My approach combines clean visual systems, smooth animation,
                    and thoughtful user experience to create interfaces that feel
                    premium, intuitive, and alive.
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  
                  <div>
                    <p className="text-sm text-white/45">
                      Based in India
                    </p>

                    <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/30">
                      Available Worldwide
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />

                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                      Open for Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          
          {/* ================= SECOND ROW ================= */}
          <div className="mt-3 grid flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
            
            {/* STORY / EXPERIENCE CARD */}
            <div className="lg:col-span-7">
              <div
                className="
                  relative overflow-hidden
                  rounded-[18px]
                  border border-white/10
                  bg-white/[0.02]
                  min-h-[560px]
                  p-8 md:p-12
                  flex flex-col
                "
              >
                {/* GRADIENT */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_40%)]" />

                {/* TIMELINE */}
                <div className="relative z-10 flex-1">
                  
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                    Experience Journey
                  </p>

                  <div className="mt-12 space-y-10">

                    {/* ITEM */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-white" />
                      <div className="absolute left-[5px] top-5 h-[110%] w-px bg-white/10" />

                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                          Frontend Developer
                        </h3>

                        <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                          Present
                        </span>
                      </div>

                      <p className="mt-3 max-w-[540px] text-[15px] leading-[1.9] text-white/55">
                        Building immersive interfaces with motion, modern layouts,
                        and premium interaction systems focused on user experience.
                      </p>
                    </div>

                    {/* ITEM */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-white/60" />
                      <div className="absolute left-[5px] top-5 h-[110%] w-px bg-white/10" />

                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                          UI / Motion Design
                        </h3>

                        <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                          2024
                        </span>
                      </div>

                      <p className="mt-3 max-w-[540px] text-[15px] leading-[1.9] text-white/55">
                        Focused on smooth transitions, visual storytelling,
                        and creating modern design systems for digital products.
                      </p>
                    </div>

                    {/* ITEM */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-white/30" />

                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                          Creative Exploration
                        </h3>

                        <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                          Started
                        </span>
                      </div>

                      <p className="mt-3 max-w-[540px] text-[15px] leading-[1.9] text-white/45">
                        Started experimenting with layouts, animations,
                        and frontend experiences driven by creativity.
                      </p>
                    </div>

                  </div>
                </div>

            
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="lg:col-span-5">
              <div
                className="
                  relative overflow-hidden
                  rounded-[18px]
                  border border-white/10
                  bg-white/[0.02]
                  min-h-[560px]
                  flex items-end
                  p-7
                "
              >
                {/* GLOBE */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      h-[260px] w-[260px]
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      shadow-[0_0_80px_rgba(255,255,255,0.05)]
                    "
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* LOCATION */}
                <div className="relative z-10">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">
                    Location
                  </p>

                  <h2 className="mt-4 text-[42px] font-semibold leading-none">
                    Kolkata, India
                  </h2>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}




