"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Me",
    description:
      "Hi, I’m Paul, an aspiring software developer based in Graz, Austria. I’m currently completing my apprenticeship in application development and coding, where I’m honing my skills in creating efficient, user-centered applications. My passion lies in problem-solving and optimizing processes through technology.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/work.png"
          alt="About Me"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Practical Experience",
    description:
      "During my apprenticeship, I’ve gained hands-on experience, most notably through an internship at the University of Graz's IT Division. Working in a large, dynamic environment, I contributed to real-world projects that enhanced my understanding of systems management, development workflows, and collaboration within an academic institution.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/fire.png"
          alt="Practical Experience"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Technical Skills",
    description:
      "My technical toolkit includes proficiency in multiple programming languages, frameworks, and tools essential for modern software development. From backend development to UI/UX design, I am focused on building applications that not only work well but also provide a seamless user experience. I’m continuously learning and staying up-to-date with industry trends.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/doge.png"
          alt="Technical Skills"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Why Choose Me?",
    description:
      "I combine practical experience with a strong work ethic, adaptability, and a genuine interest in helping teams and businesses succeed through technology. I thrive in collaborative environments and am driven by a desire to contribute to meaningful projects. Whether it's coding, troubleshooting, or improving systems, I’m committed to delivering high-quality results.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/vac.png"
          alt="Why Choose Me?"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-[#f7fafc] -mt-6">
      <StickyScroll content={content} />
    </div>
  );
}
