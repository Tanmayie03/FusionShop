import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/auth";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log("Login with:", formData);
    dispatch(loginUser(formData)).then((response) => {
      if (response?.payload?.success) {
        console.log("Login successful! Navigating to the shop...");
        navigate("/shop/home"); // Navigate to the shopping home page
      } else {
        console.error("Login failed:", response?.payload);
        alert("Invalid login credentials");
      }
    });
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col pb-8 rounded-lg w-[400px] bg-slate-50">
      <h1 className="w-full px-6 py-4 text-3xl font-semibold text-center text-white rounded-t-lg bg-blue-950 ">
        LOGIN
      </h1>
      <div className="flex flex-col mx-4 mt-8">
        <label className="font-semibold text-slate-600">Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 bg-white border-2 rounded outline-none"
          placeholder="email@gmail.com"
        />
      </div>
      <div className="flex flex-col mx-4 mt-4">
        <label className="font-semibold text-slate-600">Password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 bg-white border-2 rounded outline-none"
          placeholder="Password123"
        />
      </div>
      <h1 className="p-4 mx-1 text-sm text-slate-400">
        Sign in with your credentials to get started
      </h1>

      <button
        type="submit"
        className="px-6 py-2 mx-auto my-2 font-semibold text-white rounded bg-blue-950 w-fit">
        Login
      </button>
      <p className="mt-2">
        {" "}
        Dont have an account
        <Link
          className="ml-2 font-medium text-primary hover:underline"
          to="/auth/register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
