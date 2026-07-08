import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/jobService";
import type { Job } from "../../types/Job";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const data = await getJobById(id!);
      setJob(data);
    } catch (error) {
      console.error("Failed to load job:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <p className="text-gray-500">Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <p className="text-red-500">Job not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">

      <h1 className="text-3xl font-bold text-gray-800">
        {job.title}
      </h1>

      <p className="text-lg text-gray-600">
        {job.company.name}
      </p>

      <p className="text-gray-500">
        📍 {job.location}
      </p>

      <p className="text-green-600 font-semibold">
        💰 LKR {job.salary.toLocaleString()}
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="mt-2 text-gray-700 whitespace-pre-line">
          {job.description}
        </p>
      </div>

      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">
        Apply Now
      </button>

    </div>
  );
};

export default JobDetails;