import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { token } = useSelector((state) => state.auth);
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [token]);
  return (
    <div>
      Your Cart
      <div className="mt-8 spay-y-4"></div>
      <div className="mt-8 spay-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">$100</span>
        </div>
      </div>
      <button className="px-4 py-2 mt-6 text-white bg-gray-700 lg:px-8 w-fit">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
