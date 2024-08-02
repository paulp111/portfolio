import Head from "next/head";
import "../../assets/styles/globals.css"; // Der richtige Pfad zu globals.css
import { HeroHighlightSection } from "@/components/HeroHighlightSection";
import CustomScroll from "@/components/CustomScroll"; // Der richtige Pfad zu CustomScroll
import { FlipWordsSection } from "@/components/FlipWordsSection"; // Hinzugefügt

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
        <FlipWordsSection /> {/* Neue Section hinzugefügt */}
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-3xl">Hier ist zusätzlicher Inhalt</p>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-3xl">Noch mehr Inhalt, um das Scrollen zu testen</p>
        </div>
      </main>
    </div>
  );
}
