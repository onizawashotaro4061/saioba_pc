import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navItems = [
    { href: "/nextstage", label: "NEXTSTAGE" },
    { href: "/news", label: "NEWS" },
    { href: "/about", label: "ABOUT" },
    { href: "/member", label: "MEMBER" },
    { href: "/history", label: "HISTORY" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <footer className="bg-gray-100 py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="text-primary no-underline hover:underline font-medium font-heading-en"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
          <a
            href="https://twitter.com/gekidan_saiouba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/img/icon_x.PNG"
              alt="X (Twitter)"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </a>
          <a
            href="https://www.instagram.com/gekidan_saiouba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/img/icon_ig.PNG"
              alt="Instagram"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </a>
          <a
            href="https://www.youtube.com/@gekidansaiouba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/img/icon_yt.PNG"
              alt="YouTube"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </a>
        </div>
        <div className="text-center text-gray-600 text-xs sm:text-sm">
          <p className="font-body-en">©Gekidan Saiouba, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
