// pages/index.tsx
import React from 'react';
import FooterWithShapes from '../components/FooterWithShapes';
import './styles/FooterWithShapes.css';


const HomePage: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Add your other page content here */}
      <h1 style={{ textAlign: 'center', padding: '2rem 0' }}>Welcome to the Homepage</h1>
      <p style={{ textAlign: 'center', padding: '1rem' }}>
        This is a placeholder for other content. You can add more sections or components as needed.
      </p>

      {/* Footer with animated shapes */}
      <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%' }}>
        <FooterWithShapes />
      </div>
    </div>
  );
};

export default HomePage;






// THIS IS THE NORMAL PAGE DO NOT DELETE IT uwu

/* import Head from "next/head";
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
*/