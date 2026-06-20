import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/Components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreatorVerse — Explore How Great Creators Became Who They Are",
  description:
    "A visual storytelling platform exploring the origins, struggles, and creative evolution of the world's greatest creators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-bg text-text antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-10">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="font-display text-lg text-text">CreatorVerse</p>
            <p className="mt-2 text-sm text-muted">
              How did this creator become this creator?
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
