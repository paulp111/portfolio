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
import ScrollDownButton from "@/components/ScrollDownButton";
import { ElonCard } from "@/components/ElonCard";
import { RoundedImageWithTooltip } from "@/components/RoundedImageWithTooltip";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

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

        {/* About me Section */}
        <div className="flex flex-col items-center justify-center mt-4">
          <TypewriterEffectSmoothDemo />
        </div>

        {/* RoundedImageWithTooltip */}
        <div className="flex flex-col items-center justify-center mt-4">
          <RoundedImageWithTooltip imageUrl="/images/nana.JPEG" />
        </div>

        {/* Sticky Scroll Reveal Demo */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-15">
          <StickyScrollRevealDemo />
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
            <ElonCard />
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
            {/* Durak Project Card */}
            <a href="https://github.com/paulp111/Durak-" target="_blank" rel="noopener noreferrer">
              <DirectionAwareHover videoUrl="/videos/lambo.mp4">
                <p className="font-bold text-xl">Durak Project</p>
                <p className="font-normal text-sm">
                  A card game implementation using Java and JavaFX.
                </p>
              </DirectionAwareHover>
            </a>

            {/* PHP Shop Card */}
            <a href="https://github.com/paulp111/php-shop" target="_blank" rel="noopener noreferrer">
              <DirectionAwareHover videoUrl="/videos/lambo.mp4">
                <p className="font-bold text-xl">PHP Shop</p>
                <p className="font-normal text-sm">
                  A simple shop system built with PHP for product management.
                </p>
              </DirectionAwareHover>
            </a>

            {/* Battleships Project Card */}
            <a href="https://github.com/paulp111/Battleships_Java_Final" target="_blank" rel="noopener noreferrer">
              <DirectionAwareHover videoUrl="/videos/lambo.mp4">
                <p className="font-bold text-xl">Battleships Project</p>
                <p className="font-normal text-sm">
                  A Battleships game developed in Java with a clean user interface.
                </p>
              </DirectionAwareHover>
            </a>
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
