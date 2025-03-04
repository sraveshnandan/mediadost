import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // Prevent duplicate styles

import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaDost - Your Trusted Media Partner for Targeted Advertising",
  description:
    "Discover the perfect advertising solutions for your brand. MediaDost connects brands with outdoor ads, digital marketing, influencers and event sponsorship opportunities. Plan and book media spaces with ease to grow your brand today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-medium antialiased `}>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
