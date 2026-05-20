"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navlinks";
import {ChevronRight } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("Home");

  // Sync active link with the current URL path
  useEffect(() => {
    const currentLink = navLinks.find((link) => link.link === pathname);
    if (currentLink) {
      setActiveLink(currentLink.name);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-1000 w-full bg-white shadow">
      <div className="mx-auto flex  flex-row items-center justify-around px-6 py-4">
        
        {/* Logo and Nav links */}
        <div className="flex items-center gap-8 justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/kb_logo.svg"
              alt="Logo"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <span className="font-normal text-lg tracking-tight">
              KomeshaBuild
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                < Link
                  key={link.name}
                  href={link.link}
                  className={`px-3 py-2 text-sm transition-all hover:underline hover:text-black transition-colors ${
                    isActive ? "font-normal text-black" : "font-light text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-row items-center gap-2">
          <Link 
            href="https://cal.com/komeshabuild/komeshabuild-demo" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-3 px-3 py-2 text-sm font-medium hover:underline"
          >
            Book a Demo <ChevronRight className="w-3.5 h-3.5"/>
          </Link>
          <Link 
            href="https://app.komeshabuild.xyz/sign-in" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg text-sm font-medium bg-[var(--primaryblue)] text-white px-5 py-2 transition-opacity hover:opacity-90"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;