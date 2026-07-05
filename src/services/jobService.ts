import api from "../api/axios";
import type { Job } from "../types/Job";

export const getJobs = async (): Promise<Job[]> => {
  const response = await api.get<Job[]>("/jobs");
  return response.data;
};