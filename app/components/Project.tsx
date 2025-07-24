'use client';

import ProjectCard from './project-card';
import Image from 'next/image';
import { Element } from 'react-scroll';

export default function Portfólio() {
    return (
        <Element name="portifolio">
            <section id="portifolio" className="w-full h-full lg:h-screen py-20">
                <Image
                    src="/background-project.png"
                    alt="Background Image"
                    className="absolute w-full h-full"
                    fill
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
                <div className="w-full lg:max-w-6xl mx-auto px-4 gap-2 lg:gap-0">
                    <h2 className="text-4xl text-center lg:text-start lg:text-3xl font-bold mb-8 text-blue-700">Portfólio</h2>
                    <p className="text-lg text-zinc-200 mb-4">Aqui estão alguns dos meus projetos recentes:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6 px-2">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </section>
        </Element>
    );
}