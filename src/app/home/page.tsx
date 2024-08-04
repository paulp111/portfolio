// pages/index.tsx

import Head from "next/head";
import "../../assets/styles/globals.css";
import { HeroHighlightSection } from "@/components/HeroHighlightSection";
import { FlipWordsSection } from "@/components/FlipWordsSection";
import { LayoutGridSection } from "@/components/LayoutGridSection";
import CustomScroll from "@/components/CustomScroll";
import { CardHoverEffectSection } from "@/components/CardHoverEffectSection";
import { TextGenerateEffectSection } from "@/components/TextGenerateEffectSection";
import { StaticHighlight } from "@/components/ui/static-highlight";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoCard } from "@/components/InfoCard"; // Import der neuen Komponente

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Description of the main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f7fafc] dark:bg-black">
        <Navbar /> {/* Hier wird die Navbar eingefügt */}
        <HeroHighlightSection /> {/* Hero Section with Logo */}
        <CustomScroll />
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          <StaticHighlight className="text-4xl mb-6">Digital Dreams</StaticHighlight>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Tip: Click on a picture to reveal more details! delete🔥
          </p>
          <LayoutGridSection />
        </div>
        <div className="flex items-center justify-center min-h-screen pt-10">
          <TextGenerateEffectSection />
          <InfoCard className="ml-8" /> {/* Hier wird die InfoCard eingefügt */}
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <StaticHighlight className="text-4xl mb-6">Code & Canvas</StaticHighlight>
          <CardHoverEffectSection />
        </div>
        <div className="flex items-center justify-center min-h-screen pt-10">
          <FlipWordsSection />
        </div>
      </main>

      <Footer /> {/* Hier wird der Footer eingebunden */}
    </div>
  );
}
