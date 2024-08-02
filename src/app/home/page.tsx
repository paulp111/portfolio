import Head from "next/head";
import "../../assets/styles/globals.css";
import { HeroHighlightSection } from "@/components/HeroHighlightSection";
import { FlipWordsSection } from "@/components/FlipWordsSection";
import { LayoutGridSection } from "@/components/LayoutGridSection";
import CustomScroll from "@/components/CustomScroll";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Description of the main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-black">
        <HeroHighlightSection />
        <CustomScroll />
        <div className="flex justify-center items-center">
          <LayoutGridSection />
        </div>
        <div className="flex items-center justify-center">
          <FlipWordsSection />
        </div>
      </main>
    </div>
  );
}
