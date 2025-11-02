"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light"
    setTheme(storedTheme)
    document.documentElement.classList.toggle("dark", storedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md cursor-pointer hover:bg-[--accent]/10 transition">
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5 text-color hover:text-color-2" />
      ) : (
        <SunIcon className="w-5 h-5 text-color hover:text-color-2" />
      )}
    </button>
  )
}
