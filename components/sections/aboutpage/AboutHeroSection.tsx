// export default function AboutHeroSection() {
//   return (
//     <section className="p-4 bg-background">
//       <div
//         className="
//           min-h-[calc(100vh-2rem)]
//           w-full
//           rounded-[14px]
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
//       />
//     </section>
//   );
// }



export default function AboutHeroSection() {
  return (
    <section className="p-4 bg-background">
      <div
        className="
          min-h-[calc(100vh-2rem)]
          w-full
          rounded-[14px]

          flex
          items-center
          justify-center

          px-6
          text-center
          overflow-hidden
        "
        style={{
          background: `
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
        <div>
          {/* SMALL LABEL */}
          <p
            className="
              mb-5
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >
            [ ABOUT PAGE ]
          </p>

          {/* BIG TEXT */}
          <h1
            className="
              text-white
              font-semibold
              uppercase
              tracking-tight
              leading-[0.9]

              text-[56px]
              sm:text-[90px]
              md:text-[140px]
              lg:text-[180px]
            "
          >
            Coming <br /> Soon
          </h1>

          {/* SUBTEXT */}
          <p
            className="
              mt-6
              max-w-xl
              mx-auto

              text-sm
              md:text-base
              leading-relaxed

              text-white/60
            "
          >
            A deeper look into the process, philosophy, and the story behind the work is currently in progress.
          </p>
        </div>
      </div>
    </section>
  );
}