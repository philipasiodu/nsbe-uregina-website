"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Executive Team", href: "/executive-team" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Chapter Name */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 min-w-0 shrink-0"
          >
            <div className="w-9 h-9 rounded-full bg-[#006B3C] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm tracking-wide">N</span>
            </div>
            <span className="font-semibold text-[#006B3C] text-base leading-tight whitespace-nowrap">
              NSBE <span className="hidden sm:inline text-gray-600 font-normal">| UofR Chapter</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-[#006B3C] hover:bg-green-50 transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/membership"
              className="inline-flex items-center px-4 py-2 rounded-md bg-[#006B3C] text-white text-sm font-semibold hover:bg-[#005530] active:bg-[#004425] transition-colors duration-150 shadow-sm whitespace-nowrap"
            >
              Join NSBE
            </Link>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-md hover:bg-green-50 transition-colors"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-transform duration-300 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 pb-4 pt-2 shadow-lg">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-md hover:text-[#006B3C] hover:bg-green-50 transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Link
              href="/membership"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-2.5 rounded-md bg-[#006B3C] text-white text-sm font-semibold hover:bg-[#005530] transition-colors duration-150 shadow-sm"
            >
              Join NSBE
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}