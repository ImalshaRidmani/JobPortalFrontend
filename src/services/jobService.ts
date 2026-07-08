import api from "../api/axios";
import type { Job } from "../types/Job";

export const getJobs = async (): Promise<Job[]> => {
  const response = await api.get<Job[]>("/jobs");
  return response.data;
};

export const getJobById = async (id: string): Promise<Job> => {
  const res = await api.get(`/jobs/${id}`);
  return res.data;
};