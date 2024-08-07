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
import { InfoCard } from "@/components/InfoCard"; 
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { DirectionAwareHoverDemo } from "@/components/DirectionAwareHoverCard"; // Importiere die Demo-Komponente
import ScrollDownButton from "@/components/ScrollDownButton"; // Import the new ScrollDownButton component


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

        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          <StaticHighlight className="text-4xl mb-6">Digital Dreams</StaticHighlight>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Tip: Click on a picture to reveal more details! delete🔥
          </p>
          <LayoutGridSection />
        </div>

        <div className="flex items-center justify-center min-h-screen pt-10">
          <TextGenerateEffectSection />
          <div className="ml-8">
            <InfoCard />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <StaticHighlight className="text-4xl mb-6">Skills & Passion</StaticHighlight>
          <CardHoverEffectSection />
        </div>

        <div className="flex items-center justify-center min-h-screen pt-10">
          <FlipWordsSection />
        </div>

        {/* Hinzufügen der Direction-Aware-Hover-Karten */}
        <div className="flex items-center justify-center py-10 bg-gray-100">
          <DirectionAwareHoverDemo />
          <DirectionAwareHoverDemo />
          <DirectionAwareHoverDemo />
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
