import Header from "./Header";
import Icons from "./Icons";

export default function HomeContent() {
  return (
    <section id="home" className="relative w-full h-screen bg-[url('/escritorio.png')] bg-cover bg-center">
        <Header />
        <div className="flex flex-col w-full h-screen bg-linear-to-r from-zinc-950 to-zinc-900/30 bg-opacity-0 items-center justify-center">
          <div className="h-96 flex flex-col items-center justify-center gap-4 text-zinc-50/80">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Olá, eu sou Edmar
            </h1>
            <p className="text-lg md:text-2xl text-blue-600/70 text-center mt-4">
              Desenvolvedor Front-end e UI/UX Designer
            </p>
          </div>
          <Icons />
        </div>        
    </section>
  );
}

