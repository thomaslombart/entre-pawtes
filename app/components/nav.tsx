"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
      <nav className="flex justify-between items-center px-4 md:px-18">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/entre-pawtes.png"
            alt="Logo Entre Pawtes"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-lg font-black text-primary">Entre Pawtes</span>
        </Link>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <Link
          href="https://cal.com/entre-pawtes/premier-appel"
          className="hidden md:block bg-amber-900 text-white hover:bg-amber-900/90 font-bold py-2 px-4 md:py-4 md:px-8 rounded-lg md:rounded-none transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre RDV
        </Link>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col p-4">
              <Link
                href="https://cal.com/entre-pawtes/premier-appel"
                className="bg-amber-900 text-white hover:bg-amber-900/90 font-bold py-3 px-4 rounded-lg transition-colors text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
