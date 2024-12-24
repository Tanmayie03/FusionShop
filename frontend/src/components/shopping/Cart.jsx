import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItems,
  fetchCartItems,
  updateCartItemQty,
} from "../../store/shop/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, user, isLoading, error } = useSelector(
    (state) => state.shopCart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = user?.id || localStorage.getItem("userId");

  function handleCartItemDelete(getCartItem) {
    if (userId) {
      dispatch(deleteCartItems({ userId, productId: getCartItem?.productId }));
    } else {
      console.error("User ID is missing for deletion");
    }
  }

  useEffect(() => {
    console.log("User ID at mount:", userId); // Debugging log
    if (userId) {
      console.log("Fetching cart items for user:", userId);
      dispatch(fetchCartItems(userId));
    } else {
      console.log("User ID is missing");
    }
  }, [dispatch, userId]);
  console.log("User ID during render:", userId);

  useEffect(() => {
    if (error) {
      console.error(
        "Error fetching cart items:",
        JSON.stringify(error, null, 2)
      );
    }
  }, [error]);

  if (isLoading) return <p>Loading...</p>;
  const items = Array.isArray(cartItems) ? cartItems : [];
  const calculateTotalPrice = (items) => {
    return Array.isArray(items)
      ? items.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;
  };

  const totalPrice = calculateTotalPrice(items);

  function handleUpdateQuantity(item, action) {
    const newQuantity =
      action === "increase" ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity > 0) {
      dispatch(
        updateCartItemQty({
          userId,
          productId: item.productId,
          quantity: newQuantity,
        })
      );
    } else {
      console.error("Quantity cannot be less than 1");
    }
  }

  return (
    <div className="flex justify-between gap-8 px-10 py-6">
      <div className="flex flex-col w-1/2">
        <h1>Your Cart</h1>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div
              className="flex justify-between gap-4 py-4 border-b"
              key={item.id}>
              <div className="flex gap-4">
                <img src={item.image} className="w-1/4" />
                <div className="flex flex-col">
                  <div className="flex items-center justify-between w-full">
                    <p className="pb-2 text-lg font-semibold">{item.title}</p>
                  </div>
                  <div className="flex">
                    <p className="text-sm">Size: 28</p>
                  </div>
                  <div className="flex items-center py-2">
                    <button
                      onClick={() => handleUpdateQuantity(item, "decrease")}
                      className="px-3 mr-4 text-xl border border-gray-900 rounded-full lg:px-3 lg:py-1 hover:bg-gray-300">
                      -
                    </button>
                    <p className="mt-2 text-lg font-semibold">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => handleUpdateQuantity(item, "increase")}
                      className="lg:px-3 lg:py-1 px-[10px] mx-4 text-xl border rounded-full border-gray-900 hover:bg-gray-300">
                      +
                    </button>
                  </div>
                  <div className="py-2 text-xl font-bold">₹{item.price}</div>
                  <div className="flex pt-4 text-sm font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="mr-2 size-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                      />
                    </svg>
                    14 days return available
                  </div>
                </div>
              </div>
              <div className="flex justify-end text-end">
                <button onClick={() => handleCartItemDelete(item)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mx-2 size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex flex-col p-8 lg:w-1/2 bg-gray-50 h-fit">
        <h1 className="pb-4 my-2 text-xl font-semibold border-b border-gray-300 ">
          Order Details <span className="text-lg text-gray-400"> items</span>
        </h1>
        <div className="flex justify-between my-1">
          <h1>Bag total</h1>
          <h1 className="text-gray-500">₹{totalPrice}</h1>
        </div>
        <div className="flex justify-between my-1">
          <h1>Bag discount</h1>
          <h1 className="text-gray-500">₹518</h1>
        </div>
        <div className="flex justify-between my-1">
          <h1>Coupon Discount</h1>
          <h1 className="text-red-400">Apply Coupon</h1>
        </div>
        <div className="flex justify-between my-1">
          <h1>Delivery Fee</h1>
          <h1 className="text-gray-500">Free</h1>
        </div>
        <div className="flex justify-between pt-2 my-4 border-t border-gray-300 ">
          <h1 className="font-semibold">Order Total</h1>
          <h1 className="font-semibold">₹{totalPrice - 518}</h1>
        </div>
        <Link to="/shop/Checkout">
          <button className="w-56 px-6 py-2 my-2 text-center text-white bg-gray-800 rounded-sm">
            Proceed to Checkout
          </button>
        </Link>
        <h1 className="pb-4 mt-16 text-sm">
          The price and availability of items at cartify.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping Cart Learn more.
        </h1>
      </div>
    </div>
  );
};

export default Cart;
