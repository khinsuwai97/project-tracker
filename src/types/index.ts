import type React from "react";

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
  filter: "all" | "active" | "completed" | "pending";
  setFilter: (filter: "all" | "active" | "completed" | "pending") => void;
  search: string;
  setSearch: (value: string) => void;
  //   loading: boolean;
  //   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
