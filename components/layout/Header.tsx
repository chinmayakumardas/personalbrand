// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";

// import gsap from "gsap";

// import { Button } from "@/components/ui/button";

// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const router = useRouter();

//   const [open, setOpen] = useState(false);

//   const drawerRef = useRef<HTMLDivElement | null>(null);

//   const navItemsRef = useRef<(HTMLButtonElement | null)[]>([]);

//   const desktopNavRef = useRef<(HTMLButtonElement | null)[]>([]);

//   const logoRef = useRef<HTMLDivElement | null>(null);

//   const contactRef = useRef<HTMLDivElement | null>(null);

//   const overlayRef = useRef<HTMLDivElement | null>(null);

//   const iconRef = useRef<HTMLDivElement | null>(null);

//   const navigate = (path: string) => {
//     closeMenu(() => {
//       router.push(path);
//     });
//   };

//   /* ================= MOBILE OPEN ================= */
//   useEffect(() => {
//     if (open) {
//       const tl = gsap.timeline();

//       gsap.set(navItemsRef.current, {
//         opacity: 0,
//         y: 25,
//       });

//       gsap.set(contactRef.current, {
//         opacity: 0,
//         y: 20,
//       });

//       tl.fromTo(
//         overlayRef.current,
//         {
//           opacity: 0,
//         },
//         {
//           opacity: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         },
//       );

//       tl.fromTo(
//         drawerRef.current,
//         {
//           x: "-100%",
//         },
//         {
//           x: "0%",
//           duration: 0.8,
//           ease: "expo.out",
//         },
//         "-=0.1",
//       );

//       tl.to(
//         navItemsRef.current,
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.08,
//           duration: 0.6,
//           ease: "power4.out",
//         },
//         "-=0.45",
//       );

//       tl.to(
//         contactRef.current,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.45,
//           ease: "power3.out",
//         },
//         "-=0.35",
//       );

//       gsap.to(iconRef.current, {
//         rotate: 180,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     }
//   }, [open]);

//   /* ================= MOBILE CLOSE ================= */
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
//       "-=0.08",
//     );

//     tl.to(
//       drawerRef.current,
//       {
//         x: "-100%",
//         duration: 0.65,
//         ease: "expo.inOut",
//       },
//       "-=0.05",
//     );

//     tl.to(
//       overlayRef.current,
//       {
//         opacity: 0,
//         duration: 0.25,
//       },
//       "-=0.45",
//     );

//     gsap.to(iconRef.current, {
//       rotate: 0,
//       duration: 0.35,
//       ease: "power3.out",
//     });
//   };

//   /* ================= HOVER ================= */
//   const handleHover = (
//     element: HTMLDivElement | HTMLButtonElement | null,
//     hover: boolean,
//   ) => {
//     if (!element) return;

//     gsap.to(element, {
//       y: hover ? -2 : 0,
//       opacity: hover ? 1 : 0.75,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <>
//       {/* ================= HEADER ================= */}
//       <header className="sticky top-0 z-[60] bg-background">
//         {/* ONLY ADDED SAME MAX WIDTH SYSTEM */}

//         <div
//           className="
//     mx-auto
//     w-full
//     max-w-[1700px]
//     px-5

//     sm:px-6
//     md:px-8
//     lg:px-10
//   "
//         >
//           <div
//             className="
//       flex
//       items-center
//       justify-between
//       py-5

//       md:py-6
//     "
//           >
//             {/* LOGO */}
//             <div
//               onClick={() => navigate("/")}
//               className="cursor-pointer text-[20px] font-semibold tracking-[0.05em]"
//             >
//               CHINMAYA
//             </div>

//             {/* ================= DESKTOP NAV ================= */}
//             <div className="hidden items-center gap-8 md:flex">
//               <div className="flex items-center gap-7">
//                 {[
                  
//                   ["WORK", "/work"],
//                   ["ABOUT", "/about"],
//                 ].map(([label, path], index) => (
//                   <Button
//                     key={label}
//                     ref={(el) => {
//                       desktopNavRef.current[index] = el;
//                     }}
//                     variant="ghost"
//                     onClick={() => navigate(path)}
//                     onMouseEnter={() =>
//                       handleHover(desktopNavRef.current[index], true)
//                     }
//                     onMouseLeave={() =>
//                       handleHover(desktopNavRef.current[index], false)
//                     }
//                     className="
//                       group
//                       relative
//                       h-auto
//                       cursor-pointer
//                       p-0
//                       font-mono
//                       text-[12px]
//                       tracking-wide
//                       text-muted-foreground
//                       hover:bg-transparent
//                     "
//                   >
//                     <span className="relative block overflow-hidden">
//                       <span className="block transition-transform duration-500 group-hover:-translate-y-full">
//                         {label}
//                       </span>

//                       <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
//                         {label}
//                       </span>
//                     </span>
//                   </Button>
//                 ))}
//               </div>

//               {/* CONTACT */}
//               <Button
//                 onClick={() => navigate("/contact")}
//                 className="
//                   h-7
//                   cursor-pointer
//                   rounded-md
//                   bg-black
//                   px-3
//                   font-mono
//                   text-xs
//                   text-white
//                 "
//               >
//                 CONTACT
//               </Button>
//             </div>

//             {/* ================= MOBILE BUTTON ================= */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="cursor-pointer md:hidden"
//               onClick={() => {
//                 if (open) {
//                   closeMenu();
//                 } else {
//                   setOpen(true);
//                 }
//               }}
//             >
//               <div ref={iconRef}>
//                 {open ? <X size={20} /> : <Menu size={20} />}
//               </div>
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//       {open && (
//         <>
//           {/* OVERLAY */}
//           <div
//             ref={overlayRef}
//             className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
//             onClick={() => closeMenu()}
//           />

//           {/* DRAWER */}
//           <div
//             ref={drawerRef}
//             className="fixed inset-0 z-50 bg-background md:hidden"
//           >
//             {/* ONLY ADDED SAME PADDING SYSTEM */}
//             <div
//               className="
//     flex
//     h-screen
//     flex-col
//     px-5
//     pb-8
//     pt-28

//     sm:px-6
//     md:px-8
//     lg:px-10
//   "
//             >
//               {/* NAVIGATION */}
//               <div className="flex flex-col items-start">
//                 {[
//                   ["WORK", "/work"],
                  
//                   ["ABOUT", "/about"],
//                 ].map(([label, path], index) => (
//                   <button
//                     key={label}
//                     ref={(el) => {
//                       navItemsRef.current[index] = el;
//                     }}
//                     onClick={() => navigate(path)}
//                     className="
//                       group
//                       relative
//                       py-2
//                       font-mono
//                       text-[20px]
//                       tracking-tight
//                       text-muted-foreground
//                     "
//                   >
//                     <span className="relative block overflow-hidden">
//                       <span className="block transition-transform duration-500 group-hover:-translate-y-full">
//                         {label}
//                       </span>

//                       <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
//                         {label}
//                       </span>
//                     </span>
//                   </button>
//                 ))}
//               </div>

//               {/* CONTACT */}
//               <div
//                 ref={contactRef}
//                 className="
//                   mt-auto
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   pb-6
//                   pt-10
//                 "
//               >
//                 <Button
//                   onClick={() => navigate("/contact")}
//                   className="
//                     h-8
//                     w-[60vw]
//                     cursor-pointer
//                     rounded-md
//                     bg-black
//                     px-4
//                     font-mono
//                     text-xs
//                     tracking-wide
//                     text-white
//                   "
//                 >
//                   CONTACT
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

    gsap.set(navItemsRef.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set(contactRef.current, {
      opacity: 0,
      y: 20,
    });

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
      "-=0.35",
    );

    tl.to(
      contactRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "-=0.35",
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
      "-=0.08",
    );

    tl.to(
      containerRef.current,
      {
        height: 72,
        duration: 0.75,
        ease: "expo.inOut",
      },
      "-=0.05",
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
    fixed
    inset-0

    z-[99999]

    p-8

   

    transition-transform
    duration-500

    ${
      showNavbar
        ? "translate-y-0"
        : "-translate-y-full"
    }
  `}
>
      <div
        ref={containerRef}
        className="
          relative

          mx-auto
          h-[72px]
          w-full
          max-w-[1700px]

          overflow-hidden
          rounded-[10px]

          border
          border-white/10

          bg-white/[0.05]

          backdrop-blur-3xl
          supports-[backdrop-filter]:bg-white/[0.03]

          shadow-[0_8px_32px_rgba(0,0,0,0.18)]

          before:absolute
          before:inset-0
          before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]

          after:absolute
          after:inset-0
          after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent)]
        "
      >
        {/* ================= TOP BAR ================= */}
        <div
          className="
            relative
            z-10

            flex
            h-[72px]
            items-center
            justify-between

            px-5

            sm:px-6
            md:px-8
            lg:px-10
            
          "
        >
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="
              cursor-pointer

              text-[20px]
              font-semibold
              tracking-[0.05em]

              text-white
            "
          >
            CHINMAYA
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7">
              {[
                ["WORK", "/work"],
                ["ABOUT", "/about"],
              ].map(([label, path]) => (
                <Button
                  key={label}
                  variant="ghost"
                  onClick={() => navigate(path)}
                  className="
                    h-auto
                    p-0

                    font-mono
                    text-[12px]
                    tracking-wide

                    text-white/70

                    hover:bg-transparent
                    hover:text-white
                  "
                >
                  {label}
                </Button>
              ))}
            </div>

            <Button
              onClick={() => navigate("/contact")}
              className="
                h-8

                rounded-xl

                bg-white/90
                px-4

                font-mono
                text-xs
                tracking-wide

                text-black

                hover:bg-white
              "
            >
              CONTACT
            </Button>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <Button
            variant="ghost"
            size="icon"
            className="
              text-white
              hover:bg-transparent

              md:hidden
            "
            onClick={() => {
              if (open) {
                closeMenu();
              } else {
                openMenu();
              }
            }}
          >
            <div ref={iconRef}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </div>
          </Button>
        </div>

        {/* ================= MOBILE CONTENT ================= */}
        <div
          className={`
            relative
            z-10

            px-6
            pb-6

            md:hidden

            ${
              open
                ? "pointer-events-auto"
                : "pointer-events-none"
            }
          `}
        >
          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 pt-6">
            {[
              ["WORK", "/work"],
              ["ABOUT", "/about"],
            ].map(([label, path], index) => (
              <button
                key={label}
                ref={(el) => {
                  navItemsRef.current[index] = el;
                }}
                onClick={() => navigate(path)}
                className="
                  text-left

                  font-mono
                  text-[22px]
                  tracking-tight

                  text-white/70
                "
              >
                {label}
              </button>
            ))}
          </div>

          {/* DIVIDER */}
          <div className="my-8 h-px bg-white/10" />

          {/* CONTACT */}
          <div ref={contactRef}>
            <Button
              onClick={() => navigate("/contact")}
              className="
                h-11
                w-full

                rounded-2xl

                bg-white

                font-mono
                text-xs
                tracking-wide

                text-black
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