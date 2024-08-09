"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export function RoundedImageWithTooltip({
  imageUrl,
  altText,
  name,
  designation,
}: {
  imageUrl: string;
  altText: string;
  name: string;
  designation: string;
}) {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-25, 25]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="relative group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div onMouseMove={handleMouseMove} className="flex flex-col items-center justify-center">
        <Image
          height={100}
          width={100}
          src={imageUrl}
          alt={altText}
          className="object-cover rounded-full h-24 w-24 border-2 border-white transition duration-500"
        />
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute bottom-full mb-4 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
          >
            <div className="font-bold text-white relative z-30 text-base">
              {name}
            </div>
            <div className="text-white text-xs">{designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
