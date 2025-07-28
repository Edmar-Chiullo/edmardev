'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from 'clsx';
import { scroller } from "react-scroll";
import MenuToggle from "./menu-toggle";

export default function Header() {
  const [hash, setHash] = useState("");
  const router = useRouter();

  useEffect(() => {
    setHash('#home'); 
    router.push('/'); 
  }, [router]);
  
  function scrollToSection(section: string) {
    scroller.scrollTo(section.replace('#', ''), {
      duration: 800,
      delay: 2,
      smooth: 'easeInOut',
    });
  }
  
  function isActive(content: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    setHash(content.currentTarget.hash);
    scrollToSection(content.currentTarget.hash);
  }

  return (
    <header className="fixed bg-zinc-900 shadow-md top-0 z-20 w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-xl font-bold text-blue-700/80">
          Edmar<span className="text-zinc-200">Dev</span>
        </h1>
        <MenuToggle />
        <nav className="space-x-4 lg:visible md:flex md:items-center md:space-x-6 hidden">
          <Link 
            href="#home" 
            onClick={isActive} 
            className={clsx(`transition`, 
              
            {
            'text-blue-600 hover:text-blue-700': hash === '#home', 'text-zinc-200/80 hover:text-zinc-300/80' : hash !== '#home'
            })}
            > 
            Início
          </Link>
          <Link href="#about" onClick={isActive} className={clsx(`hover:text-blue-100 transition`, {
            'text-blue-600 hover:text-blue-700': hash === '#about', 'text-zinc-200/80 hover:text-zinc-300/80' : hash !== '#about'
            })}>
            Sobre
          </Link>
          <Link href="#portifolio" onClick={isActive} className={clsx(`hover:text-blue-100 transition`, {
            'text-blue-600 hover:text-blue-700': hash === '#portifolio', 'text-zinc-200/80 hover:text-zinc-300/80' : hash !== '#portifolio'
            })}>
            Portfólio
          </Link>
          <Link href="#services" onClick={isActive} className={clsx(`hover:text-blue-100 transition`, {
            'text-blue-600 hover:text-blue-700': hash === '#services', 'text-zinc-200/80 hover:text-zinc-300/80' : hash !== '#services'
            })}>
            Serviços
          </Link>
          <Link href="#contact" onClick={isActive} className={clsx(`hover:text-blue-100 transition`, {
            'text-blue-600 hover:text-blue-700': hash === '#contact', 'text-zinc-200/80 hover:text-zinc-300/80' : hash !== '#contact'
            })}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
