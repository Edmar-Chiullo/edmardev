'use client';
import { Element } from "react-scroll";

export default function Services() {
  return (
    <Element name="services">
      <section id="services" className="w-full h-screen py-16 px-6 bg-white/5 mx-auto text-zinc-100/80">
        <h2 className="text-2xl font-bold mb-6">O que eu faço</h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>Criação de landing pages e páginas institucionais</li>
          <li>Automação de tarefas com JavaScript e Excel/VBA</li>
          <li>Integração com APIs (Firebase, Mercado Livre, etc.)</li>
        </ul>
      </section>
    </Element>
  );
}
