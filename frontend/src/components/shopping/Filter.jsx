import { useState } from "react";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className="rounded-lg shadow-md">
      <div className="p-4 border-b min-w-56">
        <div
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="flex items-center gap-2 text-lg font-semibold">
          Filters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`h-3 sm:hidden ${showFilter ? "-rotate-90" : ""}`}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : " hidden"
          } sm:block`}>
          <p className="mb-3 text-sm font-semibold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2">
              <input className="w-3 " type="checkbox" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3 " type="checkbox" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3 " type="checkbox" value={"Jewellry"} />{" "}
              Jewellry
            </p>
            <p className="flex gap-2">
              <input className="w-3 " type="checkbox" value={"Electronics"} />{" "}
              Electronics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
