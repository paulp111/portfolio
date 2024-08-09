"use client";
import React from "react";
import Image from "next/image";

export function Introduction() {
  return (
    <div className="flex justify-center items-center flex-col px-4">
      <div className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl max-w-3xl mx-auto mb-6 text-left">
        <p className="mb-6">
           i'm a <span className="font-bold">developer</span> dedicated to transforming ideas into reality through technology and creativity.
        </p>
        <p className="mb-6">
          I hold an <span className="font-bold">LAP</span> in Application
          Development and have completed several internships, including one at
          the <span className="font-bold">University&nbsp;of&nbsp;Graz</span>'s
          IT division.
        </p>
        <p className="mb-6">
          This{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-purple-500">
            Portfolio
          </span>{" "}
          showcases my journey and passion for coding and design. Here, you'll
          find examples of my work, links to my projects, the tech stack I use,
          and a glimpse into what drives me.
        </p>
        <p className="mb-6">
          Take a look around, and let's create something extraordinary
          <span className="font-bold"> together</span>!
        </p>
      </div>
    </div>
  );
}
