"use client";
import React, { useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `From the creative minds of the Xbox Underground to the trailblazers at SpaceX, coders have always defied the limits of possibility. At SeaShellScripts, I channel that same spirit of innovation and creativity.`;

export function TextGenerateEffectSection() {
  return (
    <div className="h-full flex justify-start items-center px-4 md:px-10">
      <div className="text-2xl px-4 md:text-3xl lg:text-4xl font-normal text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
