"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import Image from 'next/image'
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800 text-background-blues' : 'bg-background-light'} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/abesatIco.webp" alt="Abesat" width={100} height={100} className="h-8 w-auto md:h-10"/>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-gray-500 dark:hover:text-primary-400 transition-colors">
            Inicio
          </Link>
          <Link href="/servicios" className="text-gray-300 hover:text-gray-500  dark:hover:text-primary-400 transition-colors">
            Servicios
          </Link>        
          <Link href="/blog" className="text-gray-300 hover:text-gray-500  dark:hover:text-primary-400 transition-colors">
            Blog
          </Link>
          <Link href="/contacto" className="text-gray-300 hover:text-gray-500 dark:hover:text-primary-400 transition-colors">
            Contacto
          </Link>          
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/contacto" 
            className=" text-gray-300 hover:text-gray-500 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors"
          >
            Consulta Gratis
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}