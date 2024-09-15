"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { TracingBeamSection } from "@/components/TracingBeamSection";
import "../../assets/styles/globals.css";

export default function SubPage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Sub Page</title>
        <meta name="description" content="Description of the sub page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f7fafc] dark:bg-black min-h-screen overflow-hidden">
        <div className="fixed top-0 left-0 p-4">
          <button
            onClick={() => router.back()}
            className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn relative px-4 py-2 rounded-md"
          >
            <span className="group-hover/modal-btn:translate-x-40 transition duration-500">
              Go Back
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ←
            </div>
          </button>
        </div>
        <TracingBeamSection />
      </main>
    </div>
  );
}
