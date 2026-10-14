"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/media/events/fall-kickoff/mixer-1.jpg",
    alt: "NSBE URegina students posing together beside the chapter banner after a mixer",
  },
  {
    src: "/media/events/fall-kickoff/mixer-2.jpg",
    alt: "Students connecting and completing activities during an NSBE URegina mixer",
  },
  {
    src: "/media/events/fall-kickoff/mixer-3.jpg",
    alt: "A full room of students sharing food and conversation at an NSBE URegina mixer",
  },
];

export default function FeaturedEventCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % SLIDES.length);
    }, 5_500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % SLIDES.length);
  };

  return (
    <div
      className="relative min-h-[360px] overflow-hidden bg-gray-900 sm:min-h-[460px] lg:min-h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Scenes from an NSBE URegina mixer"
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== activeSlide}
        >
          <Image
            src={slide.src}
            alt={index === activeSlide ? slide.alt : ""}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className={`object-cover ${index === 2 ? "object-[center_70%]" : "object-center"}`}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-5 p-5 sm:p-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
            Community in action
          </p>
          <p className="mt-1 max-w-sm text-sm font-medium text-white">
            Scenes from a recent NSBE URegina mixer
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/25 text-lg text-white backdrop-blur transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Show previous photo"
          >
            ←
          </button>
          <button
            type="button"
            onClick={showNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/25 text-lg text-white backdrop-blur transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Show next photo"
          >
            →
          </button>
        </div>
      </div>

      <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeSlide ? "w-6 bg-white" : "w-2 bg-white/45 hover:bg-white/75"
            }`}
            aria-label={`Show photo ${index + 1} of ${SLIDES.length}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
