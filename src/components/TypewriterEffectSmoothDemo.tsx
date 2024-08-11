"use client";
import React, { useState, useEffect, useRef } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const words = [
    {
      text: "Hey",
    },
    {
      text: "There!",
    },
    {
      text: "I'm",
    },
    {
      text: "Paul 👋",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Observer entry:", entry); // Debugging line
        if (entry.isIntersecting) {
          console.log("Component is in view"); // Debugging line
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  if (!isVisible) {
    console.log("Component is not visible yet"); // Debugging line
    return <div ref={elementRef} className="h-[40rem]"></div>; // Placeholder to maintain layout
  }

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center h-[40rem]"
    >
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Reach for the stars
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
