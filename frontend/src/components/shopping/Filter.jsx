import { useState } from "react";

const Filter = ({ categories, setCategories, setSortType }) => {
  const [showFilter, setShowFilter] = useState(true);

  const toggleCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="rounded-lg shadow-md">
      <div className="p-4 border-b min-w-64">
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
              <input
                className="w-3 "
                type="checkbox"
                value={"men's clothing"}
                onChange={toggleCategory}
                checked={categories.includes("men's clothing")}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"women's clothing"}
                onChange={toggleCategory}
                checked={categories.includes("women's clothing")}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"jewelry"}
                onChange={toggleCategory}
                checked={categories.includes("jewelry")}
              />{" "}
              Jewellry
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"electronics"}
                onChange={toggleCategory}
                checked={categories.includes("electronics")}
              />{" "}
              Electronics
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}>
          <p className="mb-3 text-sm font-semibold">SORT BY</p>
          <select
            className="px-2 text-sm border-2 border-gray-300"
            onChange={handleSortChange}>
            <option value="relevant">Relevent</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
