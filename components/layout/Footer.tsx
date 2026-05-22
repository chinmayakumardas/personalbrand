

// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// import { ArrowUpRight, Globe } from "lucide-react";

// import gsap from "gsap";

// const navigation = [
//   {
//     label: "About",
//     href: "/about",
//   },
//   {
//     label: "Contact",
//     href: "/contact",
//   },
// ];

// const socials = [
//   {
//     label: "LinkedIn",
//     href: "https://in.linkedin.com/in/chinmayakumardas2",
//   },
//   {
//     label: "Medium",
//     href: "https://medium.com/@chinmayakumardas07",
//   },
//   {
//     label: "GitHub",
//     href: "https://github.com/chinmayakumardas",
//   },
// ];

// export default function Footer() {
//   const footerRef = useRef<HTMLDivElement | null>(null);

//   const [time, setTime] = useState("");

//   /* ================= TIME ================= */

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();

//       setTime(
//         now.toLocaleTimeString("en-IN", {
//           hour12: false,
//         }),
//       );
//     };

//     updateTime();

//     const interval = setInterval(updateTime, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   /* ================= GSAP ================= */

//   useEffect(() => {
//     if (!footerRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.from(".footer-fade", {
//         opacity: 0,
//         y: 40,
//         duration: 1,
//         stagger: 0.08,
//         ease: "power4.out",
//       });

//       gsap.from(".footer-big-text", {
//         opacity: 0,
//         yPercent: 100,
//         duration: 1.2,
//         ease: "power4.out",
//       });
//     }, footerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <footer className="min-h-screen w-full p-5">
//       <div
//         ref={footerRef}
//         className="
//           relative

//           flex
//           min-h-[calc(100vh-2.5rem)]
//           w-full
//           flex-col

//           overflow-hidden
//           rounded-[12px]

//           border
//           border-white/10

//           bg-foreground

//           text-white

//           backdrop-blur-3xl

//           before:absolute
//           before:inset-0
//           before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]

//           after:absolute
//           after:inset-0
//           after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]
//         "
//       >
//         <div
//           className="
//             relative
//             z-10

//             flex
//             flex-1
//             flex-col
//             justify-between

//             mx-auto
//             w-full
//             max-w-[1700px]

//             px-5
//             py-12

//             sm:px-6
//             md:px-8
//             lg:px-10
//             xl:py-16
//           "
//         >
//           {/* ================= TOP ================= */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-14

//               xl:flex-row
//               xl:items-start
//               xl:justify-between
//             "
//           >
//             {/* ================= LEFT ================= */}

//             <div
//               className="
//                 footer-fade
//                 w-full
//                 max-w-[760px]
//                 flex-1
//               "
//             >
//               <h2
//                 className="
//                   footer-big-text

//                   text-[32px]
//                   font-medium
//                   leading-[0.95]
//                   tracking-[-0.06em]

//                   sm:text-[40px]
//                   md:text-[52px]
//                   lg:text-[72px]
//                 "
//               >
//                 Ready to turn
//                 <br className="hidden sm:block" />
//                 your ideas into
//                 <br className="hidden sm:block" />
//                 digital experiences?
//               </h2>

//               <Link
//                 href="/contact"
//                 className="
//                   group
//                   mt-10
//                   inline-flex
//                   items-center
//                   gap-3

//                   border-b
//                   border-white/30

//                   pb-2

//                   text-[16px]
//                   tracking-[-0.03em]

//                   transition-all
//                   duration-300

//                   sm:text-[18px]
//                   md:text-[20px]
//                 "
//               >
//                 <span>Get in touch</span>

//                 <ArrowUpRight
//                   className="
//                     h-5
//                     w-5

//                     transition-transform
//                     duration-300

//                     group-hover:translate-x-1
//                     group-hover:-translate-y-1
//                   "
//                 />
//               </Link>
//             </div>

//             {/* ================= RIGHT ================= */}

//             <div
//               className="
//                 grid
//                 w-full
//                 flex-1
//                 grid-cols-1
//                 gap-12

//                 sm:grid-cols-2
//                 lg:grid-cols-3
//                 xl:max-w-[760px]
//               "
//             >
//               {/* NAVIGATION */}

//               <div className="footer-fade">
//                 <p
//                   className="
//                     mb-4

//                     text-[10px]
//                     uppercase
//                     tracking-[0.18em]

//                     text-white/35
//                   "
//                 >
//                   Navigation
//                 </p>

//                 <div className="flex flex-col gap-2">
//                   {navigation.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       className="
//                         w-fit

//                         text-[16px]
//                         tracking-[-0.03em]

//                         text-white/90

//                         transition-all
//                         duration-300

//                         hover:translate-x-1
//                         hover:text-white

//                         md:text-[18px]
//                       "
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

            

//               {/* CONTACT */}

//               <div className="footer-fade">
//                 <p
//                   className="
//                     mb-4

//                     text-[10px]
//                     uppercase
//                     tracking-[0.18em]

//                     text-white/35
//                   "
//                 >
//                   Get in touch
//                 </p>

//                 <div
//                   className="
//                     space-y-2

//                     text-[16px]
//                     tracking-[-0.03em]

//                     text-white/90

//                     md:text-[18px]
//                   "
//                 >
//                   <p>+91 6370073215</p>

//                   <p className="break-words">
//                     chinmayakumar@gmail.com
//                   </p>

//                   <div className="pt-2">
//                     <p>Odisha, India</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ================= BOTTOM ================= */}

//           <div
//             className="
//               footer-fade

//               mt-20

//               flex
//               flex-col
//               gap-4

//               border-t
//               border-white/10

//               pt-6

//               text-sm
//               text-white/55

//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//             "
//           >
//             <div className="flex items-center gap-3">
//               <Globe className="h-4 w-4 shrink-0" />

//               <span>
//                 © 2026 CHINMAYA ✦ {time} India
//               </span>
//             </div>

//             <div
//               className="
//                 text-[10px]
//                 uppercase
//                 tracking-[0.14em]

//                 text-white/30
//               "
//             >
//               No rules. Just results.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  Globe,
  
  FileText,
} from "lucide-react";

import gsap from "gsap";

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/chinmayakumardas2",
   
  },
  {
    label: "Medium",
    href: "https://medium.com/@chinmayakumardas07",
    
  },
  {
    label: "GitHub",
    href: "https://github.com/chinmayakumardas",
    
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  const [time, setTime] = useState("");

  /* ================= TIME ================= */

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour12: false,
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ================= GSAP ================= */

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-fade", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.08,
        ease: "power4.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="w-full p-5">
      <div
        ref={footerRef}
        className="
          relative

          w-full
          overflow-hidden

          rounded-[12px]

          border
          border-white/10

          bg-foreground

          text-white

          backdrop-blur-3xl

          before:absolute
          before:inset-0
          before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]

          after:absolute
          after:inset-0
          after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]
        "
      >
        <div
          className="
            relative
            z-10

            mx-auto
            flex
            w-full
            max-w-[1700px]
            flex-col

            px-5
            py-10

            sm:px-6
            md:px-8
            lg:px-10
          "
        >
          {/* ================= TOP ================= */}

          <div
            className="
              flex
              flex-col
              gap-12

              lg:flex-row
              lg:items-start
              lg:justify-between
            "
          >
            {/* ================= LEFT ================= */}

            <div
              className="
                footer-fade
                max-w-[520px]
              "
            >
              <p
                className="
                  mb-3

                  text-[11px]
                  uppercase
                  tracking-[0.18em]

                  text-white/35
                "
              >
                Available for work
              </p>

              <h2
                className="
                  text-[28px]
                  font-medium
                  leading-[1]
                  tracking-[-0.05em]

                  sm:text-[36px]
                  md:text-[44px]
                "
              >
                Building clean digital
                <br />
                experiences with
                <br />
                motion & interaction.
              </h2>

              <Link
                href="/contact"
                className="
                  group
                  mt-8

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  px-4
                  py-3

                  text-sm

                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                Let&apos;s work together

                <ArrowUpRight
                  className="
                    h-4
                    w-4

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>

            {/* ================= RIGHT ================= */}

            <div
              className="
                grid
                w-full
                gap-10

                sm:grid-cols-2

                lg:max-w-[520px]
              "
            >
              {/* NAVIGATION */}

              <div className="footer-fade">
                <p
                  className="
                    mb-4

                    text-[11px]
                    uppercase
                    tracking-[0.18em]

                    text-white/35
                  "
                >
                  Navigation
                </p>

                <div className="flex flex-col gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="
                        w-fit

                        text-[15px]

                        text-white/85

                        transition-all
                        duration-300

                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}

              <div className="footer-fade">
                <p
                  className="
                    mb-4

                    text-[11px]
                    uppercase
                    tracking-[0.18em]

                    text-white/35
                  "
                >
                  Get in touch
                </p>

                <div
                  className="
                    flex
                    flex-col
                    gap-3

                    text-[15px]

                    text-white/85
                  "
                >
                  <p>+91 6370073215</p>

                  <p className="break-words">
                    chinmayakumar@gmail.com
                  </p>

                  <p>Odisha, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SOCIALS ================= */}

          <div
            className="
              footer-fade

              mt-12

              flex
              flex-wrap
              items-center
              gap-3

              border-t
              border-white/10

              pt-8
            "
          >
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-white/10

                    bg-white/5

                    px-4
                    py-2.5

                    text-sm
                    text-white/80

                    transition-all
                    duration-300

                    hover:bg-white/10
                    hover:text-white
                  "
                >
                 

                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ================= BOTTOM ================= */}

          <div
            className="
              footer-fade

              mt-8

              flex
              flex-col
              gap-3

              border-t
              border-white/10

              pt-6

              text-sm
              text-white/45

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 shrink-0" />

              <span>
                © 2026 CHINMAYA ✦ {time}
              </span>
            </div>

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.14em]

                text-white/25
              "
            >
              Crafted with Next.js + GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}