import { useEffect, useState } from "react";
import JobCard from "../../components/jobs/JobCard";
import { getJobs } from "../../services/jobService";
import type { Job } from "../../types/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Failed to load jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-lg">Loading jobs...</p>;
  }

  if (jobs.length === 0) {
  return (
    <div className="py-20 text-center">
      <h2 className="text-2xl font-semibold">No jobs found</h2>
      <p className="mt-2 text-gray-500">
        Check back later for new opportunities.
      </p>
    </div>
  );
}

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

export default Jobs;