

import Link from "next/link";
import Image from 'next/image'
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Header() {
  

  return (
    <header className="sticky top-0 z-50 dark:bg-gray-800 dark:text-background-blues  bg-background-light shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/abesatico.webp" alt="Abesat" width={100} height={100} className="h-8 w-auto md:h-10"/>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-500 hover:text-gray-800 dark:hover:text-primary-400 transition-colors">
            Inicio
          </Link>
          <Link href="/servicios" className="text-gray-500 hover:text-gray-800  dark:hover:text-primary-400 transition-colors">
            Servicios
          </Link>        
          <Link href="/blog" className="text-gray-500 hover:text-gray-800  dark:hover:text-primary-400 transition-colors">
            Blog
          </Link>
          <Link href="/contacto" className="text-gray-500 hover:text-gray-800 dark:hover:text-primary-400 transition-colors">
            Contacto
          </Link>                 
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/contacto" 
            className=" text-gray-500 hover:text-gray-800 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors"
          >
            Consulta Gratis
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}