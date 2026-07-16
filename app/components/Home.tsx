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
          <div className="h-96 flex flex-col items-center justify-center gap-4 text-zinc-50/80 p-1">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Transformando desafios operacionais em soluções digitais.
            </h1>
            <h2>
              Tecnologia aplicada à operação. Soluções que geram resultados.
            </h2>
          </div>
          <Icons />
        </div>        
      </section>
    </Element>
  );
}

