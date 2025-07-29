'use client';

import { technologies } from "../data/data";
import TechnologyCard from "./TecnologyCard";
import { getMediaTechnologies } from "../utils/technologie-midea";
import Image from "next/image";
import { Element } from "react-scroll";

export default function About() {
  
  return (
    <Element name="about">
      <section id="about" className="flex flex-col w-full h-full lg:h-screen py-2 gap-16 2xl:py-20 2xl:gap-2 mx-auto relative text-zinc-100/85">
        <Image
          src="/fundo-escuro.png"
          alt="Background Image"
          className="absolute w-full h-full"
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}  
        />
        <h1 className="text-3xl text-center lg:mt-18 2xl:mb-20">Transformando ideias em soluções digitais</h1>
        <div className="flex flex-col items-center gap-40 lg:gap-0 lg:flex-row justify-around w-full px-8">
          <div className="w-full lg:h-full lg:max-w-60 text-start">
            <div className="flex flex-col gap-4 w-full lg:w-72 lg:h-96">
              <h2 className="text-4xl text-center  font-bold mb-2 text-blue-600/85 lg:text-2xl">Quem sou</h2>
              <p className="text-2xl text-justify hyphens-auto leading-relaxed tracking-tight lg:text-lg">
                Sou Edmar Chiullo, apaixonado por tecnologia e atualmente em transição de carreira para o desenvolvimento web. Com experiência em logística e resolução de problemas, trago uma visão prática e objetiva para criar soluções funcionais e eficientes. Hoje, aplico meu conhecimento em HTML, CSS, JavaScript, React e Next.js para desenvolver aplicações web modernas e responsivas.
              </p>
            </div>
          </div>
          <div className="self-start flex flex-col w-full lg:max-w-60 lg:h-96 gap-4 lg:text-start p-2">
            <h1 className="text-4xl text-center font-bold mb-4 text-blue-600/85 lg:text-2xl">Habilidades</h1>
            <div>
              <ul className="text-2xl text-start gap-4 lg:text-lg flex flex-col lg:gap-3 list-none">
                <li>Desenvolvimento Front-end</li>
                <li>Resolução de problemas</li>
                <li>Trabalho em equipe</li>
                <li>Comunicação eficaz</li>
                <li>Lideraça</li>
              </ul>
            </div>
          </div>
          <div className="text-center w-full lg:w-72 h-96 mb-20">
            <h1 className="text-4xl lg:text-2xl font-bold mb-4 text-blue-600/85">Tecnologias</h1>
            <ul className="flex flex-col gap-1 list-none">
              {
                technologies.map((tech) => (
                  <li key={tech.title}>
                    <TechnologyCard 
                      icon={tech.icon} 
                      color={tech.color} 
                      value={getMediaTechnologies(tech.title)}
                    />      
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
}