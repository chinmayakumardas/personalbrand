// AboutStackSection.tsx

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Lenis",
  "UI/UX",
];

export default function AboutStackSection() {
  return (
    <section className="bg-background px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 text-sm uppercase tracking-[0.3em] text-primary/40">
          Stack
        </p>

        <div className="flex flex-wrap gap-4">
          {stack.map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.03]
                px-6 py-3
                text-sm
                text-primary/70
                backdrop-blur-xl
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}