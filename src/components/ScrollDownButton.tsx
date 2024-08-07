"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ScrollDownButton() {
  const handleClick = () => {
    const threshold = window.innerHeight;
    window.scrollTo({
      top: threshold,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-10 w-full flex justify-center">
      <motion.div
        onClick={handleClick}
        className="cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12.75L12 19.5l-7.5-6.75"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black animate-bounce"
          style={{ position: 'relative', top: '-10px' }} // This offsets the second arrow
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12.75L12 19.5l-7.5-6.75"
          />
        </svg>
      </motion.div>
    </div>
  );
}
