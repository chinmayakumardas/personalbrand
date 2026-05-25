// AboutIntroSection.tsx

export default function AboutIntroSection() {
  return (
    <section className="bg-background px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary/40">
            Introduction
          </p>

          <h2
            className="
              text-primary
              leading-[1]
              tracking-[-0.05em]
              font-semibold
              text-4xl
              sm:text-5xl
              md:text-6xl
            "
          >
            Building digital
            <br />
            experiences with
            <br />
            motion & detail.
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <p
            className="
              max-w-xl
              text-base
              leading-relaxed
              text-primary/60
              sm:text-lg
            "
          >
            I’m a frontend developer passionate about creating modern,
            visually refined websites that combine performance, interaction
            and cinematic user experience. I enjoy transforming ideas into
            immersive digital products with clean design systems and smooth motion.
          </p>
        </div>
      </div>
    </section>
  );
}