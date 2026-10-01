"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryItem = { src: string; alt: string; title: string; category: string };

export default function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveIndex(null);
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button key={item.src} type="button" onClick={() => setActiveIndex(index)} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B3C]">
            <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white"><p className="text-xs font-bold uppercase tracking-widest text-white/55">{item.category}</p><h3 className="mt-1 font-black">{item.title}</h3></div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setActiveIndex(null)}>
          <button type="button" onClick={() => setActiveIndex(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-gray-950" aria-label="Close photo viewer">×</button>
          <div className="relative h-[75vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={items[activeIndex].src} alt={items[activeIndex].alt} fill sizes="100vw" className="object-contain" priority />
          </div>
        </div>
      )}
    </>
  );
}
