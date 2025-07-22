import ProjectCard from './projectCard';

export default function Portfólio() {
    return (
        <section id="portifolio" className="w-full h-screen py-20 bg-[url('/background-project.jpg')] bg-cover bg-center">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-zinc-200">Portfólio</h2>
                <p className="text-zinc-200 mb-4">Aqui estão alguns dos meus projetos recentes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    );
}