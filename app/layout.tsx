import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { BackgroundFX } from "@/components/BackgroundFX";
import { CustomCursor } from "@/components/CustomCursor";
import { LenisProvider } from "@/components/LenisProvider";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  title: "Sriram PS | AI/ML Engineer & Intelligent Systems Builder",
  description:
    "Engineering portfolio for Sriram PS: AI/ML systems, smart-city platforms, backend architecture, Linux research, zero-knowledge proof experiments, and product engineering.",
  keywords: ["Sriram PS", "AI ML Engineer", "Smart Parking System", "Systems Engineer", "Backend Engineer", "Portfolio", "Linux Research"],
  authors: [{ name: "Sriram PS" }],
  metadataBase: new URL("https://sriram-ps.vercel.app"),
  openGraph: {
    title: "Sriram PS | AI/ML Engineer & Intelligent Systems Builder",
    description: "Premium engineering portfolio focused on intelligent systems, smart-city AI, backend architecture, and research-driven applications.",
    type: "website"
  },
  robots: { index: true, follow: true }
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
        <Analytics />
      </body>
    </html>
  );
}
