// Heavy Work In Progress

"use client";
import Image from "next/image";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 xl:px-[3rem] 2xl:px-[12.8rem] py-7 text-[#01191D] text-lg mt-1">
      <div className="">
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
      </div>
    </div>
  );
};

export default function ClientNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Problem", "About", "Pricing", "Blog", "Get Started"];

  return (
    <div className="px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem] py-7 text-[#01191D] text-lg mt-1">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="flex items-center justify-between gap-6"
          justify="center"
        >
          <NavbarItem className="">
            <Link color="foreground" href="#">
              Problem
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              <button className="border border-[#01191D] rounded-lg px-2 py-1 transition-colors duration-300 ease-in-out hover:bg-[#01191D] hover:text-white">
                Get Started
              </button>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
