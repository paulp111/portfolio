
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/styles/globals.css"; // Verwenden Sie den relativen Pfad

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My artsy portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
