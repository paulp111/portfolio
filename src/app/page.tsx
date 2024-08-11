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
import { Introduction } from "@/components/Introduction";
import { RoundedImageWithTooltip } from "@/components/RoundedImageWithTooltip";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

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
        <ScrollDownButton />
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
        {/* Typewriter */}
        <div className="flex flex-col items-center justify-center h-[19rem]">
          <TypewriterEffectSmoothDemo />
        </div>
        {/* Testing RoundedImageWithTooltip under Introduction */}
        <div className="flex flex-col items-center justify-center h-[5rem]">
          <RoundedImageWithTooltip
            imageUrl="/images/nana.JPEG"
            altText="Description of image"
            name="Nana"
            designation="Your Designation"
          />
        </div>

        {/* Sticky Scroll Reveal Demo */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          <StaticHighlight className="text-4xl mb-6">About me</StaticHighlight>
          <StickyScrollRevealDemo />{" "}
          {/* Adding the StickyScrollRevealDemo component */}
        </div>

        {/* Introduction 
        <div className="flex flex-col items-center justify-center pt-10 mt-[15rem]">
          <StaticHighlight className="text-4xl mb-6">
            About me
          </StaticHighlight>
          <Introduction />
        </div>
*/}

        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          <StaticHighlight className="text-4xl mb-6">
            Digital Dreams
          </StaticHighlight>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Every idea starts with a spark
          </p>
          <LayoutGridSection />
        </div>

        {/* Elon quote & Funny Elon card */}
        <div className="flex items-center justify-center min-h-screen pt-10">
          <TextGenerateEffectSection />
          <div className="ml-8">
            <ElonCard />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <StaticHighlight className="text-4xl mb-6">
            Skills & Passion
          </StaticHighlight>
          <CardHoverEffectSection />
        </div>

        <div className="flex items-center justify-center min-h-screen pt-10">
          <FlipWordsSection />
        </div>

        {/* Adding the Direction-Aware-Hover cards */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <StaticHighlight className="text-4xl mb-6">
            Explore More
          </StaticHighlight>
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
          backgroundColor: "#f7fafc",
        }}
      ></div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
