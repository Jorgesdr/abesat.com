"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   
  useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null; // No renderices nada en el servidor
    }
  return (
    <>
    
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:cursor-pointer"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5 text-yellow-400" />
        ) : (
          <MoonIcon className="h-5 w-5 text-gray-600" />
        )}
      </button>
    
    </>
  );
}