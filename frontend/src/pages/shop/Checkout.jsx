import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/common/Form";
import { addressFormControls } from "../../config";
import { addNewAddress } from "../../store/shop/addressSlice";
import { placeOrder } from "../../store/shop/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart, fetchCartItems } from "../../store/shop/cartSlice";

const initialFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
};

const Checkout = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.shopCart.cartItems) || [];
  const userId = user?.id || localStorage.getItem("userId");

  const [formData, setFormData] = useState(initialFormData);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const calculateTotalPrice = (items) => {
    return Array.isArray(items)
      ? items.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;
  };

  const totalPrice = calculateTotalPrice(cartItems);
  const discount = 118;

  const finalTotal = totalPrice - discount;

  function handleNewAddress(event, updatedFormData) {
    event.preventDefault();
    dispatch(
      addNewAddress({
        ...updatedFormData,
        userId: user?.id,
      })
    )
      .then(() => {
        setFormData(updatedFormData);
        alert("Address added successfully!");
      })
      .catch((error) => {
        console.error("API call failed:", error);
      });
  }

  function handlePlaceOrder(event) {
    event.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      userId: user?.id,
      items: cartItems,
      address: formData,
      amount: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      paymentMethod,
    };
    dispatch(placeOrder(orderData))
      .then((response) => {
        cartItems({});
        dispatch(clearCart(user.id)).then(() => {
          alert("Order placed successfully");
          console.log("Cart after clear:", localStorage.getItem("cartItems"));
          dispatch(fetchCartItems(user.id));
          navigate("/shop/Orders");
        });
      })
      .catch((error) => {
        console.error("Failed to place order", error);
      });
  }

  const calculateTotalQuantity = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <div className="flex justify-between lg:px-4  ">
      <div className="lg:w-fit p-6 bg-white">
        <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-700 border-b">
          DELIVERY INFORMATION
        </h2>
        <Form
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={"Add"}
          onSubmit={handleNewAddress}
          required={true}
        />
      </div>
      <div className="w-1/2 p-6 ">
        <p className="pb-2 text-2xl font-medium text-gray-700 border-b ">
          CART TOTAL
        </p>
        <div className="">
          <p className="text-xl py-4 font-bold text-gray-700">
            Your Orders{" "}
            <span className="text-gray-400 ">
              ( {calculateTotalQuantity(cartItems)} items)
            </span>
          </p>

          <div className="flex text-lg justify-between py-2 ">
            <p className="  ">Subtotal: </p>
            <p className="  "> {totalPrice}</p>
          </div>
          <div className="flex  text-lg  justify-between py-2 ">
            <p className="  ">Discount:</p>
            <p className="  ">
              <span className="text-red-500 ">-118</span>
            </p>
          </div>
          <div className="flex  text-lg border-b  justify-between py-2 ">
            <p className=" ">Delivery Fees </p>
            <p className=" "> Free </p>
          </div>
          <div className="flex  text-lg justify-between py-2 ">
            <p className=" font-bold">Total: </p>
            <p className=" font-bold"> {finalTotal} </p>
          </div>
        </div>
        <div className="py-6">
          <p className="">PAYMENT METHODS</p>
          <div className="flex justify-between">
            <p
              className="px-4 py-2 w-fit text-gray-800 border border-gray-700 cursor-pointer"
              onClick={() => setPaymentMethod("COD")}>
              COD
            </p>
          </div>
        </div>

        <button
          className="w-full px-4 py-2 text-white bg-gray-700 rounded"
          onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
