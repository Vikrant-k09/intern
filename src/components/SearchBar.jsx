import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 text-gray-400" />
      <input
        type="text"
        className="w-full h-10 px-10 text-sm bg-white border border-gray-300 rounded-full focus:outline-none focus:border-[#FC1C00] shadow-md"
        placeholder="Search..."
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
      />
    </div>
  );
};

export default SearchBar;
