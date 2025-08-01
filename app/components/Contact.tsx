'use client';
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact">
      <section id="contact" className="flex flex-col items-center justify-center gap-6 w-full h-screen lg:py-32 px-6 bg-zinc-100 text-center">
        <h2 className="text-3xl font-bold lg:text-2xl text-blue-700/80">Vamos conversar?</h2>
        <p className="text-lg">Entre em contato para tirar dúvidas ou solicitar um orçamento.</p>
        <a
          href="mailto:edmarcarlos@iiitech.com.br"
          className="max-w-96 self-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Fale comigo
        </a>
      </section>
    </Element>
  );
}
