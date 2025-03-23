"use client";

import Link from "next/link";
import { useState } from "react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white text-center py-2 text-sm font-bold">
      <div className="max-w-6xl mx-auto px-4 relative flex items-center justify-center">
        <p>
          🍖 Nouveau : Découvrez la mastication idéale pour votre pawte !{" "}
          <Link href="/outils" className="underline ml-2 hover:text-amber-100">
            Essayer maintenant
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:opacity-75 transition-opacity"
          aria-label="Fermer la bannière"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
