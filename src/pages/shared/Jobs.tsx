import JobCard from "../../components/jobs/JobCard";

const Jobs = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      
      <JobCard
        title="Software Engineer"
        company="ABC Technologies"
        location="Colombo"
        salary={250000}
      />

      <JobCard
        title="Frontend Developer"
        company="Google"
        location="Remote"
        salary={450000}
      />

      <JobCard
        title="Backend Developer"
        company="Microsoft"
        location="Sri Lanka"
        salary={350000}
      />

    </div>
  );
};

export default Jobs;