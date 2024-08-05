// UP FOR DELETION
"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export function LandingPageEffect() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <AnimatePresence>
        <div className="h-full w-full absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={2} // Geschwindigkeit der Animation
            containerClassName="bg-[#eaecff]" // Hintergrundfarbe des Containers
            colors={[
              [59, 130, 246],  // Blau
              [37, 99, 235],   // Dunkleres Blau
              [29, 78, 216],   // Noch dunkleres Blau
            ]}
            dotSize={3} // Größe der Punkte
          />
        </div>
      </AnimatePresence>
      <div className="relative z-20 flex items-center justify-center h-full flex-col">
        <h2 className="text-white text-3xl font-bold mb-8">
          Hoist the code and set sail on the digital seas!  
        </h2>
        <h2 className="text-white text-3xl font-bold mb-8">
          SeaShellScripts: where innovation and creativity anchor
        </h2>
        <button className="p-[3px] relative" onClick={handleClick}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Set Course
          </div>
        </button>
      </div>
    </div>
  );
}

// DO NOT DELETE THIS IS THE GOOD CODE
/*

"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export function LandingPageEffect() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <AnimatePresence>
        <div className="h-full w-full absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gray-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </div>
      </AnimatePresence>
      <div className="relative z-20 flex items-center justify-center h-full flex-col">
        <h2 className="text-white text-3xl font-bold mb-8">
        Hoist the code and set sail on the digital seas!  
        </h2>
        <h2 className="text-white text-3xl font-bold mb-8">
        SeaShellScripts: where innovation and creativity anchor
        </h2>
        <button className="p-[3px] relative" onClick={handleClick}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          Set Course
          </div>
        </button>
      </div>
    </div>
  );
}
  */