import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/admin",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        const { token } = response.data;
        // Store the token in localStorage for use in future requests
        localStorage.setItem("adminToken", token);
        window.location.href = "./Dashboard";
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="items-center justify-center flex-1 hidden bg-blue-950 w-2/2 lg:flex">
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Admin Dashboard
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 w-1/2 py-12 ">
        <div className="w-1/2 p-6 mx-auto bg-white rounded-lg h-fit">
          <h2 className="py-4 text-2xl font-bold text-center text-blue-950">
            Admin Login
          </h2>
          {error && <p className="text-red-500 ">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col py-2 rounded">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 bg-gray-100 rounded outline-none"
              />
            </div>
            <div className="flex flex-col py-2 rounded">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="px-4 py-2 bg-gray-100 rounded outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 mx-auto my-2 text-white bg-blue-900 rounded w-fit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
