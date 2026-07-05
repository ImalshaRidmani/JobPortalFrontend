const EmptyJobs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-2xl font-semibold text-gray-700">
        No Jobs Found
      </h2>

      <p className="mt-2 text-gray-500">
        Try again later or check different keywords.
      </p>
    </div>
  );
};

export default EmptyJobs;