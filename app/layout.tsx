

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import PageTransition from "@/components/providers/PageTransition";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinmaya Kumar Das",
  description: "Premium UI Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="bg-background text-foreground overflow-x-hidden">

  {/* FIXED HEADER */}
  <Header />

  <SmoothScrollProvider>

    {/* <main className="relative w-full min-h-screen">
      {children}
    </main> */}
<main className="relative w-full min-h-screen">
  <PageTransition>
    {children}
  </PageTransition>
</main>
    <Footer />

  </SmoothScrollProvider>

  <Toaster position="top-right" />

</body>
    </html>
  );
}