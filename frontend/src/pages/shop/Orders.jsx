import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/shop/orderSlice";

const Orders = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const userId = user?.id || localStorage.getItem("userId");
  const { orders, isLoading, error } = useSelector((state) => state.order);
  useEffect(() => {
    if (userId) {
      dispatch(fetchOrders(userId));
    }
  }, [dispatch, userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h3 className="text-2xl text-gray-700 font-semibold">YOUR ORDERS</h3>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id}>
            {order.cartItems.map((cart) => (
              <div key={cart.productId} className="border gap-2 my-2 flex">
                <img src={cart.image} className="w-40 " />
                <div className="flex  text-gray-700 flex-col">
                  <p className=" text-lg py-2  font-semibold">{cart.title}</p>
                  <div className="flex text-lg font-medium gap-4 items-center">
                    <p className=""> ₹ {order.totalAmount}</p>
                    <p className=""> Quantity: {cart.quantity}</p>
                  </div>
                  <p className=" py-2">
                    Payment:
                    <span className="text-gray-500 px-2">
                      {order.paymentMethod}
                    </span>
                  </p>
                  <div className="flex text-sm items-center ">
                    <p className=" h-1 w-1 p-1 bg-green-600 rounded-full"></p>{" "}
                    <p className=" px-1 text-green-600"> {order.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default Orders;
