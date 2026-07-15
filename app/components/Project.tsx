'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Element } from 'react-scroll';
import { projects } from '../data/data-projects';
import Pagination from './ui/pagination';
import ProjectCard from './project-card';
import Carrossel from "./server/carrossel"

type Project = {
    id: string
    image: string,
    title: string,
    description: string,
    imageList?: { title: string; image: string }[]
}

export default function Portfólio() {

    const [ getProject, setGetProject ] = useState<Project[]>()
    const [ openCarrossel, setOpenCarrossel ] = useState(false)
    const [ selectedImages, setSelectedImages ] = useState<{title: string; image: string}[]>([])
    const [ selectedTitle, setSelectedTitle ] = useState('')

    useEffect(() => {
        const totalPages = projects.slice(0, 4)
        setGetProject(totalPages)
    },[])

    function pageProject(pageNumber: number) {
        const totalProject = 4
        const intRangeProject = (pageNumber - 1) * totalProject
        const totalPages = pageNumber === 1 ? projects.slice(intRangeProject, totalProject) : projects.slice(intRangeProject, intRangeProject * 2)
        setGetProject(totalPages)
    }

    function openProjectCarousel(title: string, images: {title: string; image: string}[]) {
        setSelectedTitle(title)
        setSelectedImages(images)
        setOpenCarrossel(true)
    }

    return (
        <Element name="portifolio">
            <section id="portifolio" className="relative flex flex-col justify-between w-full h-full min-h-screen lg:h-screen pt-20 pb-4">

                {openCarrossel && (
                    <Carrossel
                        images={selectedImages}
                        title={selectedTitle}
                        onClose={() => setOpenCarrossel(false)}
                    />
                )}
                <Image
                    src="/background-project.png"
                    alt="Background Image"
                    fill
                    className='absolute'
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: 'cover',
                        zIndex: -3
                    }}
                />
                <div className="w-full lg:max-w-6xl mx-auto px-4 gap-2 lg:gap-0 mb-6">
                    <h2 className="text-4xl text-center lg:text-start lg:text-2xl font-bold mb-8 text-blue-700">Portfólio</h2>
                    <p className="text-lg text-zinc-200 mb-4">Aqui estão alguns dos meus projetos recentes:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6 px-2">
                        {
                            getProject !== undefined ? getProject.map(({ id, title, description, image, imageList }, k) => {
                                    return (
                                        <ProjectCard
                                            key={k}
                                            id={id}
                                            title={title}
                                            description={description}
                                            image={image}
                                            setCarrossel={() => openProjectCarousel(title, imageList || [])}
                                        />
                                    )
                                }) : <h1>Loading...</h1>
                        }
                    </div>
                </div>
                <div className='self-center place-items-end'>
                    <Pagination totalPages={Math.ceil(projects.length / 4)} pageProject={pageProject}/>
                </div>
            </section>
        </Element>
    );
}
