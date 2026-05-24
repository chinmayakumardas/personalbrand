





import Link from "next/link";


export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-black overflow-hidden px-4 pt-4">
    
  
      <div
        className="
          relative isolate overflow-hidden
          min-h-[calc(100vh-2rem)]
          w-full rounded-[12px]
        "
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(80,160,255,0.16) 0%,
              transparent 40%
            ),

            radial-gradient(
              circle at top,
              rgba(0,119,255,0.12) 0%,
              transparent 45%
            ),

            linear-gradient(
              180deg,
              #0e71bd 0%,
              #0059df 18%,
              #0047b3 38%,
              #001a4d 58%,
              #000814 78%,
              #000000 100%
            )
          `,
        }}
      >
        {/* glow */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2 z-0
            h-[360px] w-[360px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-blue-400/10
            blur-[120px]
          "
        />

        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

        {/* CONTENT */}


<div className="relative z-10 flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center overflow-hidden px-6 text-center text-white">

  {/* big background number */}
  <p className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-black text-[40vw] text-white/5 leading-none">
    404
  </p>

  {/* single content block */}
  <div className="relative z-10 max-w-md">
    <p className="text-xl font-medium leading-snug text-white/90">
      The page you’re looking for doesn’t exist or has been moved elsewhere.
    </p>

    {/* buttons */}
    <div className="mt-8 flex justify-center gap-3">
      <Link
        href="/"
        className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105"
      >
        Go back
      </Link>

      <Link
        href="/contact"
        className="rounded-lg border border-white/30 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition hover:scale-105"
      >
        Contact
      </Link>
    </div>
  </div>

</div>
      </div>
    
   
    </main>
  );
}


