import Head from "next/head";
import "../../assets/styles/globals.css"; // Der richtige Pfad zu globals.css
import { HeroHighlightSection } from "@/components/HeroHighlightSection";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Description of the main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <HeroHighlightSection />
      </main>
    </div>
  );
}
