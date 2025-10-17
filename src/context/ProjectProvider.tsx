import { useState } from "react";
import { type Project } from "../types";
import { ProjectContext } from "./context";



const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [project, setProject] = useState<Project[] | undefined>(undefined)
    const [filter, setFilter] = useState<"all" | "active" | "completed" | "pending">("all")
    const [search, setSearch] = useState("")

    return (
        <ProjectContext.Provider value={{ project, setProject, filter, setFilter, search, setSearch }}>
            {children}
        </ProjectContext.Provider>
    )
}


export default ProjectProvider