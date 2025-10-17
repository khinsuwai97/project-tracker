export const mockProjects = [
  {
    id: Math.random().toString(36).slice(2, 10),
    name: "Websit Design",
    status: "active",
    tasks: [
      {
        id: Math.random().toString(36).slice(2, 10),
        name: "Task 1",
        status: "completed",
      },
      {
        id: Math.random().toString(36).slice(2, 10),
        name: "Task 2",
        status: "pending",
      },
    ],
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    name: "Mobile App",
    status: "pending",
    tasks: [
      {
        id: Math.random().toString(36).slice(2, 10),
        name: "Task 1",
        status: "incomplete",
      },
      {
        id: Math.random().toString(36).slice(2, 10),
        name: "Task 2",
        status: "pending",
      },
    ],
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    name: "Mobile App",
    status: "completed",
    tasks: [
      {
        id: Math.random().toString(36).slice(2, 10),
        name: "Task 1",
        status: "completed",
      },
      {
        id: Math.random().toString(36).slice(2, 10),
        name: "Task 2",
        status: "completed",
      },
    ],
  },
];

export const projectStatus = [
  {
    id: "completed",
    status: "Completed",
  },
  {
    id: "active",
    status: "Active",
  },
  {
    id: "pending",
    status: "pending",
  },
];
