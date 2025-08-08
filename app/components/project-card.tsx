'use client'

interface ImageListProps {
    title: string
    image: string
}

export default function ProjectCard({ id, title, description }: { id: string, title:string, description: string }) {
    return (
        <div className="relative flex flex-col justify-between w-full h-96 lg:w-64 lg:h-72 bg-zinc-900 text-zinc-50/80 shadow-lg shadow-zinc-100/10 rounded-lg p-4 hover:scale-105 transition-transform duration-400 ease-in-out">
            <div>
                <h2>Criado por EdmarDev</h2>
            </div>
            <iframe 
                width="560" 
                height="315" 
                className=" w-full rounded-2xl"
                src="https://www.youtube.com/embed/z4fn5yi7BI4?si=ds9cwmLWF8iU1Wgb" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                >
            </iframe>            
            <div>
                <h2 className="text-2xl md:text-lg font-bold mb-1">{title}</h2>
                <p className="text-sm">{`${description.slice(0, 50)}...`}</p>     
            </div>
            
        </div>
    );
}