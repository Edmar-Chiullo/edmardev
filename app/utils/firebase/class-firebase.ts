import { getDatabase, ref, set } from "firebase/database";
import { app } from "./apk-database";

export class ModuloFirebase {     
    constructor() {}

    initFirebase() {
         return getDatabase(app)
    }

    setProjectData(props: { path:string, data:string }) {
        const database = this.initFirebase()

        set(ref(database, 'projects/' + props.path), {
            projectId: props.data,
            projectName: props.data,
            projectDescription: props.data,
            projectImage: props.data
        });
    }
}