import Head from "next/head";
import "@/assets/styles/globals.css";
import { HeroHighlightSection } from "@/components/HeroHighlightSection";
import { FlipWordsSection } from "@/components/FlipWordsSection";
import { LayoutGridSection } from "@/components/LayoutGridSection";
import CustomScroll from "@/components/CustomScroll";
import { CardHoverEffectSection } from "@/components/CardHoverEffectSection";
import { TextGenerateEffectSection } from "@/components/TextGenerateEffectSection";
import { StaticHighlight } from "@/components/ui/static-highlight";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { DirectionAwareHoverDemo } from "@/components/DirectionAwareHoverCard"; 
import ScrollDownButton from "@/components/ScrollDownButton"; 
import { ElonCard } from "@/components/ElonCard"; 
import { Introduction } from "@/components/Introduction"; // Import the new LinkPreviewDemo component

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Description of the main page" />
        <link rel="icon" href="/sctipts.png" />
      </Head>

      <main className="bg-[#f7fafc] dark:bg-black">
        <Navbar />
        <HeroHighlightSection />
        <ScrollDownButton /> {/* Add the ScrollDownButton here */}
        <CustomScroll />

        {/* Wellen-Übergang oberhalb des LayoutGridSection */}
        <div
          style={{
            backgroundImage: "url('/mask_1.svg')",
            backgroundSize: "cover",
            height: "150px", 
            marginBottom: "-5px", 
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Introduction */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          <Introduction/>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          <StaticHighlight className="text-4xl mb-6">Digital Dreams</StaticHighlight>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Every idea starts with a spark
          </p>
          <LayoutGridSection />
        </div>

        {/* Elon quote & Funny Elon card */}
        <div className="flex items-center justify-center min-h-screen pt-10">
          <TextGenerateEffectSection />
          <div className="ml-8">
            <ElonCard /> {/* Funny Elon card */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <StaticHighlight className="text-4xl mb-6">Skills & Passion</StaticHighlight>
          <CardHoverEffectSection />
        </div>

        <div className="flex items-center justify-center min-h-screen pt-10">
          <FlipWordsSection />
        </div>

        {/* Adding the Direction-Aware-Hover cards */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <StaticHighlight className="text-4xl mb-6">Explore More</StaticHighlight>
          <div className="flex space-x-4">
            <DirectionAwareHoverDemo />
            <DirectionAwareHoverDemo />
            <DirectionAwareHoverDemo />
          </div>
        </div>
      </main>

      {/* Wellen-Übergang unterhalb des Contents */}
      <div
        style={{
          backgroundImage: "url('/mask_2.svg')",
          backgroundSize: "cover",
          height: "150px", 
          marginBottom: "-5px", 
          backgroundRepeat: "no-repeat",
          transform: "rotate(180deg)", 
        }}
      ></div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}



// THIS IS THE NORMAL PAGE DO NOT DELETE IT uwu

/* import Head from "next/head";
import "../assets/styles/globals.css";
import { LandingPageEffect } from "@/components/LandingPageEffect";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to the bay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-[#f7fafc]">
        <LandingPageEffect />
      </main>
    </div>
  );
}
*/