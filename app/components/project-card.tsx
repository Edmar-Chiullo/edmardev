export default function ProjectCard({title}: {title:string}) {
    return (
        <div className="w-full h-96 lg:w-56 lg:h-64 bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-500 ease-in-out">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <p className="text-gray-700 mb-4">Aqui estão alguns dos meus projetos recentes:</p>
            {/* Add portfolio items here */}
        </div>
    );
}