import { technologyTopics } from "../data/data";


export function getMediaTechnologies<T extends string>(tool: T): number {
    const topic = technologyTopics.find((t) => t[tool]);

    if (!topic) return 0;
    
    const totalTopics = topic[tool].length;
    const completedTopics = topic[tool].filter((t) => t.concluido).length;
    
    return Math.round((completedTopics / totalTopics) * 100);   
}