"use client";

import { useState } from "react";
import ThemeToggle from "../buttons/themetoggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="w-full py-3 flex justify-around items-center text-color z-50 fixed top-0 left-0 shadow-sm shadow-color" style={{ backgroundColor: "var(--navbar-bg)" }}>
      <a
        href="https://github.com/prodby-david"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-sm font-medium text-color hover:text-color-2 transition-colors"
      >
        @prodby-david
      </a>

      <div className="hidden md:flex gap-6 text-sm font-medium">
        <button onClick={() => handleScroll("home")} className="hover:text-color-2 cursor-pointer">Home</button>
        <button onClick={() => handleScroll("about")} className="hover:text-color-2 cursor-pointer">About Me</button>
        <button onClick={() => handleScroll("qualifications")} className="hover:text-color-2 cursor-pointer">Qualifications</button>
        <button onClick={() => handleScroll("skills")} className="hover:text-color-2 cursor-pointer">Skills</button>
        <button onClick={() => handleScroll("projects")} className="hover:text-color-2 cursor-pointer">Projects</button>
      </div>

      <div className="flex items-center gap-1">
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-color hover:text-color-2 transition"
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col items-center gap-4 py-5 md:hidden bg-bg shadow-lg">
          {["home", "about", "qualifications", "skills", "projects"].map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="hover:text-color-2 text-color transition p-1"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
