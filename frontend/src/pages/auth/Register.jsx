import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/common/Form";
import { registerFormControls } from "../../config";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth";

const initalState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initalState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(data) {
    console.log("Submitting form data:", data); // Log payload
    dispatch(registerUser(data));
    navigate("/auth/login");
  }

  return (
    <div className="md:w-full md:max-w-md md:mx-auto space-y-6  bg-gray-50">
      <div className="text-center">
        <h1 className="px-6 py-4 text-3xl font-semibold text-center text-white  bg-gray-800">
          SIGN UP
        </h1>
      </div>
      <Form
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <div className="pb-6  px-4 text-center ">
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
