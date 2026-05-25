// components/global/PageLoader.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }, 22);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="
            fixed inset-0 z-[99999]
            overflow-hidden
            bg-black
          "
        >
          {/* Noise */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "url('/noise.png')",
            }}
          />

          {/* Soft Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
            className="
              absolute left-1/2 top-1/2
              h-[420px] w-[420px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full blur-[140px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
            }}
          />

          {/* Top Left */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              absolute left-6 top-6
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-white
            "
          >
            Portfolio
          </motion.p>

          {/* Center Content */}
          <div
            className="
              absolute inset-0
              flex flex-col
              items-center justify-center
            "
          >
            {/* Welcome */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.45, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                mb-4
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white
              "
            >
              Welcome
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-center
                text-white
                font-medium
                leading-none
                tracking-[-0.08em]
                text-4xl
                sm:text-5xl
                md:text-6xl
              "
            >
              CHINMAYA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="
                mt-4
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white
              "
            >
              Creative Developer
            </motion.p>
          </div>

          {/* Progress Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="
              absolute bottom-8 right-6
              text-white
              font-light
              leading-none
              tracking-[-0.08em]
              text-3xl
              sm:text-4xl
            "
          >
            {progress}
          </motion.div>

          {/* Progress Line */}
          <div
            className="
              absolute bottom-0 left-0
              h-[1px]
              w-full
              bg-white/10
            "
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.2,
              }}
              className="h-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}