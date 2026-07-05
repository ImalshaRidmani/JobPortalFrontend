import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";

type JobCardProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
};

const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
}: JobCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">

      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mt-1 text-gray-600">{company}</p>

      <div className="mt-3 space-y-2 text-sm text-gray-500">

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave />
          <span>LKR {salary.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcase />
          <span>Full Time</span>
        </div>

      </div>

      <div className="mt-5 flex justify-end">
        <button
          onClick={() => navigate(`/jobs/${id}`)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Job
        </button>
      </div>

    </div>
  );
};

export default JobCard;