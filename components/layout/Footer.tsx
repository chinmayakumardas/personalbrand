








"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  Globe,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  {
    label: "Work",
    href: "/work",
  },
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
      gsap.set(".footer-reveal", {
        opacity: 0,
        y: 40,
      });

      gsap.to(".footer-reveal", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 88%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-background px-4 pb-4 ">
      <div
        ref={footerRef}
        className="
          relative
          overflow-hidden
          rounded-[12px]
          border
          border-white/[0.08]
          bg-black
          text-white
        "
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 overflow-hidden">
          {/* black white glow */}

          <div
            className="
              absolute
              left-[-10%]
              top-[-10%]
              h-[280px]
              w-[280px]
              rounded-full
              bg-white/[0.05]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-[-10%]
              right-[-10%]
              h-[280px]
              w-[280px]
              rounded-full
              bg-white/[0.04]
              blur-3xl
            "
          />

          {/* smooth gradients */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />

          {/* noise */}

          {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" /> */}
        </div>

        {/* CURSOR GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.04]
            blur-3xl
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-10
            px-5
            py-7
            sm:px-7
            sm:py-8
            md:px-9
            md:py-10
            lg:px-12
            lg:py-12
            
          "
        >
          {/* TOP */}

          <div
            className="
              grid
              gap-12
            
              pb-10
              xl:grid-cols-2

            "
          >
            {/* LEFT */}

            <div className="min-w-0">
              {/* TAG */}

              <div
                className="
                  footer-reveal
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white/55
                  backdrop-blur-xl
                  sm:text-[10px]
                "
              >
                <Sparkles className="h-3 w-3 shrink-0" />

                <span>
                  Available for freelance & full-time
                </span>
              </div>

              {/* HEADING */}

              <h2
                className="
                  footer-reveal
                  max-w-[700px]
                  text-[clamp(2rem,5vw,4.8rem)]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-white
                "
              >
                Let&apos;s build
                <br />
                something
                <span className="text-white/35">
                  {" "}
                  meaningful.
                </span>
              </h2>

              {/* TEXT */}

              <p
                className="
                  footer-reveal
                  mt-5
                  max-w-[560px]
                  text-[13px]
                  leading-relaxed
                  text-white/50
                  sm:text-[14px]
                  md:text-[15px]
                "
              >
                Creating modern digital experiences focused on
                interaction, motion, performance, and smooth
                user interfaces crafted for every screen.
              </p>

              {/* BUTTON */}

              <Link
                href="/contact"
                className="
                  footer-reveal
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white
                  bg-white
                  px-6
                  py-3
                  text-[12px]
                  font-medium
                  text-black
                    
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                START A PROJECT

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* RIGHT */}

            <div
              className="
                grid
                grid-cols-1
                gap-10
                sm:grid-cols-3
              "
            >
              {/* NAVIGATION */}

              <div className="footer-reveal">
                <p
                  className="
                    mb-4
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/30
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
                        group
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        text-[14px]
                        text-white/65
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:opacity-100
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}

              <div className="footer-reveal">
                <p
                  className="
                    mb-4
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/30
                  "
                >
                  Contact
                </p>

                <div className="space-y-4 text-[13px] text-white/60">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />

                    <p className="break-all leading-relaxed">
                      chinmayakumardas07@gmail.com
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0" />

                    <p>Odisha, India</p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}

              <div className="footer-reveal">
                <p
                  className="
                    mb-4
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/30
                  "
                >
                  Socials
                </p>

                <div className="flex flex-col gap-3">
                  {socials.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      className="
                        group
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        text-[14px]
                        text-white/65
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:opacity-100
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

     

          {/* BOTTOM */}

          <div
            className="
              footer-reveal
              flex
              flex-col
              gap-4
              border-t
              border-white/[0.08]
              pt-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
                text-[12px]
                text-white/40
                sm:text-[13px]
              "
            >
              <Globe className="h-4 w-4 shrink-0" />

              <span>
                © 2026 CHINMAYA KUMAR ✦ {time}
              </span>
            </div>

            <div
              className="
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-white/20
              "
            >
              Designed & Developed by Chinmaya
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}