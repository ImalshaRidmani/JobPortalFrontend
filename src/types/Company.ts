export interface Company {
  id: number;
  name: string;
  description: string;
  location: string;
  website: string;
  logoPath: string | null;
  employerId: number;
}