import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Samuel Oluolamide Adebanjo | Software Engineer & Creative Developer",
  description:
    "Official portfolio of Samuel Oluolamide Adebanjo. Software Engineer & Creative Technologist crafting high-octane web applications, fluid micro-interactions, and resilient systems.",
  keywords: [
    "Samuel Oluolamide Adebanjo",
    "Samuel Adebanjo",
    "Portfolio",
    "Software Engineer",
    "Frontend Engineer",
    "Full Stack Developer",
    "Creative Developer",
    "Lagos",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Samuel Oluolamide Adebanjo" }],
  openGraph: {
    title: "Samuel Oluolamide Adebanjo | Portfolio",
    description:
      "Software Engineer & Creative Technologist crafting high-octane web applications and fluid micro-interactions.",
    url: "https://samueloluolamideadebanjo.com",
    siteName: "Samuel Oluolamide Adebanjo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Oluolamide Adebanjo | Software Engineer",
    description:
      "Software Engineer & Creative Technologist crafting high-octane web applications and fluid micro-interactions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="font-sans antialiased bg-background text-foreground min-h-screen selection:bg-emerald-400 selection:text-black"
      >
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

