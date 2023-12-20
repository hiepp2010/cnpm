"use client"

const SearchBar = () => {
    return (
      <div className="flex items-center justify-end">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  