'use client';
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact">
      <section id="contact" className="flex flex-col items-center justify-center gap-6 w-full min-h-screen py-20 px-6 bg-zinc-100 text-center">
        <h2 className="text-3xl font-bold lg:text-4xl text-blue-700/80">Vamos conversar?</h2>
        <p className="text-lg lg:text-xl">Entre em contato para tirar dúvidas ou solicitar um orçamento.</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://wa.me/5543999147899?text=MENSAGEM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            WhatsApp
          </a>
          <a
            href="mailto:edmar.chiullo@gmail.com"
            className="bg-zinc-700 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors duration-300 font-medium"
          >
            E-mail
          </a>
          <a
            href="tel:+5543999147899"
            className="bg-zinc-700 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors duration-300 font-medium"
          >
            Telefone
          </a>
        </div>
      </section>
    </Element>
  );
}
