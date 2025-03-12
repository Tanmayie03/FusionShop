import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      console.error("All fields are required!");
      return;
    }

    setLoading(true);

    dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        navigate("/auth/login");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="space-y-6 md:w-full md:max-w-md md:mx-auto bg-gray-50">
      <div className="text-center">
        <h1 className="px-6 py-4 text-3xl font-semibold text-center text-white bg-gray-800">
          SIGN UP
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-4 space-y-4 bg-white rounded shadow-md">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <div className="px-4 pb-6 text-center">
        Already have an account?
        <span className="px-2 font-bold">
          <Link to="/auth/login" className="text-center underline">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
