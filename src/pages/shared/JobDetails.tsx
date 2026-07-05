import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Job Details</h1>

      <p className="mt-4 text-gray-600">
        Job ID: {id}
      </p>

      <p className="mt-4">
        We will load full job details from API here.
      </p>
    </div>
  );
};

export default JobDetails;