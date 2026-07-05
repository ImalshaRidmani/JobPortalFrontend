import JobCard from "./JobCard";
import type { Job } from "../../types/Job";

type Props = {
  jobs: Job[];
};

const JobGrid = ({ jobs }: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company.name}
          location={job.location}
          salary={job.salary}
          description={job.description}
        />
      ))}
    </div>
  );
};

export default JobGrid;