import { technologyTopics } from "../data/data";


export function getMediaTechnologies(tool: string | number) {
    const topic:any = technologyTopics.find((t:any) => t[tool]);

    if (!topic) return 0;
    
    const totalTopics = topic[tool].length;
    const completedTopics = topic[tool].filter((t:any) => t.concluido).length;
    
    return Math.round((completedTopics / totalTopics) * 100);   
}