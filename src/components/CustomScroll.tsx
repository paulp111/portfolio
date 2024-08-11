"use client";

import { useEffect, useRef } from "react";

export default function CustomScroll() {
  const isScrolling = useRef(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight;

      if (isScrolling.current) return;

      // Scrollen nach oben
      if (currentScroll < lastScrollTop.current && currentScroll < threshold) {
        isScrolling.current = true;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      // Scrollen nach unten
      else if (
        currentScroll > lastScrollTop.current &&
        currentScroll < threshold
      ) {
        isScrolling.current = true;
        window.scrollTo({
          top: threshold,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);

      lastScrollTop.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
