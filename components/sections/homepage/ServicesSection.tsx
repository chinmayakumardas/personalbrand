



// "use client";


// export default function ServiceSection() {




//   return (
//     <section className="p-4">
//       <div
//         className="
//           min-h-[calc(100vh-2rem)]
//           w-full
//           rounded-[14px]

//           px-4 md:px-6
//           py-12 md:py-16

//           flex flex-col justify-between
//           border border-foreground/10
//            bg-foreground
//         "
//       >

   

//       </div>
//     </section>
//   );
// }








// "use client";
// import Image from "next/image";
// export default function ServiceSection() {
//   const services = [
//     {
//       title: "Web Design & Development",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     },
//     {
//       title: "Brand Identity",
//       img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
//     },
//     {
//       title: "Motion & 3D",
//       img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
//     },
//   ];

//   const tools = [
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
//     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
//   ];

//   return (
//     <section className="p-4">
//       <div
//         className="
//           min-h-[calc(100vh-2rem)]
//           w-full
//           rounded-[14px]
//           px-4 md:px-6
//           py-12 md:py-16
//           flex flex-col justify-between
//           border border-foreground/10
//           bg-foreground
//         "
//       >
//         {/* ================= TOP ================= */}
//         <div>
//           <div className="text-xs tracking-[0.25em] text-background/50 mb-6">
//             [ SERVICES & EXPERTISE ]
//           </div>

//           <h2 className="text-4xl md:text-6xl font-semibold text-background tracking-tight leading-[1.05] max-w-4xl">
//             Selected Areas of Work
//           </h2>

//           <p className="mt-6 text-background/60 max-w-xl text-sm leading-relaxed">
//            Working on frontend development and UI design, focusing on building clean layouts and improving usability through hands-on projects.
//           </p>

//           {/* CARDS */}
//           <div className="mt-10 grid md:grid-cols-3 gap-6">
//             {services.map((item, i) => (
//               <div
//                 key={i}
//                 className="
//                   relative
//                   h-[550px]
//                   rounded-xl
//                   overflow-hidden
//                   border border-background/10
//                   group
//                 "
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={item.img}
//                   alt=""
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* DARK OVERLAY */}
//                 <div className="absolute inset-0 bg-black/40" />

//                 {/* MOUSE LIGHT EFFECT */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute inset-0
//                     opacity-0 group-hover:opacity-100
//                     transition
//                     bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]
//                   "
//                 />

//                 {/* TEXT */}
//                 <div className="absolute bottom-6 left-5 text-sm text-background/90">
//                   {item.title}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

// {/* ================= TOOLBOX ================= */}
// <div className="mt-16 border border-background/10 rounded-xl py-6">

//   {/* MAIN ROW */}
//   <div className="flex flex-col md:flex-row md:items-center gap-6">

//     {/* LEFT TEXT */}
//     <div className="px-6 md:w-[250px] flex-shrink-0">
//       <div className="text-sm text-background">
//         Everyday’s Toolbox
//       </div>
//       <div className="text-xs text-background/50">
//         Tools I rely on daily to build and ship.
//       </div>
//     </div>

//     {/* RIGHT MARQUEE */}
//     <div className="flex-1 overflow-hidden relative">

//       {/* fade edges */}
//       <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-foreground to-transparent z-10" />
//       <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-foreground to-transparent z-10" />

//       {/* SCROLL AREA */}
//       <div className="flex animate-scroll gap-6 w-max pr-6">

//         {[...tools, ...tools].map((tool, i) => (
//           <div
//             key={i}
//             className="
//               w-[60px] h-[60px]
//               flex items-center justify-center
//               border border-background/10
//               rounded-lg
//               bg-background/5
//               flex-shrink-0
//             "
//           >
//             <img src={tool} className="w-6 h-6 opacity-80" />
            
//           </div>
//         ))}

//       </div>
//     </div>

//   </div>
// </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";

export default function ServiceSection() {
  const services = [
    {
      title: "Web Design & Development",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Brand Identity",
      img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    },
    {
      title: "Motion & 3D",
      img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
    },
  ];

  const tools = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  ];

  return (
    <section className="p-4">
      <div
        className="
          min-h-[calc(100vh-2rem)]
          w-full
          rounded-[14px]
          px-4 md:px-6
          py-12 md:py-16
          flex flex-col justify-between
          border border-foreground/10
          bg-foreground
        "
      >
        {/* ================= TOP ================= */}
        <div>
          <div className="text-xs tracking-[0.25em] text-background/50 mb-6">
            [ WHAT I WORK ON ]
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-background tracking-tight leading-[1.05] max-w-4xl">
            Selected Areas of Work
          </h2>

          <p className="mt-6 text-background/60 max-w-xl text-sm leading-relaxed">
            Working on frontend development and UI design, focusing on building clean layouts and improving usability through hands-on projects.
          </p>

          {/* CARDS */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div
                key={i}
                className="
                  relative
                  h-[550px]
                  rounded-xl
                  overflow-hidden
                  border border-background/10
                  group
                "
              >
                {/* IMAGE */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* LIGHT EFFECT */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]
                  "
                />

                {/* TEXT */}
                <div className="absolute bottom-6 left-5 text-sm text-background/90">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TOOLBOX ================= */}
        <div className="mt-16 border border-background/10 rounded-xl py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">

            {/* LEFT TEXT */}
            <div className="px-6 md:w-[250px] flex-shrink-0">
              <div className="text-sm text-background">
                Everyday’s Toolbox
              </div>
              <div className="text-xs text-background/50">
                Tools I rely on daily to build and ship.
              </div>
            </div>

            {/* RIGHT SCROLL */}
            <div className="flex-1 overflow-hidden relative">

              {/* fade */}
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-foreground to-transparent z-10" />
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-foreground to-transparent z-10" />

              <div className="flex animate-scroll gap-6 w-max pr-6">
                {[...tools, ...tools].map((tool, i) => (
                  <div
                    key={i}
                    className="
                      w-[60px] h-[60px]
                      flex items-center justify-center
                      border border-background/10
                      rounded-lg
                      bg-background/5
                      flex-shrink-0
                    "
                  >
                    <Image
                      src={tool}
                      alt="tool"
                      width={24}
                      height={24}
                      className="opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
