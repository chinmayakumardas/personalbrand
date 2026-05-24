



"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  Globe,
  FileText,
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

  /* ================= GSAP (SCROLL BOTTOM → TOP) ================= */

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // initial state (hidden below)
      gsap.set(".footer-fade", {
        opacity: 0,
        y: 80,
      });

      // scroll reveal animation (bottom → top)
      gsap.to(".footer-fade", {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="w-full px-4 pb-4 pt-4 sm:pt-0">
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
            py-5
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
            {/* LEFT */}

            <div className="footer-fade max-w-[520px]">
              <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-white/35">
                Available for work
              </p>

              <h2 className="text-[28px] font-medium leading-[1] tracking-[-0.05em] sm:text-[36px] md:text-[44px]">
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
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* RIGHT */}

            <div className="grid w-full gap-10 sm:grid-cols-2 lg:max-w-[520px]">
              <div className="footer-fade">
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/35">
                  Navigation
                </p>

                <div className="flex flex-col gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="w-fit text-[15px] text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="footer-fade">
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/35">
                  Get in touch
                </p>

                <div className="flex flex-col gap-3 text-[15px] text-white/85">
                  <p>+91 6370073215</p>
                  <p className="break-words">chinmayakumardas07@gmail.com</p>
                  <p>Odisha, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIALS */}

          <div className="footer-fade mt-12 flex flex-wrap items-center gap-3 pt-8">
            {socials.map((item) => (
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
            ))}
          </div>

          {/* BOTTOM */}

          <div className="footer-fade mt-8 flex flex-col gap-3 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 shrink-0" />
              <span>© 2026 CHINMAYA ✦ {time}</span>
            </div>

            <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
              All rights reserved + India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}