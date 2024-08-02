"use client";
import Head from "next/head";
import { TracingBeamSection } from "@/components/TracingBeamSection";
import "../../assets/styles/globals.css";

export default function SubPage() {
  return (
    <div>
      <Head>
        <title>Sub Page</title>
        <meta name="description" content="Description of the sub page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-black min-h-screen">
        <TracingBeamSection />
      </main>
    </div>
  );
}
