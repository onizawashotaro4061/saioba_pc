"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/img/top.png",
  "/img/top1.png",
  "/img/top2.png",
  "/img/top3.png",
  "/img/top4.png",
  "/img/top5.png",
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 absolute top-0 left-0"
          }`}
          style={{ width: "100%" }}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
