import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BackgroundFX } from "@/components/BackgroundFX";
import { CustomCursor } from "@/components/CustomCursor";
import { LenisProvider } from "@/components/LenisProvider";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  title: "Sriram PS | Software Engineer & AI/ML Developer",
  description:
    "A cinematic engineering portfolio for Sriram PS, AI/ML undergraduate and software engineer focused on backend systems, full-stack products, and applied intelligence.",
  keywords: ["Sriram PS", "Software Engineer", "AI ML Developer", "Backend Engineer", "Portfolio"],
  authors: [{ name: "Sriram PS" }],
  openGraph: {
    title: "Sriram PS | Software Engineer & AI/ML Developer",
    description: "Futuristic AI engineer portfolio and digital headquarters.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased">
        <LenisProvider />
        <ScrollProgress />
        <BackgroundFX />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
