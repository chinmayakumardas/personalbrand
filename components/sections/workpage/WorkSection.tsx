
// "use client";

// import Image from "next/image";
// import { works } from "@/data/works";

// export default function WorkSection() {
//   return (
//     <section className="bg-background p-4">
//       <div className="relative w-full">

//         {/* HERO */}
//         <div
//           className="
//             relative
//             overflow-hidden
//             flex items-center justify-center
//             min-h-[calc(90vh-2rem)]
//             w-full
//             rounded-t-[14px]
//           "
//           style={{
//             background: `
//               radial-gradient(circle at center, rgba(80,160,255,0.22) 0%, transparent 38%),
//               radial-gradient(circle at top, rgba(0,119,255,0.18) 0%, transparent 45%),
//               linear-gradient(
//                 180deg,
//                 #0e71bd 0%,
//                 #0059df 18%,
//                 #0047b3 38%,
//                 #001a4d 58%,
//                 #000814 78%,
//                 #000000 100%
//               )
//             `,
//           }}
//         >
//           <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[120px]" />

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

//           <h1 className="relative z-10 text-[18vw] leading-none font-semibold tracking-[-0.08em] text-white uppercase">
//             Work
//           </h1>
//         </div>

//         {/* LIST */}
//         <div className="relative w-full rounded-b-[14px] bg-black overflow-hidden">

//           {/* floating preview */}
//           <div
//             id="preview"
//             className="
//               pointer-events-none
//               fixed
//               right-6
//               top-1/2
//               z-50
//               hidden
//               h-[220px]
//               w-[360px]
//               -translate-y-1/2
//               overflow-hidden
//               opacity-0
//               md:block
//             "
//           >
//             <Image
//               id="preview-image"
//               src=""
//               alt="preview"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/20" />
//           </div>

//           <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-6">

//             {/* rows */}
//             <div className="flex flex-col gap-6">

//               {works.map((work) => (
//                 <div
//                   key={work.id}
//                   onMouseEnter={() => {
//                     const preview = document.getElementById("preview");
//                     const image = document.getElementById("preview-image") as HTMLImageElement | null;

//                     if (preview && image) {
//                       preview.style.opacity = "1";
//                       image.src = work.image;
//                     }
//                   }}
//                   onMouseLeave={() => {
//                     const preview = document.getElementById("preview");
//                     if (preview) preview.style.opacity = "0";
//                   }}
//                   className="
//                     grid
//                     grid-cols-[1.6fr_1fr_0.5fr]
//                     items-center
//                     gap-4 md:gap-8
//                     cursor-pointer
//                   "
//                 >
//                   {/* title */}
//                   <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white leading-snug">
//                     {work.title}
//                   </h2>

//                   {/* category */}
//                   <p className="text-[11px] sm:text-xs md:text-sm text-white/50 text-center">
//                     {work.category}
//                   </p>

//                   {/* year */}
//                   <p className="text-[11px] sm:text-xs md:text-sm text-white/40 text-right">
//                     {work.year}
//                   </p>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import Image from "next/image";
import { useRef } from "react";
import { works } from "@/data/works";

export default function WorkSection() {
  const previewRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-background p-4">
      <div className="relative w-full">

        {/* HERO */}
        <div
          className="
            relative
            overflow-hidden
            flex items-center justify-center
            min-h-[calc(90vh-2rem)]
            w-full
            rounded-t-[14px]
          "
          style={{
            background: `
              radial-gradient(circle at center, rgba(80,160,255,0.22) 0%, transparent 38%),
              radial-gradient(circle at top, rgba(0,119,255,0.18) 0%, transparent 45%),
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
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

          <h1 className="relative z-10 text-[18vw] leading-none font-semibold tracking-[-0.08em] text-white uppercase">
            Work
          </h1>
        </div>

        {/* LIST */}
        <div className="relative w-full rounded-b-[14px] bg-black overflow-hidden">

          {/* CURSOR PREVIEW */}
          <div
            ref={previewRef}
            className="
              pointer-events-none
              fixed
              top-0 left-0
              z-50

              h-[140px] w-[220px]

              opacity-0 scale-95
              transition-all duration-200

              overflow-hidden
              hidden md:block
            "
          >
            <Image
              id="preview-image"
              src=""
              alt="preview"
              fill
              sizes="220px"
              className="object-cover rounded-md"
            />
          </div>

          <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-6">

            <div className="flex flex-col gap-6">

              {works.map((work) => (
                <div
                  key={work.id}
                  onMouseEnter={() => {
                    const preview = previewRef.current;
                    const image = document.getElementById("preview-image") as HTMLImageElement | null;

                    if (preview && image) {
                      preview.style.opacity = "1";
                      preview.style.transform = "scale(1)";
                      image.src = work.image;
                    }
                  }}
                  onMouseLeave={() => {
                    const preview = previewRef.current;
                    if (preview) {
                      preview.style.opacity = "0";
                      preview.style.transform = "scale(0.95)";
                    }
                  }}
                  onMouseMove={(e) => {
                    const preview = previewRef.current;
                    if (preview) {
                      preview.style.left = `${e.clientX + 20}px`;
                      preview.style.top = `${e.clientY + 20}px`;
                    }
                  }}
                  className="
                    grid
                    grid-cols-[1.6fr_1fr_0.5fr]
                    items-center
                    gap-4 md:gap-8
                    cursor-pointer
                  "
                >
                  {/* TITLE */}
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white leading-snug">
                    {work.title}
                  </h2>

                  {/* CATEGORY */}
                  <p className="text-[11px] sm:text-xs md:text-sm text-white/50 text-center">
                    {work.category}
                  </p>

                  {/* YEAR */}
                  <p className="text-[11px] sm:text-xs md:text-sm text-white/40 text-right">
                    {work.year}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}