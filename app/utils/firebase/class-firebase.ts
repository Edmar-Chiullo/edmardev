import { getDatabase, ref, set, get } from "firebase/database";
import { app } from "./apk-database";
import { PortfolioProject } from "@/app/types/types";

export class ModuloFirebase {
    constructor() {}

    initFirebase() {
        return getDatabase(app);
    }

    setProjectData(props: { path: string; data: string }) {
        const database = this.initFirebase();

        set(ref(database, 'projects/' + props.path), {
            projectId: props.data,
            projectName: props.data,
            projectDescription: props.data,
            projectImage: props.data
        });
    }

    async getProjects(): Promise<PortfolioProject[]> {
        const database = this.initFirebase();
        const projectsRef = ref(database, 'projects');
        const snapshot = await get(projectsRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            return Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
        }
        return [];
    }

    async getProjectBySlug(slug: string): Promise<PortfolioProject | null> {
        const database = this.initFirebase();
        const projectsRef = ref(database, 'projects');
        const snapshot = await get(projectsRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const projectKey = Object.keys(data).find(
                key => data[key].slug === slug
            );
            return projectKey ? { id: projectKey, ...data[projectKey] } : null;
        }
        return null;
    }
}
