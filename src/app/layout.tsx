import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from './ClientWrapper';
import Image from "next/image";

// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const metadata: Metadata = {
  title: "Machyna",
  description: "Enrich your shopping journey with Machyna AI SmartCart",
};

function Header() {
  return(
    <header className="flex items-center justify-between px-16 py-7 text-gray-700 text-lg  w-full border-b border-gray-300 mb-4">
      <Image
        src="/img/machyna_logo_black_text.png"
        alt="Machyna Logo" 
        className="h-14"
      />
      <ul className="flex justify-between gap-6">
        <li><a>Problem</a></li>
        <li><a>About</a></li>
        <li><a>Pricing</a></li>
        <li><a>Blog</a></li>
        <li><a>Get Started</a></li>
      </ul>
    </header>
  );
}

function BottomHeader() {
  return (
    <>
    </> 
  );
}

function Footer() {
  return(
    <>
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="...">
        <ClientWrapper>
          <Header />
          <BottomHeader />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}