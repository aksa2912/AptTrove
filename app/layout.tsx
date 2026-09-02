import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AptTrove — A Treasure Trove of Aptitudes",
    template: "%s | AptTrove",
  },
  description:
    "AptTrove helps students find the right people based on skills, availability, location, and team fit. Discover SkillSwap partners and build balanced teams for any project.",
  keywords: ["skills", "collaboration", "students", "team building", "learning", "skillswap"],
  authors: [{ name: "AptTrove" }],
  openGraph: {
    title: "AptTrove — A Treasure Trove of Aptitudes",
    description: "What if the right connection could find you?",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
