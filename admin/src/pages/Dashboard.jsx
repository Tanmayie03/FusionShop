import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/display",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error.response || error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [navigate]);

  const handleRemove = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("adminToken"); // Ensure token is included for delete request

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/product/remove/${id}`, // Include product ID in URL
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        alert("Product deleted successfully");
        fetchProducts(); // Refresh product list
      } else {
        alert("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error.response || error);
      alert("An error occurred while deleting the product.");
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-xl font-bold text-blue-900">Items you have:</h1>
        <AddProduct />
      </div>
      <div className="grid justify-center w-full gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product._id} className="p-4 bg-white border rounded-md">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-72 h-72"
            />
            <h3 className="py-2 text-lg font-semibold truncate">
              {product.title}
            </h3>
            <p className="text-base font-medium text-gray-500">
              Price: ₹{product.price}
            </p>
            <div className="flex justify-center w-full gap-4 my-2">
              <button className="px-4 py-2 text-white bg-blue-900 rounded">
                Edit
              </button>
              <button
                onClick={() => handleRemove(product.id)} // Call handleRemove with product ID
                className="px-4 py-2 text-white bg-red-600 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
