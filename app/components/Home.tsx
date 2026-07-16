'use client';

import Header from "./Header";
import Icons from "./Icons";
import Image from "next/image";
import { Element } from "react-scroll";

export default function HomeContent() {
  return (
    <Element name="home">
      <section id="home" className="relative w-full h-screen">
        <Image
          src="/escritorio.png" 
          alt="Background Image"
          className="absolute"
          fill
          sizes="100vw"
          priority 
          style={{
            objectFit: 'cover',
          }} 
        />
        <div className="absolute inset-0 bg-zinc-900/60"></div>
        <Header />
        <div className="absolute z-10 flex flex-col w-full h-screen items-center justify-center">
          <div className="h-96 flex flex-col items-center justify-center gap-5 text-zinc-50/80 p-1">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Transformando desafios operacionais em soluções digitais.
            </h1>
            <h2 className="text-lg md:text-xl text-center">
              Tecnologia aplicada à operação. Soluções que geram resultados.
            </h2>
            <a
              href="#contact"
              className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-medium"
            >
              Vamos conversar
            </a>
          </div>
          <Icons />
        </div>        
      </section>
    </Element>
  );
}

