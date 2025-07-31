import Image from "next/image";

export default function ProjectCard({title, description, image }: {title:string, description:string, image:string}) {
    return (
        <div className="relative flex flex-col justify-between w-full h-96 lg:w-64 lg:h-72 bg-zinc-900 text-zinc-50/80 shadow-lg shadow-zinc-100/10 rounded-lg p-4 hover:scale-105 transition-transform duration-400 ease-in-out">
            <div onClick={(element) => element.currentTarget.id} id={title} className="absolute w-full h-full top-0 right-0 left-0 bottom-0">

            </div>
            <div>
                <h2>Criado por EdmarDev</h2>
            </div>
            <Image 
                src={image}
                alt={title}
                className="absolute top-0 left-0 rounded-sm w-full"
                fill
                priority
                style={{
                    objectFit: 'contain',
                }}
            />
            <div>
                <h2 className="text-2xl md:text-lg font-bold mb-1">{title}</h2>
                <p className="text-sm">{`${description.slice(0, 50)}...`}</p>     
            </div>
            
        </div>
    );
}