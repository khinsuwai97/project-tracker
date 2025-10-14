export type Task = {
  id: string;
  name: string;
  status: string;
};

export type Project = {
  id: string;
  name: string;
  status: string;
  tasks: Task[];
};

export type ProjectContextType = {
  project: Project[] | undefined;
  setProject: React.Dispatch<React.SetStateAction<Project[] | undefined>>;
  //   loading: boolean;
  //   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
