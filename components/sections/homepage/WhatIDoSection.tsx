export default function WhatIDoSection() {
  const items = [
    "UI/UX Design",
    "Frontend Development",
    "Next.js Applications",
    "Responsive Web Design",
    "Performance Optimization",
  ];

  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="w-full max-w-5xl mx-auto">

        {/* heading */}
        <h2 className="text-primary text-xl sm:text-2xl md:text-4xl font-semibold tracking-[-0.03em]">
          What I Do
        </h2>

        <p className="text-white/50 mt-3 text-sm sm:text-base max-w-xl">
          I design and build modern web experiences focused on performance, clarity, and usability.
        </p>

        {/* list */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">

          {items.map((item, i) => (
            <div
              key={i}
              className="
                text-white
                text-sm sm:text-base
                border-b border-white/10
                pb-3
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