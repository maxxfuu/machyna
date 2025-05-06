import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
// import ClientNavbar from "@/components/ClientNavbar";

import { Barlow_Semi_Condensed } from "next/font/google";
const barlowsemicondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Machyna",
  description: "Enrich your shopping journey with Machyna AI SmartCart",
  icons: {
    icon: "/img/favicon.ico",
  },
};

function Header() {
  return (
    <header className="px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem] py-7 text-[#01191D] text-lg mt-1">
      <div className="flex items-center justify-between border-b border-gray-300 pb-6">
        <Link href="/">
          <Image
            src="/img/machyna_logo_black_text.svg"
            alt="Machyna Logo"
            width={150}
            height={40}
            draggable={false}
            priority={true}
            className="h-14 w-auto"
          />
        </Link>

        <ul className="flex items-center justify-between gap-6 cursor-pointer">
          <li>
            <Link
              className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100"
              href="/"
            >
              Problem
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <a className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">
              Blog
            </a>
          </li>
          <button className="border border-[#01191D] rounded-lg px-2 py-1 transition-colors duration-300 ease-in-out hover:bg-[#01191D] hover:text-white">
            Get Started
          </button>
        </ul>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <section className="flex flex-col justify-between bg-[#281429] px-4 sm:px-6 md:px-12 xl:px-[4rem] 2xl:px-[12.8rem] py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Footer Top Half */}
      <div className="flex flex-row justify-between">
        {/* Machyna Logo */}
        <div>
          <Image
            src="/img/machyna_logo_white_text.svg"
            alt="Machyna Logo"
            width={60}
            height={16}
            draggable={false}
            priority={true}
            className="h-14 w-auto"
          />
        </div>

        {/* Nav links */}
        <div>
          <h1>Company</h1>
          <ul>
            <li>
              <a>Problem</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>

        {/* buttons */}
        <div>
          <Linkedin />
        </div>
      </div>

      {/* Footer Bottom Half */}
      <div className="flex justify-around px-4 sm:px-6 md:px-12 xl:px-[4rem] 2xl:px-[12.8rem] py-8 sm:py-12 md:py-16 lg:py-20">
        <a>©2024 by Machyna. All Rights Reserved.</a>
      </div>
    </section>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlowsemicondensed.className}>
        <ClientWrapper>
          {/* <ClientNavbar /> */}
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
