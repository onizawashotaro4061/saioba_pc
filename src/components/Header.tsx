"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/nextstage", label: "NEXTSTAGE" },
    { href: "/news", label: "NEWS" },
    { href: "/about", label: "ABOUT" },
    { href: "/member", label: "MEMBER" },
    { href: "/history", label: "HISTORY" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-white text-black py-2 md:py-4 text-center relative">
      <div className="flex justify-between items-center relative px-2 md:px-4">
        <div className="flex-1 flex justify-center items-center">
          <Link href="/">
            <Image
              src="/img/header_trans.png"
              alt="劇団さいおうば"
              width={300}
              height={80}
              className="h-12 sm:h-16 md:h-20 w-auto"
              priority
            />
          </Link>
        </div>
        <div
          className="flex justify-center items-center text-2xl sm:text-3xl cursor-pointer text-primary px-2 sm:px-4"
          onClick={toggleMenu}
        >
          &#9776;
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
          onClick={toggleMenu}
        />
      )}

      <nav
        className={`fixed top-0 right-0 w-64 sm:w-72 h-full bg-white z-[1000] transition-all duration-300 text-center shadow-lg ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-3xl text-primary hover:text-opacity-70"
          >
            &times;
          </button>
        </div>
        <ul className="list-none mt-8 p-0">
          {navItems.map((item) => (
            <li key={item.href} className="py-2.5">
              <Link
                href={item.href}
                className="no-underline text-primary block py-3 px-4 text-lg sm:text-xl text-center hover:bg-gray-100 transition-colors font-heading-en"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
