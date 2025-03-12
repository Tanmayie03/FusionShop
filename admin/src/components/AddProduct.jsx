import axios from "axios";
import { useState } from "react";
const AddProduct = ({ initialData, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState(
    initialData || {
      id: "",
      title: "",
      description: "",
      price: "",
      image: "",
      category: "",
      subcategory: "",
      size: "",
      rating: "",
      count: "",
    }
  );
  const [showForm, setShowForm] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    try {
      const response = await axios.post(
        "https://fusionshop-backend.onrender.com/api/product/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setFormData({
        id: "",
        title: "",
        description: "",
        price: "",
        image: "",
        category: "",
        subcategory: "",
        size: "",
        rating: "",
        count: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert(
        "Failed to add product: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="">
      <button
        onClick={() => setShowForm(!showForm)}
        className="px-6 py-2 font-semibold text-white bg-blue-900 rounded">
        {showForm ? "Cancel" : "Add New Product"}
      </button>
      {showForm && (
        <div className="absolute top-0 left-0 w-full p-6 backdrop-blur-sm bg-black/80">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col relative bg-white p-4 w-[470px] rounded-lg mx-auto items-center my-6">
            <h2 className="my-1 text-xl font-bold text-center text-blue-900">
              Add Product
              <span
                className="absolute right-4 "
                onClick={() => setShowForm(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </h2>
            <div className="flex w-full gap-2">
              <input
                type="text"
                name="id"
                value={formData.id}
                placeholder="id"
                onChange={handleChange}
                className="px-4 py-2 my-1 bg-gray-100 rounded outline-none"
                required
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="title"
                onChange={handleChange}
                className="px-4 py-2 my-1 bg-gray-100 rounded outline-none"
                required
              />
            </div>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              placeholder="description"
              onChange={handleChange}
              className="w-full px-4 py-2 my-1 bg-gray-100 rounded outline-none"
              required
            />
            <div className="flex w-full gap-2">
              <input
                type="number"
                name="price"
                value={formData.price}
                placeholder="price"
                onChange={handleChange}
                className="px-4 py-2 my-1 bg-gray-100 rounded outline-none"
                required
              />
              <input
                type="number"
                name="count"
                value={formData.count}
                placeholder="count"
                onChange={handleChange}
                className="px-4 py-2 my-1 bg-gray-100 rounded outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="image"
              value={formData.image}
              placeholder="image URL"
              onChange={handleChange}
              className="w-full px-4 py-2 my-1 bg-gray-100 rounded outline-none"
              required
            />
            <div className="flex w-full gap-2">
              <input
                type="text"
                name="category"
                value={formData.category}
                placeholder="category"
                onChange={handleChange}
                className="px-4 py-2 my-1 bg-gray-100 rounded outline-none"
                required
              />
              <input
                type="text"
                name="subcategory"
                value={formData.subcategory}
                placeholder="subcategory"
                onChange={handleChange}
                className="px-4 py-2 my-1 bg-gray-100 rounded outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="size"
              value={formData.size}
              placeholder="size"
              onChange={handleChange}
              className="w-full px-4 py-2 my-1 bg-gray-100 rounded outline-none"
              required
            />
            <input
              type="number"
              name="rating"
              value={formData.rating}
              placeholder="rating"
              onChange={handleChange}
              className="w-full px-4 py-2 my-1 bg-gray-100 rounded outline-none"
              required
            />

            <button
              type="submit"
              className="p-2 px-6 mt-4 text-white bg-blue-900 rounded">
              Add Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
