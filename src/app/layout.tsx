import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from './ClientWrapper';
import Image from "next/image";
import Link from "next/link";

import { Barlow_Semi_Condensed } from 'next/font/google';
const barlowsemicondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Machyna",
  description: "Enrich your shopping journey with Machyna AI SmartCart",
  icons: {
    icon:"/img/favicon.ico"
  },
};

function Header() {
  return(
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
          <li><a className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">Problem</a></li>
          <li><a className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">About</a></li>
          <li><a className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">Pricing</a></li>
          <li><a className="hover:underline transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">Blog</a></li>
          <button className="border border-[#01191D] rounded-lg px-2 py-1 transition-colors duration-300 ease-in-out hover:bg-[#01191D] hover:text-white">
            Get Started
          </button>
        </ul>
      </div>
    </header>
  );
}

function Footer() {
  return(
    <section className="bg-[#281429] px-4 sm:px-6 md:px-12 xl:px-[4rem] 2xl:px-[12.8rem] py-8 sm:py-12 md:py-16 lg:py-20">
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

      </div>

      {/* buttons */}
      <div>

      </div>
    </section>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={barlowsemicondensed.className}>
        <ClientWrapper>
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}