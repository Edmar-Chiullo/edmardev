'use client';

import { technologies } from "../data/data";
import TechnologyCard from "./TecnologyCard";
import { getMediaTechnologies } from "../utils/technologie-midea";
import Image from "next/image";
import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <section id="about" className="flex flex-col w-full h-screen py-20 gap-16 mx-auto relative text-zinc-100/85">
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
        <h1 className="text-2xl text-center">Transformando ideias em soluções digitais</h1>
        <div className="flex justify-around w-full">
          <div className="max-w-60 text-start">
            <h2 className="text-2xl font-bold mb-4 text-blue-600/85">Quem sou</h2>
            <p>
              Sou Edmar Chiullo, apaixonado por tecnologia e atualmente em transição de carreira para o desenvolvimento web. Com experiência em logística e resolução de problemas, trago uma visão prática e objetiva para criar soluções funcionais e eficientes. Hoje, aplico meu conhecimento em HTML, CSS, JavaScript, React e Next.js para desenvolver aplicações web modernas e responsivas.
            </p>
          </div>
          <div className="max-w-60 text-start">
            <h1 className="text-2xl font-bold mb-4 text-blue-600/85">Habilidades</h1>
            <div>
              <ul className="flex flex-col gap-3 list-none">
                <li>Desenvolvimento Front-end</li>
                <li>Resolução de problemas</li>
                <li>Trabalho em equipe</li>
                <li>Comunicação eficaz</li>
                <li>Lideraça</li>
              </ul>
            </div>
          </div>
          <div className="w-56 text-start">
            <h1 className="text-2xl font-bold mb-4 text-blue-600/85">Tecnologias</h1>
            <ul className="flex flex-col gap-3 list-none">
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