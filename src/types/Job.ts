import type { Company } from './Company';

export interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: number;
  createdAt: string;
  employerId: number;
  companyId: number;
  company: Company;
}