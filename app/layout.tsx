import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entre Pawtes | Éducatrice comportementaliste canine à Lille",
  description:
    "Entre Pawtes propose des services d'éducation et de comportementalisme canin sur Lille et ses alentours. Bilans comportementaux, cours individuels et balades.",
  keywords: [
    "éducateur canin",
    "comportementaliste canin",
    "dressage chien",
    "Lille",
    "Nord",
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Entre Pawtes | Éducatrice comportementaliste canine à Lille",
    description:
      "Entre Pawtes propose des services d'éducation et de comportementalisme canin sur Lille et sa région.",
    url: "https://www.entre-pawtes.fr",
    siteName: "Entre Pawtes",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.entre-pawtes.fr/images/qui-suis-je.webp",
        width: 1500,
        height: 1000,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
