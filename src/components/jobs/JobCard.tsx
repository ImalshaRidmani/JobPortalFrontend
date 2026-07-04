import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";

type JobCardProps = {
  title: string;
  company: string;
  location: string;
  salary: number;
  type?: string;
  onView?: () => void;
};

const JobCard = ({
  title,
  company,
  location,
  salary,
  type = "Full Time",
  onView,
}: JobCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Company */}
      <p className="mt-1 text-gray-600">
        {company}
      </p>

      {/* Details */}
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
          <span>{type}</span>
        </div>

      </div>

      {/* Action */}
      <div className="mt-5 flex justify-end">
        <button
          onClick={onView}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Job
        </button>
      </div>
    </div>
  );
};

export default JobCard;