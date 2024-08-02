"use client";
import React, { useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

export function TextGenerateEffectSection() {
  return (
    <div className="h-full flex justify-center items-center px-4">
      <div className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
