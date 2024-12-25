import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Filter = ({ categories, setCategories, setSortType }) => {
  const [showFilter, setShowFilter] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleCategory = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategories((prevCategories) => [...prevCategories, value]);
    } else {
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category !== value)
      );
    }
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const selectedCategory = query.get("category");
    if (selectedCategory) {
      setCategories([selectedCategory]);
    }
  }, [location, setCategories]);

  const handleResetFilters = () => {
    setCategories([]);
    navigate("/shop/listing");
  };

  return (
    <div className="rounded-lg shadow-md">
      <div className="p-4 border-b lg:min-w-64">
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 text-lg font-semibold cursor-pointer">
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
            showFilter ? "" : "hidden"
          } sm:block`}>
          <p className="mb-3 text-sm font-semibold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"men's clothing"}
                onChange={toggleCategory}
                checked={categories.includes("men's clothing")}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"women's clothing"}
                onChange={toggleCategory}
                checked={categories.includes("women's clothing")}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"jewelry"}
                onChange={toggleCategory}
                checked={categories.includes("jewelry")}
              />{" "}
              Jewelry
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
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
            <option value="relevant">Relevant</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
        <div className="mt-6">
          <button
            className="px-4 py-2 text-sm bg-gray-200 "
            onClick={handleResetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
