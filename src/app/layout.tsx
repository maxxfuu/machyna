'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Machyna",
  description: "Enrich your shopping journey with Machyna AI SmartCart",
};

function Header() {
  return(
    <header className="flex items-center justify-between px-4 py-7 text-gray-700 text-lg border-b border-gray-300 mb-4">
      <div>Machyna</div>
      <ul className="flex justify-between gap-6">
        <li><a>Problem</a></li>
        <li><a>About</a></li>
        <li><a>Get Started</a></li>
      </ul>
    </header>
  );
}

function Footer() {
  return(
    <>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {isHome && (
          <div className="flex items-center justify-center bg-[#D52052] w-full">
            <div className=" text-white text-sm px-4 py-3">
              Machyna Media Coverage<span className="inline-block ml-1">↗</span>
            </div>
          </div>
        )}

        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
