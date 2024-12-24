import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setAddress } from "../store/addressSlice";
import Form from "../../components/common/Form";
import { addressFormControls } from "../../config";
import { addNewAddress } from "../../store/shop/addressSlice";

const initialFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
};

const Checkout = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);
  const user = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState(initialFormData);

  function handleNewAddress(event, updatedFormData) {
    event.preventDefault();
    console.log("Updated Address Data:", updatedFormData);
    dispatch(
      addNewAddress({
        ...updatedFormData,
        userId: user?.id,
      })
    )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("API call failed:", error);
      });
  }
  return (
    <div className="flex justify-between">
      <div className="max-w-2xl p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
          DELIVERY INFORMATION
        </h2>
        <Form
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={"Add"}
          onSubmit={handleNewAddress}
        />
      </div>
      <div className="w-1/2 p-4 ">
        <p className="text-2xl pb-4"> CART TOTAL</p>
        <p className="text-sm "> Subtotal</p>
        <p className="text-sm "> Discount</p>
        <p className="text-sm  font-bold"> Total</p>

        <div className=" py-6">
          <p className="">PAYMENT METHODS</p>
          <div className="flex justify-between">
            <p className=" p-4 border">COD</p>
            <p className=" p-4 border">Razorpay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
