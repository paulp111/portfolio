"use client";
import Image from "next/image";
import React from "react";

export function RoundedImageWithTooltip({
  imageUrl,
}: {
  imageUrl: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center -mt-10">
      <Image
        height={100}
        width={100}
        src={imageUrl}
        alt=""  // alt text removed
        className="object-cover rounded-full h-24 w-24 border-2 border-white"
      />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mt-4">
        Dev | Designer
      </p>
    </div>
  );
}
