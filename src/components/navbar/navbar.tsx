"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../buttons/themetoggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-5 flex justify-around items-center text-color z-50 relative">

      <a
        href="https://github.com/prodby-david"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-color hover:text-color-2 transition-colors"
      >
        @prodby-david
      </a>

      <div className="hidden md:flex gap-6 text-sm font-medium">

        <Link href="/" className="hover:text-color-2 text-color transition-colors">
          Home
        </Link>

        <Link href="/about" className="hover:text-color-2 text-color transition-colors">
          About Me
        </Link>

        <Link href="/qualifications" className="hover:text-color-2 text-color transition-colors">
          Qualifications
        </Link>

        <Link href="/skills" className="hover:text-color-2 text-color transition-colors">
          Skills
        </Link>

        <Link href="/projects" className="hover:text-color-2 text-color transition-colors">
          Projects
        </Link>

      </div>

      <div className="flex items-center gap-1">
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-color hover:text-color-2 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`
          absolute top-full left-0 w-full border-t flex flex-col items-center gap-4 py-5 md:hidden shadow-lg bg-(--bg) hover:transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="hover:text-color-2 text-color transition p-1"
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-color-2 text-color transition p-1"
        >
          About Me
        </Link>

        <Link
          href="/qualifications"
          onClick={() => setMenuOpen(false)}
          className="hover:text-color-2 text-color transition p-1"
        >
          Qualifications
        </Link>

        <Link
          href="/skills"
          onClick={() => setMenuOpen(false)}
          className="hover:text-color-2 text-color transition p-1"
        >
          Skills
        </Link>

        <Link
          href="/projects"
          onClick={() => setMenuOpen(false)}
          className="hover:text-color-2 text-color transition p-1"
        >
          Projects
        </Link>

      </div>

    </nav>
  );
}
