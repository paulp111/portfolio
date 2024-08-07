import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectSection() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "React",
    description:
      "Next.js, Vite & Three.js, because they make building web apps efficient, enjoyable, and visually impressive with 3D graphics.",
    link: "/subpage",
  },
  {
    title: "JavaScript & TypeScript",
    description:
      "JS & TS, the backbone of modern web development, making my code dynamic, robust, and maintainable.",
    link: "/subpage",
  },
  {
    title: "Python",
    description:
      "Python, for its simplicity and power in scripting, data analysis, and backend development.",
    link: "/subpage",
  },
  {
    title: "Kotlin",
    description:
      "Kotlin, for modern, expressive Android and cross-platform app development.",
    link: "/subpage",
  },
  {
    title: "Java, PHP & C#",
    description:
      "Java, PHP & C#, for versatile server-side development, Windows app creation, and game development with Unity.",
    link: "/subpage",
  },
  {
    title: "Design",
    description:
      "Photoshop, AfterEffects, Figma... all of them. Because it's my passion. Dot.",
    link: "/subpage",
  },
];
