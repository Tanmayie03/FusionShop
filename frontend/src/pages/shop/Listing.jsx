import { useEffect, useState } from "react";
import Filter from "../../components/shopping/Filter";
import ProductItem from "../../components/shopping/ProductItem";
import axios from "axios";

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const applyFiltersAndSorting = () => {
    let updatedProducts = [...products];
    console.log("Categories selected:", categories);
    console.log("Initial products:", updatedProducts);

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
    applyFiltersAndSorting();
  }, [categories, sortType]);

  return (
    <div className="flex gap-6 p-4 md:p-6">
      <Filter
        categories={categories}
        setCategories={setCategories}
        setSortType={setSortType}
      />
      <div className="">
        <h1 className="pb-6 text-2xl font-bold ">All products</h1>
        <ProductItem products={filteredProducts} />
      </div>
    </div>
  );
};

export default Listing;
