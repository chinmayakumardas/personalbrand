export default function AboutHeroSection() {
  return (
    <section className="p-4 bg-background">
      <div
        className="
          min-h-[calc(100vh-2rem)]
          w-full
          rounded-[14px]
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
      />
    </section>
  );
}
