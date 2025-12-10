"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Image
      src="/img/topback.png"
      alt="トップに戻る"
      width={50}
      height={50}
      className={`fixed bottom-3 right-3 sm:bottom-5 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 cursor-pointer transition-all duration-300 hover:scale-110 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      title="トップに戻る"
    />
  );
}
