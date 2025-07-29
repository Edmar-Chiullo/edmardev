'use client';
import { Element } from "react-scroll";

export default function Services() {
  return (
    <Element name="services">
      <section id="services" className="flex flex-col gap-10 lg:gap-6 w-full h-screen py-16 px-20 bg-white/5 mx-auto text-zinc-100/80">
        <h2 className="text-4xl lg:text-2xl text-center lg:text-start font-bold text-blue-600/70 lg:mb-6">O que eu faço</h2>
        <ul className="space-y-8  lg:space-y-4 list-inside lg:list-disc text-2xl text-justify hyphens-auto leading-relaxed tracking-tight lg:text-lg">
          <li>Criação de landing pages e páginas institucionais</li>
          <li>Automação de tarefas com JavaScript e Excel/VBA</li>
          <li>Integração com APIs (Firebase, Mercado Livre, etc.)</li>
        </ul>
      </section>
    </Element>
  );
}
