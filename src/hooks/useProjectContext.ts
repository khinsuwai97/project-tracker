import { useContext } from "react";
import { ProjectContext } from "../context/context";

const useProjectContext = () => {
  const project = useContext(ProjectContext);
  if (project === undefined) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }

  return project;
};

export default useProjectContext;
