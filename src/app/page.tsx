import Head from "next/head";
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
