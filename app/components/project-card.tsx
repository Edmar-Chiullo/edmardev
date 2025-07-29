export default function ProjectCard({title}: {title:string}) {
    return (
        <div className="relative w-full h-96 lg:w-56 lg:h-64 bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-400 ease-in-out">
            <div onClick={(element) => element.currentTarget.id} id={title} className="absolute w-full h-full top-0 right-0 left-0 bottom-0">

            </div>
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <p className="text-gray-700 mb-4">Projecto:</p>
            {/* Add portfolio items here */}
        </div>
    );
}