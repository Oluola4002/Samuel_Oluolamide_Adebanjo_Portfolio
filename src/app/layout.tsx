import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Dynamically import client-only physics, canvas starfield, and custom cursor with ssr: false
const SpaceBackground = dynamic(() => import("@/components/SpaceBackground"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Samuel Oluolamide Adebanjo | Aerospace Engineer & Aero-Astro Intelligence",
  description:
    "Official portfolio of Samuel Oluolamide Adebanjo. First-Class Aerospace Engineer & Researcher pioneering Aero-Astro Intelligence: autonomous UAV/UGV robotics, flight dynamics, and deep learning.",
  keywords: [
    "Samuel Oluolamide Adebanjo",
    "Samuel Adebanjo",
    "Aerospace Engineer",
    "Aero-Astro Intelligence",
    "Autonomous Robotics",
    "UAV Autonomy",
    "Lagos State University",
    "Best Graduating Student",
    "SPE NAICE",
    "Deep Learning",
  ],
  authors: [{ name: "Samuel Oluolamide Adebanjo" }],
  openGraph: {
    title: "Samuel Oluolamide Adebanjo | Aero-Astro Intelligence",
    description:
      "First-Class Aerospace Engineer & Researcher pioneering Aero-Astro Intelligence: autonomous robotics and aerospace systems.",
    url: "https://samueloluolamideadebanjo.com",
    siteName: "Samuel Oluolamide Adebanjo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Oluolamide Adebanjo | Aerospace Engineer",
    description:
      "First-Class Aerospace Engineer & Researcher pioneering Aero-Astro Intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.variable} dark scroll-smooth`}>
      <body className="font-sans antialiased bg-space-void text-foreground min-h-screen selection:bg-cyan-400 selection:text-black relative">
        <SpaceBackground />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
