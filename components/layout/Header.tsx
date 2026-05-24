






// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import gsap from "gsap";

// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const router = useRouter();

//   const [open, setOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);

//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const navItemsRef = useRef<(HTMLButtonElement | null)[]>([]);
//   const contactRef = useRef<HTMLDivElement | null>(null);
//   const iconRef = useRef<HTMLDivElement | null>(null);

//   /* ================= NAVBAR SHOW/HIDE ================= */
//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < 20) {
//         setShowNavbar(true);
//       } else if (currentScrollY > lastScrollY) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ================= NAVIGATION ================= */
//   const navigate = (path: string) => {
//     closeMenu(() => {
//       router.push(path);
//     });
//   };

//   /* ================= OPEN ================= */
//   const openMenu = () => {
//     setOpen(true);

//     const tl = gsap.timeline();

//     gsap.set(navItemsRef.current, { opacity: 0, y: 20 });
//     gsap.set(contactRef.current, { opacity: 0, y: 20 });

//     tl.to(containerRef.current, {
//       height: 430,
//       duration: 0.8,
//       ease: "expo.inOut",
//     });

//     tl.to(
//       navItemsRef.current,
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.06,
//         duration: 0.45,
//         ease: "power3.out",
//       },
//       "-=0.35"
//     );

//     tl.to(
//       contactRef.current,
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.45,
//         ease: "power3.out",
//       },
//       "-=0.35"
//     );

//     gsap.to(iconRef.current, {
//       rotate: 180,
//       duration: 0.4,
//       ease: "power3.out",
//     });
//   };

//   /* ================= CLOSE ================= */
//   const closeMenu = (callback?: () => void) => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         setOpen(false);
//         if (callback) callback();
//       },
//     });

//     tl.to(navItemsRef.current, {
//       opacity: 0,
//       y: 15,
//       stagger: 0.04,
//       duration: 0.18,
//       ease: "power2.inOut",
//     });

//     tl.to(
//       contactRef.current,
//       {
//         opacity: 0,
//         y: 10,
//         duration: 0.18,
//       },
//       "-=0.08"
//     );

//     tl.to(
//       containerRef.current,
//       {
//         height: 72,
//         duration: 0.75,
//         ease: "expo.inOut",
//       },
//       "-=0.05"
//     );

//     gsap.to(iconRef.current, {
//       rotate: 0,
//       duration: 0.35,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 right-0
//         z-50
//         p-4 sm:p-6
//         transition-transform duration-500
//         ${showNavbar ? "translate-y-0" : "-translate-y-full"}
//       `}
//     >
//       <div
//         ref={containerRef}
//         className="
//           relative
//           mx-auto
//           h-[72px]
//           w-full
//           max-w-full

//           overflow-hidden
//           rounded-[10px]

//           border border-white/10
//           bg-white/[0.05]

//           backdrop-blur-3xl
//           supports-[backdrop-filter]:bg-white/[0.03]

//           shadow-[0_8px_32px_rgba(0,0,0,0.18)]

//           before:absolute before:inset-0
//           before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]

//           after:absolute after:inset-0
//           after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent)]
//         "
//       >
//         {/* TOP BAR */}
//         <div className="relative z-10 flex h-[72px] items-center justify-between px-5 sm:px-6 md:px-8 lg:px-10">
          
//           {/* LOGO */}
//           <div
//             onClick={() => navigate("/")}
//             className="cursor-pointer text-[20px] font-semibold tracking-[0.05em] text-white"
//           >
//             CHINMAYA
//           </div>

//           {/* DESKTOP */}
//           <div className="hidden items-center gap-8 md:flex">
//             <div className="flex items-center gap-7">
//               {[["WORK", "/work"], ["ABOUT", "/about"]].map(([label, path]) => (
//              <Button
//   key={label}
//   onClick={() => navigate(path)}
//   className="
//     h-auto
//     p-0

//     bg-transparent
//     shadow-none

//     font-mono
//     text-[12px]
//     tracking-wide

//     text-white/70

//     hover:bg-transparent
//     hover:text-white

//     active:bg-transparent

//     focus-visible:ring-0
//     focus-visible:ring-offset-0
//   "
// >
//   {label}
// </Button>
//               ))}
//             </div>

//             <Button
//               onClick={() => navigate("/contact")}
//               className="h-8 rounded-xl bg-white/90 px-4 font-mono text-xs text-black hover:bg-white"
//             >
//               CONTACT
//             </Button>
//           </div>

//           {/* MOBILE TOGGLE */}
//      <Button
//   size="icon"
//   className="
//     bg-transparent
//     text-white

//     hover:bg-transparent
//     active:bg-transparent

//     focus-visible:ring-0
//     focus-visible:ring-offset-0

//     md:hidden
//   "
//   onClick={() =>
//     open ? closeMenu() : openMenu()
//   }
// >
//   <div ref={iconRef}>
//     {open ? (
//       <X size={20} />
//     ) : (
//       <Menu size={20} />
//     )}
//   </div>
// </Button>
//         </div>

//         {/* MOBILE MENU */}
//         <div
//           className={`
//             relative z-10 px-6 pb-6 md:hidden
//             ${open ? "pointer-events-auto" : "pointer-events-none"}
//           `}
//         >
//           <div className="flex flex-col gap-3 pt-6">
//             {[["WORK", "/work"], ["ABOUT", "/about"]].map(([label, path], i) => (
//               <button
//                 key={label}
//                 ref={(el) => {
//                   navItemsRef.current[i] = el;
//                 }}
//                 onClick={() => navigate(path)}
//                 className="text-left font-mono text-[22px] text-white/70"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//           <div className="my-8 h-px bg-white/10" />

//           <div ref={contactRef}>
//             <Button
//               onClick={() => navigate("/contact")}
//               className="h-11 w-full rounded-2xl bg-white text-black"
//             >
//               CONTACT
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }









"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  /* ================= NAVBAR SHOW/HIDE ================= */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= NAVIGATION ================= */
  const navigate = (path: string) => {
    closeMenu(() => {
      router.push(path);
    });
  };

  /* ================= OPEN ================= */
  const openMenu = () => {
    setOpen(true);

    const tl = gsap.timeline();

    gsap.set(navItemsRef.current, { opacity: 0, y: 20 });
    gsap.set(contactRef.current, { opacity: 0, y: 20 });

    tl.to(containerRef.current, {
      height: 430,
      duration: 0.8,
      ease: "expo.inOut",
    });

    tl.to(
      navItemsRef.current,
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.45,
        ease: "power3.out",
      },
      "-=0.35"
    );

    tl.to(
      contactRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "-=0.35"
    );

    gsap.to(iconRef.current, {
      rotate: 180,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  /* ================= CLOSE ================= */
  const closeMenu = (callback?: () => void) => {
    const tl = gsap.timeline({
      onComplete: () => {
        setOpen(false);
        if (callback) callback();
      },
    });

    tl.to(navItemsRef.current, {
      opacity: 0,
      y: 15,
      stagger: 0.04,
      duration: 0.18,
      ease: "power2.inOut",
    });

    tl.to(
      contactRef.current,
      {
        opacity: 0,
        y: 10,
        duration: 0.18,
      },
      "-=0.08"
    );

    tl.to(
      containerRef.current,
      {
        height: 72,
        duration: 0.75,
        ease: "expo.inOut",
      },
      "-=0.05"
    );

    gsap.to(iconRef.current, {
      rotate: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0
        z-50
        p-4 sm:p-6
        transition-transform duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div
        ref={containerRef}
      className="
  relative
  mx-auto
  h-[72px]
  w-full

  overflow-hidden
  rounded-[12px]

  border border-white/10

  bg-[#191816]/60

  backdrop-blur-[12px] backdrop-saturate-150

  shadow-[0_8px_30px_rgba(0,0,0,0.35)]

  before:absolute before:inset-0
  before:bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02),rgba(255,255,255,0.05))]

  after:absolute after:inset-0
  after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_60%)]
"
      >
        {/* TOP LIGHT LINE */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/10" />

        {/* TOP BAR */}
        <div className="relative z-10 flex h-[72px] items-center justify-between px-5 sm:px-6 md:px-8 lg:px-10">
          
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-[20px] font-semibold tracking-[0.05em] text-secondary"
          >
            CHINMAYA
          </div>

          {/* DESKTOP */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7">
              {[["WORK", "/work"], ["ABOUT", "/about"]].map(([label, path]) => (
                <Button
                  key={label}
                  onClick={() => navigate(path)}
                  className="
                    h-auto p-0
                    bg-transparent shadow-none

                    font-mono text-[12px] tracking-wide

                    text-secondary
                    hover:text-secondary

                    hover:bg-transparent
                    active:bg-transparent

                    focus-visible:ring-0 focus-visible:ring-offset-0
                  "
                >
                  {label}
                </Button>
              ))}
            </div>

            <Button
              onClick={() => navigate("/contact")}
              className="
                h-8 px-4 rounded-xl

                bg-secondary text-primary
                hover:opacity-90

                font-mono text-xs
              "
            >
              CONTACT
            </Button>
          </div>

          {/* MOBILE */}
          <Button
            size="icon"
            className="
              bg-transparent
              text-secondary

              hover:bg-transparent
              active:bg-transparent

              focus-visible:ring-0 focus-visible:ring-offset-0

              md:hidden
            "
            onClick={() => (open ? closeMenu() : openMenu())}
          >
            <div ref={iconRef}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </div>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            relative z-10 px-6 pb-6 md:hidden
            ${open ? "pointer-events-auto" : "pointer-events-none"}
          `}
        >
          <div className="flex flex-col gap-3 pt-6">
            {[["WORK", "/work"], ["ABOUT", "/about"]].map(([label, path], i) => (
              <button
                key={label}
                ref={(el) => {
                  navItemsRef.current[i] = el;
                }}
                onClick={() => navigate(path)}
                className="text-left font-mono text-[22px] text-secondary"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="my-8 h-px bg-foreground/10" />

          <div ref={contactRef}>
            <Button
              onClick={() => navigate("/contact")}
              className="
                h-11 w-full rounded-2xl

                 bg-secondary text-primary
                hover:opacity-90
              "
            >
              CONTACT
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


