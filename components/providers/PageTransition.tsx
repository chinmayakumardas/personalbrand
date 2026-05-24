// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function PageTransition({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={pathname}
//         initial={{
//           opacity: 0,
//           y: 20,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           y: -20,
//         }}
//         transition={{
//           duration: 0.5,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="min-h-screen"
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// }






"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
      >
        {/* PAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            y: -20,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>

        {/* CURTAIN */}
        <motion.div
          initial={{
            scaleY: 1,
          }}
          animate={{
            scaleY: 0,
          }}
          exit={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="
            pointer-events-none
            fixed inset-0
            origin-top
            z-[999999]

            bg-black
          "
        />
      </motion.div>
    </AnimatePresence>
  );
}