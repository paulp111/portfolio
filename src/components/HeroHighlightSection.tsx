// components/HeroHighlightSection.tsx

"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight-section";
import Image from "next/image";

export function HeroHighlightSection() {
  return (
    <HeroHighlight>
      <div className="relative flex flex-col items-center">
        { /*Größeres Logo */}
        { <Image src="/The_Pirate_Bay_logo_bw.svg" alt="Logo" width={150} height={150} className="mb-6" /> }

        {/* Text Section */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Technology is the canvas,{" "}
          <Highlight className="text-black dark:text-white">
            imagination is the brush.
          </Highlight>
        </motion.h1>
      </div>
    </HeroHighlight>
  );
}

export { Highlight };
