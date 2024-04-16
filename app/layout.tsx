import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQuery from "@/components/react-query";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tube Mind Sync",
  description:
    "Tube Mind Sync - Unlock the Power of AI Summaries for YouTube Videos",
  keywords: ["youtube", "summary", "youtube summary", "ai summary"],
  openGraph: {
    url: "https://tubemindsync.vercel.app/",
    type: "website",
    title: "Tube Mind Sync",
    description:
      "Tube Mind Sync - Unlock the Power of AI Summaries for YouTube Videos",
    images: [
      {
        url: "https://tubemindsync.vercel.app/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "tubemindsync",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tube Mind Sync",
    description:
      "Tube Mind Sync - Unlock the Power of AI Summaries for YouTube Videos",
    creator: "@iliutaarian",
    site: "@iliutaarian",
    images: [
      {
        url: "https://tubemindsync.vercel.app/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "tubemindsync",
      },
    ],
  },
  alternates: {
    canonical: "https://tubemindsync.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background", inter.className)}>
        <ReactQuery>
          <ClerkProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
            <Toaster />
            <Analytics />
          </ClerkProvider>
        </ReactQuery>
      </body>
    </html>
  );
}
