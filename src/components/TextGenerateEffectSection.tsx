"use client";
import React, { useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `"When something is important enough, you do it even if the odds are not in your favor. Failure is an option here. If things are not failing, you are not innovating enough." -Elon Musk`;

export function TextGenerateEffectSection() {
  return (
    <div className="h-full flex justify-start items-center px-4 md:px-10">
      <div className="text-3xl px-4 md:text-4xl lg:text-5xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
