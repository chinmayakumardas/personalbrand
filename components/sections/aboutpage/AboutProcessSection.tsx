// AboutProcessSection.tsx

const process = [
  "Research",
  "Design",
  "Development",
  "Motion",
  "Optimization",
];

export default function AboutProcessSection() {
  return (
    <section className="bg-background px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 text-sm uppercase tracking-[0.3em] text-primary/40">
          Process
        </p>

        <div className="grid gap-6 md:grid-cols-5">
          {process.map((item, index) => (
            <div
              key={item}
              className="
                rounded-3xl
                border border-white/10
                bg-primary/[0.03]
                p-8
                backdrop-blur-xl
              "
            >
              <span className="text-sm text-primary/30">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-xl font-medium text-primary">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}