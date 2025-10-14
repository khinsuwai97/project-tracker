import { useState } from "react";
import { type Project } from "../types";
import { ProjectContext } from "./context";



const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [project, setProject] = useState<Project[] | undefined>(undefined)

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    )
}


export default ProjectProvider