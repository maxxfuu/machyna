// src/components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem] py-7 text-[#01191D] text-lg mt-1">
      <div className="flex items-center justify-between border-b border-gray-300 pb-6">
        <Link href="/">
          <Image
            src="/machyna_logo/machyna_logo_black_text.svg"
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
              className="hover:underline opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              href="/"
            >
              Problem
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <a className="hover:underline opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:underline opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Blog
            </a>
          </li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#01191D] rounded-lg px-2 py-1 transition-colors duration-300 ease-in-out hover:bg-[#01191D] hover:text-white"
          >
            Get Started
          </motion.button>
        </ul>
      </div>
    </header>
  );
}
