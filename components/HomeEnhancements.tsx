"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeEnhancements() {
  const [progress, setProgress] = useState(0);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const updateFromScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setProgress(Math.min(Math.max(nextProgress, 0), 1));
      setActionsVisible(window.scrollY > window.innerHeight * 0.7);
      setBackToTopVisible(window.scrollY > window.innerHeight * 1.3);
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="fixed left-0 top-16 z-40 h-0.5 origin-left bg-[#00a65a] motion-reduce:hidden"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
        aria-hidden="true"
      />

      <div
        className={`fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-gray-200 bg-white/95 p-1.5 shadow-xl backdrop-blur transition-all duration-300 md:hidden dark:border-white/10 dark:bg-gray-950/95 ${
          actionsVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
        aria-label="Quick actions"
      >
        <Link
          href="/membership"
          className="rounded-full bg-[#006B3C] px-5 py-2.5 text-sm font-bold text-white"
        >
          Join NSBE
        </Link>
        <Link
          href="/events"
          className="rounded-full px-5 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
        >
          Events
        </Link>
      </div>

      <aside
        className={`fixed bottom-8 right-6 z-40 hidden flex-col items-end gap-2 transition-all duration-300 md:flex ${
          actionsVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
        aria-label="Quick actions"
      >
        <Link
          href="/membership"
          className="rounded-full bg-[#006B3C] px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#005530]"
        >
          Join NSBE
        </Link>
        <Link
          href="/sponsors"
          className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-800 shadow-lg transition-transform hover:-translate-y-0.5 hover:border-[#006B3C] hover:text-[#006B3C] dark:border-white/10 dark:bg-gray-950 dark:text-gray-100 dark:hover:border-green-400 dark:hover:text-green-300"
        >
          Become a sponsor
        </Link>
        <button
          type="button"
          onClick={scrollToTop}
          className={`mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-lg text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#006B3C] ${
            backToTopVisible ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Back to top"
        >
          ↑
        </button>
      </aside>
    </>
  );
}
