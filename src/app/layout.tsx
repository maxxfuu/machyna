import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Barlow_Semi_Condensed } from "next/font/google";
import Header from "../components/Header";

const barlowsemicondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Machyna",
  description: "Enrich your shopping journey with Machyna AI SmartCart",
  icons: {
    icon: "/machyna_logo/favicon.ico",
  },
};

function Footer() {
  return (
    <section className="flex flex-col justify-between bg-[#281429] px-4 sm:px-6 md:px-12 xl:px-[4rem] 2xl:px-[12.8rem] py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Footer Top Half */}
      <div className="flex flex-row justify-between">
        {/* Machyna Logo */}
        <div>
          <Image
            src="/machyna_logo/machyna_logo_white_text.svg"
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
