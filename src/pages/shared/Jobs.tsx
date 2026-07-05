import { useEffect, useState } from "react";
import JobGrid from "../../components/jobs/JobGrid";
import JobSkeleton from "../../components/jobs/JobSkeleton";
import EmptyJobs from "../../components/jobs/EmptyJobs";
import { getJobs } from "../../services/jobService";
import type { Job } from "../../types/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Error loading jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <JobSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return <EmptyJobs />;
  }

  return <JobGrid jobs={jobs} />;
};

export default Jobs;