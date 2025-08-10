'use client'

import Image from "next/image"

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
            <div className="absolute left-0 top-15 z-40 w-64 h-32 rounded-2xl">
                <Image
                    src="/embreve.jpg"
                    alt="Background Image"
                    fill
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: 'contain',
                        zIndex: -3
                    }}
                />           
            </div>
            <div>
                <h2 className="text-2xl md:text-lg font-bold mb-1">{title}</h2>
                <p className="text-sm">{`${description.slice(0, 50)}...`}</p>     
            </div>
            
        </div>
    );
}