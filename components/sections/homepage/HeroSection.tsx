// export default function HeroSection() {
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










export default function HeroSection() {
  return (
    <section className="p-4 bg-background">
      <div
        className="
          min-h-[calc(100vh-2rem)]
          w-full
          rounded-[14px]
          flex
          flex-col
          md:flex-row
          justify-between
          px-4
          md:px-5
          py-10
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
        {/* LEFT SIDE */}
        <div className="flex-1 text-white flex flex-col justify-center space-y-6 ">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            MOVING BRANDS FORWARD
          </h1>

          <p className="text-sm md:text-base text-white/60 max-w-md leading-relaxed">
            every brand carries a story shaped into a clear path that users can understand and follow without confusion or friction.
          </p>

          <div className="flex gap-3 flex-wrap pt-2">
            <button className="px-5 py-2 text-sm rounded-md bg-white text-black">
              Explore Work
            </button>

            <button className="px-5 py-2 text-sm rounded-md border border-white/30 text-white">
              Get in Touch
            </button>
          </div>

          {/* Scroll */}
          <div className="pt-12 text-xs tracking-widest text-white/40">
            scroll to explore ↓
          </div>
        </div>

        {/* RIGHT SIDE EMPTY */}
        <div className="flex-1 hidden md:block" />
      </div>
    </section>
  );
}