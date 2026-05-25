// AboutCTASection.tsx

export default function AboutCTASection() {
  return (
    <section className="bg-background px-6 pb-32 pt-10">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          border border-white/10
          bg-white/[0.03]
          px-8
          py-24
          text-center
          backdrop-blur-xl
        "
      >
        <div
          className="
            absolute left-1/2 top-1/2
            h-[400px] w-[400px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full blur-[120px]
            opacity-20
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.05em]
              text-primary
              sm:text-5xl
              md:text-6xl
            "
          >
            Let’s build something meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-primary/60">
            Available for freelance projects and creative collaborations.
          </p>

          <button
            className="
              mt-10
              rounded-full
              border border-white/10
              bg-white
              px-8
              py-4
              text-sm
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}