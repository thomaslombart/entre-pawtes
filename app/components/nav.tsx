"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Configuration des animations spring pour le menu
  const menuAnimation = {
    initial: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top",
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <nav className="flex justify-between items-center px-4 md:px-18 py-2">
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

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/#services"
            className="text-black hover:underline font-medium transition-colors"
          >
            Mes services
          </Link>
          <Link
            href="/blog"
            className="text-black hover:underline font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/qui-suis-je"
            className="text-black hover:underline font-medium transition-colors"
          >
            Qui suis-je ?
          </Link>
          <Link
            href="https://cal.com/entre-pawtes/premier-appel"
            className="bg-amber-900 text-white hover:bg-amber-800 font-bold py-2 px-6 rounded-full relative 
            before:hidden md:before:block before:absolute before:inset-[-2px] before:rounded-full before:animate-pulse before:bg-amber-600/70 
            before:blur-md before:-z-10 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prendre RDV
          </Link>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 rounded-b-3xl"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={menuAnimation}
            >
              <div className="flex flex-col p-4 space-y-5">
                <Link
                  href="/#services"
                  className="text-gray-800 hover:text-emerald-800 font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mes services
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-800 hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/qui-suis-je"
                  className="text-gray-800 hover:text-emerald-800 font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Qui suis-je ?
                </Link>
                <Link
                  href="https://cal.com/entre-pawtes/premier-appel"
                  className="bg-amber-900 text-white hover:bg-amber-800 font-bold py-2 px-6 rounded-full transition-all text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prendre RDV
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
