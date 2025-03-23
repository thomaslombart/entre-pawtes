"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  isExternal?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  isExternal = false,
  ...props
}: ButtonProps) {
  const springAnimation = {
    whileHover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 1,
      },
    },
    whileTap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  const buttonClasses = `bg-amber-900 text-white hover:bg-amber-800 font-bold py-4 px-8 rounded-full transition-all ${
    props.className || ""
  }`;

  if (href) {
    return (
      <motion.div {...springAnimation} className="inline-block">
        <Link
          href={href}
          className={buttonClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button {...props} {...springAnimation} className={buttonClasses}>
      {children}
    </motion.button>
  );
}
