'use client'

import Image from "next/image"

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image?: string;
    setCarrossel: () => void;
}

export default function ProjectCard({ title, description, image, setCarrossel }: ProjectCardProps) {

    return (
        <div className="relative flex flex-col justify-between gap-1 w-full h-96 lg:w-64 lg:h-72 bg-zinc-900 text-zinc-50/80 shadow-lg shadow-zinc-100/10 rounded-lg p-4 hover:scale-105 transition-transform duration-400 ease-in-out">
            <div onClick={setCarrossel} className="absolute z-50 left-0 top-0 w-full h-full cursor-pointer"></div>
            <div>
                <h2>Criado por EdmarDev</h2>
            </div>
            <div className="w-64 h-32 rounded-2xl overflow-hidden">
                <Image
                    src={image || "/embreve.jpg"}
                    alt={title}
                    fill
                    sizes="256px"
                    className="object-contain px-2"
                />
            </div>
            <div>
                <h2 className="text-2xl md:text-lg font-bold mb-1">{title}</h2>
                <p className="text-sm">{`${description.slice(0, 50)}...`}</p>
            </div>
        </div>
    );
}
