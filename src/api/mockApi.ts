import { mockProjects } from "../data";

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Mock data

export const mockApi = {
  getProjects: async () => {
    await delay(1000);
    return { data: mockProjects, error: null };
  },
};
