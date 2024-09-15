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
        if (entry.isIntersecting) {
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
    return <div ref={elementRef} className="h-[15rem]"></div>; // Reduced placeholder height
  }

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center py-8 -mt-5"
    >
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Reach for the stars
      </p> */}
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
