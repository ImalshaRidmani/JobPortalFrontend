import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    console.log("Searching:", keyword);

    // Later we'll call the API here
  };

  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 rounded-xl bg-white p-4 shadow-lg md:flex-row">
      <div className="flex flex-1 items-center rounded-lg border border-gray-300 px-4">
  <FaSearch className="mr-3 text-gray-400" />

  <input
    type="text"
    placeholder="Job title, keyword or company"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    className="w-full py-3 outline-none"
  />
</div>

      <button
        onClick={handleSearch}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;