"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/work.png" 
            alt="Collaborative Editing"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/fire.png" 
            alt="Real time changes"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/doge.png"  
            alt="Version control"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/vac.png"  
            alt="Running out of content"
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
    <div className="p-10 bg-[#f7fafc]">
      <StickyScroll content={content} />
    </div>
  );
}
