export interface TechnologyCardProps {
    icon: string;
    color: string;
    value: string | number | undefined;
}

export interface ImageItem {
    title: string;
    image: string;
}

export interface PortfolioProject {
    id: string;
    title: string;
    slug: string;
    description: string;
    category: 'front-end' | 'automacao' | 'api' | 'mobile';
    platform: 'desktop' | 'mobile' | 'web';
    src: string;
    image: string;
    imageList: ImageItem[];
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    createdAt?: string;
}
