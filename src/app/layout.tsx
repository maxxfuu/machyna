import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from './ClientWrapper';
import Image from "next/image";
import Link from "next/link";

// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Machyna",
  description: "Enrich your shopping journey with Machyna AI SmartCart",
  icons: {
    icon:"/img/favicon.ico"
  },
};

function Header() {
  return(
    <div className="w-full border-b border-gray-300 mb-1">
      <header className="flex items-center justify-between px-16 py-7 text-[#01191D] text-lg max-w[100%-3rem]">
        <Link href="/">
          <Image
            src="/img/machyna_logo_black_text.png"
            alt="Machyna Logo"
            width={150} 
            height={40}
            draggable={false}
            className="h-14 w-auto"
          />
        </Link>

        <ul className="flex justify-between gap-6 cursor-pointer">
          <li><a>Problem</a></li>
          <li><a>About</a></li>
          <li><a>Pricing</a></li>
          <li><a>Blog</a></li>
          <li><a>Get Started</a></li>
        </ul>
      </header>
    </div>
  );
}

function Footer() {
  return(
    <section>

    </section>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="...">
        <ClientWrapper>
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}