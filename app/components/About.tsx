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
        <h1 className="text-2xl text-center lg:mt-18 2xl:mb-20 lg:text-xl">Transformando ideias em soluções digitais</h1>
        <div className="flex flex-col items-center gap-40 lg:gap-0 lg:flex-row justify-around w-full px-8">
          <div className="w-full lg:h-full lg:max-w-60 text-start">
            <div className="flex flex-col gap-4 w-full lg:w-72 lg:h-96">
              <h2 className="text-2xl text-center font-bold mb-2 text-blue-600/85 lg:text-xl">Da operação para a tecnologia.</h2>
              <p className="text-lg text-justify hyphens-auto leading-relaxed tracking-tight lg:text-base">
                Minha trajetória profissional começou muito antes de escrever as primeiras linhas de código.
                Há mais de 16 anos atuo na área de logística, liderando equipes e participando diretamente das operações de recebimento, armazenagem, produção e controle de estoque. Essa experiência me proporcionou uma visão prática sobre processos, produtividade e os desafios enfrentados diariamente pelas operações.
                Com o tempo, percebi que muitos desses desafios poderiam ser resolvidos por meio da tecnologia. Em vez de apenas identificar problemas, comecei a desenvolver soluções.
                Foi assim que surgiram aplicações internas capazes de automatizar processos, reduzir retrabalho, aumentar a rastreabilidade das operações e fornecer informações mais rápidas e confiáveis para a tomada de decisão.
                Hoje uno duas áreas que considero complementares: a experiência prática em operações logísticas e o desenvolvimento de software.
                Meu objetivo é criar aplicações que resolvam problemas reais, gerem valor para as pessoas e contribuam para que empresas operem de forma mais eficiente, inteligente e sustentável.
              </p>
            </div>
          </div>
          <div className="self-start flex flex-col w-full lg:max-w-60 lg:h-96 gap-4 lg:text-start p-2">
            <h1 className="text-2xl text-center font-bold mb-4 text-blue-600/85 lg:text-xl">Habilidades</h1>
            <div>
              <ul className="text-lg text-start gap-4 lg:text-base flex flex-col lg:gap-3 list-none">
                <li>Desenvolvimento Front-end</li>
                <li>Resolução de problemas</li>
                <li>Trabalho em equipe</li>
                <li>Comunicação eficaz</li>
                <li>Liderança</li>
              </ul>
            </div>
          </div>
          <div className="text-center w-full lg:w-72 h-96 mb-20">
            <h1 className="text-2xl font-bold mb-4 text-blue-600/85 lg:text-xl">Tecnologias</h1>
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