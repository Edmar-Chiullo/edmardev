'use client';
import { technologies } from "../data/data";
import TechnologyCard from "./TecnologyCard";
import { getMediaTechnologies } from "../utils/technologie-midea";
import { Element } from "react-scroll";

export default function Tecnologys() {
    return (
        <Element name="tecnologys">
            <div className="flex flex-col bg-zinc-900 min-h-screen items-center gap-40 lg:gap-0 lg:flex-row justify-around w-full px-8">
                <div className="self-start flex flex-col w-full lg:max-w-60 lg:h-96 gap-4 lg:text-start p-2">
                    <h1 className="text-2xl text-center font-bold mb-4 text-blue-600/85 lg:text-xl">Habilidades</h1>
                    <div>
                    <ul className="text-lg text-start gap-4 lg:text-base flex flex-col lg:gap-3 list-none">
                        <li>Desenvolvimento Front-end</li>
                        <li>Resolução de problemas</li>
                        <li>Trabalho em equipe</li>
                        <li>Comunicação eficaz</li>
                        <li>Liderança</li>
                    </ul>
                    </div>
                </div>
                <div className="text-center w-full lg:w-72 h-96 mb-20">
                    <h1 className="text-2xl font-bold mb-4 text-blue-600/85 lg:text-xl">Tecnologias</h1>
                    <ul className="flex flex-col gap-1 list-none">
                        {
                            technologies.map((tech) => (
                                <li key={tech.title}>
                                    <TechnologyCard 
                                    icon={tech.icon} 
                                    color={tech.color} 
                                    value={getMediaTechnologies(tech.title)}
                                    />      
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Element>
    );
}