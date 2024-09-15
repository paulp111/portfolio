import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridSection() {
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/images/ghini.jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/images/cali.jpg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/images/photo2.png",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/images/photo1.png",
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Just like coding in the zone—sometimes, you need a break from the noise. This cozy house in the woods mirrors my approach to life: simple, focused, and a space to reset before the next challenge. A reminder that even in solitude, growth happens.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      The California Dream
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Much like my goals in IT and software development, the California flag represents freedom, ambition, and the drive to explore new opportunities. It’s about aiming for something bigger, even when it feels just out of reach.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Natures Escape
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Tucked away in the embrace of green, this place feels like a personal reset button. Away from the chaos, it’s where you recharge, reflect, and get back in tune with what really matters before diving back into the grind.

      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Mountain of Possibilities
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Standing at the base of a mountain feels like staring at a new project—big, daunting, but full of possibilities. Whether it’s tackling complex code or pushing myself on a long run, it’s all about taking that first step and embracing the challenge ahead.
      </p>
    </div>
  );
};
