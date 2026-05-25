



// export default function AboutHeroSection() {
//   return (
//     <section className="p-4 bg-background">
//       <div
//         className="
//           min-h-[calc(100vh-2rem)]
//           w-full
//           rounded-[14px]

//           flex
//           items-center
//           justify-center

//           px-6
//           text-center
//           overflow-hidden
//         "
//         style={{
//           background: `
//             linear-gradient(
//               180deg,
//               #0e71bd 0%,
//               #0059df 18%,
//               #0047b3 38%,
//               #001a4d 58%,
//               #000814 78%,
//               #000000 100%
//             )
//           `,
//         }}
//       >
//         <div>
//           {/* SMALL LABEL */}
//           <p
//             className="
//               mb-5
//               text-[11px]
//               uppercase
//               tracking-[0.3em]
//               text-white/50
//             "
//           >
//             [ ABOUT PAGE ]
//           </p>

//           {/* BIG TEXT */}
//           <h1
//             className="
//               text-white
//               font-semibold
//               uppercase
//               tracking-tight
//               leading-[0.9]

//               text-[56px]
//               sm:text-[90px]
//               md:text-[140px]
//               lg:text-[180px]
//             "
//           >
//             Coming <br /> Soon
//           </h1>

//           {/* SUBTEXT */}
//           <p
//             className="
//               mt-6
//               max-w-xl
//               mx-auto

//               text-sm
//               md:text-base
//               leading-relaxed

//               text-white/60
//             "
//           >
//             A deeper look into the process, philosophy, and the story behind the work is currently in progress.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }









// AboutHeroSection.tsx

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-background flex items-center justify-center px-6">
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2 top-1/2
            h-[500px] w-[500px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            blur-[140px]
            opacity-30
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-primary">
          About Me
        </p>

        <h1
          className="
            text-primary
            font-semibold
            leading-[0.95]
            tracking-[-0.06em]
            text-[3.5rem]
            sm:text-[5rem]
            md:text-[7rem]
            lg:text-[8rem]
          "
        >
          Creative
          <br />
          Developer
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-sm
            sm:text-base
            md:text-lg
            leading-relaxed
            text-primary/60
          "
        >
          Focused on crafting immersive digital experiences through
          modern frontend development, smooth motion and clean interaction.
        </p>
      </div>
    </section>
  );
}