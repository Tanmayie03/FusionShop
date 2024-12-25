import { useEffect, useState } from "react";
import Filter from "../../components/shopping/Filter";
import ProductItem from "../../components/shopping/ProductItem";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [sortType, setSortType] = useState("relevant");
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/displayProducts"
      );
      setProducts(response.data.data);
      setFilteredProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error.response || error);
    }
  };

  const applyFiltersAndSorting = () => {
    let updatedProducts = [...products];
    const categoryParam = new URLSearchParams(location.search).get("category");

    if (categoryParam) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }

    if (categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) => {
        console.log(
          "Checking product:",
          product.title,
          "Category:",
          product.category
        );

        return categories.some((category) => category === product.category);
      });
    }

    console.log("Filtered products after category filter:", updatedProducts);
    if (sortType === "low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    applyFiltersAndSorting();
  }, [categories, sortType, location]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6">
      <Filter
        categories={categories}
        setCategories={setCategories}
        setSortType={setSortType}
        location={location}
      />
      <div className="">
        <h1 className="pb-6 text-2xl text-gray-700 font-semibold ">
          ALL PRODUCTS
        </h1>
        <ProductItem products={filteredProducts} />
      </div>
    </div>
  );
};

export default Listing;
