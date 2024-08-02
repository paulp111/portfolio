import Head from "next/head";
import "../assets/styles/globals.css";
import { LandingPageEffect } from "@/components/LandingPageEffect";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My artsy portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <LandingPageEffect />
      </main>
    </div>
  );
}
