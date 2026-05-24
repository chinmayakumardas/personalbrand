// "use client";


// export default function FeaturedWorkSection() {




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










"use client";

import Image from "next/image";

export default function FeaturedWorkSection() {
 const works = [
  {
    title: "AI SaaS Platform",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    tags: ["AI", "SaaS"],
  },
  {
    title: "Luxury Fashion Store",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    tags: ["E-commerce", "UI/UX"],
  },
  {
    title: "Creative Agency Website",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Web Design", "Development"],
  },
  {
    title: "Startup Branding System",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    tags: ["Branding", "Identity"],
  },
  {
    title: "Fitness Mobile Experience",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    tags: ["Mobile", "Product Design"],
  },
  {
    title: "Immersive 3D Experience",
    img: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec",
    tags: ["3D", "Motion"],
  },
  {
    title: "Fintech Analytics Dashboard",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    tags: ["Dashboard", "Data"],
  },
  {
    title: "Modern Architecture Showcase",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    tags: ["Architecture", "Visual"],
  },
];

  return (
    <section>
      <div
        className="
          min-h-[calc(100vh-2rem)]
          w-full
          rounded-[14px]
          px-4
          pt-8
          flex flex-col gap-5
          
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-4xl text-foreground font-semibold">
            Featured Work
          </h2>

          <button className="text-sm text-foreground/60 hover:text-foreground transition">
            All Work 
          </button>
        </div>

        {/* ROW 1 (80 / 20) */}
        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-3">
            <WorkCard {...works[0]} />
          </div>

          <div className="md:col-span-2">
            <WorkCard {...works[1]} />
          </div>
        </div>

        {/* ROW 2 */}
        <WorkCard {...works[2]} />

        {/* ROW 3 */}
        <div className="grid md:grid-cols-3 gap-5">
          <WorkCard {...works[3]} />
          <WorkCard {...works[4]} />
          <WorkCard {...works[5]} />
        </div>
      </div>
    </section>
  );
}

/* CARD */
function WorkCard({
  title,
  img,
  tags,
}: {
  title: string;
  img: string;
  tags: string[];
}) {
  return (
    <div
      className="
        relative
        h-[420px] md:h-[460px]
        w-full
        rounded-xl
        overflow-hidden
        border border-background/10
      "
    >
      {/* IMAGE */}
      <Image
        src={img}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT */}
      <div className="absolute bottom-5 left-5 right-5">
        <div className="text-background text-lg font-medium">
          {title}
        </div>

        <div className="flex gap-2 mt-2 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="
                text-xs
                px-2 py-1
                rounded-md
                border border-background/20
                text-background/80
                bg-background/5
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}