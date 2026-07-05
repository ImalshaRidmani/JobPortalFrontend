const JobSkeleton = () => {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-5">
      <div className="h-5 w-3/4 rounded bg-gray-300"></div>

      <div className="mt-3 h-4 w-1/2 rounded bg-gray-300"></div>

      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-5/6 rounded bg-gray-200"></div>
      </div>

      <div className="mt-5 h-8 w-24 rounded bg-gray-300 ml-auto"></div>
    </div>
  );
};

export default JobSkeleton;