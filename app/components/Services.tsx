'use client';
import { Element } from "react-scroll";

export default function Services() {
  return (
    <Element name="services">
      <section id="services" className="relative flex flex-col gap-10 lg:gap-6 w-full min-h-screen py-16 px-10 md:px-28 bg-zinc-950 mx-auto text-zinc-100/80">
        <h2 className="text-2xl lg:text-xl text-center lg:text-start font-bold text-blue-600/70 lg:mb-6">Mais do que desenvolver software, desenvolvo soluções.</h2>
        <p className="text-lg text-justify hyphens-auto leading-relaxed tracking-tight lg:text-base">
          Acredito que tecnologia só faz sentido quando melhora o trabalho das pessoas e gera resultados concretos para o negócio.
          Meu processo de desenvolvimento começa pela compreensão do problema. Antes de pensar em ferramentas ou tecnologias, procuro entender como a operação funciona, identificar gargalos e mapear oportunidades de melhoria.
          A partir dessa análise, projeto e desenvolvo aplicações que automatizam tarefas, organizam informações, aumentam a produtividade e apoiam a tomada de decisão.
          Atualmente desenvolvo soluções utilizando tecnologias como **Next.js, React, TypeScript, Node.js, PostgreSQL, Prisma, Firebase e Docker**, criando aplicações modernas, escaláveis e focadas na experiência do usuário.
          Cada projeto representa uma oportunidade de transformar desafios operacionais em soluções digitais que entregam eficiência, confiabilidade e resultados mensuráveis.
        </p>
        
        <ul className="space-y-8 lg:space-y-4 list-inside lg:list-disc text-lg text-justify hyphens-auto leading-relaxed tracking-tight lg:text-base lg:w-80 lg:h-96">
          <li>Criação de landing pages e páginas institucionais</li>
          <li>Automação de tarefas com JavaScript e Excel/VBA</li>
          <li>Integração com APIs (Firebase, Mercado Livre, etc.)</li>
        </ul>
      </section>
    </Element>
  );
}
