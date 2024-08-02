"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { useRouter } from "next/navigation";

export function FlipWordsSection() {
  const words = ["amazing", "cute", "beautiful", "modern"];
  const router = useRouter();

  const handleButtonClick = () => {
    // Hier kannst du festlegen, wohin der Button führt, z.B. zu einer anderen Seite
    router.push("/subpage"); // Beispiel: "/another-page" ist der Pfad zu einer anderen Seite
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mb-6">
        Check my
        <FlipWords words={words} /> <br />
        projects since you came this far ❤️
      </div>
      <button onClick={handleButtonClick} className="p-[3px] relative mt-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          Learn More
        </div>
      </button>
    </div>
  );
}
