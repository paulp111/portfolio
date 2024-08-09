"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  let wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted) {
          setAnimationStarted(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 } // 50% of the element should be visible before triggering the animation
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animationStarted]);

  useEffect(() => {
    if (animationStarted) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [animationStarted]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const importantWords = ["Xbox", "Underground", "SpaceX", "SeaShellScripts"];
          const isImportant = importantWords.some(importantWord => word.includes(importantWord));

          return (
            <motion.span
              key={word + idx}
              className={`${
                isImportant ? "text-black" : "text-gray-600"
              } dark:text-white opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
                fontSize: '2.5rem', // was: 2.5rem
                fontWeight: isImportant ? '600' : '400' // Use a lighter weight for non-important words
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className={cn("font-normal", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-gray-600 text-3.5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};